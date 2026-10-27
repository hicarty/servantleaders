import type { ReactNode } from "react"
import { APPLY_EMAIL, jobs, type Job } from "../jobs"

function JobBody({ job }: { job: Job }) {
  return (
    <>
      <p>{job.summary}</p>
      <h2>Responsibilities</h2>
      <ul>
        {job.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        <a
          href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
          className="inline-block rounded-full bg-foreground px-5 py-2 font-mono text-xs uppercase tracking-widest text-background no-underline"
        >
          Apply for this role
        </a>
      </p>
    </>
  )
}

export const postBodies: Record<string, ReactNode> = Object.fromEntries(
  jobs.map((job) => [job.slug, <JobBody key={job.slug} job={job} />]),
)
