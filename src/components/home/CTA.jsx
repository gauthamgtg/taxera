import { ArrowRight, CalendarDays, CheckCircle2, MessageCircle } from 'lucide-react';
import { BRAND } from '../../config';

export function CTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-16">
      <div className="surface-strong mx-auto max-w-7xl overflow-hidden rounded-[2.35rem] px-6 py-12 md:px-10 lg:px-12">
        <div className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute right-[10%] top-[24%] h-56 w-56 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="cta-content text-white">
            <span className="mb-4 inline-flex rounded-full border border-blue-100/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
              Business OS consultation desk
            </span>
            <h2 className="mb-5 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Start with the right operating stack and a clear execution plan across growth and finance.
            </h2>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-blue-100/75">
              Speak with Taxera to map the right mix of website work, SEO optimization, deck creation, dashboards, analytics, chatbot integrations, AI automations, GST, tax, payroll, bookkeeping, and advisory support for your business.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={BRAND.consultationLink('your business requirements')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-900 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <CalendarDays className="h-5 w-5" />
                Book Consultation
              </a>
              <a
                href={BRAND.whatsappLink("Hi Taxera! I'd like to get started. Please share how we can proceed.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-100/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden rounded-[1.85rem] p-6 text-blue-950">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-blue-700/55">What happens next</p>
                <p className="mt-2 text-xl font-semibold">A sharper execution plan</p>
              </div>
              <div className="animate-float flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-700/15">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>

            <div className="space-y-3 text-sm text-blue-900/75">
              {[
                'Tell us the goal, bottleneck, and the systems or compliance work already in place.',
                'We map the right path across website, growth, reporting, finance, decks, or automation.',
                'You get direct coordination and a cleaner next-step plan from one team.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/85 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4 border-t border-blue-100/20 pt-8 text-sm text-blue-100/78">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> Business-first support</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> Clear scope and next steps</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> Direct WhatsApp updates</span>
        </div>
      </div>
    </section>
  );
}
