import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Compass, Home, MessageCircle, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { BRAND } from '../config';

const QUICK_LINKS = [
  { label: 'Explore Services', to: '/#categories' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Free Tools', to: '/tools' },
  { label: 'Home', to: '/' },
];

const POPULAR_PATHS = [
  { label: 'Website Design & Development', to: '/services/websites/website-design-development' },
  { label: 'SEO Optimization', to: '/services/growth/seo-optimization-retainer' },
  { label: 'Chatbot Integrations', to: '/services/automation/chatbot-integration-website-whatsapp' },
  { label: 'GST Filing & Compliance', to: '/services/gst' },
];

export function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="404 | Page Not Found | Taxera"
        description="This page could not be found. Return to Taxera home, explore services, or connect on WhatsApp for help."
        canonical="https://taxera.in/404"
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 md:px-8 md:pt-32 lg:px-16 lg:pt-36">
        <div className="absolute inset-x-0 top-8 mx-auto h-[26rem] max-w-6xl rounded-full bg-blue-300/20 blur-[96px]" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan-300/18 blur-[110px]" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-200/22 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="ink-panel relative overflow-hidden rounded-[2rem] px-6 py-10 text-white md:px-10 md:py-12">
            <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full border border-blue-200/20 bg-white/6 blur-2xl" />
            <div className="pointer-events-none absolute -left-24 bottom-[-7rem] h-64 w-64 rounded-full border border-blue-200/10 bg-cyan-300/10 blur-2xl" />

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  404 - Page Missing
                </span>

                <h1 className="mt-5 text-6xl font-extrabold leading-none tracking-tight text-white/95 sm:text-7xl md:text-8xl">
                  404
                </h1>
                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  This route is outside the current execution map.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-blue-100/76 md:text-lg">
                  The page you are looking for is unavailable or moved. Use one of the routes below and continue from the right service desk.
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-blue-200/18 bg-white/8 p-4 backdrop-blur-sm md:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/62">Fast Recovery</p>
                <div className="mt-3 grid gap-2.5">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold text-blue-900 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="inline-flex items-center gap-2"><Home className="h-4 w-4" /> Back to Home</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={BRAND.consultationLink('the right service route for my requirement')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between rounded-xl border border-blue-200/18 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/16"
                  >
                    <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Book Consultation</span>
                    <ArrowRight className="h-4 w-4 text-blue-100/70" />
                  </a>
                  <a
                    href={BRAND.whatsappLink("Hi Taxera, I hit a missing page and need the correct service route. Can you guide me?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between rounded-xl border border-blue-200/18 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/16"
                  >
                    <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#25D366]" /> Connect on WhatsApp</span>
                    <ArrowRight className="h-4 w-4 text-blue-100/70" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="editorial-panel rounded-[1.5rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700/55">Quick Links</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {QUICK_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="inline-flex items-center justify-between rounded-xl border border-blue-100 bg-white/86 px-4 py-3 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-200 hover:bg-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Compass className="h-4 w-4 text-blue-600" />
                      {item.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="editorial-panel rounded-[1.5rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700/55">Popular Routes</p>
              <div className="mt-3 grid gap-2">
                {POPULAR_PATHS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="inline-flex items-center justify-between rounded-xl border border-blue-100 bg-white/86 px-4 py-3 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-200 hover:bg-white"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
