import { EnquiryForm } from "@/components/EnquiryForm";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-[40rem] flex-col justify-center px-5 py-12 sm:px-6">
      <main className="space-y-10">
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
    </div>
  );
}
