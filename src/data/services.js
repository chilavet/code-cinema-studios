export const SERVICES = [
  {
    id: 'mobile-games',
    title: 'Mobile Game Development',
    badge: 'Specialized Track',
    badgeColor: 'text-[#D97706] bg-amber-500/10 border-amber-500/30',
    description: 'High-performance mobile game engineering for iOS and Android powered by Unity. Dynamic touch physics, battery-conscious shaders, monetization systems, and engaging handheld mechanics.',
    accent: 'amber',
    icon: 'gamepad',
    highlights: [
      'Native iOS & Android compilation targets',
      'Fluid 60 & 120 FPS touch performance',
      'Live-ops, IAP & advertising mediation'
    ],
    tags: ['iOS & Android', 'Unity Mobile', 'Touch Controls & Haptics', 'Performance Profiling'],
    glowClass: 'bg-[#FFB800]/15 group-hover:bg-[#FFB800]/25',
    iconBg: 'bg-amber-950/60 border-amber-500/40 text-[#FFB800] shadow-neon-amber',
    tagStyle: 'bg-slate-100 text-slate-700 border-slate-200'
  },
  {
    id: 'software',
    title: 'Custom Software Engineering',
    badge: 'Enterprise Core',
    badgeColor: 'text-[#0284C7] bg-cyan-500/10 border-cyan-500/30',
    description: 'Mission-critical distributed systems, high-concurrency microservices, customized API integrations, and scalable cloud applications architected for 99.98% uptime.',
    accent: 'cyan',
    icon: 'code',
    highlights: [
      'Distributed cloud & microservice architecture',
      'Real-time WebSockets & GraphQL data sync',
      'Scalable database design & caching layers'
    ],
    tags: ['Distributed Cloud', 'Full-Stack Web/App', 'Real-time APIs', 'Microservices'],
    glowClass: 'bg-[#00F0FF]/15 group-hover:bg-[#00F0FF]/25',
    iconBg: 'bg-cyan-950/60 border-cyan-500/40 text-[#00F0FF] shadow-neon-cyan',
    tagStyle: 'bg-slate-100 text-slate-700 border-slate-200'
  },
  {
    id: 'devops',
    title: 'DevOps & Server Management',
    badge: 'Cloud & Infrastructure',
    badgeColor: 'text-[#0284C7] bg-sky-500/10 border-sky-500/30',
    description: 'Full-spectrum Linux server administration and cloud DevOps. Automated CI/CD deployment pipelines, Docker container orchestration, Nginx reverse proxies, SSL security, firewall hardening, and 24/7 server health metrics.',
    accent: 'cyan',
    icon: 'server',
    highlights: [
      'Linux server provisioning, hardening & firewalls',
      'Automated CI/CD pipelines & zero-downtime deploys',
      'Docker container orchestration & Nginx load balancing'
    ],
    tags: ['Linux Server Admin', 'Docker & CI/CD', 'Nginx & SSL', 'AWS & DigitalOcean', 'Automated Backups'],
    glowClass: 'bg-[#00F0FF]/15 group-hover:bg-[#00F0FF]/25',
    iconBg: 'bg-sky-950/60 border-sky-500/40 text-[#00F0FF]',
    tagStyle: 'bg-slate-100 text-slate-700 border-slate-200'
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance & Care',
    badge: '24/7 SLA Support',
    badgeColor: 'text-[#0284C7] bg-cyan-500/10 border-cyan-500/30',
    description: 'Comprehensive preventive care for web applications and client portals. Round-the-clock uptime monitoring, zero-day security patching, daily automated backups, speed tuning, and rapid incident response.',
    accent: 'cyan',
    icon: 'wrench',
    highlights: [
      '24/7 health checks & instant outage alerts',
      'Daily automated encrypted cloud backups',
      'Core, CMS, plugin & security patch management'
    ],
    tags: ['Uptime Monitoring', 'Security Patches', 'Speed Optimization', 'Disaster Recovery'],
    glowClass: 'bg-[#00F0FF]/15 group-hover:bg-[#00F0FF]/25',
    iconBg: 'bg-cyan-950/60 border-cyan-500/40 text-[#00F0FF] shadow-neon-cyan',
    tagStyle: 'bg-slate-100 text-slate-700 border-slate-200'
  },
  {
    id: 'admin',
    title: 'Admin & Operations Desk',
    badge: 'Dedicated Back-Office',
    badgeColor: 'text-[#D97706] bg-amber-500/10 border-amber-500/30',
    description: 'Reliable back-office technical operations management. Ongoing content updates, CMS moderation, database integrity management, user role permissions, inventory syncing, and daily technical assistance.',
    accent: 'amber',
    icon: 'clipboard',
    highlights: [
      'Routine content & catalog data curation',
      'User access control & database administration',
      'Dedicated SLA helpdesk response channel'
    ],
    tags: ['CMS & Content Desk', 'Database Administration', 'User Role Management', 'Ongoing Operations'],
    glowClass: 'bg-[#FFB800]/15 group-hover:bg-[#FFB800]/25',
    iconBg: 'bg-amber-950/60 border-amber-500/40 text-[#FFB800] shadow-neon-amber',
    tagStyle: 'bg-slate-100 text-slate-700 border-slate-200'
  },
  {
    id: 'cinematics',
    title: 'Cinematic Production & 3D VFX',
    badge: 'Studio Grade',
    badgeColor: 'text-[#D97706] bg-amber-500/10 border-amber-500/30',
    description: 'Photorealistic 3D visual effects, game teaser trailers, motion branding, and narrative CGI engineered with studio-grade lighting, camera choreography, and high-impact sound design.',
    accent: 'amber',
    icon: 'clapperboard',
    highlights: [
      'Houdini & Maya photorealistic volumetric FX',
      'Unreal virtual camera & real-time rendering',
      'Dolby Atmos spatial sound mixing'
    ],
    tags: ['3D Photoreal CGI', 'Virtual Production', 'Teaser Trailers', 'Color Grading'],
    glowClass: 'bg-[#FFB800]/15 group-hover:bg-[#FFB800]/25',
    iconBg: 'bg-amber-950/60 border-amber-500/40 text-[#FFB800] shadow-neon-amber',
    tagStyle: 'bg-slate-100 text-slate-700 border-slate-200'
  },
  {
    id: 'consulting',
    title: 'Technology Consulting',
    badge: 'Strategic Advisory',
    badgeColor: 'text-[#0284C7] bg-cyan-500/10 border-cyan-500/30',
    description: 'High-level advisory for digital transformations, architecture security reviews, automated production pipeline setup, and technical roadmapping for ventures requiring high-precision execution.',
    accent: 'cyan',
    icon: 'shield',
    highlights: [
      'Full architecture security & performance audit',
      'Automated production workflow design',
      'Scalable technology roadmapping'
    ],
    tags: ['Architecture Audit', 'Pipeline Optimization', 'Tech Stack Strategy', 'Performance Triage'],
    glowClass: 'bg-[#00F0FF]/15 group-hover:bg-[#00F0FF]/25',
    iconBg: 'bg-cyan-950/60 border-cyan-500/40 text-[#00F0FF] shadow-neon-cyan',
    tagStyle: 'bg-slate-100 text-slate-700 border-slate-200'
  }
];
