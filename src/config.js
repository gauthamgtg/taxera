export const WHATSAPP_NUMBER = "918667399376";
export const CALENDLY_LINK = "https://calendly.com/taxerafiling/30min";

const SEO_IMAGE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fbff"/>
      <stop offset="55%" stop-color="#eaf2ff"/>
      <stop offset="100%" stop-color="#dbe9ff"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#0891b2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1040" cy="110" r="180" fill="#93c5fd" fill-opacity="0.28"/>
  <circle cx="120" cy="540" r="170" fill="#67e8f9" fill-opacity="0.22"/>
  <rect x="78" y="88" width="122" height="122" rx="30" fill="#ffffff" fill-opacity="0.9"/>
  <text x="139" y="162" text-anchor="middle" font-family="Arial, sans-serif" font-size="56" font-weight="700" fill="url(#accent)">T</text>
  <text x="232" y="133" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#0f172a">Taxera</text>
  <text x="232" y="170" font-family="Arial, sans-serif" font-size="18" fill="#334155">Registration, Tax & Compliance Services</text>
  <text x="78" y="330" font-family="Arial, sans-serif" font-size="54" font-weight="700" fill="#0f172a">Business registration, GST, income tax,</text>
  <text x="78" y="392" font-family="Arial, sans-serif" font-size="54" font-weight="700" fill="#0f172a">ROC compliance, payroll, and bookkeeping.</text>
  <text x="78" y="458" font-family="Arial, sans-serif" font-size="24" fill="#334155">Practical support for founders and growing businesses across India.</text>
</svg>`;

export const SEO_IMAGE = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(SEO_IMAGE_SVG.trim())}`;

export const BRAND = {
  name: "Taxera",
  tagline: "Registration, Tax & Compliance Services",
  description: "Practical support across registration, tax, MCA, payroll, accounting, and finance workflows for founders and growing businesses in India.",
  stats: {
    services: "47+",
    categories: "9",
    clients: "500+",
    years: "5+",
  },
  whatsappLink: (message = "") =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
  consultationLink: (topic = "your business requirements") =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Taxera, I'd like to book a consultation for ${topic}. Please share the available slots and next steps.`)}`,
};

export const HERO_SERVICES = [
  "Private Limited Company Registration",
  "GST Annual Return (GSTR-9)",
  "Business ITR Filing",
  "Annual ROC Filing",
  "Payroll Processing with PF / ESI",
  "Virtual CFO Services",
  "GST Refund Application",
];

export const CATEGORY_ICONS = {
  reg: "Building2",
  gst: "Receipt",
  tax: "Landmark",
  mca: "RefreshCw",
  dsc: "Shield",
  payroll: "Users",
  accounting: "Briefcase",
  advisory: "Lightbulb",
  notices: "Zap",
};

export const VALUE_PROPS = [
  {
    icon: "Scale",
    title: "Business Registration & Legal",
    desc: "Pvt Ltd, LLP, OPC, proprietorship, GST, IEC, and licensing support handled end-to-end with clear document sequencing.",
    highlight: "Registration Support",
  },
  {
    icon: "Receipt",
    title: "Tax Filing & Compliance",
    desc: "Income tax, GST returns, TDS, ROC filings, notices, and audit support for individuals and businesses in India.",
    highlight: "India Focused",
  },
  {
    icon: "Shield",
    title: "GST, ROC & Notice Handling",
    desc: "GST filing, LUT, annual returns, ROC compliance, refund support, and notice replies with practical follow-through.",
    highlight: "Compliance Desk",
  },
  {
    icon: "Users",
    title: "Payroll & Employee Compliance",
    desc: "Payroll setup, PF, ESI, and monthly employee compliance support for lean teams and growing businesses.",
    highlight: "Payroll Support",
  },
  {
    icon: "TrendingUp",
    title: "Bookkeeping & CFO Advisory",
    desc: "Bookkeeping, MIS reporting, projections, and virtual CFO support for businesses that need better financial visibility.",
    highlight: "Finance Operations",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh K.",
    role: "Founder, TechStart Solutions",
    text: "Taxera handled our Pvt Ltd registration and GST setup with clear communication and no last-minute surprises.",
  },
  {
    name: "Priya M.",
    role: "CEO, GreenLeaf Exports",
    text: "Their GST, filing, and follow-up process saved us time during a busy compliance cycle.",
  },
  {
    name: "Arun S.",
    role: "Director, BuildRight Infra",
    text: "From compliance cleanup to monthly reporting, Taxera feels like a real operations partner.",
  },
];
