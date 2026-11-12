import React, { useState, useMemo } from 'react';
import { ArrowRight, MessageSquare, Check } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

const tierMultipliers = {
  mvp: 0.8,
  production: 1.0,
  enterprise: 1.35
};

const TIER_IDS = ['mvp', 'production', 'enterprise'];

const TRACK_CONFIGS = [
  { id: 'Fullstack', multiplier: 1.15 },
  { id: 'Frontend', multiplier: 0.85 },
  { id: 'Backend', multiplier: 0.9 },
  { id: 'Games', multiplier: 1.3 },
  { id: 'DevOps', multiplier: 0.95 },
  { id: 'Maintenance', multiplier: 0.7 },
  { id: 'Cinematics', multiplier: 1.15 },
  { id: 'Admin', multiplier: 0.65 },
  { id: 'Consulting', multiplier: 0.8 }
];

export default function ScopeEstimator({ onApplyEstimate, preselectedTrack }) {
  const { t } = useLanguage();
  const [selectedTrack, setSelectedTrack] = useState(() => {
    if (preselectedTrack) {
      const found = TRACK_CONFIGS.find((tc) => tc.id.toLowerCase() === preselectedTrack.toLowerCase());
      if (found) return found;
    }
    return TRACK_CONFIGS[0];
  });
  const [scopeTier, setScopeTier] = useState('production');
  const [weeks, setWeeks] = useState(8);

  const [prevPreselected, setPrevPreselected] = useState(preselectedTrack);
  if (preselectedTrack && preselectedTrack !== prevPreselected) {
    setPrevPreselected(preselectedTrack);
    const found = TRACK_CONFIGS.find((tc) => tc.id.toLowerCase() === preselectedTrack.toLowerCase());
    if (found) {
      setSelectedTrack(found);
    }
  }

  const selectedTrackName = t.estimator.tracks?.[selectedTrack.id] || selectedTrack.id;

  const calculatedEstimate = useMemo(() => {
    const tierMult = tierMultipliers[scopeTier] || 1.0;
    const effectiveWeeks = weeks * selectedTrack.multiplier * tierMult;
    const minWeeks = Math.max(4, Math.round(effectiveWeeks * 0.85));
    const maxWeeks = Math.max(minWeeks + 2, Math.round(effectiveWeeks * 1.25));
    return { minWeeks, maxWeeks };
  }, [weeks, selectedTrack, scopeTier]);

  const phases =
    t.estimator.phases?.[selectedTrack.id] ||
    t.estimator.phases?.Fullstack ||
    t.estimator.phases?.Software || [
      'Phase 1: Architecture Blueprint, Schema & UI Specifications',
      'Phase 2: Core Engineering, Integration & Responsive Iterations',
      'Phase 3: QA Profiling, Production CI/CD & Launch Validation'
    ];

  const handleApply = () => {
    if (onApplyEstimate) {
      onApplyEstimate({
        trackName: selectedTrackName,
        trackId: selectedTrack.id,
        scopeTier,
        weeksWindow: `${calculatedEstimate.minWeeks} - ${calculatedEstimate.maxWeeks} ${t.estimator.weeksUnit}`
      });
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Codes Cinema, I used your Scope Estimator:\n\n• Track: ${selectedTrackName}\n• Tier: ${scopeTier.toUpperCase()}\n• Estimated Timeline: ${calculatedEstimate.minWeeks} - ${calculatedEstimate.maxWeeks} Weeks\n\nI would like to discuss this project scope.`
  );

  return (
    <section id="estimator" className="py-24 relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>{t.estimator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {t.estimator.heading}
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            {t.estimator.subtitle}
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
                  {t.estimator.step1}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TRACK_CONFIGS.map((track) => {
                    const isSelected = selectedTrack.id === track.id;
                    return (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => setSelectedTrack(track)}
                        className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white font-semibold border-slate-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {t.estimator.tracks?.[track.id] || track.id}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Complexity Tier */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 mb-3">
                  {t.estimator.step2}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {TIER_IDS.map((tierId) => {
                    const tier = t.estimator.tiers[tierId];
                    const isSelected = scopeTier === tierId;
                    return (
                      <button
                        key={tierId}
                        type="button"
                        onClick={() => setScopeTier(tierId)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
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
                    {t.estimator.step3}
                  </label>
                  <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md">
                    {t.estimator.baseWeeksPrefix} {weeks} {t.estimator.weeksUnit}
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  step="1"
                  value={weeks}
                  onChange={(e) => setWeeks(parseInt(e.target.value, 10))}
                  className="w-full accent-slate-900 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                  <span>{t.estimator.rangeMin}</span>
                  <span>{t.estimator.rangeMid}</span>
                  <span>{t.estimator.rangeMax}</span>
                </div>
              </div>
            </div>

            {/* Output Blueprint Card: 5 cols */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
                    {t.estimator.calculatedWindow}
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
                      {t.estimator.estimatedTimeline}
                    </span>
                    <div className="text-3xl sm:text-4xl font-bold font-['Orbitron',sans-serif] text-slate-900">
                      {calculatedEstimate.minWeeks} – {calculatedEstimate.maxWeeks}{' '}
                      <span className="text-sm font-normal text-slate-500">{t.estimator.weeksUnit}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider block mb-2.5">
                      {t.estimator.recommendedSprint}
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {phases.map((phase, idx) => (
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
                  <span>{t.estimator.applyCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/2348160498340?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl font-mono text-xs text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.estimator.whatsappCta}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
