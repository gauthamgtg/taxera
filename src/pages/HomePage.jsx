import { Link } from 'react-router-dom';
import { Calculator, LineChart, ShieldCheck, ThermometerSnowflake } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Hero } from '../components/home/Hero';
import { StatsBar } from '../components/home/StatsBar';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { HowItWorks } from '../components/home/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
import { HomeFaq, HOME_FAQS } from '../components/home/HomeFaq';
import { CTA } from '../components/home/CTA';

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Taxera",
  "description": "Business OS consulting plus finance, tax, GST, ROC, payroll, bookkeeping, dashboard, deck, and automation services.",
  "url": "https://taxera.in",
  "telephone": "+919626973297",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressCountry": "IN"
  },
  "areaServed": ["India"],
  "serviceType": ["Website Design Services", "SEO Optimization Services", "Pitch Deck Design", "Dashboard Creation", "AI Automation Services", "Chatbot Integration Services", "Business Registration Services", "GST Filing Services", "Income Tax Filing Services", "ROC Compliance Services", "Payroll Processing", "Bookkeeping Services", "Virtual CFO Services"]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": HOME_FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

const TOOL_LINKS = [
  {
    name: 'Income Tax Calculator',
    href: '/tools/income-tax-calculator',
    description: 'Estimate tax liability and compare regime outcomes before you file.',
    icon: ShieldCheck,
  },
  {
    name: 'SIP Calculator',
    href: '/tools/sip-calculator',
    description: 'Project monthly SIP growth and plan long-term investments.',
    icon: LineChart,
  },
  {
    name: 'Mutual Fund Return Calculator',
    href: '/tools/mutual-fund-return-calculator',
    description: 'Review lumpsum growth, CAGR, and simple return scenarios.',
    icon: Calculator,
  },
  {
    name: 'Inflation Calculator',
    href: '/tools/inflation-calculator',
    description: 'See how future costs change when inflation compounds over time.',
    icon: ThermometerSnowflake,
  },
];

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Taxera | Business OS, Finance, Tax, GST, ROC, Payroll, Decks & AI Automations"
        description="Taxera helps growth-focused teams build a complete Business OS while also handling business registration, GST, income tax, ROC, payroll, bookkeeping, and advisory support."
        keywords={["business os services", "website design and development", "seo optimization services", "website audit service", "website optimization service", "ppt making service", "slide deck design", "pitch deck creation", "dashboard creation service", "analytics setup service", "ai automations", "chatbot integrations", "business registration services india", "gst filing services india", "income tax filing india", "roc compliance services", "payroll processing india", "bookkeeping services india", "virtual cfo services india"]}
        canonical="https://taxera.in/"
        jsonLd={[orgJsonLd, faqJsonLd]}
      />
      <Hero />
      <StatsBar />
      <CategoryGrid />
      <section id="free-tools" className="relative px-4 py-24 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <span className="section-label mb-3 block text-xs font-semibold uppercase">Free tools</span>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
                Conversion-friendly resource pages that attract demand before prospects book higher-value Business OS or finance/compliance work.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-900/65">
                The current tool stack still acts as an acquisition layer: practical, searchable utilities that build trust and move visitors toward strategy, website, automation, analytics, tax, and finance engagements.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {TOOL_LINKS.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className="group rounded-[1.6rem] border border-blue-100 bg-white/82 p-5 shadow-[0_18px_42px_rgba(21,61,143,0.08)] transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600/55 group-hover:text-blue-600">
                        Free
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-blue-950">{tool.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-blue-900/66">{tool.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700">
                      Open tool
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Testimonials />
      <HomeFaq />
      <CTA />
    </>
  );
}
