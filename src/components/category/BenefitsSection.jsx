import { CheckCircle } from 'lucide-react';

export function BenefitsSection({ content }) {
  return (
    <section className="relative px-4 py-20 md:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-16 mx-auto h-72 max-w-5xl rounded-full bg-blue-200/25 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">Benefits</span>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">{content.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-blue-900/72">
              This category is designed to remove confusion quickly and move you from decision fatigue into structured execution.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] border border-blue-100 bg-white/90 shadow-[0_22px_56px_rgba(17,52,126,0.1)]">
            {content.items.map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 px-5 py-5 md:px-6 ${i === content.items.length - 1 ? '' : 'border-b border-blue-100'}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700/55">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1 text-base font-bold text-blue-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-blue-900/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
