import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works - Kenn EcoEstates Step-by-Step Guide',
  description: 'Discover the complete step-by-step process of joining Kenn EcoEstates wellness community. From application to building your dream home.',
  keywords: 'kenn ecoestates process, wellness community guide, land ownership bangalore, health conscious living steps',
}

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
