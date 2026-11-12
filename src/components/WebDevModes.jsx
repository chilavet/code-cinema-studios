import React, { useState } from 'react';
import { Layers, Layout, Database, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export default function WebDevModes({ onInquireMode, onScopeMode }) {
  const { t } = useLanguage();
  const [activeMode, setActiveMode] = useState('fullstack');

  const modes = [
    {
      id: 'fullstack',
      icon: Layers,
      accent: 'sky',
      badge: t.webModes?.modes?.fullstack?.badge || 'Turnkey Delivery',
      tabLabel: t.webModes?.modes?.fullstack?.tabLabel || 'Full-Stack Web',
      title: t.webModes?.modes?.fullstack?.title || 'Turnkey Full-Stack Web Applications',
      tagline: t.webModes?.modes?.fullstack?.tagline || 'Complete architecture from database schema to responsive reactive UI',
      description:
        t.webModes?.modes?.fullstack?.desc ||
        'End-to-end engineering of modern web platforms. We take your concept from raw requirements into production, architecting clean database models, robust APIs, and a pixel-perfect, reactive user interface.',
      deliverables: t.webModes?.modes?.fullstack?.deliverables || [
        'End-to-end architecture (Client UI + API + Cloud Database)',
        'Authentication (JWT / OAuth2 / Sessions) & Role-Based Access Control',
        'Real-time data synchronization & state hydration',
        'Stripe / LemonSqueezy / PayPal payment integration',
        'Automated CI/CD deployment pipelines & zero-downtime hosting'
      ],
      techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Redis'],
      bestFor:
        t.webModes?.modes?.fullstack?.bestFor ||
        'Startups, new product launches, MVPs, and businesses needing a complete, production-ready web application built from scratch.'
    },
    {
      id: 'frontend',
      icon: Layout,
      accent: 'emerald',
      badge: t.webModes?.modes?.frontend?.badge || 'Modular UI/UX',
      tabLabel: t.webModes?.modes?.frontend?.tabLabel || 'Front-End Only',
      title: t.webModes?.modes?.frontend?.title || 'Dedicated Front-End Web Engineering',
      tagline: t.webModes?.modes?.frontend?.tagline || 'Pixel-perfect, high-performance UI tailored to your existing backend',
      description:
        t.webModes?.modes?.frontend?.desc ||
        'Specialized front-end engineering for teams with existing APIs or backend systems. We transform Figma designs into blisteringly fast, responsive, accessible web interfaces with fluid animations.',
      deliverables: t.webModes?.modes?.frontend?.deliverables || [
        'Modern React 19 / Next.js / Vue component hierarchy',
        'Fluid micro-interactions, responsive mobile-first layouts',
        'Robust state management (Zustand / TanStack Query) & cache hydration',
        'API contract integration with your existing REST/GraphQL backend',
        'Core Web Vitals tuning: zero layout shift (CLS) & sub-second LCP'
      ],
      techStack: ['React 19', 'Next.js App Router', 'Tailwind CSS', 'TypeScript', 'TanStack Query', 'Framer Motion'],
      bestFor:
        t.webModes?.modes?.frontend?.bestFor ||
        'Teams with backend engineers in place who need an expert front-end specialist to deliver an arresting, high-converting client application.'
    },
    {
      id: 'backend',
      icon: Database,
      accent: 'amber',
      badge: t.webModes?.modes?.backend?.badge || 'Modular API & DB',
      tabLabel: t.webModes?.modes?.backend?.tabLabel || 'Back-End Only',
      title: t.webModes?.modes?.backend?.title || 'Back-End & API System Engineering',
      tagline: t.webModes?.modes?.backend?.tagline || 'Resilient schemas, microservices, and high-concurrency cloud endpoints',
      description:
        t.webModes?.modes?.backend?.desc ||
        'Rock-solid backend engineering for web and mobile clients. We architect normalized relational schemas, resilient caching layers, secure authentication, and scalable microservices designed for 99.98% uptime.',
      deliverables: t.webModes?.modes?.backend?.deliverables || [
        'High-concurrency REST, GraphQL & gRPC API design with OpenAPI docs',
        'PostgreSQL / MySQL / Redis database architecture & migration strategies',
        'Enterprise auth: OAuth2, JWT, multi-tenant RBAC & webhook endpoints',
        'Asynchronous queue processing (BullMQ / Celery) & background workers',
        'Docker containerization, Nginx reverse proxies & cloud scaling'
      ],
      techStack: ['Node.js', 'Express / NestJS', 'Python / FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Linux', 'Nginx'],
      bestFor:
        t.webModes?.modes?.backend?.bestFor ||
        'Projects scaling user traffic, modernizing legacy infrastructure, or building specialized server-side capabilities for front-end teams.'
    }
  ];

  const current = modes.find((m) => m.id === activeMode) || modes[0];

  const handleInquire = () => {
    if (onInquireMode) {
      onInquireMode(current.title, `Inquiring about ${current.title} track. Interested in discussing architecture scope, deliverables, and engineering timelines.`);
    }
  };

  const handleScope = () => {
    if (onScopeMode) {
      const trackId = current.id === 'frontend' ? 'Frontend' : current.id === 'backend' ? 'Backend' : 'Fullstack';
      onScopeMode(trackId, current.title);
    }
  };

  return (
    <section id="web-dev" className="py-24 relative z-10 border-t border-slate-200 bg-slate-50/50">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-700 uppercase tracking-widest mb-3 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/80">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>{t.webModes?.badge || 'Modular Web Engineering'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            {t.webModes?.heading || 'Full-Stack Web Development, Built Your Way.'}
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.webModes?.subtitle ||
              'Codes Cinema provides complete turnkey full-stack web applications, with the flexibility to contract dedicated front-end or back-end engineering separately depending on your project needs.'}
          </p>
        </div>

        {/* Interactive Mode Tabs Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm max-w-2xl">
          {modes.map((mode) => {
            const Icon = mode.icon;
            const isSelected = mode.id === activeMode;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode.id)}
                className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                <span>{mode.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Architecture Display Card */}
        <div className="card-minimal rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Scope & Deliverables (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-emerald-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t.webModes?.availableLabel || 'Available for Commission'}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-sky-700 mt-1">
                  {current.tagline}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3">
                  {current.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3">
                  {t.webModes?.deliverablesLabel || 'Production Deliverables'}
                </h4>
                <div className="space-y-2.5">
                  {current.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Tech Stack, Fit & Quick Actions (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Best For Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  {t.webModes?.idealForLabel || 'IDEAL FOR'}
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {current.bestFor}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                  {t.webModes?.techStackLabel || 'CORE TECH STACK'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {current.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleInquire}
                  className="flex-1 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                >
                  <span>{t.webModes?.inquireBtn || 'Inquire This Track'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleScope}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all cursor-pointer text-center"
                >
                  {t.webModes?.estimateBtn || 'Estimate Timeline'}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
