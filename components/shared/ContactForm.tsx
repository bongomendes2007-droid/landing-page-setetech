'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { contactSchema, ContactSchema } from '@/lib/validations/contact'

const serviceOptions = [
  { value: '', label: 'Selecione um serviço (opcional)' },
  { value: 'web', label: 'Desenvolvimento Web' },
  { value: 'design', label: 'Design & UX' },
  { value: 'ia', label: 'Inteligência Artificial' },
  { value: 'infra', label: 'Infraestrutura & Cloud' },
  { value: 'marketing', label: 'Marketing Digital' },
  { value: 'govtech', label: 'GovTech' },
  { value: 'gestao', label: 'Gestão & Consultoria' },
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactSchema) {
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json() as { error?: string }
        throw new Error(json.error ?? 'Erro desconhecido')
      }

      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Erro ao enviar mensagem.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle2 className="w-16 h-16 text-violet-500 mb-4" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Mensagem enviada!</h3>
        <p className="text-slate-600 max-w-sm">
          Obrigado pelo contato. Nossa equipe retornará em até 1 dia útil.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-blue-700 hover:text-blue-800 font-medium text-sm underline underline-offset-4"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Formulário de contato">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="sm:col-span-1">
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Nome <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Seu nome completo"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-blue-500/30 ${
              errors.name
                ? 'border-red-400 bg-red-50'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:border-blue-500'
            }`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            E-mail <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="seu@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-blue-500/30 ${
              errors.email
                ? 'border-red-400 bg-red-50'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:border-blue-500'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Telefone / WhatsApp <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            {...register('phone')}
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-blue-500/30 ${
              errors.phone
                ? 'border-red-400 bg-red-50'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:border-blue-500'
            }`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
            Empresa
          </label>
          <input
            {...register('company')}
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Nome da sua empresa (opcional)"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white hover:border-slate-400 focus:border-blue-500 text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-blue-500/30"
          />
        </div>

        {/* Service Interest */}
        <div className="sm:col-span-2">
          <label htmlFor="serviceInterest" className="block text-sm font-medium text-slate-700 mb-1.5">
            Serviço de interesse
          </label>
          <select
            {...register('serviceInterest')}
            id="serviceInterest"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white hover:border-slate-400 focus:border-blue-500 text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-blue-500/30 text-slate-700"
          >
            {serviceOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
            Assunto <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            {...register('subject')}
            id="subject"
            type="text"
            placeholder="Resumo do que você precisa"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-blue-500/30 ${
              errors.subject
                ? 'border-red-400 bg-red-50'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:border-blue-500'
            }`}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Mensagem <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            placeholder="Descreva seu projeto, dúvida ou desafio..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-blue-500/30 resize-none ${
              errors.message
                ? 'border-red-400 bg-red-50'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:border-blue-500'
            }`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-sm"
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          'Enviar mensagem'
        )}
      </button>
    </form>
  )
}
