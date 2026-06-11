'use client'

import { useState } from 'react'
import AuroraBackground from '@/components/ui/AuroraBackground'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  serviceInterest: string
}

const SERVICES = [
  { value: '',          label: 'Selecione um serviço (opcional)' },
  { value: 'web',       label: 'Desenvolvimento Web' },
  { value: 'design',    label: 'Design & UX' },
  { value: 'ia',        label: 'Automação & IA' },
  { value: 'infra',     label: 'Infraestrutura & Cloud' },
  { value: 'marketing', label: 'Marketing Digital' },
  { value: 'govtech',   label: 'GovTech' },
  { value: 'gestao',    label: 'Gestão & Consultoria' },
]

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', company: '',
    subject: '', message: '', serviceInterest: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  async function handleSubmit() {
    setStatus('loading')
    setErrors({})
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '', serviceInterest: '' })
      } else {
        if (data.details) setErrors(Object.fromEntries(Object.entries(data.details).map(([k, v]) => [k, (v as string[])[0]])))
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const baseInput: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid var(--color-border)',
    background: 'var(--color-card)',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--color-subtle)',
    fontFamily: 'var(--font-dm-sans)',
    display: 'block',
    marginBottom: '6px',
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-bg)',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
      <AuroraBackground />

      {/* Header */}
      <div
        className="relative z-10 text-center"
        style={{ maxWidth: '672px', margin: '0 auto', marginBottom: '56px' }}
      >
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
          VAMOS CONVERSAR
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            fontWeight: 400,
            color: 'var(--color-text)',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Pronto para transformar <br className="hidden md:block" />
          <em style={{
            fontStyle: 'italic',
            background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            seu negócio?
          </em>
        </h2>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'var(--color-muted)' }}>
          Fale com nossos especialistas em Teresina, PI. Resposta em até 24 horas.
        </p>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); void handleSubmit() }}
        className="relative z-10 rounded-2xl flex flex-col gap-5"
        style={{
          maxWidth: '672px',
          margin: '0 auto',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          padding: '32px',
        }}
        noValidate
      >
        {/* Row 1: Nome + E-mail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label style={labelStyle}>Nome *</label>
            <input
              type="text" name="name" required
              placeholder="Seu nome completo"
              value={form.name} onChange={handleChange}
              style={baseInput}
              onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent2)')}
              onBlur={(e) => (e.target.style.borderColor = errors.name ? '#ff6b6b' : 'var(--color-border)')}
            />
            {errors.name && <p className="text-xs" style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.name}</p>}
          </div>
          <div>
            <label style={labelStyle}>E-mail *</label>
            <input
              type="email" name="email" required
              placeholder="seu@email.com"
              value={form.email} onChange={handleChange}
              style={baseInput}
              onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent2)')}
              onBlur={(e) => (e.target.style.borderColor = errors.email ? '#ff6b6b' : 'var(--color-border)')}
            />
            {errors.email && <p className="text-xs" style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.email}</p>}
          </div>
        </div>

        {/* Row 2: Telefone + Empresa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label style={labelStyle}>Telefone *</label>
            <input
              type="tel" name="phone" required
              placeholder="(86) 9 9999-9999"
              value={form.phone} onChange={handleChange}
              style={baseInput}
              onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent2)')}
              onBlur={(e) => (e.target.style.borderColor = errors.phone ? '#ff6b6b' : 'var(--color-border)')}
            />
            {errors.phone && <p className="text-xs" style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.phone}</p>}
          </div>
          <div>
            <label style={labelStyle}>Empresa</label>
            <input
              type="text" name="company"
              placeholder="Nome da empresa (opcional)"
              value={form.company} onChange={handleChange}
              style={baseInput}
              onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent2)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
            />
          </div>
        </div>

        {/* Serviço */}
        <div>
          <label style={labelStyle}>Serviço de interesse</label>
          <select
            name="serviceInterest"
            value={form.serviceInterest} onChange={handleChange}
            style={{ ...baseInput, cursor: 'pointer' }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent2)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
          >
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value} style={{ background: 'var(--color-card)' }}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* Assunto */}
        <div>
          <label style={labelStyle}>Assunto *</label>
          <input
            type="text" name="subject" required
            placeholder="Ex: Desenvolvimento de sistema de gestão..."
            value={form.subject} onChange={handleChange}
            style={baseInput}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent2)')}
            onBlur={(e) => (e.target.style.borderColor = errors.subject ? '#ff6b6b' : 'var(--color-border)')}
          />
          {errors.subject && <p className="text-xs" style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.subject}</p>}
        </div>

        {/* Mensagem */}
        <div>
          <label style={labelStyle}>Mensagem *</label>
          <textarea
            name="message" required rows={5}
            placeholder="Descreva seu projeto ou necessidade em detalhes..."
            value={form.message} onChange={handleChange}
            style={{ ...baseInput, resize: 'vertical', lineHeight: 1.6 }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent2)')}
            onBlur={(e) => (e.target.style.borderColor = errors.message ? '#ff6b6b' : 'var(--color-border)')}
          />
          {errors.message && <p className="text-xs" style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.message}</p>}
        </div>

        {status === 'success' && (
          <p
            className="text-sm font-medium text-center rounded-xl"
            style={{
              background: 'rgba(161,0,255,0.12)',
              color: 'var(--color-accent)',
              border: '1px solid rgba(161,0,255,0.2)',
              padding: '12px',
            }}
          >
            ✓ Mensagem enviada! Entraremos em contato em breve.
          </p>
        )}
        {status === 'error' && !Object.keys(errors).length && (
          <p
            className="text-sm font-medium text-center rounded-xl"
            style={{
              background: 'rgba(255,80,80,0.08)',
              color: '#ff6b6b',
              border: '1px solid rgba(255,80,80,0.2)',
              padding: '12px',
            }}
          >
            Erro ao enviar. Tente novamente ou fale pelo WhatsApp.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-full font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{
            background: 'var(--gradient-accent)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-dm-sans)',
            padding: '14px',
          }}
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </section>
  )
}
