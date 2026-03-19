import { ArrowRight, Building2, Globe, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND } from '../../config';

export function StatsBar() {
  const stats = [
    {
      icon: Building2,
      value: BRAND.stats.services,
      label: 'Service pages',
      copy: 'Detailed service-level content',
    },
    {
      icon: Sparkles,
      value: BRAND.stats.categories,
      label: 'Specialist categories',
      copy: 'Registration, tax, and compliance',
    },
    {
      icon: Globe,
      value: BRAND.stats.clients,
      label: 'Businesses served',
      copy: 'Across India, with direct support',
    },
    {
      icon: MessageCircle,
      value: 'WhatsApp',
      label: 'Live coordination',
      copy: 'Fast follow-up and next steps',
    },
  ];

  return (
    <section className="relative z-10 -mt-10 px-4 md:px-8">
      <div className="glass-panel mx-auto max-w-7xl overflow-hidden rounded-[2.4rem]">
        <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8 lg:p-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,rgba(16,52,125,0.96),rgba(23,68,160,0.92))] p-6 text-white shadow-[0_20px_60px_rgba(14,43,102,0.24)]">
            <div className="absolute right-[-5rem] top-[-4rem] h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute left-[-3rem] bottom-[-4rem] h-36 w-36 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.24em] text-blue-100/60">Trusted starting point</p>
              <h2 className="mt-3 max-w-md text-2xl font-bold leading-tight md:text-3xl">
                A premium support desk for registration, tax, and compliance work in India.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-blue-100/75">
                Built for founders and growing teams that want a clear, coordinated way to move from enquiry to execution without switching between vendors.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {['Single accountable desk', 'India-focused filing support', 'Direct WhatsApp follow-up'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-blue-100/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group rounded-[1.7rem] border p-5 transition-all ${
                    index === 1
                      ? 'border-blue-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,245,255,0.9))] shadow-[0_18px_40px_rgba(18,56,131,0.09)]'
                      : 'border-blue-100 bg-white/86 shadow-sm shadow-blue-100/50'
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/15 transition-transform group-hover:-translate-y-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-blue-300 transition-transform group-hover:translate-x-0.5" />
                  </div>

                  <p className="text-[2rem] font-bold leading-none text-blue-950">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-blue-900/80">{stat.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-blue-900/60">{stat.copy}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-blue-100/80 px-6 py-4 md:px-8 lg:px-10">
          <p className="text-sm text-blue-900/65">
            Premium support for business registration, GST, income tax, ROC compliance, payroll, bookkeeping, and advisory.
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
            <ShieldCheck className="h-4 w-4" />
            India-focused service delivery
          </div>
        </div>
      </div>
    </section>
  );
}
