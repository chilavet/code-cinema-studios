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
import useScrollPhysics from '../hooks/useScrollPhysics';

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
    src: '/images/core/fullstack.jpg?v=3',
    alt: 'Turnkey Full-Stack Web Platform SaaS Dashboard & Cloud Architecture',
    caption: 'Production Web Application Interface & Cloud Dashboard'
  },
  frontend: {
    src: '/images/core/frontend.jpg?v=3',
    alt: 'Pixel-Perfect Reactive Frontend UI Component System',
    caption: 'Responsive High-Performance UI Design System'
  },
  backend: {
    src: '/images/core/backend.jpg?v=3',
    alt: 'High-Concurrency Cloud Server Network & API Microservices',
    caption: 'Distributed Microservices & Real-Time Event Pipelines'
  },
  mobile: {
    src: '/images/core/mobile.jpg?v=3',
    alt: 'Mobile Game Development Unity Engine 120 FPS Gaming',
    caption: 'Touch-Optimized Mobile Arcade & 3D Unity Engine'
  },
  devops: {
    src: '/images/core/devops.jpg?v=3',
    alt: 'DevOps Automated CI/CD Server Mesh & Cloud Infrastructure',
    caption: 'Linux Multi-Region Mesh & Zero-Downtime Deployments'
  },
  care: {
    src: '/images/core/care.jpg?v=3',
    alt: '24/7 Cybersecurity Shield & Website Health Monitoring',
    caption: 'Proactive SLA Shield & Continuous Uptime Telemetry'
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
  const { scrollY } = useScrollPhysics();
  const [activeTab, setActiveTab] = useState('fullstack');
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [isHoveringDisplay, setIsHoveringDisplay] = useState(false);

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

    const timer = setInterval(() => {
      setActiveTab((curr) => {
        const nextIdx = (SERVICE_TABS.indexOf(curr) + 1) % SERVICE_TABS.length;
        return SERVICE_TABS[nextIdx];
      });
    }, CYCLE_DURATION_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
  };

  const handleDisplayMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x, y });
  };

  const handleDisplayMouseEnter = () => {
    setIsHoveringDisplay(true);
    setIsPaused(true);
  };

  const handleDisplayMouseLeave = () => {
    setIsHoveringDisplay(false);
    setIsPaused(false);
    setMouseTilt({ x: 0, y: 0 });
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
      color: 'text-[#C2613A]',
      label: t.hero.tabs?.fullstack || 'Fullstack',
      fullTitle: t.services?.items?.fullstack?.title || 'Full-Stack Web Development'
    },
    {
      id: 'frontend',
      icon: Layout,
      color: 'text-[#2A6F62]',
      label: t.hero.tabs?.frontend || 'Frontend',
      fullTitle: t.services?.items?.frontend?.title || 'Front-End Web Development'
    },
    {
      id: 'backend',
      icon: Database,
      color: 'text-[#57534E]',
      label: t.hero.tabs?.backend || 'Backend',
      fullTitle: t.services?.items?.backend?.title || 'Back-End & API Engineering'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      color: 'text-[#D97706]',
      label: t.hero.tabs?.mobile || 'Mobile',
      fullTitle: t.services?.items?.['mobile-games']?.title || 'Mobile Game Development'
    },
    {
      id: 'devops',
      icon: Server,
      color: 'text-[#2A6F62]',
      label: t.hero.tabs?.devops || 'DevOps',
      fullTitle: t.services?.items?.devops?.title || 'DevOps & Server Infrastructure'
    },
    {
      id: 'care',
      icon: Wrench,
      color: 'text-[#9A4321]',
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
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#FBF9F5]/40 to-[#FBF9F5] dark:via-[#141210]/40 dark:to-[#141210] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        {/* Top Header: Dynamic Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          {/* Dynamic Headline */}
          <div key={`headline-${activeTab}`} className="space-y-3 animate-tab-enter">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
              {headline.top}{' '}
              <span className="text-stone-500 dark:text-stone-400 font-medium block text-xl sm:text-2xl md:text-3xl mt-1.5">
                {headline.accent}
              </span>
            </h1>

            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
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
                    ? 'bg-stone-900 text-stone-50 dark:bg-[#FAF8F5] dark:text-stone-950 border-stone-900 dark:border-stone-100 shadow-sm scale-102'
                    : 'bg-[#FAF8F5] dark:bg-[#1C1A18] text-stone-700 dark:text-stone-300 border-[#E7E2DB] dark:border-[#2C2825] hover:bg-[#F2EFE9] dark:hover:bg-[#252220]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Full-Screen Majestic Living Display Area */}
        <div
          onClick={() => setIsFullscreen(true)}
          onMouseMove={handleDisplayMouseMove}
          onMouseEnter={handleDisplayMouseEnter}
          onMouseLeave={handleDisplayMouseLeave}
          className="relative w-full h-[52vh] sm:h-[62vh] md:h-[70vh] lg:h-[76vh] min-h-[380px] max-h-[820px] rounded-3xl overflow-hidden mb-8 border border-[#E7E2DB] dark:border-[#2C2825] shadow-2xl group cursor-pointer transition-all duration-300 hover:border-[#C2613A]/50 dark:hover:border-[#E07A5F]/50 bg-stone-950"
          style={{
            transform: isHoveringDisplay
              ? `perspective(1200px) rotateY(${mouseTilt.x * 4}deg) rotateX(${-mouseTilt.y * 4}deg) translate3d(0, ${Math.min(scrollY * 0.08, 48)}px, 0)`
              : `perspective(1200px) rotateY(0deg) rotateX(0deg) translate3d(0, ${Math.min(scrollY * 0.08, 48)}px, 0)`,
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease'
          }}
        >
          {/* Layered Crossfading Animated Images */}
          {SERVICE_TABS.map((tabKey, idx) => {
            const isSelected = activeTab === tabKey;
            const isEven = idx % 2 === 0;
            const kenBurnsClass = isEven ? 'animate-ken-burns' : 'animate-ken-burns-alt';
            const imgInfo = CORE_IMAGES[tabKey];

            return (
              <div
                key={tabKey}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isSelected ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={imgInfo?.src}
                  alt={imgInfo?.alt}
                  className={`w-full h-full object-cover object-center ${
                    isSelected ? kenBurnsClass : 'scale-100'
                  } transition-transform duration-700 ease-out`}
                  loading="eager"
                  width="1920"
                  height="1080"
                  style={{
                    transform: isHoveringDisplay
                      ? `translate3d(${-mouseTilt.x * 12}px, ${-mouseTilt.y * 12}px, 0)`
                      : undefined
                  }}
                />
              </div>
            );
          })}

          {/* Living diagonal ambient shimmer sweep */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            <div className="w-[50%] h-[200%] -top-[50%] bg-gradient-to-r from-transparent via-white/12 to-transparent animate-shimmer-sweep pointer-events-none" />
          </div>

          {/* Subtle vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-stone-950/40 pointer-events-none z-15" />

          {/* Bottom Overlay Caption & Discipline Tag (z-30) */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white pointer-events-none z-30">
            <div className="flex items-center gap-2.5 bg-stone-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#52B788] shrink-0 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold drop-shadow text-white">
                {CORE_IMAGES[activeTab]?.caption}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-stone-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-medium text-stone-300">
              <ActiveIcon className="w-3.5 h-3.5 text-[#52B788]" />
              <span>{serviceDetail?.title || activeTabConfig.fullTitle}</span>
            </div>
          </div>
        </div>

        {/* Deliverables & Stack Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 text-left">
          {/* Deliverables (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-4">
              {serviceDetail?.title || activeTabConfig.fullTitle} — Key Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliverablesList.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-stone-600 dark:text-stone-300 font-normal">
                  <CheckCircle2 className="w-4 h-4 text-[#2A6F62] dark:text-[#52B788] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack & Assurance (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-sm flex flex-col justify-between gap-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-3">
                Core Architecture Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {stackTagsList.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#F2EFE9] dark:bg-[#252220] text-stone-700 dark:text-stone-300 border border-[#E7E2DB] dark:border-[#2E2A27]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E7E2DB] dark:border-[#2C2825] flex items-center justify-between text-xs text-stone-600 dark:text-stone-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2A6F62] shrink-0" />
                <span className="font-semibold text-stone-900 dark:text-stone-100">Senior Human Craft</span>
              </div>
              <span className="text-[11px] font-medium">100% IP Ownership</span>
            </div>
          </div>
        </div>

        {/* CTAs Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#services"
            className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-stone-50 bg-stone-900 hover:bg-stone-800 dark:bg-[#C2613A] dark:hover:bg-[#A84F2E] dark:text-white transition-all flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform" />
            <span>{t.hero.exploreCta || 'Explore Capabilities'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#estimator"
            className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-stone-800 dark:text-stone-200 bg-[#FAF8F5] dark:bg-[#1C1A18] hover:bg-[#F2EFE9] dark:hover:bg-[#252220] border border-[#E7E2DB] dark:border-[#2C2825] shadow-sm hover:border-stone-400 dark:hover:border-stone-600 transition-all cursor-pointer"
          >
            {t.hero.estimatorCta || 'Estimate Timeline'}
          </a>
        </div>

        {/* Dynamic Discipline KPI Row */}
        <div
          key={`kpi-${activeTab}`}
          className="pt-8 border-t border-[#E7E2DB] dark:border-[#2C2825] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center animate-tab-enter"
        >
          {current.metrics?.map((m, idx) => (
            <div key={idx} className="group cursor-default">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100 block group-hover:text-[#C2613A] dark:group-hover:text-[#E07A5F] transition-colors truncate">
                {m.value}
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wide font-medium block mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Immersive Lightbox Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fade-in"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Top Control Bar */}
          <div
            className="w-full flex items-center justify-between pb-4 border-b border-[#2C2825] text-white max-w-7xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1C1A18] border border-[#2C2825] flex items-center justify-center shadow-inner">
                <ActiveIcon className={`w-5 h-5 ${activeTabConfig.color}`} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
                  {serviceDetail?.title || activeTabConfig.fullTitle}
                </h3>
                <span className="text-xs text-stone-400 font-medium">
                  {CORE_IMAGES[activeTab]?.caption} • High-Resolution View
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C1A18] hover:bg-[#252220] border border-[#2C2825] text-stone-200 text-xs font-semibold transition-all hover:scale-105 cursor-pointer shadow-xl"
                aria-label="Close Full Screen"
              >
                <X className="w-4 h-4 text-[#E07A5F]" />
                <span className="hidden sm:inline">Close</span>
                <span className="text-[10px] text-stone-400 bg-stone-900 px-1.5 py-0.5 rounded">ESC</span>
              </button>
            </div>
          </div>

          {/* Center High-Res Image View with Ken Burns animation & crossfade */}
          <div
            className="flex-1 flex items-center justify-center py-4 relative max-w-7xl mx-auto w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[72vh] md:max-h-[76vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-stone-800/90 bg-stone-950">
              {SERVICE_TABS.map((tabKey) => {
                const isSel = tabKey === activeTab;
                const imgInfo = CORE_IMAGES[tabKey];
                return (
                  <div
                    key={`modal-${tabKey}`}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                      isSel ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={imgInfo?.src}
                      alt={imgInfo?.alt}
                      className="w-full h-full object-cover object-center animate-ken-burns"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Navigation & Discipline Switcher */}
          <div
            className="w-full max-w-7xl mx-auto pt-3 border-t border-[#2C2825] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-stone-400 text-xs text-center sm:text-left font-medium">
              Select a discipline to view in high resolution:
            </p>

            <div className="flex flex-wrap justify-center gap-1.5">
              {SERVICE_TABS.map((tab) => {
                const config = tabConfigs.find((t) => t.id === tab) || tabConfigs[0];
                const isSel = tab === activeTab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSel
                        ? 'bg-[#C2613A] text-white shadow-md scale-105'
                        : 'bg-[#1C1A18] text-stone-300 hover:text-white hover:bg-[#252220] border border-[#2C2825]'
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
