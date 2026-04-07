import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  CircleCheck,
  Clock3,
  MessageCircle,
  PhoneCall,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { BookingFormCard } from '../components/shared/BookingFormCard';
import { BRAND, WHATSAPP_NUMBER } from '../config';
import { getProblemPage, getRelatedProblemPages } from '../data/problemPagesData';
import { NotFoundPage } from './NotFoundPage';

const CALL_LINK = `tel:+${WHATSAPP_NUMBER}`;

function SectionShell({ label, title, subtitle, children }) {
  return (
    <section className="px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">{label}</span>
        <h2 className="text-2xl font-bold text-blue-950 md:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-4xl text-base leading-relaxed text-blue-900/72 md:text-lg">{subtitle}</p> : null}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function CtaButton({ href, children, variant = 'primary' }) {
  const className =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-500'
      : variant === 'whatsapp'
        ? 'bg-[#25D366] text-white hover:bg-[#1ca955]'
        : 'border border-blue-200 bg-white text-blue-900 hover:border-blue-300 hover:bg-blue-50';

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

export function ProblemLandingPage() {
  const { problemSlug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);
  const problemPage = getProblemPage(problemSlug);

  if (!problemPage) {
    return <NotFoundPage />;
  }

  const canonical = `https://taxera.in/${problemPage.slug}`;
  const relatedPages = getRelatedProblemPages(problemPage.slug, problemPage.category, 4);
  const whatsappLink = BRAND.whatsappLink(problemPage.hero.whatsappMessage);
  const finalWhatsAppLink = BRAND.whatsappLink(problemPage.finalCta.whatsappMessage);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: problemPage.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxera.in/' },
      { '@type': 'ListItem', position: 2, name: problemPage.problem, item: canonical },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${problemPage.problem} Resolution Support`,
    serviceType: `${problemPage.category} Problem Resolution`,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Taxera',
      url: 'https://taxera.in',
      telephone: `+${WHATSAPP_NUMBER}`,
    },
    areaServed: ['India'],
    description: problemPage.seo.description,
    url: canonical,
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: problemPage.seo.title,
    description: problemPage.seo.description,
    url: canonical,
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Taxera',
      url: 'https://taxera.in',
    },
  };

  return (
    <>
      <SEOHead
        title={problemPage.seo.title}
        description={problemPage.seo.description}
        keywords={problemPage.seo.keywords}
        canonical={canonical}
        jsonLd={[breadcrumbJsonLd, serviceJsonLd, webPageJsonLd, faqJsonLd]}
      />

      <section className="px-4 pb-10 pt-28 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: problemPage.problem }]} />

          <div className="mt-5 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="glass-panel rounded-[2rem] p-6 md:p-8">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                <AlertTriangle className="h-3.5 w-3.5" />
                {problemPage.category} - {problemPage.intent} Intent Case
              </span>

              <h1 className="text-[2rem] font-bold leading-[1.08] text-blue-950 sm:text-[3rem]">{problemPage.hero.headline}</h1>
              <p className="mt-4 rounded-2xl border border-blue-100 bg-white/85 p-4 text-lg leading-relaxed text-blue-900/78">
                {problemPage.hero.subheadline}
              </p>
              <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900">
                {problemPage.hero.urgencyLine}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {problemPage.hero.highlights.map((item) => (
                  <p key={item} className="rounded-2xl border border-blue-100 bg-white/85 p-3 text-sm text-blue-900/78">
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CtaButton href={whatsappLink} variant="whatsapp">
                  <MessageCircle className="h-4 w-4" />
                  {problemPage.hero.primaryCta}
                </CtaButton>
                <CtaButton href={CALL_LINK} variant="primary">
                  <PhoneCall className="h-4 w-4" />
                  {problemPage.hero.secondaryCta}
                </CtaButton>
                <CtaButton href="#get-help-now">
                  <Clock3 className="h-4 w-4" />
                  Book Fast Review
                </CtaButton>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <BookingFormCard
                topic={problemPage.problem}
                badge="Urgent Specialist Help"
                title={`Resolve ${problemPage.problem} with a clear plan`}
                description="Share your details and get a focused action roadmap with practical next steps."
                buttonLabel="Start my fix plan"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        label="Problem Amplification"
        title={problemPage.amplification.title}
        subtitle={problemPage.amplification.intro}
      >
        <div className="grid gap-3 md:grid-cols-2">
          {problemPage.amplification.bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white p-4">
              <ShieldAlert className="mt-0.5 h-4 w-4 text-red-600" />
              <p className="text-blue-900/82">{bullet}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        label="What Happens If Ignored"
        title={problemPage.consequences.title}
        subtitle={problemPage.consequences.intro}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {problemPage.consequences.items.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-rose-200 bg-rose-50 p-5">
              <h3 className="text-lg font-bold text-rose-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-rose-900/80">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        label="What Went Wrong"
        title={problemPage.diagnosis.title}
        subtitle={problemPage.diagnosis.intro}
      >
        <div className="space-y-3">
          {problemPage.diagnosis.bullets.map((line) => (
            <div key={line} className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white p-4 text-blue-900/82">
              <Sparkles className="mt-0.5 h-4 w-4 text-blue-700" />
              <p>{line}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        label="How We Fix It"
        title={problemPage.solution.title}
        subtitle={problemPage.solution.intro}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problemPage.solution.steps.map((step) => (
            <article key={step.num + step.title} className="glass-panel rounded-[1.4rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{step.num}</p>
              <h3 className="mt-2 text-lg font-bold text-blue-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-900/74">{step.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        label="Outcome / Transformation"
        title={problemPage.outcome.title}
        subtitle="This is the shift most clients see once the case is handled in the right order."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-rose-200 bg-rose-50 p-6">
            <h3 className="text-xl font-bold text-rose-950">{problemPage.outcome.beforeLabel}</h3>
            <div className="mt-4 space-y-3">
              {problemPage.outcome.beforeBullets.map((item) => (
                <p key={item} className="text-sm text-rose-900/82">
                  - {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-emerald-950">{problemPage.outcome.afterLabel}</h3>
            <div className="mt-4 space-y-3">
              {problemPage.outcome.afterBullets.map((item) => (
                <p key={item} className="text-sm text-emerald-900/82">
                  - {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell label="Proof" title={problemPage.proof.title} subtitle={problemPage.proof.scenario}>
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-[1.6rem] border border-blue-100 bg-white p-6">
            <h3 className="text-xl font-bold text-blue-950">What We Did</h3>
            <p className="mt-3 text-base leading-relaxed text-blue-900/78">{problemPage.proof.action}</p>
            <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base font-semibold text-emerald-900">
              {problemPage.proof.result}
            </p>
          </article>

          <article className="rounded-[1.6rem] border border-blue-100 bg-white p-6">
            <h3 className="text-xl font-bold text-blue-950">Numbers Snapshot</h3>
            <div className="mt-4 space-y-3">
              {problemPage.proof.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700/60">{metric.label}</p>
                  <p className="mt-1 text-lg font-bold text-blue-950">{metric.value}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </SectionShell>

      <SectionShell label="FAQs" title="Common Questions Before You Decide">
        <div className="space-y-3">
          {problemPage.faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.question} className="glass-panel overflow-hidden rounded-[1.3rem]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="pr-5 text-base font-semibold text-blue-950">{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen ? (
                  <div className="px-5 pb-5">
                    <div className="rounded-xl border border-blue-100 bg-white p-4 text-blue-900/78">{faq.answer}</div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell
        label="Related Problems"
        title="You May Also Want to Fix These Linked Issues"
        subtitle="Most cases are connected. Handling adjacent problems together usually reduces repeat risk."
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {relatedPages.map((item) => (
            <Link
              key={item.slug}
              to={`/${item.slug}`}
              className="group rounded-[1.3rem] border border-blue-100 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700/60">{item.category}</p>
              <p className="mt-2 text-sm font-semibold text-blue-950">{item.problem}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-blue-700">
                View page
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </SectionShell>

      <section id="get-help-now" className="px-4 pb-20 pt-8 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-white/88 p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                <Clock3 className="h-3.5 w-3.5" />
                Final CTA
              </span>
              <h2 className="mt-4 text-3xl font-bold text-blue-950 md:text-4xl">{problemPage.finalCta.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-blue-900/75 md:text-lg">{problemPage.finalCta.description}</p>
              <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-semibold text-amber-900">
                {problemPage.finalCta.urgencyLine}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CtaButton href={finalWhatsAppLink} variant="whatsapp">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Now
                </CtaButton>
                <CtaButton href={CALL_LINK} variant="primary">
                  <PhoneCall className="h-4 w-4" />
                  Call Now
                </CtaButton>
                <CtaButton href="#get-help-now">
                  <CircleCheck className="h-4 w-4" />
                  Submit Form
                </CtaButton>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <BookingFormCard
                topic={problemPage.problem}
                badge="Fix Route Starts Here"
                title={`Get expert help for ${problemPage.problem}`}
                description="Share your issue and get a clear action sequence with execution support."
                buttonLabel="Get my action plan"
                compact
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-blue-100 bg-blue-50/70 p-5 text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            Need category-level support instead?
          </p>
          <a
            href="/#categories"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-100"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
