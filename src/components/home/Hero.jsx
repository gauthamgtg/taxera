import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  CalendarDays,
  Code,
  Landmark,
  LineChart,
  MessageCircle,
  Receipt,
  Scale,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { BRAND } from '../../config';

const clamp = (v, min = 0, max = 1) => Math.min(Math.max(v, min), max);

const FINANCE_NOW_HANDLING = [
  'GST filing and compliance management',
  'Income tax filing and notice responses',
  'Payroll, PF, and ESI operations',
  'Bookkeeping, reconciliations, and cleanup',
  'ROC and MCA compliance support',
  'CFO advisory and MIS reporting',
];

const GROWTH_NOW_HANDLING = [
  'Website design and development',
  'SEO optimization and technical audits',
  'Analytics and dashboard implementation',
  'AI automation workflows',
  'Chatbot integrations for web and WhatsApp',
  'Conversion-focused landing pages',
];

const FINANCE_METRICS = [
  { value: '42+', label: 'finance and compliance service lines' },
  { value: '12', label: 'core finance workflows' },
  { value: '1', label: 'execution desk for finance ops' },
];

const GROWTH_METRICS = [
  { value: '32+', label: 'website and growth service lines' },
  { value: '8', label: 'delivery systems for growth' },
  { value: '1', label: 'execution desk for growth ops' },
];

const FINANCE_CHIPS = [
  { label: 'GST', Icon: Receipt, className: 'left-[8%] top-[34%] lg:left-[12%]' },
  { label: 'Income Tax', Icon: Landmark, className: 'right-[8%] top-[34%] lg:right-[12%]' },
  { label: 'Payroll', Icon: Briefcase, className: 'left-[4%] top-[50%] lg:left-[8%]' },
  { label: 'ROC', Icon: ShieldCheck, className: 'right-[4%] top-[50%] lg:right-[8%]' },
  { label: 'Bookkeeping', Icon: Building2, className: 'left-[2%] top-[73%] lg:left-[6%]' },
  { label: 'CFO Support', Icon: Scale, className: 'right-[2%] top-[73%] lg:right-[6%]' },
];

const GROWTH_CHIPS = [
  { label: 'Websites', Icon: Code, className: 'left-[14%] bottom-[64%] lg:left-[18%]' },
  { label: 'SEO', Icon: Search, className: 'right-[14%] bottom-[64%] lg:right-[18%]' },
  { label: 'Analytics', Icon: LineChart, className: 'left-[4%] bottom-[50%] lg:left-[8%]' },
  { label: 'AI Automation', Icon: Bot, className: 'right-[4%] bottom-[50%] lg:right-[8%]' },
  { label: 'Dashboards', Icon: LineChart, className: 'left-[8%] bottom-[34%] lg:left-[12%]' },
  { label: 'Chatbots', Icon: MessageCircle, className: 'right-[8%] bottom-[34%] lg:right-[12%]' },
];

