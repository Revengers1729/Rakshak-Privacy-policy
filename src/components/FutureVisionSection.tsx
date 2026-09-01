import React from 'react';
import { Sparkles, Brain, Cpu, ShieldCheck } from 'lucide-react';

export const FutureVisionSection: React.FC = () => {
  const cards = [
    {
      title: 'SMARTER',
      quote: 'Technology that understands context.',
      desc: 'Exploring privacy-safe on-device contextual awareness for smarter hazard detection.',
      icon: Brain,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
    },
    {
      title: 'SIMPLER',
      quote: 'Safety tools that remain easy to use.',
      desc: 'Refining human-centered interactions so emergency triggers require zero cognitive overhead.',
      icon: Cpu,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/30',
    },
    {
      title: 'RESPONSIBLE',
      quote: 'Innovation with privacy and security in mind.',
      desc: 'Advancing local cryptographic safeguards and transparent data sovereignty principles.',
      icon: ShieldCheck,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/30',
    },
  ];

  return (
    <section id="vision" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Future Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Building the Future of Personal Safety.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Rakshak is being developed with a long-term vision: make safety technology more accessible, thoughtful and intelligent without sacrificing privacy or user control.
          </p>
        </div>

        {/* 3 Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 sm:p-8 rounded-2xl bg-[#091026] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${card.bg} ${card.color} border ${card.border} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
                      Future Vision
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 uppercase tracking-wider mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm font-semibold text-cyan-300 mb-2">
                    “{card.quote}”
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
