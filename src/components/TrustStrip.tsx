import React from 'react';
import { EyeOff, ShieldCheck, Activity } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const principles = [
    {
      title: 'PRIVACY',
      quote: "Respect the user's information.",
      icon: EyeOff,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
    },
    {
      title: 'SECURITY',
      quote: 'Protect the system at every layer.',
      icon: ShieldCheck,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
    },
    {
      title: 'RELIABILITY',
      quote: 'Design for real-world conditions.',
      icon: Activity,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/20',
    },
  ];

  return (
    <section className="relative py-12 border-y border-slate-800/80 bg-[#070D1E]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold">
            Built around three principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-6 rounded-2xl bg-slate-900/60 border ${item.border} hover:bg-slate-900/90 transition-all duration-300 flex items-start gap-4`}
              >
                <div className={`p-3 rounded-xl ${item.bg} ${item.color} flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-slate-200 uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    “{item.quote}”
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
