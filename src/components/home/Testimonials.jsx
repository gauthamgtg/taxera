import { ArrowRight, Quote, Star } from 'lucide-react';
import { BRAND, TESTIMONIALS } from '../../config';

export function Testimonials() {
  return (
    <section className="relative px-4 py-24 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="section-label mb-3 block text-xs font-semibold uppercase">Testimonials</span>
            <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              Trusted by teams that need coordinated execution, not hand-offs.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-900/65">
              Taxera is built for founders and operators who want one accountable partner across website delivery, growth systems, deck creation, reporting, automation, and the finance/compliance layer under it.
            </p>
          </div>

          <div className="glass-panel rounded-[1.75rem] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-blue-700/50">What clients value</p>
                <p className="mt-2 text-sm leading-relaxed text-blue-900/70">
                  Consistent communication, structured follow-through, and one team that keeps the website, story, data, automation, and compliance layers moving together.
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/15">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {[`${BRAND.stats.clients}+ teams supported`, 'Direct WhatsApp coordination', 'Growth plus compliance support'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testi-card glass-panel relative overflow-hidden rounded-[1.75rem] p-7">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] bg-gradient-to-bl from-blue-300/30 to-transparent" />
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-900 shadow-sm">
                  <Quote className="h-4 w-4" />
                </div>
              </div>

              <p className="mb-5 text-base leading-relaxed text-blue-900/72">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-blue-100 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700">
                  <span className="text-xs font-bold text-white">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-950">{t.name}</p>
                  <p className="text-xs text-blue-700/55">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
