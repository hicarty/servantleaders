import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import { site } from '@/content/site'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {/* navy edge bar */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-0 z-[60] w-1.5 bg-primary md:w-2" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
