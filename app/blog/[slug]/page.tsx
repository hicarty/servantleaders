import type { ComponentType } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import AccessibilityPage from "../ux/2025-03-03-accessibility.tsx/page"
import AgileUxPage from "../ux/2024-10-27-agile-ux.tsx/page"
import BuildingTeamPage from "../leadership/2024-10-building-team.tsx/page"
import DontBuildAlonePage from "../leadership/reflections-dont-build-alone.tsx/page"
import LeadershipManagementPage from "../leadership/reflections-leadership-management.tsx/page"
import LessonsIndustryPage from "../legacy/2017-lessons-industry.tsx/page"
import MarshallPage from "../legacy/2024-07-26-marshall.tsx/page"
import MergersPage from "../finance/2025-mergers.tsx/page"
import RoutesToFinancePage from "../finance/2024-10-routes-to-finance.tsx/page"
import SafePage from "../agile/2025-03-24-safe.tsx/page"
import SocialMediaPage from "../leadership/2025-social-media.tsx/page"
import Ux2060Page from "../ux/2026-03-18-ux-2060.tsx/page"
import WealthCreationPage from "../legacy/ongoing-wealth-creation.tsx/page"
import { blogPosts, type BlogPostSlug } from "@/components/blog-posts"

const postPages: Record<BlogPostSlug, ComponentType> = {
  accessibility: AccessibilityPage,
  "agile-ux": AgileUxPage,
  "building-team": BuildingTeamPage,
  "dont-build-alone": DontBuildAlonePage,
  "leadership-management": LeadershipManagementPage,
  "lessons-industry": LessonsIndustryPage,
  marshall: MarshallPage,
  mergers: MergersPage,
  "routes-to-finance": RoutesToFinancePage,
  safe: SafePage,
  "social-media": SocialMediaPage,
  "ux-2060": Ux2060Page,
  "wealth-creation": WealthCreationPage,
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  return post
    ? { title: `${post.title} — Servant Leaders UK` }
    : { title: "Post not found — Servant Leaders UK" }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  const PostPage = postPages[post.slug]
  return <PostPage />
}
