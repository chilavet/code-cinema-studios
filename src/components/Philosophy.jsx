import React from 'react';
import { Cpu, Film, ShieldCheck, Headphones } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export default function Philosophy() {
  const { t } = useLanguage();
  const pillars = t.philosophy.pillars;

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-200 dark:border-slate-800">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & 4 Minimal Pillars: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
              <span>{t.philosophy.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              {t.philosophy.heading}
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.philosophy.p1}
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              {t.philosophy.p2}
            </p>

            {/* 4 Clean Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-300">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-1.5">
                  <Cpu className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{pillars[0].title}</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillars[0].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-300">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-1.5">
                  <Film className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{pillars[1].title}</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillars[1].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-300">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{pillars[2].title}</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillars[2].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-300">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-1.5">
                  <Headphones className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{pillars[3].title}</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillars[3].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Brand Card: 5 cols */}
          <div className="lg:col-span-5">
            <div className="card-minimal rounded-3xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-center relative overflow-hidden shadow-md">
              {/* Top System Header */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pb-6 border-b border-slate-100 dark:border-slate-800">
                <span>{t.philosophy.cardHeaderLeft}</span>
                <span>{t.philosophy.cardHeaderRight}</span>
              </div>

              {/* Circular Emblem Presentation */}
              <div className="my-8">
                <div className="relative inline-block p-1 rounded-full bg-slate-950 border-2 border-slate-800 shadow-xl group animate-float-subtle">
                  <img
                    src="/logo.jpg"
                    alt="Codes Cinema Studios - Cybernetic Emblem & Philosophy"
                    className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                    width="144"
                    height="144"
                  />
                </div>
                <h3 className="text-base font-bold font-['Orbitron',sans-serif] text-slate-900 dark:text-white tracking-wide mt-4">
                  CODES CINEMA
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  {t.philosophy.tagline}
                </p>
              </div>

              {/* Stats Footer */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-slate-100 dark:border-slate-800 text-center text-xs font-mono">
                <div>
                  <span className="text-slate-900 dark:text-white font-bold block">100%</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">{t.philosophy.stat1}</span>
                </div>
                <div>
                  <span className="text-slate-900 dark:text-white font-bold block">120 FPS</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">{t.philosophy.stat2}</span>
                </div>
                <div>
                  <span className="text-slate-900 dark:text-white font-bold block">99.98%</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">{t.philosophy.stat3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
