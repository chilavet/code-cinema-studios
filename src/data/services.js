export const SERVICES = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    badge: 'Turnkey & Modular',
    badgeColor: 'text-[#C2613A] bg-[#C2613A]/10 border-[#C2613A]/20',
    description: 'End-to-end fullstack web applications engineered for speed, reliability, and scale. We build complete turnkey platforms from database to user interface, or handle front-end and back-end separately based on your team’s exact preferences.',
    accent: 'amber',
    icon: 'layers',
    highlights: [
      'Complete end-to-end architecture (Database, API & UI)',
      'Option to engage as full-stack or modular frontend/backend',
      'Modern tech stack: Next.js 15, React 19, TypeScript & Tailwind',
      'Automated CI/CD pipelines & production deployment'
    ],
    tags: ['Full-Stack Web', 'Frontend & Backend', 'React 19 & Next.js', 'PostgreSQL & APIs'],
    glowClass: 'bg-[#C2613A]/10 group-hover:bg-[#C2613A]/20',
    iconBg: 'bg-[#1C1A18] border-[#2C2825] text-[#C2613A]',
    tagStyle: 'bg-[#F2EFE9] text-stone-700 border-[#E7E2DB]'
  },
  {
    id: 'frontend',
    title: 'Front-End Web Development',
    badge: 'UI/UX Specialist',
    badgeColor: 'text-[#2A6F62] bg-[#2A6F62]/10 border-[#2A6F62]/20',
    description: 'Pixel-perfect, reactive user interfaces engineered to integrate seamlessly into your existing backend, REST/GraphQL APIs, or headless CMS. Fluid micro-interactions, responsive layouts, and zero-layout-shift performance.',
    accent: 'cyan',
    icon: 'layout',
    highlights: [
      'React 19, Next.js, Vue & Tailwind CSS architecture',
      'Fluid state management, API hydration & caching',
      'Responsive design across mobile, tablet & desktop',
      'Optimized for maximum Core Web Vitals & accessibility'
    ],
    tags: ['React 19', 'Next.js UI', 'Tailwind CSS', 'Responsive UI/UX', 'Framer Motion'],
    glowClass: 'bg-[#2A6F62]/10 group-hover:bg-[#2A6F62]/20',
    iconBg: 'bg-[#1C1A18] border-[#2C2825] text-[#2A6F62]',
    tagStyle: 'bg-[#F2EFE9] text-stone-700 border-[#E7E2DB]'
  },
  {
    id: 'backend',
    title: 'Back-End & API Engineering',
    badge: 'Database & Cloud',
    badgeColor: 'text-[#57534E] bg-[#57534E]/10 border-[#57534E]/20',
    description: 'Resilient server-side architectures, high-throughput microservices, robust relational/NoSQL schemas, and secure API gateways designed to power web, mobile, and enterprise platforms under heavy load.',
    accent: 'cyan',
    icon: 'database',
    highlights: [
      'High-concurrency REST, GraphQL & gRPC APIs',
      'PostgreSQL, MySQL, Redis & MongoDB schema design',
      'JWT/OAuth2 auth, RBAC permissions & data encryption',
      'Sub-millisecond caching & message queues'
    ],
    tags: ['Node.js & Python', 'PostgreSQL & Redis', 'REST & GraphQL', 'Auth & Security'],
    glowClass: 'bg-[#57534E]/10 group-hover:bg-[#57534E]/20',
    iconBg: 'bg-[#1C1A18] border-[#2C2825] text-[#57534E]',
    tagStyle: 'bg-[#F2EFE9] text-stone-700 border-[#E7E2DB]'
  },
  {
    id: 'mobile-games',
    title: 'Mobile Game Development',
    badge: 'Specialized Track',
    badgeColor: 'text-[#D97706] bg-[#D97706]/10 border-[#D97706]/20',
    description: 'High-performance mobile game engineering for iOS and Android powered by Unity. Dynamic touch physics, battery-conscious shaders, monetization systems, and engaging handheld mechanics.',
    accent: 'amber',
    icon: 'gamepad',
    highlights: [
      'Native iOS & Android compilation targets',
      'Fluid 60 & 120 FPS touch performance',
      'Live-ops, IAP & advertising mediation'
    ],
    tags: ['iOS & Android', 'Unity Mobile', 'Touch Controls & Haptics', 'Performance Profiling'],
    glowClass: 'bg-[#D97706]/10 group-hover:bg-[#D97706]/20',
    iconBg: 'bg-[#1C1A18] border-[#2C2825] text-[#D97706]',
    tagStyle: 'bg-[#F2EFE9] text-stone-700 border-[#E7E2DB]'
  },
  {
    id: 'devops',
    title: 'DevOps & Server Management',
    badge: 'Cloud & Infrastructure',
    badgeColor: 'text-[#2A6F62] bg-[#2A6F62]/10 border-[#2A6F62]/20',
    description: 'Full-spectrum Linux server administration and cloud DevOps. Automated CI/CD deployment pipelines, Docker container orchestration, Nginx reverse proxies, SSL security, firewall hardening, and 24/7 server health metrics.',
    accent: 'cyan',
    icon: 'server',
    highlights: [
      'Linux server provisioning, hardening & firewalls',
      'Automated CI/CD pipelines & zero-downtime deploys',
      'Docker container orchestration & Nginx load balancing'
    ],
    tags: ['Linux Server Admin', 'Docker & CI/CD', 'Nginx & SSL', 'AWS & DigitalOcean', 'Automated Backups'],
    glowClass: 'bg-[#2A6F62]/10 group-hover:bg-[#2A6F62]/20',
    iconBg: 'bg-[#1C1A18] border-[#2C2825] text-[#2A6F62]',
    tagStyle: 'bg-[#F2EFE9] text-stone-700 border-[#E7E2DB]'
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance & Care',
    badge: '24/7 SLA Support',
    badgeColor: 'text-[#9A4321] bg-[#9A4321]/10 border-[#9A4321]/20',
    description: 'Comprehensive preventive care for web applications and client portals. Round-the-clock uptime monitoring, zero-day security patching, daily automated backups, speed tuning, and rapid incident response.',
    accent: 'amber',
    icon: 'wrench',
    highlights: [
      '24/7 health checks & instant outage alerts',
      'Daily automated encrypted cloud backups',
      'Core, CMS, plugin & security patch management'
    ],
    tags: ['Uptime Monitoring', 'Security Patches', 'Speed Optimization', 'Disaster Recovery'],
    glowClass: 'bg-[#9A4321]/10 group-hover:bg-[#9A4321]/20',
    iconBg: 'bg-[#1C1A18] border-[#2C2825] text-[#9A4321]',
    tagStyle: 'bg-[#F2EFE9] text-stone-700 border-[#E7E2DB]'
  },
  {
    id: 'admin',
    title: 'Admin & Operations Desk',
    badge: 'Dedicated Back-Office',
    badgeColor: 'text-[#D97706] bg-[#D97706]/10 border-[#D97706]/20',
    description: 'Reliable back-office technical operations management. Ongoing content updates, CMS moderation, database integrity management, user role permissions, inventory syncing, and daily technical assistance.',
    accent: 'amber',
    icon: 'clipboard',
    highlights: [
      'Routine content & catalog data curation',
      'User access control & database administration',
      'Dedicated SLA helpdesk response channel'
    ],
    tags: ['CMS & Content Desk', 'Database Administration', 'User Role Management', 'Ongoing Operations'],
    glowClass: 'bg-[#D97706]/10 group-hover:bg-[#D97706]/20',
    iconBg: 'bg-[#1C1A18] border-[#2C2825] text-[#D97706]',
    tagStyle: 'bg-[#F2EFE9] text-stone-700 border-[#E7E2DB]'
  },
  {
    id: 'cinematics',
    title: 'AI Advert Videos & Cinematic Production',
    badge: 'High-Converting & Viral',
    badgeColor: 'text-[#C2613A] bg-[#C2613A]/10 border-[#C2613A]/20',
    description: 'Ultra-engaging AI-generated advert videos, product commercials, and photorealistic 3D visual effects engineered to capture attention and convert audiences. Hook-driven storytelling, viral video pacing, and studio-grade sound design.',
    accent: 'amber',
    icon: 'clapperboard',
    highlights: [
      'Viral hook scripting & AI video generation',
      'Photorealistic 3D CGI & Unreal virtual cameras',
      'High-conversion formatting for TikTok, Reels & Web'
    ],
    tags: ['AI Advert Videos', 'Viral Commercials', 'Product Promos', '3D Photoreal CGI', 'Sound Design'],
    glowClass: 'bg-[#C2613A]/10 group-hover:bg-[#C2613A]/20',
    iconBg: 'bg-[#1C1A18] border-[#2C2825] text-[#C2613A]',
    tagStyle: 'bg-[#F2EFE9] text-stone-700 border-[#E7E2DB]'
  },
  {
    id: 'consulting',
    title: 'Technology Consulting',
    badge: 'Strategic Advisory',
    badgeColor: 'text-[#2A6F62] bg-[#2A6F62]/10 border-[#2A6F62]/20',
    description: 'High-level advisory for digital transformations, architecture security reviews, automated production pipeline setup, and technical roadmapping for ventures requiring high-precision execution.',
    accent: 'cyan',
    icon: 'shield',
    highlights: [
      'Full architecture security & performance audit',
      'Automated production workflow design',
      'Scalable technology roadmapping'
    ],
    tags: ['Architecture Audit', 'Pipeline Optimization', 'Tech Stack Strategy', 'Performance Triage'],
    glowClass: 'bg-[#2A6F62]/10 group-hover:bg-[#2A6F62]/20',
    iconBg: 'bg-[#1C1A18] border-[#2C2825] text-[#2A6F62]',
    tagStyle: 'bg-[#F2EFE9] text-stone-700 border-[#E7E2DB]'
  }
];
