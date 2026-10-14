import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("lessons-industry")

export const metadata: Metadata = { title: `${post.title} — Riaz Virani` }

export default function LessonsIndustryPage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>My apprenticeship taught me responsive design, software engineering, and the pace of the real world. Clients do not wait for you to feel ready.</p>
      <h2>Invoicing £150 for a trial week</h2>
      <p>Knowing what your time is worth before anyone else does is an act of professionalism.</p>
    </BlogArticle>
  )
}
