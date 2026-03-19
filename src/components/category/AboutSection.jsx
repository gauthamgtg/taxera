import { LuxuryIllustration } from '../shared/LuxuryIllustration';

export function AboutSection({ content }) {
  return (
    <section className="px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="dark-glass-panel relative overflow-hidden rounded-[2rem] p-6">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] bg-gradient-to-bl from-blue-300/25 to-transparent" />
          <LuxuryIllustration variant="service" />
        </div>
        <div className="glass-panel rounded-[2rem] p-8">
          <span className="section-label mb-3 block text-xs font-semibold uppercase">Overview</span>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">{content.title}</h2>
          <div className="flex flex-col gap-4">
            {content.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-blue-900/72">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
