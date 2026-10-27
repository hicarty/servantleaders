export function Hero() {
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
            Software consultancy · Connected devices · IoT UX
          </p>
        </div>

        {/* statement */}
        <h1 className="mt-8 max-w-4xl text-balance font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Serve others as greater
          <br className="hidden sm:block" /> than{" "}
          <span className="italic text-accent">oneself.</span>
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Thought leadership on connected devices and human-centred design. We
          help organisations ship hardware and software people actually want to
          use — from firmware to the final pixel.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 font-mono text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-80"
          >
            Serve your roadmap
          </a>
          <a
            href="#approach"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
          >
            How we work
          </a>
        </div>

        <p className="mt-8 font-mono text-xs leading-relaxed text-muted-foreground">
          {"// You're only as good as the team you serve."}
        </p>
      </div>

      {/* oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden"
      >
        <p className="-mb-2 translate-y-2 whitespace-nowrap text-[20vw] font-semibold leading-none tracking-tighter text-foreground/[0.04] md:text-[16vw]">
          SERVANTLEADERS
        </p>
      </div>
    </section>
  )
}
