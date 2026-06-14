'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const founders = [
  {
    name: "Fundador 1",
    role: "CEO & Dev Web",
    tag1: "DESENVOLVIMENTO WEB",
    tag2: "FRONTEND",
    description: "Especialista em sistemas web de alta performance para empresas e órgãos públicos do Piauí.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bgColor: "#1a0a2e",
    accentColor: "#6A00FF",
    icon: "💻",
  },
  {
    name: "Fundador 2",
    role: "CTO & IA",
    tag1: "AUTOMAÇÃO & IA",
    tag2: "INFRAESTRUTURA",
    description: "Lidera a arquitetura técnica e integração de modelos de IA nos produtos da SETE TECH.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bgColor: "#0a1a0e",
    accentColor: "#00C853",
    icon: "🤖",
  },
  {
    name: "Fundador 3",
    role: "CMO & Design",
    tag1: "MARKETING DIGITAL",
    tag2: "DESIGN & UX",
    description: "Responsável pela identidade visual e estratégias de crescimento digital da SETE TECH.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bgColor: "#1a1200",
    accentColor: "#FFB300",
    icon: "🎨",
  },
  {
    name: "Fundador 4",
    role: "COO & Setor Público",
    tag1: "GESTÃO & NEGÓCIOS",
    tag2: "ÓRGÃOS PÚBLICOS",
    description: "Especialista em soluções para prefeituras, autarquias e secretarias do Piauí.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bgColor: "#0a0f1a",
    accentColor: "#2979FF",
    icon: "🏛️",
  },
]

type Founder = (typeof founders)[0]

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div
      className="group relative flex flex-col rounded-[24px] overflow-hidden cursor-pointer
        transition-transform duration-300 hover:-translate-y-2"
      style={{ backgroundColor: founder.bgColor }}
    >
      {/* Header: logo esquerda + ícone direita */}
      <div className="flex items-center justify-between px-5 pt-5">
        <img
          src="https://res.cloudinary.com/dnth1inmv/image/upload/v1781121651/logo_Sete_Tech_color_1_irsexx.png"
          alt="SETE TECH"
          className="h-5 w-auto object-contain opacity-90"
        />
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-xl"
          style={{
            backgroundColor: founder.accentColor + '22',
            border: `1px solid ${founder.accentColor}44`,
          }}
        >
          {founder.icon}
        </div>
      </div>

      {/* Foto — grande, dramática */}
      <div className="relative mx-4 mt-4 overflow-hidden rounded-[16px]" style={{ height: '280px' }}>
        <Image
          src={founder.image}
          alt={founder.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          unoptimized
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ background: `linear-gradient(to top, ${founder.bgColor}, transparent)` }}
        />
      </div>

      {/* Info embaixo */}
      <div className="flex flex-col gap-3 px-5 pt-4 pb-6">

        {/* Bullet + Nome */}
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: founder.accentColor }}
          />
          <h3 className="text-xl font-bold text-white">{founder.name}</h3>
        </div>

        {/* Badges estilo Adapta */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="text-white/40 text-xs">✓</span>
            <span className="text-xs font-medium text-white/60 uppercase tracking-wide">
              {founder.tag1}
            </span>
          </div>
          <div className="h-3 w-px bg-white/20" />
          <div className="flex items-center gap-1.5">
            <span className="text-white/40 text-xs">✓</span>
            <span className="text-xs font-medium text-white/60 uppercase tracking-wide">
              {founder.tag2}
            </span>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-sm text-white/50 leading-relaxed">{founder.description}</p>
      </div>
    </div>
  )
}

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
      className="bg-[#F8F8F8] rounded-b-[40px] overflow-hidden py-24"
      style={{
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#6A00FF] mb-3"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            NOSSO PORTFÓLIO
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              color: '#0D0D0D',
              lineHeight: 1.1,
            }}
          >
            Cases &{' '}
            <em
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Projetos
            </em>
          </h2>
        </div>

        {/* Grid dos fundadores */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              color: 'rgba(13,13,13,0.5)',
              marginBottom: '20px',
            }}
          >
            Quer resultados como esses?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full font-semibold text-sm hover:opacity-90 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
            style={{
              background: 'var(--gradient-accent)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-dm-sans)',
              padding: '14px 32px',
              transition: 'opacity 0.2s, transform 0.16s cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            Vamos conversar →
          </a>
        </div>
      </div>
    </section>
  )
}
