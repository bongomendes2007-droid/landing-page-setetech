import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | SETE TECH',
    default: 'SETE TECH — Tecnologia que entrega resultados que duram',
  },
  description:
    'A SETE TECH é a parceira estratégica de tecnologia para empresas privadas e setor público. Web, IA, Infra, Design, Marketing, GovTech e Gestão.',
  keywords: [
    'agência de tecnologia',
    'desenvolvimento web',
    'inteligência artificial',
    'GovTech',
    'transformação digital',
    'Next.js',
    'cloud',
    'B2B',
  ],
  authors: [{ name: 'SETE TECH', url: 'https://setetech.com.br' }],
  metadataBase: new URL('https://setetech.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'SETE TECH',
    title: 'SETE TECH — Tecnologia que entrega resultados que duram',
    description:
      'Parceira estratégica de tecnologia para empresas privadas e setor público.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SETE TECH',
    description: 'Tecnologia que entrega resultados que duram.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
