"use client"

import { site } from "@/content/site"

export function ContactCta() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              {site.contact.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
              {site.contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {site.contact.blurb}
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${site.contact.email}`}
                className="block font-serif text-2xl tracking-tight text-foreground underline decoration-accent decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
              >
                {site.contact.email}
              </a>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {site.contact.socials.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="border-b border-border bg-transparent pb-2 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="company"
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
              >
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Organisation"
                className="border-b border-border bg-transparent pb-2 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="brief"
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
              >
                The brief
              </label>
              <textarea
                id="brief"
                rows={3}
                placeholder="What are you building?"
                className="resize-none border-b border-border bg-transparent pb-2 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-80"
            >
              Send it over
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
