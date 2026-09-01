import React, { useState } from 'react';
import { BackgroundFX } from './components/BackgroundFX';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { TheRakshakIdea } from './components/TheRakshakIdea';
import { FeaturesSection } from './components/FeaturesSection';
import { SosExperience } from './components/SosExperience';
import { LocationSection } from './components/LocationSection';
import { SecuritySection } from './components/SecuritySection';
import { PrivacySection } from './components/PrivacySection';
import { HowItWorks } from './components/HowItWorks';
import { AppShowcase } from './components/AppShowcase';
import { EcosystemSection } from './components/EcosystemSection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export default function App() {
  const [getRakshakModal, setGetRakshakModal] = useState(false);
  const [privacyPolicyModal, setPrivacyPolicyModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 relative font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient Animated Background Grid & Particles */}
      <BackgroundFX />

      {/* Primary Sticky Header & Navigation */}
      <Navbar onOpenGetRakshak={() => setGetRakshakModal(true)} />

      {/* Main One-Page Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('features')}
          onHowItWorksClick={() => scrollToSection('how-it-works')}
        />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. The Rakshak Idea */}
        <TheRakshakIdea />

        {/* 4. Features Section */}
        <FeaturesSection />

        {/* 5. SOS Experience Simulation */}
        <SosExperience />

        {/* 6. Location / Map Section */}
        <LocationSection />

        {/* 7. Security Architecture Section */}
        <SecuritySection />

        {/* 8. Privacy Section */}
        <PrivacySection onOpenPrivacyPolicy={() => setPrivacyPolicyModal(true)} />

        {/* 9. How It Works Timeline */}
        <HowItWorks />

        {/* 10. App Experience Phone Showcase */}
        <AppShowcase />

        {/* 11. Rakshak Ecosystem Diagram */}
        <EcosystemSection />

        {/* 12. Future Vision */}
        <FutureVisionSection />

        {/* 13. About Rakshak */}
        <AboutSection />

        {/* 14. FAQ Accordion */}
        <FaqSection />

        {/* 15. Final CTA Section */}
        <FinalCtaSection
          onOpenGetRakshak={() => setGetRakshakModal(true)}
          onExploreFeatures={() => scrollToSection('features')}
        />

        {/* 16. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacyPolicy={() => setPrivacyPolicyModal(true)}
        onOpenTerms={() => setTermsModal(true)}
      />

      {/* Interactive Modals */}
      <Modals
        getRakshakOpen={getRakshakModal}
        onCloseGetRakshak={() => setGetRakshakModal(false)}
        privacyPolicyOpen={privacyPolicyModal}
        onClosePrivacyPolicy={() => setPrivacyPolicyModal(false)}
        termsOpen={termsModal}
        onCloseTerms={() => setTermsModal(false)}
      />
    </div>
  );
}
