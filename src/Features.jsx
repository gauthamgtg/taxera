import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scale, Receipt, Code, TrendingUp, Shield, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { VALUE_PROPS, BRAND } from './config';

gsap.registerPlugin(ScrollTrigger);

const ICONS = { Scale, Receipt, Code, TrendingUp, Shield, Users };

export function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feat-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.feat-head', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 20, opacity: 0, duration: 0.6, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="feat-head text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Everything Your Business Needs
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            From Day 1 registration to scaling with AI-powered marketing — we cover every stage of your business journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = ICONS[prop.icon];
            return (
              <div
                key={i}
                className="feat-card group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{prop.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{prop.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                    {prop.highlight}
                  </span>
                  <a
                    href="#services"
                    className="text-xs font-semibold text-gray-400 hover:text-gray-900 flex items-center gap-1 transition-colors"
                  >
                    View <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA under features */}
        <div className="mt-16 text-center">
          <a
            href={BRAND.whatsappLink("Hi Taxera! I'd like a consultation to understand which services I need.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
          >
            <MessageCircle className="w-4 h-4" />
            Not sure what you need? Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
