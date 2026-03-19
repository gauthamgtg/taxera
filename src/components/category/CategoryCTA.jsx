import { CalendarDays, CheckCircle, MessageCircle } from 'lucide-react';
import { BRAND } from '../../config';

export function CategoryCTA({ categoryName, content }) {
  const bookingLink = BRAND.consultationLink(categoryName);

  return (
    <section className="relative overflow-hidden px-4 py-20 md:px-8 lg:px-16">
      <div className="surface-strong mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-10 md:px-10">
        <div className="absolute left-[10%] top-[18%] h-44 w-44 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute right-[12%] top-[16%] h-48 w-48 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="text-white">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl">{content.ctaTitle}</h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-blue-100/75">{content.ctaDescription}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-900 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <CalendarDays className="h-5 w-5" />
                Book Consultation
              </a>
              <a
                href={BRAND.whatsappLink(content.ctaWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition-colors hover:bg-[#1da851]"
              >
                <MessageCircle className="h-5 w-5" />
                Connect on WhatsApp
              </a>
            </div>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-6 text-blue-950">
            <p className="text-xs uppercase tracking-[0.24em] text-blue-700/60">Quick connect message</p>
            <p className="mt-4 rounded-[1.5rem] border border-blue-100 bg-white px-5 py-5 text-sm leading-relaxed text-blue-900/72">
              &ldquo;{content.ctaWhatsAppMessage}&rdquo;
            </p>
          </div>
        </div>
        <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-6 border-t border-blue-100/20 pt-8 text-sm text-blue-100/75">
          <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-emerald-300" /> Free Consultation</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-emerald-300" /> Expert Team</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-emerald-300" /> Same-Day Response</span>
        </div>
      </div>
    </section>
  );
}
