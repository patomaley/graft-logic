# never-miss (marketing one-pager)

Patrick’s Adelaide site: **process-first AI** for phone-first SA service firms. Learn the work by doing it, map how jobs move, automate the friction. Repo name is historical; “never miss an enquiry” is an example transferable pattern on the page — not the whole offer.

Stack: Next.js 15 App Router + Tailwind + TypeScript. Enquiry form → `POST /api/enquiry`. No CMS. No secrets in repo.

## Local

```bash
cp .env.example .env.local
# FORM_ENDPOINT *or* RESEND_API_KEY + CONTACT_TO
npm install
npm run dev
```

Scripts: `dev`, `build`, `start`, `lint`.

## Enquiry delivery

1. `FORM_ENDPOINT` set → POST JSON (Formspree / Getform).
2. Else `RESEND_API_KEY` + `CONTACT_TO` → Resend (`RESEND_FROM` optional).
3. Else → HTTP 503 with clear config error.

## Deploy on Vercel

1. vercel.com → Add New → Import Git Repository → **patomaley/never-miss**
2. Framework Preset: **Next.js** (auto)
3. Settings → Environment Variables: `FORM_ENDPOINT` **or** `RESEND_API_KEY` + `CONTACT_TO` (+ optional `RESEND_FROM`)
4. Deploy → copy production URL

## Branch

`forge/one-pager` → PR into `main`.
