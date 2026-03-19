import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function ToolFaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="glass-panel overflow-hidden rounded-[1.5rem]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-blue-50/60"
            >
              <span className="text-sm font-semibold text-blue-950 md:text-base">{faq.question}</span>
              <ChevronDown className={`h-4 w-4 shrink-0 text-blue-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? (
              <div className="px-5 pb-5">
                <div className="rounded-2xl border border-blue-100 bg-white p-4 text-sm leading-relaxed text-blue-900/72">
                  {faq.answer}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

