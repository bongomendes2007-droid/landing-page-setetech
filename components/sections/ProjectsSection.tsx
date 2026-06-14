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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="w-[260px] h-[420px] mx-auto bg-white rounded-[24px] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <div style={{ backgroundColor: p.bg }} className="h-[286px] relative p-4">
              <div className="text-white font-bold text-sm">SETE TECH</div>
              <div style={{ backgroundColor: p.color }} className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg">
                {p.icon}
              </div>
            </div>
            <div className="h-[134px] p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div style={{ backgroundColor: p.color }} className="w-3 h-3 rounded-full" />
                <span className="font-bold text-gray-900">{p.name}</span>
              </div>
              <div className="flex gap-1">
                <span style={{ backgroundColor: p.color + '20', color: p.color }} className="text-[10px] font-bold px-2 py-1 rounded-full">✓ {p.tag1}</span>
                <span style={{ backgroundColor: p.color + '20', color: p.color }} className="text-[10px] font-bold px-2 py-1 rounded-full">✓ {p.tag2}</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-tight">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}