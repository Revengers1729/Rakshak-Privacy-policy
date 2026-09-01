import React, { useState } from 'react';
import { MapPin, Shield, Navigation, Users, Lock, Eye, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [geofenceRadius, setGeofenceRadius] = useState<number>(1.5);
  const [showSafeZone, setShowSafeZone] = useState<boolean>(true);

  return (
    <section id="location" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            Location Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Know What’s Happening.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Location-based functionality can help Rakshak support safety workflows such as geofencing, location sharing and emergency assistance when the relevant permissions are enabled.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Vector Map Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#080E22] border border-cyan-500/20 p-4 sm:p-6 overflow-hidden shadow-2xl">
              
              {/* Map Canvas Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-mono font-medium text-slate-200">Vector Boundary Grid (Simulated)</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  <Shield className="w-3 h-3" />
                  <span>Guard Boundary Active</span>
                </div>
              </div>

              {/* Stylized Abstract Vector Map */}
              <div className="relative w-full h-[320px] sm:h-[380px] bg-[#060A18] rounded-2xl overflow-hidden border border-slate-800">
                
                {/* Abstract Roads & Blocks */}
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="0.75" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" opacity="0.6" />

                  {/* Road Vectors */}
                  <path d="M -50 180 Q 200 160, 350 220 T 700 200" stroke="#1E293B" strokeWidth="18" fill="none" />
                  <path d="M 120 -50 L 140 450" stroke="#1E293B" strokeWidth="14" fill="none" />
                  <path d="M 380 -50 L 360 450" stroke="#1E293B" strokeWidth="16" fill="none" />
                  <path d="M -50 280 L 600 320" stroke="#1E293B" strokeWidth="10" fill="none" />

                  {/* Safe Zone Geofence Circle (Interactive) */}
                  {showSafeZone && (
                    <g>
                      <circle
                        cx="240"
                        cy="180"
                        r={geofenceRadius * 50}
                        fill="rgba(56, 189, 248, 0.08)"
                        stroke="#38BDF8"
                        strokeWidth="1.5"
                        strokeDasharray="6 6"
                        className="animate-pulse-slow"
                      />
                      <circle
                        cx="240"
                        cy="180"
                        r={geofenceRadius * 50 + 15}
                        fill="none"
                        stroke="#818CF8"
                        strokeWidth="0.75"
                        strokeDasharray="3 6"
                        opacity="0.5"
                      />
                    </g>
                  )}

                  {/* Active Safety Route Line */}
                  <path
                    d="M 240 180 Q 300 120, 420 110"
                    stroke="#38BDF8"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    fill="none"
                  />

                  {/* User Location Marker */}
                  <g transform="translate(240, 180)">
                    <circle r="20" fill="rgba(56, 189, 248, 0.2)" className="animate-ping" />
                    <circle r="12" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                    <circle r="4" fill="#FFFFFF" />
                  </g>

                  {/* Emergency Contact Marker */}
                  <g transform="translate(420, 110)">
                    <circle r="14" fill="rgba(99, 102, 241, 0.25)" />
                    <circle r="8" fill="#6366F1" stroke="#A5B4FC" strokeWidth="1.5" />
                    <circle r="2.5" fill="#FFFFFF" />
                  </g>
                </svg>

                {/* Map Floating UI Callouts */}
                {/* User Pin Tag */}
                <div className="absolute top-[35%] left-[30%] sm:left-[36%] -translate-y-12 bg-slate-900/90 border border-cyan-500/40 px-2.5 py-1 rounded-lg backdrop-blur-md shadow-lg flex items-center gap-1.5 text-[11px] text-slate-100 font-medium">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>You (Safe Zone)</span>
                </div>

                {/* Contact Pin Tag */}
                <div className="absolute top-[18%] right-[12%] sm:right-[20%] bg-slate-900/90 border border-indigo-500/40 px-2.5 py-1 rounded-lg backdrop-blur-md shadow-lg flex items-center gap-1.5 text-[11px] text-slate-100 font-medium">
                  <Users className="w-3 h-3 text-indigo-400" />
                  <span>Trusted Contact #1</span>
                </div>

                {/* Bottom Overlay Info Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-900/90 border border-slate-800 px-3 py-2 rounded-xl backdrop-blur-md text-[11px] text-slate-300">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Safe Boundary: {geofenceRadius} km radius</span>
                  </div>
                  <span className="text-emerald-400 font-mono">Protected</span>
                </div>
              </div>

              {/* Interactive Radius Adjuster */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span>Simulate Geofence Range:</span>
                  {[1.0, 1.5, 2.0].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setGeofenceRadius(r)}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                        geofenceRadius === r
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {r} km
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setShowSafeZone(!showSafeZone)}
                  className="text-xs text-slate-300 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showSafeZone ? 'Hide Safe Zone' : 'Show Safe Zone'}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Descriptions & Privacy Rules */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#090F24] border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100">Intelligent Geofencing</h3>
                  <p className="text-xs text-slate-400">Custom safe area definitions</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Configure preferred safe routes and zones. If boundary events or unexpected detours are registered during active guard sessions, Rakshak can prepare relevant notifications.
              </p>
            </div>

            {/* Strict Privacy Callout */}
            <div className="p-6 rounded-2xl bg-[#070D1E] border border-indigo-500/20 space-y-3">
              <div className="flex items-center gap-2 text-indigo-300 text-sm font-semibold">
                <Lock className="w-4 h-4" />
                <span>Controlled Location Privacy</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Location access is controlled through device permissions and should only be used for features that require it. Location coordinates are transmitted strictly over secure channels to your authorized contacts.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
