import { useEffect, useRef, useState } from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { Hero } from '../components/home/Hero';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { HowItWorks } from '../components/home/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
import { HomeFaq, HOME_FAQS } from '../components/home/HomeFaq';
import { CTA } from '../components/home/CTA';

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Taxera",
  "description": "Business OS consulting plus finance, tax, GST, ROC, payroll, bookkeeping, dashboard, deck, and automation services.",
  "url": "https://taxera.in",
  "telephone": "+919626973297",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressCountry": "IN"
  },
  "areaServed": ["India"],
  "serviceType": ["Website Design Services", "SEO Optimization Services", "Pitch Deck Design", "Dashboard Creation", "AI Automation Services", "Chatbot Integration Services", "Business Registration Services", "GST Filing Services", "Income Tax Filing Services", "ROC Compliance Services", "Payroll Processing", "Bookkeeping Services", "Virtual CFO Services"]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": HOME_FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

const HOME_SECTION_NAV = [
  { label: 'Hero' },
  { label: 'Services' },
  { label: 'Process' },
  { label: 'Proof' },
  { label: 'FAQs' },
  { label: 'Contact' },
];

export function HomePage() {
  const homeSnapLockRef = useRef(false);
  const homeSnapTargetRef = useRef(null);
  const lastWheelAtRef = useRef(0);
  const lastWheelDirectionRef = useRef(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    const getSnapSections = () =>
      Array.from(document.querySelectorAll('[data-home-snap]'));

    const SNAP_LOCK_MS = 1100;
    const MIN_SNAP_DELTA = 18;
    const HERO_EXIT_BUFFER = 4;
    const WHEEL_GESTURE_GAP_MS = 180;

    const releaseSnapLock = () => {
      homeSnapLockRef.current = false;
      homeSnapTargetRef.current = null;
    };

    const getActiveSectionIndex = (sectionTargets) => {
      const scanPoint = window.scrollY + window.innerHeight * 0.4;
      let index = 0;

      for (let i = 0; i < sectionTargets.length; i += 1) {
        if (sectionTargets[i] <= scanPoint) {
          index = i;
        } else {
          break;
        }
      }

      return index;
    };

    const onScroll = () => {
      const sections = getSnapSections();
      if (sections.length > 0) {
        const sectionTargets = sections.map((section) => section.offsetTop);
        setActiveSectionIndex(getActiveSectionIndex(sectionTargets));
      }

      const targetTop = homeSnapTargetRef.current;
      if (targetTop === null) return;
      if (Math.abs(window.scrollY - targetTop) <= 4) {
        window.setTimeout(releaseSnapLock, 120);
      }
    };

    const onWheel = (event) => {
      const sections = getSnapSections();
      if (sections.length < 2) return;
      if (Math.abs(event.deltaY) < MIN_SNAP_DELTA) return;

      const y = window.scrollY;
      const heroSection = sections[0];
      const heroTop = heroSection.offsetTop;
      const heroBottom = heroTop + heroSection.offsetHeight;
      const sectionTargets = sections.map((section) => section.offsetTop);

      if (y >= heroTop - 2 && y < heroBottom + HERO_EXIT_BUFFER) {
        return;
      }

      if (homeSnapLockRef.current) {
        event.preventDefault();
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const now = Date.now();
      const isNewGesture =
        direction !== lastWheelDirectionRef.current ||
        now - lastWheelAtRef.current > WHEEL_GESTURE_GAP_MS;

      lastWheelDirectionRef.current = direction;
      lastWheelAtRef.current = now;

      if (!isNewGesture) {
        event.preventDefault();
        return;
      }

      let currentIndex = 0;
      for (let index = 0; index < sectionTargets.length; index += 1) {
        if (sectionTargets[index] <= y + HERO_EXIT_BUFFER) {
          currentIndex = index;
        } else {
          break;
        }
      }

      const targetIndex = Math.min(sections.length - 1, Math.max(0, currentIndex + direction));

      if (targetIndex === currentIndex) return;

      event.preventDefault();
      homeSnapLockRef.current = true;
      homeSnapTargetRef.current = sectionTargets[targetIndex];
      window.scrollTo({ top: homeSnapTargetRef.current, behavior: 'smooth' });
      window.setTimeout(releaseSnapLock, SNAP_LOCK_MS);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onWheel);
    };
  }, []);

  const handleSectionNavigate = (sectionIndex) => {
    const sections = Array.from(document.querySelectorAll('[data-home-snap]'));
    const targetSection = sections[sectionIndex];
    if (!targetSection) return;

    const targetTop = targetSection.offsetTop;
    homeSnapLockRef.current = true;
    homeSnapTargetRef.current = targetTop;
    setActiveSectionIndex(sectionIndex);
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
    window.setTimeout(() => {
      if (Math.abs(window.scrollY - targetTop) <= 4) {
        homeSnapLockRef.current = false;
        homeSnapTargetRef.current = null;
      }
    }, 1100);
  };

  return (
    <>
      <SEOHead
        title="Taxera | Business OS, Finance, Tax, GST, ROC, Payroll, Decks & AI Automations"
        description="Taxera helps growth-focused teams build a complete Business OS while also handling business registration, GST, income tax, ROC, payroll, bookkeeping, and advisory support."
        keywords={["business os services", "website design and development", "seo optimization services", "website audit service", "website optimization service", "ppt making service", "slide deck design", "pitch deck creation", "dashboard creation service", "analytics setup service", "ai automations", "chatbot integrations", "business registration services india", "gst filing services india", "income tax filing india", "roc compliance services", "payroll processing india", "bookkeeping services india", "virtual cfo services india"]}
        canonical="https://taxera.in/"
        jsonLd={[orgJsonLd, faqJsonLd]}
      />
      <nav
        aria-label="Home section navigation"
        className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      >
        <div className="pointer-events-auto rounded-[1.8rem] border border-blue-100/80 bg-white/78 px-3 py-3 shadow-[0_24px_60px_rgba(12,44,108,0.12)] backdrop-blur-xl">
          <div className="flex flex-col gap-2.5">
            {HOME_SECTION_NAV.map((item, index) => {
              const isActive = index === activeSectionIndex;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSectionNavigate(index)}
                  aria-label={`Go to ${item.label} section`}
                  aria-current={isActive ? 'true' : undefined}
                  className="flex items-center justify-end rounded-full px-1.5 transition-all duration-300"
                >
                  <span
                    className={`block rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'h-9 w-2.5 border-blue-500 bg-[linear-gradient(180deg,#1f63ff,#0bb2ff)] shadow-[0_10px_25px_rgba(31,99,255,0.32)]'
                        : 'h-2.5 w-2.5 border-blue-300 bg-white hover:border-blue-400 hover:bg-blue-50'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
      <div data-home-snap>
        <Hero />
      </div>
      <div data-home-snap>
        <CategoryGrid />
      </div>
      <div data-home-snap>
        <HowItWorks />
      </div>
      <div data-home-snap>
        <Testimonials />
      </div>
      <div data-home-snap>
        <HomeFaq />
      </div>
      <div data-home-snap>
        <CTA />
      </div>
    </>
  );
}
