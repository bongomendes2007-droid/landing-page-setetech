'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Palette } from 'lucide-react'

const SERVICES = [
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781278734/2026-06-12T15-37-06-312Z_Enhance_and_upscale_this_image_to_4K_Full_HD_resol_m3tw6v.png',
    title: 'Desenvolvimento Web',
    description: 'Sites institucionais, e-commerces, sistemas e aplicações web de alta performance com as tecnologias mais modernas do mercado.',
    href: '#contato',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781279171/92945cc36b11481785be0b1bb1cbf2b8_vjizti.jpg',
    title: 'Automação & IA',
    description: 'Fluxos inteligentes, chatbots, processamento de dados e integração de modelos de IA para otimizar seus processos operacionais.',
    href: '#contato',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781279099/9bd5346590dceb45f48ae51e04133733_joo3pb.jpg',
    title: 'Marketing Digital',
    description: 'SEO, tráfego pago, social media e estratégias de crescimento digital focadas em geração de leads e conversão.',
    href: '#contato',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    title: 'Identidade Visual & Design',
    description: 'Criação de marcas, logos, materiais gráficos e interfaces digitais que comunicam profissionalismo e geram reconhecimento para o seu negócio.',
    href: '#contato',
    icon: <Palette className="h-4 w-4" />,
  },
  {
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80',
    title: 'Soluções para Órgãos Públicos',
    description: 'Sistemas de gestão, portais de transparência, automação de serviços públicos e conformidade com LGPD para municípios e órgãos estaduais.',
    href: '#contato',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" />
        <path d="M2 22 12 2l10 20" />
        <line x1="9" y1="22" x2="9" y2="12" />
        <line x1="15" y1="22" x2="15" y2="12" />
      </svg>
    ),
  },
]

interface ServiceItem {
  image: string
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

function ServiceCard({ s, priority }: { s: ServiceItem; priority: boolean }) {
  return (
    <div className="group flex flex-col rounded-[28px] border border-white/10 bg-[#161616] shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
      <div className="relative h-52 w-full overflow-hidden rounded-[20px] flex-shrink-0">
        <Image src={s.image} alt={s.title} fill className="object-cover" priority={priority} />
      </div>
      <div className="flex flex-col flex-grow px-4 pt-4 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#A100FF]">
            {s.icon}
          </div>
          <h3 className="text-base font-bold text-white leading-tight mt-1" style={{ fontFamily: 'var(--font-syne)' }}>
            {s.title}
          </h3>
        </div>
        <p className="mt-2 text-[13px] text-white/60 leading-relaxed line-clamp-3 flex-grow" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          {s.description}
        </p>
        <a
          href={s.href}
          className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#A100FF] group-hover:text-[#D600FF] group-hover:gap-2 transition-all w-fit focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2 rounded"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          Saiba mais <span>→</span>
        </a>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden rounded-b-[40px]"
      style={{
        background: '#FFF7EA',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* FIX 2 — Título animado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#6A00FF] mb-3"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            O QUE FAZEMOS
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
            Nossos{' '}
            <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Serviços
            </em>
          </h2>
        </motion.div>

        {/* FIX 1 — Cards animados escalonados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <ServiceCard s={s} priority={i < 3} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
