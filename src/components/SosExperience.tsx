import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  AlertCircle, 
  Cpu, 
  FileText, 
  Send, 
  Play, 
  RotateCcw, 
  CheckCircle2,
  Info,
  Clock
} from 'lucide-react';

export const SosExperience: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const steps = [
    {
      title: 'Normal State',
      status: 'Standby / Guard Mode',
      desc: 'Rakshak remains ready in background with minimal battery draw.',
      detail: 'Sensors calibrated • Geofence active • Low latency listeners initialized',
      icon: Shield,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
    },
    {
      title: 'SOS Activated',
      status: 'Trigger Event Received',
      desc: 'User triggers SOS button or configured automatic activation occurs.',
      detail: 'Haptic feedback confirmed • Cancellation window initiated (if configured)',
      icon: AlertCircle,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
    },
    {
      title: 'Safety Workflow Started',
      status: 'Pipeline Engaged',
      desc: 'Autonomous emergency pipeline orchestrates device state and priority channels.',
      detail: 'High-accuracy GPS locked • Ambient sensors activated • Power profile escalated',
      icon: Cpu,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
    },
    {
      title: 'Relevant Information Prepared',
      status: 'Telemetry Packet Formatted',
      desc: 'Location coordinates, timestamps, and configured emergency info are prepared.',
      detail: 'Payload encrypted • Battery & situational status bundled for authorized delivery',
      icon: FileText,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/30',
    },
    {
      title: 'Authorized Contact Notified',
      status: 'Dispatches Delivered',
      desc: 'Configured emergency contacts receive actionable safety alerts.',
      detail: 'Encrypted relay confirmed • Location track link enabled for authorized contacts',
      icon: Send,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
    },
  ];

  // Auto-play through simulation steps
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  return (
    <section id="sos-experience" className="py-20 lg:py-28 relative bg-[#070C1B]/80 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/50 border border-rose-500/30 text-xs font-semibold uppercase tracking-wider text-rose-300 mb-4">
            <Clock className="w-3.5 h-3.5" />
            Responsive Workflow Simulation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            When Every Second Matters.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Experience how the Rakshak emergency protocol transitions from passive standby into a rapid, orchestrated response workflow.
          </p>
        </div>

        {/* Interactive Simulation Dashboard */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#091024] border border-slate-800 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Controls Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
                Simulated Sequence • Phase 0{currentStep + 1} of 0{steps.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <span className="w-2 h-2 rounded-sm bg-amber-400" />
                    <span>Pause Flow</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-emerald-400" />
                    <span>Resume Auto-Play</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(0)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                title="Restart simulation"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="grid grid-cols-5 gap-2 my-8">
            {steps.map((step, index) => {
              const isActive = currentStep === index;
              const isPast = currentStep > index;

              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => {
                    setCurrentStep(index);
                    setIsPlaying(false);
                  }}
                  className="group flex flex-col items-start cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-full h-2 rounded-full transition-all duration-500 mb-2 ${
                      isActive
                        ? 'bg-cyan-400 shadow-[0_0_12px_#38BDF8]'
                        : isPast
                        ? 'bg-cyan-600/60'
                        : 'bg-slate-800 group-hover:bg-slate-700'
                    }`}
                  />
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider hidden sm:block ${
                      isActive ? 'text-cyan-300 font-bold' : isPast ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Card Presentation */}
          {(() => {
            const activeData = steps[currentStep];
            const StepIcon = activeData.icon;

            return (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B1530] to-[#080E21] border border-cyan-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-2xl ${activeData.bg} ${activeData.color} border ${activeData.border} flex-shrink-0`}>
                    <StepIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                        Stage 0{currentStep + 1}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {activeData.status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">
                      {activeData.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-3">
                      {activeData.desc}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-cyan-300/90 font-mono bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{activeData.detail}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Next/Prev Step Controls */}
                <div className="flex md:flex-col gap-2 w-full md:w-auto justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
                      setIsPlaying(false);
                    }}
                    className="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep((prev) => (prev + 1) % steps.length);
                      setIsPlaying(false);
                    }}
                    className="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-medium transition-colors"
                  >
                    Next Stage
                  </button>
                </div>
              </div>
            );
          })()}

          {/* Mandatory Disclaimer */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
            <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Important Note:</strong> Actual availability and delivery may depend on device permissions, battery, network connectivity, operating-system restrictions and third-party services.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
