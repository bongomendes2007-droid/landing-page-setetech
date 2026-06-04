import type { Metadata } from 'next'
import { team } from '@/lib/data/team'
import TeamMemberCard from '@/components/shared/TeamMemberCard'
import SectionHeading from '@/components/shared/SectionHeading'
import CallToAction from '@/components/sections/CallToAction'
import { Users, Target, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nossa Equipe',
  description:
    'Conheça os fundadores da SETE TECH: George, Leo, Lages e Amadeu — especialistas em tecnologia, design e crescimento digital.',
}

export default function EquipePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
            Quem somos
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
            A equipe por trás da{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              SETE TECH
            </span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Quatro especialistas com visões complementares, unidos pelo propósito de entregar
            tecnologia que realmente funciona para o negócio dos clientes.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-slate-50" aria-label="Membros da equipe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <TeamMemberCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white" aria-labelledby="values-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nosso Jeito"
            title="O que nos move como equipe"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Orientados a resultados',
                description:
                  'Cada linha de código, cada campanha e cada design existe para gerar um resultado real e mensurável para o seu negócio.',
              },
              {
                icon: Heart,
                title: 'Parceria de verdade',
                description:
                  'Não somos fornecedores. Somos parceiros que se importam com o sucesso do seu negócio tanto quanto você.',
              },
              {
                icon: Users,
                title: 'Comunicação honesta',
                description:
                  'Dizemos o que é viável, o que não é, e o que realmente vai resolver o problema — sem promessas vazias.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
