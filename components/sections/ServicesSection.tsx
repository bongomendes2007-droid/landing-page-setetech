'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagicCard from '@/components/ui/MagicCard'

const SERVICES = [
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781278734/2026-06-12T15-37-06-312Z_Enhance_and_upscale_this_image_to_4K_Full_HD_resol_m3tw6v.png',
    title: 'Desenvolvimento Web',
    desc: 'Sites institucionais, e-commerces, sistemas e aplicações web de alta performance com as tecnologias mais modernas do mercado.',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781279171/92945cc36b11481785be0b1bb1cbf2b8_vjizti.jpg',
    title: 'Automação & IA',
    desc: 'Fluxos inteligentes, chatbots, processamento de dados e integração de modelos de IA para otimizar seus processos operacionais.',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781279099/9bd5346590dceb45f48ae51e04133733_joo3pb.jpg',
    title: 'Marketing Digital',
    desc: 'SEO, tráfego pago, social media e estratégias de crescimento digital focadas em geração de leads e conversão.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    title: 'Infraestrutura',
    desc: 'Cloud computing, servidores, segurança, monitoramento e arquitetura escalável para suportar o crescimento do seu negócio.',
  },
  {
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80',
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
              className={`group ${
                i < 3
                  ? 'lg:col-span-2'
                  : i === 3
                  ? 'lg:col-start-2 lg:col-span-2'
                  : 'sm:col-span-2 lg:col-start-4 lg:col-span-2'
              }`}
            >
              {/* Foto no topo */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  {...(i < 3 ? { priority: true } : {})}
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
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
                  className="focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2 rounded"
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
              </div>
            </MagicCard>
          ))}
        </div>

        {/* CTA de seção */}
        <div className="mt-16 text-center">
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'var(--color-muted)', marginBottom: '20px' }}>
            Não encontrou o que precisa?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full font-semibold text-sm hover:opacity-90 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
            style={{
              background: 'rgba(161,0,255,0.1)',
              color: 'var(--color-accent)',
              border: '1px solid rgba(161,0,255,0.3)',
              fontFamily: 'var(--font-dm-sans)',
              padding: '14px 32px',
              transition: 'opacity 0.2s, transform 0.16s cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            Fale com a gente →
          </a>
        </div>
      </div>
    </section>
  )
}
