import React from 'react';

const founders = [
  { name: 'Fundador 1', tag1: 'DESENVOLVIMENTO WEB', tag2: 'FRONTEND', desc: 'Especialista em sistemas web de alta performance para empresas e órgãos públicos do Piauí.', color: '#8b5cf6', icon: '💻', bg: '#1E0A35' },
  { name: 'Fundador 2', tag1: 'AUTOMAÇÃO & IA', tag2: 'INFRAESTRUTURA', desc: 'Lidera a arquitetura técnica e integração de modelos de IA nos produtos da SETE TECH.', color: '#10b981', icon: '🤖', bg: '#0A1A10' },
  { name: 'Fundador 3', tag1: 'MARKETING DIGITAL', tag2: 'DESIGN & UX', desc: 'Responsável pela identidade visual e estratégias de crescimento digital da SETE TECH.', color: '#f59e0b', icon: '🎨', bg: '#1A1200' },
  { name: 'Fundador 4', tag1: 'GESTÃO & NEGÓCIOS', tag2: 'ÓRGÃOS PÚBLICOS', desc: 'Especialista em soluções para prefeituras, autarquias e secretarias do Piauí.', color: '#3b82f6', icon: '🏢', bg: '#0A0F1E' }
];

const ProjectCard = ({ founder }) => (
  <div className="group relative w-[260px] h-[420px] transition-all duration-500 hover:-translate-y-3">
    {/* Notch Container */}
    <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}>
      
      {/* Photo Section (68% - 286px) */}
      <div className="h-[286px] relative overflow-hidden" style={{ backgroundColor: founder.bg }}>
        <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(ellipse at 50% 45%, ${founder.color}, transparent 70%)` }}></div>
        <div className="absolute top-4 left-4 text-white text-[12px] tracking-widest font-bold opacity-80">SETE TECH</div>
        <div className="w-full h-full transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.82) contrast(1.05)' }}></div>
      </div>

      {/* Content Section (32% - 134px) */}
      <div className="h-[134px] bg-white p-5 flex flex-col gap-[10px]">
        <div className="flex items-center gap-2">
          <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: founder.color }}></div>
          <h3 className="text-[19px] font-bold text-[#0D0D0D]">{founder.name}</h3>
        </div>
        <div className="flex gap-2">
          {[founder.tag1, founder.tag2].map((t, i) => (
            <span key={i} className="text-[9px] px-2 py-1 rounded-full border flex items-center gap-1" style={{ borderColor: founder.color + '40', color: founder.color }}>
              ✓ {t}
            </span>
          ))}
        </div>
        <p className="text-[13px] text-[#666666] opacity-80 leading-tight">{founder.desc}</p>
      </div>
    </div>

    {/* Notch Icon (Perfectly positioned) */}
    <div className="absolute -top-[20px] -right-[20px] w-[48px] h-[48px] rounded-full flex items-center justify-center text-[20px] z-10 shadow-lg border-[2px] border-white/20" style={{ backgroundColor: founder.color, opacity: 0.93 }}>
      {founder.icon}
    </div>
  </div>
);

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-50 flex justify-center gap-8 flex-wrap">
      {founders.map((f, i) => <ProjectCard key={i} founder={f} />)}
    </section>
  );
}