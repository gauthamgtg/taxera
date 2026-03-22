import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const HOME_FAQS = [
  {
    question: 'What does Taxera mean by a Business OS?',
    answer:
      'It means Taxera helps build the operating layer behind growth: websites, SEO systems, presentation assets, analytics, dashboards, chatbot integrations, and AI automations that make the business run more cleanly, while keeping finance and compliance under the same desk.',
  },
  {
    question: 'Did Taxera stop offering registration, GST, tax, ROC, payroll, and bookkeeping?',
    answer:
      'No. Those financial and compliance services are still part of the core offer. Taxera now presents both the Business OS layer and the finance/compliance layer together because many businesses need both under one execution desk.',
  },
  {
    question: 'Can one team handle website making, SEO optimization, decks, dashboards, automations, and finance/compliance work together?',
    answer:
      'Yes. That is the point of the model. Taxera is structured as one coordinated desk so businesses do not need separate freelancers for the site, deck, analytics, chatbot, tax, GST, bookkeeping, or compliance work.',
  },
  {
    question: 'Do you also handle audits and optimization work after the first build?',
    answer:
      'Yes. Website audits, conversion audits, SEO optimization, speed fixes, dashboard refinement, automation improvements, notice handling, and finance cleanup work are all part of the stack.',
  },
  {
    question: 'How do I start if I need a website, pitch deck, GST filing, payroll setup, or AI automation support?',
    answer:
      'Start with a consultation or WhatsApp message describing the business stage, current bottleneck, and goal. Taxera will recommend the right service path and the next execution steps across both growth systems and financial operations.',
  },
];

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative px-4 py-24 md:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-10 mx-auto h-64 max-w-5xl rounded-full bg-blue-200/18 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">FAQs</span>
        <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
          Answers to the most common pre-sales questions.
        </h2>
        <p className="mt-5 max-w-4xl text-base leading-relaxed text-blue-900/65">
          Clear answers on scope, execution model, and how the Business OS and finance/compliance workstreams run together.
        </p>

        <div className="mt-8 space-y-3">
          {HOME_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={faq.question} className="editorial-panel overflow-hidden rounded-[1.5rem]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                >
                  <h3 className="text-base font-semibold leading-snug text-blue-950 md:text-lg">{faq.question}</h3>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-blue-900/70 md:px-6">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
