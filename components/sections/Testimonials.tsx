'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/team'
import SectionHeading from '@/components/shared/SectionHeading'

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FFF7EA]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Depoimentos"
          title="O que nossos clientes dizem"
          description="Parcerias reais com resultados mensuráveis."
        />

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, #FFF7EA 15%, #FFF7EA 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, #FFF7EA 15%, #FFF7EA 85%, transparent)',
          }}
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 relative"
              style={{ background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.08)' }}
            >
              <Quote
                className="w-8 h-8 text-[#A100FF]/40 mb-4"
                aria-hidden="true"
              />
              <p className="text-[#1A1A1A] text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.message}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6A00FF] to-[#A100FF] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-[#0D0D0D] text-sm block">
                    {t.name}
                  </cite>
                  <span className="text-[#666666] text-xs">
                    {t.role} · {t.company}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
