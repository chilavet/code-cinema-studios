import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to trigger scroll animations using IntersectionObserver.
 * When the element enters the viewport, `isRevealed` becomes true,
 * and any child elements with `.reveal-init`, `.reveal-left`, `.reveal-right`, `.reveal-scale` automatically get `.revealed`.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      const items = el.querySelectorAll('.reveal-init, .reveal-left, .reveal-right, .reveal-scale');
      items.forEach((item) => item.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          const items = el.querySelectorAll('.reveal-init, .reveal-left, .reveal-right, .reveal-scale');
          items.forEach((item) => item.classList.add('revealed'));
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px'
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options.threshold, options.rootMargin]);

  return [containerRef, isRevealed];
}

export default useScrollReveal;
