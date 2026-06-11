"use client"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const images = [
  "https://res.cloudinary.com/dnth1inmv/image/upload/v1781209772/d8f1375d-6ddd-455b-8fe9-3dc972baeef0_uuoq03.png",
  "https://res.cloudinary.com/dnth1inmv/image/upload/v1781209636/8211eae9-8148-4767-9376-5ed32115d119_jfkkre.png",
  "https://res.cloudinary.com/dnth1inmv/image/upload/v1781209477/c9ab2ae3-f979-4480-b563-401a37add5a7_g9ozyn.png",
  "https://res.cloudinary.com/dnth1inmv/image/upload/v1781209354/152d9d31-cc9e-43cd-b487-d18cc6606e0b_nvabwm.png",
  "https://res.cloudinary.com/dnth1inmv/image/upload/v1781205887/047e58fb-d181-4c1e-99fe-1040f57e47fc_gmwx7j.png",
  "https://res.cloudinary.com/dnth1inmv/image/upload/v1781205721/11da94f1-cc3d-43d1-98f4-28c85324c221_tdu9fi.png",
]

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-[#0D0D0D] py-6 border-y border-white/5">
      <Marquee className="[--duration:35s]" pauseOnHover>
        {images.map((src, i) => (
          <div
            key={src}
            className="relative mx-4 h-20 w-32 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 hover:border-[#6A00FF]/60 bg-[#1A1A1A] p-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105"
          >
            <Image
              src={src}
              alt={`Case SETE TECH ${i + 1}`}
              fill
              className="object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
