import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CookieBanner } from './components/CookieBanner';
import { LegalModals } from './components/LegalModals';

import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { InsightsPage } from './pages/InsightsPage';
import { SecurityPage } from './pages/SecurityPage';
import { AboutPage } from './pages/AboutPage';
import { AuditPage } from './pages/AuditPage';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [prefilledAbsorbed, setPrefilledAbsorbed] = useState<number | undefined>(undefined);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'security' | null>(null);

  // Sync hash changes if user uses browser back or links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'how-it-works', 'solutions', 'insights', 'security', 'about', 'audit'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookAudit = (calculatedAmount?: number) => {
    if (calculatedAmount !== undefined && typeof calculatedAmount === 'number') {
      setPrefilledAbsorbed(calculatedAmount);
    }
    navigateTo('audit');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#0B1F33] selection:bg-[#0B6E5F]/20 selection:text-[#0B1F33]">
      {/* Top Bar adhering to 3-zone contract */}
      <Navbar
        activeTab={activeTab}
        onNavigate={navigateTo}
        onBookAuditClick={() => handleBookAudit()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onBookAuditClick={() => handleBookAudit()}
          />
        )}
        {activeTab === 'how-it-works' && (
          <HowItWorksPage
            onBookAuditClick={() => handleBookAudit()}
            onNavigate={navigateTo}
          />
        )}
        {activeTab === 'solutions' && (
          <SolutionsPage
            onBookAuditClick={() => handleBookAudit()}
            onNavigate={navigateTo}
          />
        )}
        {activeTab === 'insights' && (
          <InsightsPage
            onBookAuditClick={(amount) => handleBookAudit(amount)}
          />
        )}
        {activeTab === 'security' && (
          <SecurityPage
            onBookAuditClick={() => handleBookAudit()}
            onOpenPrivacyModal={() => setLegalModal('privacy')}
            onOpenSecurityModal={() => setLegalModal('security')}
          />
        )}
        {activeTab === 'about' && (
          <AboutPage
            onBookAuditClick={() => handleBookAudit()}
          />
        )}
        {activeTab === 'audit' && (
          <AuditPage
            prefilledAbsorbed={prefilledAbsorbed}
            onOpenPrivacy={() => setLegalModal('privacy')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenPrivacy={() => setLegalModal('privacy')}
        onOpenTerms={() => setLegalModal('terms')}
        onOpenSecurity={() => setLegalModal('security')}
      />

      {/* Mobile Sticky Bar (bottom <= 15% height cap) */}
      <MobileStickyBar onBookAuditClick={() => handleBookAudit()} />

      {/* DPDP Compliant Cookie Banner */}
      <CookieBanner />

      {/* Legal & Compliance Modals */}
      <LegalModals
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}

export default App;
