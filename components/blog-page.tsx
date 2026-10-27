import Link from "next/link"
import { notFound } from "next/navigation"
import { BlogFooter, BlogNav } from "@/components/blog-article"
import { site } from "@/content/site"

export function BlogPage() {
  if (!site.blog.enabled) notFound()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <BlogNav />
      <header className="mx-auto max-w-6xl border-b border-border px-6 pb-12 pt-20">
        <span aria-hidden="true" className="mb-6 block h-[3px] w-14 bg-accent" />
        <p className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-accent">
          {site.blog.index.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif font-bold text-4xl leading-[1.08] tracking-tight text-foreground md:text-[64px]">
          {site.blog.index.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-snug text-muted-foreground md:text-xl">
          {site.blog.index.blurb}
        </p>
      </header>
      <ul className="mx-auto mt-12 max-w-6xl border-t border-border px-6">
        {site.blog.posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 border-b border-border py-6 transition-colors hover:bg-secondary/60 md:flex-row md:items-center md:gap-8 md:px-2"
            >
              <span className="font-sans font-bold text-xs tracking-wider text-muted-foreground md:w-28 md:shrink-0">{post.date}</span>
              <span className="flex-1 font-serif font-bold text-xl tracking-tight md:text-2xl">{post.title}</span>
              <span className="flex items-center gap-4 md:shrink-0">
                <span className="rounded-full border border-border px-3 py-1 font-sans font-bold text-[10px] uppercase tracking-wider text-muted-foreground">{post.tag}</span>
                <span aria-hidden="true" className="font-sans font-bold transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <BlogFooter />
    </main>
  )
}
