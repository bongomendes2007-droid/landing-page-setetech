import nodemailer from 'nodemailer'
import { ContactSchema } from './validations/contact'

export async function sendContactEmail(data: ContactSchema): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const serviceLabels: Record<string, string> = {
    web: 'Desenvolvimento Web',
    design: 'Design & UX',
    ia: 'Inteligência Artificial',
    infra: 'Infraestrutura & Cloud',
    marketing: 'Marketing Digital',
    govtech: 'GovTech',
    gestao: 'Gestão & Consultoria',
  }

  const serviceLabel = data.serviceInterest
    ? serviceLabels[data.serviceInterest] ?? 'Não especificado'
    : 'Não especificado'

  const emailSubject = data.subject
    ? `[SETE TECH] ${data.subject}`
    : `[SETE TECH] Nova mensagem de ${data.name}`

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
      <div style="background: linear-gradient(135deg, #1e40af, #1e3a8a); padding: 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px;">Nova mensagem via site</h1>
        <p style="color: #93c5fd; margin: 8px 0 0; font-size: 14px;">SETE TECH — Formulário de Contato</p>
      </div>
      <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; color: #475569; font-size: 13px; width: 140px;">Nome</td><td style="padding: 8px 0; color: #0f172a;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #475569; font-size: 13px;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #1e40af;">${data.email}</a></td></tr>
          ${data.phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569; font-size: 13px;">Telefone</td><td style="padding: 8px 0; color: #0f172a;">${data.phone}</td></tr>` : ''}
          ${data.company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569; font-size: 13px;">Empresa</td><td style="padding: 8px 0; color: #0f172a;">${data.company}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; font-weight: bold; color: #475569; font-size: 13px;">Serviço</td><td style="padding: 8px 0; color: #0f172a;">${serviceLabel}</td></tr>
          ${data.subject ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569; font-size: 13px;">Assunto</td><td style="padding: 8px 0; color: #0f172a;">${data.subject}</td></tr>` : ''}
        </table>
        <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
          <p style="font-weight: bold; color: #475569; font-size: 13px; margin: 0 0 8px;">Mensagem</p>
          <p style="color: #0f172a; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"Site SETE TECH" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL ?? 'setetech.social@gmail.com',
    replyTo: data.email,
    subject: emailSubject,
    html,
  })
}
