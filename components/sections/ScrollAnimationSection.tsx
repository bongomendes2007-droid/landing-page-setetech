"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

const CharacterV1 = ({ char, index, centerIndex, scrollYProgress }: {
  char: string; index: number; centerIndex: number; scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) => {
  const isSpace = char === " "
  const distanceFromCenter = index - centerIndex
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0])
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0])
  return (
    <motion.span
      className={cn("inline-block", isSpace && "w-4")}
      style={{ x, rotateX, color: '#ffffff' }}
    >
      {char}
    </motion.span>
  )
}

const CharacterV2 = ({ char, index, centerIndex, scrollYProgress }: {
  char: { src: string; alt: string }; index: number; centerIndex: number; scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) => {
  const distanceFromCenter = index - centerIndex
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 60, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 50, 0])
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <motion.img
      src={char.src}
      alt={char.alt}
      className="inline-block mx-4 h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
      style={{ x, scale, y, transformOrigin: "center" }}
    />
  )
}

const CharacterV3 = ({ char, index, centerIndex, scrollYProgress }: {
  char: string; index: number; centerIndex: number; scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) => {
  const distanceFromCenter = index - centerIndex
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0])
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 20, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1])
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <motion.img
      src={char}
      alt=""
      width={60}
      height={60}
      className="inline-block mx-2"
      style={{ x, rotate, y, scale, transformOrigin: "center" }}
    />
  )
}

const partnerLogos = [
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1779833548/setetvnews_color_branca_H_ggfybe.png",
    alt: "SETE TV NEWS",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1781123099/logo_Sete_Tech_branco_1_abpxap.png",
    alt: "SETE TECH",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1780281871/AGROSETE_LOGO_BRANCO_wzv6bi.png",
    alt: "AGROSETE",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1779833556/LOGO_sete_esportivo_xdhrdx.png",
    alt: "SETE Esportivo",
  },
]

const techIcons = [
  "https://cdn.simpleicons.org/react/white",
  "https://cdn.simpleicons.org/nextdotjs/white",
  "https://cdn.simpleicons.org/typescript/white",
  "https://cdn.simpleicons.org/nodedotjs/white",
  "https://cdn.simpleicons.org/python/white",
  "https://cdn.simpleicons.org/postgresql/white",
  "https://cdn.simpleicons.org/docker/white",
  "https://cdn.simpleicons.org/git/white",
  "https://cdn.simpleicons.org/github/white",
]

const text = "FEITO NO PIAUÍ"
const characters = text.split("")
const centerIndex = Math.floor(characters.length / 2)
const iconCenterIndex = Math.floor(techIcons.length / 2)

const Bracket = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" className={className}>
    <path fill="currentColor" d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"/>
  </svg>
)

export default function ScrollAnimationSection() {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)

  const { scrollYProgress: s1 } = useScroll({ target: ref1 })
  const { scrollYProgress: s2 } = useScroll({ target: ref2 })
  const { scrollYProgress: s3 } = useScroll({ target: ref3 })

  return (
    <div className="bg-[#0D0D0D]">

      {/* V1 — Texto se juntando */}
      <div
        ref={ref1}
        className="relative flex h-[210vh] items-center justify-center overflow-hidden"
      >
        <div
          className="w-full text-center text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter whitespace-nowrap overflow-visible"
          style={{ perspective: "500px" }}
        >
          {characters.map((char, i) => (
            <CharacterV1
              key={i}
              char={char}
              index={i}
              centerIndex={centerIndex}
              scrollYProgress={s1}
            />
          ))}
        </div>
      </div>

      {/* V2 — Logos de parceiros espalhando horizontalmente */}
      <div
        ref={ref2}
        className="relative -mt-[100vh] flex h-[210vh] flex-col items-center justify-center gap-8 overflow-hidden"
      >
        <p className="flex items-center justify-center gap-3 text-xl font-medium tracking-tight text-white/70">
          <Bracket className="h-10 text-white/40" />
          <span>nossos parceiros & clientes</span>
          <Bracket className="h-10 scale-x-[-1] text-white/40" />
        </p>
        <div className="w-full max-w-4xl text-center">
          {partnerLogos.map((logo, i) => (
            <CharacterV2
              key={i}
              char={logo}
              index={i}
              centerIndex={Math.floor(partnerLogos.length / 2)}
              scrollYProgress={s2}
            />
          ))}
        </div>
      </div>

      {/* V3 — Logos de tech girando e se juntando */}
      <div
        ref={ref3}
        className="relative -mt-[95vh] flex h-[210vh] flex-col items-center justify-center gap-8 overflow-hidden"
      >
        <p className="flex items-center justify-center gap-3 text-xl font-medium tracking-tight text-white/70">
          <Bracket className="h-10 text-white/40" />
          <span>ferramentas que dominamos</span>
          <Bracket className="h-10 scale-x-[-1] text-white/40" />
        </p>
        <div
          className="w-full max-w-4xl text-center"
          style={{ perspective: "500px" }}
        >
          {techIcons.map((src, i) => (
            <CharacterV3
              key={i}
              char={src}
              index={i}
              centerIndex={iconCenterIndex}
              scrollYProgress={s3}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
