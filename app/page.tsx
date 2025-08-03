import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Vision from '@/components/Vision'
import Land from '@/components/Land'
import Community from '@/components/Community'
import Guidelines from '@/components/Guidelines'
import Join from '@/components/Join'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Vision />
      <Land />
      <Community />
      <Guidelines />
      <Join />
      <Footer />
    </main>
  )
}