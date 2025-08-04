import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply to Join - Kenn EcoEstates Application Form',
  description: 'Join India\'s First Land-Based Health & Wellness Collective. Complete application form for Kenn EcoEstates - 30 Acres, 100 Wellness-Driven Families, 1 Purpose.',
  keywords: 'kenn ecoestates application, wellness community application, land ownership bangalore, health conscious living',
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}