import { useState } from 'react';
import { CalendarDays, MessageCircle, Search, Send, Sparkles, X } from 'lucide-react';
import { BRAND } from '../../config';
import { SERVICES_DATA } from '../../data/servicesData';

const allServices = SERVICES_DATA.flatMap((cat) =>
  cat.services.map((s) => ({ ...s, category: cat.name }))
);

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered =
    search.length > 1
      ? allServices
          .filter(
            (s) =>
              s.name.toLowerCase().includes(search.toLowerCase()) ||
              s.category.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 8)
      : [];

  const sendMessage = (service) => {
    const msg = service
      ? `Hi Taxera! I'm interested in "${service.name}". Please share more details, scope, and next steps.`
      : `Hi Taxera! I'd like to know more about your services. Please get in touch.`;

    window.open(BRAND.whatsappLink(msg), '_blank');
    setOpen(false);
    setSearch('');
    setSelected(null);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-white/20 bg-[#25D366] text-white shadow-[0_24px_50px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="glass-panel fixed bottom-24 right-6 z-50 flex max-h-[520px] w-[360px] flex-col overflow-hidden rounded-[2rem] animate-in">
          <div className="bg-[linear-gradient(135deg,#123b8f_0%,#1a4fac_100%)] px-5 py-5 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-base font-bold">Chat with Taxera</p>
                <p className="mt-1 text-xs text-blue-100/80">Typically replies within minutes</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 text-cyan-100">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4 rounded-[1.25rem] border border-blue-100/20 bg-white/10 p-3 text-xs leading-relaxed text-blue-100/85">
              Premium client desk for quick consultation routing, service discovery, and direct WhatsApp support.
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
            <button
              onClick={() => sendMessage(null)}
              className="w-full rounded-[1.25rem] border border-blue-100 bg-white px-4 py-3 text-left transition-colors hover:bg-blue-50/60"
            >
              <p className="text-sm font-semibold text-blue-900">General Enquiry</p>
              <p className="mt-0.5 text-xs text-blue-700/55">Send a quick hello message</p>
            </button>

            <a
              href={BRAND.consultationLink('your business requirements')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[1.25rem] border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Book Consultation
              </span>
              <Send className="h-4 w-4 text-white/80" />
            </a>

            <div className="my-1 flex items-center gap-2">
              <div className="h-px flex-1 bg-blue-100" />
              <span className="text-[10px] font-medium uppercase tracking-wider text-blue-700/55">or pick a service</span>
              <div className="h-px flex-1 bg-blue-100" />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-700/50" />
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelected(null);
                }}
                className="w-full rounded-xl border border-blue-100 bg-blue-50/55 py-2.5 pl-9 pr-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
              />
            </div>

            {filtered.length > 0 && (
              <div className="flex max-h-[200px] flex-col gap-1.5 overflow-y-auto">
                {filtered.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(s)}
                    className={`w-full rounded-2xl border px-3 py-2.5 text-left transition-colors ${
                      selected?.name === s.name ? 'border-blue-300 bg-blue-100/60' : 'border-blue-100 bg-white hover:bg-blue-50'
                    }`}
                  >
                    <p className="text-sm font-medium leading-tight text-blue-900">{s.name}</p>
                    <p className="mt-0.5 text-xs text-blue-700/55">{s.category}</p>
                  </button>
                ))}
              </div>
            )}

            {search.length > 1 && filtered.length === 0 && (
              <p className="py-2 text-center text-xs text-blue-700/60">No services found. Try a different search.</p>
            )}
          </div>

          {selected && (
            <div className="border-t border-blue-100 bg-white p-3">
              <button
                onClick={() => sendMessage(selected)}
                className="flex w-full items-center justify-center gap-2 rounded-[1.25rem] bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
              >
                <Send className="h-4 w-4" />
                Ask about {selected.name}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
