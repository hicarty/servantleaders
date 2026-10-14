export const blogPosts = [
  { slug: "complete-wellness-workspace", date: "01 Jul 2025", title: "Creating Your Complete Wellness Workspace (Without the Corporate Nonsense)", tag: "Integrated Membership" },
  { slug: "wealth-creation", date: "Ongoing", title: "Deconstructing my idea of Wealth Creation", tag: "Finance" },
  { slug: "ux-2060", date: "18 Mar 2026", title: "Future Trends for UX/UI Designers: Staying Relevant to 2060", tag: "UX" },
  { slug: "agile-ux", date: "27 Oct 2024", title: "Building Integrated AgilePM — User eXperiences", tag: "Agile" },
  { slug: "accessibility", date: "03 Mar 2025", title: "eBay creates an accessibility tool for designers and engineers", tag: "Accessibility" },
  { slug: "marshall", date: "26 Jul 2024", title: "My experience working at Marshall Amplification PLC", tag: "Career" },
  { slug: "safe", date: "24 Mar 2025", title: "SAFe Scalable Agile Framework Updates", tag: "Agile" },
  { slug: "lessons-industry", date: "2017", title: "Lessons from Industry", tag: "Career" },
  { slug: "dont-build-alone", date: "Reflections", title: "Don't Build Alone", tag: "Leadership" },
  { slug: "leadership-management", date: "Reflections", title: "Leadership vs. Management", tag: "Leadership" },
  { slug: "routes-to-finance", date: "Oct 2024", title: "Routes to Finance", tag: "Finance" },
  { slug: "social-media", date: "2025", title: "Why is it so hard for large organisations to just… post something?", tag: "Leadership" },
  { slug: "building-team", date: "Oct 2024", title: "Building the Team", tag: "Leadership" },
  { slug: "mergers", date: "2025", title: "Mergers, Acquisitions & Partnerships", tag: "Finance" },
] as const

export type BlogPostSlug = (typeof blogPosts)[number]["slug"]

export function getBlogPost(slug: BlogPostSlug) {
  return blogPosts.find((post) => post.slug === slug)!
}