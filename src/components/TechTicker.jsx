import React from 'react';

const TECH_ITEMS = [
  'Full-Stack Web Engineering (End-to-End)',
  'Modular Front-End & Back-End Tracks',
  'Next.js 15 • React 19 • TypeScript',
  'Node.js • Python • PostgreSQL • Redis',
  'Unity Mobile Engine (iOS & Android)',
  'Native Metal & Vulkan Shaders',
  'Cloudflare Edge & Workers',
  'Docker & Microservices Architecture',
  '24/7 SLA Site Monitoring',
  'Viral AI Advert Videos & Commercials',
  'Linux Server Administration & Hardening',
  'Admin & Technical Support Desk'
];

export default function TechTicker() {
  return (
    <div className="w-full py-4 border-y border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-sm overflow-hidden relative z-20">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFC] dark:from-[#070B14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8FAFC] dark:from-[#070B14] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-12 items-center">
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 text-xs font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
            <span className="hover:text-slate-950 dark:hover:text-white transition-colors cursor-default tracking-normal">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
