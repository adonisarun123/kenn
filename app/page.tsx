import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Vision from '@/components/Vision'
import Advantages from '@/components/Advantages'
import Unique from '@/components/Community'
import WhoShouldJoin from '@/components/Land'
import WhatsIncluded from '@/components/Guidelines'
import Join from '@/components/Join'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Vision />
      <Advantages />
      <Unique />
      <WhoShouldJoin />
      <WhatsIncluded />
      <Join />
      <Footer />
    </main>
  )
}