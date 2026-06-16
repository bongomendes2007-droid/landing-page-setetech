'use client'

import { motion } from 'framer-motion'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const founders = [
  {
    name: 'George Mendes',
    tag1: 'DESENVOLVIMENTO WEB',
    tag2: 'FRONTEND',
    description: 'Especialista em sistemas web de alta performance para empresas e órgãos públicos do Piauí.',
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Gerorge_Mendes_udtlds.png',
    bgColor: '#0D0520',
    accentColor: '#6A00FF',
  },
  {
    name: 'Rafael Lages',
    tag1: 'AUTOMAÇÃO & IA',
    tag2: 'INFRAESTRUTURA',
    description: 'Lidera a arquitetura técnica e integração de modelos de IA nos produtos da SETE TECH.',
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Rafael_Lages_xfft0x.png',
    bgColor: '#041A0A',
    accentColor: '#00C853',
  },
  {
    name: 'Amadeu Bruno',
    tag1: 'MARKETING DIGITAL',
    tag2: 'DESIGN & UX',
    description: 'Responsável pela identidade visual e estratégias de crescimento digital da SETE TECH.',
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Amadeu_Bruno_1_mqpbym.png',
    bgColor: '#1A0E00',
    accentColor: '#FFB300',
  },
  {
    name: 'Leonardo CBV',
    tag1: 'GESTÃO & NEGÓCIOS',
    tag2: 'ÓRGÃOS PÚBLICOS',
    description: 'Especialista em soluções para prefeituras, autarquias e secretarias do Piauí.',
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641244/Leonardo_Cbv_uua4hh.png',
    bgColor: '#030A1A',
    accentColor: '#2979FF',
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
  return (
    <div
      className="mx-auto flex flex-col overflow-hidden"
      style={{ backgroundColor: f.bgColor, borderRadius: '24px', height: '500px', width: '280px' }}
    >
      {/* Foto limpa */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '310px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={f.image}
          alt={f.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* Conteúdo abaixo */}
      <div className="flex flex-col gap-3 px-5 pt-3 pb-6 flex-grow">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: f.accentColor }} />
          <h3 className="text-[17px] font-bold text-white tracking-tight">{f.name}</h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[f.tag1, f.tag2].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full text-[9px] font-bold uppercase tracking-[0.07em] text-white/55"
              style={{ padding: '3px 9px', backgroundColor: f.accentColor + '18', border: `1px solid ${f.accentColor}30` }}
            >
              <span style={{ color: f.accentColor }}>✓</span>
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[12px] leading-[1.6] text-white/40">{f.description}</p>
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
