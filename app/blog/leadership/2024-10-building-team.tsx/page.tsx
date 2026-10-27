import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("building-team")

export const metadata: Metadata = { title: `${post.title} — Servant Leaders UK` }

export default function BuildingTeamPage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>Creating a culture means building before you scale. The first community assigned to you is family, followed by the wider communities that support meaningful work.</p>
      <h2>The right co-founders</h2>
      <p>Bring values and align the mission before scale forces the question.</p>
    </BlogArticle>
  )
}
