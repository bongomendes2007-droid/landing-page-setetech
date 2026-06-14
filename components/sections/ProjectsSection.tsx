import React from 'react';

const projects = [
  { name: 'Fundador 1', tag1: 'DESENVOLVIMENTO WEB', tag2: 'FRONTEND', desc: 'Especialista em sistemas web de alta performance para empresas e órgãos públicos do Piauí.', color: '#8b5cf6', icon: '💻', bg: '#1E0A35' },
  { name: 'Fundador 2', tag1: 'AUTOMAÇÃO & IA', tag2: 'INFRAESTRUTURA', desc: 'Lidera a arquitetura técnica e integração de modelos de IA nos produtos da SETE TECH.', color: '#10b981', icon: '🤖', bg: '#0A1A10' },
  { name: 'Fundador 3', tag1: 'MARKETING DIGITAL', tag2: 'DESIGN & UX', desc: 'Responsável pela identidade visual e estratégias de crescimento digital da SETE TECH.', color: '#f59e0b', icon: '🎨', bg: '#1A1200' },
  { name: 'Fundador 4', tag1: 'GESTÃO & NEGÓCIOS', tag2: 'ÓRGÃOS PÚBLICOS', desc: 'Especialista em soluções para prefeituras, autarquias e secretarias do Piauí.', color: '#3b82f6', icon: '🏢', bg: '#0A0F1E' }
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 bg-[#EEEEEE]">
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="notch-clip">
            {/* Caminho customizado com notch côncavo no canto superior direito */}
            <path d="M 24,0 L 216,0 Q 232,0 238,6 Q 244,10 244,18 L 244,24 Q 244,32 236,36 Q 228,40 220,40 Q 212,38 208,32 Q 204,26 200,20 L 0,20 Q 0,12 0,24 L 0,396 Q 0,420 24,420 L 236,420 Q 260,420 260,396 L 260,24 Q 260,0 236,0 L 24,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="w-[260px] h-[420px] mx-auto relative hover:scale-105 transition-transform duration-300" style={{ perspective: '1000px' }}>
            
            {/* Container principal com rounded corners */}
            <div className="w-full h-full bg-white rounded-[24px] shadow-lg overflow-hidden relative">
              
              {/* Seção de fundo/imagem com notch */}
              <div
                style={{
                  backgroundColor: p.bg,
                  backgroundImage: `radial-gradient(circle at calc(100% + 20px) calc(-20px), ${p.color}15 0%, transparent 40%)`,
                  clipPath: 'polygon(0 0, calc(100% - 44px) 0, calc(100% - 28px) 8px, calc(100% - 12px) 16px, 100% 32px, 100% 100%, 0 100%, 0 24px)',
                }}
                className="h-[286px] relative p-4"
              >
                <div className="text-white font-bold text-sm relative z-10">SETE TECH</div>
              </div>

              {/* Seção de conteúdo */}
              <div className="h-[134px] p-4 flex flex-col gap-2 bg-white">
                <div className="flex items-center gap-2">
                  <div style={{ backgroundColor: p.color }} className="w-3 h-3 rounded-full flex-shrink-0" />
                  <span className="font-bold text-gray-900 text-sm">{p.name}</span>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <span style={{ backgroundColor: p.color + '20', color: p.color }} className="text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">✓ {p.tag1}</span>
                  <span style={{ backgroundColor: p.color + '20', color: p.color }} className="text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">✓ {p.tag2}</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-tight flex-1">{p.desc}</p>
              </div>
            </div>

            {/* Ícone circular - encaixado perfeitamente no notch */}
            <div
              style={{
                backgroundColor: p.color,
                opacity: 0.92,
                boxShadow: `0 16px 40px ${p.color}45, inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.1)`,
                top: '-18px',
                right: '-18px',
              }}
              className="absolute w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2 border-white/30 z-30 flex-shrink-0"
            >
              {p.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}