import React, { useState } from 'react';
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

export default function App() {
  const [contactInitial, setContactInitial] = useState({
    brief: '',
    service: 'Full-Stack Web Development'
  });

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
        <div className="bg-[#FBF9F5] dark:bg-[#141210] text-[#141210] dark:text-[#F2EFE9] font-sans selection:bg-[#C2613A] selection:text-white overflow-x-hidden antialiased min-h-screen transition-colors duration-300 relative">
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

          {/* Global Footer */}
          <Footer />

          {/* Floating Instant WhatsApp Button */}
          <WhatsAppButton />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
