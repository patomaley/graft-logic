"use client";

import { FormEvent, useState } from "react";
import type { EnquiryFieldErrors } from "@/lib/enquiry";

type Status = "idle" | "submitting" | "success" | "error";

const fields = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  {
    name: "businessName",
    label: "Business name",
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
        className="rounded-sm border border-[var(--ink)]/20 bg-[var(--cream)] p-6"
        role="status"
      >
        <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
          Got it.
        </p>
        <p className="mt-3 text-[var(--ink-soft)] leading-relaxed">
          Thanks — I’ll reply soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.name} className="block sm:col-span-1">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
              {f.label}
              {f.required ? " *" : ""}
            </span>
            <input
              name={f.name}
              type={f.type}
              required={f.required}
              autoComplete={f.autoComplete}
              disabled={status === "submitting"}
              className="w-full rounded-sm border border-[var(--ink)]/25 bg-[var(--cream)] px-3 py-2.5 text-[var(--ink)] outline-none ring-[var(--rust)] focus:ring-2 disabled:opacity-60"
              aria-invalid={Boolean(errors[f.name])}
              aria-describedby={errors[f.name] ? `${f.name}-err` : undefined}
            />
            {errors[f.name] ? (
              <span
                id={`${f.name}-err`}
                className="mt-1 block text-sm text-[var(--rust)]"
              >
                {errors[f.name]}
              </span>
            ) : null}
          </label>
        ))}
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
          Comment (optional)
        </span>
        <textarea
          name="comment"
          rows={4}
          disabled={status === "submitting"}
          className="w-full resize-y rounded-sm border border-[var(--ink)]/25 bg-[var(--cream)] px-3 py-2.5 text-[var(--ink)] outline-none ring-[var(--rust)] focus:ring-2 disabled:opacity-60"
          aria-invalid={Boolean(errors.comment)}
        />
        {errors.comment ? (
          <span className="mt-1 block text-sm text-[var(--rust)]">
            {errors.comment}
          </span>
        ) : null}
      </label>

      {errors.form ? (
        <p className="text-sm text-[var(--rust)]" role="alert">
          {errors.form}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-[var(--ink)] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--paper)] transition hover:bg-[var(--rust)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rust)] disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Enquire"}
      </button>
    </form>
  );
}
