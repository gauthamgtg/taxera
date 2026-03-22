import { useEffect, useRef } from 'react';
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

export function HomePage() {
  const homeSnapLockRef = useRef(false);

  useEffect(() => {
    const getSnapSections = () =>
      Array.from(document.querySelectorAll('[data-home-snap]'));

    const SNAP_LOCK_MS = 900;

    const onWheel = (event) => {
      const sections = getSnapSections();
      if (sections.length < 2) return;
      if (Math.abs(event.deltaY) < 3) return;

      const y = window.scrollY;
      const viewport = window.innerHeight;
      const heroSection = sections[0];
      const heroTop = heroSection.offsetTop;
      const heroBottom = heroTop + heroSection.offsetHeight;
      const sectionTargets = sections.map((section) => section.offsetTop);

      if (y >= heroTop - 2 && y <= heroBottom - 2) {
        return;
      }

      if (homeSnapLockRef.current) {
        event.preventDefault();
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const scanPoint = y + viewport * 0.35;

      let currentIndex = sectionTargets.findIndex((top, index) => {
        const nextTop = sectionTargets[index + 1] ?? Number.POSITIVE_INFINITY;
        return scanPoint >= top && scanPoint < nextTop;
      });

      if (currentIndex === -1) {
        currentIndex = scanPoint < sectionTargets[0] ? 0 : sections.length - 1;
      }

      const targetIndex = Math.min(sections.length - 1, Math.max(0, currentIndex + direction));

      if (targetIndex === currentIndex) return;

      event.preventDefault();
      homeSnapLockRef.current = true;
      window.scrollTo({ top: sectionTargets[targetIndex], behavior: 'smooth' });
      window.setTimeout(() => {
        homeSnapLockRef.current = false;
      }, SNAP_LOCK_MS);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <>
      <SEOHead
        title="Taxera | Business OS, Finance, Tax, GST, ROC, Payroll, Decks & AI Automations"
        description="Taxera helps growth-focused teams build a complete Business OS while also handling business registration, GST, income tax, ROC, payroll, bookkeeping, and advisory support."
        keywords={["business os services", "website design and development", "seo optimization services", "website audit service", "website optimization service", "ppt making service", "slide deck design", "pitch deck creation", "dashboard creation service", "analytics setup service", "ai automations", "chatbot integrations", "business registration services india", "gst filing services india", "income tax filing india", "roc compliance services", "payroll processing india", "bookkeeping services india", "virtual cfo services india"]}
        canonical="https://taxera.in/"
        jsonLd={[orgJsonLd, faqJsonLd]}
      />
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
