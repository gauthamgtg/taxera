import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CalendarDays, CheckCircle2, ChevronDown, CircleCheck, FileText, ListChecks, ShieldCheck, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { BookingFormCard } from '../components/shared/BookingFormCard';
import { getServicePage } from '../data/serviceDetails';
import { SERVICES_DATA } from '../data/servicesData';

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

export function ServiceDetailPage() {
  const { categoryId, serviceSlug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const category = SERVICES_DATA.find((item) => item.id === categoryId);
  const service = getServicePage(categoryId, serviceSlug);

  const faqJsonLd = useMemo(() => {
    if (!service) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }, [service]);

  if (!category || !service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-20 text-center">
        <h1 className="text-3xl font-bold text-blue-950">Service Not Found</h1>
        <p className="mt-3 max-w-xl text-blue-900/70">
          The requested service page is not available right now.
        </p>
        <Link to={category ? `/services/${category.id}` : '/'} className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">
          Back to Services
        </Link>
      </div>
    );
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxera.in/' },
      { '@type': 'ListItem', position: 2, name: category.name, item: `https://taxera.in/services/${category.id}` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `https://taxera.in/services/${category.id}/${service.slug}` },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.heading,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Taxera',
      url: 'https://taxera.in',
    },
    areaServed: ['India'],
    description: service.metaDescription,
  };

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.metaKeywords}
        canonical={`https://taxera.in/services/${category.id}/${service.slug}`}
        jsonLd={[breadcrumbJsonLd, serviceJsonLd, faqJsonLd]}
      />

      <section className="px-4 pb-10 pt-28 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: category.name, href: `/services/${category.id}` },
              { label: service.name },
            ]}
          />

          <div className="mt-5 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="glass-panel rounded-[2rem] p-6 md:p-8">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                Only ISO 27001 certified platform
              </span>

              <h1 className="text-[2.2rem] font-bold leading-[1.08] text-blue-950 sm:text-[3rem]">{service.heading}</h1>
              <p className="mt-5 rounded-2xl border border-blue-100 bg-white/85 p-4 text-lg leading-relaxed text-blue-900/78">
                {service.intro}
              </p>

              <div className="mt-6 space-y-3">
                {service.execution.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-start gap-2 text-lg text-blue-900/85">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-blue-700" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-blue-100 bg-white/85 p-4">
                <p className="text-xl font-bold text-blue-950">Assured filing support with practical timeline clarity</p>
                <p className="mt-2 text-base text-blue-900/72">
                  We focus on correct documentation and strong first submission quality, so your filing does not get stuck in repeated query loops.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm font-semibold text-blue-800">
                <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Know process in 60 sec</span>
                <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Review process details</span>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <BookingFormCard
                topic={service.name}
                badge="Talk to a Specialist"
                title={`Book your ${service.name} consultation`}
                description={`Share your details and Taxera will guide you on the right route, timeline, documentation, and next steps for ${service.name.toLowerCase()}.`}
                buttonLabel={`Book ${service.name} consultation`}
              />
            </div>
          </div>
        </div>
      </section>

      <SectionShell label="Overview" title={`What ${service.name} usually covers`}>
        <div className="grid gap-4 md:grid-cols-2">
          {service.overview.map((line) => (
            <p key={line} className="rounded-2xl border border-blue-100 bg-white/80 p-5 text-base leading-relaxed text-blue-900/78">
              {line}
            </p>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Detailed Information" title="What to know before you file">
        <div className="space-y-4">
          {service.detailedInformation.map((line) => (
            <p key={line} className="rounded-2xl border border-blue-100 bg-white/80 p-5 text-base leading-relaxed text-blue-900/78">
              {line}
            </p>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Documents and Inputs" title="Keep these ready before consultation">
        <div className="grid gap-3 md:grid-cols-2">
          {service.documents.map((doc) => (
            <div key={doc} className="flex items-start gap-2 rounded-2xl border border-blue-100 bg-white p-4 text-blue-900/82">
              <FileText className="mt-0.5 h-4 w-4 text-blue-700" />
              <span>{doc}</span>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Typical Journey" title="What the engagement usually looks like">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {service.journey.map((step, index) => (
            <div key={step.title} className="glass-panel rounded-[1.6rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 text-lg font-bold text-blue-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-900/72">{step.desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Execution Support" title="What Taxera usually helps you execute">
        <div className="grid gap-3 md:grid-cols-2">
          {service.execution.map((item) => (
            <div key={item} className="flex items-start gap-2 rounded-2xl border border-blue-100 bg-white p-4 text-blue-900/82">
              <ListChecks className="mt-0.5 h-4 w-4 text-blue-700" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Consultation Value" title="Good reasons to book consultation first">
        <div className="grid gap-3 md:grid-cols-2">
          {service.reasonsToBook.map((item) => (
            <div key={item} className="rounded-2xl border border-blue-100 bg-white p-4 text-blue-900/82">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Who Needs This?" title="Typical cases where this service fits best">
        <div className="grid gap-4 md:grid-cols-3">
          {service.whoNeeds.map((item) => (
            <div key={item} className="glass-panel rounded-[1.5rem] p-5 text-blue-900/82">
              {item}
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Why Choose Taxera?" title="What clients usually value in our approach">
        <div className="grid gap-4 md:grid-cols-2">
          {service.whyChoose.map((item) => (
            <div key={item} className="rounded-2xl border border-blue-100 bg-white p-5 text-blue-900/82">
              <p className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-blue-700" /> {item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="How It Works" title="Delivery model from first call to completion">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {service.howItWorks.map((step, index) => (
            <div key={step.title} className="glass-panel rounded-[1.6rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-bold text-blue-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-900/72">{step.desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Frequently Asked Questions" title="Answers clients usually ask before booking">
        <div className="space-y-3">
          {service.faqs.map((faq, index) => {
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

      <section className="px-4 pb-20 pt-8 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-white/85 p-8 text-center">
          <p className="text-2xl font-bold text-blue-950">Need help choosing the right service route?</p>
          <p className="mx-auto mt-3 max-w-3xl text-blue-900/74">
            Start with a focused consultation and get a clear filing roadmap based on your business stage, not a generic package.
          </p>
          <Link
            to={`/services/${category.id}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
          >
            <CircleCheck className="h-4 w-4" />
            Explore {category.name}
          </Link>
        </div>
      </section>
    </>
  );
}
