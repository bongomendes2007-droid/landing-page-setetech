"use client"
import { Marquee } from "@/components/ui/marquee"

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
    <div className="w-full overflow-hidden bg-[#0D0D0D] py-10">
      <Marquee pauseOnHover className="[--duration:40s] [--gap:4rem]">
        {images.map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center mx-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={src}
              alt={`Logo ${i + 1}`}
              className="h-12 w-12 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
