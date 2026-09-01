import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'phantomglows.1729@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Connect With Rakshak
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            For inquiries, technical dialogue, feedback, and ecosystem inquiries.
          </p>
        </div>

        {/* Clean Official Contact Card */}
        <div className="max-w-xl mx-auto p-8 rounded-3xl bg-[#091026] border border-slate-800 shadow-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-400 mb-6">
            <Mail className="w-7 h-7" />
          </div>

          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-2">
            Official Contact Channel
          </p>

          <a
            href={`mailto:${email}`}
            className="text-lg sm:text-xl font-bold font-mono text-cyan-300 hover:text-cyan-200 transition-colors block break-all mb-6 focus:outline-none focus-visible:underline"
          >
            {email}
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="contact-email-btn"
              href={`mailto:${email}?subject=Rakshak%20Ecosystem%20Inquiry`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition-all cursor-pointer min-h-[44px]"
            >
              <Send className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-medium text-slate-200 transition-all cursor-pointer min-h-[44px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-mono">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
