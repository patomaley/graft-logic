import { EnquiryForm } from "@/components/EnquiryForm";

const tiers = [
  {
    n: "01",
    title: "AI Opportunity Audit",
    price: "$1,500",
    body: "90 minutes. Plain-English report: where time and revenue leak, what to fix first, fixed-price quote for that build. Free if I can’t find ≥5 hrs/week automatable work.",
  },
  {
    n: "02",
    title: "Pilot — “Never miss an enquiry”",
    price: "$3,000–8,000",
    body: "One workflow live in 2–4 weeks: instant lead response + missed-call capture (SMS-first). Fixed price, written success measure, 30-day outcome guarantee.",
  },
  {
    n: "03",
    title: "Retainer",
    price: "$500–2,000/month",
    body: "Keep it running, improve it, add the next workflow when ready.",
  },
] as const;

const notThis = [
  "Strategy decks",
  "Training-as-product",
  "Voice-as-v1",
  "CRM rebuilds",
  "Regulated/certified outputs",
] as const;

export default function Home() {
  return (
    <div className="mx-auto max-w-[42rem] px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
      <header className="mb-12 flex items-baseline justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
          Adelaide · AUD
        </p>
        <a
          href="#enquire"
          className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--rust)] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--rust)]"
        >
          Enquire
        </a>
      </header>

      <main className="space-y-14 sm:space-y-16">
        {/* HERO — locked Outbox copy */}
        <section aria-labelledby="hero-h">
          <h1
            id="hero-h"
            className="display text-[2.35rem] leading-[1.12] text-[var(--ink)] sm:text-[3.1rem]"
          >
            Missed calls and slow replies cost jobs.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
            I build the system that answers every enquiry in under a minute —
            text-first, for Adelaide service firms — then a real person follows
            up.
          </p>
        </section>

        <div className="rule" />

        {/* TIERS */}
        <section aria-labelledby="tiers-h">
          <h2
            id="tiers-h"
            className="display text-2xl text-[var(--ink)] sm:text-3xl"
          >
            What you get
          </h2>
          <ul className="mt-8 space-y-8">
            {tiers.map((t) => (
              <li key={t.n} className="grid grid-cols-[3rem_1fr] gap-3">
                <span className="pt-1 font-mono text-xs text-[var(--ink-soft)]">
                  {t.n}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-[var(--ink)]">
                      {t.title}
                    </h3>
                    <span className="font-mono text-sm text-[var(--rust)]">
                      {t.price}
                    </span>
                  </div>
                  <p className="mt-2 leading-relaxed text-[var(--ink-soft)]">
                    {t.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="rule" />

        {/* WHO + NOT THIS */}
        <section className="grid gap-10 sm:grid-cols-2" aria-label="Fit">
          <div>
            <h2 className="display text-2xl text-[var(--ink)]">Who it’s for</h2>
            <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">
              SA phone-first service firms ~2–20 staff (trades, allied health,
              legal, real estate, surveyors) where a missed call or slow web
              form costs a job.
            </p>
          </div>
          <div>
            <h2 className="display text-2xl text-[var(--ink)]">Not this</h2>
            <ul className="mt-4 space-y-2 text-[var(--ink-soft)]">
              {notThis.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-[var(--rust)]">
                    ×
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FOUNDER */}
        <section
          className="rounded-sm border border-[var(--ink)]/15 bg-[var(--cream)]/70 p-6"
          aria-labelledby="founding-h"
        >
          <h2 id="founding-h" className="display text-xl text-[var(--ink)]">
            Founding slots
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">
            First two clients = founding slots — discounted build for a
            publishable case study (they approve what’s public).
          </p>
        </section>

        {/* CTA FORM */}
        <section
          id="enquire"
          className="rounded-sm bg-[var(--band)] p-6 text-[var(--paper)] sm:p-8"
          aria-labelledby="enquire-h"
        >
          <h2 id="enquire-h" className="display text-3xl text-[var(--paper)]">
            Book a 90-minute discovery
          </h2>
          <p className="mt-3 max-w-md leading-relaxed text-[var(--paper)]/75">
            Bring whoever owns the phones and the job book.
          </p>
          <div className="mt-8 [&_label_span]:text-[var(--paper)]/55 [&_input]:border-[var(--paper)]/20 [&_input]:bg-[var(--cream)] [&_input]:text-[var(--ink)] [&_textarea]:border-[var(--paper)]/20 [&_textarea]:bg-[var(--cream)] [&_textarea]:text-[var(--ink)] [&_button]:bg-[var(--rust)] [&_button]:text-[var(--paper)] [&_button:hover]:bg-[#b45309] [&_[role=status]]:border-[var(--paper)]/20 [&_[role=status]]:bg-[var(--cream)] [&_[role=status]_p]:text-[var(--ink)] [&_[role=alert]]:text-[#fecaca]">
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="mt-14 border-t border-[var(--rule)] pt-6 text-sm text-[var(--ink-soft)]">
        <p>Adelaide, South Australia. Patrick — personal trading. AUD.</p>
      </footer>
    </div>
  );
}
