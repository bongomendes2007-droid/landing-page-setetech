import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    shortDescription: 'Sites e sistemas web modernos, rápidos e escaláveis.',
    fullDescription:
      'Criamos aplicações web de alto desempenho utilizando as tecnologias mais modernas do mercado. Do MVP ao produto enterprise, entregamos código limpo, escalável e orientado a resultados reais de negócio.',
    features: [
      'Next.js, React e TypeScript',
      'APIs RESTful e GraphQL',
      'Integrações com ERPs e CRMs',
      'Performance Lighthouse > 90',
      'Deploy automatizado (CI/CD)',
    ],
    icon: 'Globe',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 'design',
    title: 'Design & UX',
    shortDescription: 'Interfaces que convertem visitantes em clientes.',
    fullDescription:
      'Design estratégico alinhado com os objetivos do seu negócio. Criamos experiências digitais que encantam usuários e geram resultados mensuráveis, seguindo princípios de acessibilidade e usabilidade.',
    features: [
      'Design System personalizado',
      'Prototipagem em Figma',
      'UX Research e testes de usabilidade',
      'Identidade visual e branding',
      'WCAG 2.1 compliance',
    ],
    icon: 'Palette',
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 'ia',
    title: 'Inteligência Artificial',
    shortDescription: 'Automação inteligente e soluções com IA generativa.',
    fullDescription:
      'Implementamos soluções de IA que transformam processos manuais em fluxos automatizados e inteligentes. De chatbots a sistemas de análise preditiva, conectamos a IA ao contexto real do seu negócio.',
    features: [
      'Chatbots e assistentes virtuais',
      'Análise preditiva de dados',
      'Integração com LLMs (GPT, Claude)',
      'Automação de processos (RPA)',
      'IA generativa para conteúdo',
    ],
    icon: 'Brain',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'infra',
    title: 'Infraestrutura & Cloud',
    shortDescription: 'Infraestrutura robusta, segura e econômica na nuvem.',
    fullDescription:
      'Projetamos e gerenciamos infraestruturas cloud que garantem disponibilidade, segurança e custo-eficiência. Seja na AWS, GCP ou Azure, entregamos ambientes prontos para o crescimento do seu negócio.',
    features: [
      'AWS, GCP e Azure',
      'Kubernetes e Docker',
      'Monitoramento e alertas 24/7',
      'Backup e disaster recovery',
      'Otimização de custos cloud',
    ],
    icon: 'Server',
    color: 'from-blue-700 to-blue-900',
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    shortDescription: 'Estratégias digitais orientadas por dados e resultados.',
    fullDescription:
      'Marketing que vai além de métricas de vaidade. Criamos estratégias integradas de conteúdo, SEO, tráfego pago e automação que geram leads qualificados e crescimento sustentável para o seu negócio.',
    features: [
      'SEO técnico e de conteúdo',
      'Google Ads e Meta Ads',
      'Email marketing e automação',
      'Analytics e relatórios customizados',
      'Gestão de redes sociais',
    ],
    icon: 'TrendingUp',
    color: 'from-emerald-500 to-cyan-600',
  },
  {
    id: 'govtech',
    title: 'GovTech',
    shortDescription: 'Tecnologia para modernizar a gestão pública.',
    fullDescription:
      'Especialistas em soluções tecnológicas para o setor público. Desenvolvemos sistemas que aumentam a eficiência administrativa, melhoram o atendimento ao cidadão e garantem conformidade com a LGPD e as normas de transparência.',
    features: [
      'Portais de transparência',
      'Sistemas de protocolo digital',
      'Integração com gov.br e ConectaGov',
      'LGPD e segurança da informação',
      'Licitações e contratos eletrônicos',
    ],
    icon: 'Landmark',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'gestao',
    title: 'Gestão & Consultoria',
    shortDescription: 'Diagnóstico honesto e transformação digital estratégica.',
    fullDescription:
      'Antes de qualquer linha de código, entendemos profundamente o seu negócio. Nossa consultoria mapeia gargalos, define prioridades e cria um roadmap de tecnologia alinhado com seus objetivos estratégicos e orçamento.',
    features: [
      'Diagnóstico de maturidade digital',
      'Roadmap de transformação digital',
      'Gestão de projetos ágeis (Scrum/Kanban)',
      'Treinamento e capacitação de equipes',
      'KPIs e OKRs de tecnologia',
    ],
    icon: 'LayoutDashboard',
    color: 'from-slate-600 to-blue-700',
  },
]
