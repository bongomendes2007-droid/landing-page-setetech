import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Handshake, Eye } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a história, os valores e a visão da SETE TECH — tecnologia com propósito, foco em resultados duradouros.',
}

const values = [
  {
    icon: Eye,
    title: 'Transparência',
    description:
      'Diagnóstico honesto antes de qualquer proposta. Dizemos exatamente o que encontramos, o que é possível e o que o cliente realmente precisa.',
  },
  {
    icon: Zap,
    title: 'Excelência Técnica',
    description:
      'Código limpo, arquiteturas escaláveis e tecnologias modernas. Não entregamos atalhos que viram problemas futuros.',
  },
  {
    icon: Handshake,
    title: 'Parceria Real',
    description:
      'Não somos fornecedores pontuais. Nos tornamos parte do crescimento do cliente, com suporte contínuo e evolução constante.',
  },
  {
    icon: Shield,
    title: 'Responsabilidade',
    description:
      'Assumimos o que prometemos e somos responsáveis pelos resultados. Se não está funcionando, mudamos a rota juntos.',
  },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
            Nossa história
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
            Tecnologia com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              propósito e resultado
            </span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            A SETE TECH nasceu da insatisfação com agências que entregam projetos bonitos mas sem
            impacto real no negócio do cliente.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 id="story-heading" className="text-3xl font-bold text-slate-900 mb-8">
              Como tudo começou
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                A SETE TECH nasceu da frustração de quatro especialistas que, atuando em diferentes
                frentes da tecnologia, identificaram o mesmo padrão repetindo-se no mercado: empresas
                investindo em tecnologia sem saber se ela realmente resolvia seu problema, e agências
                entregando soluções bonitas que não geravam resultados mensuráveis.
              </p>
              <p>
                O nome <strong className="text-slate-900">SETE</strong> representa os 7 pilares de
                serviço que estruturam nossa atuação — Web, Design, IA, Infraestrutura, Marketing,
                GovTech e Gestão — mas também simboliza a completude: uma agência que cobre todas as
                dimensões da tecnologia que uma empresa precisa para crescer.
              </p>
              <p>
                Nossa abordagem começa sempre com um diagnóstico honesto. Antes de qualquer proposta
                ou linha de código, mergulhamos no contexto do cliente, entendemos o negócio, os
                gargalos reais e o que vai gerar o maior impacto com o menor risco.
              </p>
              <p>
                Trabalhamos com empresas privadas e setor público, construindo soluções que escalam
                com o crescimento do cliente e parcerias que duram além da entrega do projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nossos Valores"
            title="O que define nossa cultura"
            description="Esses não são valores de parede. São os critérios que usamos para tomar decisões todos os dias."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-slate-200 flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-950 text-white" aria-labelledby="vision-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-blue-300 uppercase tracking-widest mb-4">
            Nossa Visão
          </span>
          <h2 id="vision-heading" className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
            Ser a referência em tecnologia B2B com impacto real
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed mb-10">
            Nossa missão é provar que é possível entregar tecnologia de alto nível com honestidade,
            parceria e foco total nos resultados que importam para o negócio do cliente — não nos
            que ficam bem no portfólio.
          </p>
          <Link
            href="/equipe"
            className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-colors duration-200"
          >
            Conhecer a equipe
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
