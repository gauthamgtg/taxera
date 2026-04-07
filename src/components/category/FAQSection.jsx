import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="section-label mb-3 block text-xs font-semibold uppercase">FAQ</span>
          <h2 className="text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-base leading-relaxed text-blue-900/70">
            If you still have a question after this, message us directly and we will map your exact route.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="overflow-hidden rounded-[1.4rem] border border-blue-100 bg-white shadow-[0_16px_34px_rgba(14,52,126,0.08)]">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-blue-50/65"
              >
                <span className="pr-4 text-sm font-semibold text-blue-950">{faq.question}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-blue-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i ? (
                <div className="px-5 pb-5">
                  <div className="rounded-xl border border-blue-100 bg-blue-50/55 p-4">
                    <p className="text-sm leading-relaxed text-blue-900/72">{faq.answer}</p>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
