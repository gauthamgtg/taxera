import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
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
  };
}).filter(Boolean);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0d2f75] via-[#123783] to-[#0e2f72] px-4 pb-8 pt-16 text-white md:px-8 lg:px-16">
      <div className="absolute left-[8%] top-[14%] h-44 w-44 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute right-[10%] top-[22%] h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="border-b border-blue-100/20 pb-8">
          <div className="grid gap-6 xl:grid-cols-[0.9fr_2.05fr_0.8fr]">
            <div>
              <Link to="/" className="mb-4 flex items-center gap-3 text-2xl font-bold tracking-tight">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-cyan-100">
                  <Sparkles className="h-4 w-4" />
                </span>
                {BRAND.name}
              </Link>
              <p className="max-w-md text-sm leading-relaxed text-blue-100/70">{BRAND.description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/55">Services</h4>
                <div className="grid gap-1.5">
                  {SERVICES_DATA.slice(0, 5).map((category) => (
                    <Link key={category.id} to={`/services/${category.id}`} className="text-sm text-blue-100/78 transition-colors hover:text-white">
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/55">More Services</h4>
                <div className="grid gap-1.5">
                  {SERVICES_DATA.slice(5, 10).map((category) => (
                    <Link key={category.id} to={`/services/${category.id}`} className="text-sm text-blue-100/78 transition-colors hover:text-white">
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/55">Quick Links</h4>
                <div className="grid gap-1.5">
                  <Link to="/" className="text-sm text-blue-100/78 transition-colors hover:text-white">Home</Link>
                  <Link to="/tools" className="text-sm text-blue-100/78 transition-colors hover:text-white">Tools</Link>
                  <Link to="/templates" className="text-sm text-blue-100/78 transition-colors hover:text-white">Templates</Link>
                  <Link to="/#how-it-works" className="text-sm text-blue-100/78 transition-colors hover:text-white">How It Works</Link>
                  <Link to="/#categories" className="text-sm text-blue-100/78 transition-colors hover:text-white">Explore Services</Link>
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/55">Popular Detail Pages</h4>
                <div className="grid gap-1.5">
                  {POPULAR_SERVICE_LINKS.map((service) => (
                    <Link
                      key={`${service.categoryId}/${service.serviceSlug}`}
                      to={`/services/${service.categoryId}/${service.serviceSlug}`}
                      className="text-sm text-blue-100/78 transition-colors hover:text-white"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-blue-100/20 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-blue-100/60">Contact</p>
              <div className="mt-3 grid gap-2 text-sm text-blue-100/80">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-blue-100/60" />
                  +91 86673 99376
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-100/60" />
                  hello@taxera.in
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-blue-100/60" />
                  Chennai, India
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-8 text-xs text-blue-100/60 md:justify-start">
          <span>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
