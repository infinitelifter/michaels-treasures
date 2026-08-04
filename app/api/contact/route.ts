import { NextResponse } from "next/server";

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  const data = await request.formData();

  // honeypot: silently accept so bots think they succeeded
  if (data.get("company")) return NextResponse.json({ ok: true });

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const files = data.getAll("files").filter((f): f is File => f instanceof File);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (files.length > MAX_FILES || files.some((f) => f.size > MAX_FILE_BYTES)) {
    return NextResponse.json({ ok: false, error: "Too many or too large files" }, { status: 400 });
  }

  // TODO: deliver the enquiry. Recommended: Resend (resend.com) or any SMTP
  // provider — send `name`, `email`, `message` and the attached photographs
  // to michael@praguevintagewatches.com. Until then, enquiries are only
  // logged on the server.
  console.log("[contact] enquiry", {
    name,
    email,
    message: message.slice(0, 200),
    files: files.map((f) => `${f.name} (${Math.round(f.size / 1024)} KB)`),
  });

  return NextResponse.json({ ok: true });
}
