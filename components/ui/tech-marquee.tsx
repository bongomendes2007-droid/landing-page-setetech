"use client"
import {
  ClaudeAI,
  Cursor,
  Github,
  GoogleWordmark,
  Grok,
  OpenAI,
  Replicate,
} from "@aliimam/logos"
import { Marquee } from "@/components/ui/marquee"

const LogoRow = () => (
  <div className="text-white [&_svg]:text-white [&_svg]:fill-white flex items-center">
    <OpenAI size={40} />
    <ClaudeAI size={40} />
    <Replicate size={40} />
    <Cursor size={40} />
    <Github size={40} />
    <Grok size={40} />
    <GoogleWordmark className="mr-20" size={40} />
  </div>
)

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-[#7A1CF8] py-12 border-y border-white/5">
      <div className="w-full space-y-10">
        <Marquee gap="80px" fade pauseOnHover className="[--duration:35s]">
          <LogoRow />
        </Marquee>

        <Marquee reverse gap="80px" fade pauseOnHover className="[--duration:35s]">
          <LogoRow />
        </Marquee>
      </div>
    </div>
  )
}
