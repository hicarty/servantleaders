const articles = [
  {
    date: "18 Mar 2026",
    title: "Future Trends for UX/UI Designers: Staying Relevant to 2060",
    tag: "UX",
    href: "#",
  },
  {
    date: "27 Oct 2024",
    title: "Building Integrated AgilePM — User eXperiences",
    tag: "Agile",
    href: "#",
  },
  {
    date: "03 Mar 2025",
    title: "eBay creates an accessibility tool for designers and engineers",
    tag: "Accessibility",
    href: "#",
  },
  {
    date: "26 Jul 2024",
    title: "My experience working at Marshall Amplification PLC",
    tag: "Career",
    href: "#",
  },
  {
    date: "24 Mar 2025",
    title: "SAFe Scalable Agile Framework Updates",
    tag: "Agile",
    href: "#",
  },
]

export function Writing() {
  return (
    <section id="writing" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Writing & research
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
              In-depth on UX for IoT.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Articles and blog posts on connected products, accessibility and
            agile delivery — published across WordPress and Medium.
          </p>
        </div>

        <ul className="mt-12 border-t border-border">
          {articles.map((article) => (
            <li key={article.title}>
              <a
                href={article.href}
                className="group flex flex-col gap-2 border-b border-border py-6 transition-colors hover:bg-secondary/60 md:flex-row md:items-center md:gap-8 md:px-2"
              >
                <span className="font-mono text-xs tracking-wider text-muted-foreground md:w-28 md:shrink-0">
                  {article.date}
                </span>
                <span className="flex-1 text-pretty font-serif text-xl tracking-tight text-foreground md:text-2xl">
                  {article.title}
                </span>
                <span className="flex items-center gap-4 md:shrink-0">
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {article.tag}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-foreground transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
