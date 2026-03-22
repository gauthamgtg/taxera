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
  { label: 'Finance' },
  { label: 'Websites' },
  { label: 'Services' },
  { label: 'Process' },
  { label: 'Proof' },
  { label: 'FAQs' },
  { label: 'Contact' },
];

export function HomePage() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const trackerRailRef = useRef(null);
  const trackerDraggingRef = useRef(false);
  const lastDraggedIndexRef = useRef(null);

  const getSnapTargets = () => {
    const sections = Array.from(document.querySelectorAll('[data-home-snap]'));
    if (sections.length === 0) return [];

    const [heroSection, ...otherSections] = sections;
    const heroTop = heroSection.offsetTop;

    return [
      heroTop,
      heroTop + window.innerHeight,
      ...otherSections.map((section) => section.offsetTop),
    ];
  };

  useEffect(() => {
    const getActiveSectionIndex = (snapTargets) => {
      const scanPoint = window.scrollY + window.innerHeight * 0.4;
      let index = 0;

      for (let i = 0; i < snapTargets.length; i += 1) {
        if (snapTargets[i] <= scanPoint) {
          index = i;
        } else {
          break;
        }
      }

      return index;
    };

    const onScroll = () => {
      const snapTargets = getSnapTargets();
      if (snapTargets.length > 0) {
        setActiveSectionIndex(getActiveSectionIndex(snapTargets));
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const navigateFromPointer = (clientY) => {
      const rail = trackerRailRef.current;
      if (!rail) return;

      const snapTargets = getSnapTargets();
      if (snapTargets.length === 0) return;

      const rect = rail.getBoundingClientRect();
      const offset = Math.min(Math.max(clientY - rect.top, 0), rect.height);
      const ratio = rect.height > 0 ? offset / rect.height : 0;
      const targetIndex = Math.min(
        snapTargets.length - 1,
        Math.max(0, Math.round(ratio * (snapTargets.length - 1)))
      );

      if (lastDraggedIndexRef.current === targetIndex) return;
      lastDraggedIndexRef.current = targetIndex;
      setActiveSectionIndex(targetIndex);
      window.scrollTo({ top: snapTargets[targetIndex], behavior: 'smooth' });
    };

    const onPointerMove = (event) => {
      if (!trackerDraggingRef.current) return;
      navigateFromPointer(event.clientY);
    };

    const onPointerEnd = () => {
      trackerDraggingRef.current = false;
      lastDraggedIndexRef.current = null;
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerEnd);
    window.addEventListener('pointercancel', onPointerEnd);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerEnd);
      window.removeEventListener('pointercancel', onPointerEnd);
    };
  }, []);

  const handleSectionNavigate = (sectionIndex) => {
    const snapTargets = getSnapTargets();
    const targetTop = snapTargets[sectionIndex];
    if (typeof targetTop !== 'number') return;

    setActiveSectionIndex(sectionIndex);
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  };

  const handleTrackerPointerDown = (event) => {
    trackerDraggingRef.current = true;
    lastDraggedIndexRef.current = null;

    const rail = trackerRailRef.current;
    if (rail && rail.setPointerCapture) {
      try {
        rail.setPointerCapture(event.pointerId);
      } catch {
        // Ignore capture issues and keep drag behavior via window listeners.
      }
    }

    event.preventDefault();

    const snapTargets = getSnapTargets();
    if (snapTargets.length === 0) return;

    const rect = rail?.getBoundingClientRect();
    if (!rect) return;

    const offset = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
    const ratio = rect.height > 0 ? offset / rect.height : 0;
    const targetIndex = Math.min(
      snapTargets.length - 1,
      Math.max(0, Math.round(ratio * (snapTargets.length - 1)))
    );

    lastDraggedIndexRef.current = targetIndex;
    setActiveSectionIndex(targetIndex);
    window.scrollTo({ top: snapTargets[targetIndex], behavior: 'smooth' });
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
          <div
            ref={trackerRailRef}
            onPointerDown={handleTrackerPointerDown}
            className="flex touch-none flex-col gap-2.5"
          >
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
