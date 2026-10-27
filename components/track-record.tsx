import { site } from "@/content/site"

export function TrackRecord() {
  return (
    <section id="track-record" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div>
            <span aria-hidden="true" className="mb-5 block h-[3px] w-12 bg-accent" />
            <p className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-accent">
              {site.trackRecord.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-serif font-bold text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
              {site.trackRecord.name}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {site.trackRecord.blurb}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
              {site.trackRecord.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-sans font-bold text-[11px] uppercase tracking-widest text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-pretty leading-snug text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:pt-2">
            <ol className="relative border-l border-border">
              {site.trackRecord.timeline.map((item) => (
                <li key={item.role} className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <h3 className="font-serif font-bold text-xl tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
