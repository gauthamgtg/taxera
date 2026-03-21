import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../config';

function getTypeStyles(type) {
  if (type.includes('One-Time')) {
    return 'bg-emerald-50 text-emerald-700 border-emerald-100';
  }

  if (type.includes('Monthly')) {
    return 'bg-cyan-50 text-cyan-700 border-cyan-100';
  }

  if (type.includes('Annual') || type.includes('Quarterly')) {
    return 'bg-indigo-50 text-indigo-700 border-indigo-100';
  }

  return 'bg-blue-50 text-blue-700 border-blue-100';
}

export function ServiceList({ categoryId, services }) {
  const consultationLink = BRAND.consultationLink('the right service for my business');

  return (
    <section className="relative px-4 py-20 md:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-12 mx-auto h-80 max-w-5xl rounded-full bg-blue-200/30 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">Services</span>
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">
          Curated service options in this category
        </h3>
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-blue-900/65">
          Choose the exact service you need and move directly into consultation or WhatsApp.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((svc, i) => {
            const msg = `Hi Taxera! I'm interested in "${svc.name}". Please share details, timeline, and required documents.`;

            return (
              <div
                key={svc.name}
                className="glass-panel group relative overflow-hidden rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-200/60"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[1.75rem] bg-gradient-to-bl from-blue-300/30 to-transparent" />
                <div className="relative">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-[11px] font-semibold text-white shadow-lg shadow-blue-700/15">
                        {`${i + 1}`.padStart(2, '0')}
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700/45">Service item</p>
                        <h4 className="mt-1 text-base font-bold text-blue-950">{svc.name}</h4>
                      </div>
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${getTypeStyles(svc.type)}`}>
                      {svc.type}
                    </span>
                  </div>

                  <p className="min-h-[84px] text-sm leading-relaxed text-blue-900/70">{svc.desc}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to={`/services/${categoryId}/${svc.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-900 transition-colors hover:border-blue-300 hover:text-blue-700"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                      View Complete Page
                    </Link>
                    <a
                      href={BRAND.whatsappLink(msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#1da851]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Connect on WhatsApp
                    </a>
                    <a
                      href={consultationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-900 transition-colors hover:border-blue-300 hover:text-blue-700"
                    >
                      <CalendarDays className="h-3.5 w-3.5" />
                      Book Consultation
                    </a>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-blue-100 pt-4 text-xs text-blue-700/60">
                    <span>Tailored support available</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-blue-700">
                      Explore fit <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
