import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("dont-build-alone")

export const metadata: Metadata = { title: `${post.title} — Riaz Virani` }

export default function DontBuildAlonePage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <blockquote>Even the most visionary leaders need counsel. Seeking advice isn&apos;t weakness — it&apos;s wisdom.</blockquote>
      <p>The mythology of the lone founder is seductive and dangerous. Build a room where people will tell you when you are wrong, especially when you are sure you are right.</p>
    </BlogArticle>
  )
}
