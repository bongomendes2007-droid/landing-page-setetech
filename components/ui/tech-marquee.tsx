"use client"

import {
  JavaScript,
  TypeScript,
  ReactLib,
  Nextjs,
  TailwindCSS,
  NestJS,
  MongoDB,
  Github,
  Vercel,
  HTML5,
  CSSNew,
  GraphQL,
  Go,
  FastAPI,
  Bun,
  Figma,
} from "@aliimam/logos"

const logos = [
  { name: "JavaScript", Logo: JavaScript },
  { name: "TypeScript", Logo: TypeScript },
  { name: "React", Logo: ReactLib },
  { name: "Next.js", Logo: Nextjs },
  { name: "TailwindCSS", Logo: TailwindCSS },
  { name: "NestJS", Logo: NestJS },
  { name: "MongoDB", Logo: MongoDB },
  { name: "GitHub", Logo: Github },
  { name: "Vercel", Logo: Vercel },
  { name: "HTML5", Logo: HTML5 },
  { name: "CSS3", Logo: CSSNew },
  { name: "GraphQL", Logo: GraphQL },
  { name: "Go", Logo: Go },
  { name: "FastAPI", Logo: FastAPI },
  { name: "Bun", Logo: Bun },
  { name: "Figma", Logo: Figma },
]

export function TechMarquee() {
  const track = [...logos, ...logos]

  return (
    <section
      className="overflow-hidden select-none relative"
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
      aria-hidden
    >
      {/* Fade left */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#1A1A1A] to-transparent" />
      {/* Fade right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#1A1A1A] to-transparent" />

      <div className="marquee-track flex items-center gap-10">
        {track.map(({ name, Logo }, i) => (
          <div
            key={i}
            className="flex items-center gap-2 shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300"
            title={name}
          >
            <Logo size={32} />
            <span
              className="text-xs font-semibold tracking-wider uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-syne)", color: "var(--color-subtle)" }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
