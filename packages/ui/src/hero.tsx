import type { SiteContent } from "./types"

export function Hero({ content }: { content: SiteContent }) {
  const { hero } = content

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-28">
        {/* eyebrow */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {hero.eyebrow}
          </p>
        </div>

        {/* statement */}
        <h1
          className={`mt-8 max-w-4xl text-balance ${content.theme.displayHeadingClass} text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl`}
        >
          {hero.title}
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {hero.blurb}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 font-mono text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-80"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

        <p className="mt-8 font-mono text-xs leading-relaxed text-muted-foreground">
          {hero.note}
        </p>
      </div>

      {/* oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden"
      >
        <p className="-mb-2 translate-y-2 whitespace-nowrap text-[20vw] font-semibold leading-none tracking-tighter text-foreground/[0.04] md:text-[16vw]">
          {hero.wordmark}
        </p>
      </div>
    </section>
  )
}
