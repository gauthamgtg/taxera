import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND, TESTIMONIALS, HERO_SERVICES } from './config';

gsap.registerPlugin(ScrollTrigger);

// ─── HERO ────────────────────────────────────────────────
export function Hero() {
  const ref = useRef(null);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % HERO_SERVICES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-el', {
        y: 50, opacity: 0, stagger: 0.12, duration: 1, ease: 'power3.out', delay: 0.2,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center bg-gray-900 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-600/5 blur-[100px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="hero-el inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/60 font-medium">Serving 500+ businesses across India & USA</span>
            </div>

            <h1 className="hero-el text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              {BRAND.tagline.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="text-amber-400">{BRAND.tagline.split(' ').slice(-2).join(' ')}</span>
            </h1>

            <p className="hero-el text-lg text-white/50 max-w-lg mb-4 leading-relaxed">
              {BRAND.description}
            </p>

            {/* Rotating service */}
            <div className="hero-el h-8 mb-8 overflow-hidden">
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/30 uppercase tracking-wider font-medium">Now serving:</span>
                <span key={currentService} className="text-sm font-semibold text-amber-400 animate-fade-in">
                  {HERO_SERVICES[currentService]}
                </span>
              </div>
            </div>

            <div className="hero-el flex flex-wrap gap-3">
              <a
                href={BRAND.whatsappLink("Hi Taxera! I'd like to book a free consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-gray-900 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right - Stats card */}
          <div className="hero-el hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: BRAND.stats.services, label: 'Services Available' },
                  { val: BRAND.stats.categories, label: 'Categories' },
                  { val: BRAND.stats.clients, label: 'Clients Served' },
                  { val: BRAND.stats.years, label: 'Years Experience' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-white/5">
                    <p className="text-3xl font-bold text-amber-400 mb-1">{stat.val}</p>
                    <p className="text-xs text-white/40 uppercase tracking-wider font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-white/30 uppercase tracking-wider font-medium mb-3">Popular Services</p>
                <div className="flex flex-wrap gap-2">
                  {['GST Filing', 'Pvt Ltd Co.', 'Website Dev', 'Trademark', 'US Tax', 'SEO'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/50 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/20 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}

// ─── STATS BAR ───────────────────────────────────────────
export function StatsBar() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const items = [
    { icon: '📋', label: '20 Service Categories' },
    { icon: '🇮🇳', label: 'India & US Tax Coverage' },
    { icon: '⚡', label: 'Same-Day Processing' },
    { icon: '💬', label: 'WhatsApp Support' },
  ];

  return (
    <div ref={ref} className="bg-white border-b border-gray-100 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
        {items.map((item, i) => (
          <div key={i} className="stat-item flex items-center gap-2.5">
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm text-gray-600 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── HOW IT WORKS ────────────────────────────────────────
export function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.step-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        y: 30, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const steps = [
    { num: '01', title: 'Tell Us What You Need', desc: 'Send a WhatsApp message or browse our 224+ services directory.' },
    { num: '02', title: 'Get a Custom Quote', desc: 'Our team reviews your requirements and sends a detailed proposal within hours.' },
    { num: '03', title: 'We Handle Everything', desc: 'Sit back while our experts manage the entire process — filings, compliance, delivery.' },
    { num: '04', title: 'Stay Updated', desc: 'Real-time progress updates via WhatsApp. No chasing, no delays.' },
  ];

  return (
    <section ref={ref} id="how-it-works" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Simple as <span className="text-amber-600">1-2-3-4</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="step-card relative bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <span className="text-5xl font-black text-gray-100 absolute top-4 right-4">{step.num}</span>
              <div className="relative">
                <h3 className="text-base font-bold text-gray-900 mb-2 mt-8">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────
export function TestimonialsSection() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.testi-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        y: 30, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Trusted by Growing Businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ─────────────────────────────────────────
export function CtaSection() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 lg:px-16 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-[-30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="cta-content relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/50 mb-8 max-w-xl mx-auto">
          Send us a WhatsApp message and get a response within minutes. No forms, no waiting, no complexity.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={BRAND.whatsappLink("Hi Taxera! I'd like to get started. Please share how we can proceed.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1da851] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            Browse All Services
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/30">
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> Free Consultation</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> No Hidden Charges</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> Same-Day Response</span>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────
export function Footer() {
  const serviceLinks = ['GST Registration', 'Pvt Ltd Company', 'Trademark Filing', 'Tax Returns', 'Website Development', 'SEO Services'];
  const companyLinks = ['About', 'Services', 'How it Works', 'Contact'];

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold tracking-tight mb-3">{BRAND.name}</h3>
            <p className="text-sm text-white/40 leading-relaxed mb-4">{BRAND.description}</p>
            <a
              href={BRAND.whatsappLink("Hi!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with us
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">Popular Services</h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(l => (
                <li key={l}><a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-white/50 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="w-3.5 h-3.5 text-white/30" />
                +91 86673 99376
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="w-3.5 h-3.5 text-white/30" />
                hello@taxera.in
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="w-3.5 h-3.5 text-white/30 mt-0.5" />
                Chennai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/25">
          <span>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
