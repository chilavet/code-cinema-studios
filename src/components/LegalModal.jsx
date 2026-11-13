import React, { useEffect, useState } from 'react';
import {
  X,
  ShieldCheck,
  Lock,
  Scale,
  CheckCircle2,
  Mail,
  Copy,
  Check
} from 'lucide-react';
import { LEGAL_POLICIES } from '../data/legalPolicies';

export default function LegalModal({
  isOpen,
  activeTab = 'privacy',
  onClose,
  onSelectTab
}) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Keyboard accessibility: Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPolicy = LEGAL_POLICIES[activeTab] || LEGAL_POLICIES.privacy;

  const tabOptions = [
    { id: 'privacy', label: 'Privacy Policy', icon: Lock, deskEmail: 'contact@codescinema.com' },
    { id: 'terms', label: 'Terms of Service', icon: Scale, deskEmail: 'contact@codescinema.com' },
    { id: 'security', label: 'Security Policy', icon: ShieldCheck, deskEmail: 'contact@codescinema.com' }
  ];

  const currentTabOption = tabOptions.find((t) => t.id === activeTab) || tabOptions[0];

  const handleCopyEmail = (email) => {
    navigator.clipboard?.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 sm:px-8 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-xs">
              {activeTab === 'privacy' && <Lock className="w-5 h-5 text-sky-600 dark:text-sky-400" />}
              {activeTab === 'terms' && <Scale className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
              {activeTab === 'security' && <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                {currentPolicy.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate max-w-md">
                Codes Cinema Legal & Security Center
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Close Legal Center"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-semibold">Close</span>
              <span className="hidden md:inline text-[10px] text-slate-400 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                ESC
              </span>
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-5 sm:px-8 pt-4 pb-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] shrink-0">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
            {tabOptions.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectTab(tab.id)}
                  className={`py-2 px-2 sm:px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs border border-slate-200/80 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <TabIcon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isSelected
                        ? tab.id === 'privacy'
                          ? 'text-sky-600 dark:text-sky-400'
                          : tab.id === 'terms'
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-400'
                    }`}
                  />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-6 text-sm leading-relaxed custom-scrollbar">
          {/* Executive Summary Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/70 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-900 dark:text-sky-300 mb-1">
                  Executive Statement // {currentPolicy.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
                  {currentPolicy.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6 divide-y divide-slate-100 dark:divide-slate-800/80">
            {currentPolicy.sections.map((section, idx) => (
              <div key={section.id} className={idx === 0 ? '' : 'pt-6'}>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
                  <span>{section.heading}</span>
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Desk Contact Box */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">
                Official Direct Desk
              </span>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <a
                  href={`mailto:${currentTabOption.deskEmail}`}
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {currentTabOption.deskEmail}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyEmail(currentTabOption.deskEmail)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  title="Copy Desk Email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-8 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-medium">
              Codes Cinema Studios • Registered Production Infrastructure • SLA 99.98%
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <a
              href="mailto:contact@codescinema.com"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              contact@codescinema.com
            </a>
            <span>•</span>
            <button
              type="button"
              onClick={onClose}
              className="font-semibold text-slate-800 dark:text-slate-200 hover:underline cursor-pointer"
            >
              Back to Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
