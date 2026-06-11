"use client"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Carla Mendes",
    username: "Diretora Comercial · AGROSETE",
    body: "Em menos de 6 meses após o lançamento da plataforma, nossas vendas online cresceram 120%. A equipe da SETE TECH é extremamente comprometida.",
  },
  {
    name: "Rafael Torres",
    username: "Gestor de TI · Prefeitura Municipal",
    body: "A solução para órgãos públicos que a SETE TECH entregou superou todas as expectativas. Transparência e eficiência em um só sistema.",
  },
  {
    name: "Ana Lima",
    username: "CEO · StartupPI",
    body: "Do zero ao lançamento em 3 meses. A SETE TECH transformou nossa ideia em produto real com qualidade de mercado nacional.",
  },
  {
    name: "Marcos Oliveira",
    username: "Diretor · SETE Esportivo",
    body: "A automação dos nossos processos com IA reduziu em 40% o tempo da equipe em tarefas repetitivas. Resultado imediato.",
  },
  {
    name: "Juliana Costa",
    username: "CMO · E-commerce Piauí",
    body: "O trabalho de marketing digital triplicou nosso tráfego orgânico em 4 meses. ROI incrível e equipe sempre disponível.",
  },
  {
    name: "Pedro Nunes",
    username: "CTO · Fintech NE",
    body: "Infraestrutura cloud robusta e segura. A SETE TECH entende de tecnologia de verdade e entrega com responsabilidade.",
  },
]

const col1 = [reviews[0], reviews[1], reviews[2]]
const col2 = [reviews[1], reviews[2], reviews[3]]
const col3 = [reviews[3], reviews[4], reviews[5]]

const ReviewCard = ({ name, username, body }: {
  name: string; username: string; body: string
}) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2)

  return (
    <figure className={cn(
      "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-5",
      "border-[#6A00FF]/20 bg-[#1A0033]/60 hover:bg-[#1A0033]",
      "transition-colors duration-200"
    )}>
      <div className="flex flex-row items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6A00FF] to-[#D600FF] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {initials}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-white">{name}</figcaption>
          <p className="text-xs text-white/60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-white/80">{body}</blockquote>
    </figure>
  )
}

export function Marquee3D() {
  return (
    <div className="relative flex h-[550px] w-full max-w-5xl mx-auto flex-row items-center justify-center gap-6 overflow-hidden [perspective:800px]">
      <div
        className="flex flex-row items-center gap-6"
        style={{
          transform: "rotateX(10deg) rotateZ(8deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:28s]">
          {col1.map((r) => <ReviewCard key={r.username} {...r} />)}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {col2.map((r) => <ReviewCard key={r.username} {...r} />)}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:35s]">
          {col3.map((r) => <ReviewCard key={r.username} {...r} />)}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#1A1A1A]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#1A1A1A]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#1A1A1A]" />
    </div>
  )
}
