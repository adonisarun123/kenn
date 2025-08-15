import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Kenn EcoEstates: Insights on Wellness Living & Community',
  description: 'Explore insights about wellness community living, sustainable lifestyle, and the future of premium land ownership at Kenn EcoEstates.',
  keywords: 'wellness community blog, sustainable living insights, premium land ownership, health conscious living, bangalore eco estates',
  openGraph: {
    title: 'Blog - Kenn EcoEstates: Insights on Wellness Living & Community',
    description: 'Explore insights about wellness community living, sustainable lifestyle, and the future of premium land ownership.',
    url: 'https://kennecoestates.com/blog',
    siteName: 'Kenn EcoEstates Blog',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
