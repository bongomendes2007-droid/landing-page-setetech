'use client'

import { useRef, MouseEvent, ReactNode, CSSProperties } from 'react'

interface MagicCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function MagicCard({ children, className = '', style }: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return

    const rect = card.getBoundingClientRect()
    glow.style.left = `${e.clientX - rect.left}px`
    glow.style.top  = `${e.clientY - rect.top}px`
    glow.style.opacity = '1'
  }

  function handleMouseLeave() {
    if (glowRef.current) glowRef.current.style.opacity = '0'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--color-accent2)] ${className}`}
      style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)', ...style }}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-0 transition-opacity duration-300"
        style={{ background: 'radial-gradient(circle, rgba(161,0,255,0.12) 0%, transparent 70%)' }}
      />
      {children}
    </div>
  )
}
