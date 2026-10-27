import type { ReactNode } from "react"

export type NavLink = { label: string; href: string }

export type ValueItem = { no: string; title: string; body: string }

export type ServiceItem = { title: string; summary: string; points: string[] }

export type Fact = { label: string; value: string }

export type TimelineItem = { role: string; detail: string }

export type ArticleCard = { date: string; title: string; tag: string; href: string }

export type BlogPost = {
  slug: string
  date: string
  title: string
  tag: string
}

export type SiteContent = {
  seo: {
    title: string
    description: string
  }
  theme: {
    /** Tailwind class applied to large display headings (e.g. hero h1, blog h1). */
    displayHeadingClass: string
  }
  nav: {
    brand: string
    brandSuffix?: string
    links: NavLink[]
    cta: { label: string; href: string }
  }
  hero: {
    eyebrow: string
    title: ReactNode
    blurb: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    note: string
    wordmark: string
  }
  values: {
    eyebrow: string
    heading: string
    aside: string
    items: ValueItem[]
  }
  services: {
    eyebrow: string
    heading: string
    items: ServiceItem[]
  }
  writing: {
    eyebrow: string
    heading: string
    aside: string
    articles: ArticleCard[]
  }
  trackRecord: {
    eyebrow: string
    name: string
    blurb: string
    facts: Fact[]
    timeline: TimelineItem[]
  }
  contact: {
    eyebrow: string
    heading: string
    blurb: string
    email: string
    socials: string[]
  }
  footer: {
    brand: string
    blurb?: string
    copyright: string
    location?: string
    wordmark: string
  }
  blog: {
    enabled: boolean
    navLabel: string
    navHref: string
    navBrand: string
    footerText: string
    index: {
      eyebrow: string
      heading: ReactNode
      blurb: string
      metadataTitle: string
      metadataDescription: string
    }
    posts: BlogPost[]
  }
}
