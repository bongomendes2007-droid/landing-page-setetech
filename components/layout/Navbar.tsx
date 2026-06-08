'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre',    href: '#sobre' },
  { label: 'Cases',    href: '#cases' },
  { label: 'Contato',  href: '#contato' },
]

export default function Navbar() {
  const navRef  = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -60',
        onEnter: () => {
          gsap.to(navRef.current, {
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(13,31,35,0.90)',
            duration: 0.4,
            ease: 'power2.out',
          })
          gsap.to(lineRef.current, { opacity: 1, duration: 0.4 })
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backdropFilter: 'blur(0px)',
            backgroundColor: 'rgba(13,31,35,0)',
            duration: 0.4,
          })
          gsap.to(lineRef.current, { opacity: 0, duration: 0.4 })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 h-16"
        style={{ backgroundColor: 'rgba(13,31,35,0)' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 select-none">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
            <polygon
              points="16,2 30,10 30,22 16,30 2,22 2,10"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              fill="rgba(128,240,160,0.08)"
            />
            <text
              x="16"
              y="21"
              textAnchor="middle"
              fill="var(--color-accent)"
              fontSize="13"
              fontWeight="800"
              fontFamily="var(--font-syne)"
            >
              S
            </text>
          </svg>
          <span
            className="text-lg font-bold tracking-wider"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
          >
            SETE <span style={{ color: 'var(--color-accent)' }}>TECH</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors hover:text-[var(--color-accent)]"
              style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-muted)' }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:flex">
          <Link
            href="#contato"
            className="px-5 py-2 text-sm font-semibold rounded-full transition-opacity hover:opacity-90"
            style={{
              background: 'var(--gradient-accent)',
              color: '#0D1F23',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            Fale Conosco
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span
            className="block w-6 h-px rounded transition-all duration-300"
            style={{
              background: 'var(--color-text)',
              transform: open ? 'rotate(45deg) translateY(4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px rounded transition-all duration-300"
            style={{ background: 'var(--color-text)', opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px rounded transition-all duration-300"
            style={{
              background: 'var(--color-text)',
              transform: open ? 'rotate(-45deg) translateY(-4px)' : 'none',
            }}
          />
        </button>

        {/* Accent bottom line */}
        <div
          ref={lineRef}
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent, var(--color-accent2), transparent)' }}
        />
      </nav>

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
                className="mt-auto px-5 py-3 text-sm font-semibold rounded-full text-center transition-opacity hover:opacity-90"
                style={{ background: 'var(--gradient-accent)', color: '#0D1F23', fontFamily: 'var(--font-dm-sans)' }}
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
