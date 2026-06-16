'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const SERVICES = [
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641242/a_ttmcel.png',
    title: 'Desenvolvimento Web',
    description: 'Sites institucionais, e-commerces, sistemas e aplicações web de alta performance com as tecnologias mais modernas do mercado.',
    href: '#contato',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/d_uotp4b.png',
    title: 'Automação & IA',
    description: 'Fluxos inteligentes, chatbots, processamento de dados e integração de modelos de IA para otimizar seus processos operacionais.',
    href: '#contato',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/b_gtvw5j.png',
    title: 'Marketing Digital',
    description: 'SEO, tráfego pago, social media e estratégias de crescimento digital focadas em geração de leads e conversão.',
    href: '#contato',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/c_garuyh.png',
    title: 'Identidade Visual & Design',
    description: 'Criação de marcas, logos, materiais gráficos e interfaces digitais que comunicam profissionalismo e geram reconhecimento para o seu negócio.',
    href: '#contato',
  },
  {
    image: 'https://res.cloudinary.com/dnth1inmv/image/upload/v1781641243/e_aldwv5.png',
    title: 'Soluções para Órgãos Públicos',
    description: 'Sistemas de gestão, portais de transparência, automação de serviços públicos e conformidade com LGPD para municípios e órgãos estaduais.',
    href: '#contato',
  },
]

interface ServiceItem {
  image: string
  title: string
  description: string
  href: string
}

function ServiceCard({ s, priority }: { s: ServiceItem; priority: boolean }) {
  return (
    <div className="group flex flex-col rounded-[28px] border border-white/10 bg-[#161616] shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
      <div className="relative h-52 w-full overflow-hidden rounded-[20px] flex-shrink-0">
        <Image
          src={s.image}
          alt={s.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />
      </div>
      <div className="flex flex-col flex-grow px-2 pt-5 pb-3">
        <h3 className="text-base font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>
          {s.title}
        </h3>
        <p className="mt-2 text-[13px] text-white/60 leading-relaxed line-clamp-3 flex-grow" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          {s.description}
        </p>
        <a
          href={s.href}
          className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#A100FF] group-hover:text-[#D600FF] group-hover:gap-2 transition-all w-fit focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2 rounded"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          Saiba mais <span>→</span>
        </a>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden rounded-b-[40px]"
      style={{
        background: '#FFF7EA',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#6A00FF] mb-3"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            O QUE FAZEMOS
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              color: '#0D0D0D',
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <ServiceCard s={s} priority={i < 3} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
