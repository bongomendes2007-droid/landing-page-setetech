'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const NOTCH_BG = '#EEEEEE'

const founders = [
  {
    name: "Fundador 1",
    role: "CEO & Dev Web",
    tag1: "DESENVOLVIMENTO WEB",
    tag2: "FRONTEND",
    description: "Especialista em sistemas web de alta performance para empresas e órgãos públicos do Piauí.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bgColor: "#1E0A35",
    accentColor: "#6A00FF",
    icon: "💻",
  },
  {
    name: "Fundador 2",
    role: "Design & UX",
    tag1: "UI/UX DESIGN",
    tag2: "BRANDING",
    description: "Transformando ideias complexas em interfaces intuitivas e experiências memoráveis.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
    bgColor: "#0A1E1A",
    accentColor: "#00FF9D",
    icon: "🎨",
  },
  {
    name: "Fundador 3",
    role: "Cloud & DevOps",
    tag1: "INFRAESTRUTURA",
    tag2: "CLOUD",
    description: "Arquitetura de servidores robustos e escaláveis para garantir disponibilidade total.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bgColor: "#1A1A1A",
    accentColor: "#FFD700",
    icon: "☁️",
  },
  {
    name: "Fundador 4",
    role: "Data & AI",
    tag1: "INTELIGÊNCIA",
    tag2: "DADOS",
    description: "Implementação de soluções baseadas em dados para otimização de processos.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bgColor: "#151520",
    accentColor: "#00D1FF",
    icon: "📊",
  }
]

function FounderCard({ founder }: { founder: any }) {
  return (
    <div className="group relative flex flex-col h-full cursor-pointer transition-transform duration-300 hover:-translate-y-2"
      style={{
        backgroundColor: founder.bgColor,
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
      }}
    >
      <div className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: '52px',
          height: '52px',
          backgroundColor: NOTCH_BG,
          borderBottomLeftRadius: '52px',
          borderTopRightRadius: '24px',
          zIndex: 20,
        }}
      />
      <div className="absolute flex items-center justify-center rounded-full select-none"
        style={{
          top: '4px',
          right: '4px',
          width: '44px',
          height: '44px',
          backgroundColor: founder.accentColor + 'E6',
          border: '2px solid rgba(255,255,255,0.20)',
          fontSize: '22px',
          zIndex: 30,
        }}
      >
        {founder.icon}
      </div>
      <div className="relative m-3 mb-0 h-[300px] flex-shrink-0 overflow-hidden rounded-[16px]">
        <div className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(circle at 50% 45%, ${founder.accentColor}55 0%, ${founder.bgColor} 72%)` }}
        />
        <Image src={founder.image} alt={founder.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          style={{ zIndex: 1, filter: 'brightness(0.82) contrast(1.05)' }}
          unoptimized
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 80%, ${founder.accentColor}55 0%, transparent 65%)` }}
        />
        <div className="absolute top-0 left-0 p-3.5" style={{ zIndex: 10 }}>
          <img src="https://res.cloudinary.com/dnth1inmv/image/upload/v1781121651/logo_Sete_Tech_color_1_irsexx.png"
            alt="SETE TECH" className="h-5 w-auto object-contain drop-shadow-lg"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${founder.bgColor} 5%, transparent 100%)`, zIndex: 3 }}
        />
      </div>
      <div className="flex flex-col flex-grow gap-2.5 px-5 pt-3 pb-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: founder.accentColor }} />
          <h3 className="font-bold text-white tracking-tight" style={{ fontSize: '19px', fontFamily: 'var(--font-dm-sans)' }}>
            {founder.name}
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold uppercase text-white/60"
            style={{ fontSize: '10px', letterSpacing: '0.08em', backgroundColor: 'rgba(255,255,255,0.08)' }}
          >
            <span style={{ color: founder.accentColor }}>✓</span>
            {founder.tag1}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold uppercase text-white/60"
            style={{ fontSize: '10px', letterSpacing: '0.08em', backgroundColor: 'rgba(255,255,255,0.08)' }}
          >
            <span style={{ color: founder.accentColor }}>✓</span>
            {founder.tag2}
          </span>
        </div>
        <p className="mt-1 flex-grow text-white/45" style={{ fontSize: '13px', lineHeight: 1.55, fontFamily: 'var(--font-dm-sans)' }}>
          {founder.description}
        </p>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} id="cases" className="rounded-b-[40px] overflow-hidden pt-32 pb-24"
      style={{
        backgroundColor: NOTCH_BG,
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ marginBottom: '56px' }}>
          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#6A00FF] mb-3"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            NOSSO PORTFÓLIO
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 400,
            color: '#0D0D0D',
            lineHeight: 1.1,
          }}>
            Cases & <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Projetos</em>
          </h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch max-w-7xl mx-auto">
          {founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  )
}