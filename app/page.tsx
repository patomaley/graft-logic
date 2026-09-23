import { EnquiryForm } from "@/components/EnquiryForm";

export default function Home() {
  return (
    <div className="mx-auto max-w-[40rem] px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
      <header className="mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
          Adelaide · Patrick
        </p>
      </header>

      <main className="space-y-12">
        <section aria-labelledby="hero-h">
          <h1
            id="hero-h"
            className="display text-[2.35rem] leading-[1.1] text-[var(--ink)] sm:text-[3.15rem]"
          >
            See how AI can transform your business.
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
            I work with Adelaide businesses one at a time — starting with people
            I know, like Hennig &amp; Co — to learn how the work actually runs,
            then build AI that helps.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
            No package to buy. We talk first, figure out if there’s a fit, and
            only then agree what to build and what it costs.
          </p>
        </section>

        <section
          id="enquire"
          className="rounded-sm bg-[var(--band)] p-6 text-[var(--paper)] sm:p-8"
          aria-labelledby="enquire-h"
        >
          <h2 id="enquire-h" className="display text-3xl text-[var(--paper)]">
            Enquire
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
        <p>Adelaide, South Australia.</p>
      </footer>
    </div>
  );
}
