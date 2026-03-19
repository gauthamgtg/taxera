import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { CATEGORY_CONTENT } from '../data/categoryContent';
import { SEOHead } from '../components/shared/SEOHead';
import { CategoryHero } from '../components/category/CategoryHero';
import { AboutSection } from '../components/category/AboutSection';
import { ServiceList } from '../components/category/ServiceList';
import { TargetUsersSection } from '../components/category/TargetUsersSection';
import { BenefitsSection } from '../components/category/BenefitsSection';
import { ProcessSection } from '../components/category/ProcessSection';
import { FAQSection } from '../components/category/FAQSection';
import { CategoryCTA } from '../components/category/CategoryCTA';
import { ConsultationSection } from '../components/category/ConsultationSection';

function buildFallbackCategoryContent(category) {
  const featuredServices = category.services.slice(0, 5);
  const featuredServiceNames = featuredServices.map((service) => service.name);
  const featuredLabel = featuredServiceNames.join(', ');
  const keywordBase = `${category.name.toLowerCase()} india`;

  return {
    heroTitle: `${category.name} Services in India`,
    heroSubtitle: `${category.desc} Explore ${category.services.length}+ service options${featuredLabel ? ` including ${featuredLabel}` : ''}, all structured with consultation-led guidance, clear documentation, and direct execution support from Taxera.`,
    metaTitle: `${category.name} Services in India | Taxera`,
    metaDescription: `${category.desc} Explore ${category.services.length}+ ${category.name.toLowerCase()} services in India with practical guidance, filing support, and direct consultation from Taxera.`,
    metaKeywords: [keywordBase, `${category.name.toLowerCase()} consultant`, ...featuredServiceNames],
    ctaWhatsAppMessage: `Hi Taxera, I need help with ${category.name.toLowerCase()}. Please guide me on the right service, document checklist, and timeline.`,
    about: {
      title: `${category.name} Support Without Fragmented Follow-Up`,
      paragraphs: [
        `${category.desc} We help clients map the right scope, collect the right records, and complete the work end-to-end without forcing them to coordinate between multiple advisors, portals, or filing teams.`,
        `Typical requests in this category include ${featuredLabel || 'specialised support tailored to the engagement'}. If you are not sure which service fits your case, we can review the requirement, recommend the right route, and outline the next steps before execution begins.`,
      ],
    },
    targetUsers: {
      title: `Who Uses ${category.name}?`,
      users: [
        { title: 'Founders & Operators', desc: `Teams that need ${category.name.toLowerCase()} support without building an in-house bench.` },
        { title: 'Growing Businesses', desc: 'Companies looking for faster execution, clearer timelines, and one point of accountability.' },
        { title: 'Lean Internal Teams', desc: 'Businesses that need expert help for specialised tasks, one-off projects, or recurring support.' },
        { title: 'Decision-Makers', desc: 'Owners, finance leads, and operations heads comparing options before committing budget.' },
      ],
    },
    benefits: {
      title: 'Why Clients Choose Taxera',
      items: [
        { title: 'Clear Scoping', desc: 'We help define the exact service, documents, dependencies, and expected deliverables before execution starts.' },
        { title: 'Single Point of Contact', desc: 'You get one accountable team coordinating the workflow instead of chasing multiple specialists.' },
        { title: 'Practical Timelines', desc: 'Every engagement is planned around actual requirements, review cycles, and turnaround expectations.' },
        { title: 'Execution-Led Support', desc: 'We do not stop at advisory. The category is structured around documents, filings, follow-up, and close-out support.' },
      ],
    },
    process: {
      title: 'How Engagement Works',
      steps: [
        { num: '01', title: 'Requirement Review', desc: 'We understand your objective, current status, and any deadlines or blockers shaping the work.' },
        { num: '02', title: 'Scope & Recommendation', desc: 'You get the right service recommendation, document checklist, and a practical execution plan.' },
        { num: '03', title: 'Execution', desc: 'Our team handles the delivery work, follow-ups, and revisions needed to complete the engagement.' },
        { num: '04', title: 'Handover & Next Steps', desc: 'We close with the final output, status update, and any follow-on actions you should take next.' },
      ],
    },
    faqs: [
      { question: `Which ${category.name.toLowerCase()} service is right for me?`, answer: `That depends on your exact goal, current setup, and timeline. We usually start with a short requirement review and then recommend the most suitable service instead of pushing a generic package.` },
      { question: 'What documents or inputs will you need?', answer: 'The requirement varies by service. Once we understand the scope, we share a clear checklist so you know exactly what is needed before execution starts.' },
      { question: 'How long will this take?', answer: 'Turnaround depends on the service type, the quality of inputs, and any third-party approvals involved. We share an expected timeline after reviewing your case.' },
      { question: 'Can you support recurring work as well as one-time projects?', answer: 'Yes. This category includes both one-time services and ongoing support, depending on the workstream and your operating model.' },
    ],
    ctaTitle: `Need Help With ${category.name}?`,
    ctaDescription: 'Share your requirement and we will recommend the right service mix, scope, and next steps.',
  };
}

export function ServiceCategoryPage() {
  const { categoryId } = useParams();
  const category = SERVICES_DATA.find(c => c.id === categoryId);
  const content = category ? (CATEGORY_CONTENT[categoryId] ?? buildFallbackCategoryContent(category)) : null;

  if (!category || !content) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <p className="text-gray-500 mb-6">The service category you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      }
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://taxera.in/" },
      { "@type": "ListItem", "position": 2, "name": category.name, "item": `https://taxera.in/services/${categoryId}` },
    ]
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": content.metaTitle,
    "description": content.metaDescription,
    "url": `https://taxera.in/services/${categoryId}`,
    "about": {
      "@type": "Service",
      "name": category.name,
      "provider": {
        "@type": "ProfessionalService",
        "name": "Taxera",
        "url": "https://taxera.in/",
      },
      "areaServed": "India",
      "description": content.heroSubtitle,
    }
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${category.name} Services`,
    "itemListElement": category.services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://taxera.in/services/${categoryId}/${service.slug}`,
      "name": service.name,
      "description": service.desc,
    }))
  };

  return (
    <>
      <SEOHead
        title={content.metaTitle}
        description={content.metaDescription}
        keywords={content.metaKeywords}
        canonical={`https://taxera.in/services/${categoryId}`}
        jsonLd={[faqJsonLd, breadcrumbJsonLd, collectionJsonLd, itemListJsonLd]}
      />
      <CategoryHero category={category} content={content} />
      <ConsultationSection category={category} content={content} />
      <AboutSection content={content.about} />
      <ServiceList categoryId={category.id} services={category.services} categoryName={category.name} />
      <TargetUsersSection content={content.targetUsers} />
      <BenefitsSection content={content.benefits} />
      <ProcessSection content={content.process} />
      <FAQSection faqs={content.faqs} />
      <CategoryCTA categoryName={category.name} content={content} />
    </>
  );
}
