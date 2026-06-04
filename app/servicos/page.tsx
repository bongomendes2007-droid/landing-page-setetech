import type { Metadata } from 'next'
import { services } from '@/lib/data/services'
import ServiceCard from '@/components/shared/ServiceCard'
import SectionHeading from '@/components/shared/SectionHeading'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Conheça os 7 pilares de serviço da SETE TECH: Web, Design, IA, Infra, Marketing, GovTech e Gestão.',
}

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
            O que fazemos
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
            7 pilares para transformar
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              seu negócio com tecnologia
            </span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Cobrimos todas as dimensões da tecnologia que sua empresa precisa — da estratégia à
            execução, com suporte real em cada etapa.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-slate-50" aria-label="Lista de serviços">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={service.id} id={service.id}>
                <ServiceCard service={service} variant="full" index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 bg-white" aria-labelledby="process-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nossa Metodologia"
            title="Como trabalhamos"
            description="Um processo transparente, orientado por resultados e sem surpresas."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Diagnóstico',
                description:
                  'Entendemos seu negócio, mapeamos gargalos e identificamos as reais necessidades antes de qualquer proposta.',
              },
              {
                step: '02',
                title: 'Estratégia',
                description:
                  'Definimos juntos o roadmap, prioridades e métricas de sucesso alinhadas com seus objetivos.',
              },
              {
                step: '03',
                title: 'Execução',
                description:
                  'Implementamos com metodologia ágil, entregas incrementais e comunicação transparente durante todo o processo.',
              },
              {
                step: '04',
                title: 'Evolução',
                description:
                  'Monitoramos resultados, ajustamos a rota e continuamos ao seu lado no longo prazo.',
              },
            ].map(({ step, title, description }) => (
              <div
                key={step}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative"
              >
                <div className="text-5xl font-black text-blue-100 mb-3 leading-none">{step}</div>
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
