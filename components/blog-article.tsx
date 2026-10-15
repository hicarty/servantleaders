"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { useState } from "react"
import { BlogPostList } from "@/components/blog-post-list"

type BlogArticleProps = {
  date: string
  title: string
  tag: string
  children: ReactNode
}

export function BlogNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Blog navigation" className="sticky top-0 z-50 border-b border-border bg-background/95 px-6">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between">
        <Link href="/" className="font-serif text-xl text-[#c4622d]">
          ServantLeadersUK
        </Link>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          aria-expanded={open}
          aria-controls="blog-post-menu"
        >
          <span>All posts</span>
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
        </button>
      </div>
      <div id="blog-post-menu" hidden={!open} className="border-t border-border">
        <BlogPostList onSelect={() => setOpen(false)} />
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