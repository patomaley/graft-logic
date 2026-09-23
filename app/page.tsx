import { EnquiryForm } from "@/components/EnquiryForm";

const howSteps = [
  {
    n: "1",
    body: "Sit in the process (calls, enquiries, job book, handoffs).",
  },
  {
    n: "2",
    body: "Map where time and jobs leak.",
  },
  {
    n: "3",
    body: "Automate the high-leverage bits — often many small gains stacked, not one magic switch.",
  },
] as const;

const ladder = [
  {
    n: "1",
    title: "AI Opportunity Audit",
    price: "$1,500",
    body: "90 min, plain-English report + fixed-price quote. Free if can’t find ≥5 hrs/week automatable.",
  },
  {
    n: "2",
    title: "Pilot",
    price: "$3,000–8,000",
    body: "One workflow, 2–4 weeks, fixed price, written success measure, 30-day guarantee.",
  },
  {
    n: "3",
    title: "Retainer",
    price: "$500–2,000/month",
    body: "",
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
          Adelaide · AUD · Patrick
        </p>
        <a
          href="#enquire"
          className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--rust)] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--rust)]"
        >
          Enquire
        </a>
      </header>

      <main className="space-y-14 sm:space-y-16">
        {/* HERO — locked */}
        <section aria-labelledby="hero-h">
          <h1
            id="hero-h"
            className="display text-[2.25rem] leading-[1.12] text-[var(--ink)] sm:text-[3rem]"
          >
            I go into your business, learn the work by doing it, map how jobs
            actually move — then automate the friction with AI.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
            Custom to your workflows. Not a cookie-cutter bot pack. Adelaide,
            phone-first service firms.
          </p>
        </section>

        <div className="rule" />

        {/* HOW IT WORKS — locked */}
        <section aria-labelledby="how-h">
          <h2
            id="how-h"
            className="display text-2xl text-[var(--ink)] sm:text-3xl"
          >
            How it works
          </h2>
          <ol className="mt-8 space-y-5">
            {howSteps.map((s) => (
              <li key={s.n} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-mono text-sm text-[var(--rust)]">
                  {s.n}.
                </span>
                <p className="leading-relaxed text-[var(--ink-soft)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="rule" />

        {/* EXAMPLE PATTERN — locked */}
        <section
          className="rounded-sm border border-[var(--ink)]/15 bg-[var(--cream)]/70 p-6"
          aria-labelledby="example-h"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--rust)]">
            Example pattern
          </p>
          <h2
            id="example-h"
            className="display mt-3 text-2xl text-[var(--ink)] sm:text-[1.75rem]"
          >
            One framework that transfers across industries: never miss an
            enquiry
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">
            Instant acknowledgment, SMS-first missed-call capture, a person
            still owns the follow-up. Same shape fits trades, surveyors, allied
            health, small legal, real estate. Your pilot might be that — or
            something else the map shows first.
          </p>
        </section>

        {/* WHAT YOU GET — locked */}
        <section aria-labelledby="get-h">
          <h2
            id="get-h"
            className="display text-2xl text-[var(--ink)] sm:text-3xl"
          >
            What you get
          </h2>
          <ul className="mt-8 space-y-8">
            {ladder.map((t) => (
              <li key={t.n} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="pt-1 font-mono text-sm text-[var(--rust)]">
                  {t.n}.
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
                  {t.body ? (
                    <p className="mt-2 leading-relaxed text-[var(--ink-soft)]">
                      {t.body}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="rule" />

        {/* WHO + NOT THIS — locked */}
        <section className="grid gap-10 sm:grid-cols-2" aria-label="Fit">
          <div>
            <h2 className="display text-2xl text-[var(--ink)]">Who</h2>
            <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">
              SA phone-first service firms ~2–20 staff.
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

        {/* FOUNDER — locked */}
        <section
          className="rounded-sm border border-[var(--ink)]/15 bg-[var(--cream)]/70 p-6"
          aria-labelledby="founding-h"
        >
          <h2 id="founding-h" className="display text-xl text-[var(--ink)]">
            Founding slots
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">
            First two = founding slots — discounted build for publishable case
            study (they approve).
          </p>
        </section>

        {/* CTA FORM — locked */}
        <section
          id="enquire"
          className="rounded-sm bg-[var(--band)] p-6 text-[var(--paper)] sm:p-8"
          aria-labelledby="enquire-h"
        >
          <h2 id="enquire-h" className="display text-3xl text-[var(--paper)]">
            Book a discovery
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--paper)]/70">
            Name · Business · Email · Phone · Comment (optional)
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
