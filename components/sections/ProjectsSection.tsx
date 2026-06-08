'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const PROJECTS = [
  {
    tag: 'GovTech',
    title: 'Portal de Transparência Municipal',
    metric: '12 municípios conectados',
    bg: 'linear-gradient(135deg, #0D1F23, #2D4A53)',
    large: true,
  },
  {
    tag: 'E-Commerce',
    title: 'Plataforma AGROSETE',
    metric: '+120% vendas em 6 meses',
    bg: 'linear-gradient(135deg, #132E35, #006B3D)',
    large: false,
  },
  {
    tag: 'Automação',
    title: 'Sistema de Gestão Esportiva',
    metric: '8.000 atletas cadastrados',
    bg: 'linear-gradient(135deg, #0D1F23, #132E35)',
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
            NOSSO PORTFÓLIO
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
          >
            Cases & Projetos
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${p.large ? 'md:col-span-2 h-80 md:h-96' : 'h-56 md:h-96'}`}
            >
              {/* Gradient background */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: p.bg }}
              />

              {/* Decorative accent circle */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
              />

              {/* Bottom overlay for text legibility */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(13,31,35,0.85) 0%, rgba(13,31,35,0.1) 60%, transparent 100%)',
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    background: 'rgba(128,240,160,0.15)',
                    border: '1px solid rgba(128,240,160,0.3)',
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                >
                  {p.tag}
                </span>
                <h3
                  className="font-bold text-lg mb-1 leading-snug"
                  style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
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
