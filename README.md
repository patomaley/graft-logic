# Graft Logic (marketing one-pager)

Public site for **Graft Logic**. Headline + enquire form only. Zero personal names on the page.

Repo folder `never-miss` is historical — not the brand.

Stack: Next.js 15 App Router + Tailwind + TypeScript. Enquiry → Google Form via `POST /api/enquiry`.

## Local

```bash
cp .env.example .env.local
# fill GOOGLE_FORM_ACTION_URL + GOOGLE_FORM_ENTRY_*
npm install
npm run dev
```

## Google Form env

| Var | Meaning |
|---|---|
| `GOOGLE_FORM_ACTION_URL` | `https://docs.google.com/forms/d/e/…/formResponse` |
| `GOOGLE_FORM_ENTRY_NAME` | `entry.…` for Name |
| `GOOGLE_FORM_ENTRY_BUSINESS` | Business |
| `GOOGLE_FORM_ENTRY_EMAIL` | Email |
| `GOOGLE_FORM_ENTRY_PHONE` | Phone |
| `GOOGLE_FORM_ENTRY_COMMENT` | Comment (optional field) |

## Deploy on Vercel

1. Import **patomaley/never-miss**
2. Framework: Next.js
3. Set the six `GOOGLE_FORM_*` env vars
4. Deploy → copy production URL

Branch: `forge/one-pager` → PR into `main`.
