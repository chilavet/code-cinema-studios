import { useState, useEffect } from 'react';

/**
 * Hook that listens to window scroll and provides:
 * - scrollY: current window.scrollY
 * - scrollProgress: 0 to 100% of the document height
 * - scrollDirection: 'down' | 'up'
 * - scrollVelocity: estimated pixels/tick speed (useful for tilt/skew effects)
 */
export function useScrollPhysics() {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    scrollProgress: 0,
    scrollDirection: 'down',
    scrollVelocity: 0
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const maxScroll = Math.max(
            1,
            document.documentElement.scrollHeight - window.innerHeight
          );
          const progress = Math.min(100, Math.max(0, (currentY / maxScroll) * 100));
          const direction = currentY > lastScrollY ? 'down' : 'up';
          const velocity = Math.abs(currentY - lastScrollY);

          setScrollState({
            scrollY: currentY,
            scrollProgress: progress,
            scrollDirection: direction,
            scrollVelocity: velocity
          });

          lastScrollY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
}

export default useScrollPhysics;

