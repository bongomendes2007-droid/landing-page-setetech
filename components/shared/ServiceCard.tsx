'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Palette,
  Brain,
  Server,
  TrendingUp,
  Landmark,
  LayoutDashboard,
  LucideIcon,
} from 'lucide-react'
import { Service } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Palette,
  Brain,
  Server,
  TrendingUp,
  Landmark,
  LayoutDashboard,
}

interface ServiceCardProps {
  service: Service
  variant?: 'compact' | 'full'
  index?: number
}

export default function ServiceCard({ service, variant = 'compact', index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl shadow-sm transition-all duration-300 overflow-hidden"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />
      <div className="p-6">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.shortDescription}</p>

        {variant === 'full' && (
          <>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.fullDescription}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </>
        )}

        {variant === 'compact' && (
          <ul className="space-y-1.5">
            {service.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
