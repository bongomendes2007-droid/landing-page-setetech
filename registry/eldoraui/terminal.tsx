"use client"

import { useEffect, useMemo, useState, type ReactElement } from "react"
import { TerminalIcon } from "lucide-react"
import { GoTerminal } from "react-icons/go"

type TerminalStep = {
  text: string
  bold?: boolean
}

type TerminalProps = {
  command: string
  steps: TerminalStep[]
  pulseInterval?: number
  showLocalhost?: boolean
  hostBarTitle?: string
  hostMessage?: string
}

function MacControls() {
  return (
    <>
      <GoTerminal className="mr-1 size-4" style={{ color: 'rgba(255,255,255,0.4)' }} />
      <div className="h-2 w-2 rounded-full bg-red-500" />
      <div className="h-2 w-2 rounded-full bg-yellow-500" />
      <div className="h-2 w-2 rounded-full bg-green-500" />
    </>
  )
}

function LocalHost({ title, message }: { title: string; message: string }) {
  return (
    <div
      className="animate-in fade-in slide-in-from-top-10 absolute right-4 bottom-5 z-10 overflow-hidden rounded-md shadow-xl"
      style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.12)' }}
    >
      <div
        className="relative flex h-6 flex-row items-center border-b px-4 text-xs"
        style={{ background: '#252525', borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
      >
        <TerminalIcon className="absolute inset-2 size-3" />
        <p className="absolute inset-x-0 text-center">{title}</p>
      </div>
      <div className="p-4 text-sm text-white">{message}</div>
    </div>
  )
}

const Terminal = ({
  command,
  steps,
  pulseInterval = 100,
  showLocalhost = true,
  hostBarTitle = "localhost:3000",
  hostMessage = "New App Created!",
}: TerminalProps) => {
  const typingLen = useMemo(() => command.length, [command])
  const revealLen = useMemo(() => steps.length, [steps])
  const finalCount = typingLen + revealLen + 1

  const [counter, setCounter] = useState(finalCount)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev >= finalCount ? prev : prev + 1))
    }, pulseInterval)
    return () => clearInterval(interval)
  }, [pulseInterval, finalCount])

  const elements: ReactElement[] = []

  const typedChars = Math.min(counter, typingLen)
  const isTyping = counter < typingLen

  elements.push(
    <span key="command" className="text-white">
      {command.substring(0, typedChars)}
      {isTyping && (
        <div className="bg-white inline-block h-3 w-1 animate-pulse" />
      )}
    </span>
  )

  if (!isTyping) {
    const shownSteps = Math.min(revealLen, counter - typingLen)
    if (shownSteps > 0) {
      elements.push(<span key="space"> </span>)
    }
    for (let i = 0; i < shownSteps; i++) {
      const step = steps[i]
      elements.push(
        <span
          key={`step-${i}`}
          className={
            step.bold ? "text-foreground font-bold" : "text-foreground"
          }
        >
          {step.text}
        </span>
      )
    }
  }

  const revealComplete = counter > typingLen + revealLen

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (counter >= finalCount) {
          setCounter(0)
        }
      }}
    >
      {showLocalhost && revealComplete && (
        <LocalHost title={hostBarTitle} message={hostMessage} />
      )}

      <pre
        className="w-full overflow-hidden rounded-xl text-[11px] shadow-lg sm:text-[12px] md:text-[13px]"
        style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div
          className="flex flex-row items-center gap-2 border-b px-3 py-2 sm:px-4"
          style={{ background: '#1A1A1A', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <MacControls />
        </div>
        <div className="min-h-[200px]" style={{ background: '#0D0D0D' }}>
          <div className="grid p-3 whitespace-pre-wrap sm:p-4">{elements}</div>
        </div>
      </pre>
    </div>
  )
}

export default Terminal
