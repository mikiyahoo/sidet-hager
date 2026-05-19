import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import HeroSection from '@/components/sections/HeroSection'
import AboutHostSection from '@/components/sections/AboutHostSection'
import LatestEpisodesSection from '@/components/sections/LatestEpisodesSection'
import AboutShowSection from '@/components/sections/AboutShowSection'
import ShowTeamSection from '@/components/sections/ShowTeamSection'

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Header />

      <HeroSection />
      <AboutHostSection />
      <LatestEpisodesSection />
      <AboutShowSection />
      <ShowTeamSection />

      <Footer />
    </main>
  )
}