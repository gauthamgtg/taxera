import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

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

const PRIORITY_SERVICE_LINKS = [
  ['websites', 'website-design-development'],
  ['websites', 'website-audit'],
  ['growth', 'seo-optimization-retainer'],
  ['decks', 'ppt-making'],
  ['decks', 'pitch-deck-creation'],
  ['analytics', 'executive-dashboard-creation'],
  ['automation', 'ai-automation-implementation'],
  ['automation', 'chatbot-integration-website-whatsapp'],
].map(([categoryId, serviceSlug]) => {
  const category = SERVICES_DATA.find((item) => item.id === categoryId);
  const service = category?.services.find((item) => item.slug === serviceSlug);

  if (!category || !service) return null;

  return {
    categoryId,
    serviceSlug,
    name: service.name,
  };
}).filter(Boolean);

export function HomeFaq() {
  return (
    <section className="relative px-4 py-24 md:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-10 mx-auto h-64 max-w-5xl rounded-full bg-blue-200/18 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="section-label mb-3 block text-xs font-semibold uppercase">FAQs</span>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              Answers for buyers comparing Business OS partners and finance/compliance desks.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-900/65">
              These are the common questions founders and operators ask before choosing one partner to handle both front-end growth systems and back-end financial operations.
            </p>

            <div className="ink-panel mt-8 rounded-[1.9rem] p-5 text-white">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-blue-100/54">Priority pages</p>
                  <p className="mt-2 text-base font-semibold leading-snug text-white">
                    Go straight to the highest-intent service pages from the homepage.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {PRIORITY_SERVICE_LINKS.map((service) => (
                  <Link
                    key={`${service.categoryId}/${service.serviceSlug}`}
                    to={`/services/${service.categoryId}/${service.serviceSlug}`}
                    className="rounded-full border border-blue-200/16 bg-white/8 px-3.5 py-2 text-xs font-semibold text-blue-100/82 transition-colors hover:border-blue-200/26 hover:bg-white/12"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {HOME_FAQS.map((faq, index) => (
              <div
                key={faq.question}
                className={`editorial-panel rounded-[1.8rem] p-6 ${
                  index === 0 ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(238,246,255,0.92))]' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-3xl text-lg font-semibold leading-snug text-blue-950 md:text-xl">{faq.question}</h3>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/15">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-blue-900/66">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
