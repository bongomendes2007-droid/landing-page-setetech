'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)
  const overlayRef  = useRef<HTMLDivElement>(null)
  const tagRef      = useRef<HTMLDivElement>(null)
  const titleRef    = useRef<HTMLHeadingElement>(null)
  const subRef      = useRef<HTMLParagraphElement>(null)
  const btnsRef     = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)
  const scrollRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Entry timeline
      const tl = gsap.timeline({ delay: 0.2 })

      tl.from(tagRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
        .from(
          titleRef.current!.querySelectorAll('.word'),
          { opacity: 0, rotateX: -60, y: 40, stagger: 0.08, duration: 0.7, ease: 'back.out(1.4)' },
          '-=0.2'
        )
        .from(subRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from(btnsRef.current!.children, { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }, '-=0.3')
        .from(statsRef.current!.children, { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }, '-=0.2')
        .from(scrollRef.current, { opacity: 0, duration: 0.6 }, '-=0.1')

      // Parallax video on scroll
      gsap.to(videoRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Overlay darkens on scroll
      gsap.to(overlayRef.current, {
        opacity: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'center top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const titleWords = ['Tecnologia', 'que', 'move', 'negócios', 'para', 'o']

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px', background: '#05050f' }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://res.cloudinary.com/dd5f5j2ni/video/upload/v1780945286/kling_20260609_VIDEO_A_cute_fut_726_0_jf4u3c.mp4"
          type="video/mp4"
        />
      </video>

      {/* Directional overlay — darker left, transparent right */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to right, rgba(13,31,35,0.92) 0%, rgba(13,31,35,0.65) 50%, rgba(13,31,35,0.10) 100%)',
          opacity: 0.75,
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-2xl"
        style={{ zIndex: 10 }}
      >
        {/* Tag pill */}
        <div
          ref={tagRef}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(128,240,160,0.12)',
            border: '1px solid rgba(128,240,160,0.3)',
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          Tecnologia que move negócios
        </div>

        {/* H1 */}
        <h1
          ref={titleRef}
          className="mb-4 leading-tight"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: 'var(--color-text)',
            perspective: '800px',
          }}
        >
          {titleWords.map((word) => (
            <span key={word} style={{ display: 'inline' }}>
              <span
                className="word"
                style={{ display: 'inline-block', transformOrigin: 'center top' }}
              >
                {word}
              </span>
              {' '}
            </span>
          ))}
          <span className="word gradient-text" style={{ display: 'inline-block', transformOrigin: 'center top' }}>
            FUTURO.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="mb-8 text-base md:text-lg"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            color: 'var(--color-muted)',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}
        >
          Soluções digitais completas para empresas e órgãos públicos em Teresina, Piauí.
        </p>

        {/* CTAs */}
        <div ref={btnsRef} className="flex flex-wrap gap-3 mb-10">
          <Link
            href="#servicos"
            className="inline-flex items-center px-7 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              background: 'var(--gradient-accent)',
              color: '#0D1F23',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            Conheça os Serviços
          </Link>
          <Link
            href="#contato"
            className="inline-flex items-center px-7 py-3 rounded-full text-sm font-semibold transition-colors"
            style={{
              border: '1.5px solid rgba(128,240,160,0.45)',
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            Fale com Especialista
          </Link>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex gap-8 flex-wrap"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          {[
            { value: '47+', label: 'Projetos' },
            { value: '12',  label: 'Municípios' },
            { value: '5',   label: 'Anos' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span
                className="font-bold text-2xl leading-none"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-accent)' }}
              >
                {s.value}
              </span>
              <span className="text-xs mt-1" style={{ color: 'var(--color-subtle)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
      >
        <span
          className="text-[10px] tracking-[3px] uppercase"
          style={{ color: 'rgba(240,244,245,0.35)', fontFamily: 'var(--font-dm-sans)' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8 rounded-full"
          style={{
            background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
