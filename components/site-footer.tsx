import { site } from "@/content/site"

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <div className="flex flex-col justify-between gap-6 pb-12 md:flex-row md:items-end">
          <div className="max-w-sm">
            <p className="font-serif text-xl tracking-tight text-foreground">
              {site.footer.brand}
            </p>
            {site.footer.blurb && (
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {site.footer.blurb}
              </p>
            )}
          </div>
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            © {new Date().getFullYear()} {site.footer.copyright}
            {site.footer.location && (
              <>
                <br />
                {site.footer.location}
              </>
            )}
          </p>
        </div>
      </div>

      {/* oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden border-t border-border"
      >
        <p className="-mb-[1.5vw] whitespace-nowrap text-center text-[18vw] font-semibold leading-none tracking-tighter text-foreground/[0.06]">
          {site.footer.wordmark}
        </p>
      </div>
    </footer>
  )
}
