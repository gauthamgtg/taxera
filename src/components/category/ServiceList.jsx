import {
  ArrowRight,
  CalendarDays,
  CircleCheck,
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
    <section id="services-list" className="relative px-4 py-20 md:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-8 mx-auto h-[22rem] max-w-6xl rounded-full bg-blue-300/25 blur-[90px]" />

      <div className="mx-auto max-w-7xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">Services</span>
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">Pick the exact service route you need</h3>
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-blue-900/68">
          Every row below is a direct path. Review scope quickly, then move into a dedicated detail page or instant consultation.
        </p>

        <div className="space-y-4">
          {services.map((svc, i) => {
            const msg = `Hi Taxera! I'm interested in "${svc.name}". Please share details, timeline, and required documents.`;

            return (
              <article
                key={svc.name}
                className="group relative overflow-hidden rounded-[1.7rem] border border-blue-100/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,248,255,0.88))] p-5 shadow-[0_22px_44px_rgba(16,50,124,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/70 hover:shadow-[0_30px_60px_rgba(16,50,124,0.14)] md:p-6"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,#2f6dff,#16b4ff)]" />
                <div className="relative grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-xs font-semibold text-white shadow-lg shadow-blue-700/20">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700/55">Service item</p>
                      <span className={`mt-1 inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${getTypeStyles(svc.type)}`}>
                        {svc.type}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-blue-950">{svc.name}</h4>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-blue-900/72">{svc.desc}</p>
                    <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700/70">
                      <CircleCheck className="h-3.5 w-3.5" />
                      Structured scope and clear delivery route
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 lg:max-w-[270px] lg:justify-end">
                    <Link
                      to={`/services/${categoryId}/${svc.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-900 transition-colors hover:border-blue-300 hover:text-blue-700"
                    >
                      View Complete Page
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={BRAND.whatsappLink(msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#1da851]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                    <a
                      href={consultationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-900 transition-colors hover:border-blue-300 hover:text-blue-700"
                    >
                      <CalendarDays className="h-3.5 w-3.5" />
                      Consultation
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-blue-100 bg-white/88 px-5 py-4 text-sm text-blue-900/74">
          <p className="inline-flex items-center gap-2 font-semibold text-blue-900">
            <CircleCheck className="h-4 w-4 text-blue-600" />
            Not sure which option fits best?
          </p>
          <p className="mt-1">
            Send your context on WhatsApp and get a direct recommendation instead of choosing blindly.
          </p>
        </div>
      </div>
    </section>
  );
}

