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
      className="overflow-hidden"
      style={{
        background: 'var(--color-surface)',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <div style={{ maxWidth: '768px', margin: '0 auto' }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-dm-sans)',
              marginBottom: '12px',
            }}
          >
            DEPOIMENTOS
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 400,
              color: 'var(--color-text)',
              lineHeight: 1.1,
            }}
          >
            O que nossos{' '}
            <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              clientes dizem
            </em>
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
            className="rounded-2xl"
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              padding: '48px',
            }}
          >
            <p
              className="text-lg leading-relaxed"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                color: 'var(--color-text)',
                fontStyle: 'italic',
                marginBottom: '32px',
              }}
            >
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: 'var(--gradient-accent)', color: '#FFFFFF', fontFamily: 'var(--font-syne)' }}
              >
                {t.avatar}
              </div>
              <div>
                <p
                  className="font-bold text-sm"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    color: 'var(--color-text)',
                    marginBottom: '2px',
                  }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-subtle)' }}
                >
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navegação */}
        <div className="flex items-center justify-center gap-4" style={{ marginTop: '32px' }}>
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--color-card)]"
            style={{ border: '1px solid var(--color-border)', color: 'var(--color-muted)' }}
            aria-label="Anterior"
          >
            ←
          </button>

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
