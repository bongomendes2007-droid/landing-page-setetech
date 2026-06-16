import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/providers/LenisProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | SETE TECH',
    default: 'SETE TECH — Tecnologia que move negócios para o futuro',
  },
  description:
    'SETE TECH é a parceira estratégica de tecnologia para empresas e órgãos públicos em Teresina, Piauí. Web, IA, Infraestrutura, Marketing Digital e GovTech.',
  keywords: [
    'agência de tecnologia Teresina',
    'desenvolvimento web Piauí',
    'inteligência artificial',
    'GovTech',
    'transformação digital',
    'SETE TECH',
    'B2B',
  ],
  authors: [{ name: 'SETE TECH', url: 'https://setetech.com.br' }],
  metadataBase: new URL('https://setetech.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'SETE TECH',
    title: 'SETE TECH — Tecnologia que move negócios para o futuro',
    description: 'Soluções digitais completas para empresas e órgãos públicos em Teresina, PI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SETE TECH',
    description: 'Tecnologia que move negócios para o futuro.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${syne.variable} ${dmSans.variable} ${dmSerifDisplay.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <LenisProvider>
          <Navbar />
          <main className="flex-1 overflow-x-clip">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  )
}
