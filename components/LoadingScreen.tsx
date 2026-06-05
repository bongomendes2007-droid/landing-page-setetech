"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"hidden" | "drawing" | "text" | "full" | "exit">("hidden");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("drawing"), 200);
    const t2 = setTimeout(() => setPhase("text"), 1400);
    const t3 = setTimeout(() => setPhase("full"), 2200);
    const t4 = setTimeout(() => setPhase("exit"), 3000);
    const t5 = setTimeout(() => onComplete(), 3600);

    return () => {
      clearTimeout(t1); clearTimeout(t2);
      clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#030308",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "28px",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        opacity: phase === "exit" ? 0 : 1,
        transform: phase === "exit" ? "scale(1.04)" : "scale(1)",
        pointerEvents: phase === "exit" ? "none" : "all",
      }}
    >
      {/* Glow de fundo */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(120,60,200,0.15) 0%, transparent 70%)",
          transition: "opacity 1s ease",
          opacity: phase === "full" || phase === "exit" ? 1 : 0,
          pointerEvents: "none",
        }}
      />

      {/* Logo container */}
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>

        {/* Símbolo S geométrico — SVG animado com stroke-dashoffset */}
        <svg
          width="72"
          height="82"
          viewBox="0 0 120 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7B2FFF" />
              <stop offset="100%" stopColor="#FF2D9B" />
            </linearGradient>
            <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6B2FEF" />
              <stop offset="100%" stopColor="#E82D8B" />
            </linearGradient>
          </defs>

          <polyline
            points="10,50 60,10 110,50"
            stroke="url(#lg1)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{
              strokeDasharray: 160,
              strokeDashoffset: phase === "hidden" ? 160 : 0,
              transition: "stroke-dashoffset 0.8s cubic-bezier(.22,1,.36,1) 0.1s",
            }}
          />
          <polyline
            points="20,64 60,30 100,64"
            stroke="url(#lg1)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{
              strokeDasharray: 130,
              strokeDashoffset: phase === "hidden" ? 130 : 0,
              transition: "stroke-dashoffset 0.8s cubic-bezier(.22,1,.36,1) 0.25s",
            }}
          />

          <path
            d="M 75,52 L 45,52 L 20,78 L 45,78 L 75,104 L 100,78 L 75,78 L 45,52"
            stroke="url(#lg2)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{
              strokeDasharray: 280,
              strokeDashoffset: phase === "hidden" ? 280 : 0,
              transition: "stroke-dashoffset 1s cubic-bezier(.22,1,.36,1) 0.4s",
            }}
          />

          <polyline
            points="20,90 60,124 100,90"
            stroke="url(#lg1)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{
              strokeDasharray: 130,
              strokeDashoffset: phase === "hidden" || phase === "drawing" ? 130 : 0,
              transition: "stroke-dashoffset 0.8s cubic-bezier(.22,1,.36,1) 0.0s",
            }}
          />
          <polyline
            points="10,104 60,140 110,104"
            stroke="url(#lg1)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{
              strokeDasharray: 160,
              strokeDashoffset: phase === "hidden" || phase === "drawing" ? 160 : 0,
              transition: "stroke-dashoffset 0.8s cubic-bezier(.22,1,.36,1) 0.15s",
            }}
          />

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </svg>

        {/* Texto SETE TECH */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
              fontSize: "42px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "3px",
              lineHeight: 1,
              transform: phase === "text" || phase === "full" || phase === "exit"
                ? "translateX(0)" : "translateX(-30px)",
              opacity: phase === "text" || phase === "full" || phase === "exit" ? 1 : 0,
              transition: "transform 0.7s cubic-bezier(.22,1,.36,1), opacity 0.5s ease",
            }}
          >
            SETE
          </span>
          <span
            style={{
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
              fontSize: "42px",
              fontWeight: 900,
              letterSpacing: "3px",
              lineHeight: 1,
              background: "linear-gradient(90deg, #7B2FFF, #FF2D9B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transform: phase === "text" || phase === "full" || phase === "exit"
                ? "translateX(0)" : "translateX(-30px)",
              opacity: phase === "text" || phase === "full" || phase === "exit" ? 1 : 0,
              transition: "transform 0.7s cubic-bezier(.22,1,.36,1) 0.12s, opacity 0.5s ease 0.12s",
            }}
          >
            TECH
          </span>
        </div>
      </div>

      {/* Barra de progresso */}
      <div
        style={{
          width: "120px",
          height: "1px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "1px",
          overflow: "hidden",
          marginTop: "8px",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #7B2FFF, #FF2D9B)",
            borderRadius: "1px",
            transition: "width 2.8s cubic-bezier(.22,1,.36,1)",
            width: phase === "hidden" ? "0%" : "100%",
          }}
        />
      </div>
    </div>
  );
}
