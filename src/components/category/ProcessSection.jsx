import { ArrowRight } from 'lucide-react';

export function ProcessSection({ content }) {
  return (
    <section className="bg-white/50 px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">Process</span>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">{content.title}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, i) => (
            <div key={i} className="relative rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm">
              <span className="absolute right-4 top-4 text-5xl font-black text-blue-100">{step.num ?? `${i + 1}`.padStart(2, '0')}</span>
              <div className="relative">
                <h3 className="mb-2 mt-8 text-base font-bold text-blue-950">{step.title}</h3>
                <p className="text-sm leading-relaxed text-blue-900/65">{step.desc}</p>
              </div>
              {i < content.steps.length - 1 && (
                <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-blue-300 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
