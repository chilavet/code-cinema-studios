import React from 'react';
import { useLanguage } from '../context/useLanguage';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-[#E7E2DB] dark:border-[#2C2825] bg-[#FAF8F5] dark:bg-[#141210] pt-16 pb-12 transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14">
          {/* Column 1: Brand Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-full bg-stone-950 border border-stone-800 overflow-hidden flex items-center justify-center p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <img
                  src="/logo.jpg"
                  alt="Codes Cinema Studios - Global Software & AI Video Studio"
                  className="w-full h-full object-cover rounded-full"
                  width="36"
                  height="36"
                />
              </div>
              <span className="font-extrabold text-base sm:text-lg text-stone-900 dark:text-stone-100 tracking-tight">
                CODES <span className="text-[#C2613A] dark:text-[#E07A5F]">CINEMA</span>
              </span>
            </div>

            <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm max-w-md leading-relaxed">
              {t.footer.description}
            </p>

            {/* Direct WhatsApp & Email Callout */}
            <div className="pt-1 flex flex-col gap-1.5">
              <a
                href="https://wa.me/2348160498340?text=Hello%20Codes%20Cinema%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#2A6F62] dark:text-[#52B788] hover:underline transition-all hover:translate-x-0.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] animate-pulse" />
                <span dir="ltr">WhatsApp: +234 816 049 8340 ↗</span>
              </a>
              <a
                href="mailto:contact@codescinema.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#C2613A] dark:text-[#E07A5F] hover:underline transition-all hover:translate-x-0.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2613A] animate-pulse" />
                <span dir="ltr">Email: contact@codescinema.com ↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Engineering */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mb-4">
              {t.footer.coreEngineering}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-stone-600 dark:text-stone-400">
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.services.items?.fullstack?.title || 'Full-Stack Web Development'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.services.items?.frontend?.title || 'Front-End Web Development'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.services.items?.backend?.title || 'Back-End & API Engineering'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.services.items?.['mobile-games']?.title || 'Mobile Game Development'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.services.items?.devops?.title || 'DevOps & Server Management'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.services.items?.cinematics?.title || 'AI Advert Videos & Cinematics'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Care & Operations */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mb-4">
              {t.footer.operations}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-stone-600 dark:text-stone-400">
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.services.items.maintenance.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.services.items.admin.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.footer.securityPatching}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.footer.speedBackups}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.footer.timelineEstimator}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  {t.footer.clientTestimonies}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Channels */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-stone-600 dark:text-stone-400">
              <li>
                <a
                  href="mailto:contact@codescinema.com"
                  className="text-[#C2613A] dark:text-[#E07A5F] hover:underline font-semibold inline-block transition-transform hover:translate-x-1"
                >
                  contact@codescinema.com ↗
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348160498340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2A6F62] dark:text-[#52B788] hover:underline font-semibold inline-block transition-transform hover:translate-x-1"
                >
                  {t.footer.whatsappChannel}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/codes-cinema/home/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  X / Twitter ↗
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-950 dark:hover:text-white hover:translate-x-1 inline-block transition-transform">
                  YouTube ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E7E2DB] dark:border-[#2C2825] flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 dark:text-stone-400 gap-4 font-medium">
          <p>© {currentYear} Codes Cinema. {t.footer.rights}</p>

          <div className="flex items-center space-x-2 text-[11px] font-medium text-stone-600 dark:text-stone-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] animate-pulse" />
            <span>{t.footer.slaStatus}</span>
          </div>

          <div className="flex space-x-5 text-[11px]">
            <a href="#" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
              {t.footer.security}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
