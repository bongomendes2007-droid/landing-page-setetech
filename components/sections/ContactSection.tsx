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
  { value: '', label: 'Selecione um serviço (opcional)' },
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
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      <AuroraBackground />

      <div className="relative z-10 max-w-2xl mx-auto text-center mb-14">
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}
        >
          VAMOS CONVERSAR
        </span>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-text)' }}
        >
          Pronto para transformar <br className="hidden md:block" />
          <span className="gradient-text">seu negócio?</span>
        </h2>
        <p
          className="text-base"
          style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-muted)' }}
        >
          Fale com nossos especialistas em Teresina, PI. Resposta em até 24 horas.
        </p>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); void handleSubmit() }}
        className="relative z-10 max-w-2xl mx-auto rounded-2xl p-8 flex flex-col gap-5"
        style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
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
            {errors.name && <p className="text-xs mt-1" style={{ color: '#ff6b6b' }}>{errors.name}</p>}
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
            {errors.email && <p className="text-xs mt-1" style={{ color: '#ff6b6b' }}>{errors.email}</p>}
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
            {errors.phone && <p className="text-xs mt-1" style={{ color: '#ff6b6b' }}>{errors.phone}</p>}
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
          {errors.subject && <p className="text-xs mt-1" style={{ color: '#ff6b6b' }}>{errors.subject}</p>}
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
          {errors.message && <p className="text-xs mt-1" style={{ color: '#ff6b6b' }}>{errors.message}</p>}
        </div>

        {status === 'success' && (
          <p
            className="text-sm font-medium text-center py-3 rounded-xl"
            style={{ background: 'rgba(128,240,160,0.12)', color: 'var(--color-accent)', border: '1px solid rgba(128,240,160,0.2)' }}
          >
            ✓ Mensagem enviada! Entraremos em contato em breve.
          </p>
        )}
        {status === 'error' && !Object.keys(errors).length && (
          <p
            className="text-sm font-medium text-center py-3 rounded-xl"
            style={{ background: 'rgba(255,80,80,0.08)', color: '#ff6b6b', border: '1px solid rgba(255,80,80,0.2)' }}
          >
            Erro ao enviar. Tente novamente ou fale pelo WhatsApp.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{
            background: 'var(--gradient-accent)',
            color: '#0D1F23',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </section>
  )
}
