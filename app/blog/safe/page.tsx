import type { Metadata } from "next"
import Image from "next/image"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("safe")

export const metadata: Metadata = { title: `${post.title} — Riaz Virani` }

export default function SafePage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>SAFe continues to evolve around a central tension: structure can make agile enterprise-ready, but too much structure can remove its adaptability.</p>
      <Image
        src="/images/Firefly_remove%20820139.png"
        alt="SAFe framework diagram showing a servant leader and connected backlogs"
        width={3244}
        height={1312}
        sizes="(max-width: 680px) 100vw, 680px"
        className="my-8 h-auto w-full"
      />
      <h2>The real question</h2>
      <p>The useful exercise is developing the judgment to know which parts of a framework serve your context and which can be left on the shelf.</p>
      <blockquote>A framework is a starting point. The discipline is knowing when to follow it and when to set it aside.</blockquote>
      <h2>Final takeaway</h2>
      <p>The fundamental purpose of SAFe remains the same: align strategy, people, and delivery so that organisations can deliver value more effectively.</p>
      <p>The difference is that <strong>SAFe 6.0 makes the flow of value, respect for people, continuous improvement, clearer responsibilities, and measurable outcomes more explicit</strong>.</p>
      <p>If you remember just five things, remember these:</p>
      <ol>
        <li><strong>Core Values changed:</strong> Respect for People and Relentless Improvement replaced Built-In Quality and Program Execution in the four-value list.</li>
        <li><strong>Flow became more prominent:</strong> SAFe 6.0 introduced eight flow accelerators.</li>
        <li><strong>Terminology was standardised:</strong> Program Backlog became ART Backlog, and related program terminology was updated.</li>
        <li><strong>Measurement improved:</strong> Outcomes, Flow, and Competency became the three measurement domains, with optional OKRs added.</li>
        <li><strong>Business Agility broadened:</strong> Continuous Learning Culture became foundational across all configurations, while guidance for AI, Big Data, Cloud, and business-wide agility expanded.</li>
      </ol>
    </BlogArticle>
  )
}
