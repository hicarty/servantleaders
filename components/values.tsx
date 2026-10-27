import { site } from "@/content/site"

export function Values() {
  return (
    <section id="approach" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              {site.values.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
              {site.values.heading}
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            {site.values.aside}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {site.values.items.map((value) => (
            <article key={value.no} className="bg-card p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-accent">
                  {value.no}
                </span>
                <span className="h-px w-10 bg-border" />
              </div>
              <h3 className="mt-6 font-serif text-2xl tracking-tight text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {value.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
