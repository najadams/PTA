import type { Metadata } from 'next'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import Marquee from '@/components/ui/Marquee'
import Hero from '@/components/home/Hero'
import IntroGrid from '@/components/home/IntroGrid'
import ServiceTiles from '@/components/home/ServiceTiles'
import WhyPTA from '@/components/home/WhyPTA'
import SectorsGrid from '@/components/home/SectorsGrid'
import StatsBand from '@/components/home/StatsBand'
import HomeCTA from '@/components/home/HomeCTA'

export const metadata: Metadata = {
  title: 'TTA Registration Ghana | Protocol & Transfer Advisory',
  description: 'PTA handles TTA registration, GIPC compliance, and the full regulatory footprint for foreign investors in Ghana. Premium Advisory. Excellent Execution.',
  alternates: { canonical: 'https://ptadvisory.co' },
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <IntroGrid />
        <ServiceTiles />
        <WhyPTA />
        <SectorsGrid />
        <StatsBand />
        <HomeCTA />
      </main>
      <Footer />
    </>
  )
}
