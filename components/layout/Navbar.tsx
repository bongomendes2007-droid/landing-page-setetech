'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Serviços',    href: '#servicos' },
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Equipe',      href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato',     href: '#contato' },
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
        <Link href="/" className="flex items-center select-none focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2 rounded-sm">
          <Image
            src="https://res.cloudinary.com/dnth1inmv/image/upload/v1781123099/logo_Sete_Tech_branco_1_abpxap.png"
            alt="SETE TECH"
            width={80}
            height={24}
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Separador */}
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />

        {/* Links */}
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
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
          className="focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
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
          className="w-11 h-11 rounded-full flex flex-col justify-center items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
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
                className="self-end mb-2 w-10 h-10 flex items-center justify-center rounded-full text-2xl leading-none focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
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
                    className="text-xl font-semibold block hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2 rounded"
                    style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="#contato"
                className="mt-auto px-5 py-3 text-sm font-semibold rounded-full text-center focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
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
