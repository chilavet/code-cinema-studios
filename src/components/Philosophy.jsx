import React from 'react';
import { Cpu, Film, ShieldCheck, Headphones } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Philosophy() {
  const { t } = useLanguage();
  const pillars = t.philosophy.pillars;
  const [revealRef] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" ref={revealRef} className="py-24 relative z-10 border-t border-[#E7E2DB] dark:border-[#2C2825] overflow-hidden">
      {/* Living Ambient Glow Orbs */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-gradient-to-l from-[#C2613A]/10 via-[#D97706]/5 to-transparent blur-3xl pointer-events-none animate-orb-1 -z-10" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-[#2A6F62]/10 via-[#52B788]/5 to-transparent blur-3xl pointer-events-none animate-orb-2 -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & 4 Minimal Pillars: 7 cols */}
          <div className="lg:col-span-7 space-y-6 reveal-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest animate-float-subtle">
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

            {/* 4 Clean Pillars with Hover Animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-xs hover:shadow-lg hover:-translate-y-1.5 hover:border-[#C2613A]/40 transition-all duration-300 group">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 mb-1.5">
                  <Cpu className="w-4 h-4 text-[#C2613A] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                  <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">{pillars[0].title}</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {pillars[0].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-xs hover:shadow-lg hover:-translate-y-1.5 hover:border-[#D97706]/40 transition-all duration-300 group">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 mb-1.5">
                  <Film className="w-4 h-4 text-[#D97706] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                  <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">{pillars[1].title}</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {pillars[1].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-xs hover:shadow-lg hover:-translate-y-1.5 hover:border-[#2A6F62]/40 transition-all duration-300 group">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2A6F62] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                  <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">{pillars[2].title}</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {pillars[2].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-xs hover:shadow-lg hover:-translate-y-1.5 hover:border-[#57534E]/40 transition-all duration-300 group">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 mb-1.5">
                  <Headphones className="w-4 h-4 text-[#57534E] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                  <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">{pillars[3].title}</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {pillars[3].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Brand Card: 5 cols */}
          <div className="lg:col-span-5 reveal-right">
            <div className="card-minimal rounded-3xl p-8 border border-[#E7E2DB] dark:border-[#2C2825] bg-[#FAF8F5] dark:bg-[#1C1A18] text-center relative overflow-hidden shadow-md group/card hover:shadow-2xl hover:border-[#C2613A]/50 transition-all duration-500">
              {/* Top System Header */}
              <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 pb-6 border-b border-[#E7E2DB] dark:border-[#2C2825] font-medium">
                <span>{t.philosophy.cardHeaderLeft}</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
                  {t.philosophy.cardHeaderRight}
                </span>
              </div>

              {/* Circular Emblem Presentation with Hypnotic Lens Rings */}
              <div className="my-10 relative flex flex-col items-center justify-center">
                {/* Outer Reverse Rotating Dashed Orbit Ring */}
                <div className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-dashed border-[#D97706]/25 animate-spin-reverse-slow pointer-events-none" />
                {/* Inner Slow Rotating Aperture Ring */}
                <div className="absolute w-44 h-44 sm:w-50 sm:h-50 rounded-full border border-[#C2613A]/20 animate-spin-slow pointer-events-none" />

                {/* Floating Emblem */}
                <div className="relative inline-block p-1.5 rounded-full bg-stone-950 border-2 border-stone-800 shadow-2xl animate-float">
                  {/* Living Aura Glow */}
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#C2613A]/30 via-[#D97706]/25 to-[#2A6F62]/30 blur-lg animate-pulse-glow -z-10" />
                  
                  <img
                    src="/logo.jpg"
                    alt="Codes Cinema Studios - Cybernetic Emblem & Philosophy"
                    className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full transition-transform duration-700 hover:scale-105"
                    width="144"
                    height="144"
                  />
                </div>
                <h3 className="text-lg font-extrabold tracking-tight text-stone-900 dark:text-stone-100 mt-5">
                  CODES CINEMA
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-medium">
                  {t.philosophy.tagline}
                </p>
              </div>

              {/* Stats Footer with Micro Hover Scale */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#E7E2DB] dark:border-[#2C2825] text-center text-xs">
                <div className="transition-transform duration-200 hover:scale-108">
                  <span className="text-stone-900 dark:text-stone-100 font-extrabold block text-base sm:text-lg">100%</span>
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">{t.philosophy.stat1}</span>
                </div>
                <div className="transition-transform duration-200 hover:scale-108">
                  <span className="text-stone-900 dark:text-stone-100 font-extrabold block text-base sm:text-lg">120 FPS</span>
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">{t.philosophy.stat2}</span>
                </div>
                <div className="transition-transform duration-200 hover:scale-108">
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
