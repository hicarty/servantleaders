import type { SiteContent } from "@servantleaders/ui"
import { jobs } from "./jobs"

const JOBS_DESCRIPTION =
  "Technical roles at Cluster Technology. We assemble, test and quality-assure engineering samples for teams researching and designing connected devices across the UK & Ireland."

export const site: SiteContent = {
  seo: {
    title: "Haven Carty — Serve Others as Greater than Oneself",
    description:
      "Software consultancy for connected devices. Human-centred design, IoT user experience, web development and firmware — led by Haven Carty, Director of Cluster Technology Limited.",
  },
  theme: {
    displayHeadingClass: "font-serif",
  },
  nav: {
    brand: "Haven Carty",
    links: [
      { label: "Approach", href: "#approach" },
      { label: "Services", href: "#services" },
      { label: "Careers", href: "/blog" },
      { label: "Track Record", href: "#track-record" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Start a project", href: "#contact" },
  },
  hero: {
    eyebrow: "Software consultancy · Connected devices · IoT UX",
    title: (
      <>
        Serve others as greater
        <br className="hidden sm:block" /> than{" "}
        <span className="italic text-accent">oneself.</span>
      </>
    ),
    blurb:
      "Thought leadership on connected devices and human-centred design. We help organisations ship hardware and software people actually want to use — from firmware to the final pixel.",
    primaryCta: { label: "Serve your roadmap", href: "#contact" },
    secondaryCta: { label: "How we work", href: "#approach" },
    note: "// You're only as good as the team you serve.",
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
    eyebrow: "Jobs & careers",
    heading: "Open roles at Cluster Technology.",
    aside: JOBS_DESCRIPTION,
    articles: jobs.map((job) => ({
      date: job.location,
      title: job.title,
      tag: job.division,
      href: `/blog/${job.slug}`,
    })),
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
    email: "hello@servantleaders.uk",
    socials: ["LinkedIn", "Behance", "Medium", "GitHub"],
  },
  footer: {
    brand: "Haven Carty",
    blurb:
      "Serve others as greater than oneself. Software consultancy for connected devices, by Cluster Technology Limited.",
    copyright: "Cluster Technology Limited",
    location: "Leicester, United Kingdom",
    wordmark: "SERVE OTHERS",
  },
  blog: {
    enabled: true,
    navLabel: "Careers",
    navHref: "/blog",
    navBrand: "Haven Carty",
    footerText: "ServantLeaders · Haven Carty · All rights reserved",
    index: {
      eyebrow: "Jobs & careers",
      heading: (
        <>
          Build the samples that <em className="text-accent">connect the world.</em>
        </>
      ),
      blurb: JOBS_DESCRIPTION,
      metadataTitle: "Jobs & careers — Haven Carty",
      metadataDescription:
        "Technical roles at Cluster Technology: assembling, testing and quality-assuring engineering samples for connected devices.",
    },
    posts: jobs.map((job) => ({
      slug: job.slug,
      date: job.location,
      title: job.title,
      tag: job.division,
    })),
  },
}

export const siteName = [site.nav.brand, site.nav.brandSuffix].filter(Boolean).join(" ")

export function getPost(slug: string) {
  return site.blog.posts.find((post) => post.slug === slug)
}
