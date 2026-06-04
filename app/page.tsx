import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ServicesHighlight from '@/components/sections/ServicesHighlight'
import Testimonials from '@/components/sections/Testimonials'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'SETE TECH — Tecnologia que entrega resultados que duram',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesHighlight />
      <Testimonials />
      <CallToAction />
    </>
  )
}
