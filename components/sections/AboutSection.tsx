'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const STATS = [
  { target: 47, suffix: '+', label: 'Projetos entregues', desc: 'Sistemas, sites e apps para clientes reais.' },
  { target: 12, suffix: '',  label: 'Municípios atendidos', desc: 'Do interior à capital do Piauí.' },
  { target: 5,  suffix: '',  label: 'Anos de atuação', desc: 'Construindo tecnologia que fica.' },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)
  const statsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: textRef.current, start: 'top 80%', once: true },
      })
      gsap.from(statsRef.current, {
        opacity: 0,
        x: 60,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 80%', once: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-24 px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <div ref={textRef}>
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}
          >
            NOSSA HISTÓRIA
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
          >
            Tecnologia feita <br />
            <span className="gradient-text">no Piauí, para o Brasil.</span>
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-muted)' }}
          >
            Nascemos em Teresina, PI, com a missão de democratizar acesso a soluções digitais de alto
            nível para empresas regionais e o setor público. Acreditamos que a distância dos grandes
            centros não deve ser obstáculo para acessar tecnologia de ponta.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-muted)' }}
          >
            Em 5 anos, transformamos negócios de 12 municípios piauienses — de PMEs locais a secretarias
            e autarquias — com sistemas modernos, rápidos e fáceis de usar.
          </p>
        </div>

        {/* Stats column */}
        <div
          ref={statsRef}
          className="flex flex-col gap-8"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex items-start gap-5 p-6 rounded-2xl"
              style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)' }}
            >
              <div
                className="text-4xl font-extrabold shrink-0 w-20"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-accent)' }}
              >
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div>
                <p
                  className="font-bold text-sm mb-1"
                  style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
                >
                  {s.label}
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-muted)' }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
