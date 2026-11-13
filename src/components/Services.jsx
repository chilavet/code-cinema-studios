import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import {
  Code2,
  Smartphone,
  Film,
  ShieldCheck,
  Wrench,
  Headphones,
  Check,
  Server,
  Layers,
  Layout,
  Database
} from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Services() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [revealRef] = useScrollReveal({ threshold: 0.08 });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'layers':
        return <Layers className="w-5 h-5 text-[#C2613A]" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-[#2A6F62]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#57534E]" />;
      case 'gamepad':
        return <Smartphone className="w-5 h-5 text-[#D97706]" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-[#C2613A]" />;
      case 'server':
        return <Server className="w-5 h-5 text-[#2A6F62]" />;
      case 'clapperboard':
        return <Film className="w-5 h-5 text-[#9A4321]" />;
      case 'wrench':
        return <Wrench className="w-5 h-5 text-[#57534E]" />;
      case 'clipboard':
        return <Headphones className="w-5 h-5 text-[#2A6F62]" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-[#C2613A]" />;
      default:
        return <Code2 className="w-5 h-5 text-stone-800" />;
    }
  };

  const filteredServices = SERVICES.filter((s) => {
    if (filter === 'web') return ['fullstack', 'frontend', 'backend'].includes(s.id);
    if (filter === 'mobile') return s.id === 'mobile-games';
    if (filter === 'ops') return ['devops', 'maintenance', 'admin'].includes(s.id);
    if (filter === 'creative') return ['cinematics', 'consulting'].includes(s.id);
    return true;
  });

  return (
    <section id="services" ref={revealRef} className="py-24 relative z-10 overflow-hidden">
      {/* Living Ambient Background Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-gradient-to-tr from-[#C2613A]/10 via-[#D97706]/8 to-transparent blur-3xl pointer-events-none animate-orb-1 -z-10" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-gradient-to-bl from-[#2A6F62]/10 via-[#52B788]/8 to-transparent blur-3xl pointer-events-none animate-orb-2 -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-init">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-3 animate-float-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2613A]" />
              <span>{t.services.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              {t.services.heading}
            </h2>
            <p className="mt-4 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] text-xs self-start md:self-end shadow-xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-bold shadow-xs scale-102'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              {t.services.filters?.all || 'All Tracks'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'web'
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-bold shadow-xs scale-102'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              {t.services.filters?.web || 'Web Dev'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('mobile')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'mobile'
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-bold shadow-xs scale-102'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              {t.services.filters?.mobile || 'Mobile Games'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('ops')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'ops'
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-bold shadow-xs scale-102'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              {t.services.filters?.ops || 'DevOps & SLA'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('creative')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'creative'
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-bold shadow-xs scale-102'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              {t.services.filters?.creative || 'Cinematics & Tech'}
            </button>
          </div>
        </div>

        {/* Capabilities Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((s, idx) => {
            const loc = t.services.items?.[s.id] || s;
            const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300', 'delay-375', 'delay-450'];
            const delayClass = delays[idx % delays.length];

            return (
              <div
                key={s.id}
                className={`card-minimal rounded-2xl p-7 group shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#C2613A]/40 dark:hover:border-[#E07A5F]/40 transition-all duration-300 reveal-init ${delayClass}`}
              >
                {/* Header: Icon with hover micro-rotation */}
                <div className="mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md group-hover:border-[#C2613A]/50">
                    {getIcon(s.icon)}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2.5 group-hover:text-[#C2613A] dark:group-hover:text-[#E07A5F] transition-colors">
                  {loc.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {loc.description}
                </p>

                {/* Highlights List */}
                {loc.highlights && loc.highlights.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-[#E7E2DB] dark:border-[#2C2825] space-y-2">
                    {loc.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                        <Check className="w-3.5 h-3.5 text-[#2A6F62] dark:text-[#52B788] mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags with Micro Hover Scale */}
                <div className="flex flex-wrap gap-1.5">
                  {(loc.tags || s.tags).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#FAF8F5] dark:bg-[#1C1A18] text-stone-700 dark:text-stone-300 border border-[#E7E2DB] dark:border-[#2C2825] transition-transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
