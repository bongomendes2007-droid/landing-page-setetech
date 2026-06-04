import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations/contact'
import { sendContactEmail } from '@/lib/mailer'

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    await sendContactEmail(parsed.data)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact-api]', err)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.' },
      { status: 500 }
    )
  }
}
