'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const PROJECTS = [
  {
    tag: 'GovTech',
    title: 'Portal de Transparência Municipal',
    metric: '12 municípios conectados',
    bg: 'linear-gradient(135deg, #0D0D0D, #1A0033)',
    large: true,
  },
  {
    tag: 'E-Commerce',
    title: 'Plataforma AGROSETE',
    metric: '+120% vendas em 6 meses',
    bg: 'linear-gradient(135deg, #1A1A1A, #3D0099)',
    large: false,
  },
  {
    tag: 'Automação',
    title: 'Sistema de Gestão Esportiva',
    metric: '8.000 atletas cadastrados',
    bg: 'linear-gradient(135deg, #0D0D0D, #1A1A1A)',
    large: false,
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (!gridRef.current) return
      gsap.from(gridRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="cases"
      style={{
        background: 'var(--color-bg)',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
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
            NOSSO PORTFÓLIO
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              color: 'var(--color-text)',
              lineHeight: 1.1,
            }}
          >
            Cases &{' '}
            <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Projetos
            </em>
          </h2>
        </div>

        {/* Grid assimétrico */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${p.large ? 'md:col-span-2 h-80 md:h-96' : 'h-56 md:h-96'}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: p.bg }}
              />
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.1) 60%, transparent 100%)' }}
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ padding: '24px' }}
              >
                <span
                  className="inline-block rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(161,0,255,0.15)',
                    border: '1px solid rgba(161,0,255,0.3)',
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-dm-sans)',
                    padding: '4px 12px',
                    marginBottom: '10px',
                  }}
                >
                  {p.tag}
                </span>
                <h3
                  className="font-bold text-lg leading-snug"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    color: 'var(--color-text)',
                    marginBottom: '4px',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-accent2)', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {p.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
