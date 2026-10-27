import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPage } from "@/components/blog-page"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: site.blog.index.metadataTitle,
  description: site.blog.index.metadataDescription,
}

export default function BlogRoute() {
  if (!site.blog.enabled) notFound()
  return <BlogPage />
}
