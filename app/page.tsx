import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import RejectionReasons from '@/components/home/RejectionReasons'
import Services from '@/components/home/Services'
import WhyPTA from '@/components/home/WhyPTA'
import Process from '@/components/home/Process'
import Stats from '@/components/home/Stats'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RejectionReasons />
        <Services />
        <WhyPTA />
        <Process />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
