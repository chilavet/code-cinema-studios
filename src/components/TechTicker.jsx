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
    <div className="w-full py-4 border-y border-[#E7E2DB] dark:border-[#2C2825] bg-[#FAF8F5]/80 dark:bg-[#181614]/80 backdrop-blur-sm overflow-hidden relative z-20">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FBF9F5] dark:from-[#141210] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FBF9F5] dark:from-[#141210] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-12 items-center">
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 text-xs font-medium text-stone-600 dark:text-stone-400 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2613A]/60 dark:bg-[#E07A5F]/60" />
            <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-default tracking-normal">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
