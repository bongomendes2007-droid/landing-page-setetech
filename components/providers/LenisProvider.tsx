'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis

    // Integração Lenis ↔ GSAP ScrollTrigger:
    // sem isto, o ScrollTrigger não recebe a posição de scroll do Lenis e os
    // reveals podem não disparar (deixando gsap.from() preso no estado inicial).
    lenis.on('scroll', ScrollTrigger.update)

    function loop(time: number) {
      // gsap.ticker entrega o tempo em segundos; Lenis espera milissegundos
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(loop)
    gsap.ticker.lagSmoothing(0)

    // Recalcula posições depois que fontes/imagens/layout assentam,
    // evitando starts medidos cedo demais.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const refreshTimeout = window.setTimeout(refresh, 600)

    return () => {
      gsap.ticker.remove(loop)
      lenis.off('scroll', ScrollTrigger.update)
      window.removeEventListener('load', refresh)
      window.clearTimeout(refreshTimeout)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
