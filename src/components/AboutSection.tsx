import React from 'react';
import { Logo } from './Logo';
import { Shield, Heart, Eye, BellRing } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const brandPillars = [
    {
      title: 'Protection',
      desc: 'Active autonomous features ready to engage during urgent moments.',
      icon: Shield,
    },
    {
      title: 'Awareness',
      desc: 'Clear geofencing and real-time device health information.',
      icon: Eye,
    },
    {
      title: 'Preparedness',
      desc: 'Configurable emergency contacts and predefined alert pathways.',
      icon: BellRing,
    },
    {
      title: 'Assistance',
      desc: 'Rapid transmission of location and status to trusted circles.',
      icon: Heart,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#070D1E] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              Brand Story
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              Why Rakshak?
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Rakshak was created around a simple idea: <span className="text-cyan-300 font-semibold">safety technology should not feel complicated</span>. The goal is to bring useful emergency and awareness tools into one carefully designed ecosystem while keeping security, privacy and user control at the center.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Named after the concept of protection, awareness, preparedness and timely assistance, Rakshak combines modern software engineering with a calm, human-first design aesthetic that empowers individuals wherever they go.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 italic">
                “Technology that stays ready when you need it.”
              </div>
            </div>
          </div>

          {/* Right Column: 4 Meaning Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brandPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-[#091026] border border-slate-800 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
