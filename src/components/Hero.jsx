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
  Sparkles
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

const TERMINAL_COMMANDS = {
  fullstack: 'npx create-next-app@latest --ts --tailwind --app',
  frontend: 'npm run build -- --react-19 --core-web-vitals=100',
  backend: 'docker compose up -d postgres redis api-gateway',
  mobile: 'unity-cli --target=mobile --fps=120 --profile=zero-leak',
  devops: 'ansible-playbook server-mesh.yml --check --ssl=active',
  care: 'systemctl status uptime-shield --live --sla=24-7'
};

export default function Hero() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('fullstack');
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Live continuous auto-switching across Codes Cinema Core services
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

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* Left Column: Highlighted Core Discipline Detailed Presentation (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Bar: Live Status & Active Discipline Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 animate-fade-in-up">
              {/* Live Core Indicator Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-200/90 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-mono font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="tracking-wider uppercase text-[11px]">
                  CODES CINEMA CORE • LIVE ROTATION
                </span>
              </div>

              {/* Specific Discipline Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-[11px] font-mono font-medium shadow-sm">
                <ActiveIcon className={`w-3.5 h-3.5 ${activeTabConfig.color}`} />
                <span className="uppercase font-semibold">{current.tag || activeTabConfig.label}</span>
              </div>
            </div>

            {/* Dynamic Main Headline */}
            <div key={`headline-${activeTab}`} className="space-y-3 animate-tab-enter">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white leading-snug">
                {headline.top}{' '}
                <span className="text-slate-500 dark:text-slate-400 font-normal block text-lg sm:text-2xl lg:text-3xl mt-1">
                  {headline.accent}
                </span>
              </h1>

              {/* Detailed Discipline Explanation */}
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {serviceDetail?.description || current.desc}
              </p>
            </div>

            {/* Rich Detailed Capabilities / Deliverables Box */}
            <div
              key={`details-${activeTab}`}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 max-w-2xl text-left shadow-sm hover:shadow-md transition-all duration-300 animate-tab-enter"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-sm">
                    <ActiveIcon className={`w-4 h-4 ${activeTabConfig.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                      {serviceDetail?.title || activeTabConfig.fullTitle}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      Production Deliverables & Architecture
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Live Core Specification</span>
                </div>
              </div>

              {/* Deliverable Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {deliverablesList.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-normal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 mr-1 font-semibold">
                  Core Stack:
                </span>
                {stackTagsList.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs Cluster */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 animate-fade-in-up">
              <a
                href="#services"
                className="group relative overflow-hidden px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 font-bold transition-all flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform" />
                <span>{t.hero.exploreCta || 'Explore Capabilities'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#estimator"
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 transition-all cursor-pointer"
              >
                {t.hero.estimatorCta || 'Estimate Timeline'}
              </a>
            </div>

            {/* Dynamic Discipline KPI Row */}
            <div
              key={`kpi-${activeTab}`}
              className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0 text-left animate-tab-enter"
            >
              {current.metrics?.map((m, idx) => (
                <div key={idx} className="group cursor-default">
                  <span className="text-lg sm:text-xl font-bold font-['Orbitron',sans-serif] text-slate-900 dark:text-white block group-hover:text-sky-600 dark:group-hover:text-amber-400 transition-colors truncate">
                    {m.value}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium truncate block">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Codes Cinema Core Interactive Deck (5 cols) */}
          <div className="lg:col-span-5 animate-float">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/80 overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-slate-50/90 dark:bg-slate-950/80 border-b border-slate-200/90 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full p-0.5 bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                    <img
                      src="/logo.jpg"
                      alt="Codes Cinema"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      {t.hero.cardTitle || 'Codes Cinema Core'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      {t.hero.cardCore || 'Live Architecture'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* The 6 Core Services Deck */}
              <div className="p-3 space-y-2">
                {tabConfigs.map((tab) => {
                  const Icon = tab.icon;
                  const isSelected = activeTab === tab.id;
                  const itemPreview = t.hero.previews?.[tab.id] || {};
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleSelectTab(tab.id)}
                      onMouseEnter={() => {
                        handleSelectTab(tab.id);
                        setIsPaused(true);
                      }}
                      onMouseLeave={() => {
                        setIsPaused(false);
                      }}
                      className={`relative w-full text-left p-3.5 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden border flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-sky-50/90 dark:bg-slate-800 text-slate-900 dark:text-white border-sky-300/90 dark:border-amber-500/80 shadow-sm ring-1 ring-sky-200/60 dark:ring-0 scale-[1.01]'
                          : 'bg-white/80 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Icon */}
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                            isSelected
                              ? 'bg-white text-sky-600 dark:bg-slate-700 dark:text-amber-400 shadow-sm border border-sky-200/80 dark:border-slate-600'
                              : 'bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 ' + tab.color
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        {/* Title & Tag */}
                        <div className="min-w-0">
                          <h4
                            className={`text-xs font-bold truncate leading-tight ${
                              isSelected ? 'text-slate-950 dark:text-white' : 'text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            {tab.fullTitle || tab.label}
                          </h4>
                          <span
                            className={`text-[10px] font-mono block truncate mt-0.5 ${
                              isSelected
                                ? 'text-sky-700 dark:text-amber-300/90 font-semibold'
                                : 'text-slate-500 dark:text-slate-400'
                            }`}
                          >
                            {itemPreview.tag || tab.label}
                          </span>
                        </div>
                      </div>

                      {/* Right Indicator: Active Arrow or Pulse Dot */}
                      <div className="shrink-0 flex items-center gap-2">
                        {isSelected && (
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 dark:bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600 dark:bg-emerald-400" />
                          </span>
                        )}
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform ${
                            isSelected
                              ? 'text-sky-600 dark:text-amber-400 translate-x-0.5'
                              : 'text-slate-300 dark:text-slate-600 opacity-60'
                          }`}
                        />
                      </div>

                      {/* Active Live Progress Bar on the Selected Card */}
                      {isSelected && !isPaused && (
                        <div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-amber-400 dark:to-amber-500 transition-all duration-75"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Discipline CLI Console Bar */}
              <div className="p-3.5 pt-0">
                <div className="flex items-center gap-2 font-mono text-[11px] bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200 py-2.5 px-3 rounded-xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-800">
                  <span className="text-sky-600 dark:text-emerald-400 font-bold">$</span>
                  <span className="truncate text-slate-700 dark:text-slate-300 font-medium">
                    {TERMINAL_COMMANDS[activeTab]}
                  </span>
                  <span className="w-1.5 h-3.5 bg-sky-600 dark:bg-emerald-400 animate-pulse shrink-0 ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
