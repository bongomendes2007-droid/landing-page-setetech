'use client'

import { useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import IntegrationsSection from '@/components/sections/IntegrationsSection'
import TeamSection from '@/components/sections/TeamSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* bg-[#F8F8F8] no pai do Hero: preenche os cantos arredondados */}
      <div
        className="bg-[#FFF7EA]"
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.6s ease',
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        <HeroSection />
        <ServicesSection />
        <IntegrationsSection />
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </div>
    </>
  )
}
