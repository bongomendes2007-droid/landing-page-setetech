'use client'

import { useState } from 'react'

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
    border: '1px solid rgba(0,0,0,0.10)',
    background: 'rgba(0,0,0,0.05)',
    color: '#0D0D0D',
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '14px',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(0,0,0,0.60)',
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
    e.target.style.borderColor = errors[field] ? '#ff6b6b' : 'rgba(0,0,0,0.10)'
    e.target.style.outline = 'none'
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32 pb-32 md:pb-40"
      style={{
        background: '#FFF7EA',
        paddingLeft: 'clamp(32px, 8vw, 96px)',
        paddingRight: 'clamp(32px, 8vw, 96px)',
      }}
    >
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
            color: '#D600FF',
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
            color: '#0D0D0D',
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
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(0,0,0,0.60)' }}>
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
              background: 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.10)',
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
                  <option key={s.value} value={s.value} style={{ background: '#FFF7EA', color: '#0D0D0D' }}>
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
                  background: 'rgba(161,0,255,0.08)',
                  color: '#6A00FF',
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
              className="w-full rounded-full font-bold text-sm bg-[#6A00FF] text-white hover:bg-[#A100FF] disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-[#6A00FF] focus-visible:outline-offset-2 active:scale-[0.97]"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                padding: '14px',
                transition: 'background 0.2s, opacity 0.2s, transform 0.16s cubic-bezier(0.23,1,0.32,1)',
              }}
            >
              {status === 'loading' ? 'Enviando...' : 'Solicitar proposta gratuita'}
            </button>
          </form>

          {/* Contact sidebar */}
          <aside
            className="rounded-2xl flex flex-col gap-4"
            style={{
              background: 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.10)',
              padding: '28px',
            }}
          >
            <div style={{ marginBottom: '4px' }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', fontWeight: 700, color: '#0D0D0D', marginBottom: '6px' }}>
                Fale diretamente conosco
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'rgba(0,0,0,0.60)' }}>
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://res.cloudinary.com/dnth1inmv/image/upload/v1781813067/d360774a5ef568618e14b338b4bed1ef-removebg-preview_iea2xy.png" width="32" height="32" alt="WhatsApp" style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: 'rgba(37,211,102,0.8)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>WhatsApp</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: '#0D0D0D' }}>(86) 99408-8440</p>
              </div>
            </a>

            {/* E-mail */}
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-xl p-3 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
              style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.10)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,0,0,0.04)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://res.cloudinary.com/dnth1inmv/image/upload/v1781813118/0f6a4fc72febde70027d518262575048-removebg-preview_rkvr3z.png" width="32" height="32" alt="Email" style={{ objectFit: 'contain' }} />
              </div>
              <div className="min-w-0">
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#A100FF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>E-mail</p>
                <p className="truncate" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: '#0D0D0D' }}>{EMAIL}</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/setetech_oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl p-3 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[#A100FF] focus-visible:outline-offset-2"
              style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.10)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,0,0,0.04)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://res.cloudinary.com/dnth1inmv/image/upload/v1781813019/505d6847d25e8d18a449626cdfb17c82-removebg-preview_lfxzkp.png" width="32" height="32" alt="Instagram" style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: 'rgba(0,0,0,0.60)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Instagram</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: '#0D0D0D' }}>@setetech_oficial</p>
              </div>
            </a>

            {/* Tempo de resposta */}
            <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.10)' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'rgba(0,0,0,0.60)' }}>
                Resposta em até{' '}
                <span style={{ color: '#6A00FF', fontWeight: 700 }}>24 horas</span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}