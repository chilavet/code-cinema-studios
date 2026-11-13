import React from 'react';
import useScrollPhysics from '../hooks/useScrollPhysics';

export default function ScrollParallaxCanvas() {
  const { scrollY } = useScrollPhysics();

  // Gentle, high-performance parallax translations
  const yOffset1 = scrollY * 0.14;
  const yOffset2 = -scrollY * 0.10;
  const yOffset3 = scrollY * 0.18;
  const ringOffset = -scrollY * 0.06;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* 1. Architectural Blueprint & Drafting Grid Pattern */}
      <div className="absolute inset-0 bg-drafting-matrix mask-vignette opacity-75 dark:opacity-55 will-change-transform" />

      {/* 2. Tactile Organic Paper / Film Grain Texture Filter */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.032] dark:opacity-[0.048] pointer-events-none mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="studio-grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#studio-grain-filter)" />
      </svg>

      {/* 3. Margin Registration Guide Rails & Cinematic Viewfinder Markers */}
      {/* Left Hairline Guide */}
      <div className="hidden lg:block absolute left-8 xl:left-14 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C2613A]/20 dark:via-[#E07A5F]/20 to-transparent" />
      {/* Right Hairline Guide */}
      <div className="hidden lg:block absolute right-8 xl:right-14 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#2A6F62]/20 dark:via-[#52B788]/20 to-transparent" />

      {/* Studio Margin Precision Badges & Crosshairs */}
      <div className="hidden xl:flex flex-col items-center gap-1 absolute top-36 left-4 font-mono text-[9px] tracking-widest text-stone-400/50 dark:text-stone-500/50 select-none rotate-90 origin-left">
        <span>CODES // ARCH-01</span>
      </div>

      <div className="hidden xl:flex flex-col items-center gap-1 absolute bottom-48 right-4 font-mono text-[9px] tracking-widest text-stone-400/50 dark:text-stone-500/50 select-none -rotate-90 origin-right">
        <span>CINEMA // FRAME-96</span>
      </div>

      {/* Corner Studio Crosshairs */}
      <div className="hidden lg:block absolute top-28 left-6 xl:left-12 text-[#C2613A]/40 dark:text-[#E07A5F]/40 font-mono text-xs select-none">
        +
      </div>
      <div className="hidden lg:block absolute top-28 right-6 xl:right-12 text-[#2A6F62]/40 dark:text-[#52B788]/40 font-mono text-xs select-none">
        +
      </div>
      <div className="hidden lg:block absolute bottom-28 left-6 xl:left-12 text-[#D97706]/40 dark:text-[#D97706]/40 font-mono text-xs select-none">
        +
      </div>
      <div className="hidden lg:block absolute bottom-28 right-6 xl:right-12 text-[#52B788]/40 dark:text-[#52B788]/40 font-mono text-xs select-none">
        +
      </div>

      {/* 4. Floating Concentric Architectural Drafting Rings */}
      <div
        className="absolute top-[18%] -right-24 sm:right-[4%] w-[520px] h-[520px] md:w-[620px] md:h-[620px] pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${ringOffset}px, 0)`
        }}
      >
        {/* Outer slow-spinning dashed drafting circle */}
        <div className="absolute inset-0 rounded-full border border-dashed border-[#C2613A]/25 dark:border-[#E07A5F]/20 animate-spin-ultra-slow" />
        {/* Inner reverse-spinning dotted circle */}
        <div className="absolute inset-16 sm:inset-20 rounded-full border border-dotted border-[#2A6F62]/25 dark:border-[#52B788]/20 animate-reverse-spin-slow" />
        {/* Subtle center ring core */}
        <div className="absolute inset-36 sm:inset-44 rounded-full border border-[#D97706]/15 dark:border-[#D97706]/15" />
      </div>

      {/* 5. Rich Living Parallax Light Pools */}
      {/* Upper-Left Terracotta Warmth Bloom */}
      <div
        className="absolute -top-32 -left-32 w-[560px] h-[560px] md:w-[680px] md:h-[680px] rounded-full bg-gradient-to-br from-[#C2613A]/22 via-[#D97706]/14 to-transparent blur-[90px] md:blur-[110px] will-change-transform"
        style={{
          transform: `translate3d(0, ${yOffset1}px, 0)`
        }}
      />

      {/* Mid-Right Forest Sage & Mint Bloom */}
      <div
        className="absolute top-[36%] -right-36 w-[620px] h-[620px] md:w-[740px] md:h-[740px] rounded-full bg-gradient-to-bl from-[#2A6F62]/22 via-[#52B788]/14 to-transparent blur-[95px] md:blur-[120px] will-change-transform"
        style={{
          transform: `translate3d(0, ${yOffset2}px, 0)`
        }}
      />

      {/* Lower-Left Honey Amber & Ochre Bloom */}
      <div
        className="absolute top-[72%] -left-28 w-[580px] h-[580px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr from-[#D97706]/20 via-[#C2613A]/12 to-transparent blur-[90px] md:blur-[115px] will-change-transform"
        style={{
          transform: `translate3d(0, ${yOffset3}px, 0)`
        }}
      />

      {/* Subtle Central Warm Accent Pool for Depth */}
      <div
        className="absolute top-[52%] left-[45%] -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-gradient-to-b from-[#FAF8F5]/30 to-[#E7E2DB]/20 dark:from-[#2C2825]/20 dark:to-transparent blur-[100px] will-change-transform"
        style={{
          transform: `translate3d(0, ${yOffset1 * 0.7}px, 0)`
        }}
      />
    </div>
  );
}
