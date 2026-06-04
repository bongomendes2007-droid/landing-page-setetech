'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const highlights = [
  'Diagnóstico honesto sem jargões',
  'Suporte real com equipe dedicada',
  'Parceria de longo prazo',
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
      aria-label="Seção principal"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
            Agência de Tecnologia B2B
          </span>
        </motion.div>

        <motion.h1
          className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tecnologia que{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            entrega resultados
          </span>{' '}
          que duram
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A SETE TECH é a parceira estratégica que empresas privadas e o setor público precisam para
          transformar tecnologia em vantagem competitiva real.
        </motion.p>

        <motion.ul
          className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          role="list"
          aria-label="Diferenciais SETE TECH"
        >
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-blue-200 text-sm">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-base shadow-lg shadow-blue-600/30"
          >
            Solicitar diagnóstico gratuito
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white font-medium px-6 py-4 rounded-xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-200 text-base"
          >
            Ver nossos serviços
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { value: '7', label: 'Pilares de serviço' },
            { value: '4', label: 'Especialistas' },
            { value: 'B2B', label: 'Foco exclusivo' },
            { value: '100%', label: 'Suporte real' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/5 rounded-xl p-4 border border-white/10 text-center"
            >
              <div className="text-2xl font-black text-white">{value}</div>
              <div className="text-xs text-blue-300 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        aria-hidden="true"
      >
        <div className="w-5 h-9 rounded-full border-2 border-blue-400/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-blue-400/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
