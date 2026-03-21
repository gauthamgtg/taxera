import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Calculator, Mail, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BRAND } from '../../config';
import { SERVICES_DATA } from '../../data/servicesData';

const POPULAR_SERVICE_LINKS = [
  ['websites', 'website-design-development'],
  ['growth', 'seo-optimization-retainer'],
  ['decks', 'pitch-deck-creation'],
  ['automation', 'chatbot-integration-website-whatsapp'],
].map(([categoryId, serviceSlug]) => {
  const category = SERVICES_DATA.find((item) => item.id === categoryId);
  const service = category?.services.find((item) => item.slug === serviceSlug);

  if (!category || !service) return null;

  return {
    categoryId,
    serviceSlug,
    name: service.name,
    categoryName: category.name,
  };
}).filter(Boolean);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0d2f75] via-[#123783] to-[#0e2f72] px-4 pb-8 pt-20 text-white md:px-8 lg:px-16">
      <div className="absolute left-[8%] top-[14%] h-44 w-44 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute right-[10%] top-[22%] h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-blue-100/20 bg-white/10 p-8 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                <Sparkles className="h-3.5 w-3.5" />
                Business OS operator
              </span>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                Websites, decks, growth systems, dashboards, and automation under one premium operating desk.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100/75">
                Work with one team that can scope, advise, and execute across the website, narrative, reporting, and automation stack without handing you off between vendors.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-blue-100/20 bg-blue-950/25 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-blue-100/60">Fast connect</p>
              <div className="mt-5 grid gap-3">
                <a
                  href={BRAND.consultationLink('your business requirements')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-blue-900 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Book Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={BRAND.whatsappLink("Hi Taxera! I'd like to connect on WhatsApp and discuss my business requirements.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-blue-100/20 bg-white/10 px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                >
                  <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#25D366]" /> Connect on WhatsApp</span>
                  <ArrowRight className="h-4 w-4 text-blue-100/60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 border-b border-blue-100/20 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-3 text-2xl font-bold tracking-tight">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-cyan-100">
                <Sparkles className="h-4 w-4" />
              </span>
              {BRAND.name}
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-blue-100/70">{BRAND.description}</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-blue-100/80">
                <Phone className="mt-0.5 h-4 w-4 text-blue-100/60" />
                +91 86673 99376
              </div>
              <div className="flex items-start gap-3 text-sm text-blue-100/80">
                <Mail className="mt-0.5 h-4 w-4 text-blue-100/60" />
                hello@taxera.in
              </div>
              <div className="flex items-start gap-3 text-sm text-blue-100/80">
                <MapPin className="mt-0.5 h-4 w-4 text-blue-100/60" />
                Chennai, India
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/55">Service Categories</h4>
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {SERVICES_DATA.map((category) => (
                <Link
                  key={category.id}
                  to={`/services/${category.id}`}
                  className="group flex items-center justify-between rounded-2xl px-3 py-2 text-sm text-blue-100/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span>{category.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-transparent transition-colors group-hover:text-cyan-100" />
                </Link>
                ))}
            </div>

            <h4 className="mb-4 mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/55">Free tools</h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                ['Income Tax Calculator', '/tools/income-tax-calculator'],
                ['SIP Calculator', '/tools/sip-calculator'],
                ['Mutual Fund Return Calculator', '/tools/mutual-fund-return-calculator'],
                ['Inflation Calculator', '/tools/inflation-calculator'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="group flex items-center justify-between rounded-2xl border border-blue-100/10 bg-white/5 px-3 py-2 text-sm text-blue-100/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Calculator className="h-3.5 w-3.5 text-cyan-100/70" />
                    {label}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-transparent transition-colors group-hover:text-cyan-100" />
                </Link>
              ))}
            </div>

            <h4 className="mb-4 mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/55">Popular detail pages</h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {POPULAR_SERVICE_LINKS.map((service) => (
                <Link
                  key={`${service.categoryId}/${service.serviceSlug}`}
                  to={`/services/${service.categoryId}/${service.serviceSlug}`}
                  className="group flex items-center justify-between rounded-2xl border border-blue-100/10 bg-white/5 px-3 py-2 text-sm text-blue-100/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span>
                    <span className="block font-medium">{service.name}</span>
                    <span className="block text-xs text-blue-100/55">{service.categoryName}</span>
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-transparent transition-colors group-hover:text-cyan-100" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/55">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block rounded-2xl px-3 py-2 text-sm text-blue-100/80 transition-colors hover:bg-white/10 hover:text-white">Home</Link>
              <Link to="/tools" className="block rounded-2xl px-3 py-2 text-sm text-blue-100/80 transition-colors hover:bg-white/10 hover:text-white">Free Tools</Link>
              <a href="/#how-it-works" className="block rounded-2xl px-3 py-2 text-sm text-blue-100/80 transition-colors hover:bg-white/10 hover:text-white">How It Works</a>
              <a href="/#categories" className="block rounded-2xl px-3 py-2 text-sm text-blue-100/80 transition-colors hover:bg-white/10 hover:text-white">Explore Services</a>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-blue-100/20 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-blue-100/60">Response promise</p>
              <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                Fast consultation routing, direct WhatsApp contact, and a same-day first response on active enquiries.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-blue-100/60 md:flex-row">
          <span>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
