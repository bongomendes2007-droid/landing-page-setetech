'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const tools = [
  { name: "OpenAI",      src: "https://cdn.simpleicons.org/openai/black" },
  { name: "Anthropic",   src: "https://cdn.simpleicons.org/anthropic/black" },
  { name: "Google",      src: "https://cdn.simpleicons.org/google/black" },
  { name: "GitHub",      src: "https://cdn.simpleicons.org/github/black" },
  { name: "Vercel",      src: "https://cdn.simpleicons.org/vercel/black" },
  { name: "Figma",       src: "https://cdn.simpleicons.org/figma/black" },
  { name: "React",       src: "https://cdn.simpleicons.org/react/black" },
  { name: "Next.js",     src: "https://cdn.simpleicons.org/nextdotjs/black" },
  { name: "TypeScript",  src: "https://cdn.simpleicons.org/typescript/black" },
  { name: "Node.js",     src: "https://cdn.simpleicons.org/nodedotjs/black" },
  { name: "Python",      src: "https://cdn.simpleicons.org/python/black" },
  { name: "Docker",      src: "https://cdn.simpleicons.org/docker/black" },
  { name: "PostgreSQL",  src: "https://cdn.simpleicons.org/postgresql/black" },
  { name: "Firebase",    src: "https://cdn.simpleicons.org/firebase/black" },
  { name: "Stripe",      src: "https://cdn.simpleicons.org/stripe/black" },
  { name: "Notion",      src: "https://cdn.simpleicons.org/notion/black" },
]

const col1 = [tools[0], tools[4], tools[8],  tools[12]]
const col2 = [tools[1], tools[5], tools[9],  tools[13]]
const col3 = [tools[2], tools[6], tools[10], tools[14]]
const col4 = [tools[3], tools[7], tools[11], tools[15]]

function ToolCard({ tool, delay = 0 }: { tool: typeof tools[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
      className="group flex items-center justify-center rounded-xl p-4
        transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{
        background: 'rgba(0,0,0,0.04)',
        border: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <img
        src={tool.src}
        alt={tool.name}
        width={36}
        height={36}
        className="w-9 h-9 object-contain opacity-50
          group-hover:opacity-90 transition-opacity duration-300"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
      />
    </motion.div>
  )
}

function MasonryColumn({ tools, offset = false, delayBase = 0 }: {
  tools: typeof col1; offset?: boolean; delayBase?: number
}) {
  return (
    <div className={`flex flex-col gap-3 ${offset ? 'mt-6' : ''}`}>
      {tools.map((tool, i) => (
        <ToolCard key={tool.name} tool={tool} delay={delayBase + i * 0.07} />
      ))}
    </div>
  )
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return
      gsap.from(textRef.current, {
        opacity: 0, x: -60, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: textRef.current, start: 'top 80%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="rounded-t-[40px] rounded-b-[40px] overflow-hidden"
      style={{ background: '#FFF7EA' }}
    >
      <div className="max-w-7xl mx-auto pt-32 pb-24 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Coluna texto */}
          <div ref={textRef} className="flex-[1.2] max-w-[520px] flex flex-col justify-center">
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#6A00FF',
              fontFamily: 'var(--font-dm-sans)',
              marginBottom: '12px',
            }}>
              NOSSA HISTÓRIA
            </span>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 400,
              color: '#0D0D0D',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
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

            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#444444',
              marginBottom: '16px',
            }}>
              Nascemos em Teresina, PI, com a missão de democratizar acesso a soluções digitais de alto
              nível para empresas regionais e o setor público. Acreditamos que a distância dos grandes
              centros não deve ser obstáculo para acessar tecnologia de ponta.
            </p>

            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#444444',
              marginBottom: '32px',
            }}>
              Em 5 anos, transformamos negócios de 12 municípios piauienses — de PMEs locais a secretarias
              e autarquias — com sistemas modernos, rápidos e fáceis de usar.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6 border-t border-black/10">
              {[
                { n: "47+", label: "Projetos entregues" },
                { n: "12",  label: "Municípios atendidos" },
                { n: "5",   label: "Anos de atuação" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span style={{ fontSize: '24px', fontWeight: 900, color: '#0D0D0D' }}>
                    {s.n}
                  </span>
                  <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.4)', marginTop: '2px' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid masonry — desktop */}
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <div className="grid grid-cols-4 gap-3 max-w-xs w-full">
              <MasonryColumn tools={col1} delayBase={0} />
              <MasonryColumn tools={col2} offset delayBase={0.1} />
              <MasonryColumn tools={col3} delayBase={0.2} />
              <MasonryColumn tools={col4} offset delayBase={0.3} />
            </div>
          </div>

          {/* Mobile — grid simples */}
          <div className="lg:hidden grid grid-cols-4 gap-3 w-full">
            {tools.slice(0, 8).map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} delay={i * 0.05} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}