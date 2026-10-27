import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("marshall")

export const metadata: Metadata = { title: `${post.title} — Servant Leaders UK` }

export default function MarshallPage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>Marshall Amplification was my first professional encounter with design at the intersection of heritage and technology.</p>
      <h2>What I took away</h2>
      <p>Working inside a company whose product is iconic taught me the weight of making things that last — and the relationship between brand, engineering, and the person who holds the product.</p>
    </BlogArticle>
  )
}
