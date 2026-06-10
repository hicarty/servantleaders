const facts = [
  { label: "Director", value: "Cluster Technology Limited" },
  { label: "Discipline", value: "Industrial design & software" },
  { label: "Based", value: "Leicester, United Kingdom" },
  { label: "Sectors", value: "Energy → Music Technology" },
]

const timeline = [
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
]

export function TrackRecord() {
  return (
    <section id="track-record" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              The person serving
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
              Haven Carty
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Connecting the unconnected. A device maker and prototype engineer
              turned consultant, working where additive manufacturing, firmware
              and human-centred design overlap. Professional tone, genuine
              warmth, and a healthy tolerance for jargon jokes.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-pretty leading-snug text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:pt-2">
            <ol className="relative border-l border-border">
              {timeline.map((item) => (
                <li key={item.role} className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <h3 className="font-serif text-xl tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
