import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  return (
    <footer className="border-t border-slate-200 bg-slate-100/70 py-16 relative z-10 text-slate-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center p-0.5 shadow-sm">
                <img
                  src="/logo.jpg"
                  alt="Code Cinema Studios"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-['Orbitron',sans-serif] font-bold text-lg text-slate-900 tracking-tight">
                CODE <span className="text-amber-600">CINEMA</span> STUDIOS
              </span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm max-w-sm leading-relaxed">
              Boutique digital studio uniting engineering rigor with cinematic depth. Engineering mobile games, distributed software, DevOps & server management, and 24/7 web operations.
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="pt-1">
              <a
                href="https://wa.me/2348160498340?text=Hello%20Code%20Cinema%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>WhatsApp: +234 816 049 8340 ↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Engineering */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              Core Engineering
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  Mobile Game Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  Custom Software Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  DevOps & Server Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  AI Advert Videos & Cinematics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  Technology Consulting
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-slate-950 transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Care & Operations */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              Operations
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  Website Maintenance (24/7 SLA)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  Admin & Back-Office Desk
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  Security Patching
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">
                  Speed Tuning & Backups
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-slate-950 transition-colors">
                  Timeline Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Channels */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <a
                  href="https://wa.me/2348160498340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-900 font-semibold transition-colors"
                >
                  WhatsApp Channel ↗
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
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
          <p>© {currentYear} Code Cinema Studios. All rights reserved.</p>

          <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Systems Operational // 99.98% SLA</span>
          </div>

          <div className="flex space-x-5 text-[11px]">
            <a href="#" className="hover:text-slate-800 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
