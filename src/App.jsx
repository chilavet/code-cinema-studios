import React, { useState } from 'react';
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

export default function App() {
  const [contactInitial, setContactInitial] = useState({
    brief: '',
    service: 'Custom Software Engineering'
  });

  const handleApplyEstimate = ({ trackId, trackName, weeksWindow }) => {
    let serviceMapping = 'Custom Software Engineering';
    if (trackId === 'Games' || trackName.includes('Games') || trackName.includes('Mobile')) serviceMapping = 'Mobile Game Development';
    else if (trackId === 'DevOps' || trackName.includes('DevOps') || trackName.includes('Server')) serviceMapping = 'DevOps & Server Management';
    else if (trackId === 'Maintenance' || trackName.includes('Maintenance')) serviceMapping = 'Website Maintenance & Care';
    else if (trackId === 'Admin' || trackName.includes('Admin')) serviceMapping = 'Admin & Operations Desk';
    else if (trackId === 'Cinematics' || trackName.includes('Cinematic') || trackName.includes('VFX') || trackName.includes('Advert') || trackName.includes('Video')) serviceMapping = 'AI Advert Videos & Cinematic Production';
    else if (trackId === 'Consulting' || trackName.includes('Consulting')) serviceMapping = 'Technology Consulting';

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
    <LanguageProvider>
      <div className="bg-[#F8FAFC] text-slate-900 font-sans selection:bg-slate-900 selection:text-white overflow-x-hidden antialiased min-h-screen">
        {/* Top Navbar */}
        <Navbar
          onOpenContact={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
          }}
        />

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

        {/* Global Footer */}
        <Footer />

        {/* Floating Instant WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
