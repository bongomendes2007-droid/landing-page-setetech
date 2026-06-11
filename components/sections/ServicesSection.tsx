'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagicCard from '@/components/ui/MagicCard'

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Desenvolvimento Web',
    desc: 'Sites institucionais, e-commerces, sistemas e aplicações web de alta performance com as tecnologias mais modernas do mercado.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Automação & IA',
    desc: 'Fluxos inteligentes, chatbots, processamento de dados e integração de modelos de IA para otimizar seus processos operacionais.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    title: 'Infraestrutura',
    desc: 'Cloud computing, servidores, segurança, monitoramento e arquitetura escalável para suportar o crescimento do seu negócio.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
    title: 'Marketing Digital',
    desc: 'SEO, tráfego pago, social media e estratégias de crescimento digital focadas em geração de leads e conversão.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Soluções para Órgãos Públicos',
    desc: 'Sistemas de gestão, portais de transparência, automação de serviços públicos e conformidade com LGPD para municípios e órgãos estaduais.',
  },
]

const gradientText: React.CSSProperties = {
  fontStyle: 'italic',
  background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (!cardsRef.current) return
      gsap.from(cardsRef.current.children, {
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="servicos"
      style={{
        background: 'var(--color-bg)',
        paddingTop: '96px',
        paddingBottom: '128px',
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

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
            O QUE FAZEMOS
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
            Nossos{' '}
            <em style={gradientText}>Serviços</em>
          </h2>
        </div>

        {/* Grid — 5 cards: 3 em linha, 2 centralizados */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8"
        >
          {SERVICES.map((s, i) => (
            <MagicCard
              key={s.title}
              className={
                i < 3
                  ? 'lg:col-span-2'
                  : i === 3
                  ? 'lg:col-start-2 lg:col-span-2'
                  : 'sm:col-span-2 lg:col-start-4 lg:col-span-2'
              }
              style={{ padding: '32px' }}
            >
              {/* Ícone */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--color-card)',
                  color: 'var(--color-accent)',
                  marginBottom: '20px',
                }}
              >
                {s.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: '8px',
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  lineHeight: 1.65,
                  color: 'var(--color-muted)',
                  marginBottom: '24px',
                }}
              >
                {s.desc}
              </p>

              <a
                href="#contato"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              >
                Saiba mais →
              </a>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
