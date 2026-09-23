export type EnquiryPayload = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  comment?: string;
};

export type EnquiryFieldErrors = Partial<
  Record<"name" | "businessName" | "email" | "phone" | "comment" | "form", string>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(
  raw: unknown,
): { ok: true; data: EnquiryPayload } | { ok: false; errors: EnquiryFieldErrors } {
  if (!raw || typeof raw !== "object") {
    return { ok: false, errors: { form: "Invalid request body." } };
  }
  const b = raw as Record<string, unknown>;
  const errors: EnquiryFieldErrors = {};

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const businessName =
    typeof b.businessName === "string" ? b.businessName.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";
  const comment =
    typeof b.comment === "string" ? b.comment.trim() : undefined;

  if (!name) errors.name = "Name is required.";
  else if (name.length > 120) errors.name = "Name is too long.";

  if (!businessName) errors.businessName = "Business name is required.";
  else if (businessName.length > 160)
    errors.businessName = "Business name is too long.";

  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email.";
  else if (email.length > 200) errors.email = "Email is too long.";

  if (!phone) errors.phone = "Phone is required.";
  else if (phone.length < 6) errors.phone = "Enter a valid phone number.";
  else if (phone.length > 40) errors.phone = "Phone is too long.";

  if (comment && comment.length > 2000)
    errors.comment = "Comment is too long.";

  if (Object.keys(errors).length) return { ok: false, errors };

  return {
    ok: true,
    data: {
      name,
      businessName,
      email,
      phone,
      ...(comment ? { comment } : {}),
    },
  };
}
