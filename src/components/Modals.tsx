import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Smartphone, 
  QrCode, 
  CheckCircle2, 
  Lock, 
  FileText, 
  Download,
  AlertTriangle,
  Send
} from 'lucide-react';
import { Logo } from './Logo';

interface ModalsProps {
  getRakshakOpen: boolean;
  onCloseGetRakshak: () => void;
  privacyPolicyOpen: boolean;
  onClosePrivacyPolicy: () => void;
  termsOpen: boolean;
  onCloseTerms: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  getRakshakOpen,
  onCloseGetRakshak,
  privacyPolicyOpen,
  onClosePrivacyPolicy,
  termsOpen,
  onCloseTerms,
}) => {
  const [downloadRequested, setDownloadRequested] = useState(false);

  return (
    <>
      {/* 1. GET RAKSHAK MODAL */}
      {getRakshakOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#091026] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              type="button"
              onClick={onCloseGetRakshak}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <Logo size="sm" />
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-2">
              Install Rakshak
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Deploy the autonomous safety ecosystem directly to your compatible Android mobile device.
            </p>

            {/* Simulated QR Code & Direct APK Channel */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center gap-5 mb-6 text-center sm:text-left">
              <div className="p-3 bg-white rounded-xl shadow-inner flex-shrink-0">
                {/* Clean inline SVG QR code mockup */}
                <svg viewBox="0 0 100 100" className="w-24 h-24" fill="#000000">
                  <rect x="0" y="0" width="30" height="30" fill="#091026" />
                  <rect x="5" y="5" width="20" height="20" fill="#FFFFFF" />
                  <rect x="10" y="10" width="10" height="10" fill="#091026" />
                  <rect x="70" y="0" width="30" height="30" fill="#091026" />
                  <rect x="75" y="5" width="20" height="20" fill="#FFFFFF" />
                  <rect x="80" y="10" width="10" height="10" fill="#091026" />
                  <rect x="0" y="70" width="30" height="30" fill="#091026" />
                  <rect x="5" y="75" width="20" height="20" fill="#FFFFFF" />
                  <rect x="10" y="80" width="10" height="10" fill="#091026" />
                  <rect x="35" y="10" width="10" height="10" fill="#091026" />
                  <rect x="50" y="20" width="15" height="10" fill="#091026" />
                  <rect x="35" y="45" width="30" height="10" fill="#091026" />
                  <rect x="40" y="65" width="15" height="25" fill="#091026" />
                  <rect x="70" y="40" width="20" height="20" fill="#091026" />
                  <rect x="70" y="70" width="10" height="20" fill="#091026" />
                </svg>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-100 uppercase tracking-wider mb-1">
                  Direct Device Scan
                </p>
                <p className="text-[11px] text-slate-400 mb-3">
                  Scan with your mobile camera to initiate download and permission pairing.
                </p>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-1 rounded border border-cyan-500/30">
                  Target Build: Android 10+ (API 29+)
                </span>
              </div>
            </div>

            {/* System Requirements Checklist */}
            <div className="space-y-2.5 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Autonomous client engine with zero unprompted analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Granular runtime permissions configurable in Android settings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Local encrypted storage for offline emergency vault</span>
              </div>
            </div>

            {/* Download Trigger */}
            <button
              type="button"
              onClick={() => {
                setDownloadRequested(true);
                setTimeout(() => setDownloadRequested(false), 4000);
              }}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>{downloadRequested ? 'Package Package Ready (Simulated)' : 'Download Rakshak Package'}</span>
            </button>

            {downloadRequested && (
              <p className="text-[11px] font-mono text-cyan-300 text-center mt-2 animate-in fade-in">
                ✓ Package check confirmed. Follow Android installation prompts.
              </p>
            )}
          </div>
        </div>
      )}

      {/* 2. PRIVACY POLICY MODAL */}
      {privacyPolicyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#091026] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh] text-slate-300 text-xs sm:text-sm space-y-4">
            <button
              type="button"
              onClick={onClosePrivacyPolicy}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Official Privacy Policy Document</span>
            </div>

            <h3 className="text-xl font-bold text-slate-100">
              Rakshak Privacy Policy
            </h3>

            <p className="text-slate-400 text-xs font-mono">
              Canonical Reference: [PRIVACY_POLICY_URL]
            </p>

            <div className="space-y-3 pt-2 text-slate-300 leading-relaxed border-t border-slate-800">
              <h4 className="font-semibold text-slate-100">1. Data Minimization</h4>
              <p>
                Rakshak collects and processes information strictly when it is necessary for the safety features you configure and request. We do not sell user data.
              </p>

              <h4 className="font-semibold text-slate-100">2. Device Capabilities & Permissions</h4>
              <p>
                Depending on the features you choose to enable, Rakshak may require access to device permissions such as fine location, microphone, camera, motion sensors, and notifications. You retain full control to grant or revoke these permissions via your Android operating system settings at any time.
              </p>

              <h4 className="font-semibold text-slate-100">3. Emergency Dispatches</h4>
              <p>
                When an emergency workflow is triggered, location coordinates, battery status, and configured contact dispatches are transmitted via secure encrypted channels strictly to the contacts you have designated.
              </p>

              <h4 className="font-semibold text-slate-100">4. Data Deletion Mechanism</h4>
              <p>
                Users can request account or data deletion at any time by contacting our privacy team at <a href="mailto:phantomglows.1729@gmail.com" className="text-cyan-400 underline">phantomglows.1729@gmail.com</a> or utilizing in-app deletion tools.
              </p>

              <h4 className="font-semibold text-slate-100">5. Security Standards</h4>
              <p>
                No application can guarantee absolute security. Rakshak employs layered security controls, server-side authorization, and continuous integrity checks to safeguard your information.
              </p>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={onClosePrivacyPolicy}
                className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. TERMS OF SERVICE MODAL */}
      {termsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#091026] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh] text-slate-300 text-xs sm:text-sm space-y-4">
            <button
              type="button"
              onClick={onCloseTerms}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Official Terms of Service</span>
            </div>

            <h3 className="text-xl font-bold text-slate-100">
              Terms of Service
            </h3>

            <p className="text-slate-400 text-xs font-mono">
              Canonical Reference: [TERMS_URL]
            </p>

            <div className="space-y-3 pt-2 text-slate-300 leading-relaxed border-t border-slate-800">
              <h4 className="font-semibold text-slate-100">1. Supplementary Nature of Service</h4>
              <p>
                Rakshak is designed as a supplementary personal safety technology solution. Rakshak does NOT guarantee emergency response, continuous location tracking, or uninterrupted availability.
              </p>

              <h4 className="font-semibold text-slate-100">2. Environmental & Device Constraints</h4>
              <p>
                The functionality of the application depends on compatible device hardware, operating system restrictions, network reception, battery levels, and third-party communication services.
              </p>

              <h4 className="font-semibold text-slate-100">3. User Responsibility</h4>
              <p>
                Users are responsible for verifying configured emergency contact information and ensuring necessary permissions remain enabled for desired safety features.
              </p>

              <h4 className="font-semibold text-slate-100">4. Disclaimers</h4>
              <p>
                In life-threatening situations, always dial your local official emergency services (such as 112, 911, or 999) directly whenever possible.
              </p>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={onCloseTerms}
                className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
