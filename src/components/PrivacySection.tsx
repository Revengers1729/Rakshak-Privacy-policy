import React from 'react';
import { EyeOff, FileText, Sliders, Shield, ArrowUpRight, Lock } from 'lucide-react';

interface PrivacySectionProps {
  onOpenPrivacyPolicy: () => void;
}

export const PrivacySection: React.FC<PrivacySectionProps> = ({ onOpenPrivacyPolicy }) => {
  const cards = [
    {
      title: 'DATA MINIMIZATION',
      quote: 'Use information only where necessary for the requested functionality.',
      icon: EyeOff,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
    },
    {
      title: 'TRANSPARENCY',
      quote: 'Clearly explain why permissions and information are needed.',
      icon: FileText,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
    },
    {
      title: 'CONTROL',
      quote: 'Users can manage applicable permissions through Android settings.',
      icon: Sliders,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
    },
    {
      title: 'SECURITY',
      quote: 'Use appropriate technical safeguards to protect information.',
      icon: Shield,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
    },
  ];

  return (
    <section id="privacy" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            User-First Privacy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Your Information Deserves Respect.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Rakshak may require access to certain device capabilities, such as location, camera, microphone or notifications, depending on the features you choose to use.
          </p>
        </div>

        {/* 4 Privacy Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-[#090F24] border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-bold tracking-widest text-slate-100 uppercase mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    “{card.quote}”
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button: Read Privacy Policy */}
        <div className="text-center">
          <button
            id="privacy-policy-cta-btn"
            onClick={onOpenPrivacyPolicy}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-sm font-medium text-slate-200 hover:text-white transition-all duration-200 cursor-pointer shadow-lg"
          >
            <span>Read Privacy Policy</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </button>
          <p className="text-[11px] text-slate-400 mt-2 font-mono">
            Configured target: [PRIVACY_POLICY_URL]
          </p>
        </div>

      </div>
    </section>
  );
};
