"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSETETECH from "@/components/HeroSETETECH";

// Importe aqui as suas outras seções normalmente
// import Servicos from "@/components/Servicos";
// import Depoimentos from "@/components/Depoimentos";
// import CTA from "@/components/CTA";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Tela de loading — some automaticamente após ~3.6s */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Site principal — já está no DOM, mas atrás do loading */}
      <main style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease" }}>
        <HeroSETETECH />
        {/* <Servicos /> */}
        {/* <Depoimentos /> */}
        {/* <CTA /> */}
      </main>
    </>
  );
}
