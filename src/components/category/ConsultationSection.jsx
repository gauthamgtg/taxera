import { ArrowRight, CalendarDays, CheckCircle2, MessageCircle } from 'lucide-react';
import { BRAND } from '../../config';

export function ConsultationSection({ category, content }) {
  const consultationTopic = category.name;
  const bookingLink = BRAND.consultationLink(consultationTopic);

  return (
    <section className="px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8">
          <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[2.25rem] bg-gradient-to-bl from-blue-300/35 to-transparent" />
          <span className="section-label mb-4 inline-flex rounded-full border border-blue-100 bg-white/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]">
            Consultation booking
          </span>
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">
            Book a focused consultation for {category.name}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-900/72">
            Get the right route, realistic timelines, and a clear scope before you commit. We tailor the conversation to the exact category you&apos;re viewing now.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              <CalendarDays className="h-4 w-4" />
              Book Consultation
            </a>
            <a
              href={BRAND.whatsappLink(content.ctaWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3.5 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50"
            >
              <MessageCircle className="h-4 w-4" />
              Connect on WhatsApp
            </a>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              'Consultation aligned to this service page',
              'Quick WhatsApp follow-up with real next steps',
              'Scope, documents, and execution guidance',
            ].map((line) => (
              <div key={line} className="rounded-2xl border border-blue-100 bg-white px-4 py-4 text-sm text-blue-900/70">
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="dark-glass-panel relative overflow-hidden rounded-[2rem] p-8 text-white">
          <div className="absolute left-[12%] top-[10%] h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
          <div className="absolute bottom-[12%] right-[10%] h-28 w-28 rounded-full bg-blue-300/20 blur-2xl" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.24em] text-blue-100/60">WhatsApp opener</p>
            <div className="mt-4 rounded-[1.5rem] border border-blue-100/20 bg-white/10 p-5 text-sm leading-relaxed text-blue-100/85">
              &ldquo;{content.ctaWhatsAppMessage}&rdquo;
            </div>
            <div className="mt-6 space-y-3">
              {[
                'Category-specific consultation request',
                'Immediate path to human support',
                'No generic enquiry dead-end',
              ].map((line) => (
                <div key={line} className="flex items-center justify-between rounded-2xl border border-blue-100/20 bg-white/10 px-4 py-3 text-sm text-blue-100/85">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-100" />
                    {line}
                  </span>
                  <ArrowRight className="h-4 w-4 text-blue-100/55" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
