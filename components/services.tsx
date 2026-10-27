import { site } from "@/content/site"

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {site.services.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
            {site.services.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {site.services.items.map((service, i) => (
            <article key={service.title} className="border-t border-border pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl tracking-tight text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
