import React, { useState } from 'react';
import HeroCanvas from './HeroCanvas';
import { ArrowRight, Smartphone, Code2, Wrench, ShieldCheck, ArrowUpRight, Server } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('mobile');

  const studioPreviews = {
    mobile: {
      tag: 'MOBILE GAME DEVELOPMENT',
      title: 'Unity Engine & Native Mobile Architecture',
      desc: 'Native iOS & Android compilation targets, fluid 60/120 FPS touch response, battery-optimized render pipelines, and live-ops mediation.',
      metrics: [
        { label: 'Framerate Target', value: '120 FPS Locked' },
        { label: 'Platforms', value: 'iOS & Android' },
        { label: 'Profiling', value: 'Zero Memory Leaks' }
      ]
    },
    software: {
      tag: 'CUSTOM SOFTWARE ENGINEERING',
      title: 'Scalable Cloud Microservices & APIs',
      desc: 'Distributed systems, real-time WebSockets, robust PostgreSQL/Redis caching, and automated CI/CD deployment pipelines.',
      metrics: [
        { label: 'Availability', value: '99.98% SLA' },
        { label: 'Architecture', value: 'Microservices' },
        { label: 'Data Sync', value: 'Sub-millisecond' }
      ]
    },
    devops: {
      tag: 'DEVOPS & SERVER MANAGEMENT',
      title: 'Cloud Infrastructure, Linux & CI/CD Pipelines',
      desc: 'Linux server administration, firewall hardening, automated zero-downtime CI/CD pipelines, Docker containerization, and 24/7 server health telemetry.',
      metrics: [
        { label: 'Infrastructure', value: 'Bare-Metal & Cloud' },
        { label: 'Automation', value: 'CI/CD Pipelines' },
        { label: 'Uptime SLA', value: '99.99% Uptime' }
      ]
    },
    care: {
      tag: 'WEBSITE MAINTENANCE & CARE',
      title: '24/7 Proactive Uptime & Security Shield',
      desc: 'Round-the-clock health checks, instant outage alerts, zero-day security patching, daily encrypted cloud backups, and speed tuning.',
      metrics: [
        { label: 'Monitoring', value: '24/7 Continuous' },
        { label: 'Backups', value: 'Daily Encrypted' },
        { label: 'Incident Response', value: '< 15 Min SLA' }
      ]
    },
    admin: {
      tag: 'ADMIN & OPERATIONS DESK',
      title: 'Dedicated Back-Office Technical Support',
      desc: 'Routine content publishing, CMS moderation, database integrity checks, user role permissions, and ongoing technical assistance.',
      metrics: [
        { label: 'Helpdesk SLA', value: 'Same-Day Turnaround' },
        { label: 'Operations', value: 'CMS & Database' },
        { label: 'Access Control', value: 'RBAC Audited' }
      ]
    }
  };

  const current = studioPreviews[activeTab];

  const terminalCommands = {
    mobile: 'unity-cli --target=mobile --fps=120 --profile=zero-leak',
    software: 'docker compose up -d --scale api=4 --env=prod',
    devops: 'ansible-playbook server-mesh.yml --check --ssl=active',
    care: 'systemctl status uptime-shield --live --sla=24-7',
    admin: 'ops-desk --sync-cms --verify-backups --audit-log'
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
                Available for Select Q4 / Q1 Commissions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] animate-fade-in-up animation-delay-100">
              Digital precision. <br />
              <span className="text-slate-500 font-normal">Cinematic depth.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              Code Cinema Studios engineers high-performance mobile games, bespoke cloud software, and provides DevOps, server management, and 24/7 technical operations.
            </p>

            {/* CTAs Cluster */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 animate-fade-in-up animation-delay-300">
              <a
                href="#showcase"
                className="group relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform" />
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#estimator"
                className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-slate-300 transition-all"
              >
                Project Scope Estimator
              </a>

              {/* Direct WhatsApp Quick Pill */}
              <a
                href="https://wa.me/2348160498340?text=Hello%20Code%20Cinema%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-medium text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all shadow-sm hover:scale-[1.02]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono font-semibold">+234 816 049 8340</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
              </a>
            </div>

            {/* Minimal KPI Row */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 text-left animate-fade-in-up animation-delay-400">
              <div className="group cursor-default">
                <span className="text-2xl font-bold font-['Orbitron',sans-serif] text-slate-900 block group-hover:text-amber-600 transition-colors">
                  120 FPS
                </span>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium">
                  Mobile Target
                </span>
              </div>
              <div className="group cursor-default">
                <span className="text-2xl font-bold font-['Orbitron',sans-serif] text-slate-900 block group-hover:text-sky-600 transition-colors">
                  99.98%
                </span>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium">
                  SLA Uptime
                </span>
              </div>
              <div className="group cursor-default">
                <span className="text-2xl font-bold font-['Orbitron',sans-serif] text-slate-900 block group-hover:text-emerald-600 transition-colors">
                  &lt; 24h
                </span>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium">
                  Direct Triage
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
                      alt="Code Cinema Studios"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Studio Capabilities</span>
                    <span className="text-[10px] font-mono text-slate-500">Code Cinema Core</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Production
                  </span>
                </div>
              </div>

              {/* Segmented Discipline Tabs */}
              <div className="p-1.5 bg-slate-100/70 border-b border-slate-200 grid grid-cols-5 gap-1 text-[11px] font-medium text-slate-600">
                <button
                  type="button"
                  onClick={() => setActiveTab('mobile')}
                  className={`py-1.5 px-1.5 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'mobile'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('software')}
                  className={`py-1.5 px-1.5 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'software'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-sky-600" />
                  <span className="hidden sm:inline">Software</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('devops')}
                  className={`py-1.5 px-1.5 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'devops'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Server className="w-3.5 h-3.5 text-sky-600" />
                  <span className="hidden sm:inline">DevOps</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('care')}
                  className={`py-1.5 px-1.5 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'care'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Wrench className="w-3.5 h-3.5 text-slate-700" />
                  <span className="hidden sm:inline">Care</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('admin')}
                  className={`py-1.5 px-1.5 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'admin'
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">Admin</span>
                </button>
              </div>

              {/* Animated Tab Content Display */}
              <div key={activeTab} className="p-6 space-y-4 animate-tab-enter">
                <div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-amber-700 font-bold block mb-1">
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
                    <span>Learn about this track</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="#contact"
                    className="text-xs font-semibold text-slate-900 hover:text-sky-600 hover:underline flex items-center gap-1 group"
                  >
                    <span>Request Discovery Call</span>
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
