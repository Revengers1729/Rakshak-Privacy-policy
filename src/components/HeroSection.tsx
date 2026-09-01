import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  Shield, 
  MapPin, 
  Users, 
  BatteryMedium, 
  Lock, 
  Radio, 
  ChevronRight, 
  AlertCircle, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onHowItWorksClick,
}) => {
  const [guardMode, setGuardMode] = useState(true);
  const [sosPressed, setSosPressed] = useState(false);

  return (
    <section id="home" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left z-10">
            {/* Subtle Tag Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Rakshak – Autonomous Safety Ecosystem</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-6">
              Your Safety.{' '}
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Always Within Reach.
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Rakshak brings emergency assistance, safety awareness, location-based protection and intelligent security features together in one ecosystem.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 active:scale-[0.98] cursor-pointer min-h-[48px]"
              >
                <span>Explore Rakshak</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                id="hero-how-it-works-btn"
                onClick={onHowItWorksClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-200 active:scale-[0.98] cursor-pointer min-h-[48px]"
              >
                <span>How It Works</span>
              </button>
            </div>

            {/* Privacy & Security Note */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-400">
              <Lock className="w-4 h-4 text-cyan-400/80 flex-shrink-0" />
              <span>Designed with privacy and security in mind.</span>
            </div>
          </div>

          {/* Right Column: Floating Smartphone Mockup & Floating Status Cards */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Soft Ambient Glow behind device */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[520px] bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-sky-400/20 rounded-full blur-[70px] pointer-events-none" />

            {/* Floating Card 1: Top Right */}
            <div className="absolute -top-6 -right-2 sm:-right-6 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0b1329]/90 border border-cyan-500/30 backdrop-blur-md shadow-xl animate-float-subtle">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-200">Protection Active</p>
                <p className="text-[10px] text-cyan-400/90 font-mono">Autonomous Safeguard</p>
              </div>
            </div>

            {/* Floating Card 2: Left Middle */}
            <div 
              className="absolute top-1/3 -left-4 sm:-left-10 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0b1329]/90 border border-indigo-500/30 backdrop-blur-md shadow-xl animate-float-subtle"
              style={{ animationDelay: '2s' }}
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-200">Location Protected</p>
                <p className="text-[10px] text-indigo-300/90 font-mono">Precision Boundary</p>
              </div>
            </div>

            {/* Floating Card 3: Bottom Right */}
            <div 
              className="absolute -bottom-4 -right-2 sm:-right-4 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0b1329]/90 border border-sky-500/30 backdrop-blur-md shadow-xl animate-float-subtle"
              style={{ animationDelay: '4s' }}
            >
              <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-200">Emergency Network Ready</p>
                <p className="text-[10px] text-slate-400 font-mono">Configured Contacts</p>
              </div>
            </div>

            {/* Smartphone Physical Shell */}
            <div className="relative w-[300px] sm:w-[320px] rounded-[44px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border border-slate-600/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.2)]">
              
              {/* Top Speaker / Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-900/60 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-cyan-400" />
                </div>
              </div>

              {/* Screen Interior */}
              <div className="relative w-full h-[580px] bg-[#070D1D] rounded-[36px] overflow-hidden p-4 flex flex-col justify-between border border-cyan-500/10">
                
                {/* Phone Top Status Bar */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 pb-3 px-1">
                  <span className="font-mono text-slate-300 font-medium">09:41</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-[10px] text-cyan-400">
                      <Lock className="w-3 h-3" />
                      <span className="text-[9px]">TLS 1.3</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-300">
                      <BatteryMedium className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px]">94%</span>
                    </div>
                  </div>
                </div>

                {/* Phone Header / App Wordmark */}
                <div className="flex items-center justify-between mt-1 px-1">
                  <Logo size="sm" />
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>

                {/* Safety Status Banner inside App */}
                <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-slate-900 to-[#0C162E] border border-cyan-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-200">System Ready</p>
                      <p className="text-[10px] text-slate-400">All modules synchronized</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Large Center SOS Trigger Module */}
                <div className="my-auto text-center py-2">
                  <div className="relative inline-flex items-center justify-center">
                    {/* Pulsing rings */}
                    <div className="absolute w-36 h-36 rounded-full bg-red-500/15 animate-ping opacity-60 pointer-events-none" />
                    <div className="absolute w-44 h-44 rounded-full bg-cyan-500/10 animate-wave-ring pointer-events-none" />
                    
                    {/* Interactive SOS Trigger Button */}
                    <button
                      type="button"
                      onClick={() => setSosPressed(!sosPressed)}
                      className={`relative w-28 h-28 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer ${
                        sosPressed
                          ? 'bg-gradient-to-br from-red-500 to-rose-700 text-white shadow-rose-500/50 scale-95'
                          : 'bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white shadow-red-600/40 hover:scale-105'
                      }`}
                      title="Tap to test emergency trigger simulation"
                      aria-label="SOS Button Mockup"
                    >
                      <AlertCircle className="w-7 h-7 mb-0.5 drop-shadow" />
                      <span className="text-base font-black tracking-widest font-mono">SOS</span>
                      <span className="text-[8px] uppercase tracking-wider text-rose-200">
                        {sosPressed ? 'Armed' : 'Hold / Tap'}
                      </span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-3 font-medium">
                    {sosPressed ? 'Emergency Workflow Simulated' : 'Touch to activate emergency protocol'}
                  </p>
                </div>

                {/* Quick Status Widgets inside App */}
                <div className="space-y-2 mb-2">
                  {/* Guard Mode Toggle row */}
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-[11px] text-slate-300 font-medium">Guard Mode</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGuardMode(!guardMode)}
                      className={`w-9 h-5 rounded-full transition-colors relative cursor-pointer ${
                        guardMode ? 'bg-cyan-500' : 'bg-slate-700'
                      }`}
                      aria-label="Toggle Guard Mode"
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                          guardMode ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Location & Contacts Mini Row */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <div className="truncate">
                        <p className="text-[9px] text-slate-400 leading-tight">Geofence</p>
                        <p className="text-[10px] font-semibold text-slate-200 truncate">Safe Zone (1.2 km)</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-2">
                      <Users className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                      <div className="truncate">
                        <p className="text-[9px] text-slate-400 leading-tight">Contacts</p>
                        <p className="text-[10px] font-semibold text-slate-200 truncate">3 Configured</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mb-1" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
