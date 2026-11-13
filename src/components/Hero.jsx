import React, { useState, useEffect } from 'react';
import HeroCanvas from './HeroCanvas';
import {
  ArrowRight,
  Smartphone,
  Wrench,
  Server,
  Layers,
  Layout,
  Database,
  CheckCircle2,
  X
} from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

const SERVICE_TABS = ['fullstack', 'frontend', 'backend', 'mobile', 'devops', 'care'];
const CYCLE_DURATION_MS = 4500;

const DEFAULT_HEADLINES = {
  fullstack: {
    top: 'Turnkey Full-Stack Platforms.',
    accent: 'From Database Schema to Reactive UI.'
  },
  frontend: {
    top: 'Pixel-Perfect Reactive UI.',
    accent: 'Fluid Motion & Zero Layout Shift.'
  },
  backend: {
    top: 'Resilient Cloud APIs & Schemas.',
    accent: 'High Concurrency & 99.98% Uptime SLA.'
  },
  mobile: {
    top: 'Mobile Game Development.',
    accent: 'Unity Engine & 120 FPS Locked Touch.'
  },
  devops: {
    top: 'Cloud & Server Infrastructure.',
    accent: 'Automated CI/CD & Linux Hardening.'
  },
  care: {
    top: 'Website Maintenance & Care.',
    accent: 'Proactive Shield & < 15 Min SLA.'
  }
};

const CORE_IMAGES = {
  fullstack: {
    src: '/images/core/fullstack.jpg',
    alt: 'Collaborative Engineering Team Building Full-Stack Web Platforms',
    caption: 'Collaborative Studio Team Delivering Turnkey Web Platforms'
  },
  frontend: {
    src: '/images/core/frontend.jpg',
    alt: 'Creative Designers & Front-End Developers Crafting Fluid Reactive UI',
    caption: 'Creative Designers & Developers Crafting Intuitive User Experiences'
  },
  backend: {
    src: '/images/core/backend.jpg',
    alt: 'Software Architects In Active Discussion Designing Resilient Cloud APIs',
    caption: 'Engineers Designing Resilient Cloud APIs & High-Throughput Services'
  },
  mobile: {
    src: '/images/core/mobile.jpg',
    alt: 'Passionate Gaming Team Creating & Testing Interactive Mobile Games',
    caption: 'Immersive Mobile Game Creation & Responsive Touch Play'
  },
  devops: {
    src: '/images/core/devops.jpg',
    alt: 'Cloud Engineers Planning Reliable Continuous Deployment Pipelines',
    caption: 'Human-Led Cloud Architecture & Zero-Downtime Reliability'
  },
  care: {
    src: '/images/core/care.jpg',
    alt: 'Dedicated Customer Support & Technical Care Team Providing Peace of Mind',
    caption: 'Dedicated 24/7 Human Care, Technical Monitoring & Rapid Triage'
  }
};

const DEFAULT_DELIVERABLES = {
  fullstack: [
    'Complete end-to-end architecture (Client UI + API + Cloud Database)',
    'Enterprise Authentication (JWT / OAuth2) & Role-Based Access Control',
    'Real-time data synchronization, TanStack Query & state hydration',
    'Automated CI/CD pipelines & zero-downtime production cloud hosting'
  ],
  frontend: [
    'Modern React 19, Next.js & Tailwind CSS component hierarchy',
    'Fluid micro-interactions, responsive mobile-first UI architecture',
    'Robust client state management (Zustand) & cache hydration',
    'Core Web Vitals tuning: zero layout shift (CLS) & sub-second LCP'
  ],
  backend: [
    'High-concurrency REST, GraphQL & gRPC APIs with OpenAPI docs',
    'PostgreSQL, MySQL, Redis & MongoDB schema design & migrations',
    'Enterprise auth: OAuth2, JWT, multi-tenant RBAC & webhook endpoints',
    'Asynchronous queue processing (BullMQ / Celery) & background workers'
  ],
  mobile: [
    'Native iOS & Android compilation targets and hardware profiling',
    'Locked 60/120 FPS touch response & optimized physics tick loop',
    'Battery-conscious shaders & custom mobile asset compression',
    'In-app purchases, game telemetry & live-ops mediation'
  ],
  devops: [
    'Automated zero-downtime CI/CD deployment pipelines',
    'Linux server administration, firewall & SSH security hardening',
    'Docker container orchestration & Nginx reverse proxies',
    'Real-time telemetry, automated backups & SSL cert renewals'
  ],
  care: [
    'Continuous dependency security audits & vulnerability patching',
    '24/7 automated uptime synthetic probes & heartbeat pinging',
    'Daily offsite encrypted backups with verified 1-click restore',
    'Dedicated incident desk with < 15 minute emergency SLA'
  ]
};

