import type { SiteContent } from "./types"
import { SiteNav } from "./site-nav"
import { Hero } from "./hero"
import { Values } from "./values"
import { Services } from "./services"
import { Writing } from "./writing"
import { TrackRecord } from "./track-record"
import { ContactCta } from "./contact-cta"
import { SiteFooter } from "./site-footer"

export function SitePage({ content }: { content: SiteContent }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav nav={content.nav} />
      <Hero content={content} />
      <Values content={content} />
      <Services content={content} />
      <Writing content={content} />
      <TrackRecord content={content} />
      <ContactCta contact={content.contact} />
      <SiteFooter content={content} />
    </main>
  )
}