function MetricsRow({ metrics, compact = false }) {
  return (
    <div className={`mx-auto grid max-w-4xl gap-3 sm:grid-cols-3 ${compact ? 'mt-6' : 'mt-8'}`}>
      {metrics.map((item) => (
        <div
          key={item.label}
          className={`rounded-[1.55rem] border border-blue-100/90 bg-white/84 text-center shadow-sm shadow-blue-100/45 backdrop-blur-sm ${
            compact ? 'px-4 py-3' : 'px-5 py-5'
          }`}
        >
          <p className={`${compact ? 'text-2xl' : 'text-3xl'} font-bold leading-none text-blue-950`}>{item.value}</p>
          <p className={`${compact ? 'mt-1 text-xs' : 'mt-2 text-sm'} text-blue-900/62`}>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function CtaRow({ primaryText, secondaryText, secondaryLink, compact = false }) {
  const buttonPadding = compact ? 'px-6 py-3' : 'px-7 py-3.5';
  const textSize = compact ? 'text-[0.94rem]' : 'text-sm';

  return (
    <div className={`${compact ? 'mt-6' : 'mt-8'} flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center`}>
      <a
        href={BRAND.consultationLink('your business systems, finance, or compliance goals')}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 ${buttonPadding} ${textSize} font-bold text-white shadow-lg shadow-blue-500/25 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-500`}
      >
        <CalendarDays className="h-4 w-4" />
        {primaryText}
      </a>
      <a
        href={secondaryLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/92 ${buttonPadding} ${textSize} font-bold text-blue-900 shadow-sm backdrop-blur-sm transition-colors hover:bg-blue-50`}
      >
        <MessageCircle className="h-4 w-4" />
        {secondaryText}
      </a>
      <a
        href="#categories"
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-blue-200/80 bg-white/58 ${buttonPadding} ${textSize} font-semibold text-blue-800 backdrop-blur-sm transition-colors hover:bg-blue-50/80`}
      >
        Explore Services <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export function Hero() {
  const ref = useRef(null);
  const interactiveRef = useRef(null);
  const lockRef = useRef(false);
  const secondSectionHoldUntilRef = useRef(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  const [exitProgress, setExitProgress] = useState(0);
  const [sphereVisible, setSphereVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => prev + 1);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = ref.current;
    if (!section) return undefined;

    let rafId = null;

    const update = () => {
      rafId = null;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const rawPhase = -rect.top / Math.max(viewport, 1);
      setPhaseProgress(clamp(rawPhase, 0, 1));
      setExitProgress(clamp(rawPhase - 1, 0, 1));
      setSphereVisible(rect.top < viewport && rect.bottom > 0);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const section = ref.current;
    if (!section) return undefined;
    const SNAP_LOCK_MS = 1000;
    const SECOND_SECTION_HOLD_MS = 1500;

    const snapTo = (targetTop, holdSecond = false) => {
      lockRef.current = true;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
      if (holdSecond) {
        secondSectionHoldUntilRef.current = Date.now() + SECOND_SECTION_HOLD_MS;
      }
      window.setTimeout(() => {
        lockRef.current = false;
      }, SNAP_LOCK_MS);
    };

    const onWheel = (event) => {
      const heroTop = section.offsetTop;
      const viewport = window.innerHeight;
      const firstSnap = heroTop;
      const secondSnap = heroTop + viewport;
      const thirdSnap = heroTop + viewport * 2;
      const y = window.scrollY;
      const nearFirst = Math.abs(y - firstSnap) < viewport * 0.48;
      const nearSecond = Math.abs(y - secondSnap) < viewport * 0.48;
      const nearSecondTight = Math.abs(y - secondSnap) < viewport * 0.24;
      const nearThird = Math.abs(y - thirdSnap) < viewport * 0.48;
      const inHeroRange = y >= firstSnap - 4 && y <= thirdSnap + 4;

      if (lockRef.current) {
        if (inHeroRange) event.preventDefault();
        return;
      }

      const secondHoldActive = Date.now() < secondSectionHoldUntilRef.current;
      if (secondHoldActive && nearSecond) {
        event.preventDefault();
        return;
      }

      if (event.deltaY > 0 && nearFirst) {
        event.preventDefault();
        snapTo(secondSnap, true);
      } else if (event.deltaY > 0 && nearSecondTight) {
        event.preventDefault();
        snapTo(thirdSnap);
      } else if (event.deltaY < 0 && nearSecond) {
        event.preventDefault();
        snapTo(firstSnap);
      } else if (event.deltaY < 0 && nearThird) {
        event.preventDefault();
        snapTo(secondSnap, true);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, []);

  useEffect(() => {
    const root = ref.current;
    const interactive = interactiveRef.current;
    if (!root || !interactive) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const handleMove = (event) => {
      const rect = root.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(interactive, {
        rotateY: x * 9,
        rotateX: y * -6,
        duration: 0.9,
        ease: 'power3.out',
        overwrite: 'auto',
      });

      gsap.to('.hero-chip', {
        x: x * -12,
        y: y * -10,
        duration: 0.9,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    const reset = () => {
      gsap.to(interactive, {
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: 'power3.out',
        overwrite: 'auto',
      });
      gsap.to('.hero-chip', {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    root.addEventListener('mousemove', handleMove);
    root.addEventListener('mouseleave', reset);
    return () => {
      root.removeEventListener('mousemove', handleMove);
      root.removeEventListener('mouseleave', reset);
    };
  }, []);

  const t = clamp(phaseProgress);
  const sphereOpacity = sphereVisible ? clamp(1 - exitProgress * 3.2, 0, 1) : 0;
  const sectionTransition = clamp(t / 0.9);
  const sphereStartY = 56;
  const sphereEndY = -56;
  const sphereTranslateY = `${sphereStartY + (sphereEndY - sphereStartY) * sectionTransition}svh`;
  const sphereRotateX = 2 + t * 7;
  const sphereRotateY = -10 + t * 16;
  const sphereRotateZ = t * 10;
  const financeChipOpacity = clamp(1 - t * 1.6, 0, 1) * clamp(1 - exitProgress * 3, 0, 1);
  const growthChipOpacity = clamp((t - 0.22) * 1.45, 0, 1) * clamp(1 - exitProgress * 3, 0, 1);

  const financeService = FINANCE_NOW_HANDLING[serviceIndex % FINANCE_NOW_HANDLING.length];
  const growthService = GROWTH_NOW_HANDLING[serviceIndex % GROWTH_NOW_HANDLING.length];

  return (
    <section ref={ref} className="relative h-[200svh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(31,99,255,0.14),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(11,178,255,0.15),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.74),rgba(236,244,255,0.92))]" />
      <div className="site-bg-grid absolute inset-0 opacity-[0.08]" />

      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[100svh] overflow-hidden transition-opacity duration-300"
        style={{ opacity: sphereOpacity, visibility: sphereVisible ? 'visible' : 'hidden' }}
      >
        {FINANCE_CHIPS.map((chip) => {
          const ChipIcon = chip.Icon;
          return (
            <div
              key={chip.label}
              className={`hero-chip orbital-chip absolute hidden items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-50 shadow-[0_18px_40px_rgba(7,25,72,0.18)] transition-opacity duration-500 md:inline-flex ${chip.className}`}
              style={{ opacity: financeChipOpacity }}
            >
              <ChipIcon className="h-3.5 w-3.5 text-cyan-200" />
              {chip.label}
            </div>
          );
        })}
        {GROWTH_CHIPS.map((chip) => {
          const ChipIcon = chip.Icon;
          return (
            <div
              key={chip.label}
              className={`hero-chip orbital-chip absolute hidden items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-50 shadow-[0_18px_40px_rgba(7,25,72,0.18)] transition-opacity duration-500 md:inline-flex ${chip.className}`}
              style={{ opacity: growthChipOpacity }}
            >
              <ChipIcon className="h-3.5 w-3.5 text-cyan-200" />
              {chip.label}
            </div>
          );
        })}

        <div className="absolute left-1/2 top-1/2">
          <div
            className="hero-sphere-shell relative transition-[transform] duration-300 ease-out"
            style={{
              transform: `translate(-50%, -50%) translateY(${sphereTranslateY}) rotateX(${sphereRotateX}deg) rotateY(${sphereRotateY}deg) rotateZ(${sphereRotateZ}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              ref={interactiveRef}
              className="relative h-[95svh] w-[95svh] sm:h-[105svh] sm:w-[105svh] lg:h-[112svh] lg:w-[112svh]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="hero-sphere-halo absolute inset-[-8%] rounded-full" />
              <div className="earth-orbit animate-orbit absolute inset-[2%] rounded-full" />
              <div className="earth-orbit animate-orbit-reverse absolute inset-[-6%] rounded-full opacity-70" />
              <div className="earth-orbit-tilt absolute left-[14%] top-[10%] h-[80%] w-[60%] rounded-full opacity-35" />
              <div className="hero-sphere-back absolute inset-[7%] rounded-full" />

              <div className="earth-sphere absolute inset-0 overflow-hidden rounded-full">
                <div className="earth-shine absolute left-[16%] top-[14%] h-[24%] w-[24%] rounded-full blur-2xl" />
                <div className="earth-grid absolute inset-[12%] rounded-full" />
                <div className="absolute left-[20%] top-[20%] h-[14%] w-[44%] rounded-[45%] bg-blue-100/16 blur-[10px]" />
                <div className="absolute right-[16%] top-[32%] h-[16%] w-[32%] rounded-[48%] bg-cyan-200/14 blur-[12px]" />
                <div className="absolute left-[14%] bottom-[24%] h-[16%] w-[52%] rounded-[46%] bg-cyan-300/22 blur-[14px]" />
                <div className="absolute right-[14%] bottom-[18%] h-[20%] w-[34%] rounded-[48%] bg-blue-300/24 blur-[12px]" />
                <div className="earth-shadow-shelf absolute bottom-[10%] left-[10%] h-[22%] w-[70%] rounded-[42%]" />
                <div className="earth-lower-mass hero-sphere-growth-mass absolute bottom-[4%] right-[8%] h-[30%] w-[56%] rounded-[46%]" />
                <div className="hero-sphere-rim hero-sphere-rim-combined absolute inset-0 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 z-20">
        <div className="min-h-[100svh] px-4 pb-[8svh] pt-[14svh] md:px-8 lg:px-16">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-[2.85rem] font-bold leading-[0.94] tracking-tight text-blue-950 sm:text-6xl lg:text-[5.45rem]">
              Finance, tax, payroll,
              <span className="block bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                and compliance
              </span>
              <span className="block text-[0.48em] font-semibold leading-[1.03] text-blue-950/92">
                managed from one execution desk
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-blue-900/68">
              We run GST, income tax, ROC, payroll, bookkeeping, notices, and advisory through one accountable workflow so your finance operations stay clean and on schedule.
            </p>
            <div className="mt-6 h-8 overflow-hidden">
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-blue-900/42">Now handling:</span>
                <span key={`finance-${serviceIndex}`} className="animate-fade-in font-semibold text-blue-700">
                  {financeService}
                </span>
              </div>
            </div>
            <CtaRow
              primaryText="Book Consultation"
              secondaryText="Connect on WhatsApp"
              secondaryLink={BRAND.whatsappLink("Hi Taxera! I'd like to discuss finance, tax, payroll, and compliance support for my company.")}
            />
            <MetricsRow metrics={FINANCE_METRICS} />
          </div>
        </div>

        <div className="min-h-[100svh] px-4 pb-[8svh] pt-[51svh] md:px-8 md:pt-[52svh] lg:px-16 lg:pt-[54svh]">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-[1.95rem] font-bold leading-[0.98] tracking-tight text-blue-950 sm:text-[2.75rem] lg:text-[3.2rem]">
              Websites, SEO, dashboards,
              <span className="block bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                analytics, chatbots,
              </span>
              <span className="block text-[0.52em] font-semibold leading-[1.02] text-blue-950/92">
                and AI automations
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-blue-900/68 sm:text-[1.02rem]">
              We build and operate your website and growth systems end-to-end, including SEO, reporting, dashboards, automation workflows, and chatbot integrations.
            </p>
            <div className="mt-3 h-8 overflow-hidden">
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-blue-900/42">Now handling:</span>
                <span key={`growth-${serviceIndex}`} className="animate-fade-in font-semibold text-blue-700">
                  {growthService}
                </span>
              </div>
            </div>
            <CtaRow
              primaryText="Start Website + SEO Build"
              secondaryText="Discuss Growth Systems"
              secondaryLink={BRAND.whatsappLink("Hi Taxera! I'd like to discuss websites, SEO, dashboards, automations, and growth systems for my company.")}
              compact
            />
            <MetricsRow metrics={GROWTH_METRICS} compact />
          </div>
        </div>
      </div>
    </section>
  );
}
