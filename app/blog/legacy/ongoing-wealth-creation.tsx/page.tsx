import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("wealth-creation")

export const metadata: Metadata = { title: `${post.title} — Servant Leaders UK` }

export default function WealthCreationPage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <h2>Fundamentals for a Wealth Creation Mindset</h2>
      <p>Income is a flow. Wealth is a stock — the accumulation of assets that generate value independently of your labour.</p>
      <h2>Building Types of Wealth</h2>
      <h3>Entrepreneurial — creative as a child of God</h3>
      <p>There is something deeply human about building. The instinct to create, solve, and bring something new into existence is a meaningful form of value creation.</p>
      <blockquote>Profit can be a liability. The reputation of your company and maintaining that is pivotal.</blockquote>
      <h2>Establish Values</h2>
      <p>Wealth without values is extraction without purpose. Scale should amplify what you stand for, not replace it.</p>
    </BlogArticle>
  )
}
