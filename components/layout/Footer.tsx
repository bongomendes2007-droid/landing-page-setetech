'use client'

import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Serviços',    href: '#servicos' },
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Equipe',      href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato',     href: '#contato' },
]

const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/setetech',
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/setetech',
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5586999999999',
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D0D0D' }}>
      <div
        className="py-16 px-8 md:px-16 lg:px-24"
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

          {/* Col 1 — Mapa do site */}
          <div className="mb-10 md:mb-0">
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
            }}>
              Mapa
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '14px',
                      color: '#9CA3AF',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#9CA3AF' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — Redes Sociais + Fale Conosco */}
          <div className="mb-10 md:mb-0">
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
            }}>
              Redes Sociais
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '14px',
                      color: '#9CA3AF',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#9CA3AF' }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
            }}>
              Fale Conosco
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a
                  href="mailto:setetech.social@gmail.com"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#9CA3AF' }}
                >
                  setetech.social@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5586999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#9CA3AF' }}
                >
                  (86) 9 9999-9999
                </a>
              </li>
              <li style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                color: '#9CA3AF',
              }}>
                Teresina, Piauí — Brasil
              </li>
            </ul>
          </div>

          {/* Col 3 — Logo + Info (alinhado à direita no desktop) */}
          <div className="flex flex-col items-center md:items-end mb-10 md:mb-0">
            <Link href="/" className="mb-4 select-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm">
              <Image
                src="https://res.cloudinary.com/dnth1inmv/image/upload/v1781123099/logo_Sete_Tech_branco_1_abpxap.png"
                alt="SETE TECH"
                width={120}
                height={36}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              color: '#6B7280',
              textAlign: 'right',
              maxWidth: '240px',
              lineHeight: 1.6,
              marginBottom: '6px',
            }}>
              Tecnologia que move negócios regionais para o futuro.
            </p>
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              color: '#6B7280',
              textAlign: 'right',
            }}>
              Teresina, Piauí — Brasil
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-12 pt-6"
          style={{ borderTop: '1px solid #1F2937' }}
        >
          <p style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '12px',
            color: '#6B7280',
          }}>
            © 2025 SETE TECH. Todos os direitos reservados.
          </p>
          <p style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '12px',
            color: '#6B7280',
          }}>
            Feito em Teresina, PI
          </p>
        </div>
      </div>
    </footer>
  )
}
