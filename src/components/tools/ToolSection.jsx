export function ToolSection({ eyebrow, title, description, children, className = '' }) {
  return (
    <section className={`px-4 py-16 md:px-8 lg:px-16 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {eyebrow ? (
          <span className="section-label mb-3 block text-xs font-semibold uppercase">{eyebrow}</span>
        ) : null}
        {title ? <h2 className="text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">{title}</h2> : null}
        {description ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-blue-900/72 md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

