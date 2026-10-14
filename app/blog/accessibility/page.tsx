import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("accessibility")

export const metadata: Metadata = { title: `${post.title} — Servant Leaders UK` }

export default function AccessibilityPage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>eBay&apos;s accessibility tool for designers and engineers is a notable shift — moving accessibility from a compliance checklist into the design and development workflow.</p>
      <h2>Why it matters</h2>
      <p>When designers and engineers share the same vocabulary, tool, and output, there are fewer translation errors and fewer “that&apos;s a dev problem” moments.</p>
      <h2>The broader implication</h2>
      <p>Accessibility cannot be a late-stage audit. It has to be a design material, as early and as fundamental as colour or type.</p>
    </BlogArticle>
  )
}
