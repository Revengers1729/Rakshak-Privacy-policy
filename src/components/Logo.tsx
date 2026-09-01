import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showWordmark = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-base tracking-wider',
    md: 'text-xl tracking-wider',
    lg: 'text-2xl tracking-widest',
    xl: 'text-3xl tracking-widest',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <div className={`relative flex items-center justify-center ${iconDimensions[size]}`}>
        {/* Glow ambient background behind logo */}
        <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full pointer-events-none" />
        
        {/* Custom Shield + Human/Care Vector Icon */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          {/* Outer Shield Geometry */}
          <path
            d="M24 4L7 11V22C7 32.5 14.2 42.2 24 45C33.8 42.2 41 32.5 41 22V11L24 4Z"
            fill="url(#shieldGrad)"
            stroke="url(#strokeGrad)"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Inner Safety Core Geometry / Human Care Node */}
          <circle
            cx="24"
            cy="18.5"
            r="4"
            fill="#38BDF8"
            className="transition-colors duration-300"
          />
          {/* Protecting Arch / Human Shoulders & Embracing Wings */}
          <path
            d="M15 32C15 27 19 23.5 24 23.5C29 23.5 33 27 33 32"
            stroke="#38BDF8"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Subtle central heartbeat / pulse dot */}
          <circle cx="24" cy="30" r="1.5" fill="#38BDF8" />

          {/* Gradients definition */}
          <defs>
            <linearGradient id="shieldGrad" x1="24" y1="4" x2="24" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0F1F38" />
              <stop offset="100%" stopColor="#080D1A" />
            </linearGradient>
            <linearGradient id="strokeGrad" x1="7" y1="4" x2="41" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col">
          <span className={`font-bold font-mono tracking-widest text-slate-100 uppercase ${textSizes[size]}`}>
            RAKSHAK
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-cyan-400/80 font-medium -mt-1">
            Autonomous Safety
          </span>
        </div>
      )}
    </div>
  );
};
