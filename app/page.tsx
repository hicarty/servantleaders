import { Hero } from "@/components/hero"
import { Values } from "@/components/values"
import { Services } from "@/components/services"
import { Writing } from "@/components/writing"
import { TrackRecord } from "@/components/track-record"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"
import { Navbar } from "@servantleaders/ui/navbar"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Values />
      <Services />
      <Writing />
      <TrackRecord />
      <ContactCta />
      <SiteFooter />
    </main>
  )
}
