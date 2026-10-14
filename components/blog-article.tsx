import Link from "next/link"
import type { ReactNode } from "react"

type BlogArticleProps = {
  date: string
  title: string
  tag: string
  children: ReactNode
}

export function BlogNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 px-6">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between">
        <Link href="/blog" className="font-serif text-xl text-[#c4622d]">
          Riaz Virani
        </Link>
        <div className="flex gap-7 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <Link href="/blog" className="text-foreground">Writing</Link>
          <Link href="/#contact" className="hover:text-foreground">About</Link>
        </div>
      </div>
    </nav>
  )
}

export function BlogFooter() {
  return (
    <footer className="mt-20 border-t border-border px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
      ServantLeaders · Haven Carty · All rights reserved
    </footer>
  )
}

export function BlogArticle({ date, title, tag, children }: BlogArticleProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <BlogNav />
      <article className="mx-auto max-w-6xl px-6">
        <Link href="/blog" className="inline-block py-6 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground">
          ← All posts
        </Link>
        <header className="max-w-[680px] border-b border-border pb-10 pt-4">
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{tag}</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{date}</span>
          </div>
          <h1 className="font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">{title}</h1>
        </header>
        <div className="prose-blog max-w-[680px] py-11">{children}</div>
      </article>
      <BlogFooter />
    </main>
  )
}