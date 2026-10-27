"use client"

import { useState } from "react"
import type { SiteContent } from "./types"

type SiteNavProps = {
  nav: SiteContent["nav"]
}

export function SiteNav({ nav }: SiteNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-xl leading-none tracking-tight text-foreground">
            {nav.brand}
          </span>
          {nav.brandSuffix && (
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              {nav.brandSuffix}
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.cta.href}
          className="hidden rounded-full bg-foreground px-5 py-2 font-mono text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-80 md:inline-block"
        >
          {nav.cta.label}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="h-px w-6 bg-foreground" />
          <span className="h-px w-6 bg-foreground" />
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm uppercase tracking-widest text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-foreground px-5 py-2.5 text-center font-mono text-xs uppercase tracking-widest text-background"
          >
            {nav.cta.label}
          </a>
        </nav>
      )}
    </header>
  )
}

export const Navbar = SiteNav
