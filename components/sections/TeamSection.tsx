'use client'

import { motion } from 'framer-motion'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const founders = [
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Gerorge_Mendes_udtlds.png',
    name: 'George Mendes',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Rafael_Lages_xfft0x.png',
    name: 'Rafael Lages',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641244/Leonardo_Cbv_uua4hh.png',
    name: 'Leonardo CBV',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Amadeu_Bruno_1_mqpbym.png',
    name: 'Amadeu Bruno',
  },
]

export default function TeamSection() {
  return (
    <section
      id="equipe"
      className="py-24 md:py-32"
      style={{ backgroundColor: '#7A1CF8', overflowX: 'clip' }}
    >
      <style>{`
        .founders-swiper {
          padding-top: 16px !important;
          padding-bottom: 64px !important;
        }
        .founders-swiper .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          height: auto !important;
        }
        .founders-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.4);
          opacity: 1;
        }
        .founders-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
        }
      `}</style>

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-8 md:px-16 mb-16"
        style={{ maxWidth: '1280px', margin: '0 auto 64px' }}
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

      {/* Carrossel */}
      <motion.div
        className="w-full"
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
          slidesPerView={2.43}
          spaceBetween={24}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="founders-swiper"
          breakpoints={{
            0:    { slidesPerView: 1.2, spaceBetween: 16 },
            640:  { slidesPerView: 1.8, spaceBetween: 20 },
            1024: { slidesPerView: 2.2, spaceBetween: 24 },
          }}
        >
          {founders.map((f) => (
            <SwiperSlide key={f.name}>
              <div style={{
                width: '280px',
                borderRadius: '24px',
                overflow: 'hidden',
                margin: '0 auto',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.image}
                  alt={f.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}
