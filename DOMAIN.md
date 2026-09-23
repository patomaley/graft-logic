# Custom domain prep — kintsugiai.com.au

Docs only. Do **not** purchase or register the domain from this repo. Intern owns DNS (Crazy Domains / registrar). Wire the domain in Vercel once DNS is ready.

## When Intern has DNS access

1. **Vercel → Project → Settings → Domains**
   - Project: the Kintsugi AI deployment (currently `kintsugiai.vercel.app`)
   - Add domain: `kintsugiai.com.au`
   - Optionally also add: `www.kintsugiai.com.au` (redirect → apex, or vice versa — pick one canonical)

2. **DNS records Intern will set** (exact values come from the Vercel Domains UI after step 1 — copy from there)

   Typical Vercel pattern for an apex + www:

   | Host / Name | Type | Value (example — use Vercel’s) |
   |---|---|---|
   | `@` (apex) | `A` | `76.76.21.21` |
   | `www` | `CNAME` | `cname.vercel-dns.com` |

   If Vercel instead shows nameserver delegation or a different A/AAAA/CNAME set, use **those** values — do not invent records.

3. **SSL**
   - Vercel issues the certificate automatically once DNS verifies. No manual cert step.

4. **Leave alone**
   - Do not buy the domain from Vercel / buy Domains / Crazy Domains purchase flows in this pass.
   - Do not call Vercel APIs to add the domain from agents.
   - Existing `*.vercel.app` URL stays live until cutover.

## After DNS propagates

- Confirm https://kintsugiai.com.au loads the one-pager.
- Confirm enquire form still posts to `/api/enquiry`.
- Optional: set the canonical / `metadataBase` URL to the custom domain in `app/layout.tsx` once live.
