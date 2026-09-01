import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  Shield, 
  AlertCircle, 
  MapPin, 
  Smartphone, 
  Radio, 
  Lock, 
  CheckCircle2, 
  BatteryMedium,
  Sliders,
  Users
} from 'lucide-react';

export const AppShowcase: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<number>(0);

  const screens = [
    {
      id: 0,
      name: 'Rakshak Home',
      label: 'Home Dashboard',
      badge: 'Main Interface',
      renderPhone: () => (
        <div className="flex flex-col h-full justify-between p-4 bg-[#070D1F] text-slate-100 text-xs">
          {/* Status Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <Logo size="sm" />
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Armed</span>
            </div>
          </div>

          {/* Core Safety Status Widget */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0B1530] border border-cyan-500/20 my-auto text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-400">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-100">All Systems Operational</h4>
            <p className="text-[11px] text-slate-400">Continuous telemetry sync active</p>
            <div className="flex justify-center gap-2 pt-1 text-[10px] font-mono text-cyan-300">
              <span className="bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">GPS: Lock</span>
              <span className="bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">Batt: 94%</span>
            </div>
          </div>

          {/* Quick Action Matrix */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <div>
                <p className="text-[10px] text-slate-400">Geofence</p>
                <p className="text-[11px] font-bold text-slate-200">Safe Home</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-400" />
              <div>
                <p className="text-[10px] text-slate-400">Contacts</p>
                <p className="text-[11px] font-bold text-slate-200">3 Synced</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      name: 'SOS Trigger',
      label: 'Emergency SOS',
      badge: 'Rapid Response',
      renderPhone: () => (
        <div className="flex flex-col h-full justify-between p-4 bg-[#14080D] text-slate-100 text-xs">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-rose-900/40 pb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold">
              Emergency Dispatch Active
            </span>
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          </div>

          {/* Glowing SOS Pulse Circle */}
          <div className="my-auto text-center space-y-3">
            <div className="relative inline-flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-rose-500/20 animate-ping absolute" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-600 to-red-600 flex flex-col items-center justify-center text-white shadow-xl shadow-rose-600/50">
                <AlertCircle className="w-7 h-7 mb-0.5" />
                <span className="font-mono font-black text-sm tracking-wider">SOS</span>
              </div>
            </div>
            <p className="text-xs text-rose-200 font-medium">Relaying Coordinates to 3 Contacts</p>
            <p className="text-[10px] font-mono text-slate-400">Lat 28.6139 • Long 77.2090</p>
          </div>

          {/* Cancellation Safeguard */}
          <div className="p-2.5 rounded-xl bg-rose-950/50 border border-rose-500/30 text-center">
            <span className="text-[11px] text-rose-300 font-mono">Press to cancel within 5s</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      name: 'Guard Mode',
      label: 'Autonomous Guard',
      badge: 'Continuous Shield',
      renderPhone: () => (
        <div className="flex flex-col h-full justify-between p-4 bg-[#070D1E] text-slate-100 text-xs">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-[11px] font-bold text-slate-200">Guard Mode Settings</span>
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
          </div>

          {/* Active Shield Visual */}
          <div className="my-auto space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-[11px] text-slate-200 font-medium">Auto Fall & Impact Detection</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/40">Active</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-indigo-400" />
                <span className="text-[11px] text-slate-200 font-medium">Shake / Gesture Trigger</span>
              </div>
              <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-500/40">Active</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-400" />
                <span className="text-[11px] text-slate-200 font-medium">Emergency Vault Lock</span>
              </div>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-500/40">Arm Ready</span>
            </div>
          </div>

          {/* Status */}
          <div className="text-center text-[10px] text-slate-400 font-mono">
            Optimized Battery Conservation: 0.8% / hr
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: 'Safety / Location',
      label: 'Location Radar',
      badge: 'Boundary Tracking',
      renderPhone: () => (
        <div className="flex flex-col h-full justify-between p-4 bg-[#060A18] text-slate-100 text-xs">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-[11px] font-bold text-slate-200">Live Boundary Radar</span>
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          </div>

          {/* Stylized Vector Radar Map Inside App */}
          <div className="relative h-44 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden my-auto flex items-center justify-center">
            {/* Concentric rings */}
            <div className="w-32 h-32 rounded-full border border-cyan-500/30 animate-pulse absolute" />
            <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/40 absolute" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38BDF8]" />
            <span className="absolute bottom-2 left-2 text-[9px] font-mono text-cyan-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-700">
              Safe Zone: Active
            </span>
          </div>

          {/* Details */}
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex justify-between text-[10px] font-mono text-slate-300">
            <span>Accuracy: ±3 meters</span>
            <span className="text-emerald-400">Encrypted Stream</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            Designed For Real Devices
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            The Rakshak App Experience.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Intuitive touch controls, high-contrast layouts, and rapid responses crafted for high-stress situations.
          </p>
        </div>

        {/* Screen Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {screens.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedScreen(s.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer min-h-[44px] flex items-center gap-2 ${
                selectedScreen === s.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{s.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                selectedScreen === s.id ? 'bg-slate-950 text-cyan-300' : 'bg-slate-800 text-slate-400'
              }`}>
                {s.badge}
              </span>
            </button>
          ))}
        </div>

        {/* 4 Phone Mockup Showcase Stage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {screens.map((screen) => {
            const isFeatured = selectedScreen === screen.id;

            return (
              <div
                key={screen.id}
                onClick={() => setSelectedScreen(screen.id)}
                className={`relative rounded-[36px] p-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'border-cyan-400 shadow-[0_20px_40px_-10px_rgba(56,189,248,0.25)] -translate-y-2'
                    : 'border-slate-700/60 opacity-80 hover:opacity-100 hover:border-slate-600'
                }`}
              >
                {/* Phone Notch/Island */}
                <div className="w-16 h-3 bg-slate-950 rounded-full mx-auto mb-2" />

                {/* Inner Display Box */}
                <div className="w-full h-[360px] rounded-[26px] overflow-hidden border border-slate-800/80 shadow-inner">
                  {screen.renderPhone()}
                </div>

                {/* Bottom Bar */}
                <div className="pt-2 text-center">
                  <p className="text-xs font-bold text-slate-200">{screen.name}</p>
                  <p className="text-[10px] text-slate-400 font-mono">{screen.label}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
