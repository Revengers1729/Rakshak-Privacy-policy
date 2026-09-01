import React from 'react';
import { 
  AlertCircle, 
  Users, 
  MapPin, 
  ShieldCheck, 
  Activity, 
  Disc, 
  BarChart3, 
  Lock,
  Radio,
  Sparkles,
  Info
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      number: 'FEATURE 01',
      title: 'ONE-TOUCH SOS',
      description: 'Trigger an emergency workflow quickly when immediate assistance is needed.',
      icon: AlertCircle,
      accent: 'rose',
      renderVisual: () => (
        <div className="relative w-full h-32 flex items-center justify-center bg-slate-950/70 rounded-xl overflow-hidden border border-rose-500/20">
          <div className="absolute w-24 h-24 rounded-full bg-rose-500/15 animate-ping" />
          <div className="absolute w-16 h-16 rounded-full bg-rose-600/30 animate-pulse" />
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-rose-600 to-red-500 flex items-center justify-center text-white font-mono font-bold shadow-lg shadow-rose-500/30 text-xs">
            SOS
          </div>
        </div>
      ),
    },
    {
      number: 'FEATURE 02',
      title: 'EMERGENCY CONTACTS',
      description: 'Connect important people to your safety workflow so relevant alerts can reach the contacts you configure.',
      icon: Users,
      accent: 'cyan',
      renderVisual: () => (
        <div className="relative w-full h-32 flex items-center justify-around px-4 bg-slate-950/70 rounded-xl overflow-hidden border border-cyan-500/20">
          {/* Central Rakshak Node */}
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          {/* Connected Network lines */}
          <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 mx-2 relative">
            <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
          {/* Contact Nodes */}
          <div className="flex flex-col gap-2">
            <div className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-[10px] text-slate-200 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Contact #1
            </div>
            <div className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-[10px] text-slate-200 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Contact #2
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 'FEATURE 03',
      title: 'LOCATION AWARENESS',
      description: 'Use location-based functionality to support safety workflows, geofencing and emergency assistance where enabled.',
      icon: MapPin,
      accent: 'indigo',
      renderVisual: () => (
        <div className="relative w-full h-32 flex items-center justify-center bg-slate-950/70 rounded-xl overflow-hidden border border-indigo-500/20">
          {/* Radar background grid */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="relative w-20 h-20 rounded-full border border-indigo-500/40 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-400/30 animate-pulse flex items-center justify-center">
              <MapPin className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
          <span className="absolute bottom-2 right-2 text-[9px] font-mono text-indigo-300/80 bg-slate-900/90 px-1.5 py-0.5 rounded border border-indigo-500/20">
            Geofence Ready
          </span>
        </div>
      ),
    },
    {
      number: 'FEATURE 04',
      title: 'GUARD MODE',
      description: 'A safety-focused mode designed to keep selected protection features readily available.',
      icon: ShieldCheck,
      accent: 'cyan',
      renderVisual: () => (
        <div className="relative w-full h-32 flex items-center justify-center bg-slate-950/70 rounded-xl overflow-hidden border border-cyan-500/20">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-100">Guard Mode Active</p>
              <p className="text-[10px] text-cyan-400 font-mono">Sensors Monitored</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 'FEATURE 05',
      title: 'SHAKE / SCREAM ACTIVATION',
      description: 'Where supported and enabled, Rakshak can use configured activation mechanisms to initiate safety workflows.',
      icon: Activity,
      accent: 'amber',
      renderVisual: () => (
        <div className="relative w-full h-32 flex items-center justify-center bg-slate-950/70 rounded-xl overflow-hidden border border-amber-500/20">
          <div className="flex items-end gap-1.5 h-12">
            {[40, 75, 95, 60, 85, 100, 70, 50, 80, 45, 90, 60].map((h, i) => (
              <div
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-amber-500/60 to-amber-300"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <span className="absolute top-2 left-2 text-[9px] font-mono text-amber-300 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-500/30">
            Sensor Trigger
          </span>
        </div>
      ),
    },
    {
      number: 'FEATURE 06',
      title: 'EMERGENCY RECORDING',
      description: 'Where enabled and permitted, emergency-related recording functionality can help capture relevant information during a safety event.',
      icon: Disc,
      accent: 'rose',
      renderVisual: () => (
        <div className="relative w-full h-32 flex items-center justify-center bg-slate-950/70 rounded-xl overflow-hidden border border-rose-500/20">
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-200">Incident Recording</p>
              <p className="text-[10px] font-mono text-rose-400">00:04:18 • Encrypted Buffer</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 'FEATURE 07',
      title: 'LIVE SAFETY STATUS',
      description: 'Keep track of relevant safety and device status information through the Rakshak interface.',
      icon: BarChart3,
      accent: 'emerald',
      renderVisual: () => (
        <div className="relative w-full h-32 flex items-center justify-center bg-slate-950/70 rounded-xl overflow-hidden border border-emerald-500/20 p-3">
          <div className="w-full space-y-1.5">
            <div className="flex justify-between text-[10px] text-slate-300">
              <span>Telemetry Sync</span>
              <span className="text-emerald-400 font-mono">100%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 w-full" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 pt-1">
              <span>Sensor Health: Normal</span>
              <span className="text-cyan-400">Battery: 94%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 'FEATURE 08',
      title: 'SECURE VAULT',
      description: 'Provide a protected area for information that the user chooses to keep within the application.',
      icon: Lock,
      accent: 'purple',
      renderVisual: () => (
        <div className="relative w-full h-32 flex items-center justify-center bg-slate-950/70 rounded-xl overflow-hidden border border-purple-500/20">
          <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-400/40 flex items-center gap-3">
            <Lock className="w-5 h-5 text-purple-300 animate-pulse" />
            <div>
              <p className="text-xs font-semibold text-purple-100">Protected Storage</p>
              <p className="text-[10px] font-mono text-purple-300/80">Client Cryptographic Lock</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Everything You Need.{' '}
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text">
              One Safety Ecosystem.
            </span>
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            A modular suite of safety tools engineered to assist you quickly and reliably whenever protection is needed.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative p-6 rounded-2xl bg-[#090F24]/85 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400/90 uppercase">
                      {item.number}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 tracking-wide mb-2 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Custom Micro Visual Module */}
                <div className="mt-auto">
                  {item.renderVisual()}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Notice Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-3xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-400">
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span>
            Availability of individual features requires compatible device hardware, necessary operating system permissions, and adequate battery and network connectivity.
          </span>
        </div>

      </div>
    </section>
  );
};
