import React, { useState, useMemo } from 'react';
import { ArrowRight, MessageSquare, Check } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import useScrollReveal from '../hooks/useScrollReveal';

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
  const [revealRef] = useScrollReveal({ threshold: 0.08 });
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
    <section id="estimator" ref={revealRef} className="py-24 relative z-10 border-t border-[#E7E2DB] dark:border-[#2C2825] overflow-hidden">
      {/* Ambient Moving Orbs */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-[#D97706]/10 via-[#C2613A]/5 to-transparent blur-3xl pointer-events-none animate-orb-1 -z-10" />
      <div className="absolute bottom-10 -right-40 w-80 h-80 rounded-full bg-gradient-to-bl from-[#2A6F62]/10 via-[#52B788]/5 to-transparent blur-3xl pointer-events-none animate-orb-2 -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-3 animate-float-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
            <span>{t.estimator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            {t.estimator.heading}
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
            {t.estimator.subtitle}
          </p>
        </div>

        {/* Scoping Workspace with Reveal */}
        <div className="card-minimal rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E7E2DB] dark:border-[#2C2825] bg-[#FAF8F5] dark:bg-[#1C1A18] reveal-scale">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Input Controls: 7 cols */}
            <div className="lg:col-span-7 space-y-8">
              {/* 1. Track Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wide font-semibold text-stone-500 dark:text-stone-400 mb-3">
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
                        className={`p-3 rounded-xl border text-left text-xs transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-bold border-stone-900 dark:border-stone-100 shadow-sm scale-102'
                            : 'bg-white dark:bg-[#252220] border-[#E7E2DB] dark:border-[#2C2825] text-stone-700 dark:text-stone-300 hover:border-stone-400 hover:bg-[#F2EFE9] dark:hover:bg-[#2C2825]'
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
                <label className="block text-xs uppercase tracking-wide font-semibold text-stone-500 dark:text-stone-400 mb-3">
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
                        className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 border-stone-900 dark:border-stone-100 shadow-sm scale-102'
                            : 'bg-white dark:bg-[#252220] border-[#E7E2DB] dark:border-[#2C2825] text-stone-600 dark:text-stone-300 hover:border-stone-400 hover:bg-[#F2EFE9] dark:hover:bg-[#2C2825]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-bold ${isSelected ? 'text-white dark:text-stone-950' : 'text-stone-800 dark:text-stone-200'}`}>
                            {tier.name}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#52B788]" />}
                        </div>
                        <p className={`text-[11px] leading-snug ${isSelected ? 'text-stone-300 dark:text-stone-700 font-medium' : 'text-stone-500 dark:text-stone-400'}`}>
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
                  <label className="text-xs uppercase tracking-wide font-semibold text-stone-500 dark:text-stone-400">
                    {t.estimator.step3}
                  </label>
                  <span className="text-xs font-bold text-stone-900 dark:text-stone-100 bg-white dark:bg-[#252220] border border-[#E7E2DB] dark:border-[#2C2825] px-2.5 py-0.5 rounded-lg shadow-xs">
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
                  className="w-full accent-[#C2613A] dark:accent-[#E07A5F] cursor-pointer h-2 bg-[#E7E2DB] dark:bg-[#2C2825] rounded-lg transition-all"
                />
                <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400 mt-2 font-medium">
                  <span>{t.estimator.rangeMin}</span>
                  <span>{t.estimator.rangeMid}</span>
                  <span>{t.estimator.rangeMax}</span>
                </div>
              </div>
            </div>

            {/* Output Blueprint Card: 5 cols */}
            <div className="lg:col-span-5 bg-white dark:bg-[#141210] rounded-2xl p-6 sm:p-7 border border-[#E7E2DB] dark:border-[#2C2825] flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E7E2DB] dark:border-[#2C2825]">
                  <span className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 font-semibold">
                    {t.estimator.calculatedWindow}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#FAF8F5] dark:bg-[#1C1A18] text-stone-700 dark:text-stone-200 border border-[#E7E2DB] dark:border-[#2C2825]">
                    {selectedTrack.id.toUpperCase()}
                  </span>
                </div>

                <div
                  key={`${selectedTrack.id}-${scopeTier}-${calculatedEstimate.minWeeks}-${calculatedEstimate.maxWeeks}`}
                  className="mt-6 space-y-6 animate-tab-enter"
                >
                  <div>
                    <span className="text-xs text-stone-500 dark:text-stone-400 block mb-1">
                      {t.estimator.estimatedTimeline}
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
                      {calculatedEstimate.minWeeks} – {calculatedEstimate.maxWeeks}{' '}
                      <span className="text-sm font-normal text-stone-500 dark:text-stone-400">{t.estimator.weeksUnit}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-stone-700 dark:text-stone-200 uppercase tracking-wide block mb-2.5">
                      {t.estimator.recommendedSprint}
                    </span>
                    <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                      {phases.map((phase, idx) => (
                        <li key={idx} className="flex items-start gap-2 hover:text-stone-950 dark:hover:text-white transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2A6F62] dark:bg-[#52B788] mt-1.5 shrink-0" />
                          <span className="leading-snug">{phase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions with Button Sheen and Sliding Arrow */}
              <div className="pt-6 mt-6 border-t border-[#E7E2DB] dark:border-[#2C2825] space-y-2.5">
                <a
                  href="#contact"
                  onClick={handleApply}
                  className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-stone-50 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm relative overflow-hidden group hover:scale-102"
                >
                  <span className="relative z-10">{t.estimator.applyCta}</span>
                  <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 dark:via-stone-900/15 to-transparent -translate-x-full group-hover:animate-btn-shimmer pointer-events-none" />
                </a>

                <a
                  href={`https://wa.me/2348160498340?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-[#2A6F62] dark:text-[#52B788] hover:text-[#1F544A] dark:hover:text-[#74C69D] bg-[#2A6F62]/10 hover:bg-[#2A6F62]/15 dark:bg-[#2A6F62]/20 dark:hover:bg-[#2A6F62]/30 border border-[#2A6F62]/30 transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#2A6F62] dark:text-[#52B788] transition-transform duration-200 group-hover:scale-110" />
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
