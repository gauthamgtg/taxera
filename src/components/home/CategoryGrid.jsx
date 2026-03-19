import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  Building2,
  Landmark,
  Lightbulb,
  Receipt,
  RefreshCw,
  Shield,
  Users,
  Zap,
} from 'lucide-react';
import { CATEGORY_ICONS } from '../../config';
import { SERVICES_DATA } from '../../data/servicesData';

const ICONS = {
  Building2,
  Receipt,
  Landmark,
  RefreshCw,
  Shield,
  Users,
  Briefcase,
  Lightbulb,
  Zap,
};

const CATEGORY_CONTEXT = {
  reg: {
    eyebrow: 'Launch & setup',
    statement: 'Entity formation, statutory registrations, and essential setup work for founders who need a clean start.',
    buyer: 'Best for new companies, founders formalising operations, and teams opening new business lines.',
    focus: ['Company registration', 'GST and startup registrations', 'Core legal setup'],
  },
  gst: {
    eyebrow: 'GST operations',
    statement: 'Registration, returns, LUT, refunds, and corrective GST work managed through one consistent filing rhythm.',
    buyer: 'Best for businesses selling across states, exporters, and teams cleaning up GST exposure.',
    focus: ['GST registration', 'Returns and annual filing', 'Refunds and replies'],
  },
  tax: {
    eyebrow: 'Direct tax',
    statement: 'Income tax, TDS, and business tax filing support for companies, founders, and recurring compliance teams.',
    buyer: 'Best for businesses that want timely filings, cleaner records, and fewer tax-season surprises.',
    focus: ['Business ITR', 'TDS returns', 'Tax notices and cleanup'],
  },
  mca: {
    eyebrow: 'ROC compliance',
    statement: 'Annual ROC, event-based filings, and MCA housekeeping handled with documentation discipline.',
    buyer: 'Best for private limited companies and LLPs that need dependable ROC ownership year-round.',
    focus: ['Annual ROC filing', 'DIR and share filings', 'MCA status cleanup'],
  },
  dsc: {
    eyebrow: 'Signing access',
    statement: 'Digital signature issuance and renewal support so filings do not stall on access or authorisation.',
    buyer: 'Best for directors, authorised signatories, and teams preparing statutory filings.',
    focus: ['DSC issue', 'DSC renewal', 'Director signing support'],
  },
  payroll: {
    eyebrow: 'People compliance',
    statement: 'Payroll processing, PF, ESI, and employee compliance for lean teams that want dependable monthly operations.',
    buyer: 'Best for growing companies that need salary processing and employer filings under one cadence.',
    focus: ['Payroll processing', 'PF and ESI filings', 'Monthly employee compliance'],
  },
  accounting: {
    eyebrow: 'Books & MIS',
    statement: 'Bookkeeping, reconciliations, and management reporting that make filings and finance review easier.',
    buyer: 'Best for founders who need stronger books before audits, tax filing, or investor reporting.',
    focus: ['Bookkeeping', 'Monthly closure support', 'MIS and reconciliations'],
  },
  advisory: {
    eyebrow: 'Finance leadership',
    statement: 'Virtual CFO, projections, and finance operating support for businesses scaling beyond ad hoc reporting.',
    buyer: 'Best for teams that want better cash visibility, reporting structure, and finance decision support.',
    focus: ['Virtual CFO', 'Forecasting and budgeting', 'Finance process design'],
  },
  notices: {
    eyebrow: 'Notice handling',
    statement: 'Replies, reconciliations, and filing follow-up when GST, income tax, or MCA notices need controlled action.',
    buyer: 'Best for teams handling scrutiny, mismatches, or time-sensitive compliance escalations.',
    focus: ['GST notices', 'Income tax notices', 'Response support'],
  },
};

