import { EnquiryForm } from "@/components/EnquiryForm";
import { SITE_NAME } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-[40rem] flex-col px-5 py-10 sm:px-6 sm:py-12">
      <header className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--ink-soft)]">
          {SITE_NAME}
        </p>
      </header>

      <main className="flex flex-1 flex-col justify-center space-y-10">
        <h1 className="display text-[2.35rem] leading-[1.1] text-[var(--ink)] sm:text-[3.15rem]">
          See how AI can transform your business.
        </h1>

        <section
          id="enquire"
          className="rounded-sm bg-[var(--band)] p-6 text-[var(--paper)] sm:p-8"
          aria-labelledby="enquire-h"
        >
          <h2 id="enquire-h" className="display text-3xl text-[var(--paper)]">
            Enquire
          </h2>
          <div className="mt-8 [&_label_span]:text-[var(--paper)]/55 [&_input]:border-[var(--paper)]/20 [&_input]:bg-[var(--cream)] [&_input]:text-[var(--ink)] [&_textarea]:border-[var(--paper)]/20 [&_textarea]:bg-[var(--cream)] [&_textarea]:text-[var(--ink)] [&_button]:bg-[var(--rust)] [&_button]:text-[var(--paper)] [&_button:hover]:bg-[#b45309] [&_[role=status]]:border-[var(--paper)]/20 [&_[role=status]]:bg-[var(--cream)] [&_[role=status]_p]:text-[var(--ink)] [&_[role=alert]]:text-[#fecaca]">
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-[var(--rule)] pt-5 text-sm text-[var(--ink-soft)]">
        <p>{SITE_NAME}</p>
      </footer>
    </div>
  );
}
