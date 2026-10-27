import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogArticle } from "@/components/blog-article"
import { getPost, site, siteName } from "@/content/site"
import { postBodies } from "@/content/posts"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  if (!site.blog.enabled) return []
  return site.blog.posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: `${post.title} — ${siteName}` }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  if (!site.blog.enabled) notFound()

  const { slug } = await params
  const post = getPost(slug)
  const body = postBodies[slug]

  if (!post || !body) notFound()

  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      {body}
    </BlogArticle>
  )
}
