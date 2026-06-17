'use client'
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden w-full min-h-screen flex items-center pt-20 rounded-b-[40px]"
    >
      {/* CAMADA 1 — Animated Gradient Background (z-0) */}
      <AnimatedGradientBackground
        Breathing={true}
        breathingRange={6}
        animationSpeed={0.012}
        startingGap={115}
        gradientColors={[
          "#0D0D0D",
          "#0D0D0D",
          "#1A0033",
          "#3D0099",
          "#6A00FF",
          "#A100FF",
          "#D600FF",
        ]}
        gradientStops={[0, 25, 40, 55, 68, 82, 100]}
        containerClassName="z-0"
      />

      {/* CAMADA 2 — overlay escuro semitransparente (z-10) */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Grid sutil de fundo (z-[15]) */}
      <div
        className="absolute inset-0 z-[15] opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(161,0,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(161,0,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Spotlight mouse-follow (z-[16]) */}
      <Spotlight size={500} className="z-[16]" />

      {/* Linha accent topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-40"
        style={{ background: 'linear-gradient(90deg, transparent, #6A00FF, #D600FF, transparent)' }}
      />

      {/* Layout principal */}
      <div className="relative w-full overflow-x-clip flex flex-col md:flex-row items-center min-h-screen">

        {/* CAMADA 4 — conteúdo texto e CTAs (z-30) */}
        <div
          className="flex-1 relative z-30 flex flex-col justify-center"
          style={{
            paddingLeft: 'clamp(32px, 8vw, 96px)',
            paddingRight: '32px',
            paddingTop: '128px',
            paddingBottom: '128px',
          }}
        >

          {/* Título — DM Serif Display */}
          <h1
            className="mb-6"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              color: '#FFFFFF',
            }}
          >
            Tecnologia que <em>move</em><br />
            negócios para o{' '}
            <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              FUTURO.
            </em>
          </h1>

          {/* Subtítulo */}
          <p
            className="mb-10"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'rgba(170,170,170,0.8)',
              maxWidth: '420px',
              textShadow: '0 1px 4px rgba(0,0,0,0.6)',
            }}
          >
            Soluções digitais completas para empresas e órgãos públicos do Piauí e de todo o Brasil.
          </p>

          {/* Botões */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#servicos"
              className="focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
                background: '#6A00FF',
                color: '#FFFFFF',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 700,
                padding: '14px 32px',
                borderRadius: '40px',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              Conheça os Serviços
            </a>
            <a
              href="#contato"
              className="focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
                background: 'transparent',
                color: '#FFFFFF',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                padding: '13px 32px',
                borderRadius: '40px',
                border: '1px solid rgba(106,0,255,0.5)',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              Fale com Especialista
            </a>
          </div>
        </div>

        {/* CAMADA 3 — robô 3D (z-20) */}
        <div
          className="flex-none relative z-20 w-full md:w-[55%]"
          style={{
            minHeight: '650px',
            transform: 'scale(1.15)',
            transformOrigin: 'center center',
          }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </div>

      {/* Scroll indicator (z-30) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30">
        <span style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(161,0,255,0.7)', textTransform: 'uppercase' }}>
          
        </span>
        <div style={{
          width: '1px', height: '48px',
          background: 'linear-gradient(to bottom, #6A00FF, transparent)',
          animation: 'scrollPulse 1.8s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
