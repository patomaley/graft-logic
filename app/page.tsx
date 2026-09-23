import { EnquiryForm } from "@/components/EnquiryForm";
import { SITE_NAME } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-[36rem] flex-col px-5 py-8 sm:max-w-[40rem] sm:px-8 sm:py-12">
      <header className="mb-8 sm:mb-12">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[var(--ink-soft)]">
          {SITE_NAME}
        </p>
      </header>

      <main className="flex flex-1 flex-col justify-center gap-9 sm:gap-12">
        <h1 className="display text-[2.15rem] leading-[1.08] text-[var(--ink)] sm:text-[3rem] sm:leading-[1.06]">
          See how AI can transform your business.
        </h1>

        <section
          id="enquire"
          className="rounded-md border border-[var(--band-edge)] bg-[var(--band)] p-5 shadow-[0_18px_50px_-28px_rgba(28,20,12,0.55)] sm:p-8"
          aria-labelledby="enquire-h"
        >
          <h2
            id="enquire-h"
            className="display text-[1.85rem] leading-tight text-[var(--paper)] sm:text-[2.25rem]"
          >
            Enquire
          </h2>
          <div className="mt-6 sm:mt-8">
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-[var(--rule)]/70 pt-5 text-xs tracking-wide text-[var(--ink-soft)] sm:mt-14">
        <p>{SITE_NAME}</p>
      </footer>
    </div>
  );
}
