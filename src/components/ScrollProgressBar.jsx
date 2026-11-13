import React from 'react';
import useScrollPhysics from '../hooks/useScrollPhysics';

export default function ScrollProgressBar() {
  const { scrollProgress } = useScrollPhysics();

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[120] pointer-events-none bg-transparent">
      {/* Dynamic Luminous Gradient Bar */}
      <div
        className="h-full bg-gradient-to-r from-[#C2613A] via-[#D97706] to-[#52B788] transition-all duration-75 ease-out shadow-[0_0_12px_rgba(194,97,58,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

