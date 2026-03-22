import { useMemo, useState } from 'react';
import { CalendarDays, MessageCircle } from 'lucide-react';
import { BRAND, CALENDLY_LINK } from '../../config';
import { CalendlyBookingModal } from './CalendlyBookingModal';

const STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
  'Outside India',
];

const EMPTY_ERRORS = {
  name: '',
  phone: '',
  email: '',
  state: '',
};

function validateName(value) {
  const name = value.trim();
  if (!name) return 'Name is required.';
  if (!/^[A-Za-z][A-Za-z\s'.-]{1,59}$/.test(name)) {
    return 'Enter a valid full name (letters only).';
  }
  return '';
}

function validatePhone(value) {
  const digits = value.replace(/\D/g, '');
  if (!digits) return 'Mobile number is required.';
  if (!/^\d{10}$/.test(digits)) {
    return 'Enter a valid 10-digit mobile number.';
  }
  return '';
}

function validateEmail(value) {
  const email = value.trim();
  if (!email) return 'Email is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return 'Enter a valid email address.';
  }
  return '';
}

function validateState(value) {
  if (!value) return 'Please select your state.';
  return '';
}

function getPhoneForCalendly(rawPhone) {
  const digits = rawPhone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `+91${digits}`;
  }
  if (digits.length > 10) {
    return `+${digits}`;
  }
  return digits;
}

function buildCalendlyUrl(form, topic) {
  const params = new URLSearchParams({
    name: form.name.trim(),
    email: form.email.trim(),
    location: getPhoneForCalendly(form.phone),
    a1: topic,
    hide_event_type_details: '1',
    hide_gdpr_banner: '1',
  });

  return `${CALENDLY_LINK}?${params.toString()}`;
}

