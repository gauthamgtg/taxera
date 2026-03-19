import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Share the requirement',
      desc: 'Start with a WhatsApp message or the relevant service page so the right category is captured from the start.',
    },
    {
      num: '02',
      title: 'Confirm scope and documents',
      desc: 'We align the service path, document checklist, and timing before any execution begins.',
    },
    {
      num: '03',
      title: 'Execute and follow through',
      desc: 'The team handles filing, coordination, and updates with one clear point of contact.',
    },
  ];

  return (
    <section id="how-it-works" className="px-4 py-24 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="section-label mb-3 block text-xs font-semibold uppercase">How It Works</span>
            <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              A clear process for registration, tax, and compliance delivery.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-900/65">
              Taxera keeps the workflow organized from the first conversation to final filing so founders and business teams do not have to coordinate multiple vendors.
            </p>
          </div>

          <div className="glass-panel rounded-[1.75rem] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700/55">Execution model</p>
                <p className="mt-2 text-lg font-semibold text-blue-950">Single desk. Clear routing. Direct updates.</p>
              </div>
              <div className="animate-pulse-glow flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {['Consultation-led', 'Document-first', 'WhatsApp support'].map((item) => (
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`step-card glass-panel relative overflow-hidden rounded-[1.9rem] p-6 md:p-7 ${
                i === 1 ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,244,255,0.92))]' : ''
              }`}
            >
              <div className="absolute right-4 top-4 text-5xl font-black text-blue-100/80">{step.num}</div>
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-xs font-semibold text-white shadow-lg shadow-blue-700/20">
                  {step.num}
                </div>
                <h3 className="mb-2 text-xl font-bold text-blue-950">{step.title}</h3>
                <p className="text-sm leading-relaxed text-blue-900/65">{step.desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700/70">
                <CheckCircle2 className="h-4 w-4 text-blue-500" />
                Structured handoff
              </div>
              {i < steps.length - 1 && <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-blue-300 lg:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
