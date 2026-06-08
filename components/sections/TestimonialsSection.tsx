'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Marcos Alencar',
    role: 'Secretário de TI',
    company: 'Prefeitura de Floriano - PI',
    text: 'A SETE TECH transformou nossa gestão pública digital. O portal de transparência que entregaram superou todas as expectativas do TCE e dos cidadãos.',
    avatar: 'MA',
  },
  {
    name: 'Carla Mendes',
    role: 'Diretora Comercial',
    company: 'AGROSETE',
    text: 'Em menos de 6 meses após o lançamento da plataforma, nossas vendas online cresceram 120%. A equipe da SETE TECH é extremamente comprometida.',
    avatar: 'CM',
  },
  {
    name: 'Rafael Costa',
    role: 'CEO',
    company: 'Grupo Esportivo SETE',
    text: 'O sistema de gestão esportiva é robusto, intuitivo e escalou para 8 mil atletas sem travar. Recomendo a qualquer organização esportiva do nordeste.',
    avatar: 'RC',
  },
  {
    name: 'Ana Paula Lima',
    role: 'Gerente de Marketing',
    company: 'SETE TV NEWS',
    text: 'A automação das nossas newsletters e o novo site elevaram nosso alcance digital em +200%. A SETE TECH entende de estratégia digital, não só de código.',
    avatar: 'AL',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const constraintsRef = useRef<HTMLDivElement>(null)

  function prev() { setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) }
  function next() { setActive((a) => (a + 1) % TESTIMONIALS.length) }

  const t = TESTIMONIALS[active]

  return (
    <section
      id="depoimentos"
      className="py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}
          >
            DEPOIMENTOS
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
          >
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Card */}
        <div ref={constraintsRef} className="relative">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="rounded-2xl p-8 md:p-12"
            style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)' }}
          >
            {/* Quote */}
            <p
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-text)', fontStyle: 'italic' }}
            >
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: 'var(--gradient-accent)', color: '#0D1F23', fontFamily: 'var(--font-syne)' }}
              >
                {t.avatar}
              </div>
              <div>
                <p
                  className="font-bold text-sm"
                  style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-subtle)' }}
                >
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--color-card)]"
            style={{ border: '1px solid var(--color-border)', color: 'var(--color-muted)' }}
            aria-label="Anterior"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? '24px' : '8px',
                  height: '8px',
                  background: i === active ? 'var(--color-accent)' : 'var(--color-border)',
                }}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--color-card)]"
            style={{ border: '1px solid var(--color-border)', color: 'var(--color-muted)' }}
            aria-label="Próximo"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
