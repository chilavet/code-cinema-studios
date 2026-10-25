import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border border-slate-200 shadow-md py-2.5 px-4 sm:px-6'
            : 'bg-white/75 backdrop-blur-sm border border-slate-200/80 shadow-sm py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-9 h-9 rounded-full bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center p-0.5 shadow-sm transition-transform group-hover:scale-105">
              <img
                src="/logo.jpg"
                alt="Code Cinema Studios"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Orbitron',sans-serif] text-sm sm:text-base font-bold tracking-tight text-slate-900">
                CODE <span className="text-amber-600">CINEMA</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] text-slate-500 uppercase font-mono font-semibold">
                STUDIOS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition-colors">
              Capabilities
            </a>
            <a href="#showcase" className="hover:text-slate-900 transition-colors">
              Selected Work
            </a>
            <a href="#estimator" className="hover:text-slate-900 transition-colors">
              Scoping
            </a>
            <a href="#about" className="hover:text-slate-900 transition-colors">
              Studio
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Minimal WhatsApp Concierge Link */}
            <a
              href="https://wa.me/2348160498340?text=Hello%20Code%20Cinema%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all"
              title="Chat on WhatsApp (+234 816 049 8340)"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] font-semibold">WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 text-emerald-600" />
            </a>

            {/* Inquire CTA Button */}
            <button
              onClick={onOpenContact}
              className="px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-slate-200 mt-3 space-y-2 text-sm text-slate-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Capabilities
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Selected Work
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Scoping Tool
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Studio Philosophy
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/2348160498340?text=Hello%20Code%20Cinema%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: +234 816 049 8340</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900"
              >
                Start A Project
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
