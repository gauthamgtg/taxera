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
  return (
    <>
      <SEOHead
        title="Taxera | Business OS, Finance, Tax, GST, ROC, Payroll, Decks & AI Automations"
        description="Taxera helps growth-focused teams build a complete Business OS while also handling business registration, GST, income tax, ROC, payroll, bookkeeping, and advisory support."
        keywords={["business os services", "website design and development", "seo optimization services", "website audit service", "website optimization service", "ppt making service", "slide deck design", "pitch deck creation", "dashboard creation service", "analytics setup service", "ai automations", "chatbot integrations", "business registration services india", "gst filing services india", "income tax filing india", "roc compliance services", "payroll processing india", "bookkeeping services india", "virtual cfo services india"]}
        canonical="https://taxera.in/"
        jsonLd={[orgJsonLd, faqJsonLd]}
      />
      <Hero />
      <CategoryGrid />
      <HowItWorks />
      <Testimonials />
      <HomeFaq />
      <CTA />
    </>
  );
}
