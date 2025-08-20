import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Kenn EcoEstates',
  description: 'Learn about how Kenn EcoEstates protects your privacy and handles your personal information in accordance with applicable data protection laws.',
  keywords: 'privacy policy, data protection, personal information, Kenn EcoEstates, land ownership, real estate privacy',
  robots: 'index, follow'
}

export default function PrivacyPolicyLayout({
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
