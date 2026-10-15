import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("leadership-management")

export const metadata: Metadata = { title: `${post.title} — Servant Leaders UK` }

export default function LeadershipManagementPage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>Framing an assignment is a skill. Giving the why and creating a sense of importance is the core of effective leadership.</p>
      <h2>The distinction that matters</h2>
      <p>Management is stewardship of existing systems. Leadership points somewhere new and persuades people the journey is worth it.</p>
    </BlogArticle>
  )
}
