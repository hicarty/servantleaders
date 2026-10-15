import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("mergers")

export const metadata: Metadata = { title: `${post.title} — Servant Leaders UK` }

export default function MergersPage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>Do you need advice on the technology you are acquiring, or help finding the greater potential in things?</p>
      <h2>Technical due diligence</h2>
      <p>Understanding technical debt means communicating across finance, software development, and electronics engineering — from cloud architecture down to embedded systems.</p>
      <h2>What to look for</h2>
      <ul>
        <li>Early, undervalued start-ups</li>
        <li>Young talent and pre-seed investment</li>
        <li>Essential business functions</li>
        <li>Current and projected turnover</li>
      </ul>
    </BlogArticle>
  )
}
