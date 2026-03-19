import { useEffect } from 'react';
import { Clock3, PhoneCall, ShieldCheck, X } from 'lucide-react';

export function CalendlyBookingModal({ open, onClose, calendlyUrl, topic, formData }) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onEscape);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center bg-slate-900/45 p-3 backdrop-blur-sm sm:p-6" onClick={onClose}>
      <div
        className="relative grid h-[min(94vh,860px)] w-full max-w-[1360px] gap-0 overflow-hidden rounded-[1.9rem] border border-blue-100 bg-white shadow-[0_30px_120px_rgba(7,34,86,0.34)] lg:grid-cols-[0.36fr_0.64fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-600 shadow-md"
          aria-label="Close Calendly modal"
        >
          <X className="h-6 w-6" />
        </button>

        <aside className="hidden border-r border-blue-100 bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)] p-8 lg:block">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800">
            <Clock3 className="h-4 w-4" />
            Calendly Booking
          </span>
          <h3 className="text-[2.3rem] font-bold leading-[1.1] text-blue-950">
            Book your {topic} consultation
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-blue-900/74">
            Share your details and Taxera will guide you on the right {topic.toLowerCase()} route, timeline, documentation, and next steps.
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-[1.1rem] font-semibold text-blue-900">
              <Clock3 className="h-5 w-5 text-cyan-600" />
              30-minute consultation with the Taxera team
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-[1.1rem] font-semibold text-blue-900">
              <ShieldCheck className="h-5 w-5 text-blue-700" />
              Form details are passed to keep the call focused
            </div>
          </div>

          <div className="mt-8 rounded-[1.4rem] bg-blue-950 px-5 py-5 text-blue-100">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/85">Booking Context</p>
            <div className="mt-3 space-y-2 text-lg">
              <p><span className="font-semibold">Topic:</span> {topic}</p>
              <p><span className="font-semibold">Name:</span> {formData.name}</p>
              <p><span className="font-semibold">Email:</span> {formData.email}</p>
              <p><span className="font-semibold">Mobile:</span> {formData.phone}</p>
              <p><span className="font-semibold">State:</span> {formData.state}</p>
            </div>
          </div>
        </aside>

        <section className="h-full w-full bg-white pt-12">
          <iframe
            title="Calendly Booking"
            src={calendlyUrl}
            className="h-full w-full border-0"
            allow="fullscreen"
          />
          <div className="pointer-events-none absolute bottom-0 right-0 p-3 text-[11px] text-blue-700/45 lg:hidden">
            <span className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-white/85 px-2 py-1">
              <PhoneCall className="h-3.5 w-3.5" />
              {topic}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
