import { useState } from 'react';
import { ArrowRight, ExternalLink, LayoutTemplate, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/shared/SEOHead';
import { TEMPLATES_DATA } from '../data/templatesData';

const TEMPLATE_GROUP_ORDER = [
  'Spa Templates',
  'Agency Templates',
  'Ecommerce Templates',
  'Car Rental Templates',
  'Salon Templates',
  'SaaS Templates',
];

const TEMPLATE_GROUP_META = {
  'Spa Templates': {
    label: 'Wellness and luxury concepts',
    description: 'Calm, premium, editorial spa and wellness directions.',
  },
  'Agency Templates': {
    label: 'Service and advisory concepts',
    description: 'Consulting, operations, finance, and brand-style agency directions.',
  },
  'Ecommerce Templates': {
    label: 'Commerce and merchandising concepts',
    description: 'Storefront layouts for products, capsules, and curated drops.',
  },
  'Car Rental Templates': {
    label: 'Mobility and booking concepts',
    description: 'Fleet-led booking pages with stronger premium travel energy.',
  },
  'Salon Templates': {
    label: 'Beauty and editorial service concepts',
    description: 'Hair salon directions built around style, chair booking, and atmosphere.',
  },
  'SaaS Templates': {
    label: 'Software and product marketing concepts',
    description: 'Product-first SaaS pages with stronger interface hierarchy.',
  },
};

const TEMPLATE_GROUPS = TEMPLATE_GROUP_ORDER.map((group) => ({
  group,
  templates: TEMPLATES_DATA.filter((template) => template.group === group),
})).filter((group) => group.templates.length > 0);

const DEFAULT_GROUP = TEMPLATE_GROUPS[0]?.group ?? '';

const templatesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Taxera Templates',
  description: 'Browse website templates created by Taxera and open each standalone template page.',
  url: 'https://taxera.in/templates',
};

const templateListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Taxera Template Gallery',
  itemListElement: TEMPLATES_DATA.map((template, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: template.name,
    url: `https://taxera.in${template.href}`,
    description: template.description,
  })),
};

