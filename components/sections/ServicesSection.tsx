'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const SERVICES = [
  'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641242/a_ttmcel.png',
  'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/d_uotp4b.png',
  'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/b_gtvw5j.png',
  'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/c_garuyh.png',
  'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/e_aldwv5.png',
]

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden rounded-b-[40px] py-20 md:py-28 lg:py-32"
      style={{
        background: '#FFF7EA',
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#6A00FF] mb-3">
            O QUE FAZEMOS
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 400,
            color: '#0D0D0D',
            lineHeight: 1.1,
          }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              className="overflow-hidden rounded-[28px]"
            >
              <Image
                src={src}
                alt=""
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority={i < 3}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}