'use client'

import { useId, useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SECTION_BG = '#EEEEEE'

/* ── Dimensões do card ─────────────────────────────────────────── */
const W = 260   // largura px
const H = 480   // altura px
const R = 24    // border-radius nos 3 cantos normais
const N = 48    // raio do notch côncavo no canto superior direito

const founders = [
  {
    name: 'Fundador 1',
    tag1: 'DESENVOLVIMENTO WEB',
    tag2: 'FRONTEND',
    description: 'Especialista em sistemas web de alta performance para empresas e órgãos públicos do Piauí.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bgColor: '#1E0A35',
    accentColor: '#6A00FF',
    icon: '💻',
  },
  {
    name: 'Fundador 2',
    tag1: 'AUTOMAÇÃO & IA',
    tag2: 'INFRAESTRUTURA',
    description: 'Lidera a arquitetura técnica e integração de modelos de IA nos produtos da SETE TECH.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bgColor: '#0A1A10',
    accentColor: '#00C853',
    icon: '🤖',
  },
  {
    name: 'Fundador 3',
    tag1: 'MARKETING DIGITAL',
    tag2: 'DESIGN & UX',
    description: 'Responsável pela identidade visual e estratégias de crescimento digital da SETE TECH.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bgColor: '#1A1200',
    accentColor: '#FFB300',
    icon: '🎨',
  },
  {
    name: 'Fundador 4',
    tag1: 'GESTÃO & NEGÓCIOS',
    tag2: 'ÓRGÃOS PÚBLICOS',
    description: 'Especialista em soluções para prefeituras, autarquias e secretarias do Piauí.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    bgColor: '#0A0F1E',
    accentColor: '#2979FF',
    icon: '🏛️',
  },
]

type Founder = (typeof founders)[0]

/**
 * Gera o SVG path do card com notch côncavo no canto superior direito.
 *
 * Segmento crítico: `A N N 0 0 0 W N`
 *   De (W-N, 0) até (W, N), raio N, small-arc, sweep=0 (CCW na tela).
 *   O arco passa por ≈(W-N+14, N/2) — DENTRO do card = côncavo.
 */
function buildNotchPath(w: number, h: number, r: number, n: number): string {
  return [
    `M ${r} 0`,
    `L ${w - n} 0`,
    `A ${n} ${n} 0 0 0 ${w} ${n}`,
    `L ${w} ${h - r}`,
    `Q ${w} ${h} ${w - r} ${h}`,
    `L ${r} ${h}`,
    `Q 0 ${h} 0 ${h - r}`,
    `L 0 ${r}`,
    `Q 0 0 ${r} 0`,
    'Z',
  ].join(' ')
}

function FounderCard({ founder }: { founder: Founder }) {
  const rawId  = useId()
  const clipId = `clip${rawId.replace(/[^a-z0-9]/gi, '')}`
  const path   = buildNotchPath(W, H, R, N)
  const photoH = Math.round(H * 0.63)

  return (
    /* Wrapper com dimensões fixas — o clipPath usa userSpaceOnUse absoluto */
    <div className="relative flex-shrink-0" style={{ width: `${W}px`, height: `${H}px` }}>

      {/* SVG oculto que define o clip (zero espaço visual) */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <path d={path} />
          </clipPath>
        </defs>
      </svg>

      {/* Card recortado pelo SVG clip */}
      <div
        className="group absolute inset-0 flex flex-col cursor-pointer
          transition-transform duration-300 hover:-translate-y-2"
        style={{
          backgroundColor: founder.bgColor,
          clipPath: `url(#${clipId})`,
        }}
      >
        {/* FOTO ─────────────────────────────────────────────────── */}
        <div className="relative flex-shrink-0 overflow-hidden" style={{ height: `${photoH}px` }}>

          {/* Backlight radial atrás da foto */}
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

          {/* Glow colorido de baixo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 80%, ${founder.accentColor}55 0%, transparent 65%)`,
              zIndex: 2,
            }}
          />

          {/* Logo SETE TECH */}
          <div className="absolute top-0 left-0 p-3.5" style={{ zIndex: 10 }}>
            <img
              src="https://res.cloudinary.com/dnth1inmv/image/upload/v1781121651/logo_Sete_Tech_color_1_irsexx.png"
              alt="SETE TECH"
              className="h-5 w-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* Fade da base da foto para o fundo do card */}
          <div
            className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${founder.bgColor} 5%, transparent 100%)`,
              zIndex: 3,
            }}
          />
        </div>

        {/* CONTEÚDO ──────────────────────────────────────────────── */}
        <div className="flex flex-col flex-grow gap-2.5 px-5 pt-3 pb-6">

          <div className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: founder.accentColor }}
            />
            <h3
              className="font-bold text-white tracking-tight"
              style={{ fontSize: '18px', fontFamily: 'var(--font-dm-sans)' }}
            >
              {founder.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold uppercase text-white/60"
              style={{ fontSize: '10px', letterSpacing: '0.08em', backgroundColor: 'rgba(255,255,255,0.08)' }}
            >
              <span style={{ color: founder.accentColor }}>✓</span>
              {founder.tag1}
            </span>
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold uppercase text-white/60"
              style={{ fontSize: '10px', letterSpacing: '0.08em', backgroundColor: 'rgba(255,255,255,0.08)' }}
            >
              <span style={{ color: founder.accentColor }}>✓</span>
              {founder.tag2}
            </span>
          </div>

          <p
            className="mt-1 flex-grow text-white/45"
            style={{ fontSize: '13px', lineHeight: 1.55, fontFamily: 'var(--font-dm-sans)' }}
          >
            {founder.description}
          </p>
        </div>
      </div>

      {/* ÍCONE — fora do clipPath, encaixado no espaço do notch */}
      <div
        className="absolute flex items-center justify-center rounded-full select-none"
        style={{
          top: '3px',
          right: '3px',
          width: `${N - 8}px`,
          height: `${N - 8}px`,
          backgroundColor: founder.accentColor,
          border: '2px solid rgba(255,255,255,0.22)',
          boxShadow: `0 4px 18px ${founder.accentColor}66`,
          fontSize: '19px',
          zIndex: 40,
        }}
      >
        {founder.icon}
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
        scrollTrigger: { trigger: gridRef.current, start: 'top 75%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="cases"
      className="rounded-b-[40px] overflow-hidden pt-32 pb-24"
      style={{
        backgroundColor: SECTION_BG,
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

        {/* Cards — flex wrap com largura fixa por card */}
        <div
          ref={gridRef}
          className="flex flex-wrap justify-center gap-6"
        >
          {founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  )
}
