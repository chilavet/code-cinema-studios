import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import CountrySelector from './CountrySelector';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenContact }) {
  const { t } = useLanguage();
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 pt-3 sm:pt-4">
      <div
        className={`w-full mx-auto rounded-2xl transition-all duration-300 ${scrolled
            ? 'bg-[#FAF8F5]/90 dark:bg-[#1A1816]/90 backdrop-blur-md border border-[#E7E2DB] dark:border-[#2C2825] shadow-md py-2.5 px-5 sm:px-8'
            : 'bg-[#FAF8F5]/80 dark:bg-[#1A1816]/80 backdrop-blur-sm border border-[#E7E2DB]/80 dark:border-[#2C2825]/80 shadow-sm py-3.5 px-5 sm:px-8'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-9 h-9 rounded-full bg-stone-950 border border-stone-800 overflow-hidden flex items-center justify-center p-0.5 shadow-sm transition-transform group-hover:scale-105">
              <img
                src="/logo.jpg"
                alt="Codes Cinema Studios - Full-Stack Web & Mobile Game Development"
                className="w-full h-full object-cover rounded-full"
                width="36"
                height="36"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
                CODES <span className="text-[#C2613A] dark:text-[#E07A5F]">CINEMA</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold text-stone-600 dark:text-stone-300">
            <a href="#services" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              {t.nav.capabilities}
            </a>
            <a href="#estimator" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              {t.nav.scoping}
            </a>
            <a href="#about" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              {t.nav.studio}
            </a>
            <a href="#testimonials" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              {t.nav.testimonies}
            </a>
            <a href="#contact" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Sun/Moon Switcher */}
            <ThemeToggle />
            {/* Country Flag & Language Selector */}
            <CountrySelector />
          </div>

          {/* Mobile Controls: Theme + Flag Switcher + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <div className="sm:hidden">
              <CountrySelector />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-[#E7E2DB] dark:border-[#2C2825] mt-3 space-y-2 text-sm text-stone-700 dark:text-stone-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800/60 hover:text-stone-900 dark:hover:text-stone-100"
            >
              {t.nav.capabilities}
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800/60 hover:text-stone-900 dark:hover:text-stone-100"
            >
              {t.nav.scopingMobile}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800/60 hover:text-stone-900 dark:hover:text-stone-100"
            >
              {t.nav.studioMobile}
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800/60 hover:text-stone-900 dark:hover:text-stone-100"
            >
              {t.nav.testimonies}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800/60 hover:text-stone-900 dark:hover:text-stone-100"
            >
              {t.nav.contact}
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 dark:bg-[#C2613A] dark:hover:bg-[#B45309] font-bold transition-colors"
              >
                {t.nav.startProject}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
