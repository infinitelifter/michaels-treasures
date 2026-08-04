import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  const data = await request.formData();

  // honeypot: silently accept so bots think they succeeded
  if (data.get("company")) return NextResponse.json({ ok: true });

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const files = data.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (files.length > MAX_FILES || files.some((f) => f.size > MAX_FILE_BYTES)) {
    return NextResponse.json(
      { ok: false, error: "Too many or too large files" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured yet (e.g. local dev): log so the enquiry isn't lost
    // silently, but tell the visitor something went wrong so they use email.
    console.warn("[contact] RESEND_API_KEY is not set — enquiry NOT delivered:", {
      name,
      email,
      message,
      files: files.map((f) => f.name),
    });
    return NextResponse.json(
      { ok: false, error: "Email delivery is not configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const attachments = await Promise.all(
    files.map(async (f) => ({
      filename: f.name,
      content: Buffer.from(await f.arrayBuffer()),
    }))
  );

  const { error } = await resend.emails.send({
    // The from address must be on the domain verified in Resend.
    from: process.env.CONTACT_FROM ?? `Michael's Treasures <enquiry@praguevintagewatches.com>`,
    to: process.env.CONTACT_TO ?? site.email,
    replyTo: email,
    subject: `Website enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
      "",
      files.length
        ? `Photographs attached: ${files.map((f) => f.name).join(", ")}`
        : "No photographs attached.",
      "",
      "— sent from the contact form at " + site.url,
    ].join("\n"),
    attachments,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { ok: false, error: "Delivery failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
