import React, { useEffect, useState } from 'react';

export const BackgroundFX: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep Background Canvas */}
      <div className="absolute inset-0 bg-[#060913]" />

      {/* Futuristic Grid Pattern with subtle opacity */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #38BDF8 1px, transparent 1px),
            linear-gradient(to bottom, #38BDF8 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial Gradient Vignette & Lighting Blobs */}
      <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[65%] left-[-10%] w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Vector Wave Lines & Radar Circles */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Curved Data Paths */}
        <path
          d="M -100 200 C 300 150, 600 400, 1200 250 C 1600 150, 1900 350, 2200 280"
          fill="none"
          stroke="url(#bgPathGrad)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <path
          d="M -100 700 C 400 850, 800 600, 1300 780 C 1700 900, 2000 700, 2300 800"
          fill="none"
          stroke="url(#bgPathGrad)"
          strokeWidth="1"
          strokeDasharray="6 10"
        />

        {/* Subtle Concentric Radar Rings */}
        <circle cx="85%" cy="25%" r="180" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.4" />
        <circle cx="85%" cy="25%" r="320" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.25" />
        <circle cx="15%" cy="75%" r="220" fill="none" stroke="#818CF8" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.3" />
      </svg>

      {/* Floating Constellation Data Points (hidden if reduced motion) */}
      {!reducedMotion && (
        <>
          <div className="absolute top-[18%] left-[22%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse-slow shadow-[0_0_8px_#38BDF8]" />
          <div className="absolute top-[28%] right-[18%] w-1 h-1 bg-blue-300 rounded-full animate-pulse-slow shadow-[0_0_6px_#60A5FA]" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-[52%] left-[10%] w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse-slow shadow-[0_0_8px_#818CF8]" style={{ animationDelay: '3s' }} />
          <div className="absolute top-[78%] right-[28%] w-1 h-1 bg-cyan-300 rounded-full animate-pulse-slow shadow-[0_0_6px_#38BDF8]" style={{ animationDelay: '2.2s' }} />
          <div className="absolute top-[88%] left-[35%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse-slow shadow-[0_0_8px_#38BDF8]" style={{ animationDelay: '4s' }} />
        </>
      )}
    </div>
  );
};
