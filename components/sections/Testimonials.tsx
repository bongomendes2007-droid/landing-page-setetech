'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/team'
import SectionHeading from '@/components/shared/SectionHeading'

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#7A1CF8]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Depoimentos"
          title="O que nossos clientes dizem"
          description="Parcerias reais com resultados mensuráveis."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative"
            >
              <Quote
                className="w-8 h-8 text-blue-200 mb-4"
                aria-hidden="true"
              />
              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.message}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-slate-900 text-sm block">
                    {t.name}
                  </cite>
                  <span className="text-slate-500 text-xs">
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
