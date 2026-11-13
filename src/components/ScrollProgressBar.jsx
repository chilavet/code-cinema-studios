import React, { useEffect, useRef } from 'react';

/**
 * High-performance scroll progress bar.
 * Uses GPU-accelerated direct DOM transform (scaleX) with passive requestAnimationFrame
 * to completely eliminate React re-renders and browser layout reflows on scroll.
 */
export default function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let ticking = false;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const ratio = Math.min(1, Math.max(0, scrollY / maxScroll));
      bar.style.transform = `scaleX(${ratio})`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[120] pointer-events-none bg-transparent">
      {/* Dynamic Luminous Gradient Bar - GPU hardware-accelerated transform */}
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 shadow-[0_0_12px_rgba(2,132,199,0.6)] origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
