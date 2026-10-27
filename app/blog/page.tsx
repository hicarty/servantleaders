import type { Metadata } from "next"
import { BlogPage } from "@/components/blog-page"

export const metadata: Metadata = {
  title: "Writing — Servant Leaders UK",
  description: "Essays on UX, connected products, agile delivery, leadership and building with purpose.",
}

export default function BlogRoute() {
  return <BlogPage />
}