export function CategoryGrid() {
  const [activeCategoryId, setActiveCategoryId] = useState(SERVICES_DATA[0]?.id ?? '');
  const activeCategory = SERVICES_DATA.find((category) => category.id === activeCategoryId) ?? SERVICES_DATA[0];
  const context = CATEGORY_CONTEXT[activeCategory.id] ?? CATEGORY_CONTEXT.reg;
  const featuredServices = activeCategory.services.slice(0, 3);
  const trailingServices = activeCategory.services.slice(3, 9);
  const ActiveIcon = ICONS[CATEGORY_ICONS[activeCategory.id]] || Building2;

  return (
    <section id="categories" className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-14 mx-auto h-72 max-w-6xl rounded-full bg-blue-300/18 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div>
            <span className="section-label mb-3 block text-xs font-semibold uppercase">Service Architecture</span>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              A coordinated desk for registration, tax, payroll, accounting, and notices.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-900/65">
              Explore Taxera by operating need, not just by filing name. Each service track is built to keep documentation, execution, and follow-through under one coordinated workflow.
            </p>

            <div className="mt-8 space-y-3">
              {[
                'Built for founders, operators, finance teams, and growing companies in India.',
                'Stronger continuity than using separate freelancers or disconnected vendors.',
                'Direct routes into category pages and service-level pages for high-intent buyers.',
              ].map((item) => (
                <div key={item} className="editorial-panel rounded-[1.45rem] px-4 py-3 text-sm leading-relaxed text-blue-900/70">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="ink-panel overflow-hidden rounded-[2.4rem] p-5 text-white md:p-6">
            <div className="flex flex-wrap gap-2.5">
              {SERVICES_DATA.map((category) => {
                const isActive = category.id === activeCategory.id;
                const Icon = ICONS[CATEGORY_ICONS[category.id]] || Building2;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-left text-sm transition-all ${
                      isActive
                        ? 'border-cyan-200/35 bg-white/14 text-white shadow-[0_14px_30px_rgba(34,211,238,0.12)]'
                        : 'border-blue-200/14 bg-white/6 text-blue-100/76 hover:border-blue-200/26 hover:bg-white/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-semibold">{category.name}</span>
                    <span className="text-[11px] text-blue-100/52">{category.services.length}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[0.84fr_1.16fr]">
              <div className="rounded-[1.9rem] border border-blue-200/16 bg-white/8 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-blue-200/16 bg-white/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-blue-100/62">
                    {activeCategory.num}
                  </span>
                </div>

                <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-blue-100/54">{context.eyebrow}</p>
                <h3 className="mt-2 text-[1.9rem] font-semibold leading-tight text-white">{activeCategory.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-blue-100/74">{context.statement}</p>

                <div className="mt-6 rounded-[1.45rem] border border-blue-200/16 bg-white/6 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blue-100/54">Best fit</p>
                  <p className="mt-2 text-sm leading-relaxed text-blue-100/80">{context.buyer}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {context.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-200/16 bg-white/6 px-3 py-2 text-[11px] font-medium text-blue-100/78"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/services/${activeCategory.id}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-blue-950 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore {activeCategory.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-4">
                <div className="editorial-panel rounded-[1.9rem] p-5 text-blue-950">
                  <div className="mb-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700/50">Priority routes</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-blue-950">Start with the highest-intent workflows in this desk.</h3>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
                      {activeCategory.services.length} total services
                    </span>
                  </div>

                  <div className="grid gap-3">
                    {featuredServices.map((service, index) => (
                      <Link
                        key={service.slug}
                        to={`/services/${activeCategory.id}/${service.slug}`}
                        className="group rounded-[1.5rem] border border-blue-100 bg-white/88 px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/70"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-xs font-semibold text-white shadow-lg shadow-blue-700/15">
                            0{index + 1}
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-base font-semibold leading-snug text-blue-950">{service.name}</p>
                              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-700">
                                {service.type}
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-blue-900/64">{service.desc}</p>
                            <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 transition-all group-hover:gap-3">
                              View service
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 rounded-[1.8rem] border border-blue-200/16 bg-white/6 p-4">
                  {trailingServices.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${activeCategory.id}/${service.slug}`}
                      className="rounded-full border border-blue-200/16 bg-white/8 px-3.5 py-2 text-xs font-semibold text-blue-100/82 transition-colors hover:border-blue-200/26 hover:bg-white/12"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
