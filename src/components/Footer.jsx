import React from 'react';
import { useLanguage } from '../context/useLanguage';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pt-16 pb-12 transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14">
          {/* Column 1: Brand Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center p-0.5 shadow-sm">
                <img
                  src="/logo.jpg"
                  alt="Codes Cinema"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-['Orbitron',sans-serif] font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                CODES <span className="text-amber-600 dark:text-amber-500">CINEMA</span>
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              {t.footer.description}
            </p>

            {/* Direct WhatsApp & Email Callout */}
            <div className="pt-1 flex flex-col gap-1.5">
              <a
                href="https://wa.me/2348160498340?text=Hello%20Codes%20Cinema%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span dir="ltr">WhatsApp: +234 816 049 8340 ↗</span>
              </a>
              <a
                href="mailto:contact@codescinema.com"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-800 dark:text-sky-400 hover:text-sky-950 dark:hover:text-sky-300 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span dir="ltr">Email: contact@codescinema.com ↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Engineering */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              {t.footer.coreEngineering}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <a href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.services.items?.fullstack?.title || 'Full-Stack Web Development'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.services.items?.frontend?.title || 'Front-End Web Development'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.services.items?.backend?.title || 'Back-End & API Engineering'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.services.items?.['mobile-games']?.title || 'Mobile Game Development'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.services.items?.devops?.title || 'DevOps & Server Management'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.services.items?.cinematics?.title || 'AI Advert Videos & Cinematics'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Care & Operations */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              {t.footer.operations}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <a href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.services.items.maintenance.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.services.items.admin.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.footer.securityPatching}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.footer.speedBackups}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.footer.timelineEstimator}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  {t.footer.clientTestimonies}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Channels */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="mailto:contact@codescinema.com"
                  className="text-sky-700 dark:text-sky-400 hover:text-sky-950 dark:hover:text-sky-300 font-semibold transition-colors"
                >
                  contact@codescinema.com ↗
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348160498340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300 font-semibold transition-colors"
                >
                  {t.footer.whatsappChannel}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/codes-cinema/home/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  X / Twitter ↗
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  YouTube ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4 font-medium">
          <p>© {currentYear} Codes Cinema. {t.footer.rights}</p>

          <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{t.footer.slaStatus}</span>
          </div>

          <div className="flex space-x-5 text-[11px]">
            <a href="#" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
              {t.footer.security}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
