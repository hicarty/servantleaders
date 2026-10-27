import Link from "next/link"

export function BlogNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl leading-none tracking-tight text-foreground">
            Haven Carty
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Cluster Technology
          </span>
        </Link>

        <nav className="flex items-center gap-6" aria-label="Blog">
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to site
          </Link>
          <Link
            href="/blog"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Job Posts
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function BlogFooter() {
  return (
    <footer className="mt-20 border-t border-border px-6 py-10 text-center font-mono text-[10px] uppercase tracking-[0.05em] text-muted-foreground">
      ServantLeaders · Haven Carty · All rights reserved
    </footer>
  )
}
