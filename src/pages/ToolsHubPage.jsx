import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, LineChart, Search, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { ToolCard } from '../components/tools/ToolCard';
import { NEXT_TOOL_IDEAS, TOOLS_DATA, TOOL_HUB_FAQS } from '../data/toolsData';

const hubJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Free Tax and Finance Calculators',
  description:
    'Free tax and finance calculators from Taxera covering income tax, SIP, mutual fund return, and inflation planning.',
  url: 'https://taxera.in/tools',
};

const toolsListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Taxera Free Tools',
  itemListElement: TOOLS_DATA.map((tool, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://taxera.in/tools/${tool.slug}`,
    name: tool.hubLabel,
    description: tool.hubDescription,
  })),
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TOOL_HUB_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export function ToolsHubPage() {
  return (
    <>
      <SEOHead
        title="Free Tax and Finance Calculators in India | Taxera Tools"
        description="Explore Taxera’s free tax and finance calculators including income tax calculator, SIP calculator, mutual fund return calculator, and inflation calculator."
        keywords={[
          'free tax calculators india',
          'income tax calculator india',
          'sip calculator',
          'mutual fund return calculator',
          'inflation calculator',
          'finance tools india',
        ]}
        canonical="https://taxera.in/tools"
        jsonLd={[hubJsonLd, toolsListJsonLd, faqJsonLd]}
      />

      <section className="px-4 pb-14 pt-28 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                <Sparkles className="h-3.5 w-3.5" />
                Free tools hub
              </span>
              <h1 className="max-w-3xl text-[2.4rem] font-bold leading-[1.02] tracking-tight text-blue-950 sm:text-[3.4rem]">
                Free tax and finance calculators that bring in search traffic and route visitors into services.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-blue-900/70 sm:text-lg">
                This tools hub is built for two jobs at the same time: answer high-intent search queries with genuinely useful calculators, and create a stronger internal-link and conversion path into Taxera&apos;s tax, compliance, and finance services.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#tool-grid"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  <Calculator className="h-4 w-4" />
                  Explore calculators
                </a>
                <Link
                  to="/services/tax"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-300 hover:bg-blue-50"
                >
                  Explore tax services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="ink-panel rounded-[2rem] p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">Why this hub matters</p>
              <div className="mt-5 grid gap-3">
                {[
                  'Calculator pages target visitors already searching with intent, not passive readers.',
                  'Each calculator page creates long-tail SEO entry points around tax, returns, and planning queries.',
                  'Every tool page can convert into a relevant Taxera service with stronger context than a generic landing page.',
                ].map((item) => (
                  <div key={item} className="rounded-[1.3rem] border border-blue-100/20 bg-white/10 p-4 text-sm leading-relaxed text-blue-50/88">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tool-grid" className="px-4 py-10 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label mb-3 block text-xs font-semibold uppercase">Calculator Pages</span>
              <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">Tools you can publish right now</h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-blue-900/64 md:text-base">
              Each page ships with its own metadata, structured content blocks, FAQ section, examples, recommendations, and clear links into relevant service pages.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {TOOLS_DATA.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: Search,
                title: 'Search intent first',
                description:
                  'People searching for calculators are close to action. They want a number, a comparison, or a next step. That makes this cluster much stronger than generic blog traffic.',
              },
              {
                icon: Calculator,
                title: 'Internal link engine',
                description:
                  'Every tool can push visitors into tax filing, bookkeeping, MIS, CFO, and notice-handling pages with context that feels natural instead of forced.',
              },
              {
                icon: LineChart,
                title: 'Repeatable content model',
                description:
                  'Once this structure exists, new calculator pages can be added quickly with the same SEO pattern: calculator, explainer, examples, FAQ, recommendations, and service CTA.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="glass-panel rounded-[1.8rem] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-blue-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-blue-900/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <span className="section-label mb-3 block text-xs font-semibold uppercase">FAQ</span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">Questions about the tools hub</h2>
          <div className="space-y-4">
            {TOOL_HUB_FAQS.map((faq) => (
              <div key={faq.question} className="glass-panel rounded-[1.6rem] p-5">
                <h3 className="text-lg font-bold text-blue-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-blue-900/72">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-10 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-blue-100 bg-white/86 p-8 text-center shadow-[0_24px_60px_rgba(18,56,131,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600/75">Conversion path</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
            Want the calculator traffic to turn into real work?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-blue-900/70">
            Pair these pages with the right internal linking, strong service pages, and a clear consultation path. That is how calculator traffic becomes qualified enquiry flow instead of vanity visits.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services/tax"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Explore tax services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services/advisory"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              Explore advisory services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
