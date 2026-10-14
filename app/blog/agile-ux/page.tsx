import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("agile-ux")

export const metadata: Metadata = { title: `${post.title} — Riaz Virani` }

export default function AgileUxPage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>Agile project management and UX design have long been treated as adjacent disciplines. The more interesting question is what happens when you integrate them from the ground up as a shared culture.</p>
      <h2>The marketing strategy</h2>
      <p>Clients and partners on one side. AgilePM on the other. The model only works when both sides can see the same horizon.</p>
      <ul>
        <li>Your solution</li>
        <li>The problem you are fixing</li>
        <li>Your alternatives</li>
        <li>A genuine understanding of your audience</li>
      </ul>
      <blockquote>Real agility is removing unnecessary bureaucracy so talented people can get things done.</blockquote>
    </BlogArticle>
  )
}
