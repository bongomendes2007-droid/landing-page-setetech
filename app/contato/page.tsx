import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a SETE TECH. Solicite um diagnóstico gratuito para o seu negócio.',
}

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
            Fale conosco
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
            Vamos conversar sobre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              o seu projeto
            </span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Sem compromisso, sem jargões. Conte-nos o que você precisa e faremos um diagnóstico
            honesto sobre como podemos ajudar.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-slate-50" aria-label="Formulário e informações de contato">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <aside className="lg:col-span-1 space-y-6" aria-label="Informações de contato">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Informações de contato</h2>

                <ul className="space-y-4" role="list">
                  <li>
                    <a
                      href="mailto:setetech.social@gmail.com"
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                        <Mail className="w-5 h-5 text-blue-700" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                          E-mail
                        </p>
                        <p className="text-sm font-medium text-slate-900">setetech.social@gmail.com</p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href="tel:+5500000000000"
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                        <Phone className="w-5 h-5 text-blue-700" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                          Telefone / WhatsApp
                        </p>
                        <p className="text-sm font-medium text-slate-900">+55 (00) 00000-0000</p>
                      </div>
                    </a>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-700" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                        Localização
                      </p>
                      <p className="text-sm font-medium text-slate-900">Brasil — Atendimento remoto</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-700" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                        Horário de atendimento
                      </p>
                      <p className="text-sm font-medium text-slate-900">Seg–Sex, 9h–18h</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-2">Resposta rápida</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Respondemos a todos os contatos em até{' '}
                  <strong className="text-white">1 dia útil</strong>. Para urgências, entre em
                  contato pelo WhatsApp.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Envie sua mensagem</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
