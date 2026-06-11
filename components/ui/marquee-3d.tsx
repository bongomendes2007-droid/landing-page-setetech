"use client"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Carla Mendes",
    username: "Diretora Comercial · AGROSETE",
    body: "Em menos de 6 meses após o lançamento da plataforma, nossas vendas online cresceram 120%. A equipe da SETE TECH é extremamente comprometida.",
    img: "https://avatar.vercel.sh/carla",
  },
  {
    name: "Rafael Torres",
    username: "Gestor de TI · Prefeitura Municipal",
    body: "A solução para órgãos públicos que a SETE TECH entregou superou todas as expectativas. Transparência e eficiência em um só sistema.",
    img: "https://avatar.vercel.sh/rafael",
  },
  {
    name: "Ana Lima",
    username: "CEO · StartupPI",
    body: "Do zero ao lançamento em 3 meses. A SETE TECH transformou nossa ideia em produto real com qualidade de mercado nacional.",
    img: "https://avatar.vercel.sh/ana",
  },
  {
    name: "Marcos Oliveira",
    username: "Diretor · SETE Esportivo",
    body: "A automação dos nossos processos com IA reduziu em 40% o tempo da equipe em tarefas repetitivas. Resultado imediato.",
    img: "https://avatar.vercel.sh/marcos",
  },
  {
    name: "Juliana Costa",
    username: "CMO · E-commerce Piauí",
    body: "O trabalho de marketing digital triplicou nosso tráfego orgânico em 4 meses. ROI incrível e equipe sempre disponível.",
    img: "https://avatar.vercel.sh/juliana",
  },
  {
    name: "Pedro Nunes",
    username: "CTO · Fintech NE",
    body: "Infraestrutura cloud robusta e segura. A SETE TECH entende de tecnologia de verdade e entrega com responsabilidade.",
    img: "https://avatar.vercel.sh/pedro",
  },
]

const col1 = reviews.slice(0, 2)
const col2 = reviews.slice(2, 4)
const col3 = reviews.slice(4, 6)
const col4 = reviews.slice(0, 2)

const ReviewCard = ({ img, name, username, body }: {
  img: string; name: string; username: string; body: string
}) => {
  return (
    <figure className={cn(
      "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
      "border-[#6A00FF]/20 bg-[#1A0033]/60 hover:bg-[#1A0033]",
      "transition-colors duration-200"
    )}>
      <div className="flex flex-row items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{name}</figcaption>
          <p className="text-xs text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/80">{body}</blockquote>
    </figure>
  )
}

export function Marquee3D() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:400px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform: "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {col1.map((r) => <ReviewCard key={r.username} {...r} />)}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {col2.map((r) => <ReviewCard key={r.username} {...r} />)}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {col3.map((r) => <ReviewCard key={r.username} {...r} />)}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {col4.map((r) => <ReviewCard key={r.username} {...r} />)}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0D0D0D]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0D0D0D]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0D0D0D]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0D0D0D]" />
    </div>
  )
}
