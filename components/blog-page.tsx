import { BlogFooter, BlogNav } from "@/components/blog-article"
import { BlogPostList } from "@/components/blog-post-list"

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
      <BlogPostList />
      <BlogFooter />
    </main>
  )
}