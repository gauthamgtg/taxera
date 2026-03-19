import { useState } from 'react';
import { Search, MessageCircle, ChevronDown } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { BRAND } from '../config';

function ServiceRow({ svc }) {
  const msg = `Hi Taxera! I'm interested in "${svc.name}". Please share the scope, timeline, and next steps.`;
  return (
    <tr className="border-b border-gray-100 hover:bg-amber-50/50 transition-colors group">
      <td className="py-4 pr-4">
        <span className="font-medium text-gray-900 text-sm">{svc.name}</span>
        <span className="block text-xs text-gray-400 mt-0.5 md:hidden">{svc.desc}</span>
      </td>
      <td className="py-4 pr-4 hidden md:table-cell">
        <span className="text-xs text-gray-500 leading-relaxed">{svc.desc}</span>
      </td>
      <td className="py-4 pr-4">
        <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full ${
          svc.type.includes('One-Time') ? 'bg-emerald-50 text-emerald-700' :
          svc.type.includes('Monthly') ? 'bg-rose-50 text-rose-600' :
          svc.type.includes('Annual') || svc.type.includes('Quarterly') ? 'bg-violet-50 text-violet-600' :
          'bg-amber-50 text-amber-700'
        }`}>
          {svc.type}
        </span>
      </td>
      <td className="py-4 pl-3 text-right">
        <a
          href={BRAND.whatsappLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors opacity-0 group-hover:opacity-100 md:opacity-100"
        >
          <MessageCircle className="w-3 h-3" />
          <span className="hidden sm:inline">Enquire</span>
        </a>
      </td>
    </tr>
  );
}

export function ServiceDirectory() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [expandedCats, setExpandedCats] = useState({});
  const totalServices = SERVICES_DATA.reduce((count, category) => count + category.services.length, 0);

  const displayed = activeCategory === 'all' ? SERVICES_DATA : SERVICES_DATA.filter(c => c.id === activeCategory);

  const searchFiltered = search.length > 1
    ? displayed.map(cat => ({
        ...cat,
        services: cat.services.filter(s =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.desc.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter(cat => cat.services.length > 0)
    : displayed;

  const toggleCat = (id) => {
    setExpandedCats(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isExpanded = (id) => {
    if (expandedCats[id] !== undefined) return expandedCats[id];
    return activeCategory !== 'all' || search.length > 1;
  };

  return (
    <section id="services" className="relative py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="sdir-header mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-3 block">Complete Directory</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            {totalServices}+ Services. <span className="text-amber-600">{SERVICES_DATA.length} Core Categories.</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl">
            Browse the full Taxera catalog across registrations, tax, MCA, payroll, accounting, and advisory support. Click any service to enquire instantly via WhatsApp.
          </p>
        </div>

        {/* Search + Filter bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm pb-4 mb-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 bg-gray-50"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => { setActiveCategory('all'); setExpandedCats({}); }}
              className={`shrink-0 px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                activeCategory === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {SERVICES_DATA.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setExpandedCats({}); }}
                className={`shrink-0 px-3 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-6">
          {searchFiltered.map(cat => {
            const expanded = isExpanded(cat.id);
            return (
              <div key={cat.id} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => toggleCat(cat.id)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-amber-600 font-bold">{cat.num}</span>
                    <h3 className="text-base md:text-lg font-bold text-gray-900">{cat.name}</h3>
                    <span className="text-xs text-gray-400 hidden sm:inline">({cat.services.length} services)</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                </button>

                {expanded && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <p className="text-xs text-gray-500 my-3">{cat.desc}</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="py-2.5 pr-4 text-[10px] font-semibold tracking-widest uppercase text-gray-400 w-[30%]">Service</th>
                            <th className="py-2.5 pr-4 text-[10px] font-semibold tracking-widest uppercase text-gray-400 w-[40%] hidden md:table-cell">Description</th>
                            <th className="py-2.5 pr-4 text-[10px] font-semibold tracking-widest uppercase text-gray-400 w-[15%]">Type</th>
                            <th className="py-2.5 pl-3 text-[10px] font-semibold tracking-widest uppercase text-gray-400 text-right w-[15%]"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.services.map((svc, i) => (
                            <ServiceRow key={i} svc={svc} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {searchFiltered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No services found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
