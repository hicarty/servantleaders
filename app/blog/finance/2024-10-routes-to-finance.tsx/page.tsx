import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("routes-to-finance")

export const metadata: Metadata = { title: `${post.title} — Servant Leaders UK` }

export default function RoutesToFinancePage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>Since being laid off, I have been looking for alternative sources of finance — from friends and family, to co-founders, specialists, and a co-operative structure.</p>
      <h2>Co-operative structure</h2>
      <p>Giving all partners ownership from the beginning creates a clean, fair exit path and aligns responsibility with the mission.</p>
    </BlogArticle>
  )
}
