import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  Code,
  Landmark,
  Lightbulb,
  LineChart,
  Megaphone,
  Presentation,
  Receipt,
  RefreshCw,
  Shield,
  ShieldAlert,
  TrendingUp,
  Users,
} from 'lucide-react';
import { CATEGORY_ICONS } from '../../config';
import { SERVICES_DATA } from '../../data/servicesData';

const ICONS = {
  Bot,
  Briefcase,
  Building2,
  Code,
  Landmark,
  Lightbulb,
  LineChart,
  Megaphone,
  Presentation,
  Receipt,
  RefreshCw,
  Shield,
  ShieldAlert,
  TrendingUp,
  Users,
};

const BUSINESS_IDS = ['strategy', 'websites', 'growth', 'decks', 'analytics', 'automation'];
const FINANCE_IDS = ['reg', 'gst', 'tax', 'mca', 'dsc', 'payroll', 'accounting', 'advisory', 'notices'];

const TRACKS = {
  business: {
    label: 'Business OS',
    title: 'Growth systems and client-facing execution',
    description: 'Websites, SEO, decks, analytics, dashboards, automation, and chatbot integrations under one operating layer.',
    ids: BUSINESS_IDS,
  },
  finance: {
    label: 'Finance & Compliance',
    title: 'The financial and regulatory engine behind operations',
    description: 'Registration, GST, income tax, ROC, payroll, bookkeeping, notices, and advisory work under the same desk.',
    ids: FINANCE_IDS,
  },
};

function getCategoryCopy(categoryId) {
  const copy = {
    strategy: 'Offer strategy, CRM logic, workflow design, and SOP structure.',
    websites: 'Website making, landing pages, audits, redesigns, and optimization.',
    growth: 'SEO optimization, technical SEO, content systems, and CRO.',
    decks: 'PPT making, slide decks, pitch decks, and visual storytelling.',
    analytics: 'Analytics setup, dashboard creating, attribution, and KPI views.',
    automation: 'AI automations, chatbot integrations, reporting automation, and workflows.',
    reg: 'Company setup, GST registration, startup recognition, licenses, and legal setup.',
    gst: 'Monthly GST filing, LUT, annual return filing, and notice support.',
    tax: 'ITR, TDS, 15CA/CB, tax filings, and notice response work.',
    mca: 'Annual ROC filing, LLP compliance, and MCA event-based changes.',
    dsc: 'Digital signature issuance and DSC renewal support.',
    payroll: 'Payroll processing, PF, ESI, and employee compliance workflows.',
    accounting: 'Bookkeeping, cleanup, reconciliations, and accounting support.',
    advisory: 'MIS, CFO support, CMA data, forecasts, and business finance visibility.',
    notices: 'Refunds, rectification, audits, GST notices, and income tax notices.',
  };

  return copy[categoryId] || 'Structured execution support tailored to the category.';
}

export function CategoryGrid() {
  const [activeTrack, setActiveTrack] = useState('business');
  const [activeCategoryId, setActiveCategoryId] = useState('strategy');

  const trackCategories = useMemo(
    () => SERVICES_DATA.filter((category) => TRACKS[activeTrack].ids.includes(category.id)),
    [activeTrack]
  );

  const activeCategory =
    trackCategories.find((category) => category.id === activeCategoryId) ?? trackCategories[0];

  const featuredServices = activeCategory?.services.slice(0, 3) ?? [];
  const trailingServices = activeCategory?.services.slice(3, 8) ?? [];
  const ActiveIcon = ICONS[CATEGORY_ICONS[activeCategory?.id]] || Building2;

  return (
    <section id="categories" className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-10 mx-auto h-80 max-w-6xl rounded-full bg-blue-200/22 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-4xl">
          <span className="section-label mb-3 block text-xs font-semibold uppercase">Explore Services</span>
          <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
            One front-end for Business OS execution, one back-end for finance and compliance.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-blue-900/66">
            Taxera is not only Business OS work. The website, growth, decks, dashboards, and automation layer sits on top of the same desk that also handles registration, GST, tax, ROC, payroll, bookkeeping, and advisory.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.58fr_1.42fr]">
          <div className="space-y-4">
            {Object.entries(TRACKS).map(([key, track]) => {
              const isActive = key === activeTrack;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveTrack(key);
                    setActiveCategoryId(TRACKS[key].ids[0]);
                  }}
                  className={`w-full rounded-[2rem] border p-6 text-left transition-all ${
                    isActive
                      ? 'ink-panel text-white shadow-[0_24px_70px_rgba(7,28,72,0.24)]'
                      : 'glass-panel text-blue-950 hover:-translate-y-0.5'
                  }`}
                >
                  <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${isActive ? 'text-blue-100/58' : 'text-blue-700/55'}`}>
                    {track.label}
                  </p>
                  <h3 className={`mt-3 text-2xl font-bold tracking-tight ${isActive ? 'text-white' : 'text-blue-950'}`}>
                    {track.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${isActive ? 'text-blue-100/72' : 'text-blue-900/62'}`}>
                    {track.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {track.ids.slice(0, key === 'business' ? 4 : 5).map((id) => {
                      const category = SERVICES_DATA.find((item) => item.id === id);
                      return (
                        <span
                          key={id}
                          className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                            isActive
                              ? 'border-blue-200/18 bg-white/8 text-blue-100/78'
                              : 'border-blue-100 bg-white/90 text-blue-700'
                          }`}
                        >
                          {category?.name}
                        </span>
                      );
                    })}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="ink-panel overflow-hidden rounded-[2.4rem] p-5 text-white md:p-6">
            <div className="flex flex-wrap gap-2.5">
              {trackCategories.map((category) => {
                const isActive = category.id === activeCategory?.id;
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

            {activeCategory && (
              <div className="mt-6 grid gap-5 xl:grid-cols-[0.78fr_1.22fr]">
                <div className="rounded-[1.9rem] border border-blue-200/16 bg-white/8 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                      <ActiveIcon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-blue-200/16 bg-white/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-blue-100/62">
                      {activeCategory.num}
                    </span>
                  </div>

                  <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-blue-100/54">{TRACKS[activeTrack].label}</p>
                  <h3 className="mt-2 text-[1.95rem] font-semibold leading-tight text-white">{activeCategory.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-blue-100/74">{getCategoryCopy(activeCategory.id)}</p>

                  <div className="mt-6 rounded-[1.45rem] border border-blue-200/16 bg-white/6 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-blue-100/54">Category focus</p>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100/80">{activeCategory.desc}</p>
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
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-blue-950">
                          Start with the highest-leverage services in {activeCategory.name}.
                        </h3>
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
