import type { SiteContent } from "./types"

export const site: SiteContent = {
  seo: {
    title: "Riaz Virani — Business Consultancy with Constancy",
    description:
      "Riaz Virani is a business consultancy campaign built around clear thinking, responsible growth and the constancy to turn good intentions into durable results.",
  },
  theme: {
    displayHeadingClass: "font-serif font-bold",
  },
  nav: {
    brand: "Riaz Virani",
    links: [
      { label: "Approach", href: "#approach" },
      { label: "Services", href: "#services" },
      { label: "Writing", href: "/blog" },
      { label: "Track Record", href: "#track-record" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Start a project", href: "#contact" },
  },
  hero: {
    eyebrow: "Business constancy · Integrated membership · Sustainable performance",
    title: (
      <>
        Build with clarity.
        <br className="hidden sm:block" /> Lead with{" "}
        <span className="text-accent">constancy.</span>
      </>
    ),
    blurb:
      "A campaign for leaders who want to make sound decisions, grow with intention and build organisations people can trust. Riaz Virani brings strategic perspective across workspace design, integrated membership, wellbeing and sustainable performance — without the corporate theatre.",
    primaryCta: { label: "Serve your roadmap", href: "#contact" },
    secondaryCta: { label: "How we work", href: "#approach" },
    note: "You're only as good as the team you serve.",
    noteLabel: "A guiding thought",
    wordmark: "SERVANTLEADERS",
  },
  values: {
    eyebrow: "The operating values",
    heading: "Three principles, applied without ceremony.",
    aside:
      "Aspiring Kanban cleaner, scrum and sprint janitor. Someone has to keep the board tidy and the column WIP honest — happily, that someone is me.",
    items: [
      {
        no: "01",
        title: "Agility",
        body: "Small batches, tight loops, working software over working theatre. We move at the speed of learning, not the speed of meetings.",
      },
      {
        no: "02",
        title: "Collaboration",
        body: "Servant leadership in practice: clear the blockers, protect the team, share the credit. The best decisions are made closest to the work.",
      },
      {
        no: "03",
        title: "Innovation",
        body: "Connected products live where hardware, firmware and interface meet. We design across that seam so the whole experience feels inevitable.",
      },
    ],
  },
  services: {
    eyebrow: "What we serve",
    heading: "Software consultancy, from firmware to the final pixel.",
    items: [
      {
        title: "IoT user experience",
        summary:
          "In-depth UX for connected devices — the bit between a sensor reading and a human decision. Information architecture, interaction design and usability for products that span a screen and the physical world.",
        points: ["Connected-device journeys", "Onboarding & first-run", "Accessibility-led design"],
      },
      {
        title: "Web development",
        summary:
          "Production web applications, dashboards and companion apps. Modern, fast and maintainable front-ends wired to the back-ends and APIs your devices depend on.",
        points: ["React & Next.js apps", "Device dashboards & telemetry", "Design systems"],
      },
      {
        title: "Firmware & devices",
        summary:
          "Embedded software and prototype hardware from someone who has actually shipped devices. Bridging the gap between the schematic and the user — without the jargon getting in the way (mostly).",
        points: ["Embedded firmware", "Prototype engineering", "Additive manufacturing"],
      },
      {
        title: "Human-centred design",
        summary:
          "Research, service design and the unglamorous facilitation that keeps a cross-functional team pointed at the user. Fewer opinions, more evidence.",
        points: ["Discovery & research", "Agile delivery coaching", "Stakeholder workshops"],
      },
    ],
  },
  writing: {
    eyebrow: "Journal & perspective",
    heading: "Ideas for business constancy.",
    aside:
      "Notes on leadership, strategy, culture and the daily decisions that make a business durable — adapted for the Riaz Virani campaign.",
    articles: [
      { date: "18 Mar 2026", title: "Future Trends for UX/UI Designers: Staying Relevant to 2060", tag: "UX", href: "/blog" },
      { date: "27 Oct 2024", title: "Building Integrated AgilePM — User eXperiences", tag: "Agile", href: "/blog" },
      { date: "03 Mar 2025", title: "eBay creates an accessibility tool for designers and engineers", tag: "Accessibility", href: "/blog" },
      { date: "26 Jul 2024", title: "My experience working at Marshall Amplification PLC", tag: "Career", href: "/blog" },
      { date: "24 Mar 2025", title: "SAFe Scalable Agile Framework Updates", tag: "Agile", href: "/blog" },
    ],
  },
  trackRecord: {
    eyebrow: "The person serving",
    name: "Haven Carty",
    blurb:
      "Connecting the unconnected. A device maker and prototype engineer turned consultant, working where additive manufacturing, firmware and human-centred design overlap. Professional tone, genuine warmth, and a healthy tolerance for jargon jokes.",
    facts: [
      { label: "Director", value: "Cluster Technology Limited" },
      { label: "Discipline", value: "Industrial design & software" },
      { label: "Based", value: "Leicester, United Kingdom" },
      { label: "Sectors", value: "Energy → Music Technology" },
    ],
    timeline: [
      {
        role: "Device maker & prototype engineer",
        detail:
          "Additive manufacturing, prototype hardware and the websites that surround them. Turning sketches into things you can hold.",
      },
      {
        role: "Industrial designer",
        detail:
          "Human-centred design across physical products and the interfaces that drive them, with a focus on connected devices.",
      },
      {
        role: "Director, Cluster Technology Limited",
        detail:
          "Leading software consultancy for connected devices — serving teams shipping IoT products from energy to music technology.",
      },
    ],
  },
  contact: {
    eyebrow: "Start a conversation",
    heading: "Bring us the hardest part of your roadmap.",
    blurb:
      "For leaders shipping connected products — from energy to music technology. Tell us what you're building and we'll tell you, honestly, how we'd serve the team around it.",
    email: "hello@riazvirani.com",
    socials: ["LinkedIn", "Behance", "Medium", "GitHub"],
  },
  footer: {
    brand: "Riaz Virani",
    copyright: "Riaz Virani",
    series: "Operating Lessons",
    wordmark: "SERVE OTHERS",
  },
  blog: {
    enabled: true,
    navLabel: "Writing",
    navHref: "/blog",
    navBrand: "Riaz Virani",
    footerText: "ServantLeaders · Haven Carty · All rights reserved",
    index: {
      eyebrow: "Writing & research",
      heading: (
        <>
          Ideas for building with <span className="text-accent">purpose.</span>
        </>
      ),
      blurb:
        "Essays on UX, connected products, accessibility, agile delivery, leadership and creating lasting value.",
      metadataTitle: "Journal — Riaz Virani",
      metadataDescription:
        "A journal for business leaders building with constancy, clarity and purpose.",
    },
    posts: [
      { slug: "complete-wellness-workspace", date: "01 Jul 2025", title: "Creating Your Complete Wellness Workspace (Without the Corporate Nonsense)", tag: "Integrated Membership" },
      { slug: "first-50-members", date: "01 Jul 2025", title: "Why the First 50 Members Will Shape Allied House Forever", tag: "Founding Members" },
      { slug: "best-teams-offices", date: "01 Jul 2025", title: "Why the Best Teams Are Ditching Traditional Offices", tag: "Collective Membership" },
      { slug: "working-from-home", date: "01 Jul 2025", title: "Why Working From Home Isn't Working (And What Busy Parents Are Doing Instead)", tag: "Community Membership" },
      { slug: "coworking-twickenham", date: "01 Jul 2025", title: "The Ultimate Guide to Coworking in Twickenham: Beyond Shared Desks to Integrated Success", tag: "Community Membership" },
      { slug: "off-peak-advantage", date: "16 Jun 2025", title: "The Off-Peak Advantage: How Smart Professionals Are Beating the 9-5 Trap", tag: "Sanctuary Membership" },
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
    ],
  },
}

export const siteName = [site.nav.brand, site.nav.brandSuffix].filter(Boolean).join(" ")

export function getPost(slug: string) {
  return site.blog.posts.find((post) => post.slug === slug)
}
