import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Testimonials() {
  const { t } = useLanguage();
  const [revealRef] = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="testimonials" ref={revealRef} className="py-24 relative z-10 border-t border-[#E7E2DB] dark:border-[#2C2825] overflow-hidden">
      {/* Ambient Moving Orbs */}
      <div className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-gradient-to-l from-[#D97706]/10 via-[#C2613A]/5 to-transparent blur-3xl pointer-events-none animate-orb-1 -z-10" />
      <div className="absolute bottom-10 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-[#2A6F62]/10 via-[#52B788]/5 to-transparent blur-3xl pointer-events-none animate-orb-2 -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header + Aggregate Trust Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 reveal-init">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3 animate-float-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
              <span>{t.testimonials.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              {t.testimonials.heading}
            </h2>
            <p className="mt-4 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Summary Rating Pill */}
          <div className="inline-flex items-center gap-4 px-4 py-3 rounded-2xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-xs shrink-0 self-start lg:self-auto transition-transform hover:scale-103">
            <div className="flex items-center gap-1 text-[#D97706]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D97706] text-[#D97706] transition-transform hover:scale-125" />
              ))}
            </div>
            <div className="h-6 w-px bg-[#E7E2DB] dark:bg-[#2C2825]" />
            <div>
              <span className="text-sm font-bold text-stone-900 dark:text-stone-100 block leading-none">5.0 / 5.0</span>
              <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400">{t.testimonials.ratingSla}</span>
            </div>
          </div>
        </div>

        {/* 3-Column Testimonies Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => {
            const loc = t.testimonials.items?.[item.id] || item;
            const delays = ['delay-75', 'delay-150', 'delay-225'];
            const delayClass = delays[idx % delays.length];

            return (
              <article
                key={item.id}
                className={`card-minimal rounded-2xl p-7 flex flex-col justify-between group shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#D97706]/40 dark:hover:border-[#D97706]/40 transition-all duration-300 reveal-init ${delayClass}`}
              >
                <div>
                  {/* Top Row: Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-0.5" aria-label={`${item.rating} star rating`}>
                      {Array.from({ length: item.rating }).map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706] transition-transform duration-300 group-hover:scale-110" />
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] flex items-center justify-center text-stone-400 dark:text-stone-500 group-hover:text-[#D97706] group-hover:border-[#D97706]/40 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Service & Metric Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#FAF8F5] dark:bg-[#1C1A18] text-stone-700 dark:text-stone-300 border border-[#E7E2DB] dark:border-[#2C2825]">
                      {loc.service}
                    </span>
                    {loc.metric && (
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-[#2A6F62]/10 text-[#2A6F62] dark:text-[#52B788] border border-[#2A6F62]/20">
                        {loc.metric}
                      </span>
                    )}
                  </div>

                  {/* Quote Body */}
                  <blockquote className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    “{loc.quote}”
                  </blockquote>
                </div>

                {/* Client Attribution Footer */}
                <div className="pt-4 border-t border-[#E7E2DB] dark:border-[#2C2825] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-full border border-[#E7E2DB] dark:border-[#2C2825] flex items-center justify-center text-xs font-bold shrink-0 transition-transform group-hover:scale-108 ${item.avatarBg}`}
                    >
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-stone-900 dark:text-stone-100 truncate">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                        {loc.role}, <span className="font-medium text-stone-700 dark:text-stone-300">{item.company}</span>
                      </div>
                    </div>
                  </div>

                  <ShieldCheck
                    className="w-4 h-4 text-[#2A6F62] dark:text-[#52B788] shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-120 transition-all duration-300"
                    title="Verified Client Engagement"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Social Proof Callout */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs transition-colors duration-300 reveal-init delay-300">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse shrink-0" />
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-200 font-medium leading-relaxed">
              {t.testimonials.bottomPrompt}
            </p>
          </div>
          <a
            href="#contact"
            className="relative overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-50 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 font-bold transition-all shrink-0 shadow-sm hover:shadow hover:scale-103 cursor-pointer group"
          >
            <span className="relative z-10">{t.testimonials.bottomCta}</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 dark:via-stone-900/15 to-transparent -translate-x-full group-hover:animate-btn-shimmer pointer-events-none" />
          </a>
        </div>
      </div>
    </section>
  );
}
