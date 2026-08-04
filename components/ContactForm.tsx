"use client";

import { useRef, useState, type DragEvent } from "react";

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
// Photos are downscaled in the browser before upload: keeps the request well
// under serverless body limits (Vercel: ~4.5 MB) and email attachment caps,
// and "is this watch interesting?" snapshots don't need print resolution.
const COMPRESS_ABOVE_BYTES = 600 * 1024;
const MAX_DIMENSION = 1600;
const JPEG_QUALITY = 0.72;

async function compressImage(file: File): Promise<File> {
  if (!file.type.startsWith("image/") || file.size < COMPRESS_ABOVE_BYTES) {
    return file;
  }
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY)
    );
    if (!blob || blob.size >= file.size) return file;
    return new File([blob], file.name.replace(/\.[^.]+$/, "") + ".jpg", {
      type: "image/jpeg",
    });
  } catch {
    // Format the browser can't decode (e.g. HEIC outside Safari) — send as-is.
    return file;
  }
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [invalid, setInvalid] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const readFiles = (list: FileList | null) => {
    const arr = Array.from(list ?? []);
    if (arr.length > MAX_FILES) {
      setError("Maximum 5 photographs");
      return;
    }
    if (arr.some((f) => f.size > MAX_FILE_BYTES)) {
      setError("Each photograph must be under 10 MB");
      return;
    }
    setError(null);
    setFiles(arr);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    readFiles(e.dataTransfer?.files ?? null);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot — bots fill it, humans never see it
    if (data.get("company")) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const missing: string[] = [];
    if (!name) missing.push("name");
    if (!email) missing.push("email");
    if (!message) missing.push("message");
    if (missing.length) {
      setInvalid(missing);
      setError("Name, email and a message, please");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setInvalid(["email"]);
      setError("That email address looks incomplete");
      return;
    }

    setInvalid([]);
    setError(null);
    setStatus("sending");

    const payload = new FormData();
    payload.set("name", name);
    payload.set("email", email);
    payload.set("message", message);
    const compressed = await Promise.all(files.map(compressImage));
    compressed.forEach((f) => payload.append("files", f));

    try {
      const res = await fetch("/api/contact", { method: "POST", body: payload });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError("Something went wrong — please email me directly");
    }
  };

  if (status === "sent") {
    return (
      <div className="form__success">
        <p className="form__success-text">Thank you. I will be in touch shortly.</p>
        <div className="form__success-rule" />
      </div>
    );
  }

  return (
    <form ref={formRef} className="form" onSubmit={submit} noValidate>
      <div className="form__hp" aria-hidden="true">
        <label htmlFor="mt-company">Company</label>
        <input
          id="mt-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="field">
        <label className="field__label" htmlFor="mt-name">
          Name
        </label>
        <input
          className={`field__input ${invalid.includes("name") ? "field__input--invalid" : ""}`}
          id="mt-name"
          name="name"
          type="text"
          autoComplete="name"
        />
      </div>

      <div className="field">
        <label className="field__label" htmlFor="mt-email">
          Email
        </label>
        <input
          className={`field__input ${invalid.includes("email") ? "field__input--invalid" : ""}`}
          id="mt-email"
          name="email"
          type="email"
          autoComplete="email"
        />
      </div>

      <div className="field">
        <label className="field__label" htmlFor="mt-message">
          Message
        </label>
        <textarea
          className={`field__input ${invalid.includes("message") ? "field__input--invalid" : ""}`}
          id="mt-message"
          name="message"
          rows={4}
        />
      </div>

      <div className="field" style={{ gap: 12 }}>
        <span className="field__label" id="mt-files-label">
          Photographs — optional
        </span>
        <label
          htmlFor="mt-files"
          className={`drop ${dragOver ? "drop--over" : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
        >
          <span className="drop__hint">
            Drop images here, or click to choose — up to 5 files, 10 MB each
          </span>
        </label>
        <input
          ref={fileInputRef}
          className="drop__input"
          id="mt-files"
          name="files"
          type="file"
          accept="image/*"
          multiple
          aria-labelledby="mt-files-label"
          onChange={(e) => readFiles(e.target.files)}
        />
        {files.length > 0 && (
          <div className="drop__list">{files.map((f) => f.name).join("  ·  ")}</div>
        )}
      </div>

      {error && (
        <div className="form__error" role="alert">
          {error}
        </div>
      )}

      <div className="form__submit-row">
        <button className="submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
