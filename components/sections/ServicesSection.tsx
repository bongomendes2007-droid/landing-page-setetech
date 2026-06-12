'use client'

import Image from 'next/image'

const SERVICES = [
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781278734/2026-06-12T15-37-06-312Z_Enhance_and_upscale_this_image_to_4K_Full_HD_resol_m3tw6v.png',
    title: 'Desenvolvimento Web',
    description: 'Sites institucionais, e-commerces, sistemas e aplicações web de alta performance com as tecnologias mais modernas do mercado.',
    href: '#contato',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781279171/92945cc36b11481785be0b1bb1cbf2b8_vjizti.jpg',
    title: 'Automação & IA',
    description: 'Fluxos inteligentes, chatbots, processamento de dados e integração de modelos de IA para otimizar seus processos operacionais.',
    href: '#contato',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781279099/9bd5346590dceb45f48ae51e04133733_joo3pb.jpg',
    title: 'Marketing Digital',
    description: 'SEO, tráfego pago, social media e estratégias de crescimento digital focadas em geração de leads e conversão.',
    href: '#contato',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    title: 'Infraestrutura & Cloud',
    description: 'Cloud computing, servidores, segurança, monitoramento e arquitetura escalável para suportar o crescimento do seu negócio.',
    href: '#contato',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80',
    title: 'Soluções para Órgãos Públicos',
    description: 'Sistemas de gestão, portais de transparência, automação de serviços públicos e conformidade com LGPD para municípios e órgãos estaduais.',
    href: '#contato',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" />
        <path d="M2 22 12 2l10 20" />
        <line x1="9" y1="22" x2="9" y2="12" />
        <line x1="15" y1="22" x2="15" y2="12" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      style={{
        background: 'var(--color-bg)',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
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
            O QUE FAZEMOS
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              color: 'var(--color-text)',
              lineHeight: 1.1,
            }}
          >
            Nossos{' '}
            <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Serviços
            </em>
          </h2>
        </div>

        {/* Grid — 3 colunas, 2ª linha alinha à esquerda naturalmente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="flex flex-col rounded-[28px] border border-white/10 bg-[#161616] p-4 transition-colors duration-300 hover:border-white/20"
            >
              {/* Imagem emoldurada com cantos próprios */}
              <div className="relative h-56 w-full overflow-hidden rounded-[20px] flex-shrink-0">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  {...(i < 3 ? { priority: true } : {})}
                />
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col flex-grow px-2 pt-5 pb-3">
                {/* Ícone + título — min-h garante alinhamento com 1 ou 2 linhas */}
                <div className="flex items-center gap-3 min-h-[40px]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#A100FF]">
                    {s.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-white leading-tight"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {s.title}
                  </h3>
                </div>

                <p
                  className="mt-4 text-sm text-white/65 leading-relaxed flex-grow"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {s.description}
                </p>

                <a
                  href={s.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A100FF] hover:text-[#D600FF] hover:gap-3 transition-all w-fit focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2 rounded"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  Saiba mais <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
