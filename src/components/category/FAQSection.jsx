import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">FAQ</span>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel overflow-hidden rounded-[1.5rem]">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-blue-50/60"
              >
                <span className="pr-4 text-sm font-semibold text-blue-950">{faq.question}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-blue-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <div className="rounded-[1.25rem] border border-blue-100 bg-white p-4">
                    <p className="text-sm leading-relaxed text-blue-900/72">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
