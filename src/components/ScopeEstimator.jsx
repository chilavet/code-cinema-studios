import React, { useState, useMemo } from 'react';
import { ArrowRight, MessageSquare, Check } from 'lucide-react';

const tierMultipliers = {
  mvp: 0.8,
  production: 1.0,
  enterprise: 1.35
};

const TIERS = [
  {
    id: 'mvp',
    name: 'Sprint MVP',
    desc: 'Proof of concept, rapid core mechanics & launch validation.'
  },
  {
    id: 'production',
    name: 'Full Production',
    desc: 'Studio-tier architecture, complete QA, profiling & scaling.'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Scale',
    desc: 'Multi-platform ecosystem, 24/7 SLA & dedicated desk.'
  }
];

export default function ScopeEstimator({ onApplyEstimate }) {
  const [selectedTrack, setSelectedTrack] = useState({
    id: 'Games',
    name: 'Mobile Game Development',
    multiplier: 1.3,
    icon: '📱'
  });

  const [scopeTier, setScopeTier] = useState('production');
  const [weeks, setWeeks] = useState(8);

  const tracks = [
    { id: 'Games', name: 'Mobile Games', multiplier: 1.3 },
    { id: 'Software', name: 'Software Engineering', multiplier: 1.0 },
    { id: 'DevOps', name: 'DevOps & Servers', multiplier: 0.95 },
    { id: 'Maintenance', name: 'Website Maintenance', multiplier: 0.7 },
    { id: 'Admin', name: 'Admin Services', multiplier: 0.65 },
    { id: 'Cinematics', name: 'AI Adverts & Videos', multiplier: 1.15 },
    { id: 'Consulting', name: 'Tech Consulting', multiplier: 0.8 }
  ];

  const calculatedEstimate = useMemo(() => {
    const tierMult = tierMultipliers[scopeTier] || 1.0;
    const effectiveWeeks = weeks * selectedTrack.multiplier * tierMult;
    const minWeeks = Math.max(7, Math.round(effectiveWeeks * 0.85));
    const maxWeeks = Math.max(minWeeks + 2, Math.round(effectiveWeeks * 1.25));
    return { minWeeks, maxWeeks };
  }, [weeks, selectedTrack, scopeTier]);

  const getPhases = () => {
    switch (selectedTrack.id) {
      case 'Games':
        return [
          'Phase 1: Touch Control Physics & Graybox Mechanics',
          'Phase 2: Mobile Asset Optimization, Shaders & Level Architecture',
          'Phase 3: iOS/Android Profiling, Battery Draw & 60/120 FPS Tuning'
        ];
      case 'DevOps':
        return [
          'Phase 1: Server Architecture, Security Hardening & Firewall Setup',
          'Phase 2: Docker Containerization, Nginx Reverse Proxy & SSL Automation',
          'Phase 3: Automated Zero-Downtime CI/CD Pipelines & 24/7 Server Monitoring'
        ];
      case 'Maintenance':
        return [
          'Phase 1: Full Infrastructure, Security & Plugin Audit',
          'Phase 2: Automated Encrypted Backups & CDN Speed Tuning',
          'Phase 3: 24/7 Continuous Monitoring & SLA Triage Protocol'
        ];
      case 'Admin':
        return [
          'Phase 1: Role Delegation & Content Workflow Mapping',
          'Phase 2: Back-Office CMS, Database & Catalog Integration',
          'Phase 3: Dedicated SLA Operations Desk & Daily Routines'
        ];
      case 'Cinematics':
        return [
          'Phase 1: Viral Hook Concept, AI Storyboard & Video Prompt Architecture',
          'Phase 2: High-Resolution AI Video Generation, 3D CGI & Motion Graphics',
          'Phase 3: Color Grading, Dynamic Sound Mixing & Multi-Platform Mastering'
        ];
      case 'Consulting':
        return [
          'Phase 1: Architecture Blueprint & Security Review',
          'Phase 2: CI/CD Pipeline & Latency Optimization Plan',
          'Phase 3: Strategic Roadmapping & Scalability Hand-off'
        ];
      default:
        return [
          'Phase 1: Architecture Blueprint, Schema & API Contracts',
          'Phase 2: High-Concurrency Core API & Web Services',
          'Phase 3: Automated Testing, Penetration Audit & Staging'
        ];
    }
  };

  const handleApply = () => {
    if (onApplyEstimate) {
      onApplyEstimate({
        trackName: selectedTrack.name,
        trackId: selectedTrack.id,
        scopeTier,
        weeksWindow: `${calculatedEstimate.minWeeks} - ${calculatedEstimate.maxWeeks} Weeks`
      });
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Code Cinema Studios, I used your Scope Estimator:\n\n• Track: ${selectedTrack.name}\n• Tier: ${scopeTier.toUpperCase()}\n• Estimated Timeline: ${calculatedEstimate.minWeeks} - ${calculatedEstimate.maxWeeks} Weeks\n\nI would like to discuss this project scope.`
  );

  return (
    <section id="estimator" className="py-24 relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Interactive Roadmap Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Estimate your timeline & scope.
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Select your development discipline and operational tier to calculate a calibrated delivery window and phase structure.
          </p>
        </div>

        {/* Scoping Workspace */}
        <div className="card-minimal rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Input Controls: 7 cols */}
            <div className="lg:col-span-7 space-y-8">
              {/* 1. Track Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 mb-3">
                  1. Select Discipline Track
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {tracks.map((t) => {
                    const isSelected = selectedTrack.id === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTrack(t)}
                        className={`p-3 rounded-xl border text-left text-xs transition-all ${
                          isSelected
                            ? 'bg-slate-900 text-white font-semibold border-slate-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {t.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Complexity Tier */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 mb-3">
                  2. Complexity Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {TIERS.map((tier) => {
                    const isSelected = scopeTier === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setScopeTier(tier.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                            {tier.name}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <p className={`text-[11px] leading-snug ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {tier.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Delivery Window Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500">
                    3. Target Delivery Window
                  </label>
                  <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md">
                    Base: {weeks} Weeks
                  </span>
                </div>
                <input
                  type="range"
                  min="7"
                  max="24"
                  step="1"
                  value={weeks}
                  onChange={(e) => setWeeks(parseInt(e.target.value, 10))}
                  className="w-full accent-slate-900 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                  <span>7 Weeks (Target Sprint)</span>
                  <span>14 Weeks (Quarterly)</span>
                  <span>24 Weeks (Deep)</span>
                </div>
              </div>
            </div>

            {/* Output Blueprint Card: 5 cols */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
                    Calculated Window
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                    {selectedTrack.id.toUpperCase()}
                  </span>
                </div>

                <div
                  key={`${selectedTrack.id}-${scopeTier}-${calculatedEstimate.minWeeks}-${calculatedEstimate.maxWeeks}`}
                  className="mt-6 space-y-6 animate-tab-enter"
                >
                  <div>
                    <span className="text-xs text-slate-500 block mb-1">
                      Estimated Delivery Timeline
                    </span>
                    <div className="text-3xl sm:text-4xl font-bold font-['Orbitron',sans-serif] text-slate-900">
                      {calculatedEstimate.minWeeks} – {calculatedEstimate.maxWeeks} <span className="text-sm font-normal text-slate-500">Weeks</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider block mb-2.5">
                      Recommended Sprint Architecture
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {getPhases().map((phase, idx) => (
                        <li key={idx} className="flex items-start gap-2 hover:text-slate-950 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                          <span className="leading-snug">{phase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-slate-200 space-y-2.5">
                <a
                  href="#contact"
                  onClick={handleApply}
                  className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Apply Scope To Inquiry Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/2348160498340?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl font-mono text-xs text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Send Scope to WhatsApp (+234 816 049 8340)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
