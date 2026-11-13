import React from 'react';
import useScrollPhysics from '../hooks/useScrollPhysics';

export default function ScrollParallaxCanvas() {
  const { scrollY } = useScrollPhysics();

  // Gentle, high-performance parallax translations
  const yOffset1 = scrollY * 0.12;
  const yOffset2 = -scrollY * 0.08;
  const yOffset3 = scrollY * 0.15;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Upper-Left Terracotta Light Pool */}
      <div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#C2613A]/10 via-[#D97706]/6 to-transparent blur-[110px] will-change-transform"
        style={{
          transform: `translate3d(0, ${yOffset1}px, 0)`
        }}
      />

      {/* Mid-Right Sage Green Light Pool */}
      <div
        className="absolute top-[38%] -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#2A6F62]/10 via-[#52B788]/6 to-transparent blur-[120px] will-change-transform"
        style={{
          transform: `translate3d(0, ${yOffset2}px, 0)`
        }}
      />

      {/* Lower-Center Honey Amber Glow Pool */}
      <div
        className="absolute top-[75%] left-[15%] w-[540px] h-[540px] rounded-full bg-gradient-to-tr from-[#D97706]/9 via-[#C2613A]/5 to-transparent blur-[115px] will-change-transform"
        style={{
          transform: `translate3d(0, ${yOffset3}px, 0)`
        }}
      />
    </div>
  );
}

