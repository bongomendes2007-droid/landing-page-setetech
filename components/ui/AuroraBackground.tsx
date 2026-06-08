'use client'

import { useEffect, useRef } from 'react'

interface Blob {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  color: string
}

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    canvas.width  = width
    canvas.height = height

    const colors = ['rgba(0,107,61,', 'rgba(50,200,133,', 'rgba(128,240,160,']
    const blobs: Blob[] = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 180 + Math.random() * 120,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: colors[i % colors.length],
    }))

    let raf: number
    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        g.addColorStop(0, b.color + '0.18)')
        g.addColorStop(1, b.color + '0)')
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
        b.x += b.vx
        b.y += b.vy
        if (b.x < -b.r || b.x > width  + b.r) b.vx *= -1
        if (b.y < -b.r || b.y > height + b.r) b.vy *= -1
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    const handleResize = () => {
      width  = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width  = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  )
}
