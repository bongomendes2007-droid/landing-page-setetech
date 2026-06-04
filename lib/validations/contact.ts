import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter ao menos 2 caracteres')
    .max(100, 'Nome muito longo'),
  email: z
    .string()
    .email('E-mail inválido')
    .max(200, 'E-mail muito longo'),
  phone: z
    .string()
    .min(10, 'Telefone inválido — inclua o DDD')
    .max(20, 'Telefone muito longo')
    .regex(/^[\d\s\(\)\-\+]+$/, 'Telefone deve conter apenas números, espaços e símbolos ( ) - +'),
  company: z.string().max(150, 'Nome da empresa muito longo').optional(),
  subject: z
    .string()
    .min(5, 'Assunto deve ter ao menos 5 caracteres')
    .max(200, 'Assunto muito longo'),
  message: z
    .string()
    .min(20, 'Mensagem deve ter ao menos 20 caracteres')
    .max(2000, 'Mensagem muito longa (máx. 2000 caracteres)'),
  serviceInterest: z
    .enum(['web', 'design', 'ia', 'infra', 'marketing', 'govtech', 'gestao', ''])
    .optional(),
})

export type ContactSchema = z.infer<typeof contactSchema>
