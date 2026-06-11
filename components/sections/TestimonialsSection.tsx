'use client'

import { Marquee3D } from '@/components/ui/marquee-3d'

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="overflow-hidden"
      style={{
        background: 'var(--color-surface)',
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
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

      <Marquee3D />
    </section>
  )
}
