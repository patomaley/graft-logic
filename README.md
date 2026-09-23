# Kintsugi AI (marketing one-pager)

Public site for **Kintsugi AI**. Headline + enquire form only. Zero personal names on the page.

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

1. Import **patomaley/kintsugi-ai** (repo rename from `graft-logic`)
2. Framework: Next.js
3. Set the six `GOOGLE_FORM_*` env vars
4. Deploy → production URL (aim: `kintsugi-ai.vercel.app`)

Branch: `forge/visual-polish` → PR into `main`.
