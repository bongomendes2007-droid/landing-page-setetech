'use client'

import { useId } from 'react'
import { motion } from 'framer-motion'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const founders = [
  {
    name: 'Bongo Mendes',
    tag1: 'DESENVOLVIMENTO WEB',
    tag2: 'FRONTEND',
    description: 'Especialista em sistemas web de alta performance para empresas e órgãos públicos do Piauí.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bgColor: '#0D0520',
    accentColor: '#6A00FF',
    icon: '💻',
  },
  {
    name: 'Fundador 2',
    tag1: 'AUTOMAÇÃO & IA',
    tag2: 'INFRAESTRUTURA',
    description: 'Lidera a arquitetura técnica e integração de modelos de IA nos produtos da SETE TECH.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    bgColor: '#041A0A',
    accentColor: '#00C853',
    icon: '🤖',
  },
  {
    name: 'Fundador 3',
    tag1: 'MARKETING DIGITAL',
    tag2: 'DESIGN & UX',
    description: 'Responsável pela identidade visual e estratégias de crescimento digital da SETE TECH.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
    bgColor: '#1A0E00',
    accentColor: '#FFB300',
    icon: '🎨',
  },
  {
    name: 'Fundador 4',
    tag1: 'GESTÃO & NEGÓCIOS',
    tag2: 'ÓRGÃOS PÚBLICOS',
    description: 'Especialista em soluções para prefeituras, autarquias e secretarias do Piauí.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
    bgColor: '#030A1A',
    accentColor: '#2979FF',
    icon: '🏛️',
  },
]

const STATS = [
  { number: '4',   label: 'Fundadores' },
  { number: '5+',  label: 'Anos juntos' },
  { number: '47+', label: 'Projetos entregues' },
  { number: '12',  label: 'Municípios atendidos' },
]

type Founder = (typeof founders)[0]

function FounderCard({ f }: { f: Founder }) {
  const id = useId().replace(/:/g, '')
  const W = 280
  const H = 500
  const R = 24
  const N = 44

  const notchPath = `
    M ${R} 0
    L ${W - N - 8} 0
    C ${W - N + 12} 0, ${W} ${N - 12}, ${W} ${N + 8}
    L ${W} ${H - R}
    Q ${W} ${H} ${W - R} ${H}
    L ${R} ${H}
    Q 0 ${H} 0 ${H - R}
    L 0 ${R}
    Q 0 0 ${R} 0
    Z
  `

  return (
    <div className="relative mx-auto" style={{ width: `${W}px`, height: `${H}px` }}>

      <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
        <defs>
          <clipPath id={`clip-${id}`} clipPathUnits="userSpaceOnUse">
            <path d={notchPath} />
          </clipPath>
        </defs>
      </svg>

      <div
        className="absolute inset-0 flex flex-col overflow-hidden"
        style={{
          backgroundColor: f.bgColor,
          clipPath: `url(#clip-${id})`,
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="relative flex-shrink-0" style={{ height: '300px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={f.image}
            alt={f.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 100%, ${f.accentColor}50 0%, transparent 65%)`,
              mixBlendMode: 'color',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{
              height: '130px',
              background: `linear-gradient(to top, ${f.bgColor} 0%, transparent 100%)`,
            }}
          />
          <p className="absolute top-4 left-4 z-10 text-white/70 font-bold text-[11px] tracking-[0.18em] drop-shadow-md">
            SETE TECH
          </p>
        </div>

        <div className="flex flex-col gap-2.5 px-5 pt-3 pb-5 flex-grow">
          <div className="flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: f.accentColor }}
            />
            <h3 className="text-[17px] font-bold text-white tracking-tight">
              {f.name}
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[f.tag1, f.tag2].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full text-[9px] font-bold uppercase tracking-[0.07em] text-white/55"
                style={{
                  padding: '3px 9px',
                  backgroundColor: f.accentColor + '18',
                  border: `1px solid ${f.accentColor}30`,
                }}
              >
                <span style={{ color: f.accentColor }}>✓</span>
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[12px] leading-[1.6] text-white/40">
            {f.description}
          </p>
        </div>
      </div>

      <div
        className="absolute z-30 flex items-center justify-center rounded-full text-xl"
        style={{
          top: '-18px',
          right: '-18px',
          width: '52px',
          height: '52px',
          backgroundColor: f.accentColor,
          border: '3px solid rgba(255,255,255,0.2)',
          boxShadow: `0 4px 20px ${f.accentColor}70`,
        }}
      >
        {f.icon}
      </div>
    </div>
  )
}

export default function TeamSection() {
  return (
    <section
      id="equipe"
      className="py-24 rounded-t-[40px] rounded-b-[40px] overflow-hidden"
      style={{ backgroundColor: '#7A1CF8' }}
    >
      {/* FIX 5 — Título animado */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 md:px-16 max-w-7xl mx-auto mb-16"
      >
        <p
          className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          NOSSO TIME
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: 'var(--font-syne)', lineHeight: 1.1 }}
        >
          As pessoas por trás da{' '}
          <span style={{
            background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontStyle: 'italic',
            fontFamily: 'var(--font-serif)',
          }}>
            SETE TECH
          </span>
        </h2>
        <p className="mt-3 text-[15px] text-white/60 max-w-lg" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          Fundadores apaixonados por tecnologia e comprometidos com o desenvolvimento digital do Piauí.
        </p>
      </motion.div>

      {/* Swiper Coverflow */}
      <style>{`
        .founders-swiper { padding-bottom: 50px !important; }
        .founders-swiper .swiper-pagination-bullet {
          background: #6A00FF;
          opacity: 0.4;
        }
        .founders-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #A100FF;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={2.4}
          spaceBetween={40}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="founders-swiper"
          breakpoints={{
            0:    { slidesPerView: 1.2, spaceBetween: 20 },
            640:  { slidesPerView: 1.8, spaceBetween: 30 },
            1024: { slidesPerView: 2.4, spaceBetween: 40 },
          }}
        >
          {founders.map((f) => (
            <SwiperSlide key={f.name} className="!overflow-visible">
              <FounderCard f={f} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* FIX 3 — Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-8 mt-16 flex-wrap text-center px-6"
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} className="contents">
            {i > 0 && <div className="hidden md:block h-8 w-px bg-white/20" />}
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-syne)' }}>
                {stat.number}
              </span>
              <span className="text-xs font-medium text-white/60 uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
