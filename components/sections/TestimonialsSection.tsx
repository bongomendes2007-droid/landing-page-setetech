'use client'

import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'

const testimonials = [
  {
    text: "Em menos de 6 meses após o lançamento da plataforma, nossas vendas online cresceram 120%. A equipe da SETE TECH é extremamente comprometida.",
    image: "",
    name: "Carla Mendes",
    role: "Diretora Comercial · AGROSETE",
  },
  {
    text: "A solução para órgãos públicos que a SETE TECH entregou superou todas as expectativas. Transparência e eficiência em um só sistema.",
    image: "",
    name: "Rafael Torres",
    role: "Gestor de TI · Prefeitura Municipal",
  },
  {
    text: "Do zero ao lançamento em 3 meses. A SETE TECH transformou nossa ideia em produto real com qualidade de mercado nacional.",
    image: "",
    name: "Ana Lima",
    role: "CEO · StartupPI",
  },
  {
    text: "A automação dos nossos processos com IA reduziu em 40% o tempo da equipe em tarefas repetitivas. Resultado imediato.",
    image: "",
    name: "Marcos Oliveira",
    role: "Diretor · SETE Esportivo",
  },
  {
    text: "O trabalho de marketing digital triplicou nosso tráfego orgânico em 4 meses. ROI incrível e equipe sempre disponível.",
    image: "",
    name: "Juliana Costa",
    role: "CMO · E-commerce Piauí",
  },
  {
    text: "Infraestrutura cloud robusta e segura. A SETE TECH entende de tecnologia de verdade e entrega com responsabilidade.",
    image: "",
    name: "Pedro Nunes",
    role: "CTO · Fintech NE",
  },
]

const firstColumn = testimonials.slice(0, 2)
const secondColumn = testimonials.slice(2, 4)
const thirdColumn = testimonials.slice(4, 6)

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

      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
      </div>
    </section>
  )
}
