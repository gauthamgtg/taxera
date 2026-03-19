import { CalendarDays, MessageCircle } from 'lucide-react';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { BRAND } from '../../config';
import { BookingFormCard } from '../shared/BookingFormCard';

export function CategoryHero({ category, content }) {
  const bookingLink = BRAND.consultationLink(category.name);

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#fbfdff_10%,#f3f8ff_50%,#edf5ff_100%)]" />
      <div className="absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-blue-300/30 blur-[120px]" />
      <div className="absolute bottom-[-12%] left-[-8%] h-[420px] w-[420px] rounded-full bg-sky-300/25 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services' },
            { label: category.name },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-3 py-1.5 shadow-sm">
              <span className="text-xs font-semibold text-blue-700">{category.num}</span>
              <span className="text-xs text-blue-900/65">{category.services.length} services available</span>
            </div>

            <h1 className="mb-4 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
              {content.heroTitle}
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-blue-900/70 sm:text-lg">{content.heroSubtitle}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
              >
                <CalendarDays className="h-4 w-4" />
                Book Consultation
              </a>
              <a
                href={BRAND.whatsappLink(content.ctaWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-7 py-3.5 text-sm font-bold text-blue-900 transition-colors hover:bg-blue-50 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Connect on WhatsApp
              </a>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-blue-100 bg-white/85 p-4 text-sm text-blue-900/75 shadow-sm">
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-blue-700/55">WhatsApp message tailored for this page</p>
              <p>&ldquo;{content.ctaWhatsAppMessage}&rdquo;</p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <BookingFormCard
              topic={category.name}
              badge="Talk to a Specialist"
              title={`Book your ${category.name} consultation`}
              description={`Share your details and Taxera will guide you on the right ${category.name.toLowerCase()} route, timeline, and documentation.`}
              buttonLabel={`Book ${category.name} consultation`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
