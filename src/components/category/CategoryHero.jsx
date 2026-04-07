import { ArrowRight, CalendarDays, MessageCircle, ShieldCheck, Sparkles, Timer } from 'lucide-react';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { BRAND } from '../../config';
import { BookingFormCard } from '../shared/BookingFormCard';

export function CategoryHero({ category, content }) {
  const bookingLink = BRAND.consultationLink(category.name);
  const stats = [
    { label: 'Services in category', value: String(category.services.length).padStart(2, '0') },
    { label: 'Average first response', value: '< 15 min' },
    { label: 'Delivery coverage', value: 'PAN India' },
  ];

  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-28 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(30,99,255,0.18),transparent_34%),radial-gradient(circle_at_90%_16%,rgba(14,189,255,0.16),transparent_28%),linear-gradient(165deg,#f8fbff_0%,#edf4ff_52%,#e9f1ff_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(108,148,223,0.23)_1px,transparent_1px),linear-gradient(90deg,rgba(108,148,223,0.23)_1px,transparent_1px)] [background-size:58px_58px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services' },
            { label: category.name },
          ]}
        />

        <div className="mt-8 overflow-hidden rounded-[2.2rem] border border-blue-100/70 bg-[linear-gradient(162deg,rgba(7,22,57,0.96),rgba(13,45,110,0.95)_48%,rgba(7,24,65,0.98))] shadow-[0_40px_100px_rgba(7,30,81,0.34)]">
          <div className="grid gap-10 p-6 md:p-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/24 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-100" />
                Category {category.num}
              </div>

              <h1 className="mt-5 max-w-3xl text-[2.2rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {content.heroTitle}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100/78 sm:text-lg">
                {content.heroSubtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-950 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <CalendarDays className="h-4 w-4" />
                  Book Consultation
                </a>
                <a
                  href={BRAND.whatsappLink(content.ctaWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1da851]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Connect on WhatsApp
                </a>
                <a
                  href="#services-list"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200/25 bg-white/10 px-6 py-3 text-sm font-semibold text-blue-100 transition-colors hover:bg-white/16"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-blue-200/20 bg-white/8 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/70">{item.label}</p>
                    <p className="mt-1 text-lg font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-200/24 bg-cyan-300/10 p-4 text-sm text-cyan-100/90">
                <p className="mb-1 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100/78">
                  <Timer className="h-3.5 w-3.5" />
                  Fast intake message
                </p>
                <p>&ldquo;{content.ctaWhatsAppMessage}&rdquo;</p>
              </div>
            </div>

            <div className="xl:pt-2">
              <div className="glass-panel rounded-[1.8rem] border border-blue-100/80 bg-white/92 p-2 shadow-[0_28px_60px_rgba(9,33,89,0.26)]">
                <BookingFormCard
                  topic={category.name}
                  badge="Priority Desk"
                  title={`Book your ${category.name} consultation`}
                  description={`Share your details and get a clear route, timeline, and practical execution path for ${category.name.toLowerCase()}.`}
                  buttonLabel={`Book ${category.name} consultation`}
                />
              </div>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-blue-200/65 bg-white/88 px-4 py-2 text-xs font-semibold text-blue-800">
                <Sparkles className="h-3.5 w-3.5" />
                Category-specific recommendations only
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
