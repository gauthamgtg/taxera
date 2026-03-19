import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

export const HOME_FAQS = [
  {
    question: 'What services does Taxera provide across India?',
    answer:
      'Taxera supports business registration, GST registration and filing, income tax filing, ROC compliance, payroll processing, bookkeeping, notice replies, and virtual CFO support for businesses operating in India.',
  },
  {
    question: 'Can one team handle registration, GST, tax, ROC, payroll, and bookkeeping together?',
    answer:
      'Yes. Taxera is designed as a single coordinated desk so businesses can manage company setup, tax filing, compliance, payroll, and books without switching between multiple firms or freelancers.',
  },
  {
    question: 'Does Taxera help with overdue filings, notices, and compliance cleanup?',
    answer:
      'Yes. Taxera handles GST notices, income tax notices, ROC delays, return backlogs, and other cleanup work where documentation, response drafting, and filing follow-through need to stay coordinated.',
  },
  {
    question: 'How do I start if I need company registration, GST filing, or ongoing compliance support?',
    answer:
      'Start with a consultation or WhatsApp message describing the business stage and immediate requirement. Taxera will confirm the right service path, required documents, and the next execution steps.',
  },
];

const PRIORITY_SERVICE_LINKS = [
  ['reg', 'private-limited-company-registration'],
  ['reg', 'gst-registration'],
  ['gst', 'gst-return-filing-monthly-quarterly'],
  ['tax', 'business-itr-filing-simple'],
  ['mca', 'annual-roc-filing-small-private-limited'],
  ['payroll', 'payroll-processing-pf-esi-small-company'],
  ['accounting', 'bookkeeping-small-business'],
  ['notices', 'gst-notice-reply'],
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
              Answers for buyers comparing registration, tax, and compliance support in India.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-900/65">
              These are the common questions founders and operators ask before choosing a long-term desk for company registration, GST filing, ROC compliance, payroll, bookkeeping, and notice handling.
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
