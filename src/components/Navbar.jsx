import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import CountrySelector from './CountrySelector';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const scrolled = currentY > 20;
          const directionDown = currentY > lastY;
          const scrollingDown = scrolled && directionDown;

          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          setIsScrollingDown((prev) => (prev !== scrollingDown ? scrollingDown : prev));

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 ${
        isScrollingDown ? 'pt-2' : 'pt-3 sm:pt-4'
      }`}
    >
      <div
        className={`w-full mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-md py-2.5 px-5 sm:px-8'
            : 'bg-white/75 dark:bg-slate-900/75 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800/60 shadow-xs py-3.5 px-5 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-9 h-9 rounded-full bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-108 group-hover:rotate-6">
              <img
                src="/logo.jpg"
                alt="Codes Cinema Studios - Full-Stack Web & Mobile Game Development"
                className="w-full h-full object-cover rounded-full"
                width="36"
                height="36"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">
                CODES <span className="text-sky-600 dark:text-sky-400">CINEMA</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <a href="#services" className="relative group/link py-1 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span>{t.nav.capabilities}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover/link:w-full" />
            </a>
            <a href="#estimator" className="relative group/link py-1 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span>{t.nav.scoping}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover/link:w-full" />
            </a>
            <a href="#about" className="relative group/link py-1 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span>{t.nav.studio}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover/link:w-full" />
            </a>
            <a href="#testimonials" className="relative group/link py-1 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span>{t.nav.testimonies}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover/link:w-full" />
            </a>
            <a href="#contact" className="relative group/link py-1 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span>{t.nav.contact}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover/link:w-full" />
            </a>
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
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
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-slate-200 dark:border-slate-800 mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200 animate-tab-enter">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.nav.capabilities}
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.nav.scoping}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.nav.studio}
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.nav.testimonies}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
