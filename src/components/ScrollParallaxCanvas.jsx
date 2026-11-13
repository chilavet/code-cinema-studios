import React, { memo } from 'react';

/**
 * High-performance, zero-CPU background canvas.
 * Renders the studio drafting blueprint matrix, margin guidelines,
 * slow-rotating architectural concentric rings, and soft ambient light pools.
 * Completely decoupled from React re-renders for buttery 120 FPS scrolling.
 */
function ScrollParallaxCanvas() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
      style={{ contain: 'strict' }}
    >
      {/* 1. Architectural Blueprint & Drafting Grid Pattern */}
      <div className="absolute inset-0 bg-drafting-matrix mask-vignette opacity-70 dark:opacity-50" />

      {/* 2. Margin Registration Guide Rails & Cinematic Viewfinder Markers */}
      {/* Left Hairline Guide */}
      <div className="hidden lg:block absolute left-8 xl:left-14 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-sky-500/20 dark:via-sky-400/20 to-transparent" />
      {/* Right Hairline Guide */}
      <div className="hidden lg:block absolute right-8 xl:right-14 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/20 dark:via-emerald-400/20 to-transparent" />

      {/* Studio Margin Precision Badges & Crosshairs */}
      <div className="hidden xl:flex flex-col items-center gap-1 absolute top-36 left-4 font-mono text-[9px] tracking-widest text-slate-400/50 dark:text-slate-500/50 select-none rotate-90 origin-left">
        <span>CODES // ARCH-01</span>
      </div>

      <div className="hidden xl:flex flex-col items-center gap-1 absolute bottom-48 right-4 font-mono text-[9px] tracking-widest text-slate-400/50 dark:text-slate-500/50 select-none -rotate-90 origin-right">
        <span>CINEMA // FRAME-96</span>
      </div>

      {/* Corner Studio Crosshairs */}
      <div className="hidden lg:block absolute top-28 left-6 xl:left-12 text-sky-500/40 dark:text-sky-400/40 font-mono text-xs select-none">
        +
      </div>
      <div className="hidden lg:block absolute top-28 right-6 xl:right-12 text-emerald-500/40 dark:text-emerald-400/40 font-mono text-xs select-none">
        +
      </div>
      <div className="hidden lg:block absolute bottom-28 left-6 xl:left-12 text-amber-500/40 dark:text-amber-400/40 font-mono text-xs select-none">
        +
      </div>
      <div className="hidden lg:block absolute bottom-28 right-6 xl:right-12 text-teal-500/40 dark:text-teal-400/40 font-mono text-xs select-none">
        +
      </div>

      {/* 3. Floating Concentric Architectural Drafting Rings (Pure CSS Compositor Animation) */}
      <div className="absolute top-[18%] -right-24 sm:right-[4%] w-[520px] h-[520px] md:w-[620px] md:h-[620px] pointer-events-none">
        {/* Outer slow-spinning dashed drafting circle */}
        <div className="absolute inset-0 rounded-full border border-dashed border-sky-500/25 dark:border-sky-400/20 animate-spin-ultra-slow" />
        {/* Inner reverse-spinning dotted circle */}
        <div className="absolute inset-16 sm:inset-20 rounded-full border border-dotted border-emerald-500/25 dark:border-emerald-400/20 animate-reverse-spin-slow" />
        {/* Subtle center ring core */}
        <div className="absolute inset-36 sm:inset-44 rounded-full border border-indigo-500/15 dark:border-indigo-400/15" />
      </div>

      {/* 4. Ambient Atmospheric Light Pools (Static GPU-Optimized Layers) */}
      {/* Upper-Left Cyan & Electric Blue Warmth Bloom */}
      <div className="absolute -top-32 -left-32 w-[560px] h-[560px] md:w-[680px] md:h-[680px] rounded-full bg-gradient-to-br from-sky-500/15 via-indigo-500/8 to-transparent blur-[70px] md:blur-[90px]" />

      {/* Mid-Right Emerald & Mint Bloom */}
      <div className="absolute top-[36%] -right-36 w-[620px] h-[620px] md:w-[740px] md:h-[740px] rounded-full bg-gradient-to-bl from-emerald-500/15 via-teal-500/8 to-transparent blur-[75px] md:blur-[95px]" />

      {/* Lower-Left Amber & Gold Bloom */}
      <div className="absolute top-[72%] -left-28 w-[580px] h-[580px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr from-amber-500/12 via-sky-500/8 to-transparent blur-[70px] md:blur-[90px]" />

      {/* Subtle Central Accent Pool for Depth */}
      <div className="absolute top-[52%] left-[45%] -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-gradient-to-b from-slate-200/25 to-transparent dark:from-slate-800/15 dark:to-transparent blur-[80px]" />
    </div>
  );
}

export default memo(ScrollParallaxCanvas);
