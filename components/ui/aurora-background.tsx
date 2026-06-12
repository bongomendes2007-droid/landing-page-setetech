'use client'

import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode
  showRadialGradient?: boolean
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn('relative overflow-hidden bg-[#0D0D0D]', className)}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            // Aurora layers: dark stripes + brand purple gradient
            `[--dark-gradient:repeating-linear-gradient(100deg,#0D0D0D_0%,#0D0D0D_7%,transparent_10%,transparent_12%,#0D0D0D_16%)]
            [--aurora:repeating-linear-gradient(100deg,#3D0099_10%,#6A00FF_15%,#A100FF_20%,#D600FF_25%,#6A00FF_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0
            after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-40 will-change-transform`,
            showRadialGradient &&
              '[mask-image:radial-gradient(ellipse_at_80%_20%,black_10%,transparent_70%)]',
          )}
        />
      </div>
      {children}
    </div>
  )
}
