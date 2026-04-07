import { ArrowRight, CalendarDays, CheckCircle2, MessageCircle } from 'lucide-react';
import { BRAND } from '../../config';

export function ConsultationSection({ category, content }) {
  const consultationTopic = category.name;
  const bookingLink = BRAND.consultationLink(consultationTopic);

  return (
    <section className="px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100/70 bg-[linear-gradient(150deg,#ffffff_0%,#f1f7ff_55%,#eef4ff_100%)] p-6 shadow-[0_24px_60px_rgba(14,52,126,0.1)] md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <span className="section-label mb-3 inline-flex rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]">
              Consultation booking
            </span>
            <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Get a focused consultation for {category.name}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-900/72">
              We review your exact context, suggest the right service path, and define clear next steps before execution starts.
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
          </div>

          <div className="rounded-[1.6rem] border border-blue-100 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-blue-700/58">What happens next</p>
            <div className="mt-4 space-y-3">
              {[
                'Share business context and current challenge',
                'Get a recommended service route and timeline',
                'Start execution with documented scope',
              ].map((line) => (
                <div key={line} className="flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm text-blue-900/82">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    {line}
                  </span>
                  <ArrowRight className="h-4 w-4 text-blue-600/55" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
