import { NextResponse } from "next/server";
import { validateEnquiry, type EnquiryPayload } from "@/lib/enquiry";

export const runtime = "nodejs";

/**
 * Google Forms formResponse POST.
 * Env (set on Vercel):
 *   GOOGLE_FORM_ACTION_URL  — …/formResponse
 *   GOOGLE_FORM_ENTRY_NAME
 *   GOOGLE_FORM_ENTRY_BUSINESS
 *   GOOGLE_FORM_ENTRY_EMAIL
 *   GOOGLE_FORM_ENTRY_PHONE
 *   GOOGLE_FORM_ENTRY_COMMENT
 */
function googleFormConfig():
  | {
      action: string;
      entries: {
        name: string;
        businessName: string;
        email: string;
        phone: string;
        comment: string;
      };
    }
  | null {
  const action = process.env.GOOGLE_FORM_ACTION_URL?.trim();
  const name = process.env.GOOGLE_FORM_ENTRY_NAME?.trim();
  const businessName = process.env.GOOGLE_FORM_ENTRY_BUSINESS?.trim();
  const email = process.env.GOOGLE_FORM_ENTRY_EMAIL?.trim();
  const phone = process.env.GOOGLE_FORM_ENTRY_PHONE?.trim();
  const comment = process.env.GOOGLE_FORM_ENTRY_COMMENT?.trim();

  if (!action || !name || !businessName || !email || !phone || !comment) {
    return null;
  }

  return {
    action,
    entries: { name, businessName, email, phone, comment },
  };
}

async function sendViaGoogleForm(data: EnquiryPayload): Promise<Response> {
  const cfg = googleFormConfig();
  if (!cfg) {
    throw new Error("Google Form not configured");
  }

  const body = new URLSearchParams();
  body.set(cfg.entries.name, data.name);
  body.set(cfg.entries.businessName, data.businessName);
  body.set(cfg.entries.email, data.email);
  body.set(cfg.entries.phone, data.phone);
  body.set(cfg.entries.comment, data.comment ?? "");

  return fetch(cfg.action, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    redirect: "manual",
  });
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "Invalid JSON body." } },
      { status: 400 },
    );
  }

  const validated = validateEnquiry(json);
  if (!validated.ok) {
    return NextResponse.json(
      { ok: false, errors: validated.errors },
      { status: 400 },
    );
  }

  if (!googleFormConfig()) {
    return NextResponse.json(
      {
        ok: false,
        errors: {
          form: "Enquiry delivery is not configured yet. Set GOOGLE_FORM_ACTION_URL and GOOGLE_FORM_ENTRY_* env vars.",
        },
      },
      { status: 503 },
    );
  }

  try {
    const upstream = await sendViaGoogleForm(validated.data);
    // Google often returns 200 or 302 on success
    if (upstream.status >= 400) {
      const detail = await upstream.text().catch(() => "");
      console.error("Google Form error", upstream.status, detail.slice(0, 500));
      return NextResponse.json(
        {
          ok: false,
          errors: { form: "Could not submit enquiry. Try again shortly." },
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("enquiry submit failed", err);
    return NextResponse.json(
      {
        ok: false,
        errors: { form: "Could not send enquiry. Try again shortly." },
      },
      { status: 502 },
    );
  }
}
