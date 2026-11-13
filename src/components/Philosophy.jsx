import React from 'react';
import { Cpu, Film, ShieldCheck, Headphones } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export default function Philosophy() {
  const { t } = useLanguage();
  const pillars = t.philosophy.pillars;

  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#E7E2DB] dark:border-[#2C2825]">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & 4 Minimal Pillars: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2613A]" />
              <span>{t.philosophy.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
              {t.philosophy.heading}
            </h2>

            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              {t.philosophy.p1}
            </p>

            <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">
              {t.philosophy.p2}
            </p>

            {/* 4 Clean Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white dark:hover:bg-[#252220] transition-all duration-300">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 mb-1.5">
                  <Cpu className="w-4 h-4 text-[#C2613A]" />
                  <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">{pillars[0].title}</h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {pillars[0].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white dark:hover:bg-[#252220] transition-all duration-300">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 mb-1.5">
                  <Film className="w-4 h-4 text-[#D97706]" />
                  <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">{pillars[1].title}</h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {pillars[1].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white dark:hover:bg-[#252220] transition-all duration-300">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2A6F62]" />
                  <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">{pillars[2].title}</h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {pillars[2].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white dark:hover:bg-[#252220] transition-all duration-300">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 mb-1.5">
                  <Headphones className="w-4 h-4 text-[#57534E]" />
                  <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">{pillars[3].title}</h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {pillars[3].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Brand Card: 5 cols */}
          <div className="lg:col-span-5">
            <div className="card-minimal rounded-3xl p-8 border border-[#E7E2DB] dark:border-[#2C2825] bg-[#FAF8F5] dark:bg-[#1C1A18] text-center relative overflow-hidden shadow-md">
              {/* Top System Header */}
              <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 pb-6 border-b border-[#E7E2DB] dark:border-[#2C2825] font-medium">
                <span>{t.philosophy.cardHeaderLeft}</span>
                <span>{t.philosophy.cardHeaderRight}</span>
              </div>

              {/* Circular Emblem Presentation with Animated Pulse Halo */}
              <div className="my-8 relative flex flex-col items-center justify-center">
                <div className="relative inline-block p-1 rounded-full bg-stone-950 border-2 border-stone-800 shadow-xl group animate-float-subtle">
                  {/* Subtle Living Aura */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#C2613A]/20 via-[#D97706]/20 to-[#2A6F62]/20 blur-md animate-pulse-glow -z-10" />
                  
                  <img
                    src="/logo.jpg"
                    alt="Codes Cinema Studios - Cybernetic Emblem & Philosophy"
                    className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                    width="144"
                    height="144"
                  />
                </div>
                <h3 className="text-lg font-extrabold tracking-tight text-stone-900 dark:text-stone-100 mt-4">
                  CODES CINEMA
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-medium">
                  {t.philosophy.tagline}
                </p>
              </div>

              {/* Stats Footer */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#E7E2DB] dark:border-[#2C2825] text-center text-xs">
                <div>
                  <span className="text-stone-900 dark:text-stone-100 font-extrabold block text-base sm:text-lg">100%</span>
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">{t.philosophy.stat1}</span>
                </div>
                <div>
                  <span className="text-stone-900 dark:text-stone-100 font-extrabold block text-base sm:text-lg">120 FPS</span>
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">{t.philosophy.stat2}</span>
                </div>
                <div>
                  <span className="text-stone-900 dark:text-stone-100 font-extrabold block text-base sm:text-lg">99.98%</span>
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">{t.philosophy.stat3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
