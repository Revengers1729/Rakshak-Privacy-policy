import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      id: 0,
      question: 'What is Rakshak?',
      answer: 'Rakshak is a safety-focused mobile application and technology ecosystem designed to provide emergency assistance and related safety functionality.',
    },
    {
      id: 1,
      question: 'Does Rakshak guarantee emergency response?',
      answer: 'No. Rakshak cannot guarantee emergency response or uninterrupted availability. Device, network, permissions, battery and third-party services can affect functionality.',
    },
    {
      id: 2,
      question: 'Why does Rakshak need location permission?',
      answer: 'Location may be required for features such as location sharing, geofencing and certain emergency workflows.',
    },
    {
      id: 3,
      question: 'Does Rakshak work without internet?',
      answer: 'Some device-level functionality may operate without an internet connection, but features that require cloud services, remote notifications, server validation or data transmission may require connectivity.',
    },
    {
      id: 4,
      question: 'Can I control permissions?',
      answer: 'Yes. Android provides controls for managing application permissions.',
    },
    {
      id: 5,
      question: 'How is my information protected?',
      answer: 'Rakshak is designed around layered security practices including authentication, server-side authorization, secure communication and application protection. No software can guarantee absolute security.',
    },
    {
      id: 6,
      question: 'Can I request deletion of my data?',
      answer: 'Where applicable, users can request account or data deletion through the mechanism described in the Privacy Policy.',
    },
    {
      id: 7,
      question: 'Where can I read the Privacy Policy?',
      answer: 'Use the Privacy Policy link provided on this website and inside the application.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Transparent information about Rakshak’s capabilities, permissions, and security design.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#091026] border-cyan-500/40 shadow-lg shadow-cyan-500/5'
                    : 'bg-[#080E22]/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-100">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-400 bg-cyan-950 border border-cyan-500/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
