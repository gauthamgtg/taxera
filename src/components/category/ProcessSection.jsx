import { ArrowRight } from 'lucide-react';

export function ProcessSection({ content }) {
  return (
    <section className="relative px-4 py-20 md:px-8 lg:px-16">
      <div className="absolute inset-x-0 top-20 mx-auto h-64 max-w-4xl rounded-full bg-cyan-200/22 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">Process</span>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">{content.title}</h2>
        <div className="grid gap-4 lg:grid-cols-4">
          {content.steps.map((step, i) => (
            <article key={i} className="relative overflow-hidden rounded-[1.6rem] border border-blue-100/75 bg-white/88 p-6 shadow-[0_18px_44px_rgba(15,52,124,0.08)]">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[1.5rem] bg-gradient-to-bl from-blue-300/30 to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700/60">Step {step.num ?? `${i + 1}`.padStart(2, '0')}</span>
              <div className="relative">
                <h3 className="mb-2 mt-3 text-lg font-bold text-blue-950">{step.title}</h3>
                <p className="text-sm leading-relaxed text-blue-900/68">{step.desc}</p>
              </div>
              {i < content.steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-white text-blue-400 shadow-sm lg:block" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
