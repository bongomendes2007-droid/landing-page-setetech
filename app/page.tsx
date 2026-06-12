'use client'

import { useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.6s ease',
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        <HeroSection />
        {/* bg-[#F8F8F8] preenche os cantos arredondados do Hero */}
        <div className="bg-[#F8F8F8]">
          <ServicesSection />
          <AboutSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </div>
    </>
  )
}
