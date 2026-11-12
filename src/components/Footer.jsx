import React from 'react';
import { useLanguage } from '../context/useLanguage';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="font-['Orbitron',sans-serif] font-bold text-lg text-slate-900 tracking-tight">
                CODES <span className="text-amber-600">CINEMA</span>
              </span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            {/* Direct WhatsApp & Email Callout */}
            <div className="pt-1 flex flex-col gap-1.5">
              <a
                href="https://wa.me/2348160498340?text=Hello%20Codes%20Cinema%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span dir="ltr">WhatsApp: +234 816 049 8340 ↗</span>
              </a>
              <a
                href="mailto:contact@codescinema.com"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-800 hover:text-sky-950 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span dir="ltr">Email: contact@codescinema.com ↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Engineering */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t.footer.coreEngineering}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  {t.services.items['mobile-games'].title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  {t.services.items.software.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  {t.services.items.devops.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  {t.services.items.cinematics.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  {t.services.items.consulting.title}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Care & Operations */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t.footer.operations}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  {t.services.items.maintenance.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  {t.services.items.admin.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  {t.footer.securityPatching}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  {t.footer.speedBackups}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-slate-950 transition-colors">
                  {t.footer.timelineEstimator}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-slate-950 transition-colors">
                  {t.footer.clientTestimonies}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Channels */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <a
                  href="mailto:contact@codescinema.com"
                  className="text-sky-700 hover:text-sky-950 font-semibold transition-colors"
                >
                  contact@codescinema.com ↗
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348160498340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-900 font-semibold transition-colors"
                >
                  {t.footer.whatsappChannel}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/codes-cinema/home/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
                  X / Twitter ↗
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
                  YouTube ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-medium">
          <p>© {currentYear} Codes Cinema. {t.footer.rights}</p>

          <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{t.footer.slaStatus}</span>
          </div>

          <div className="flex space-x-5 text-[11px]">
            <a href="#" className="hover:text-slate-800 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors">
              {t.footer.security}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
