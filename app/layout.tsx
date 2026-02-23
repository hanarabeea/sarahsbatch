import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Poppins, Allura } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const _poppins = Poppins({ weight: ["400", "600", "700", "800"], subsets: ["latin"], variable: "--font-poppins" });
const _allura = Allura({ weight: "400", subsets: ["latin"], variable: "--font-allura" });

export const metadata: Metadata = {
  title: "Sarah's Party - Final Night of Freedom 🪩",
  description: "Join Sarah for the wildest night before the wedding. Pink Disco Energy, Main Character Vibes, and Bride Squad Only.",
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#FF1493',
  openGraph: {
    title: "Sarah's Party - Final Night of Freedom 🪩",
    description: "Join Sarah for the wildest night before the wedding. Pink Disco Energy, Main Character Vibes, and Bride Squad Only.",
    url: 'https://sarahsbachelorette.netlify.app',
    siteName: "Sarah's Bachelorette",
    images: [
      {
        url: 'https://sarahsbachelorette.netlify.app/disco-ball.jpg',
        width: 1200,
        height: 630,
        alt: "Sarah's Party",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sarah's Party - Final Night of Freedom 🪩",
    description: "Join Sarah for the wildest night before the wedding. Pink Disco Energy, Main Character Vibes, and Bride Squad Only.",
    images: ['https://sarahsbachelorette.netlify.app/disco-ball.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfair.variable} ${_poppins.variable} ${_allura.variable}`}>
      <body className="font-poppins antialiased">
        <div className="fixed-bg" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
