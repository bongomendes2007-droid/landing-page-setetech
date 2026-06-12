'use client'

import { useState } from 'react'
import AuroraBackground from '@/components/ui/AuroraBackground'

interface FormData {
  name: string
  email: string
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

const WHATSAPP_URL = 'https://wa.me/5586999999999'
const EMAIL = 'setetech.social@gmail.com'

const EMPTY_FORM: FormData = { name: '', email: '', message: '', serviceInterest: '' }

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleChange(e: { target: { name: string; value: string } }) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
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
        setForm(EMPTY_FORM)
      } else {
        if (data.details) {
          setErrors(
            Object.fromEntries(
              Object.entries(data.details).map(([k, v]) => [k, (v as string[])[0]])
            )
          )
        }
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

  function onInputFocus(e: { target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement }) {
    e.target.style.borderColor = 'var(--color-accent2)'
    e.target.style.outline = '2px solid var(--color-accent)'
    e.target.style.outlineOffset = '2px'
  }
  function onInputBlur(e: { target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement }, field: string) {
    e.target.style.borderColor = errors[field] ? '#ff6b6b' : 'var(--color-border)'
    e.target.style.outline = 'none'
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

      {/* Grid: form + sidebar */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">

          {/* Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); void handleSubmit() }}
            className="rounded-2xl flex flex-col gap-5"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              padding: '32px',
            }}
            noValidate
          >
            {/* Nome + E-mail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>Nome *</label>
                <input
                  type="text" name="name" required
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={handleChange}
                  style={baseInput}
                  onFocus={onInputFocus}
                  onBlur={(e) => onInputBlur(e, 'name')}
                />
                {errors.name && <p className="text-xs" style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.name}</p>}
              </div>
              <div>
                <label style={labelStyle}>E-mail *</label>
                <input
                  type="email" name="email" required
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  style={baseInput}
                  onFocus={onInputFocus}
                  onBlur={(e) => onInputBlur(e, 'email')}
                />
                {errors.email && <p className="text-xs" style={{ color: '#ff6b6b', marginTop: '4px' }}>{errors.email}</p>}
              </div>
            </div>

            {/* Serviço */}
            <div>
              <label style={labelStyle}>Serviço de interesse</label>
              <select
                name="serviceInterest"
                value={form.serviceInterest}
                onChange={handleChange}
                style={{ ...baseInput, cursor: 'pointer' }}
                onFocus={onInputFocus}
                onBlur={(e) => onInputBlur(e, 'serviceInterest')}
              >
                {SERVICES.map((s) => (
                  <option key={s.value} value={s.value} style={{ background: 'var(--color-card)' }}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mensagem */}
            <div>
              <label style={labelStyle}>Mensagem *</label>
              <textarea
                name="message" required rows={5}
                placeholder="Descreva seu projeto ou necessidade em detalhes..."
                value={form.message}
                onChange={handleChange}
                style={{ ...baseInput, resize: 'vertical', lineHeight: 1.6 }}
                onFocus={onInputFocus}
                onBlur={(e) => onInputBlur(e, 'message')}
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
              className="w-full rounded-full font-semibold text-sm hover:opacity-90 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2 active:scale-[0.97]"
              style={{
                background: 'var(--gradient-accent)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-dm-sans)',
                padding: '14px',
                transition: 'opacity 0.2s, transform 0.16s cubic-bezier(0.23,1,0.32,1)',
              }}
            >
              {status === 'loading' ? 'Enviando...' : 'Solicitar proposta gratuita'}
            </button>
          </form>

          {/* Contact sidebar */}
          <aside
            className="rounded-2xl flex flex-col gap-4"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              padding: '28px',
            }}
          >
            <div style={{ marginBottom: '4px' }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', fontWeight: 700, color: 'var(--color-text)', marginBottom: '6px' }}>
                Fale diretamente conosco
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--color-subtle)' }}>
                Prefere um canal direto? Escolha abaixo.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl p-3 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
              style={{ background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.2)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(37,211,102,0.12)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(37,211,102,0.9)" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: 'rgba(37,211,102,0.8)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>WhatsApp</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>(86) 9 9999-9999</p>
              </div>
            </a>

            {/* E-mail */}
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-xl p-3 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
              style={{ background: 'rgba(161,0,255,0.06)', border: '1px solid rgba(161,0,255,0.15)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(161,0,255,0.1)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A100FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="min-w-0">
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>E-mail</p>
                <p className="truncate" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>{EMAIL}</p>
              </div>
            </a>

            {/* Localização */}
            <div
              className="flex items-center gap-3 rounded-xl p-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: 'var(--color-subtle)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Localização</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>Teresina, Piauí — Brasil</p>
              </div>
            </div>

            {/* Tempo de resposta */}
            <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(161,0,255,0.08)', border: '1px solid rgba(161,0,255,0.15)' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--color-muted)' }}>
                Resposta em até{' '}
                <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>24 horas</span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
