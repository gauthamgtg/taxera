import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { getServicePage } from '../../data/serviceDetails';
import { BookingFormCard } from './BookingFormCard';

const SESSION_KEY = 'taxera_timed_popup_closed';

function getTopicFromPath(pathname) {
  const parts = pathname.split('/').filter(Boolean);

  if (parts[0] === 'services' && parts[1] && parts[2]) {
    const foundService = getServicePage(parts[1], parts[2]);
    if (foundService) {
      return foundService.name;
    }
  }

  if (parts[0] === 'services' && parts[1]) {
    const foundCategory = SERVICES_DATA.find((item) => item.id === parts[1]);
    if (foundCategory) {
      return foundCategory.name;
    }
  }

  return 'Business Compliance Services';
}

export function TimedBookingPopup() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const topic = useMemo(() => getTopicFromPath(location.pathname), [location.pathname]);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === '1') {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 60000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onEsc = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        sessionStorage.setItem(SESSION_KEY, '1');
      }
    };

    document.addEventListener('keydown', onEsc);

    return () => {
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(SESSION_KEY, '1');
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[90] w-[min(30rem,calc(100vw-1rem))] animate-modal-in">
      <div className="glass-panel relative max-h-[85vh] overflow-y-auto rounded-[1.8rem] border border-blue-100/80 p-3 shadow-[0_20px_60px_rgba(10,44,112,0.28)] sm:p-4">
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-600 shadow-sm"
          aria-label="Close booking popup"
        >
          <X className="h-5 w-5" />
        </button>

        <BookingFormCard
          compact
          topic={topic}
          badge="Need help deciding?"
          title={`Quick consultation for ${topic}`}
          description={`Share your details and we will send the fastest route, document checklist, and practical next steps for ${topic.toLowerCase()}.`}
          buttonLabel="Talk to Taxera Expert"
          onBooked={close}
        />
      </div>
    </div>
  );
}
