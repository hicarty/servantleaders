import Link from "next/link"
import { BlogFooter, BlogNav } from "@/components/blog-article"
import { blogPosts } from "@/components/blog-posts"

export function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <BlogNav />
      <header className="mx-auto max-w-6xl border-b border-border px-6 pb-12 pt-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4b7771]">Writing &amp; research</p>
        <h1 className="mt-4 max-w-xl font-serif text-5xl leading-none tracking-tight md:text-6xl">
          Ideas for building with <em className="text-[#4b7771]">purpose.</em>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Essays on UX, connected products, accessibility, agile delivery, leadership and creating lasting value.
        </p>
      </header>
      <ul className="mx-auto mt-12 max-w-6xl border-t border-border px-6">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 border-b border-border py-6 transition-colors hover:bg-secondary/60 md:flex-row md:items-center md:gap-8 md:px-2"
            >
              <span className="font-mono text-xs tracking-wider text-muted-foreground md:w-28 md:shrink-0">{post.date}</span>
              <span className="flex-1 font-serif text-xl tracking-tight md:text-2xl">{post.title}</span>
              <span className="flex items-center gap-4 md:shrink-0">
                <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{post.tag}</span>
                <span aria-hidden="true" className="font-mono transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <BlogFooter />
    </main>
  )
}