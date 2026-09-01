import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenGetRakshak: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetRakshak }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Security', href: '#security' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Status Strip Banner */}
      <div className="w-full bg-[#091024]/90 border-b border-cyan-500/15 py-1.5 px-4 text-center text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium tracking-wide text-slate-200">
            Safety technology, built for real-world situations
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080E21]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Rakshak Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus-visible:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-get-rakshak-btn"
              onClick={onOpenGetRakshak}
              className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060913] focus-visible:ring-cyan-400 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>Get Rakshak</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#080E21]/95 backdrop-blur-xl border-b border-slate-800 px-5 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors border-b border-slate-800/40"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3">
                <button
                  id="mobile-nav-get-rakshak"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetRakshak();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 active:scale-[0.99] transition-transform min-h-[44px]"
                >
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                  <span>Get Rakshak App</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
