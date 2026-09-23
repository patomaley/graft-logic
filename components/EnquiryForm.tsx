"use client";

import { FormEvent, useState } from "react";
import type { EnquiryFieldErrors } from "@/lib/enquiry";

type Status = "idle" | "submitting" | "success" | "error";

const fields = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  {
    name: "businessName",
    label: "Business",
    type: "text",
    required: true,
    autoComplete: "organization",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: true,
    autoComplete: "tel",
  },
] as const;

const labelClass =
  "mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--cream)]/50";
const inputClass =
  "field-input min-h-12 w-full rounded-md border border-[var(--cream)]/18 bg-[var(--cream)] px-3.5 py-3 text-base text-[var(--ink)] outline-none placeholder:text-[var(--ink-soft)]/45 disabled:opacity-60 sm:text-[0.95rem]";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      businessName: String(fd.get("businessName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      comment: String(fd.get("comment") ?? ""),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => null)) as {
        ok?: boolean;
        errors?: EnquiryFieldErrors;
      } | null;

      if (!res.ok || !body?.ok) {
        setErrors(body?.errors ?? { form: "Something went wrong." });
        setStatus("error");
        return;
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setErrors({ form: "Network error. Check your connection and try again." });
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="soft-in rounded-md border border-[var(--cream)]/18 bg-[var(--cream)]/95 px-5 py-6 sm:px-6 sm:py-7"
        role="status"
      >
        <p className="display text-[1.65rem] leading-tight text-[var(--ink)] sm:text-2xl">
          Got it.
        </p>
        <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
          We'll reply soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className={labelClass}>
              {f.label}
              {f.required ? " *" : ""}
            </span>
            <input
              name={f.name}
              type={f.type}
              required={f.required}
              autoComplete={f.autoComplete}
              disabled={status === "submitting"}
              className={inputClass}
              aria-invalid={Boolean(errors[f.name])}
              aria-describedby={errors[f.name] ? `${f.name}-err` : undefined}
            />
            {errors[f.name] ? (
              <span
                id={`${f.name}-err`}
                className="mt-1.5 block text-sm text-[#fecaca]"
              >
                {errors[f.name]}
              </span>
            ) : null}
          </label>
        ))}
      </div>

      <label className="block">
        <span className={labelClass}>Comment (optional)</span>
        <textarea
          name="comment"
          rows={4}
          disabled={status === "submitting"}
          className={`${inputClass} resize-y`}
          aria-invalid={Boolean(errors.comment)}
        />
        {errors.comment ? (
          <span className="mt-1.5 block text-sm text-[#fecaca]">
            {errors.comment}
          </span>
        ) : null}
      </label>

      {errors.form ? (
        <p className="text-sm text-[#fecaca]" role="alert">
          {errors.form}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="cta mt-1 min-h-[3.25rem] w-full rounded-md bg-[var(--rust)] px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cream)] disabled:opacity-60 sm:w-auto sm:min-w-[11rem]"
      >
        {status === "submitting" ? "Sending\u2026" : "Enquire"}
      </button>
    </form>
  );
}
