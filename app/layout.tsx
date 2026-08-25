import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin', 'latin-ext'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'Beboki: Katowice — Misja | Gra, w której całe miasto jest planszą',
  description:
    'Beboki: Katowice — Misja. Gra RPG, w której całe miasto jest planszą. Dowódź 40 Bebokami, odkrywaj prawdziwe miejsca Katowic i odnajdź Serce Śląska.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Beboki: Katowice — Misja',
    description: 'Gra, w której całe miasto jest planszą. Odnajdź Serce Śląska!',
    locale: 'pl_PL',
    type: 'website',
  },
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'dark',
  themeColor: '#111010',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`bg-background ${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
