import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import Services from './components/Services';
import ScopeEstimator from './components/ScopeEstimator';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollParallaxCanvas from './components/ScrollParallaxCanvas';
import LegalModal from './components/LegalModal';

export default function App() {
  const [contactInitial, setContactInitial] = useState({
    brief: '',
    service: 'Full-Stack Web Development'
  });

  const [legalModal, setLegalModal] = useState({
    isOpen: false,
    activeTab: 'privacy'
  });

  // Deep linking: Sync URL hash (#privacy, #terms, #security) with Legal Modal
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy') {
        setLegalModal({ isOpen: true, activeTab: 'privacy' });
      } else if (hash === '#terms') {
        setLegalModal({ isOpen: true, activeTab: 'terms' });
      } else if (hash === '#security') {
        setLegalModal({ isOpen: true, activeTab: 'security' });
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenLegal = (tabKey = 'privacy') => {
    setLegalModal({ isOpen: true, activeTab: tabKey });
    window.history.pushState(null, '', `#${tabKey}`);
  };

  const handleCloseLegal = () => {
    setLegalModal((prev) => ({ ...prev, isOpen: false }));
    if (['#privacy', '#terms', '#security'].includes(window.location.hash.toLowerCase())) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleSelectLegalTab = (tabKey) => {
    setLegalModal((prev) => ({ ...prev, activeTab: tabKey }));
    window.history.replaceState(null, '', `#${tabKey}`);
  };

  const handleApplyEstimate = ({ trackId, trackName, weeksWindow }) => {
    let serviceMapping = 'Full-Stack Web Development';
    if (trackId === 'Fullstack' || trackName.includes('Full-Stack') || trackName.includes('Fullstack')) {
      serviceMapping = 'Full-Stack Web Development';
    } else if (trackId === 'Frontend' || trackName.includes('Front-End') || trackName.includes('Frontend')) {
      serviceMapping = 'Front-End Web Development';
    } else if (trackId === 'Backend' || trackName.includes('Back-End') || trackName.includes('Backend')) {
      serviceMapping = 'Back-End & API Engineering';
    } else if (trackId === 'Games' || trackName.includes('Games') || trackName.includes('Mobile')) {
      serviceMapping = 'Mobile Game Development';
    } else if (trackId === 'DevOps' || trackName.includes('DevOps') || trackName.includes('Server')) {
      serviceMapping = 'DevOps & Server Management';
    } else if (trackId === 'Maintenance' || trackName.includes('Maintenance')) {
      serviceMapping = 'Website Maintenance & Care';
    } else if (trackId === 'Admin' || trackName.includes('Admin')) {
      serviceMapping = 'Admin & Operations Desk';
    } else if (trackId === 'Cinematics' || trackName.includes('Cinematic') || trackName.includes('VFX') || trackName.includes('Advert') || trackName.includes('Video')) {
      serviceMapping = 'AI Advert Videos & Cinematic Production';
    } else if (trackId === 'Consulting' || trackName.includes('Consulting')) {
      serviceMapping = 'Technology Consulting';
    }

    setContactInitial({
      service: serviceMapping,
      brief: `Target Scope: ${trackName} track. Estimated Timeline Window: ${weeksWindow}. Requesting formal technical discovery call and production quote.`
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceValue, displayTitle) => {
    const label = displayTitle || serviceValue;
    setContactInitial({
      service: serviceValue,
      brief: `Inquiring about ${label} capabilities, production availability, and engineering specifications.`
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-[#F8FAFC] dark:bg-[#070B14] text-slate-900 dark:text-slate-100 font-sans selection:bg-slate-900 dark:selection:bg-amber-400 selection:text-white dark:selection:text-slate-950 overflow-x-hidden antialiased min-h-screen transition-colors duration-300 relative">
          {/* Top Live Scroll Progress Reading Bar */}
          <ScrollProgressBar />

          {/* Living Dynamic Parallax Light Pools that Move as User Scrolls */}
          <ScrollParallaxCanvas />

          {/* Top Navbar */}
          <Navbar />

          <main>
            {/* Hero Section */}
            <Hero />

            {/* Brand & Stack Infinite Marquee Ribbon */}
            <TechTicker />

            {/* Core Pillars / Services */}
            <Services onSelectService={handleSelectService} />

            {/* Interactive Scope & Roadmap Estimator */}
            <ScopeEstimator onApplyEstimate={handleApplyEstimate} />

            {/* Philosophy & Architecture */}
            <Philosophy />

            {/* Client Testimonies */}
            <Testimonials />

            {/* Consultation Inquiry Form */}
            <Contact
              initialBrief={contactInitial.brief}
              initialService={contactInitial.service}
            />
          </main>

          {/* Global Footer with interactive legal policy center */}
          <Footer onOpenLegal={handleOpenLegal} />

          {/* Floating Instant WhatsApp Button */}
          <WhatsAppButton />

          {/* Comprehensive Studio Legal & Security Policy Center */}
          <LegalModal
            isOpen={legalModal.isOpen}
            activeTab={legalModal.activeTab}
            onClose={handleCloseLegal}
            onSelectTab={handleSelectLegalTab}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
