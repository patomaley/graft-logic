# Never Miss an Enquiry

One-pager for **Never Miss an Enquiry** — Patrick (patomaley), Adelaide.

Stack: Next.js 15 App Router + Tailwind + TypeScript. Enquiry form → `/api/enquiry` (Vercel serverless). No CMS. No secrets in repo.

Copy is locked from Outbox homepage (`app/page.tsx`).

## Local

```bash
cp .env.example .env.local
# set FORM_ENDPOINT *or* RESEND_API_KEY + CONTACT_TO
npm install
npm run dev
```

Scripts: `dev`, `build`, `start`, `lint`.

## Enquiry delivery

Route: `POST /api/enquiry`

1. If `FORM_ENDPOINT` is set → POST JSON there (Formspree / Getform). Ship before Resend.
2. Else if `RESEND_API_KEY` + `CONTACT_TO` → email via Resend (`RESEND_FROM` optional).
3. Else → HTTP 503 with a clear config error (no silent drop).

Fields: name, business name, email, phone (required); comment (optional). Server-validated.

## Deploy on Vercel

1. [vercel.com](https://vercel.com) → **Add New** → **Import Git Repository** → **patomaley/never-miss**
2. Framework Preset: **Next.js** (auto)
3. **Settings → Environment Variables** — add either:
   - `FORM_ENDPOINT` = your Formspree/Getform URL, **or**
   - `RESEND_API_KEY`, `CONTACT_TO` (and optional `RESEND_FROM`)
4. **Deploy**
5. Copy the production URL

No other env vars needed for v1.

## Branch

`forge/one-pager` → PR into `main`.
