import type { Metadata } from "next"
import { BlogPage } from "@/components/blog-page"

export const metadata: Metadata = {
  title: "Journal — Riaz Virani",
  description: "A journal for business leaders building with constancy, clarity and purpose.",
}

export default function BlogRoute() {
  return <BlogPage />
}

