import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Calculator, CircleCheck, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { ToolCalculatorCard } from '../components/tools/ToolCalculatorCard';
import {
  BulletSection,
  ExamplesSection,
  ExplainerSection,
  FAQSection,
  OverviewSection,
  RecommendationsSection,
  RelatedServicesSection,
  RelatedToolsSection,
  StepsSection,
  ToolBookingSection,
} from '../components/tools/ToolContentSections';
import { getToolBySlug, TOOLS_BY_SLUG } from '../data/toolsData';

export function ToolDetailPage() {
  const { toolSlug } = useParams();
  const tool = getToolBySlug(toolSlug);

  if (!tool) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-20 text-center">
        <h1 className="text-3xl font-bold text-blue-950">Tool Not Found</h1>
        <p className="mt-3 max-w-xl text-blue-900/70">
          The calculator page you requested is not available right now.
        </p>
        <Link to="/tools" className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">
          Back to Tools
        </Link>
      </div>
    );
  }

  const relatedTools = tool.relatedTools
    .map((slug) => TOOLS_BY_SLUG[slug])
    .filter(Boolean);
  const primaryRelatedService = tool.relatedServices[0];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxera.in/' },
      { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://taxera.in/tools' },
      { '@type': 'ListItem', position: 3, name: tool.hubLabel, item: `https://taxera.in/tools/${tool.slug}` },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.hubLabel,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    description: tool.metaDescription,
    url: `https://taxera.in/tools/${tool.slug}`,
  };

  const webpageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: tool.metaTitle,
    description: tool.metaDescription,
    url: `https://taxera.in/tools/${tool.slug}`,
  };

  return (
    <>
      <SEOHead
        title={tool.metaTitle}
        description={tool.metaDescription}
        keywords={tool.keywords}
        canonical={`https://taxera.in/tools/${tool.slug}`}
        jsonLd={[breadcrumbJsonLd, faqJsonLd, softwareAppJsonLd, webpageJsonLd]}
      />

      <section className="px-4 pb-12 pt-28 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Free Tools', href: '/tools' },
              { label: tool.hubLabel },
            ]}
          />

          <div className="mt-6 glass-panel rounded-[2.2rem] p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] xl:items-end">
              <div className="min-w-0">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  {tool.badge}
                </span>

                <h1 className="max-w-4xl text-[2.4rem] font-bold leading-[1.02] tracking-tight text-blue-950 sm:text-[3.4rem]">
                  {tool.heroTitle}
                </h1>
                <p className="mt-5 max-w-4xl rounded-2xl border border-blue-100 bg-white/85 p-4 text-lg leading-relaxed text-blue-900/78">
                  {tool.heroDescription}
                </p>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {tool.highlights.map((item) => (
                    <div key={item} className="rounded-[1.4rem] border border-blue-100 bg-white/80 p-4 text-sm leading-relaxed text-blue-900/78">
                      <p className="flex items-start gap-3">
                        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        <span>{item}</span>
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-[1.6rem] border border-blue-100 bg-blue-50/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Free tool + service path</p>
                  <p className="mt-2 max-w-3xl text-base leading-relaxed text-blue-900/76">
                    This page is designed to answer the immediate calculation question first and then route higher-intent visitors into the right Taxera service when estimation is no longer enough.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    <Calculator className="h-4 w-4" />
                    Run calculator
                  </a>
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-300 hover:bg-blue-50"
                  >
                    Explore all tools
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-[1.6rem] border border-blue-100 bg-white/85 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">What this page does</p>
                  <p className="mt-3 text-sm leading-relaxed text-blue-900/74">
                    It gives users an immediate estimate, then expands into a full explanation and conversion path below without compressing the calculator into the hero.
                  </p>
                </div>
                {primaryRelatedService ? (
                  <div className="rounded-[1.6rem] border border-blue-100 bg-white/85 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Recommended service</p>
                    <h2 className="mt-2 text-xl font-bold text-blue-950">{primaryRelatedService.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-blue-900/74">{primaryRelatedService.description}</p>
                    <Link
                      to={primaryRelatedService.href}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                    >
                      Explore service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="rounded-[1.6rem] border border-blue-100 bg-white/85 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Best next action</p>
                    <p className="mt-3 text-sm leading-relaxed text-blue-900/74">
                      Use the calculator first, then follow the related service route if the case needs filing, rectification, advisory, or review.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-2 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <ToolCalculatorCard tool={tool} />
        </div>
      </section>

      <OverviewSection tool={tool} />
      <BulletSection label="Who It Is For" title={tool.whoItsFor.title} items={tool.whoItsFor.items} />
      <BulletSection label="Use Cases" title={tool.uses.title} items={tool.uses.items} icon="idea" />
      <StepsSection tool={tool} />
      <ExamplesSection tool={tool} />
      <RecommendationsSection tool={tool} />
      <ExplainerSection tool={tool} />
      <FAQSection tool={tool} />
      <RelatedServicesSection tool={tool} />
      <RelatedToolsSection tools={relatedTools} />
      <ToolBookingSection tool={tool} />
    </>
  );
}
