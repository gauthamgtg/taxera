import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  Bot,
  Briefcase,
  CalendarDays,
  Code,
  Landmark,
  LineChart,
  MessageCircle,
  Presentation,
  Receipt,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { BRAND, HERO_SERVICES } from '../../config';

const ORBITAL_CHIPS = [
  { label: 'Websites', Icon: Code, className: 'left-2 top-8 md:left-4' },
  { label: 'SEO', Icon: Sparkles, className: 'right-0 top-[4.5rem] md:right-4 md:top-14' },
  { label: 'Dashboards', Icon: LineChart, className: 'left-0 bottom-[5.5rem] md:left-6' },
  { label: 'AI Automations', Icon: Bot, className: 'right-6 bottom-14' },
  { label: 'GST', Icon: Receipt, className: 'left-10 bottom-2 md:left-[4.5rem]' },
  { label: 'Tax & ROC', Icon: Landmark, className: 'right-0 top-1/2 md:right-6' },
];

const HERO_METRICS = [
  { value: '74+', label: 'service lines' },
  { value: '15', label: 'core categories' },
  { value: '1', label: 'execution desk' },
];

export function Hero() {
  const ref = useRef(null);
  const orbitRef = useRef(null);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % HERO_SERVICES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-el', {
        y: 44,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'expo.out',
        delay: 0.08,
      });

      gsap.to('.earth-core', {
        y: -10,
        duration: 5.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      const panel = orbitRef.current;
      if (!panel) return;

      const handleMove = (event) => {
        const rect = panel.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to('.parallax-layer', {
          x: x * 26,
          y: y * 18,
          duration: 0.9,
          ease: 'power3.out',
          overwrite: 'auto',
        });

        gsap.to('.parallax-chip', {
          x: x * -20,
          y: y * -14,
          duration: 1.1,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      };

      const reset = () => {
        gsap.to('.parallax-layer, .parallax-chip', {
          x: 0,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      };

      panel.addEventListener('mousemove', handleMove);
      panel.addEventListener('mouseleave', reset);

      return () => {
        panel.removeEventListener('mousemove', handleMove);
        panel.removeEventListener('mouseleave', reset);
      };
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden px-4 pb-16 pt-20 md:px-8 md:pt-24 lg:px-16 lg:pb-20 lg:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#f8fbff_0%,#edf5ff_46%,#e0ecff_100%)]" />
      <div className="absolute left-[-10%] top-[-14%] h-[30rem] w-[30rem] rounded-full bg-blue-300/28 blur-[120px]" />
      <div className="absolute right-[-6%] top-[6%] h-[32rem] w-[32rem] rounded-full bg-cyan-300/18 blur-[120px]" />
      <div className="absolute bottom-[-24%] left-[20%] h-[24rem] w-[24rem] rounded-full bg-blue-200/22 blur-[120px]" />
      <div className="site-bg-grid absolute inset-0 opacity-[0.14]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-12">
          <div>
            <div className="hero-el mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100/90 bg-white/85 px-3 py-1.5 shadow-sm shadow-blue-100/40">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-medium text-blue-900/70">One desk for Business OS execution plus finance, tax, and compliance support</span>
            </div>

            <h1 className="hero-el max-w-5xl text-[2.5rem] font-bold leading-[0.98] tracking-tight text-blue-950 sm:text-5xl md:text-6xl lg:text-[5.4rem]">
              Build your
              <span className="block bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Business OS
              </span>
              <span className="block text-[0.62em] font-semibold leading-[1.05] text-blue-950/92">
                without dropping the finance and compliance layer
              </span>
            </h1>

            <p className="hero-el mt-6 max-w-2xl text-lg leading-relaxed text-blue-900/68">
              Taxera handles the visible growth systems and the operational foundation under them: websites, SEO, PPTs, slide decks, pitch decks, analytics, dashboards, AI automations, chatbot integrations, GST, tax, ROC, payroll, bookkeeping, and advisory.
            </p>

            <div className="hero-el mt-5 h-8 overflow-hidden">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-blue-900/42">Now handling:</span>
                <span key={currentService} className="animate-fade-in font-semibold text-blue-700">
                  {HERO_SERVICES[currentService]}
                </span>
              </div>
            </div>

            <div className="hero-el mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={BRAND.consultationLink('your business systems, finance, or compliance goals')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
              >
                <CalendarDays className="h-4 w-4" />
                Book Consultation
              </a>
              <a
                href={BRAND.whatsappLink("Hi Taxera! I'd like to discuss Business OS services and finance/compliance support for my company.")}
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

            <div className="hero-el mt-8 grid gap-3 sm:grid-cols-3">
              {HERO_METRICS.map((item) => (
                <div key={item.label} className="rounded-[1.55rem] border border-blue-100/90 bg-white/84 px-4 py-4 shadow-sm shadow-blue-100/40">
                  <p className="text-2xl font-bold leading-none text-blue-950">{item.value}</p>
                  <p className="mt-2 text-sm text-blue-900/62">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="hero-el mt-6 flex flex-wrap gap-2.5">
              {[
                { label: 'Web + Growth', Icon: Code },
                { label: 'Decks + Storytelling', Icon: Presentation },
                { label: 'Analytics + Dashboards', Icon: LineChart },
                { label: 'GST + Tax + ROC', Icon: Receipt },
                { label: 'Payroll + Books + CFO', Icon: Briefcase },
                { label: 'AI + Chatbots', Icon: Bot },
              ].map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/82 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div ref={orbitRef} className="hero-el relative hidden min-h-[41rem] lg:block">
            <div className="hero-cosmic-panel absolute inset-0 overflow-hidden rounded-[2.7rem] p-7 text-white">
              <div className="star-field absolute inset-0 opacity-60" />
              <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent" />
              <div className="absolute left-[-12%] top-[8%] h-52 w-52 rounded-full bg-blue-400/10 blur-3xl" />
              <div className="absolute bottom-[-12%] right-[-4%] h-56 w-56 rounded-full bg-cyan-300/14 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-md">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-blue-100/55">Execution model</p>
                    <p className="mt-2 text-[1.7rem] font-semibold leading-tight">
                      Growth systems and financial operations orbiting one execution layer.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-blue-100/72">
                      Use one operating desk instead of splitting website, SEO, automation, GST, bookkeeping, and compliance across different vendors.
                    </p>
                  </div>
                  <div className="animate-pulse-glow flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-100">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { label: 'Websites', Icon: Code },
                    { label: 'Decks', Icon: Presentation },
                    { label: 'Analytics', Icon: LineChart },
                    { label: 'Automation', Icon: Bot },
                    { label: 'GST', Icon: Receipt },
                    { label: 'Tax & Compliance', Icon: ShieldCheck },
                  ].map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200/18 bg-white/8 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-blue-100/72"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </span>
                  ))}
                </div>

                <div className="relative mt-8 flex flex-1 items-center justify-center">
                  <div className="parallax-layer absolute inset-0">
                    <div className="cosmic-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
                  </div>

                  <div className="parallax-layer relative flex h-[26rem] w-[26rem] items-center justify-center">
                    <div className="earth-ring animate-orbit absolute h-[24rem] w-[24rem] rounded-full" />
                    <div className="earth-ring animate-orbit-reverse absolute h-[28rem] w-[28rem] rounded-full opacity-70" />
                    <div className="earth-ring absolute h-[30rem] w-[18rem] rounded-full opacity-30" />

                    <div className="earth-core earth-sphere relative h-[18rem] w-[18rem] overflow-hidden rounded-full">
                      <div className="earth-grid absolute inset-[8%] rounded-full" />
                      <div className="absolute left-[16%] top-[26%] h-12 w-20 rounded-[48%] bg-cyan-300/18 blur-md" />
                      <div className="absolute right-[20%] top-[34%] h-14 w-16 rounded-[45%] bg-blue-200/18 blur-md" />
                      <div className="absolute bottom-[20%] left-[28%] h-16 w-24 rounded-[50%] bg-cyan-200/16 blur-md" />
                    </div>

                    {ORBITAL_CHIPS.map(({ label, Icon, className }) => (
                      <div
                        key={label}
                        className={`parallax-chip orbital-chip absolute inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-50 ${className}`}
                      >
                        <Icon className="h-3.5 w-3.5 text-cyan-200" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { num: '01', title: 'Audit', detail: 'Find the real blocker across growth or operations.' },
                    { num: '02', title: 'Design', detail: 'Build the website, workflow, reporting, or filing path.' },
                    { num: '03', title: 'Operate', detail: 'Launch, optimize, track, and keep the system moving.' },
                  ].map((step, index) => (
                    <div
                      key={step.num}
                      className={`rounded-[1.45rem] border border-blue-200/16 px-4 py-4 ${
                        index === 1 ? 'bg-cyan-300/10 shadow-[0_20px_40px_rgba(34,211,238,0.14)]' : 'bg-white/8'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-cyan-100">
                          {step.num}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.16em] text-blue-100/58">{step.title}</span>
                      </div>
                      <p className="mt-4 text-lg font-semibold leading-snug text-white">{step.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-blue-100/68">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
