import React from 'react';
import { UserCheck, Shield, Zap, Send, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'SET UP',
      desc: 'Configure your account, permissions and relevant safety preferences.',
      icon: UserCheck,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
    },
    {
      num: '02',
      title: 'PROTECT',
      desc: 'Enable the safety features you want to use.',
      icon: Shield,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/30',
    },
    {
      num: '03',
      title: 'RESPOND',
      desc: 'When an enabled safety trigger occurs, Rakshak starts the applicable workflow.',
      icon: Zap,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
    },
    {
      num: '04',
      title: 'CONNECT',
      desc: 'Relevant information can be processed or communicated according to the configured feature and permissions.',
      icon: Send,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative bg-[#070D1E] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Simple Four-Stage Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Simple When It Matters.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Rakshak simplifies critical processes into clear, dependable steps designed for clarity and swift execution.
          </p>
        </div>

        {/* 4-Step Animated Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Subtle Horizontal Guide Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 -translate-y-6 h-0.5 bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-emerald-500/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-[#091026] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/5 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-black font-mono tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">
                        {step.num}
                      </span>
                      <div className={`w-11 h-11 rounded-xl ${step.bg} ${step.color} border ${step.border} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-100 tracking-wider mb-2 uppercase">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Phase {step.num}</span>
                    <span className="text-cyan-400">Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
