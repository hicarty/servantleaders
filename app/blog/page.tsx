import type { Metadata } from "next"
import Link from "next/link"
import { BlogFooter, BlogNav } from "@/components/blog-nav"
import { jobs } from "@/components/jobs"

export const metadata: Metadata = {
  title: "Job Posts — Haven Carty",
  description:
    "Technical roles at Cluster Technology: assembling, testing and quality-assuring engineering samples for connected devices.",
}

export default function BlogRoute() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <BlogNav />
      <header className="mx-auto max-w-6xl border-b border-border px-6 pb-12 pt-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          Jobs &amp; careers
        </p>
        <h1 className="mt-4 max-w-xl font-serif text-5xl leading-none tracking-tight md:text-6xl">
          Build the samples that{" "}
          <em className="text-accent">connect the world.</em>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Technical roles at Cluster Technology. We assemble, test and
          quality-assure engineering samples for teams researching and designing
          connected devices across the UK &amp; Ireland.
        </p>
      </header>

      <ul className="mx-auto mt-12 max-w-6xl border-t border-border px-6">
        {jobs.map((job) => (
          <li key={job.slug}>
            <Link
              href={`/blog/${job.slug}`}
              className="group flex flex-col gap-2 border-b border-border py-6 transition-colors hover:bg-secondary/60 md:flex-row md:items-center md:gap-8 md:px-2"
            >
              <span className="font-mono text-xs tracking-wider text-muted-foreground md:w-40 md:shrink-0">
                {job.location}
              </span>
              <span className="flex-1 text-pretty font-serif text-xl tracking-tight text-foreground md:text-2xl">
                {job.title}
              </span>
              <span className="flex items-center gap-4 md:shrink-0">
                <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {job.division}
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-foreground transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <BlogFooter />
    </main>
  )
}
