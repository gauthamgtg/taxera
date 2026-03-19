import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Landmark,
  MessageCircle,
  Receipt,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { BRAND, HERO_SERVICES } from '../../config';

export function Hero() {
  const ref = useRef(null);
  const [currentService, setCurrentService] = useState(0);
  const processSteps = [
    {
      num: '01',
      label: 'Intake',
      title: 'Share the need',
      detail: 'Registration, GST, tax, payroll, or notices.',
    },
    {
      num: '02',
      label: 'Review',
      title: 'Review and route',
      detail: 'Docs checked and the right path lined up.',
    },
    {
      num: '03',
      label: 'Execution',
      title: 'File and follow up',
      detail: 'Filed, tracked, and followed up.',
    },
  ];
  const serviceSignals = [
    { icon: Building2, label: 'Business Setup' },
    { icon: Receipt, label: 'GST & TDS' },
    { icon: Landmark, label: 'Income Tax' },
    { icon: ShieldCheck, label: 'ROC & Notices' },
  ];
  const trustSignals = [
    '500+ businesses served across India',
    'Single desk across registration, tax, payroll, and finance support',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % HERO_SERVICES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-el', {
        y: 44,
        opacity: 0,
        stagger: 0.12,
        duration: 1.05,
        ease: 'expo.out',
        delay: 0.12,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden px-4 pb-12 pt-20 md:px-8 md:pt-24 lg:px-16 lg:pb-16 lg:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#f8fbff_0%,#edf5ff_46%,#e0ecff_100%)]" />
      <div className="absolute left-[-10%] top-[-14%] h-[30rem] w-[30rem] rounded-full bg-blue-300/28 blur-[120px]" />
      <div className="absolute right-[-6%] top-[6%] h-[32rem] w-[32rem] rounded-full bg-cyan-300/18 blur-[120px]" />
      <div className="absolute bottom-[-24%] left-[20%] h-[24rem] w-[24rem] rounded-full bg-blue-200/22 blur-[120px]" />
      <div className="site-bg-grid absolute inset-0 opacity-[0.14]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-10">
          <div>
            <div className="hero-el mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100/90 bg-white/85 px-3 py-1.5 shadow-sm shadow-blue-100/40">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-blue-900/70">Premium India desk for registration, tax, and compliance execution</span>
            </div>

            <h1 className="hero-el mb-6 max-w-4xl text-[2.35rem] font-bold leading-[1.02] tracking-tight text-blue-950 sm:text-5xl md:text-6xl lg:text-[5.2rem]">
              India&apos;s premium desk for{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                business registration, tax & compliance
              </span>
            </h1>

            <p className="hero-el mb-5 max-w-2xl text-lg leading-relaxed text-blue-900/68">
              Taxera helps founders, operators, and growing companies handle business registration, GST filing, income tax, ROC compliance, payroll, bookkeeping, and finance operations through one high-accountability team.
            </p>

            <div className="hero-el mb-7 h-8 overflow-hidden">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-blue-900/42">Now handling:</span>
                <span key={currentService} className="animate-fade-in font-semibold text-blue-700">
                  {HERO_SERVICES[currentService]}
                </span>
              </div>
            </div>

            <div className="hero-el flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={BRAND.consultationLink('your business goals')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
              >
                <CalendarDays className="h-4 w-4" />
                Book Consultation
              </a>
              <a
                href={BRAND.whatsappLink("Hi Taxera! I'd like to book a free consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-7 py-3.5 text-sm font-bold text-blue-900 shadow-sm transition-colors hover:bg-blue-50 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Connect on WhatsApp
              </a>
              <a
                href="#categories"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-200/80 px-7 py-3.5 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-50/70 sm:w-auto"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="hero-el mt-7 lg:hidden">
              <div className="dark-glass-panel relative overflow-hidden rounded-[1.8rem] p-4 text-white">
                <div className="absolute inset-x-5 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-blue-100/60">Execution model</p>
                      <p className="mt-1 text-sm font-semibold text-white">Three steps. One desk.</p>
                    </div>
                    <div className="animate-pulse-glow flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-blue-100">
                      <Sparkles className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {processSteps.map((step, index) => (
                      <div
                        key={step.num}
                        className={`rounded-[1.15rem] border border-blue-200/18 px-3 py-3 ${
                          index === 1 ? 'bg-cyan-300/12 shadow-[0_14px_34px_rgba(34,211,238,0.14)]' : 'bg-white/8'
                        }`}
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-white/12 text-[10px] font-semibold text-cyan-100">
                          {step.num}
                        </div>
                        <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-blue-100/55">{step.label}</p>
                        <p className="mt-1 text-xs font-semibold leading-snug text-white">{step.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-el mt-8 hidden gap-3 sm:grid sm:grid-cols-2">
              {trustSignals.map((line) => (
                <div
                  key={line}
                  className="rounded-[1.4rem] border border-blue-100/90 bg-white/82 px-4 py-3 text-sm leading-relaxed text-blue-900/70 shadow-sm shadow-blue-100/40"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-el hidden lg:block">
            <div className="dark-glass-panel relative h-[30rem] overflow-hidden rounded-[2.5rem] p-6 text-white xl:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.2),transparent_34%),linear-gradient(165deg,rgba(16,52,125,0.14),transparent_62%)]" />
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="absolute inset-x-8 top-[58%] h-px bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-blue-100/55">Execution model</p>
                    <p className="mt-2 max-w-lg text-[1.7rem] font-semibold leading-tight">High-accountability service delivery, mapped into one clean operating flow.</p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-100/72">
                      From requirement capture to filing follow-through, the work stays coordinated under one blue-chip service desk.
                    </p>
                  </div>
                  <div className="animate-pulse-glow flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-100">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceSignals.map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200/18 bg-white/8 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-blue-100/72"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </span>
                  ))}
                </div>

                <div className="relative mt-5 flex-1 rounded-[1.9rem] border border-blue-200/18 bg-blue-950/22 p-5">
                  <div className="relative grid h-full grid-cols-3 gap-4 items-center">
                    {processSteps.map((step, index) => (
                      <div
                        key={step.num}
                        className={`relative rounded-[1.5rem] border border-blue-200/16 px-5 py-5 ${
                          index === 1 ? 'animate-float-slow bg-cyan-300/12 shadow-[0_20px_40px_rgba(34,211,238,0.16)]' : 'bg-white/8'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-cyan-100">
                            {step.num}
                          </span>
                          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-blue-100/58">{step.label}</span>
                        </div>
                        <div className="mt-4 h-2 w-2 rounded-full bg-cyan-200/80" />
                        <p className="mt-4 text-[1.12rem] font-semibold leading-snug text-white">{step.title}</p>
                        <p className="mt-3 text-sm leading-relaxed text-blue-100/68">{step.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
