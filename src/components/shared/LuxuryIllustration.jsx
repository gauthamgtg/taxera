export function LuxuryIllustration({ variant = 'home' }) {
  const isHome = variant === 'home';

  return (
    <div className={`pointer-events-none relative overflow-hidden rounded-[2rem] ${isHome ? 'h-[28rem]' : 'h-[22rem]'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.30),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.20),_transparent_30%),linear-gradient(170deg,_rgba(7,35,92,0.95),_rgba(15,49,117,0.82))]" />
      <div className="animate-float absolute left-[14%] top-[12%] h-16 w-16 rounded-full border border-blue-100/25 bg-white/10" />
      <div className="animate-drift absolute right-[16%] top-[18%] h-28 w-28 rounded-full border border-cyan-100/25 bg-cyan-300/20" />
      <div className="animate-float-slow absolute bottom-[14%] left-[8%] h-20 w-20 rounded-full border border-blue-100/25 bg-blue-300/20" />

      <svg
        viewBox="0 0 640 520"
        className="absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`panel-${variant}`} x1="120" y1="78" x2="498" y2="438" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(255,255,255,0.35)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
          <linearGradient id={`blue-${variant}`} x1="420" y1="98" x2="530" y2="198" gradientUnits="userSpaceOnUse">
            <stop stopColor="#93C5FD" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id={`cyan-${variant}`} x1="110" y1="324" x2="224" y2="456" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CFFAFE" />
            <stop offset="1" stopColor="#0891B2" />
          </linearGradient>
          <radialGradient id={`core-${variant}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(336 250) rotate(90) scale(120 158)">
            <stop stopColor="rgba(255,255,255,0.62)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.04)" />
          </radialGradient>
        </defs>

        <g opacity="0.95">
          <rect x="122" y="86" width="398" height="252" rx="36" fill={`url(#panel-${variant})`} stroke="rgba(255,255,255,0.2)" />
          <rect x="150" y="122" width="180" height="16" rx="8" fill="rgba(255,255,255,0.24)" />
          <rect x="150" y="156" width="120" height="12" rx="6" fill="rgba(255,255,255,0.12)" />
          <rect x="150" y="182" width="152" height="12" rx="6" fill="rgba(255,255,255,0.12)" />

          <rect x="366" y="126" width="118" height="118" rx="28" fill={`url(#blue-${variant})`} opacity="0.94" />
          <path d="M395 178C418.5 151.5 440.5 151.5 457 171.5C473.5 191.5 489 191.5 489 191.5" stroke="#E0EEFF" strokeWidth="10" strokeLinecap="round" />

          <rect x="148" y="236" width="156" height="68" rx="24" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.16)" />
          <rect x="170" y="258" width="84" height="12" rx="6" fill="rgba(255,255,255,0.28)" />
          <rect x="170" y="280" width="54" height="10" rx="5" fill="rgba(255,255,255,0.13)" />

          <rect x="330" y="274" width="174" height="100" rx="26" fill="rgba(5,24,68,0.44)" stroke="rgba(255,255,255,0.16)" />
          <circle cx="364" cy="308" r="18" fill={`url(#cyan-${variant})`} />
          <rect x="392" y="294" width="84" height="12" rx="6" fill="rgba(255,255,255,0.24)" />
          <rect x="392" y="316" width="58" height="10" rx="5" fill="rgba(255,255,255,0.12)" />
          <rect x="348" y="342" width="128" height="10" rx="5" fill="rgba(255,255,255,0.12)" />
        </g>

        <circle cx="508" cy="102" r="48" fill="rgba(59,130,246,0.22)" />
        <circle cx="212" cy="404" r="68" fill="rgba(34,211,238,0.16)" />
        <ellipse cx="336" cy="254" rx="132" ry="110" fill={`url(#core-${variant})`} opacity="0.62" />
      </svg>
    </div>
  );
}
