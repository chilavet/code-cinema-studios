import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to trigger fluid scroll animations on entry AND exit.
 * As the user scrolls up or down, elements dynamically animate in when entering
 * and smoothly transition when exiting and re-entering, keeping the site continuously alive.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(() => typeof window !== 'undefined' && typeof window.IntersectionObserver === 'undefined');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      const items = el.querySelectorAll('.reveal-init, .reveal-left, .reveal-right, .reveal-scale');
      items.forEach((item) => item.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const items = el.querySelectorAll('.reveal-init, .reveal-left, .reveal-right, .reveal-scale');
          if (entry.isIntersecting) {
            setIsRevealed(true);
            items.forEach((item) => item.classList.add('revealed'));
          } else if (options.reversible ?? true) {
            // Re-animate when scrolling past and returning from above or below
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight * 0.8 || rect.bottom < window.innerHeight * 0.2) {
              setIsRevealed(false);
              items.forEach((item) => item.classList.remove('revealed'));
            }
          }
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -30px 0px'
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options.threshold, options.rootMargin, options.reversible]);

  return [containerRef, isRevealed];
}

export default useScrollReveal;
