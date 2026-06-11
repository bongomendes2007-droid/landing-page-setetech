'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const STATS = [
  { target: 47, suffix: '+', label: 'Projetos entregues',    desc: 'Sistemas, sites e apps para clientes reais.' },
  { target: 12, suffix: '',  label: 'Municípios atendidos',  desc: 'Do interior à capital do Piauí.' },
  { target: 5,  suffix: '',  label: 'Anos de atuação',       desc: 'Construindo tecnologia que fica.' },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)
  const statsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0, x: -60, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: textRef.current, start: 'top 80%', once: true },
      })
      gsap.from(statsRef.current, {
        opacity: 0, x: 60, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 80%', once: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      style={{
        background: 'var(--color-surface)',
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
              color: 'var(--color-accent)',
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
              color: 'var(--color-text)',
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
              color: 'var(--color-muted)',
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
              color: 'var(--color-muted)',
            }}
          >
            Em 5 anos, transformamos negócios de 12 municípios piauienses — de PMEs locais a secretarias
            e autarquias — com sistemas modernos, rápidos e fáceis de usar.
          </p>
        </div>

        {/* Coluna stats */}
        <div ref={statsRef} className="flex flex-col gap-8">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex items-start gap-5 rounded-2xl"
              style={{
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                padding: '24px',
              }}
            >
              <div
                className="text-4xl font-extrabold shrink-0 w-20"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-accent)' }}
              >
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div>
                <p
                  className="font-bold text-sm"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    color: 'var(--color-text)',
                    marginBottom: '4px',
                  }}
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
