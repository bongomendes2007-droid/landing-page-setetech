'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Terminal from '@/registry/eldoraui/terminal'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return
      const isMobile = window.innerWidth < 768
      gsap.from(textRef.current, {
        opacity: 0, x: isMobile ? 0 : -40, duration: 0.9, ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: textRef.current, start: 'top 80%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="rounded-t-[40px] rounded-b-[40px] overflow-hidden"
      style={{ background: '#FFF7EA' }}
    >
      {/* Todo o padding aqui dentro — resolve o texto colado na borda */}
      <div className="max-w-7xl mx-auto pt-32 pb-24 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Coluna texto */}
          <div ref={textRef} className="flex-[1.2] max-w-[520px] flex flex-col justify-center">
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#6A00FF',
              fontFamily: 'var(--font-dm-sans)',
              marginBottom: '12px',
            }}>
              NOSSA HISTÓRIA
            </span>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 400,
              color: '#0D0D0D',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
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

            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#444444',
              marginBottom: '16px',
            }}>
              Nascemos em Teresina, PI, com a missão de democratizar acesso a soluções digitais de alto
              nível para empresas regionais e o setor público. Acreditamos que a distância dos grandes
              centros não deve ser obstáculo para acessar tecnologia de ponta.
            </p>

            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#444444',
            }}>
              Em 5 anos, transformamos negócios de 12 municípios piauienses — de PMEs locais a secretarias
              e autarquias — com sistemas modernos, rápidos e fáceis de usar.
            </p>
          </div>

          {/* Coluna terminal — MANTIDO EXATAMENTE COMO ESTAVA */}
          <div className="flex-1 max-w-[480px] flex items-center justify-center w-full">
            <div className="w-full max-w-[460px]">
              <Terminal
                command="npx setetech --init"
                steps={[
                  { text: "~ Configurando projeto", bold: true },
                  { text: " | ✓ Ambiente pronto" },
                  { text: "~ Conectando IA", bold: true },
                  { text: " | ✓ Automação ativada" },
                  { text: "~ Deploy em produção", bold: true },
                  { text: " | ✓ Build em 2.3s" },
                  { text: " | ✓ 847 usuários ativos" },
                  { text: "~ Status da SETE TECH", bold: true },
                  { text: " | ✓ 47 projetos entregues" },
                  { text: " | ✓ 12 municípios atendidos" },
                  { text: " | ✓ Piauí mais digital 🚀" },
                ]}
                pulseInterval={100}
                showLocalhost={true}
                hostBarTitle="setetech.com.br"
                hostMessage="Tecnologia que move negócios"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}