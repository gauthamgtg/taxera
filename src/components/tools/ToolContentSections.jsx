import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, Lightbulb, Sparkles } from 'lucide-react';
import { BookingFormCard } from '../shared/BookingFormCard';

function SectionShell({ label, title, children }) {
  return (
    <section className="px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">{label}</span>
        <h2 className="mb-5 text-2xl font-bold text-blue-950 md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function OverviewSection({ tool }) {
  return (
    <SectionShell label="Overview" title={tool.overview.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {tool.overview.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="rounded-[1.6rem] border border-blue-100 bg-white/82 p-5 text-base leading-relaxed text-blue-900/78"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionShell>
  );
}

export function BulletSection({ label, title, items, icon = 'check' }) {
  const Icon = icon === 'idea' ? Lightbulb : CheckCircle2;

  return (
    <SectionShell label={label} title={title}>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="glass-panel rounded-[1.6rem] p-5">
            <p className="flex items-start gap-3 text-base leading-relaxed text-blue-900/78">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <span>{item}</span>
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function StepsSection({ tool }) {
  return (
    <SectionShell label="How To Use" title={tool.howToUse.title}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {tool.howToUse.steps.map((step, index) => (
          <div key={step.title} className="glass-panel rounded-[1.6rem] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-2 text-lg font-bold text-blue-950">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-blue-900/72">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function ExamplesSection({ tool }) {
  return (
    <SectionShell label="Examples" title={tool.examples.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {tool.examples.items.map((example) => (
          <div key={example.title} className="editorial-panel rounded-[1.8rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/75">Worked scenario</p>
            <h3 className="mt-2 text-xl font-bold text-blue-950">{example.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-900/74">{example.summary}</p>
            <div className="mt-4 rounded-[1.3rem] border border-blue-100 bg-white/85 p-4 text-sm leading-relaxed text-blue-900/78">
              {example.outcome}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function RecommendationsSection({ tool }) {
  return (
    <SectionShell label="Recommendations" title={tool.recommendations.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {tool.recommendations.items.map((item) => (
          <div key={item} className="rounded-[1.6rem] border border-blue-100 bg-white p-5 text-base leading-relaxed text-blue-900/78">
            <p className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <span>{item}</span>
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function ExplainerSection({ tool }) {
  return (
    <SectionShell label="Result Meaning" title={tool.resultExplainer.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {tool.resultExplainer.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="rounded-[1.6rem] border border-blue-100 bg-white/84 p-5 text-base leading-relaxed text-blue-900/78"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionShell>
  );
}

export function FAQSection({ tool }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <SectionShell label="FAQ" title="Frequently asked questions">
      <div className="space-y-3">
        {tool.faqs.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <div key={faq.question} className="glass-panel overflow-hidden rounded-[1.4rem]">
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
                  <div className="rounded-2xl border border-blue-100 bg-white p-4 text-blue-900/78">{faq.answer}</div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function RelatedServicesSection({ tool }) {
  return (
    <SectionShell label="Next Step" title="When this tool should turn into a service conversation">
      <div className="grid gap-4 md:grid-cols-3">
        {tool.relatedServices.map((service) => (
          <Link
            key={service.href}
            to={service.href}
            className="group rounded-[1.7rem] border border-blue-100 bg-white/84 p-5 shadow-[0_16px_40px_rgba(18,56,131,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/70">Related service</p>
            <h3 className="mt-2 text-lg font-bold text-blue-950">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-900/72">{service.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
              Explore service
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}

export function RelatedToolsSection({ tools }) {
  return (
    <SectionShell label="Related Tools" title="Useful calculators to explore next">
      <div className="grid gap-4 md:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            to={`/tools/${tool.slug}`}
            className="group rounded-[1.6rem] border border-blue-100 bg-white/84 p-5 transition-colors hover:border-blue-200 hover:bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/70">{tool.category}</p>
            <h3 className="mt-2 text-lg font-bold text-blue-950">{tool.hubLabel}</h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-900/72">{tool.hubDescription}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
              Open tool
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}

export function ToolBookingSection({ tool }) {
  return (
    <section className="px-4 pb-20 pt-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <BookingFormCard
          compact
          topic={tool.cta.topic}
          badge="Talk to Taxera"
          title={tool.cta.title}
          description={tool.cta.description}
          buttonLabel={`Book help for ${tool.shortName.toLowerCase()} planning`}
        />
      </div>
    </section>
  );
}
