"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const lines = [
  { text: "$ setetech --init novo-projeto", delay: 0, color: "#A100FF" },
  { text: "✓ Ambiente configurado", delay: 800, color: "#00C853" },
  { text: "$ setetech --deploy prefeitura-pi", delay: 1800, color: "#A100FF" },
  { text: "✓ Build completo em 2.3s", delay: 2600, color: "#00C853" },
  { text: "✓ 847 usuários ativos", delay: 3400, color: "#00C853" },
  { text: "$ setetech --ai automation on", delay: 4400, color: "#A100FF" },
  { text: "✓ IA conectada com sucesso", delay: 5200, color: "#00C853" },
  { text: "$ setetech --status", delay: 6200, color: "#A100FF" },
  { text: "✓ 47 projetos entregues", delay: 7000, color: "#00C853" },
  { text: "✓ 12 municípios atendidos", delay: 7600, color: "#00C853" },
  { text: "✓ 5 anos de excelência", delay: 8200, color: "#00C853" },
  { text: "✓ Piauí mais digital 🚀", delay: 9000, color: "#D600FF" },
]

function useTypewriter(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    setDisplayed("")
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])

  return displayed
}

function TerminalLine({ line, isActive, isComplete }: {
  line: typeof lines[0]
  isActive: boolean
  isComplete: boolean
}) {
  const displayed = useTypewriter(isActive || isComplete ? line.text : "", 35)

  if (!isActive && !isComplete) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-start gap-2 font-mono text-sm leading-relaxed"
    >
      <span style={{ color: line.color }}>
        {isActive || isComplete ? displayed : ""}
      </span>
      {isActive && displayed.length < line.text.length && (
        <span className="animate-pulse text-white">▋</span>
      )}
    </motion.div>
  )
}

export function AnimatedTerminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [completedLines, setCompletedLines] = useState<number[]>([])

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    lines.forEach((line, i) => {
      const startTimer = setTimeout(() => {
        setCurrentLine(i)
      }, line.delay)

      const completeTimer = setTimeout(() => {
        setCompletedLines(prev => [...prev, i])
      }, line.delay + line.text.length * 35 + 100)

      timers.push(startTimer, completeTimer)
    })

    const resetTimer = setTimeout(() => {
      setCurrentLine(0)
      setCompletedLines([])
    }, 12000)

    timers.push(resetTimer)
    return () => timers.forEach(clearTimeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative w-full max-w-md">
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: '#0D0D0D',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 24px 64px rgba(106,0,255,0.2), 0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Barra macOS */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-xs text-white/30 font-mono">
            setetech-terminal
          </span>
        </div>

        {/* Conteúdo */}
        <div className="p-5 space-y-1.5 min-h-[280px]">
          {lines.map((line, i) => (
            <TerminalLine
              key={i}
              line={line}
              isActive={currentLine === i && !completedLines.includes(i)}
              isComplete={completedLines.includes(i)}
            />
          ))}
        </div>
      </div>

      {/* Glow roxo */}
      <div
        className="absolute -inset-4 -z-10 rounded-3xl blur-2xl opacity-30"
        style={{
          background: 'radial-gradient(circle, #6A00FF, transparent 70%)'
        }}
      />
    </div>
  )
}
