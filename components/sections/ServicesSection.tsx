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
      className="py-24 px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}
          >
            O QUE FAZEMOS
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
          >
            Nossos Serviços
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {SERVICES.map((s) => (
            <MagicCard key={s.title} className="p-7">
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                style={{ background: 'var(--color-card)', color: 'var(--color-accent)' }}
              >
                {s.icon}
              </div>

              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-muted)' }}
              >
                {s.desc}
              </p>
              <a
                href="#contato"
                className="text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}
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
