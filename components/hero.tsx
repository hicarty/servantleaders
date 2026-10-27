import { site } from "@/content/site"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-28">
        {/* gold rule + eyebrow */}
        <span aria-hidden="true" className="block h-[3px] w-14 bg-accent" />
        <p className="mt-6 font-sans font-bold text-xs uppercase tracking-[0.25em] text-accent">
          {site.hero.eyebrow}
        </p>

        {/* statement */}
        <h1
          className={`mt-8 max-w-4xl text-balance ${site.theme.displayHeadingClass} text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-[80px]`}
        >
          {site.hero.title}
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-2xl md:leading-snug">
          {site.hero.blurb}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={site.hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 font-sans font-bold text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-80"
          >
            {site.hero.primaryCta.label}
          </a>
          <a
            href={site.hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 font-sans font-bold text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
          >
            {site.hero.secondaryCta.label}
          </a>
        </div>

        {/* callout */}
        <div className="mt-12 max-w-xl rounded-xl border border-border bg-card px-6 py-5">
          {site.hero.noteLabel && (
            <p className="font-sans font-bold text-[11px] uppercase tracking-[0.22em] text-accent">
              {site.hero.noteLabel}
            </p>
          )}
          <p className="mt-2 text-lg leading-snug text-foreground md:text-xl">
            {site.hero.note}
          </p>
        </div>
      </div>

      {/* oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden"
      >
        <p className="-mb-2 translate-y-2 whitespace-nowrap text-[20vw] font-semibold leading-none tracking-tighter text-foreground/[0.04] md:text-[16vw]">
          {site.hero.wordmark}
        </p>
      </div>
    </section>
  )
}
