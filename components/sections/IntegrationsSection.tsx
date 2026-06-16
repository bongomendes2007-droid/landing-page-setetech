"use client"
import { motion } from "framer-motion"

const tools = [
  { name: "OpenAI",      src: "https://cdn.simpleicons.org/openai/white" },
  { name: "Claude",      src: "https://cdn.simpleicons.org/anthropic/white" },
  { name: "Google",      src: "https://cdn.simpleicons.org/google/white" },
  { name: "GitHub",      src: "https://cdn.simpleicons.org/github/white" },
  { name: "Vercel",      src: "https://cdn.simpleicons.org/vercel/white" },
  { name: "Figma",       src: "https://cdn.simpleicons.org/figma/white" },
  { name: "React",       src: "https://cdn.simpleicons.org/react/white" },
  { name: "Next.js",     src: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "TypeScript",  src: "https://cdn.simpleicons.org/typescript/white" },
  { name: "Node.js",     src: "https://cdn.simpleicons.org/nodedotjs/white" },
  { name: "Python",      src: "https://cdn.simpleicons.org/python/white" },
  { name: "Docker",      src: "https://cdn.simpleicons.org/docker/white" },
  { name: "PostgreSQL",  src: "https://cdn.simpleicons.org/postgresql/white" },
  { name: "Firebase",    src: "https://cdn.simpleicons.org/firebase/white" },
  { name: "Stripe",      src: "https://cdn.simpleicons.org/stripe/white" },
  { name: "Notion",      src: "https://cdn.simpleicons.org/notion/white" },
]

const col1 = [tools[0], tools[4], tools[8],  tools[12]]
const col2 = [tools[1], tools[5], tools[9],  tools[13]]
const col3 = [tools[2], tools[6], tools[10], tools[14]]
const col4 = [tools[3], tools[7], tools[11], tools[15]]

function ToolCard({ tool, delay = 0 }: { tool: typeof tools[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
      className="group flex items-center justify-center rounded-2xl p-6
        transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tool.src}
        alt={tool.name}
        width={48}
        height={48}
        className="w-12 h-12 object-contain opacity-70
          group-hover:opacity-100 transition-opacity duration-300"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none'
        }}
      />
    </motion.div>
  )
}

function MasonryColumn({
  tools,
  offset = false,
  delayBase = 0,
}: {
  tools: typeof col1
  offset?: boolean
  delayBase?: number
}) {
  return (
    <div className={`flex flex-col gap-4 ${offset ? 'mt-8' : ''}`}>
      {tools.map((tool, i) => (
        <ToolCard key={tool.name} tool={tool} delay={delayBase + i * 0.08} />
      ))}
    </div>
  )
}

export default function IntegrationsSection() {
  return (
    <section
      className="relative overflow-hidden rounded-t-[40px] rounded-b-[40px]"
      style={{ backgroundColor: '#7A1CF8' }}
    >
      {/* Glow de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(161,0,255,0.3), transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Lado esquerdo — texto */}
          <div className="flex-1 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
                INTEGRAÇÕES
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black
                text-white leading-[1.05] tracking-tight mb-6">
                Integre sua empresa ao{" "}
                <span style={{
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  futuro digital
                </span>
              </h2>

              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm">
                Conectamos sua empresa às melhores ferramentas de IA e tecnologia
                do mercado, com integração sob medida para o seu negócio.
              </p>

              <motion.a
                href="#contato"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full
                  px-6 py-3 text-sm font-bold transition-all"
                style={{ backgroundColor: '#0D0D0D', color: '#ffffff' }}
              >
                Conectar agora
                <span>→</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { n: "16+",  label: "Ferramentas integradas" },
                { n: "47+",  label: "Projetos entregues" },
                { n: "100%", label: "Sob medida" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-black text-white">{s.n}</span>
                  <span className="text-xs text-white/40 mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Lado direito — masonry desktop */}
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 max-w-md w-full">
              <MasonryColumn tools={col1} delayBase={0} />
              <MasonryColumn tools={col2} offset delayBase={0.1} />
              <MasonryColumn tools={col3} delayBase={0.2} />
              <MasonryColumn tools={col4} offset delayBase={0.3} />
            </div>
          </div>

          {/* Mobile — grid 4 colunas simplificado */}
          <div className="lg:hidden grid grid-cols-4 gap-3 w-full">
            {tools.slice(0, 8).map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} delay={i * 0.05} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
