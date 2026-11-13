import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 relative z-10 border-t border-[#E7E2DB] dark:border-[#2C2825]">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header + Aggregate Trust Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2613A]" />
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
          <div className="inline-flex items-center gap-4 px-4 py-3 rounded-2xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-sm shrink-0 self-start lg:self-auto">
            <div className="flex items-center gap-1 text-[#D97706]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D97706] text-[#D97706]" />
              ))}
            </div>
            <div className="h-6 w-px bg-[#E7E2DB] dark:border-[#2C2825]" />
            <div>
              <span className="text-sm font-bold text-stone-900 dark:text-stone-100 block leading-none">5.0 / 5.0</span>
              <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400">{t.testimonials.ratingSla}</span>
            </div>
          </div>
        </div>

        {/* 3-Column Testimonies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => {
            const loc = t.testimonials.items?.[item.id] || item;
            return (
              <article
                key={item.id}
                className="card-minimal rounded-2xl p-7 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Top Row: Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-0.5" aria-label={`${item.rating} star rating`}>
                      {Array.from({ length: item.rating }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#F2EFE9] dark:bg-[#252220] border border-[#E7E2DB] dark:border-[#2E2A27] flex items-center justify-center text-stone-400 dark:text-stone-500 group-hover:text-[#C2613A] group-hover:border-[#C2613A]/40 group-hover:bg-[#C2613A]/10 transition-colors">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Service & Metric Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#F2EFE9] dark:bg-[#252220] text-stone-700 dark:text-stone-300 border border-[#E7E2DB] dark:border-[#2E2A27]">
                      {loc.service}
                    </span>
                    {loc.metric && (
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-[#2A6F62]/10 dark:bg-[#2A6F62]/20 text-[#2A6F62] dark:text-[#52B788] border border-[#2A6F62]/30">
                        {loc.metric}
                      </span>
                    )}
                  </div>

                  {/* Quote Body */}
                  <blockquote className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                    “{loc.quote}”
                  </blockquote>
                </div>

                {/* Client Attribution Footer */}
                <div className="pt-4 border-t border-[#E7E2DB] dark:border-[#2C2825] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${item.avatarBg}`}
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
                    className="w-4 h-4 text-[#2A6F62] dark:text-[#52B788] shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                    title="Verified Client Engagement"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Social Proof Callout */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm transition-colors duration-300">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#2A6F62] animate-pulse shrink-0" />
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-200 font-medium leading-relaxed">
              {t.testimonials.bottomPrompt}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-50 bg-stone-900 hover:bg-stone-800 dark:bg-[#C2613A] dark:hover:bg-[#A84F2E] dark:text-white transition-all shrink-0 shadow-sm hover:shadow cursor-pointer"
          >
            <span>{t.testimonials.bottomCta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
