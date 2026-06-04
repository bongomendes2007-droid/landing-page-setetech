"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#05050f] flex items-center justify-center">

      {/* Vídeo background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.85 }}
      >
        <source
          src="https://res.cloudinary.com/dnth1inmv/video/upload/v1780614520/Laptop_opens_in_darkness_202606042007_zn50pl.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay escuro gradiente */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,15,0.45) 0%, rgba(5,5,15,0.15) 40%, rgba(5,5,15,0.55) 75%, rgba(5,5,15,0.92) 100%)",
        }}
      />

      {/* Glow esférico */}
      <div
        className="absolute z-10 rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -58%)",
          background:
            "radial-gradient(ellipse, rgba(30,50,220,0.12) 0%, transparent 68%)",
        }}
      />

      {/* Nav dots lateral esquerda */}
      <nav
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4 items-center"
        aria-label="Seções"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block rounded-full transition-all duration-500"
            style={{
              width: i === 0 ? "5px" : "4px",
              height: i === 0 ? "5px" : "4px",
              background:
                i === 0
                  ? "rgba(255,255,255,0.9)"
                  : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
        <div
          className="absolute rounded-full"
          style={{
            width: "8px",
            height: "28px",
            top: "2px",
            left: "-2px",
            background:
              "linear-gradient(180deg, rgba(80,120,255,0.85), rgba(40,70,220,0.3))",
          }}
        />
      </nav>

      {/* Linha decorativa topo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-px transition-all duration-[1400ms] ease-out"
        style={{
          width: visible ? "55%" : "0%",
          background: "rgba(255,255,255,0.07)",
        }}
      />

      {/* Conteúdo central */}
      <div
        className="relative z-20 flex flex-col items-center text-center px-6 select-none"
        style={{ marginTop: "clamp(160px, 28vw, 240px)" }}
      >

        {/* Badge */}
        <div className="overflow-hidden mb-3">
          <p
            className="transition-all duration-700 ease-out"
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "10px",
              letterSpacing: "4px",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transitionDelay: "0.05s",
            }}
          >
            Piauí · Brasil
          </p>
        </div>

        {/* Título principal */}
        <div className="overflow-hidden mb-2">
          <h1
            className="transition-all duration-[900ms]"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 300,
              color: "#ffffff",
              letterSpacing: "3px",
              lineHeight: 1.1,
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transitionDelay: "0.2s",
              transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
            }}
          >
            SETE TECH
          </h1>
        </div>

        {/* Subtítulo */}
        <div className="overflow-hidden mb-2">
          <p
            className="transition-all duration-[900ms]"
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "10px",
              letterSpacing: "3px",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transitionDelay: "0.38s",
              transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
            }}
          >
            Agência de Tecnologia B2B
          </p>
        </div>

        {/* Linha separadora */}
        <div
          className="my-4 transition-all duration-700"
          style={{
            width: visible ? "48px" : "0px",
            height: "0.5px",
            background: "rgba(100,130,255,0.35)",
            transitionDelay: "0.5s",
          }}
        />

        {/* Descrição */}
        <div className="overflow-hidden mb-8">
          <p
            className="transition-all duration-[900ms]"
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "11px",
              color: "rgba(255,255,255,0.22)",
              letterSpacing: "0.5px",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transitionDelay: "0.52s",
              transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
            }}
          >
            Web · IA · Design · Cloud · GovTech
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex gap-4 items-center transition-all duration-700"
          style={{
            transform: visible ? "translateY(0)" : "translateY(20px)",
            opacity: visible ? 1 : 0,
            transitionDelay: "0.72s",
            transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
          }}
        >
          <Link
            href="/contato"
            className="group relative overflow-hidden transition-all duration-300"
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "10px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.9)",
              textTransform: "uppercase",
              background: "rgba(255,255,255,0.06)",
              border: "0.5px solid rgba(255,255,255,0.2)",
              padding: "11px 28px",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.06)";
            }}
          >
            Solicitar diagnóstico
          </Link>

          <Link
            href="/servicos"
            className="transition-all duration-300"
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "10px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              background: "none",
              border: "0.5px solid rgba(255,255,255,0.08)",
              padding: "11px 28px",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "rgba(255,255,255,0.7)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.18)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "rgba(255,255,255,0.35)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.08)";
            }}
          >
            Ver serviços
          </Link>
        </div>
      </div>

      {/* Linha decorativa base */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 h-px"
        style={{
          width: "55%",
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 transition-all duration-700"
        style={{
          opacity: visible ? 0.4 : 0,
          transitionDelay: "1.1s",
        }}
      >
        <span
          style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: "9px",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          className="w-px bg-white/20 animate-pulse"
          style={{ height: "28px" }}
        />
      </div>
    </section>
  );
}
