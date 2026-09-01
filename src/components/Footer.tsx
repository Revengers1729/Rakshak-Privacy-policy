import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyPolicy,
  onOpenTerms,
}) => {
  return (
    <footer className="border-t border-slate-800 bg-[#050812] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo size="md" />
            <p className="text-slate-400 text-xs mt-2 max-w-sm">
              Autonomous safety ecosystem designed around emergency assistance, location awareness and security-conscious engineering.
            </p>
          </div>

          {/* Navigation & Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
            <a href="#home" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">
              Features
            </a>
            <a href="#security" className="hover:text-cyan-400 transition-colors">
              Security
            </a>
            <button
              id="footer-privacy-link"
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              id="footer-terms-link"
              type="button"
              onClick={onOpenTerms}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-center md:text-left">
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-4xl">
            Rakshak is designed as a supplementary safety technology solution. Availability of features may depend on device capabilities, permissions, connectivity, operating-system behavior and third-party services.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-slate-500 text-[11px] pt-2">
            <p>© 2026 Rakshak. All rights reserved.</p>
            <p className="font-mono text-slate-600">Autonomous Safety Architecture • v2.6</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
