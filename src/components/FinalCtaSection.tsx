import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenGetRakshak: () => void;
  onExploreFeatures: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({
  onOpenGetRakshak,
  onExploreFeatures,
}) => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#060913] via-[#091128] to-[#060913] border-t border-slate-800">
      
      {/* Background Animated Radar Concentric Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[300px] h-[300px] rounded-full border border-cyan-400 animate-ping" />
        <div className="w-[550px] h-[550px] rounded-full border border-cyan-500/30 animate-pulse-slow absolute" />
        <div className="w-[800px] h-[800px] rounded-full border border-indigo-500/20 absolute" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>Ecosystem Readiness</span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight leading-[1.15] mb-6">
          Stay Ready.{' '}
          <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text">
            Stay Connected. Stay Protected.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Rakshak brings safety-focused technology together into one thoughtful ecosystem.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-get-rakshak"
            onClick={onOpenGetRakshak}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all duration-200 shadow-xl shadow-cyan-500/25 active:scale-[0.98] cursor-pointer min-h-[48px]"
          >
            <ShieldCheck className="w-5 h-5 text-slate-950" />
            <span>Get Rakshak</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            id="final-cta-explore"
            onClick={onExploreFeatures}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-200 active:scale-[0.98] cursor-pointer min-h-[48px]"
          >
            <span>Explore Features</span>
          </button>
        </div>

      </div>
    </section>
  );
};
