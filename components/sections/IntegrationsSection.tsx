"use client"
import { motion } from "framer-motion"

const tools = [
  { name: "JavaScript",  src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1781205721/11da94f1-cc3d-43d1-98f4-28c85324c221_tdu9fi.png" },
  { name: "Anthropic",   src: "https://cdn.simpleicons.org/anthropic" },
  { name: "Google",      src: "https://cdn.simpleicons.org/google" },
  { name: "GitHub",      src: "https://cdn.simpleicons.org/github" },
  { name: "Vercel",      src: "https://cdn.simpleicons.org/vercel" },
  { name: "Figma",       src: "https://cdn.simpleicons.org/figma" },
  { name: "React",       src: "https://cdn.simpleicons.org/react" },
  { name: "Next.js",     src: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "TypeScript",  src: "https://cdn.simpleicons.org/typescript" },
  { name: "Node.js",     src: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Python",      src: "https://cdn.simpleicons.org/python" },
  { name: "Docker",      src: "https://cdn.simpleicons.org/docker" },
  { name: "PostgreSQL",  src: "https://cdn.simpleicons.org/postgresql" },
  { name: "Firebase",    src: "https://cdn.simpleicons.org/firebase" },
  { name: "Stripe",      src: "https://cdn.simpleicons.org/stripe" },
  { name: "Notion",      src: "https://cdn.simpleicons.org/notion" },
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
      className="group flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{
        width: '80px',
        height: '80px',
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tool.src}
        alt={tool.name}
        width={40}
        height={40}
        className="w-10 h-10 object-contain"
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
    <div className={`flex flex-col items-center gap-4 ${offset ? 'mt-10' : ''}`}>
      {tools.map((tool, i) => (
        <ToolCard key={tool.name} tool={tool} delay={delayBase + i * 0.08} />
      ))}
    </div>
  )
}

export default function IntegrationsSection() {
  return (
    <section
      className="relative overflow-x-clip min-h-screen flex flex-col justify-center py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="relative px-6 md:px-16" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">

          {/* Lado esquerdo — texto */}
          <div className="w-full lg:flex-1 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                 style={{ color: '#6A00FF' }}>
                INTEGRAÇÕES
              </p>

              <h2 style={{
                fontWeight: 800,
                fontSize: 'clamp(22px, 5.5vw, 56px)',
                color: '#0D0D0D',
                letterSpacing: '-0.03em',
                lineHeight: 1.02,
                marginBottom: '20px',
              }}>
                Integre sua empresa ao futuro digital
              </h2>

              <p className="text-base leading-relaxed mb-8"
                 style={{ color: '#6B7280', maxWidth: '340px' }}>
                Conectamos sua empresa às melhores ferramentas de IA e tecnologia
                do mercado, com integração sob medida para o seu negócio.
              </p>

              <motion.a
                href="#contato"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="transition-all"
                style={{
                  backgroundColor: '#0D0D0D',
                  color: '#ffffff',
                  borderRadius: '10px',
                  padding: '14px 28px',
                  fontSize: '16px',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Conectar agora
                <span>→</span>
              </motion.a>
            </motion.div>

          </div>

          {/* Lado direito — masonry desktop */}
          <div className="flex-1 hidden lg:flex items-start justify-center">
            <div className="flex gap-4">
              <MasonryColumn tools={col1} delayBase={0} />
              <MasonryColumn tools={col2} offset delayBase={0.1} />
              <MasonryColumn tools={col3} delayBase={0.2} />
              <MasonryColumn tools={col4} offset delayBase={0.3} />
            </div>
          </div>

          {/* Mobile — grid 4 colunas simplificado */}
          <div className="lg:hidden grid grid-cols-4 gap-3 w-full place-items-center">
            {tools.slice(0, 8).map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} delay={i * 0.05} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
