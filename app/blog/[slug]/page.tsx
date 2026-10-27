import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BlogFooter, BlogNav } from "@/components/blog-nav"
import { APPLY_EMAIL, jobs } from "@/components/jobs"

type JobPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return jobs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params
  const job = jobs.find((item) => item.slug === slug)

  return job ? { title: `${job.title} — Haven Carty` } : {}
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params
  const job = jobs.find((item) => item.slug === slug)

  if (!job) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <BlogNav />

      <article className="mx-auto max-w-3xl px-6 pb-24 pt-16">
        <Link
          href="/blog"
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← All job posts
        </Link>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          {job.division} · {job.location}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-none tracking-tight md:text-5xl">
          {job.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {job.summary}
        </p>

        <h2 className="mt-10 font-serif text-2xl tracking-tight">
          Responsibilities
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
          {job.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <a
          href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
          className="mt-10 inline-block rounded-full bg-foreground px-7 py-3 font-mono text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-80"
        >
          Apply for this role
        </a>
      </article>

      <BlogFooter />
    </main>
  )
}
