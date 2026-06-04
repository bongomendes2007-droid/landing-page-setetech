import { TeamMember, Testimonial } from '@/types'

export const team: TeamMember[] = [
  {
    id: 'george',
    name: 'George',
    role: 'CEO & Arquiteto de Soluções',
    bio: 'Visionário estratégico com experiência em transformação digital para empresas privadas e setor público. Lidera a direção técnica e as parcerias estratégicas da SETE TECH.',
    photo: '/images/team/george.jpg',
    linkedin: 'https://linkedin.com',
    specialties: ['Arquitetura de Software', 'Estratégia Digital', 'GovTech', 'Liderança Técnica'],
  },
  {
    id: 'leo',
    name: 'Leo',
    role: 'CTO & Engenheiro Full-Stack',
    bio: 'Engenheiro apaixonado por código limpo e sistemas escaláveis. Especialista em Next.js, cloud e IA aplicada. Garante que cada entrega da SETE TECH seja tecnicamente impecável.',
    photo: '/images/team/leo.jpg',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    specialties: ['Next.js & React', 'Cloud & Infra', 'IA & Automação', 'DevOps'],
  },
  {
    id: 'lages',
    name: 'Lages',
    role: 'Head de Design & UX',
    bio: 'Designer estratégico que une estética e funcionalidade. Cria interfaces que encantam usuários e convertem visitantes em clientes, com foco total em acessibilidade e usabilidade.',
    photo: '/images/team/lages.jpg',
    linkedin: 'https://linkedin.com',
    specialties: ['UX/UI Design', 'Design Systems', 'Figma', 'Branding'],
  },
  {
    id: 'amadeu',
    name: 'Amadeu',
    role: 'Head de Marketing & Crescimento',
    bio: 'Especialista em marketing digital orientado por dados. Desenvolve estratégias integradas que geram leads qualificados e crescimento sustentável para os clientes da SETE TECH.',
    photo: '/images/team/amadeu.jpg',
    linkedin: 'https://linkedin.com',
    specialties: ['Marketing Digital', 'SEO', 'Growth Hacking', 'Analytics'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    company: 'Prefeitura de Exemplo',
    role: 'Secretário de Tecnologia',
    message:
      'A SETE TECH transformou nosso portal de transparência. O diagnóstico honesto deles nos poupou meses de retrabalho e o resultado superou todas as expectativas.',
  },
  {
    id: '2',
    name: 'Ana Paula Souza',
    company: 'TechCorp Brasil',
    role: 'Diretora de Operações',
    message:
      'Buscávamos um parceiro técnico de longo prazo, não apenas um fornecedor. A SETE TECH é exatamente isso: parceiros que entendem nosso negócio e entregam resultados reais.',
  },
  {
    id: '3',
    name: 'Roberto Lima',
    company: 'Startup Fintech',
    role: 'Fundador & CEO',
    message:
      'Em 3 meses, o MVP que a SETE TECH desenvolveu atraiu nossos primeiros investidores. Código de qualidade, entregas no prazo e suporte real quando precisamos.',
  },
]
