'use client'

import { motion } from 'framer-motion'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const founders = [
  { image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Gerorge_Mendes_udtlds.png', name: 'George Mendes' },
  { image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Rafael_Lages_xfft0x.png', name: 'Rafael Lages' },
  { image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Amadeu_Bruno_1_mqpbym.png', name: 'Amadeu Bruno' },
  { image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641244/Leonardo_Cbv_uua4hh.png', name: 'Leonardo CBV' },
]

function FounderCard({ f }: { f: typeof founders[0] }) {
  return (
    <div className="mx-auto overflow-hidden" style={{ borderRadius: '24px', width: '280px', height: '500px' }}>
      <img
        src={f.image}
        alt={f.name}
        // object-contain garante a imagem 100% inteira (sem corte); como o
        // container tem exatamente a proporção 280×500 das artes, não há barras.
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export default function TeamSection() {
  return (
    <section
      id="equipe"
      className="py-24 rounded-t-[40px] rounded-b-[40px] overflow-x-clip"
      style={{ backgroundColor: '#7A1CF8' }}
    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 md:px-16 max-w-7xl mx-auto mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3">
          NOSSO TIME
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ lineHeight: 1.1 }}>
          As pessoas por trás da{' '}
          <span style={{
            background: 'linear-gradient(90deg, #ffffff, #D9B8FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontStyle: 'italic',
            fontFamily: 'var(--font-serif)',
          }}>
            SETE TECH
          </span>
        </h2>
        <p className="mt-3 text-[15px] text-white/60 max-w-lg">
          Fundadores apaixonados por tecnologia e comprometidos com o
          desenvolvimento digital do Piauí.
        </p>
      </motion.div>

      {/* Swiper */}
      <style>{`
        /* padding vertical para caber o card de 500px + paginação sem clipar */
        .founders-swiper { padding-top: 16px !important; padding-bottom: 64px !important; }
        /* slides com altura automática e card sempre centralizado/inteiro */
        .founders-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
        }
        .founders-swiper .swiper-pagination-bullet { background: rgba(255,255,255,0.4); opacity: 1; }
        .founders-swiper .swiper-pagination-bullet-active { background: #ffffff; }
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
          slidesPerView={2.2}
          spaceBetween={40}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2, slideShadows: false }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="founders-swiper"
          breakpoints={{
            0:    { slidesPerView: 1.15, spaceBetween: 16 },
            640:  { slidesPerView: 1.8,  spaceBetween: 30 },
            1024: { slidesPerView: 2.2,  spaceBetween: 40 },
          }}
        >
          {founders.map((f) => (
            <SwiperSlide key={f.name} className="!overflow-visible">
              <FounderCard f={f} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}