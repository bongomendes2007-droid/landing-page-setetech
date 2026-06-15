'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { OrbitingTech } from '@/components/ui/orbiting-tech'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return

      gsap.from(textRef.current, {
        opacity: 0, x: -60, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: textRef.current, start: 'top 80%', once: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="rounded-t-[40px] overflow-hidden"
      style={{
        background: '#FFF7EA',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <div
        className="grid md:grid-cols-2 gap-16 items-center"
        style={{ maxWidth: '1152px', margin: '0 auto' }}
      >
        {/* Coluna texto */}
        <div ref={textRef}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#6A00FF',
              fontFamily: 'var(--font-dm-sans)',
              marginBottom: '12px',
            }}
          >
            NOSSA HISTÓRIA
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 400,
              color: '#0D0D0D',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Tecnologia feita <br />
            <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              no Piauí, para o Brasil.
            </em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#444444',
              marginBottom: '16px',
            }}
          >
            Nascemos em Teresina, PI, com a missão de democratizar acesso a soluções digitais de alto
            nível para empresas regionais e o setor público. Acreditamos que a distância dos grandes
            centros não deve ser obstáculo para acessar tecnologia de ponta.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#444444',
            }}
          >
            Em 5 anos, transformamos negócios de 12 municípios piauienses — de PMEs locais a secretarias
            e autarquias — com sistemas modernos, rápidos e fáceis de usar.
          </p>
        </div>

        {/* Coluna órbitas de tecnologia */}
        <div className="flex-1 flex items-center justify-center [&_img]:invert">
          <OrbitingTech />
        </div>
      </div>
    </section>
  )
}
