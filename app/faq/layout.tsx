import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FAQ - Kenn EcoEstates',
  description: 'Find answers to frequently asked questions about Kenn EcoEstates - pricing, ownership, features, amenities, and more.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
