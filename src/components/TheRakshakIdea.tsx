import React, { useState } from 'react';
import { User, Smartphone, Shield, Server, Users, ArrowDown, Check } from 'lucide-react';

export const TheRakshakIdea: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const workflowSteps = [
    {
      id: 1,
      title: 'USER',
      subtitle: 'Personal Safeguard',
      desc: 'One conscious gesture or configured automated activation.',
      icon: User,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
    },
    {
      id: 2,
      title: 'RAKSHAK APP',
      subtitle: 'Client Engine',
      desc: 'Instant processing of sensor, telemetry, and workflow inputs.',
      icon: Smartphone,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/30',
    },
    {
      id: 3,
      title: 'SAFETY FEATURES',
      subtitle: 'Active Guard Module',
      desc: 'SOS dispatch, live telemetry coordination, and vault locking.',
      icon: Shield,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/30',
    },
    {
      id: 4,
      title: 'SECURE BACKEND',
      subtitle: 'Encrypted Cloud Relay',
      desc: 'Server-side authorization and integrity validation rules.',
      icon: Server,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
    },
    {
      id: 5,
      title: 'AUTHORIZED CONTACTS / SERVICES',
      subtitle: 'Targeted Dispatches',
      desc: 'Configured emergency contacts receive actionable updates.',
      icon: Users,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
    },
  ];

  return (
    <section id="idea" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4">
            The Rakshak Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-6">
            Safety Should Feel Simple.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Emergency situations can be unpredictable. Rakshak is designed to bring important safety tools together into a focused experience so users can access the right functionality without unnecessary complexity.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-gradient-to-r from-cyan-500/20 via-indigo-500/40 to-emerald-500/20 z-0" />

          {/* Grid of Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {workflowSteps.map((node, index) => {
              const Icon = node.icon;
              const isHovered = activeStep === node.id;

              return (
                <div key={node.id} className="flex flex-col items-center">
                  <div
                    onMouseEnter={() => setActiveStep(node.id)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`w-full p-5 rounded-2xl bg-slate-900/90 border transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
                      isHovered
                        ? `${node.border} shadow-lg shadow-cyan-500/10 -translate-y-1.5`
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="relative mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl ${node.bg} ${node.color} flex items-center justify-center border ${node.border} transition-transform duration-300 ${
                          isHovered ? 'scale-110' : ''
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300 flex items-center justify-center">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xs font-bold font-mono tracking-wider text-slate-100 uppercase mb-1">
                      {node.title}
                    </h3>
                    <p className="text-[11px] font-medium text-cyan-300/80 mb-2">
                      {node.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 leading-normal">
                      {node.desc}
                    </p>

                    {isHovered && (
                      <div className="mt-3 inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                        <Check className="w-3 h-3" />
                        <span>Ready State</span>
                      </div>
                    )}
                  </div>

                  {/* Vertical Arrow for Mobile */}
                  {index < workflowSteps.length - 1 && (
                    <div className="lg:hidden my-2 flex justify-center text-cyan-500/60">
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
