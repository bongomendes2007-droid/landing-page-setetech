'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre',    href: '#sobre' },
  { label: 'Cases',    href: '#cases' },
  { label: 'Contato',  href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [ctaHover, setCtaHover] = useState(false)

  return (
    <>
      {/* Desktop — pill flutuante */}
      <nav
        className="fixed z-50 hidden md:flex items-center gap-5"
        style={{
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '9999px',
          background: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          padding: '8px 16px',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
            <polygon
              points="16,2 30,10 30,22 16,30 2,22 2,10"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              fill="rgba(161,0,255,0.08)"
            />
            <text
              x="16" y="21" textAnchor="middle"
              fill="var(--color-accent)" fontSize="13" fontWeight="800"
              fontFamily="var(--font-syne)"
            >
              S
            </text>
          </svg>
          <span
            className="font-bold tracking-wider"
            style={{ fontFamily: 'var(--font-syne)', color: '#FFFFFF', fontSize: '15px' }}
          >
            SETE <span style={{ color: 'var(--color-accent)' }}>TECH</span>
          </span>
        </Link>

        {/* Separador */}
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />

        {/* Links */}
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                color: '#AAAAAA',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#AAAAAA' }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#contato"
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          style={{
            background: ctaHover ? '#D600FF' : '#FFFFFF',
            color: ctaHover ? '#FFFFFF' : '#0D0D0D',
            borderRadius: '9999px',
            padding: '8px 20px',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'var(--font-dm-sans)',
            transition: 'background 0.2s, color 0.2s',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Fale Conosco
        </Link>
      </nav>

      {/* Mobile — botão hamburguer flutuante */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          className="w-10 h-10 rounded-full flex flex-col justify-center items-center gap-1.5"
          style={{
            background: 'rgba(10,10,10,0.85)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span
            className="block w-5 h-px rounded transition-all duration-300"
            style={{ background: '#FFFFFF', transform: open ? 'rotate(45deg) translateY(4px)' : 'none' }}
          />
          <span
            className="block w-5 h-px rounded transition-all duration-300"
            style={{ background: '#FFFFFF', opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px rounded transition-all duration-300"
            style={{ background: '#FFFFFF', transform: open ? 'rotate(-45deg) translateY(-4px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col p-8 gap-6 md:hidden"
              style={{ background: 'var(--color-surface)', borderLeft: '1px solid var(--color-border)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            >
              <button
                className="self-end mb-2 text-2xl leading-none"
                style={{ color: 'var(--color-muted)' }}
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                ×
              </button>
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    className="text-xl font-semibold block hover:text-[var(--color-accent)] transition-colors"
                    style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="#contato"
                className="mt-auto px-5 py-3 text-sm font-semibold rounded-full text-center"
                style={{ background: '#6A00FF', color: '#FFFFFF', fontFamily: 'var(--font-dm-sans)' }}
                onClick={() => setOpen(false)}
              >
                Fale Conosco
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