export function BookingFormCard({
  topic = 'your business requirements',
  badge = 'Talk to a Specialist',
  title,
  description,
  buttonLabel,
  onBooked,
  compact = false,
}) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', state: '' });
  const [bookingMode, setBookingMode] = useState('calendly');
  const [errors, setErrors] = useState(EMPTY_ERRORS);
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    state: false,
  });
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState('');

  const heading = title ?? `Book your ${topic} consultation`;
  const copy =
    description ??
    'Share your details and Taxera will guide you on the right route, timeline, documentation, and next steps.';
  const cta =
    buttonLabel ??
    (bookingMode === 'calendly' ? `Book ${topic} consultation` : `Start WhatsApp chat for ${topic}`);

  const stateOptions = useMemo(() => STATES, []);

  const runValidation = (field, value) => {
    if (field === 'name') return validateName(value);
    if (field === 'phone') return validatePhone(value);
    if (field === 'email') return validateEmail(value);
    if (field === 'state') return validateState(value);
    return '';
  };

  const onChange = (field, value) => {
    const normalizedValue = field === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;

    setForm((prev) => ({ ...prev, [field]: normalizedValue }));
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: runValidation(field, normalizedValue) }));
  };

  const validateAll = () => {
    const nextErrors = {
      name: validateName(form.name),
      phone: validatePhone(form.phone),
      email: validateEmail(form.email),
      state: validateState(form.state),
    };

    setErrors(nextErrors);
    setTouched({ name: true, phone: true, email: true, state: true });

    return !Object.values(nextErrors).some(Boolean);
  };

  const submit = (event) => {
    event.preventDefault();

    if (!validateAll()) {
      return;
    }

    const normalizedPhone = form.phone.replace(/\D/g, '');

    if (bookingMode === 'whatsapp') {
      const msg = [
        `Hi Taxera! I'd like to book a consultation for ${topic}.`,
        `Name: ${form.name.trim()}`,
        `Mobile: ${normalizedPhone}`,
        `Email: ${form.email.trim()}`,
        `State: ${form.state}`,
      ].join('\n');

      window.open(BRAND.whatsappLink(msg), '_blank', 'noopener,noreferrer');
      if (onBooked) {
        onBooked();
      }
      return;
    }

    const prefilledCalendlyUrl = buildCalendlyUrl(form, topic);
    setCalendlyUrl(prefilledCalendlyUrl);
    setCalendlyOpen(true);
    if (onBooked) {
      onBooked();
    }
  };

  const showError = (field) => touched[field] && errors[field];

  return (
    <>
      <div className={`glass-panel relative rounded-[1.8rem] ${compact ? 'p-4 sm:p-5' : 'p-5 sm:p-7'}`}>
        <span className="mb-4 inline-flex rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
          {badge}
        </span>

        <h3 className={`font-bold leading-[1.16] text-blue-950 ${compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-[2.3rem]'}`}>
          {heading}
        </h3>
        <p className={`mt-3 leading-relaxed text-blue-900/75 ${compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'}`}>{copy}</p>

        <form className={`space-y-3 ${compact ? 'mt-4' : 'mt-6'}`} onSubmit={submit} noValidate>
          <div>
            <input
              value={form.name}
              onChange={(e) => onChange('name', e.target.value)}
              placeholder="Name"
              autoComplete="name"
              className={`w-full rounded-[1.2rem] border-2 bg-white px-4 py-3 text-base text-blue-900 placeholder:text-blue-300 focus:outline-none ${showError('name') ? 'border-rose-300 focus:border-rose-400' : 'border-blue-100 focus:border-blue-400'}`}
            />
            {showError('name') ? <p className="mt-1 text-xs font-medium text-rose-600">{errors.name}</p> : null}
          </div>

          <div>
            <input
              value={form.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              placeholder="Mobile Number"
              autoComplete="tel"
              inputMode="numeric"
              maxLength={10}
              className={`w-full rounded-[1.2rem] border-2 bg-white px-4 py-3 text-base text-blue-900 placeholder:text-blue-300 focus:outline-none ${showError('phone') ? 'border-rose-300 focus:border-rose-400' : 'border-blue-100 focus:border-blue-400'}`}
            />
            {showError('phone') ? <p className="mt-1 text-xs font-medium text-rose-600">{errors.phone}</p> : null}
          </div>

          <div>
            <input
              value={form.email}
              onChange={(e) => onChange('email', e.target.value)}
              placeholder="Email"
              autoComplete="email"
              className={`w-full rounded-[1.2rem] border-2 bg-white px-4 py-3 text-base text-blue-900 placeholder:text-blue-300 focus:outline-none ${showError('email') ? 'border-rose-300 focus:border-rose-400' : 'border-blue-100 focus:border-blue-400'}`}
            />
            {showError('email') ? <p className="mt-1 text-xs font-medium text-rose-600">{errors.email}</p> : null}
          </div>

          <div>
            <select
              value={form.state}
              onChange={(e) => onChange('state', e.target.value)}
              className={`w-full rounded-[1.2rem] border-2 bg-white px-4 py-3 text-base font-semibold text-blue-900 focus:outline-none ${showError('state') ? 'border-rose-300 focus:border-rose-400' : 'border-blue-100 focus:border-blue-400'}`}
            >
              <option value="">Select State</option>
              {stateOptions.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {showError('state') ? <p className="mt-1 text-xs font-medium text-rose-600">{errors.state}</p> : null}
          </div>

          <div className="rounded-[1.2rem] bg-amber-50 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">Choose booking route</p>
            <div className="mt-2 grid grid-cols-2 gap-2 rounded-xl bg-white p-1.5">
              <button
                type="button"
                onClick={() => setBookingMode('whatsapp')}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${bookingMode === 'whatsapp' ? 'bg-blue-600 text-white' : 'text-blue-800 hover:bg-blue-50'}`}
              >
                WhatsApp Chat
              </button>
              <button
                type="button"
                onClick={() => setBookingMode('calendly')}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${bookingMode === 'calendly' ? 'bg-blue-600 text-white' : 'text-blue-800 hover:bg-blue-50'}`}
              >
                Book on Calendly
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-800 text-center font-bold text-white transition-colors hover:bg-blue-700 ${compact ? 'px-4 py-3 text-base' : 'px-6 py-3.5 text-base sm:text-xl'}`}
          >
            {bookingMode === 'calendly' ? <CalendarDays className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
            {cta}
          </button>

          <p className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-700/75 sm:text-sm">
            <MessageCircle className="h-4 w-4" />
            {bookingMode === 'calendly'
              ? 'Your details open as a prefilled Calendly booking window.'
              : 'Your details open as a prefilled WhatsApp chat.'}
          </p>
        </form>
      </div>

      <CalendlyBookingModal
        open={calendlyOpen}
        onClose={() => setCalendlyOpen(false)}
        calendlyUrl={calendlyUrl}
        topic={topic}
        formData={{
          name: form.name.trim(),
          email: form.email.trim(),
          phone: getPhoneForCalendly(form.phone),
          state: form.state,
        }}
      />
    </>
  );
}
