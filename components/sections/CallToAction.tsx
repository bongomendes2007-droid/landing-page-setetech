'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5500000000000'
const WHATSAPP_MESSAGE = 'Olá! Gostaria de solicitar um diagnóstico gratuito da SETE TECH.'

export default function CallToAction() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section
      className="py-24 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #93c5fd 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold text-blue-300 uppercase tracking-widest mb-4">
            Pronto para começar?
          </span>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
          >
            Diagnóstico gratuito para o seu negócio
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Vamos entender seu negócio antes de qualquer proposta. Sem compromisso, sem jargões —
            apenas um olhar honesto sobre como a tecnologia pode te ajudar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-colors duration-200 text-base shadow-xl"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white/60 hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Conversar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
