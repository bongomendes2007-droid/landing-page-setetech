"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSETETECH() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        background: "#05050f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      {/* Vídeo background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.9,
        }}
      >
        <source
          src="https://res.cloudinary.com/dnth1inmv/video/upload/v1780614520/Laptop_opens_in_darkness_202606042007_zn50pl.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay gradiente */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(5,5,15,0.15) 0%, rgba(5,5,15,0.0) 30%, rgba(5,5,15,0.6) 65%, rgba(5,5,15,0.97) 100%)",
        }}
      />

      {/* Glow esférico sutil */}
      <div
        style={{
          position: "absolute",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(25,40,200,0.1) 0%, transparent 68%)",
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Nav dots lateral */}
      <div
        style={{
          position: "absolute",
          left: "32px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          alignItems: "center",
        }}
      >
        {[true, false, false].map((active, i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: active ? "5px" : "4px",
              height: active ? "5px" : "4px",
              borderRadius: "50%",
              background: active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.18)",
            }}
          />
        ))}
      </div>

      {/* Conteúdo */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingBottom: "clamp(64px, 10vh, 100px)",
          width: "100%",
        }}
      >
        {/* SETE TECH */}
        <div style={{ overflow: "hidden", marginBottom: "10px" }}>
          <h1
            style={{
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(14px, 1.8vw, 20px)",
              fontWeight: 900,
              letterSpacing: "clamp(8px, 1.8vw, 16px)",
              color: "rgba(255,255,255,0.95)",
              textTransform: "uppercase",
              margin: 0,
              transform: visible ? "translateY(0)" : "translateY(100%)",
              opacity: visible ? 1 : 0,
              transition: "transform 1s cubic-bezier(.22,1,.36,1) 0.1s, opacity 0.6s ease 0.1s",
            }}
          >
            SETE TECH
          </h1>
        </div>

        {/* Linha separadora */}
        <div
          style={{
            width: visible ? "36px" : "0px",
            height: "0.5px",
            background: "linear-gradient(90deg, transparent, rgba(140,90,255,0.7), transparent)",
            transition: "width 0.9s cubic-bezier(.22,1,.36,1) 0.45s",
            marginBottom: "10px",
          }}
        />

        {/* Tagline */}
        <div style={{ overflow: "hidden", marginBottom: "28px" }}>
          <p
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "clamp(9px, 0.9vw, 10px)",
              letterSpacing: "clamp(2px, 0.7vw, 3.5px)",
              color: "rgba(255,255,255,0.28)",
              textTransform: "uppercase",
              margin: 0,
              transform: visible ? "translateY(0)" : "translateY(100%)",
              opacity: visible ? 1 : 0,
              transition: "transform 1s cubic-bezier(.22,1,.36,1) 0.3s, opacity 0.6s ease 0.3s",
            }}
          >
            Tecnologia que entrega resultados que duram
          </p>
        </div>

        {/* Botões */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
            transform: visible ? "translateY(0)" : "translateY(14px)",
            opacity: visible ? 1 : 0,
            transition: "transform 0.9s cubic-bezier(.22,1,.36,1) 0.55s, opacity 0.6s ease 0.55s",
          }}
        >
          <Link
            href="/contato"
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "9px",
              letterSpacing: "2.5px",
              color: "#fff",
              textTransform: "uppercase",
              textDecoration: "none",
              background: "rgba(110,55,210,0.28)",
              border: "0.5px solid rgba(140,80,255,0.4)",
              padding: "11px 30px",
              borderRadius: "2px",
              backdropFilter: "blur(8px)",
              display: "inline-block",
              transition: "background 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(110,55,210,0.5)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(160,100,255,0.65)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(110,55,210,0.28)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(140,80,255,0.4)";
            }}
          >
            Solicitar diagnóstico
          </Link>

          <Link
            href="/servicos"
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "9px",
              letterSpacing: "2.5px",
              color: "rgba(255,255,255,0.38)",
              textTransform: "uppercase",
              textDecoration: "none",
              background: "none",
              border: "0.5px solid rgba(255,255,255,0.1)",
              padding: "11px 30px",
              borderRadius: "2px",
              display: "inline-block",
              transition: "color 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.72)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            Ver serviços
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: visible ? 0.28 : 0,
          transition: "opacity 0.8s ease 1.3s",
        }}
      >
        <span
          style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: "8px",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "24px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
            animation: "sPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes sPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
