import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CalendarDays, Calculator, ChevronDown, MessageCircle, Menu, Sparkles, X } from 'lucide-react';
import { BRAND, CALENDLY_LINK } from '../../config';
import { SERVICES_DATA } from '../../data/servicesData';

const POPULAR_SERVICE_LINKS = [
  ['websites', 'website-design-development'],
  ['growth', 'seo-optimization-retainer'],
  ['decks', 'pitch-deck-creation'],
  ['analytics', 'executive-dashboard-creation'],
  ['automation', 'ai-automation-implementation'],
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

export function Navbar() {
  const [mobileOpenState, setMobileOpenState] = useState(false);
  const [servicesOpenState, setServicesOpenState] = useState(false);
  const [menuPath, setMenuPath] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [calendlyModalOpen, setCalendlyModalOpen] = useState(false);
  const [consultationOptionsOpen, setConsultationOptionsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isCurrentPath = menuPath === location.pathname;
  const mobileOpen = isCurrentPath && mobileOpenState;
  const servicesOpen = isCurrentPath && servicesOpenState;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuPath(location.pathname);
        setServicesOpenState(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [location.pathname]);

  useEffect(() => {
    const syncCalendlyState = () => {
      setCalendlyModalOpen(document.body.dataset.calendlyModalOpen === '1');
    };

    const onCalendlyModalToggle = (event) => {
      setCalendlyModalOpen(Boolean(event.detail?.open));
    };

    syncCalendlyState();
    window.addEventListener('taxera:calendly-modal', onCalendlyModalToggle);

    return () => {
      window.removeEventListener('taxera:calendly-modal', onCalendlyModalToggle);
    };
  }, []);

  useEffect(() => {
    if (!consultationOptionsOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setConsultationOptionsOpen(false);
      }
    };

    document.addEventListener('keydown', onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onEscape);
    };
  }, [consultationOptionsOpen]);

  const closeMenus = () => {
    setMenuPath(location.pathname);
    setMobileOpenState(false);
    setServicesOpenState(false);
  };

  const openConsultationOptions = () => {
    closeMenus();
    setConsultationOptionsOpen(true);
  };

  const toggleMobileMenu = () => {
    setMenuPath(location.pathname);
    setMobileOpenState((prev) => !prev);
    setServicesOpenState(false);
  };

  const toggleServicesMenu = () => {
    setMenuPath(location.pathname);
    setServicesOpenState((prev) => !prev);
  };

  const navShell = scrolled
    ? 'border border-blue-200/80 bg-white/88 shadow-[0_16px_50px_rgba(24,68,153,0.16)] backdrop-blur-xl'
    : 'border border-blue-100/80 bg-white/72 shadow-[0_14px_42px_rgba(24,68,153,0.12)] backdrop-blur-xl';

  if (calendlyModalOpen) {
    return null;
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
        <nav className={`mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-full px-4 transition-all duration-300 md:px-6 ${navShell}`}>
          <Link to="/" className="flex items-center gap-3 text-xl font-bold tracking-tight text-blue-950 transition-colors">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-600/30">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>
              {BRAND.name}
              <span className="ml-2 text-xs font-medium uppercase tracking-[0.22em] text-blue-600">Business OS</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <NavLink
              to="/"
              end
              onClick={closeMenus}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-blue-900/80'}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/tools"
              onClick={closeMenus}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-blue-900/80'}`
              }
            >
              Tools
            </NavLink>

            <NavLink
              to="/templates"
              onClick={closeMenus}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-blue-900/80'}`
              }
            >
              Templates
            </NavLink>

            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={toggleServicesMenu}
                className="flex items-center gap-1 text-sm font-semibold text-blue-900/80 transition-colors hover:text-blue-600"
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="glass-panel absolute left-1/2 top-full mt-4 w-[820px] -translate-x-1/2 rounded-[2rem] p-6 animate-in">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    <p className="col-span-2 mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700/60">Service Categories</p>
                    {SERVICES_DATA.map((category) => (
                      <Link
                        key={category.id}
                        to={`/services/${category.id}`}
                        onClick={closeMenus}
                        className="group flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-blue-900/80 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="text-xs text-blue-700/50 group-hover:text-blue-600">{category.services.length} services</span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-blue-100 pt-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700/60">Popular detail pages</p>
                    <div className="grid grid-cols-2 gap-2">
                      {POPULAR_SERVICE_LINKS.map((service) => (
                        <Link
                          key={`${service.categoryId}/${service.serviceSlug}`}
                          to={`/services/${service.categoryId}/${service.serviceSlug}`}
                          onClick={closeMenus}
                          className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm text-blue-900/80 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <span className="block font-medium">{service.name}</span>
                          <span className="mt-1 block text-xs text-blue-700/50">{service.categoryName}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href={location.pathname === '/' ? '#how-it-works' : '/#how-it-works'}
              onClick={closeMenus}
              className="text-sm font-semibold text-blue-900/80 transition-colors hover:text-blue-600"
            >
              How It Works
            </a>

            <button
              type="button"
              onClick={openConsultationOptions}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-500"
            >
              <CalendarDays className="h-4 w-4" />
              Book Consultation
            </button>
          </div>

          <button
            type="button"
            className="rounded-full border border-blue-200 bg-white p-2 text-blue-900 lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="glass-panel fixed inset-x-4 top-[96px] z-40 overflow-y-auto rounded-[2rem] border border-blue-100 shadow-2xl animate-in lg:hidden">
            <div className="flex flex-col gap-2 px-6 py-6">
              <NavLink to="/" end onClick={closeMenus} className="rounded-2xl px-4 py-3 text-base font-semibold text-blue-950 hover:bg-blue-50">
                Home
              </NavLink>

              <NavLink to="/tools" onClick={closeMenus} className="rounded-2xl px-4 py-3 text-base font-semibold text-blue-950 hover:bg-blue-50">
                Tools
              </NavLink>

              <NavLink to="/templates" onClick={closeMenus} className="rounded-2xl px-4 py-3 text-base font-semibold text-blue-950 hover:bg-blue-50">
                Templates
              </NavLink>

              <div className="py-2">
                <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700/50">Services</p>
                <div className="flex flex-col gap-0.5">
                  {SERVICES_DATA.map((category) => (
                    <Link
                      key={category.id}
                      to={`/services/${category.id}`}
                      onClick={closeMenus}
                      className="flex justify-between rounded-2xl px-4 py-3 text-sm text-blue-900/80 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    >
                      <span>{category.name}</span>
                      <span className="text-xs text-blue-700/50">{category.services.length} services</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-2">
                <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700/50">Popular tools</p>
                <div className="flex flex-col gap-0.5">
                  {[
                    ['Income Tax Calculator', '/tools/income-tax-calculator'],
                    ['SIP Calculator', '/tools/sip-calculator'],
                    ['Mutual Fund Return Calculator', '/tools/mutual-fund-return-calculator'],
                    ['Inflation Calculator', '/tools/inflation-calculator'],
                  ].map(([label, href]) => (
                    <NavLink
                      key={href}
                      to={href}
                      onClick={closeMenus}
                      className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm text-blue-900/80 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    >
                      <Calculator className="h-4 w-4 text-blue-600/70" />
                      <span>{label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="py-2">
                <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700/50">Popular detail pages</p>
                <div className="flex flex-col gap-0.5">
                  {POPULAR_SERVICE_LINKS.map((service) => (
                    <Link
                      key={`${service.categoryId}/${service.serviceSlug}`}
                      to={`/services/${service.categoryId}/${service.serviceSlug}`}
                      onClick={closeMenus}
                      className="flex justify-between rounded-2xl px-4 py-3 text-sm text-blue-900/80 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    >
                      <span>{service.name}</span>
                      <span className="text-xs text-blue-700/50">{service.categoryName}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={openConsultationOptions}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white"
              >
                <CalendarDays className="h-4 w-4" />
                Book Consultation
              </button>
              <a
                href={BRAND.whatsappLink("Hi Taxera! I'd like to connect on WhatsApp and discuss my business requirements.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
                className="flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3.5 text-sm font-semibold text-blue-900"
              >
                <MessageCircle className="h-4 w-4" />
                Connect on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {consultationOptionsOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/42 p-4 backdrop-blur-sm"
          onClick={() => setConsultationOptionsOpen(false)}
        >
          <div
            className="w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_32px_120px_rgba(7,34,86,0.28)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-blue-100 px-6 py-5 sm:px-7">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700/55">Consultation Route</p>
                <h3 className="mt-2 text-2xl font-bold leading-tight text-blue-950">Choose how you want to start</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-blue-900/68">
                  Start with a direct WhatsApp message or open the Calendly booking page for a scheduled meeting.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setConsultationOptionsOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-900 shadow-sm"
                aria-label="Close consultation options"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
              <a
                href={BRAND.whatsappLink("Hi Taxera! I'd like to start with a direct WhatsApp consultation about my business requirements. Please guide me on the next steps.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setConsultationOptionsOpen(false)}
                className="group rounded-[1.6rem] border border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 transition-colors hover:border-blue-200 hover:bg-blue-50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-lg font-bold text-blue-950">Direct WhatsApp Message</h4>
                <p className="mt-2 text-sm leading-relaxed text-blue-900/68">
                  Open WhatsApp immediately and start the conversation with a ready-made message.
                </p>
              </a>

              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setConsultationOptionsOpen(false)}
                className="group rounded-[1.6rem] border border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 transition-colors hover:border-blue-200 hover:bg-blue-50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <CalendarDays className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-lg font-bold text-blue-950">Book Calendly Meeting</h4>
                <p className="mt-2 text-sm leading-relaxed text-blue-900/68">
                  Open the Taxera Calendly page and pick a time slot for a scheduled consultation.
                </p>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
