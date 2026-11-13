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

const SERVICE_IMAGES = {
  fullstack: {
    src: '/images/core/fullstack.jpg',
    alt: 'Modern Full-Stack Development Workspace & Web Platform Architecture'
  },
  frontend: {
    src: '/images/core/frontend.jpg',
    alt: 'Clean Responsive Web Design System & Multi-Device Workspace'
  },
  backend: {
    src: '/images/core/backend.jpg',
    alt: 'High-Concurrency Development Station & Cloud API Infrastructure'
  },
  'mobile-games': {
    src: '/images/core/mobile.jpg',
    alt: 'Interactive Mobile Game Engineering & Dynamic Gaming Station'
  },
  devops: {
    src: '/images/core/devops.jpg',
    alt: 'Global Cloud Network Topology & Zero-Downtime Infrastructure'
  },
  maintenance: {
    src: '/images/core/care.jpg',
    alt: 'Proactive Website Care & Continuous Uptime Monitoring Station'
  },
  admin: {
    src: '/images/core/admin.jpg',
    alt: 'Modern Studio Operations & Digital Content Management Workspace'
  },
  cinematics: {
    src: '/images/core/cinematics.jpg',
    alt: 'Cinematic Production Gear & Studio Clapperboard'
  },
  consulting: {
    src: '/images/core/consulting.jpg',
    alt: 'Modern Architectural Boardroom for Strategic Technology Consulting'
  }
};

export default function Services() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'layers':
        return <Layers className="w-5 h-5 text-sky-600" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-emerald-600" />;
      case 'database':
        return <Database className="w-5 h-5 text-indigo-600" />;
      case 'gamepad':
        return <Smartphone className="w-5 h-5 text-amber-600" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-sky-600" />;
      case 'server':
        return <Server className="w-5 h-5 text-sky-600" />;
      case 'clapperboard':
        return <Film className="w-5 h-5 text-purple-600" />;
      case 'wrench':
        return <Wrench className="w-5 h-5 text-slate-800" />;
      case 'clipboard':
        return <Headphones className="w-5 h-5 text-emerald-600" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-800" />;
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
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
              <span>{t.services.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.services.heading}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs self-start md:self-end">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.services.filters?.all || 'All Tracks'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'web'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.services.filters?.web || 'Web Dev'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('mobile')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'mobile'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.services.filters?.mobile || 'Mobile Games'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('ops')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'ops'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.services.filters?.ops || 'DevOps & SLA'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('creative')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                filter === 'creative'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
                className="card-minimal rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 flex flex-col justify-between"
              >
                <div>
                  {/* Lively Relatable Natural Photo Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200/80 dark:border-slate-800">
                    <img
                      src={SERVICE_IMAGES[s.id]?.src || '/images/core/fullstack.jpg'}
                      alt={SERVICE_IMAGES[s.id]?.alt || loc.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      width="600"
                      height="340"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Icon Pill */}
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-md">
                      {getIcon(s.icon)}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    {/* Title & Description */}
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-sky-900 dark:group-hover:text-amber-400 transition-colors">
                      {loc.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {loc.description}
                    </p>

                    {/* Highlights List */}
                    {loc.highlights && loc.highlights.length > 0 && (
                      <div className="mb-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                        {loc.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
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
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
