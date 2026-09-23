import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateEnquiry, type EnquiryPayload } from "@/lib/enquiry";
import { SITE_NAME } from "@/lib/site";

export const runtime = "nodejs";

async function sendViaFormEndpoint(
  endpoint: string,
  data: EnquiryPayload,
): Promise<Response> {
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      businessName: data.businessName,
      email: data.email,
      phone: data.phone,
      comment: data.comment ?? "",
      _subject: `${SITE_NAME} enquiry — ${data.businessName}`,
    }),
  });
}

async function sendViaResend(data: EnquiryPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from =
    process.env.RESEND_FROM ?? `${SITE_NAME} <onboarding@resend.dev>`;

  if (!apiKey || !to) {
    throw new Error("Resend not configured");
  }

  const resend = new Resend(apiKey);
  const lines = [
    `Name: ${data.name}`,
    `Business: ${data.businessName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    data.comment ? `Comment:\n${data.comment}` : "Comment: (none)",
  ];

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `${SITE_NAME} enquiry — ${data.businessName}`,
    text: lines.join("\n"),
  });

  if (error) {
    throw new Error(error.message || "Resend send failed");
  }
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

  const { data } = validated;
  const formEndpoint = process.env.FORM_ENDPOINT?.trim();

  try {
    if (formEndpoint) {
      const upstream = await sendViaFormEndpoint(formEndpoint, data);
      if (!upstream.ok) {
        const detail = await upstream.text().catch(() => "");
        console.error("FORM_ENDPOINT error", upstream.status, detail);
        return NextResponse.json(
          {
            ok: false,
            errors: {
              form: "Could not submit enquiry. Try again shortly.",
            },
          },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true });
    }

    if (process.env.RESEND_API_KEY && process.env.CONTACT_TO) {
      await sendViaResend(data);
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      {
        ok: false,
        errors: {
          form: "Enquiry delivery is not configured yet. Set FORM_ENDPOINT or RESEND_API_KEY + CONTACT_TO.",
        },
      },
      { status: 503 },
    );
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
