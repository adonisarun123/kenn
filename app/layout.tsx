import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kenn EcoEstates - Where Clean Living Meets Collective Consciousness',
  description: 'A private, purpose-driven community of 100 wellness seekers. For those who seek nature, balance, and belonging.',
  keywords: 'eco estates, wellness community, sustainable living, yoga retreat, mindful living, bangalore',
  authors: [{ name: 'Kenn EcoEstates' }],
  openGraph: {
    title: 'Kenn EcoEstates - Where Clean Living Meets Collective Consciousness',
    description: 'A private, purpose-driven community of 100 wellness seekers.',
    url: 'https://kennecoestates.com',
    siteName: 'Kenn EcoEstates',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}