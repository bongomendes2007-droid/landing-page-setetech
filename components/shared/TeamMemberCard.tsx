'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import Image from 'next/image'
import { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
  index?: number
}

export default function TeamMemberCard({ member, index = 0 }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-slate-200 hover:shadow-xl shadow-sm transition-all duration-300 overflow-hidden group"
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Foto de ${member.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <User className="w-10 h-10 text-white/80" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
        <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{member.bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {member.specialties.map((spec) => (
            <span
              key={spec}
              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${member.name}`}
              className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200 group/link"
            >
              {/* LinkedIn icon */}
              <svg className="w-4 h-4 text-slate-600 group-hover/link:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${member.name}`}
              className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-800 flex items-center justify-center transition-colors duration-200 group/link"
            >
              {/* GitHub icon */}
              <svg className="w-4 h-4 text-slate-600 group-hover/link:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
