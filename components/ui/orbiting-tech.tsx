'use client'

import { OrbitingCircles } from '@/components/ui/orbiting-circles'

const innerIcons  = ['react', 'typescript', 'javascript', 'nodedotjs', 'python']
const middleIcons = ['html5', 'css3', 'nextdotjs', 'git', 'github']
const outerIcons  = ['postgresql', 'firebase', 'vercel', 'docker', 'java']

const slugMap: Record<string, string> = {
  react:        'react',
  typescript:   'typescript',
  javascript:   'javascript',
  nodedotjs:    'nodedotjs',
  python:       'python',
  html5:        'html5',
  css3:         'css',
  nextdotjs:    'nextdotjs',
  git:          'git',
  github:       'github',
  postgresql:   'postgresql',
  firebase:     'firebase',
  vercel:       'vercel',
  docker:       'docker',
  java:         'openjdk',
}

function TechIcon({ slug, size }: { slug: string; size: number }) {
  const mappedSlug = slugMap[slug] ?? slug
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${mappedSlug}`}
      alt={slug}
      width={size}
      height={size}
      className="opacity-90"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none'
      }}
    />
  )
}

export function OrbitingTech() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Órbita interna */}
      <OrbitingCircles iconSize={36} radius={70} speed={1.2}>
        {innerIcons.map((slug) => (
          <TechIcon key={slug} slug={slug} size={36} />
        ))}
      </OrbitingCircles>

      {/* Órbita média — reversa */}
      <OrbitingCircles iconSize={36} radius={130} reverse speed={1}>
        {middleIcons.map((slug) => (
          <TechIcon key={slug} slug={slug} size={36} />
        ))}
      </OrbitingCircles>

      {/* Órbita externa */}
      <OrbitingCircles iconSize={36} radius={190} speed={0.8}>
        {outerIcons.map((slug) => (
          <TechIcon key={slug} slug={slug} size={36} />
        ))}
      </OrbitingCircles>
    </div>
  )
}
