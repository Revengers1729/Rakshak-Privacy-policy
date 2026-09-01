import React from 'react';
import { Logo } from './Logo';
import { Smartphone, Shield, Server, Zap, Users, Sparkles, Layers } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-20 lg:py-28 relative bg-[#070D1E] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Interconnected Safety Grid
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            More Than an App.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Rakshak is designed as an ecosystem where the application, security architecture and supporting services work together.
          </p>
        </div>

        {/* Structured Ecosystem Hierarchy Diagram */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#091026] border border-slate-800 shadow-2xl relative">
          
          {/* Top Apex Node: RAKSHAK Core */}
          <div className="flex justify-center mb-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-cyan-950/80 to-[#0A1633] border border-cyan-500/40 shadow-lg shadow-cyan-500/10 flex flex-col items-center text-center">
              <Logo size="md" showWordmark={true} />
              <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-300 mt-2">
                Central Ecosystem Controller
              </span>
            </div>
          </div>

          {/* Central Connecting Lines */}
          <div className="w-full flex justify-center mb-6">
            <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-indigo-500" />
          </div>

          {/* Triad Mid-Tier Nodes: Mobile App, Safety Tools, Secure Backend */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {/* Node 1: Mobile App */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-400 mb-2">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold font-mono text-slate-100 uppercase tracking-wider mb-1">
                MOBILE APP
              </h4>
              <p className="text-[11px] text-slate-400">
                User controls, sensor triggers & immediate emergency dispatches.
              </p>
            </div>

            {/* Node 2: Safety Tools */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all text-center">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center mx-auto text-indigo-400 mb-2">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold font-mono text-slate-100 uppercase tracking-wider mb-1">
                SAFETY TOOLS
              </h4>
              <p className="text-[11px] text-slate-400">
                Geofencing, Guard Mode, incident logging & telemetry analysis.
              </p>
            </div>

            {/* Node 3: Secure Backend */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-all text-center">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center mx-auto text-sky-400 mb-2">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold font-mono text-slate-100 uppercase tracking-wider mb-1">
                SECURE BACKEND
              </h4>
              <p className="text-[11px] text-slate-400">
                Encrypted sync, server-side validation & dispatch orchestration.
              </p>
            </div>
          </div>

          {/* Down Connector */}
          <div className="w-full flex justify-center mb-6">
            <div className="w-px h-8 bg-gradient-to-b from-indigo-500 to-rose-500" />
          </div>

          {/* Lower Stage: Emergency Workflows */}
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-center mb-6">
            <div className="flex items-center justify-center gap-2 text-rose-300 font-mono text-xs font-bold uppercase mb-1">
              <Zap className="w-4 h-4 text-rose-400" />
              <span>EMERGENCY WORKFLOWS</span>
            </div>
            <p className="text-[11px] text-slate-300">
              Coordinated payload delivery, continuous tracking links & escalation policies.
            </p>
          </div>

          {/* Down Connector */}
          <div className="w-full flex justify-center mb-6">
            <div className="w-px h-8 bg-gradient-to-b from-rose-500 to-emerald-500" />
          </div>

          {/* Final Stage: Authorized Contacts */}
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-300 font-mono text-xs font-bold uppercase mb-1">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>AUTHORIZED CONTACTS</span>
            </div>
            <p className="text-[11px] text-slate-300">
              Verified family, trusted companions & emergency responders receive secure status updates.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
