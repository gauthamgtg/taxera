import { LuxuryIllustration } from '../shared/LuxuryIllustration';

export function AboutSection({ content }) {
  return (
    <section className="px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-100/65 bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(241,248,255,0.86))] p-8 shadow-[0_26px_70px_rgba(14,50,124,0.12)]">
          <div className="absolute -left-16 top-[-2rem] h-52 w-52 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute right-[-3rem] top-[30%] h-40 w-40 rounded-full bg-cyan-200/26 blur-3xl" />
          <span className="section-label mb-3 block text-xs font-semibold uppercase">Overview</span>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">{content.title}</h2>
          <div className="space-y-4">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="border-l-2 border-blue-200 pl-4 text-base leading-relaxed text-blue-900/74">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="dark-glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] bg-gradient-to-bl from-blue-300/25 to-transparent" />
          <LuxuryIllustration variant="service" />
          <div className="mt-5 grid gap-2 text-sm text-blue-100/80 sm:grid-cols-2">
            {[
              'Category-specific strategy',
              'Practical execution guidance',
              'Fast communication',
              'Transparent process',
            ].map((point) => (
              <p key={point} className="rounded-xl border border-white/15 bg-white/8 px-3 py-2">
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
