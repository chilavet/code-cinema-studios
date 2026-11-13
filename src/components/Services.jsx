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

export default function Services() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

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
        return <ShieldCheck className="w-5 h-5 text-[#2A6F62]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#57534E]" />;
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
    <section id="services" className="py-24 relative z-10">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-3">
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
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#F2EFE9] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] text-xs self-start md:self-end">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-[#282522] text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {t.services.filters?.all || 'All Tracks'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'web'
                  ? 'bg-white dark:bg-[#282522] text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {t.services.filters?.web || 'Web Dev'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('mobile')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'mobile'
                  ? 'bg-white dark:bg-[#282522] text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {t.services.filters?.mobile || 'Mobile Games'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('ops')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'ops'
                  ? 'bg-white dark:bg-[#282522] text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {t.services.filters?.ops || 'DevOps & SLA'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('creative')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'creative'
                  ? 'bg-white dark:bg-[#282522] text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {t.services.filters?.creative || 'Cinematics & Tech'}
            </button>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((s) => {
            const loc = t.services.items?.[s.id] || s;
            return (
              <div
                key={s.id}
                className="card-minimal rounded-2xl p-7 group shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Header: Icon */}
                <div className="mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#F2EFE9] dark:bg-[#252220] border border-[#E7E2DB] dark:border-[#2E2A27] flex items-center justify-center transition-all duration-300 group-hover:bg-[#EAE5DC] dark:group-hover:bg-[#2E2A27] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-sm">
                    {getIcon(s.icon)}
                  </div>
                </div>

                {/* Title & Description */}
                <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2.5 group-hover:text-[#C2613A] dark:group-hover:text-[#E07A5F] transition-colors">
                  {loc.title}
                </h2>
                <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {loc.description}
                </p>

                {/* Highlights List */}
                {loc.highlights && loc.highlights.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-[#E7E2DB] dark:border-[#2C2825] space-y-2">
                    {loc.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                        <Check className="w-3.5 h-3.5 text-[#2A6F62] dark:text-[#52B788] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {(loc.tags || s.tags).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#F2EFE9] dark:bg-[#252220] text-stone-700 dark:text-stone-300 border border-[#E7E2DB] dark:border-[#2E2A27]"
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
