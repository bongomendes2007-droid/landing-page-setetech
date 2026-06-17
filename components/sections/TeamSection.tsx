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
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Gerorge_Mendes_udtlds.png',
    name: 'George Mendes 2',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Rafael_Lages_xfft0x.png',
    name: 'Rafael Lages 2',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641244/Leonardo_Cbv_uua4hh.png',
    name: 'Leonardo CBV 2',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/Amadeu_Bruno_1_mqpbym.png',
    name: 'Amadeu Bruno 2',
  },
]

export default function TeamSection() {
  return (
    <section
      id="equipe"
      className="py-24 rounded-t-[40px] rounded-b-[40px] min-h-screen flex flex-col justify-center"
      style={{ backgroundColor: '#7A1CF8' }}
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
        className="px-6 md:px-16 max-w-7xl mx-auto mb-16 text-center"
      >
        <p style={{
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
          fontFamily: 'var(--font-dm-sans)',
          marginBottom: '14px',
        }}>
          NOSSO TIME
        </p>

        <p style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 'clamp(18px, 2.5vw, 28px)',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.3,
          margin: '0 0 4px',
          letterSpacing: '0.01em',
        }}>
          As pessoas por trás da
        </p>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(48px, 6vw, 72px)',
          fontWeight: 700,
          fontStyle: 'italic',
          lineHeight: 1.05,
          margin: '0 0 20px',
          letterSpacing: '-0.03em',
          background: 'linear-gradient(90deg, #ffffff, #D9B8FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          SETE TECH
        </p>

        <p style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '13px',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 auto',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          paddingTop: '14px',
        }}>
          Fundadores apaixonados por tecnologia · Piauí, Brasil
        </p>
      </motion.div>

      {/* Carrossel */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ overflowX: 'clip' }}
      >
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={3}
          spaceBetween={24}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          loopAdditionalSlides={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="founders-swiper"
          breakpoints={{
            0:    { slidesPerView: 1, spaceBetween: 16 },
            640:  { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
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
