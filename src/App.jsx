import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import Services from './components/Services';
import Showcase from './components/Showcase';
import ScopeEstimator from './components/ScopeEstimator';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactInitial, setContactInitial] = useState({
    brief: '',
    service: 'Custom Software Engineering'
  });

  const handleApplyEstimate = ({ trackName, weeksWindow }) => {
    let serviceMapping = 'Custom Software Engineering';
    if (trackName.includes('Games') || trackName.includes('Mobile')) serviceMapping = 'Mobile Game Development';
    else if (trackName.includes('DevOps') || trackName.includes('Server')) serviceMapping = 'DevOps & Server Management';
    else if (trackName.includes('Maintenance')) serviceMapping = 'Website Maintenance & Care';
    else if (trackName.includes('Admin')) serviceMapping = 'Admin & Operations Desk';
    else if (trackName.includes('Cinematic') || trackName.includes('VFX')) serviceMapping = 'Cinematic Production & 3D VFX';
    else if (trackName.includes('Consulting')) serviceMapping = 'Technology Consulting';

    setContactInitial({
      service: serviceMapping,
      brief: `Target Scope: ${trackName} track. Estimated Timeline Window: ${weeksWindow}. Requesting formal technical discovery call and production quote.`
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle) => {
    setContactInitial({
      service: serviceTitle,
      brief: `Inquiring about ${serviceTitle} capabilities, production availability, and engineering specifications.`
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscussSimilar = (project) => {
    let serviceMapping = 'Custom Software Engineering';
    if (project.category === 'games') serviceMapping = 'Mobile Game Development';
    else if (project.category === 'devops') serviceMapping = 'DevOps & Server Management';
    else if (project.category === 'maintenance') serviceMapping = 'Website Maintenance & Care';
    else if (project.category === 'admin') serviceMapping = 'Admin & Operations Desk';
    else if (project.category === 'cinematics') serviceMapping = 'Cinematic Production & 3D VFX';

    setContactInitial({
      service: serviceMapping,
      brief: `Inquiring about technical scope and capabilities similar to deployment "${project.title}" (${project.stack}).`
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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

        {/* Interactive Showcase & Portfolio */}
        <Showcase onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive Scope & Roadmap Estimator */}
        <ScopeEstimator onApplyEstimate={handleApplyEstimate} />

        {/* Philosophy & Architecture */}
        <Philosophy />

        {/* Consultation Inquiry Form */}
        <Contact
          initialBrief={contactInitial.brief}
          initialService={contactInitial.service}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscussSimilar={handleDiscussSimilar}
      />

      {/* Floating Instant WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
