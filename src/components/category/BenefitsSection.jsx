import { CheckCircle } from 'lucide-react';

export function BenefitsSection({ content }) {
  return (
    <section className="relative px-4 py-20 md:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-16 mx-auto h-72 max-w-5xl rounded-full bg-blue-200/25 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">Benefits</span>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">{content.title}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, i) => (
            <div key={i} className="glass-panel relative overflow-hidden rounded-[1.75rem] p-6">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[1.75rem] bg-gradient-to-bl from-blue-300/30 to-transparent" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700/45">{`${i + 1}`.padStart(2, '0')}</p>
                <h3 className="mb-2 text-sm font-bold text-blue-950">{item.title}</h3>
                <p className="text-sm leading-relaxed text-blue-900/68">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
