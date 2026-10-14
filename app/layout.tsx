import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Servant Leaders UK — Serve Others as Greater than Oneself',
  description:
    'Software consultancy for connected devices. Human-centred design, IoT user experience, web development and firmware — led by Haven Carty, Director of Cluster Technology Limited.',
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
      className={`${instrumentSans.variable} ${jetBrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