const DEFAULT_STACK_TAGS = {
  fullstack: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
  frontend: ['React 19', 'Next.js UI', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'TypeScript'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL & REST'],
  mobile: ['Unity Engine', 'C#', 'iOS & Android', '120 FPS', 'ShaderLab', 'LiveOps'],
  devops: ['Linux / Ubuntu', 'Docker', 'CI/CD Pipelines', 'Nginx', 'Ansible', '24/7 Monitoring'],
  care: ['24/7 SLA', 'Security Shield', 'Daily Backups', 'Uptime Telemetry', '< 15 Min SLA']
};

export default function Hero() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('fullstack');
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Lock body scroll and listen for Escape when viewing full-screen modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  // Live continuous auto-switching across studio disciplines
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 60; // 60ms ticks for fluid 60fps bar
    const increment = (intervalStep / CYCLE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((curr) => {
            const nextIdx = (SERVICE_TABS.indexOf(curr) + 1) % SERVICE_TABS.length;
            return SERVICE_TABS[nextIdx];
          });
          return 0;
        }
        return prev + increment;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    setProgress(0);
  };

  const current =
    t.hero.previews?.[activeTab] ||
    t.hero.previews?.fullstack ||
    t.hero.previews?.software ||
    t.hero.previews?.mobile;

  const serviceKey = activeTab === 'mobile' ? 'mobile-games' : activeTab === 'care' ? 'maintenance' : activeTab;
  const serviceDetail = t.services?.items?.[serviceKey] || t.services?.items?.[activeTab];

  const tabConfigs = [
    {
      id: 'fullstack',
      icon: Layers,
      color: 'text-sky-600 dark:text-sky-400',
      label: t.hero.tabs?.fullstack || 'Fullstack',
      fullTitle: t.services?.items?.fullstack?.title || 'Full-Stack Web Development'
    },
    {
      id: 'frontend',
      icon: Layout,
      color: 'text-emerald-600 dark:text-emerald-400',
      label: t.hero.tabs?.frontend || 'Frontend',
      fullTitle: t.services?.items?.frontend?.title || 'Front-End Web Development'
    },
    {
      id: 'backend',
      icon: Database,
      color: 'text-indigo-600 dark:text-indigo-400',
      label: t.hero.tabs?.backend || 'Backend',
      fullTitle: t.services?.items?.backend?.title || 'Back-End & API Engineering'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      color: 'text-amber-600 dark:text-amber-400',
      label: t.hero.tabs?.mobile || 'Mobile',
      fullTitle: t.services?.items?.['mobile-games']?.title || 'Mobile Game Development'
    },
    {
      id: 'devops',
      icon: Server,
      color: 'text-sky-600 dark:text-sky-400',
      label: t.hero.tabs?.devops || 'DevOps',
      fullTitle: t.services?.items?.devops?.title || 'DevOps & Server Infrastructure'
    },
    {
      id: 'care',
      icon: Wrench,
      color: 'text-purple-600 dark:text-purple-400',
      label: t.hero.tabs?.care || 'Care',
      fullTitle: t.services?.items?.maintenance?.title || t.services?.items?.care?.title || 'Website Maintenance & Care'
    }
  ];

  const activeTabConfig = tabConfigs.find((tab) => tab.id === activeTab) || tabConfigs[0];
  const ActiveIcon = activeTabConfig.icon;

  const headline = {
    top: t.hero.coreHeadlines?.[activeTab]?.top || DEFAULT_HEADLINES[activeTab]?.top || current.title,
    accent: t.hero.coreHeadlines?.[activeTab]?.accent || DEFAULT_HEADLINES[activeTab]?.accent || current.tag
  };

  const deliverablesList = serviceDetail?.highlights || DEFAULT_DELIVERABLES[activeTab];
  const stackTagsList = serviceDetail?.tags || DEFAULT_STACK_TAGS[activeTab];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Luminous Ambient Canvas Background */}
      <HeroCanvas />

      {/* Gentle Vignette Fade */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#F8FAFC]/40 to-[#F8FAFC] dark:via-[#070B14]/40 dark:to-[#070B14] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        {/* Top Header: Active Discipline Badge & Dynamic Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          {/* Active Discipline Pill */}
          <div className="flex justify-center mb-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <ActiveIcon className={`w-3.5 h-3.5 ${activeTabConfig.color}`} />
              <span className="uppercase tracking-wide text-[11px] font-semibold">{current.tag || activeTabConfig.label}</span>
            </div>
          </div>

          {/* Dynamic Headline */}
          <div key={`headline-${activeTab}`} className="space-y-3 animate-tab-enter">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {headline.top}{' '}
              <span className="text-slate-500 dark:text-slate-400 font-medium block text-xl sm:text-2xl md:text-3xl mt-1.5">
                {headline.accent}
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
              {serviceDetail?.description || current.desc}
            </p>
          </div>
        </div>

        {/* 6 Disciplines Interactive Switcher Deck (Horizontal Tabs Bar) */}
        <div className="mb-6 flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
          {tabConfigs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleSelectTab(tab.id)}
                onMouseEnter={() => {
                  handleSelectTab(tab.id);
                  setIsPaused(true);
                }}
                onMouseLeave={() => setIsPaused(false)}
                className={`relative px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 border overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-slate-900 dark:border-white shadow-md scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{tab.label}</span>
                {isSelected && !isPaused && (
                  <div
                    className="absolute bottom-0 left-0 h-0.5 bg-amber-400 dark:bg-amber-500 transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Full-Screen Majestic Display Area */}
        <div
          onClick={() => setIsFullscreen(true)}
          className="relative w-full h-[52vh] sm:h-[62vh] md:h-[70vh] lg:h-[76vh] min-h-[380px] max-h-[820px] rounded-3xl overflow-hidden mb-8 border border-slate-200/90 dark:border-slate-800 shadow-2xl group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-sky-300 dark:hover:border-amber-500/50 bg-slate-950"
        >
          <img
            src={CORE_IMAGES[activeTab]?.src}
            alt={CORE_IMAGES[activeTab]?.alt}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
            loading="eager"
            width="1920"
            height="1080"
          />

          {/* Ambient subtle vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Overlay Caption & Discipline Tag */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white pointer-events-none">
            <div className="flex items-center gap-2.5 bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold drop-shadow text-white">
                {CORE_IMAGES[activeTab]?.caption}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-medium text-slate-300">
              <span>{serviceDetail?.title || activeTabConfig.fullTitle}</span>
            </div>
          </div>
        </div>

        {/* Deliverables & Stack Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 text-left">
          {/* Deliverables (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {serviceDetail?.title || activeTabConfig.fullTitle} — Key Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliverablesList.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-normal">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack & Assurance (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Core Architecture Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {stackTagsList.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="font-semibold text-slate-900 dark:text-white">Senior Human Craft</span>
              </div>
              <span className="text-[11px] font-medium">100% IP Ownership</span>
            </div>
          </div>
        </div>

        {/* CTAs Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#services"
            className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 font-bold transition-all flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform" />
            <span>{t.hero.exploreCta || 'Explore Capabilities'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#estimator"
            className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 transition-all cursor-pointer"
          >
            {t.hero.estimatorCta || 'Estimate Timeline'}
          </a>
        </div>

        {/* Dynamic Discipline KPI Row */}
        <div
          key={`kpi-${activeTab}`}
          className="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center animate-tab-enter"
        >
          {current.metrics?.map((m, idx) => (
            <div key={idx} className="group cursor-default">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white block group-hover:text-sky-600 dark:group-hover:text-amber-400 transition-colors truncate">
                {m.value}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium block mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Immersive Lightbox Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fade-in"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Top Control Bar */}
          <div
            className="w-full flex items-center justify-between pb-4 border-b border-slate-800 text-white max-w-7xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner">
                <ActiveIcon className={`w-5 h-5 ${activeTabConfig.color}`} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
                  {serviceDetail?.title || activeTabConfig.fullTitle}
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  {CORE_IMAGES[activeTab]?.caption} • High-Resolution View
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-semibold transition-all hover:scale-105 cursor-pointer shadow-xl"
                aria-label="Close Full Screen"
              >
                <X className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Close</span>
                <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">ESC</span>
              </button>
            </div>
          </div>

          {/* Center High-Res Image View (Uncropped Full Screen) */}
          <div
            className="flex-1 flex items-center justify-center py-4 relative max-w-7xl mx-auto w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={CORE_IMAGES[activeTab]?.src}
              alt={CORE_IMAGES[activeTab]?.alt}
              className="max-w-full max-h-[72vh] md:max-h-[76vh] object-contain rounded-2xl shadow-2xl border border-slate-800/90"
            />
          </div>

          {/* Bottom Navigation & Discipline Switcher */}
          <div
            className="w-full max-w-7xl mx-auto pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-slate-400 text-xs text-center sm:text-left font-medium">
              Click a discipline to inspect its high-resolution view:
            </p>

            <div className="flex flex-wrap justify-center gap-1.5">
              {SERVICE_TABS.map((tab) => {
                const config = TAB_CONFIG[tab];
                const isSel = tab === activeTab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab);
                      setProgress(0);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSel
                        ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                        : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {config.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
