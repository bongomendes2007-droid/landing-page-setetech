'use client'
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden w-full min-h-screen flex items-center"
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
          backgroundImage: 'linear-gradient(rgba(128,240,160,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(128,240,160,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Spotlight mouse-follow (z-[16]) */}
      <Spotlight size={500} className="z-[16]" />

      {/* Linha accent topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-40"
        style={{ background: 'linear-gradient(90deg, transparent, #32C885, #80F0A0, transparent)' }}
      />

      {/* Layout principal — sem z-index para não criar stacking context isolado */}
      <div className="relative w-full flex flex-col md:flex-row items-center min-h-screen">

        {/* CAMADA 4 — conteúdo texto, CTAs, stats (z-30) */}
        <div className="flex-1 relative z-30 px-8 md:px-16 lg:px-24 py-32 flex flex-col justify-center">

          {/* Tag pill */}
          <div
            className="inline-flex items-center gap-2 mb-6 w-fit"
            style={{
              border: '1px solid rgba(50,200,133,0.3)',
              borderRadius: '40px',
              padding: '6px 18px',
              background: 'rgba(50,200,133,0.06)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#32C885', boxShadow: '0 0 6px #32C885' }}
            />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#80F0A0' }}>
              TECNOLOGIA QUE MOVE NEGÓCIOS
            </span>
          </div>

          {/* Título */}
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#F0F4F5',
            }}
          >
            Tecnologia que move<br />
            negócios para o{' '}
            <span style={{
              background: 'linear-gradient(135deg, #006B3D, #32C885, #80F0A0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              FUTURO.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className="mb-10"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'rgba(175,179,183,0.7)',
              maxWidth: '420px',
            }}
          >
            Soluções digitais completas para empresas e órgãos públicos do Piauí e de todo o Brasil.
          </p>

          {/* Botões */}
          <div className="flex flex-wrap gap-3 mb-16">
            <a
              href="#servicos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #006B3D, #32C885, #80F0A0)',
                color: '#0D1F23',
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
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'transparent',
                color: '#80F0A0',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                padding: '13px 32px',
                borderRadius: '40px',
                border: '1px solid rgba(128,240,160,0.35)',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              Fale com Especialista
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {[
              { num: '47+', label: 'Projetos entregues' },
              { num: '12',  label: 'Municípios atendidos' },
              { num: '5',   label: 'Anos de experiência' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: 800, color: '#80F0A0', lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#5A636A', marginTop: '4px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAMADA 3 — robô 3D (z-20) */}
        <div className="flex-1 relative z-20 w-full md:w-auto" style={{ minHeight: '500px' }}>
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </div>

      {/* Scroll indicator (z-30) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30">
        <span style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#2D4A53', textTransform: 'uppercase' }}>
          Role para baixo
        </span>
        <div style={{
          width: '1px', height: '48px',
          background: 'linear-gradient(to bottom, #32C885, transparent)',
          animation: 'scrollPulse 1.8s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
