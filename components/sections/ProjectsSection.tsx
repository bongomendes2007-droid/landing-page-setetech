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
      className="group relative flex flex-col h-full overflow-hidden cursor-pointer
        transition-transform duration-300 hover:-translate-y-2"
      style={{
        backgroundColor: founder.bgColor,
        borderRadius: '28px',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Foto com margem e cantos próprios — altura FIXA em todos os cards */}
      <div className="relative m-3 mb-0 h-[300px] flex-shrink-0 overflow-hidden rounded-[16px]">

        {/* Camada de fundo colorido para o efeito backlight */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 45%, ${founder.accentColor}55 0%, ${founder.bgColor} 72%)`,
            zIndex: 0,
          }}
        />

        <Image
          src={founder.image}
          alt={founder.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          style={{ zIndex: 1, filter: 'brightness(0.82) contrast(1.05)' }}
          unoptimized
        />

        {/* Glow colorido sobre a foto — simula o backlight dramático */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 38%, ${founder.accentColor}28 0%, transparent 62%)`,
            mixBlendMode: 'screen',
            zIndex: 2,
          }}
        />

        {/* Header SOBRE a foto */}
        <div className="absolute top-0 inset-x-0 flex items-center justify-between p-3.5" style={{ zIndex: 10 }}>
          <img
            src="https://res.cloudinary.com/dnth1inmv/image/upload/v1781121651/logo_Sete_Tech_color_1_irsexx.png"
            alt="SETE TECH"
            className="h-5 w-auto object-contain drop-shadow-lg"
          />
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-base backdrop-blur-md"
            style={{
              backgroundColor: founder.accentColor + '33',
              border: `1px solid ${founder.accentColor}66`,
              zIndex: 10,
            }}
          >
            {founder.icon}
          </div>
        </div>

        {/* Gradiente base fundindo foto com fundo do card */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${founder.bgColor} 5%, transparent 100%)`,
            zIndex: 3,
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-grow gap-2.5 px-5 pt-3 pb-6">

        {/* Bullet + Nome */}
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: founder.accentColor }}
          />
          <h3
            className="font-bold text-white tracking-tight"
            style={{ fontSize: '19px', fontFamily: 'var(--font-dm-sans)' }}
          >
            {founder.name}
          </h3>
        </div>

        {/* Badges como pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold uppercase text-white/60"
            style={{
              fontSize: '10px',
              letterSpacing: '0.08em',
              backgroundColor: 'rgba(255,255,255,0.08)',
            }}
          >
            <span style={{ color: founder.accentColor }}>✓</span>
            {founder.tag1}
          </span>
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold uppercase text-white/60"
            style={{
              fontSize: '10px',
              letterSpacing: '0.08em',
              backgroundColor: 'rgba(255,255,255,0.08)',
            }}
          >
            <span style={{ color: founder.accentColor }}>✓</span>
            {founder.tag2}
          </span>
        </div>

        {/* Descrição — flex-grow iguala a altura dos cards */}
        <p
          className="mt-1 flex-grow text-white/45"
          style={{ fontSize: '13px', lineHeight: 1.55, fontFamily: 'var(--font-dm-sans)' }}
        >
          {founder.description}
        </p>
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
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
