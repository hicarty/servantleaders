export const blogPosts = [
  { slug: "super-ai-native-programming", route: "2026-10-15-super-ai-native-programming.tsx", category: "agile", date: "15 Oct 2026", title: "Super AI-Native programming", tag: "Agile" },
  { slug: "wealth-creation", route: "ongoing-wealth-creation.tsx", category: "legacy", date: "Ongoing", title: "Deconstructing my idea of Wealth Creation", tag: "Finance" },
  { slug: "ux-2060", route: "2026-03-18-ux-2060.tsx", category: "ux", date: "18 Mar 2026", title: "Future Trends for UX/UI Designers: Staying Relevant to 2060", tag: "UX" },
  { slug: "agile-ux", route: "2024-10-27-agile-ux.tsx", category: "ux", date: "27 Oct 2024", title: "Building Integrated AgilePM — User eXperiences", tag: "Agile" },
  { slug: "accessibility", route: "2025-03-03-accessibility.tsx", category: "ux", date: "03 Mar 2025", title: "eBay creates an accessibility tool for designers and engineers", tag: "Accessibility" },
  { slug: "marshall", route: "2024-07-26-marshall.tsx", category: "legacy", date: "26 Jul 2024", title: "My experience working at Marshall Amplification PLC", tag: "Career" },
  { slug: "safe", route: "2025-03-24-safe.tsx", category: "agile", date: "24 Mar 2025", title: "SAFe Scalable Agile Framework Updates", tag: "Agile" },
  { slug: "lessons-industry", route: "2017-lessons-industry.tsx", category: "legacy", date: "2017", title: "Lessons from Industry", tag: "Career" },
  { slug: "dont-build-alone", route: "reflections-dont-build-alone.tsx", category: "leadership", date: "Reflections", title: "Don't Build Alone", tag: "Leadership" },
  { slug: "leadership-management", route: "reflections-leadership-management.tsx", category: "leadership", date: "Reflections", title: "Leadership vs. Management", tag: "Leadership" },
  { slug: "routes-to-finance", route: "2024-10-routes-to-finance.tsx", category: "finance", date: "Oct 2024", title: "Routes to Finance", tag: "Finance" },
  { slug: "social-media", route: "2025-social-media.tsx", category: "leadership", date: "2025", title: "Why is it so hard for large organisations to just… post something?", tag: "Leadership" },
  { slug: "building-team", route: "2024-10-building-team.tsx", category: "leadership", date: "Oct 2024", title: "Building the Team", tag: "Leadership" },
  { slug: "mergers", route: "2025-mergers.tsx", category: "finance", date: "2025", title: "Mergers, Acquisitions & Partnerships", tag: "Finance" },
] as const

export type BlogPostSlug = (typeof blogPosts)[number]["slug"]

export function getBlogPost(slug: BlogPostSlug) {
  return blogPosts.find((post) => post.slug === slug)!
}