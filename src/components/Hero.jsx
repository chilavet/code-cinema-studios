import React, { useState } from 'react';
import HeroCanvas from './HeroCanvas';
import {
  ArrowRight,
  Smartphone,
  Code2,
  Wrench,
  ArrowUpRight,
  Server,
  Layers,
  Layout,
  Database
} from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export default function Hero() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('fullstack');

  const current =
    t.hero.previews?.[activeTab] ||
    t.hero.previews?.fullstack ||
    t.hero.previews?.software ||
    t.hero.previews?.mobile;

  const terminalCommands = {
    fullstack: 'npx create-next-app@latest --ts --tailwind --app',
    frontend: 'npm run build -- --react-19 --core-web-vitals=100',
    backend: 'docker compose up -d postgres redis api-gateway',
    mobile: 'unity-cli --target=mobile --fps=120 --profile=zero-leak',
    devops: 'ansible-playbook server-mesh.yml --check --ssl=active',
    care: 'systemctl status uptime-shield --live --sla=24-7'
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Luminous Ambient Canvas Background */}
      <HeroCanvas />

      {/* Gentle Vignette Fade */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#F8FAFC]/40 to-[#F8FAFC] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Status Pill with Live Radar Ring */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs text-slate-700 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-slate-600">
                {t.hero.statusPill}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] animate-fade-in-up animation-delay-100">
              {t.hero.headlineTop} <br />
              <span className="text-slate-500 font-normal">{t.hero.headlineAccent}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              {t.hero.subtitle}
            </p>

            {/* Catchy Hook Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/90 border border-sky-200/90 max-w-xl text-left animate-fade-in-up animation-delay-250 shadow-sm flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {t.hero.hookTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {t.hero.hookBody}
                </p>
              </div>
            </div>

            {/* CTAs Cluster */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 animate-fade-in-up animation-delay-300">
              <a
                href="#web-dev"
                className="group relative overflow-hidden px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform" />
                <span>{t.hero.exploreCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#estimator"
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-slate-300 transition-all"
              >
                {t.hero.estimatorCta}
              </a>

              {/* Direct WhatsApp Quick Pill */}
              <a
                href="https://wa.me/2348160498340?text=Hello%20Codes%20Cinema%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl text-xs font-medium text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all shadow-sm hover:scale-[1.02]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono font-semibold">+234 816 049 8340</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
              </a>
            </div>

            {/* Minimal KPI Row */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 text-left animate-fade-in-up animation-delay-400">
              <div className="group cursor-default">
                <span className="text-xl sm:text-2xl font-bold font-['Orbitron',sans-serif] text-slate-900 block group-hover:text-sky-600 transition-colors">
                  Full-Stack
                </span>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium">
                  {t.hero.kpiModular || 'Or FE / BE Modular'}
                </span>
              </div>
              <div className="group cursor-default">
                <span className="text-xl sm:text-2xl font-bold font-['Orbitron',sans-serif] text-slate-900 block group-hover:text-amber-600 transition-colors">
                  120 FPS
                </span>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium">
                  Mobile Target
                </span>
              </div>
              <div className="group cursor-default">
                <span className="text-xl sm:text-2xl font-bold font-['Orbitron',sans-serif] text-slate-900 block group-hover:text-emerald-600 transition-colors">
                  99.98%
                </span>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium">
                  {t.hero.kpiUptime}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Studio Interface Preview with Floating Animation (5 cols) */}
          <div className="lg:col-span-5 animate-float">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full p-0.5 bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                    <img
                      src="/logo.jpg"
                      alt="Codes Cinema"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{t.hero.cardTitle}</span>
                    <span className="text-[10px] font-mono text-slate-500">{t.hero.cardCore}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {t.hero.cardStatus}
                  </span>
                </div>
              </div>

              {/* Segmented Discipline Tabs */}
              <div className="p-1.5 bg-slate-100/70 border-b border-slate-200 grid grid-cols-3 sm:grid-cols-6 gap-1 text-[10px] font-medium text-slate-600">
                <button
                  type="button"
                  onClick={() => setActiveTab('fullstack')}
                  className={`py-1.5 px-1 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'fullstack'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Layers className="w-3 h-3 text-sky-600 shrink-0" />
                  <span className="truncate">{t.hero.tabs?.fullstack || 'Fullstack'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('frontend')}
                  className={`py-1.5 px-1 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'frontend'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Layout className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="truncate">{t.hero.tabs?.frontend || 'Frontend'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('backend')}
                  className={`py-1.5 px-1 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'backend'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Database className="w-3 h-3 text-indigo-600 shrink-0" />
                  <span className="truncate">{t.hero.tabs?.backend || 'Backend'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('mobile')}
                  className={`py-1.5 px-1 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'mobile'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Smartphone className="w-3 h-3 text-amber-600 shrink-0" />
                  <span className="truncate">{t.hero.tabs?.mobile || 'Mobile'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('devops')}
                  className={`py-1.5 px-1 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'devops'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Server className="w-3 h-3 text-sky-600 shrink-0" />
                  <span className="truncate">{t.hero.tabs?.devops || 'DevOps'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('care')}
                  className={`py-1.5 px-1 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'care'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Wrench className="w-3 h-3 text-slate-700 shrink-0" />
                  <span className="truncate">{t.hero.tabs?.care || 'Care'}</span>
                </button>
              </div>

              {/* Animated Tab Content Display */}
              <div key={activeTab} className="p-6 space-y-4 animate-tab-enter">
                <div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-sky-700 font-bold block mb-1">
                    {current.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {current.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {current.desc}
                  </p>
                </div>

                {/* Animated CLI Telemetry Bar */}
                <div className="flex items-center gap-2 font-mono text-[11px] bg-slate-900 text-slate-200 py-2 px-3 rounded-xl overflow-hidden shadow-inner">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="truncate text-slate-300">{terminalCommands[activeTab]}</span>
                  <span className="w-1.5 h-3.5 bg-emerald-400 animate-pulse shrink-0 ml-auto" />
                </div>

                {/* Metrics Breakdown */}
                <div className="pt-2 border-t border-slate-100 grid grid-cols-3 gap-3">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 hover:bg-white hover:border-slate-300 transition-colors">
                      <span className="text-[10px] font-mono text-slate-500 block truncate">
                        {m.label}
                      </span>
                      <span className="text-xs font-bold text-slate-900 block mt-0.5 truncate">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quick Link to Discipline */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <a
                    href="#services"
                    className="group text-slate-600 hover:text-slate-900 font-medium transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <span>{t.hero.learnMore}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="#contact"
                    className="text-xs font-semibold text-slate-900 hover:text-sky-600 hover:underline flex items-center gap-1 group"
                  >
                    <span>{t.hero.requestCall}</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
