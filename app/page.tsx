import { EnquiryForm } from "@/components/EnquiryForm";
import { SITE_NAME } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-[38rem] flex-col px-6 py-10 sm:max-w-[42rem] sm:px-10 sm:py-16">
      <header className="rise mb-12 sm:mb-16">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-px w-6 bg-[var(--copper)]/80 sm:w-8"
          />
          <p className="brand-mark text-[0.68rem] font-bold uppercase text-[var(--ink-soft)]">
            {SITE_NAME}
          </p>
        </div>
      </header>

      <main className="flex flex-1 flex-col justify-center gap-10 sm:gap-14">
        <h1 className="display rise rise-delay text-[2.35rem] leading-[1.05] text-[var(--ink)] sm:text-[3.35rem] sm:leading-[1.02]">
          See how AI can transform your business.
        </h1>

        <section
          id="enquire"
          className="enquire-panel rise rise-delay-2 relative overflow-hidden rounded-lg border border-[var(--band-edge)] p-6 sm:p-9"
          aria-labelledby="enquire-h"
        >
          <div
            aria-hidden
            className="enquire-accent absolute inset-x-8 top-0 h-px sm:inset-x-12"
          />
          <h2
            id="enquire-h"
            className="display text-[1.95rem] leading-[1.1] text-[var(--cream)] sm:text-[2.4rem]"
          >
            Enquire
          </h2>
          <div className="mt-7 sm:mt-9">
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="mt-14 border-t border-[var(--rule)]/50 pt-6 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink-soft)] sm:mt-20">
        <p>{SITE_NAME}</p>
      </footer>
    </div>
  );
}
