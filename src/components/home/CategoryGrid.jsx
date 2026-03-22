import { useEffect, useMemo, useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
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

const BUSINESS_IDS = ['websites', 'growth', 'decks', 'analytics', 'automation'];
const FINANCE_IDS = ['reg', 'gst', 'tax', 'mca', 'dsc', 'payroll', 'accounting', 'advisory', 'notices'];

const TRACKS = {
  business: {
    label: 'Business OS',
    summaryLine: 'Websites, SEO, analytics, and automation',
    ids: BUSINESS_IDS,
  },
  finance: {
    label: 'Finance & Compliance',
    summaryLine: 'Finance, GST, tax, ROC, payroll, and bookkeeping',
    ids: FINANCE_IDS,
  },
};

function getCategoryCopy(categoryId) {
  const copy = {
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
  const SERVICES_PER_PAGE = 4;
  const [activeTrack, setActiveTrack] = useState('business');
  const [activeCategoryId, setActiveCategoryId] = useState('websites');
  const [servicesPage, setServicesPage] = useState(0);

  const trackCategories = useMemo(
    () => SERVICES_DATA.filter((category) => TRACKS[activeTrack].ids.includes(category.id)),
    [activeTrack]
  );

  const activeCategory =
    trackCategories.find((category) => category.id === activeCategoryId) ?? trackCategories[0];

  const categoryServices = activeCategory?.services ?? [];
  const totalServicePages = Math.max(1, Math.ceil(categoryServices.length / SERVICES_PER_PAGE));
  const serviceStartIndex = servicesPage * SERVICES_PER_PAGE;
  const visibleServices = categoryServices.slice(serviceStartIndex, serviceStartIndex + SERVICES_PER_PAGE);
  const ActiveIcon = ICONS[CATEGORY_ICONS[activeCategory?.id]] || Building2;

  useEffect(() => {
    setServicesPage(0);
  }, [activeCategoryId, activeTrack]);

  return (
    <section id="categories" className="relative overflow-hidden scroll-mt-28 px-4 py-14 md:scroll-mt-32 md:px-8 lg:min-h-[100svh] lg:px-16 lg:py-6">
      <div className="absolute inset-x-0 top-10 mx-auto h-80 max-w-6xl rounded-full bg-blue-200/22 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-7">
          <span className="section-label mb-3 block text-xs font-semibold uppercase">Explore Services</span>
          <h2 className="max-w-none text-3xl font-bold tracking-tight text-blue-950 md:text-[3.2rem]">
            One front-end for Business OS execution, one back-end for finance and compliance.
          </h2>
          <p className="mt-3 max-w-none text-base leading-relaxed text-blue-900/66">
            Taxera is not only Business OS work. The website, growth, decks, dashboards, and automation layer sits on top of the same desk that also handles registration, GST, tax, ROC, payroll, bookkeeping, and advisory.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
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
                  className={`w-full rounded-[1.4rem] border p-4 text-left transition-all ${
                    isActive
                      ? 'ink-panel text-white shadow-[0_16px_44px_rgba(7,28,72,0.2)]'
                      : 'glass-panel text-blue-950 hover:-translate-y-0.5'
                  }`}
                >
                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${isActive ? 'text-blue-100/58' : 'text-blue-700/55'}`}>
                    {track.label}
                  </p>
                  <p
                    className={`mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold leading-tight tracking-tight ${
                      isActive ? 'text-white' : 'text-blue-950'
                    }`}
                  >
                    {track.summaryLine}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="ink-panel overflow-hidden rounded-[2rem] p-4 text-white md:p-5">
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
              <div className="mt-4 grid gap-3 xl:grid-cols-[0.76fr_1.24fr] xl:items-start">
                <div className="rounded-[1.45rem] border border-blue-200/16 bg-white/8 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                      <ActiveIcon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-blue-200/16 bg-white/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-blue-100/62">
                      {activeCategory.num}
                    </span>
                  </div>

                  <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-blue-100/54">{TRACKS[activeTrack].label}</p>
                  <h3 className="mt-2 text-[1.55rem] font-semibold leading-tight text-white">{activeCategory.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-blue-100/74">{getCategoryCopy(activeCategory.id)}</p>
                  <p className="mt-3 text-sm leading-relaxed text-blue-100/72">{activeCategory.desc}</p>

                  <Link
                    to={`/services/${activeCategory.id}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-blue-950 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Explore {activeCategory.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid gap-3">
                  <div className="editorial-panel rounded-[1.45rem] p-4 text-blue-950">
                    <div className="mb-4 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700/50">Priority routes</p>
                        <h3 className="mt-2 text-[1.6rem] font-semibold leading-tight tracking-tight text-blue-950">
                          Start with the highest-leverage services in {activeCategory.name}.
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
                          {activeCategory.services.length} total services
                        </span>
                        {totalServicePages > 1 && (
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => setServicesPage((prev) => Math.max(0, prev - 1))}
                              disabled={servicesPage === 0}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700 transition-colors hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-45"
                              aria-label="Previous services page"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setServicesPage((prev) => Math.min(totalServicePages - 1, prev + 1))}
                              disabled={servicesPage >= totalServicePages - 1}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700 transition-colors hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-45"
                              aria-label="Next services page"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {visibleServices.map((service, index) => (
                        <Link
                          key={service.slug}
                          to={`/services/${activeCategory.id}/${service.slug}`}
                          className="group rounded-[1.15rem] border border-blue-100 bg-white/88 p-4 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/70"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-xs font-semibold text-white shadow-lg shadow-blue-700/15">
                              {String(serviceStartIndex + index + 1).padStart(2, '0')}
                            </div>
                            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-700">
                              {service.type}
                            </span>
                          </div>

                          <div className="mt-3 min-w-0">
                            <p className="text-base font-semibold leading-snug text-blue-950">{service.name}</p>
                            <p className="mt-1.5 text-sm leading-relaxed text-blue-900/64">{service.desc}</p>
                            <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 transition-all group-hover:gap-3">
                              View service
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
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
