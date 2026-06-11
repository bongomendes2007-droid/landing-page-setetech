"use client"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const images = [
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1781205983/ead0bde8da1920238655504666b62105_hf3qe8.jpg",
    alt: "Case SETE TECH 1",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1781205925/8c57019fb06e39ac44a6d9c412471a3f_oyx3o1.jpg",
    alt: "Case SETE TECH 2",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1781205895/8804098977ab01256c2008a4f653c973_xbubdq.jpg",
    alt: "Case SETE TECH 3",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1781205887/047e58fb-d181-4c1e-99fe-1040f57e47fc_gmwx7j.png",
    alt: "Case SETE TECH 4",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1781205846/0d73131414b74899a36cade5f3a7b1a7_dnw4ki.jpg",
    alt: "Case SETE TECH 5",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1781205721/11da94f1-cc3d-43d1-98f4-28c85324c221_tdu9fi.png",
    alt: "Case SETE TECH 6",
  },
]

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-[#0D0D0D] py-6 border-y border-white/5">
      <Marquee className="[--duration:35s]" pauseOnHover>
        {images.map((img) => (
          <div
            key={img.src}
            className="relative mx-4 h-20 w-32 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 hover:border-[#6A00FF]/60 bg-[#1A1A1A] p-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
