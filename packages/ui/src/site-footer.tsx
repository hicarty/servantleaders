import type { SiteContent } from "./types"

export function SiteFooter({ content }: { content: SiteContent }) {
  const { footer } = content

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <div className="flex flex-col justify-between gap-6 pb-12 md:flex-row md:items-end">
          <div className="max-w-sm">
            <p className="font-serif text-xl tracking-tight text-foreground">
              {footer.brand}
            </p>
            {footer.blurb && (
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {footer.blurb}
              </p>
            )}
          </div>
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            © {new Date().getFullYear()} {footer.copyright}
            {footer.location && (
              <>
                <br />
                {footer.location}
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
          {footer.wordmark}
        </p>
      </div>
    </footer>
  )
}
