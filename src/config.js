export const WHATSAPP_NUMBER = "919626973297";
export const CALENDLY_LINK = "https://calendly.com/taxerafiling/30min";

const SEO_IMAGE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fbff"/>
      <stop offset="55%" stop-color="#edf5ff"/>
      <stop offset="100%" stop-color="#dff0ff"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1d4ed8"/>
      <stop offset="55%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1020" cy="120" r="180" fill="#60a5fa" fill-opacity="0.22"/>
  <circle cx="120" cy="520" r="170" fill="#22d3ee" fill-opacity="0.14"/>
  <rect x="78" y="88" width="122" height="122" rx="30" fill="#ffffff" fill-opacity="0.9"/>
  <text x="139" y="162" text-anchor="middle" font-family="Arial, sans-serif" font-size="56" font-weight="700" fill="url(#accent)">T</text>
  <text x="232" y="133" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#0f172a">Taxera</text>
  <text x="232" y="170" font-family="Arial, sans-serif" font-size="18" fill="#334155">Business OS, finance, tax, and compliance services</text>
  <text x="78" y="330" font-family="Arial, sans-serif" font-size="54" font-weight="700" fill="#0f172a">Websites, decks, dashboards, AI automations,</text>
  <text x="78" y="392" font-family="Arial, sans-serif" font-size="54" font-weight="700" fill="#0f172a">GST, tax, ROC, payroll, bookkeeping, and CFO support.</text>
  <text x="78" y="458" font-family="Arial, sans-serif" font-size="24" fill="#334155">One execution desk for growth systems and financial operations.</text>
</svg>`;

export const SEO_IMAGE = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(SEO_IMAGE_SVG.trim())}`;

export const BRAND = {
  name: "Taxera",
  tagline: "Business OS, Finance, Tax & Compliance",
  description: "Taxera combines Business OS execution with finance and compliance support across websites, SEO, decks, dashboards, AI automations, GST, tax, ROC, payroll, bookkeeping, and advisory.",
  stats: {
    services: "74+",
    categories: "15",
    clients: "500+",
    years: "5+",
  },
  whatsappLink: (message = "") =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
  consultationLink: (topic = "your business requirements") =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Taxera, I'd like to discuss ${topic}. Please share the best next steps and available consultation slots.`)}`,
};

export const HERO_SERVICES = [
  "Website design and development",
  "SEO optimization and website audits",
  "PPT making, slide decks, and pitch decks",
  "Analytics, dashboards, and reporting systems",
  "AI automations and chatbot integrations",
  "Business registration and GST filing",
  "Income tax, ROC, payroll, bookkeeping, and CFO support",
];

export const CATEGORY_ICONS = {
  strategy: "Lightbulb",
  websites: "Code",
  growth: "Megaphone",
  decks: "Presentation",
  analytics: "LineChart",
  automation: "Bot",
  reg: "Building2",
  gst: "Receipt",
  tax: "Landmark",
  mca: "RefreshCw",
  dsc: "Shield",
  payroll: "Users",
  accounting: "Briefcase",
  advisory: "TrendingUp",
  notices: "ShieldAlert",
};

export const TESTIMONIALS = [
  {
    name: "Rajesh K.",
    role: "Founder, Services Firm",
    text: "Taxera helped us tighten both sides of the business. The website, deck, and reporting got sharper, and the GST and compliance work stayed on one accountable track.",
  },
  {
    name: "Priya M.",
    role: "Director, Export Business",
    text: "We use them for SEO and dashboard work now, but what kept us was the fact that they also understand GST, filings, and the finance layer behind operations.",
  },
  {
    name: "Arun S.",
    role: "Operator, Growth Stage Team",
    text: "From pitch deck polish to process setup, bookkeeping visibility, and automation, the work feels connected instead of scattered across vendors.",
  },
];
