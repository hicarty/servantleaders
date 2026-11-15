import { ArrowDownRight, ArrowUpRight } from "lucide-react"

const writingsUrl = "https://fowlerchristina.wixsite.com/conversations"

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e8] text-[#292e27]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        <a href="#home" className="font-serif text-xl tracking-tight" aria-label="Fowler Christina home">
          Fowler Christina<span className="text-[#a45b43]">.</span>
        </a>
        <a href={writingsUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm text-[#454a40] transition-colors hover:text-[#a45b43]">
          The writings <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </header>

      <section id="home" className="relative mx-auto grid min-h-[76vh] max-w-7xl items-center px-6 pb-20 pt-12 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[#8b6049]">
            <span className="h-px w-9 bg-[#a45b43]" /> A home for words &amp; reflection
          </p>
          <h1 className="font-serif text-[clamp(4rem,10vw,8.5rem)] leading-[0.88] tracking-[-0.065em] text-[#292e27]">
            Fowler<br /><span className="pl-[0.7em] italic text-[#a45b43]">Christina</span>
          </h1>
          <p className="mt-9 max-w-lg text-lg leading-8 text-[#626459] sm:text-xl">
            A place to pause, listen, and find meaning in the conversations that shape a life of faith.
          </p>
          <a href={writingsUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#313b32] px-7 py-4 text-sm font-medium text-[#f6f1e8] transition-colors hover:bg-[#a45b43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a45b43]">
            Explore the writings <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#77786d]">
            <ArrowDownRight className="h-4 w-4 text-[#a45b43]" aria-hidden="true" /> A collection of conversations
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex aspect-[4/5] w-full max-w-[390px] items-center justify-center lg:mt-0 lg:justify-self-end">
          <div aria-hidden="true" className="absolute inset-5 rotate-[7deg] border border-[#c9ad91]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[#e8dfd0]" />
          <div aria-hidden="true" className="absolute inset-5 border border-[#d3c2ab]" />
          <div className="relative mx-10 text-center">
            <span className="mx-auto mb-8 block h-12 w-px bg-[#a45b43]" aria-hidden="true" />
            <p className="font-serif text-4xl leading-tight text-[#394237] sm:text-5xl">“Be still,<br />and know.”</p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[#8b6049]">Psalm 46:10</p>
            <span className="mx-auto mt-8 block h-12 w-px bg-[#a45b43]" aria-hidden="true" />
          </div>
          <span className="absolute bottom-0 right-0 translate-y-1/2 bg-[#f6f1e8] px-4 py-2 font-serif text-sm italic text-[#77786d]">Words for the journey</span>
        </div>
      </section>

      <section id="writings" className="border-t border-[#d9d1c4] bg-[#eee8dd]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-10 md:grid-cols-[1fr_auto] md:items-center lg:px-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#8b6049]">Read on</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Conversations With The Fathers</h2>
            <p className="mt-3 max-w-xl leading-7 text-[#626459]">Visit the writings and spend a little time with the words, questions, and wisdom gathered there.</p>
          </div>
          <a href={writingsUrl} target="_blank" rel="noreferrer" className="group inline-flex w-fit items-center gap-3 border-b border-[#a45b43] pb-2 text-sm font-medium text-[#394237] transition-colors hover:text-[#a45b43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a45b43]">
            Visit Conversations With The Fathers <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-7 text-xs text-[#77786d] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <span>Fowler Christina</span>
        <span>Words for reflection, faith, and the journey.</span>
      </footer>
    </main>
  )
}
