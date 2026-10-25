export const PROJECTS = [
  {
    id: 'neon-sting',
    title: 'Neon Sting: Arena',
    subtitle: 'Fast-Paced Mobile Arena Combat',
    category: 'games',
    categoryLabel: 'Mobile Games',
    description: 'Competitive mobile arcade combat game optimized for touch screens on iOS and Android with intuitive virtual controls, zero input lag, and snappy 120Hz responsiveness.',
    summary: 'Tactical mobile arena combat optimized for handheld gameplay with precise virtual thumbsticks and battery-saving shaders.',
    stack: 'Unity Mobile • C# • iOS & Android • Blender',
    accentColor: '#FFB800',
    icon: '📱',
    metrics: 'iOS & Android • 120Hz Touch Refresh'
  },
  {
    id: 'aetherion',
    title: 'Aetherion: Tactical Chronicles',
    subtitle: 'Tactical Mobile Sci-Fi RPG',
    category: 'games',
    categoryLabel: 'Mobile Games',
    description: 'Engineered specifically for iOS and Android featuring optimized touch combat, dynamic volumetric shaders, and fast-paced procedural mission generation.',
    summary: 'Sci-fi mobile roleplay mechanics with touch-optimized controls and battery-conscious rendering pipeline.',
    stack: 'Unity Mobile • C# • Touch Gestures • Metal/Vulkan',
    accentColor: '#FFB800',
    icon: '🎮',
    metrics: '60 FPS Mobile Target • Low Thermal Footprint'
  },
  {
    id: 'nexusflow',
    title: 'NexusFlow Engine',
    subtitle: 'Real-time Event Streaming Platform',
    category: 'software',
    categoryLabel: 'Software',
    description: 'Distributed cloud architecture capable of ingesting 1.2M events per second with sub-10ms processing latency and instant analytics dashboards.',
    summary: 'High-concurrency infrastructure handling sub-millisecond pipeline sync across global node clusters.',
    stack: 'Golang • Rust • Apache Kafka • Kubernetes',
    accentColor: '#00F0FF',
    icon: '⚡',
    metrics: '1.2M req/sec • Sub-10ms P99 Latency'
  },
  {
    id: 'apex-sentinel',
    title: 'Apex Sentinel SLA Fleet',
    subtitle: '24/7 Web Maintenance & Security Suite',
    category: 'maintenance',
    categoryLabel: 'Maintenance & SLA',
    description: 'Automated 24/7 infrastructure care guarding 50+ enterprise client websites. Zero-downtime security patching, automated hourly backups, DDoS scrubbing, and sub-15min SLA incident response.',
    summary: 'Full-spectrum preventive maintenance protecting web uptime and mission-critical business continuity.',
    stack: 'Cloudflare Enterprise • Linux • Automated CI/CD • Datadog',
    accentColor: '#00F0FF',
    icon: '🛠️',
    metrics: '99.99% Average Uptime • 12m Incident Resolution'
  },
  {
    id: 'omnidesk-ops',
    title: 'OmniDesk Back-Office Portal',
    subtitle: 'Custom Operations & Multi-Role CMS',
    category: 'software',
    categoryLabel: 'Admin & Operations',
    description: 'Centralized administrative engine featuring granular RBAC permissions, audit logging, catalog syncing, and high-velocity workflow automation for distributed support teams.',
    summary: 'Custom administrative suite streamlining daily content, customer, and database operations.',
    stack: 'Next.js • PostgreSQL • Prisma • Tailored RBAC',
    accentColor: '#FFB800',
    icon: '📋',
    metrics: '10x Faster Admin Updates • Zero Data Conflicts'
  },
  {
    id: 'obsidian-mirage',
    title: 'Obsidian Mirage',
    subtitle: '4K Teaser Trailer & 3D VFX',
    category: 'cinematics',
    categoryLabel: 'Cinematics',
    description: 'A 90-second studio teaser combining real-time camera tracking, customized pyroclastic VFX, and orchestral audio mixing for an upcoming franchise.',
    summary: 'Award-nominated cinematic teaser featuring photorealistic volumetric atmosphere and dynamic physics destruction.',
    stack: 'Houdini • Maya • Unreal Virtual Cam • DaVinci',
    accentColor: '#FFB800',
    icon: '🎬',
    metrics: 'Dolby Atmos • Photoreal Volumetric Simulation'
  },
  {
    id: 'synapse-core',
    title: 'Synapse Core API',
    subtitle: 'Cloud Multiplayer & Telemetry Gateway',
    category: 'software',
    categoryLabel: 'Software',
    description: 'Custom matchmaking algorithms with low-latency georouting, automated cheat detection heuristics, and live load distribution.',
    summary: 'Scalable backend microservices handling live player state synchronization and global lobby matchmaking.',
    stack: 'Node.js • WebSockets • Redis • AWS ECS',
    accentColor: '#00F0FF',
    icon: '🛡️',
    metrics: 'Zero Downtime • Global Edge Mesh'
  },
  {
    id: 'cloud-cluster-devops',
    title: 'CloudMesh Server Infrastructure',
    subtitle: 'Automated Multi-Region Linux Server Mesh',
    category: 'devops',
    categoryLabel: 'DevOps & Servers',
    description: 'High-availability Linux server administration featuring automated zero-downtime GitHub Actions CI/CD, Docker container orchestration, Nginx reverse proxies with SSL auto-renewal, and 24/7 server health telemetry.',
    summary: 'Automated multi-node Linux server architecture with zero-downtime CI/CD deployment workflows and continuous server telemetry.',
    stack: 'Docker • Linux Ubuntu • Nginx • GitHub Actions • AWS',
    accentColor: '#0284C7',
    icon: '🖥️',
    metrics: '99.99% Uptime • Zero-Downtime Deploys'
  },
  {
    id: 'cyber-scorpion',
    title: 'Cybernetic Scorpion Rebrand',
    subtitle: 'High-Impact 3D Motion Identity',
    category: 'cinematics',
    categoryLabel: 'Cinematics',
    description: 'A futuristic 3D logo reveal and motion graphics package designed for interactive web intros and trade show keynotes.',
    summary: 'High-contrast, dual-spectrum kinetic logo sequence designed for multi-channel video rollouts.',
    stack: 'Blender • After Effects • WebGL Shaders',
    accentColor: '#FFB800',
    icon: '🦂',
    metrics: 'Kinetic 3D Typography • 8K Master Render'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'games', label: 'Mobile Games' },
  { id: 'software', label: 'Software' },
  { id: 'devops', label: 'DevOps & Servers' },
  { id: 'maintenance', label: 'Maintenance & SLA' },
  { id: 'cinematics', label: 'Cinematics & VFX' }
];
