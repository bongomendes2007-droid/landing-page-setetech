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
      className={`group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_12px_48px_rgba(0,0,0,0.6)] ${className}`}
      style={{ background: 'linear-gradient(to bottom right, #1A1A1A, #101010)', ...style }}
    >
      {/* Top glow — aparece apenas no hover */}
      <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-2/3 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[60px] bg-white/10" />

      {/* Cursor glow — branco sutil */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-0 transition-opacity duration-300"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)' }}
      />
      {children}
    </div>
  )
}
