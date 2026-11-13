import React from 'react';
import useScrollPhysics from '../hooks/useScrollPhysics';

export default function ScrollProgressBar() {
  const { scrollProgress } = useScrollPhysics();

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[120] pointer-events-none bg-transparent">
      {/* Dynamic Luminous Gradient Bar */}
      <div
        className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(2,132,199,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

