import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("social-media")

export const metadata: Metadata = { title: `${post.title} — Riaz Virani` }

export default function SocialMediaPage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>Getting one LinkedIn post live can involve marketing, brand, comms, legal, compliance, leadership, and regional teams. By the time everyone has had their say, the event has passed.</p>
      <blockquote>The bigger problem is what approval processes do to people.</blockquote>
      <h2>The fix</h2>
      <p>Give a small team clear ownership, guardrails, and the authority to run with it. Governance and agency can coexist.</p>
    </BlogArticle>
  )
}