export function TemplatesPage() {
  const [selectedGroup, setSelectedGroup] = useState(DEFAULT_GROUP);
  const activeGroup = TEMPLATE_GROUPS.find((group) => group.group === selectedGroup) ?? TEMPLATE_GROUPS[0];
  const activeTemplates = activeGroup?.templates ?? [];
  const activePreviewTemplates = activeTemplates.slice(0, 2);
  const activeMeta = TEMPLATE_GROUP_META[activeGroup?.group] ?? {
    label: 'Template concepts',
    description: 'Browse the current set of templates in this category.',
  };

  return (
    <>
      <SEOHead
        title="Website Templates by Taxera | Browse Our Template Gallery"
        description="Explore Taxera's template gallery and open each live template page for browsing."
        keywords={[
          'website templates',
          'template gallery',
          'landing page templates',
          'spa website templates',
          'taxera templates',
        ]}
        canonical="https://taxera.in/templates"
        jsonLd={[templatesJsonLd, templateListJsonLd]}
      />

      <section className="relative overflow-hidden px-4 pb-12 pt-28 md:px-8 lg:px-16">
        <div className="absolute left-[-6rem] top-24 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute right-[-2rem] top-14 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.6rem] border border-blue-100/80 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),_rgba(240,247,255,0.92)_45%,_rgba(231,242,255,0.92)_100%)] px-6 py-10 shadow-[0_28px_90px_rgba(18,56,131,0.1)] sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                  <LayoutTemplate className="h-3.5 w-3.5" />
                  Category-first library
                </span>
                <h1 className="max-w-3xl text-[2.9rem] font-bold leading-[0.95] tracking-[-0.04em] text-blue-950 sm:text-[4.1rem]">
                  Choose a category.
                  <span className="block text-blue-600">Then browse the concepts inside it.</span>
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-blue-900/64 sm:text-base">
                  Start with the category, then review the live templates under that selection.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#template-categories"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    <Sparkles className="h-4 w-4" />
                    Browse categories
                  </a>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-5 py-3 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-300 hover:bg-blue-50"
                  >
                    Back home
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {activePreviewTemplates.map((template, index) => (
                  <div
                    key={template.id}
                    className={`overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/80 shadow-[0_22px_70px_rgba(18,56,131,0.12)] ${index === 0 ? 'sm:translate-y-8' : ''}`}
                  >
                    <div className="border-b border-blue-100/80 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700/55">{activeGroup?.group}</p>
                      <h2 className="mt-1 text-lg font-bold text-blue-950">{template.name}</h2>
                    </div>
                    <div className="relative h-64 overflow-hidden bg-slate-950">
                      <div
                        className="pointer-events-none absolute left-0 top-0 origin-top-left"
                        style={{ width: '285.714%', height: '285.714%', transform: 'scale(0.35)' }}
                      >
                        <iframe
                          src={template.href}
                          title={`${template.name} hero preview`}
                          className="h-full w-full border-0 bg-white"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="template-categories" className="px-4 pb-10 pt-8 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-blue-100 pb-4">
            <div>
              <span className="section-label mb-3 block text-xs font-semibold uppercase">Categories</span>
              <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">Pick a template category</h2>
            </div>
            <p className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-blue-700/50 md:block">
              {TEMPLATE_GROUPS.length} categories
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {TEMPLATE_GROUPS.map(({ group, templates }) => {
              const isActive = activeGroup?.group === group;
              const meta = TEMPLATE_GROUP_META[group] ?? {
                label: 'Template concepts',
                description: 'Browse the concepts inside this category.',
              };

              return (
                <button
                  key={group}
                  type="button"
                  onClick={() => setSelectedGroup(group)}
                  aria-pressed={isActive}
                  className={`rounded-[2rem] border p-6 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-blue-300 bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] shadow-[0_24px_70px_rgba(18,56,131,0.12)]'
                      : 'border-blue-100 bg-white/84 shadow-[0_18px_50px_rgba(18,56,131,0.06)] hover:-translate-y-1 hover:border-blue-200'
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700/55">Category</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-blue-950">{group}</h3>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700/55">{meta.label}</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-blue-900/66">{meta.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-blue-100 pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700/55">
                      {templates.length} templates
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                      {isActive ? 'Selected' : 'Show templates'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="template-gallery" className="px-4 pb-20 pt-2 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-blue-100 pb-4">
            <div>
              <span className="section-label mb-3 block text-xs font-semibold uppercase">Selected Category</span>
              <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">{activeGroup?.group}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-900/66 md:text-base">{activeMeta.description}</p>
            </div>
            <p className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-blue-700/50 md:block">
              {activeTemplates.length} templates
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {activeTemplates.map((template, index) => (
              <article
                key={template.id}
                className={`group overflow-hidden rounded-[2rem] border border-blue-100 bg-white/88 shadow-[0_22px_60px_rgba(18,56,131,0.08)] transition-transform duration-300 hover:-translate-y-1 ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="border-b border-blue-100 p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700/55">{template.category}</p>
                      <h3 className="mt-2 text-2xl font-bold text-blue-950 sm:text-[1.9rem]">{template.name}</h3>
                    </div>
                    <a
                      href={template.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-300 hover:bg-blue-100"
                    >
                      Browse
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className={`relative overflow-hidden rounded-[1.7rem] border border-blue-100 bg-slate-950 shadow-inner ${index === 0 ? 'h-[28rem]' : 'h-[22rem]'}`}>
                    <div
                      className="pointer-events-none absolute left-0 top-0 origin-top-left transition-transform duration-500 group-hover:scale-[1.02]"
                      style={{ width: '285.714%', height: '285.714%', transform: 'scale(0.35)' }}
                    >
                      <iframe
                        src={template.href}
                        title={`${template.name} preview`}
                        className="h-full w-full border-0 bg-white"
                        loading="lazy"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/16 bg-slate-950/72 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/78 backdrop-blur-sm">
                      {template.id}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700/60">
                    {template.highlights.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
