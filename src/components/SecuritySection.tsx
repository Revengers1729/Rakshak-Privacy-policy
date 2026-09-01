import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Server, 
  Database, 
  KeyRound, 
  FileCode, 
  Lock, 
  ArrowDown, 
  Sparkles,
  AlertTriangle,
  Fingerprint,
  CheckCircle2
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null);

  const architectureLayers = [
    {
      id: 1,
      title: 'RAKSHAK APP',
      type: 'Client Core',
      desc: 'Local client interface and runtime environment.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/15',
      border: 'border-cyan-500/40',
    },
    {
      id: 2,
      title: 'APPLICATION SECURITY',
      type: 'Runtime Protection',
      desc: 'Code obfuscation, tamper checks, and runtime defenses.',
      icon: FileCode,
      color: 'text-sky-400',
      bg: 'bg-sky-500/15',
      border: 'border-sky-500/40',
    },
    {
      id: 3,
      title: 'AUTHENTICATION',
      type: 'Identity Control',
      desc: 'Cryptographic tokens and zero-trust identity verification.',
      icon: KeyRound,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/15',
      border: 'border-indigo-500/40',
    },
    {
      id: 4,
      title: 'SERVER-SIDE AUTHORIZATION',
      type: 'Backend Policy Enforcement',
      desc: 'Authoritative evaluation of all emergency and sync actions.',
      icon: Server,
      color: 'text-purple-400',
      bg: 'bg-purple-500/15',
      border: 'border-purple-500/40',
    },
    {
      id: 5,
      title: 'DATABASE SECURITY',
      type: 'Data Isolation',
      desc: 'Granular access control rules and encrypted persistent records.',
      icon: Database,
      color: 'text-blue-400',
      bg: 'bg-blue-500/15',
      border: 'border-blue-500/40',
    },
    {
      id: 6,
      title: 'INTEGRITY VERIFICATION',
      type: 'Environment Attestation',
      desc: 'Hardware-backed integrity signals and continuous telemetry sanity.',
      icon: Fingerprint,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/15',
      border: 'border-emerald-500/40',
    },
  ];

  const securityCards = [
    {
      num: '01',
      title: 'APPLICATION PROTECTION',
      desc: 'Release builds can use modern Android application protection and code obfuscation techniques.',
      icon: FileCode,
    },
    {
      num: '02',
      title: 'SERVER-SIDE VALIDATION',
      desc: 'Critical authorization decisions should be enforced on trusted backend systems rather than relying solely on client-side state.',
      icon: Server,
    },
    {
      num: '03',
      title: 'DATABASE RULES',
      desc: 'Backend access should be restricted using authentication and authorization rules.',
      icon: Database,
    },
    {
      num: '04',
      title: 'APPLICATION INTEGRITY',
      desc: 'Integrity signals can help identify potentially compromised or modified environments.',
      icon: Fingerprint,
    },
    {
      num: '05',
      title: 'SECURE COMMUNICATION',
      desc: 'Sensitive communication should use secure transport mechanisms.',
      icon: Lock,
    },
    {
      num: '06',
      title: 'PRIVACY BY DESIGN',
      desc: 'Collect and process information only when it is necessary for the feature being provided.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="security" className="py-20 lg:py-28 relative bg-[#070D1F] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Zero-Compromise Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Security Isn't a Feature.{' '}
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text">
              It's a Foundation.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Rakshak is engineered around layered defenses, server-authoritative validations, and continuous environment verifications.
          </p>
        </div>

        {/* Security Architecture Visual Stack */}
        <div className="max-w-4xl mx-auto mb-20 p-6 sm:p-10 rounded-3xl bg-[#091026] border border-slate-800 shadow-2xl relative">
          <div className="text-center mb-8">
            <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              Layered Architecture Stack
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Click any layer to inspect verification mechanics
            </p>
          </div>

          <div className="space-y-3">
            {architectureLayers.map((layer, index) => {
              const Icon = layer.icon;
              const isSelected = selectedLayer === layer.id;

              return (
                <div key={layer.id} className="flex flex-col items-center">
                  <div
                    onClick={() => setSelectedLayer(isSelected ? null : layer.id)}
                    className={`w-full p-4 rounded-2xl bg-slate-900/90 border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? `${layer.border} shadow-lg shadow-cyan-500/15 bg-slate-900`
                        : 'border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${layer.bg} ${layer.color} border ${layer.border} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-slate-100 tracking-wider">
                            {layer.title}
                          </span>
                          <span className="text-[10px] text-cyan-400/90 font-mono hidden sm:inline">
                            [{layer.type}]
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {layer.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Layer 0{layer.id}</span>
                      </span>
                    </div>
                  </div>

                  {index < architectureLayers.length - 1 && (
                    <div className="my-1 flex justify-center text-cyan-500/50">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 6 Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="p-6 rounded-2xl bg-[#090F24] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-cyan-400">
                      {card.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-100 tracking-wide mb-2 uppercase">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    “{card.desc}”
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Absolute Security Disclaimer (Mandatory) */}
        <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-slate-900/90 border border-amber-500/25 flex items-start gap-3.5 text-xs text-slate-300 leading-relaxed shadow-lg">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-200 mb-1">
              Responsible Security Philosophy:
            </p>
            <p className="text-slate-300">
              No application can guarantee absolute security. Rakshak is designed around layered security controls, server-authoritative validations, and continuous improvement.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
