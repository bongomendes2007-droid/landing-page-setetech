import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/data/services'
import ServiceCard from '@/components/shared/ServiceCard'
import SectionHeading from '@/components/shared/SectionHeading'

export default function ServicesHighlight() {
  const highlighted = services.slice(0, 4)

  return (
    <section className="py-24 bg-slate-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Nossos Serviços"
          title="7 pilares para transformar seu negócio"
          description="Da estratégia à execução, cobrimos todas as dimensões da tecnologia que sua empresa precisa para crescer com segurança."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {highlighted.map((service, i) => (
            <ServiceCard key={service.id} service={service} variant="compact" index={i} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-sm border border-blue-200 hover:border-blue-400 px-6 py-3 rounded-xl transition-all duration-200"
          >
            Ver todos os 7 serviços
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
