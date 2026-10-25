import React from 'react';

const TECH_ITEMS = [
  'Unity Mobile Engine (iOS & Android)',
  'Native Metal & Vulkan Shaders',
  'Next.js 15 & React 19',
  'Cloudflare Edge & Workers',
  'Docker & Microservices',
  '24/7 SLA Site Monitoring',
  'PostgreSQL & Redis Cache',
  'Linux Server Administration & Hardening',
  'Houdini & Maya 3D VFX',
  'Admin & Technical Support Desk',
  'Automated DevOps & CI/CD'
];

export default function TechTicker() {
  return (
    <div className="w-full py-4 border-y border-slate-200/80 bg-slate-50/80 backdrop-blur-sm overflow-hidden relative z-20">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-12 items-center">
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 text-xs font-mono font-medium text-slate-600 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span className="hover:text-slate-950 transition-colors cursor-default tracking-wide">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
