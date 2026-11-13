export const COUNTRIES = [
  { code: 'us', lang: 'en', dir: 'ltr', flag: '🇺🇸', label: 'EN', country: 'United States', nativeName: 'English' },
  { code: 'uk', lang: 'en-GB', dir: 'ltr', flag: '🇬🇧', label: 'UK', country: 'United Kingdom', nativeName: 'English (UK)' },
  { code: 'fr', lang: 'fr', dir: 'ltr', flag: '🇫🇷', label: 'FR', country: 'France', nativeName: 'Français' },
  { code: 'es', lang: 'es', dir: 'ltr', flag: '🇪🇸', label: 'ES', country: 'España', nativeName: 'Español' },
  { code: 'de', lang: 'de', dir: 'ltr', flag: '🇩🇪', label: 'DE', country: 'Deutschland', nativeName: 'Deutsch' },
  { code: 'br', lang: 'pt', dir: 'ltr', flag: '🇧🇷', label: 'PT', country: 'Brasil', nativeName: 'Português' },
  { code: 'jp', lang: 'ja', dir: 'ltr', flag: '🇯🇵', label: 'JP', country: '日本', nativeName: '日本語' },
  { code: 'sa', lang: 'ar', dir: 'rtl', flag: '🇸🇦', label: 'AR', country: 'السعودية', nativeName: 'العربية' },
  { code: 'cn', lang: 'zh', dir: 'ltr', flag: '🇨🇳', label: 'ZH', country: '中国', nativeName: '中文' }
];

export const TRANSLATIONS = {
  us: {
    metaTitle: 'Codes Cinema | Full-Stack Web • Front-End & Back-End • Mobile Games • DevOps',
    nav: {
      capabilities: 'Capabilities',
      webDev: 'Web Dev',
      scoping: 'Scoping',
      scopingMobile: 'Scoping Tool',
      studio: 'Studio',
      studioMobile: 'Studio Philosophy',
      testimonies: 'Testimonies',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      inquire: 'Inquire',
      startProject: 'Start A Project',
      selectCountry: 'Select country & language'
    },
    hero: {
      statusPill: 'Available for Select Q4 / Q1 Commissions',
      headlineTop: 'Digital precision.',
      headlineAccent: 'Cinematic depth.',
      subtitle:
        'Codes Cinema builds turnkey full-stack web applications, bespoke cloud software, high-performance mobile games, and 24/7 technical operations. Available as a full-stack partner or as a dedicated front-end / back-end specialist.',
      hookTitle: 'Full-Stack Web & Modular Architecture',
      hookBody:
        'Whether you need an end-to-end platform from database to UI, or a specialist to craft a pixel-perfect front-end or high-throughput back-end separately, we deliver production-grade code on guaranteed milestones.',
      exploreCta: 'Explore Capabilities',
      estimatorCta: 'Scope Estimator',
      kpiUptime: 'SLA Uptime',
      kpiTriage: 'Direct Triage',
      kpiModular: 'Or FE / BE Modular',
      cardTitle: 'Engineering Disciplines',
      cardCore: 'Production Overview',
      coreHeadlines: {
        fullstack: {
          top: 'Turnkey Full-Stack Platforms.',
          accent: 'From Database Schema to Reactive UI.'
        },
        frontend: {
          top: 'Pixel-Perfect Reactive UI.',
          accent: 'Fluid Motion & Zero Layout Shift.'
        },
        backend: {
          top: 'Resilient Cloud APIs & Schemas.',
          accent: 'High Concurrency & 99.98% Uptime SLA.'
        },
        mobile: {
          top: 'Mobile Game Development.',
          accent: 'Unity Engine & 120 FPS Locked Touch.'
        },
        devops: {
          top: 'Cloud & Server Infrastructure.',
          accent: 'Automated CI/CD & Linux Hardening.'
        },
        care: {
          top: 'Website Maintenance & Care.',
          accent: 'Proactive Shield & < 15 Min SLA.'
        }
      },
      cardStatus: 'Production',
      learnMore: 'Learn about this track',
      requestCall: 'Request Discovery Call',
      tabs: {
        fullstack: 'Fullstack',
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        devops: 'DevOps',
        care: 'Care'
      },
      previews: {
        fullstack: {
          tag: 'FULL-STACK WEB DEVELOPMENT',
          title: 'Turnkey Web Apps & Reactive Platforms',
          desc: 'Complete end-to-end web engineering. Next.js 15, React 19, TypeScript, PostgreSQL, and Docker containerization from schema to live deployment.',
          metrics: [
            { label: 'Architecture', value: 'Turnkey Full-Stack' },
            { label: 'Performance', value: '100% Core Vitals' },
            { label: 'Scalability', value: 'Cloud Native' }
          ]
        },
        frontend: {
          tag: 'FRONT-END WEB ENGINEERING',
          title: 'Pixel-Perfect Reactive UI & State Architecture',
          desc: 'Dedicated front-end engineering for teams with existing APIs. React 19, Next.js, fluid micro-interactions, responsive mobile-first UI, and sub-second rendering.',
          metrics: [
            { label: 'Framework', value: 'React 19 / Next.js' },
            { label: 'Layout Shift', value: 'Zero CLS' },
            { label: 'Mobile Score', value: '99+ Lighthouse' }
          ]
        },
        backend: {
          tag: 'BACK-END & API ENGINEERING',
          title: 'Resilient Schemas, Microservices & Cloud Endpoints',
          desc: 'High-concurrency REST, GraphQL & gRPC APIs, normalized PostgreSQL/Redis schemas, OAuth2 authentication, and message queues architected for 99.98% uptime.',
          metrics: [
            { label: 'Throughput', value: 'Sub-millisecond' },
            { label: 'Uptime SLA', value: '99.98%' },
            { label: 'Database', value: 'PostgreSQL & Redis' }
          ]
        },
        mobile: {
          tag: 'MOBILE GAME DEVELOPMENT',
          title: 'Unity Engine & Native Mobile Architecture',
          desc: 'Native iOS & Android compilation targets, fluid 60/120 FPS touch response, battery-optimized render pipelines, and live-ops mediation.',
          metrics: [
            { label: 'Framerate Target', value: '120 FPS Locked' },
            { label: 'Platforms', value: 'iOS & Android' },
            { label: 'Profiling', value: 'Zero Memory Leaks' }
          ]
        },
        devops: {
          tag: 'DEVOPS & SERVER MANAGEMENT',
          title: 'Cloud Infrastructure, Linux & CI/CD Pipelines',
          desc: 'Linux server administration, firewall hardening, automated zero-downtime CI/CD pipelines, Docker containerization, and 24/7 server health telemetry.',
          metrics: [
            { label: 'Infrastructure', value: 'Bare-Metal & Cloud' },
            { label: 'Automation', value: 'CI/CD Pipelines' },
            { label: 'Uptime SLA', value: '99.99% Uptime' }
          ]
        },
        care: {
          tag: 'WEBSITE MAINTENANCE & CARE',
          title: '24/7 Proactive Uptime & Security Shield',
          desc: 'Round-the-clock health checks, instant outage alerts, zero-day security patching, daily encrypted cloud backups, and speed tuning.',
          metrics: [
            { label: 'Monitoring', value: '24/7 Continuous' },
            { label: 'Backups', value: 'Daily Encrypted' },
            { label: 'Incident Response', value: '< 15 Min SLA' }
          ]
        }
      }
    },
    webModes: {
      badge: 'Modular Web Engineering',
      heading: 'Full-Stack Web Development, Built Your Way.',
      subtitle:
        'Codes Cinema provides complete turnkey full-stack web applications, with the flexibility to contract dedicated front-end or back-end engineering separately depending on your project needs.',
      availableLabel: 'Available for Commission',
      deliverablesLabel: 'Production Deliverables',
      idealForLabel: 'IDEAL FOR',
      techStackLabel: 'CORE TECH STACK',
      inquireBtn: 'Inquire This Track',
      estimateBtn: 'Estimate Timeline',
      modes: {
        fullstack: {
          badge: 'Turnkey Delivery',
          tabLabel: 'Full-Stack Web',
          title: 'Turnkey Full-Stack Web Applications',
          tagline: 'Complete architecture from database schema to responsive reactive UI',
          desc:
            'End-to-end engineering of modern web platforms. We take your concept from raw requirements into production, architecting clean database models, robust APIs, and a pixel-perfect, reactive user interface.',
          deliverables: [
            'End-to-end architecture (Client UI + API + Cloud Database)',
            'Authentication (JWT / OAuth2 / Sessions) & Role-Based Access Control',
            'Real-time data synchronization & state hydration',
            'Stripe / LemonSqueezy / PayPal payment integration',
            'Automated CI/CD deployment pipelines & zero-downtime hosting'
          ],
          bestFor:
            'Startups, new product launches, MVPs, and businesses needing a complete, production-ready web application built from scratch.'
        },
        frontend: {
          badge: 'Modular UI/UX',
          tabLabel: 'Front-End Only',
          title: 'Dedicated Front-End Web Engineering',
          tagline: 'Pixel-perfect, high-performance UI tailored to your existing backend',
          desc:
            'Specialized front-end engineering for teams with existing APIs or backend systems. We transform designs into blisteringly fast, responsive, accessible web interfaces with fluid animations.',
          deliverables: [
            'Modern React 19 / Next.js / Vue component hierarchy',
            'Fluid micro-interactions, responsive mobile-first layouts',
            'Robust state management (Zustand / TanStack Query) & cache hydration',
            'API contract integration with your existing REST/GraphQL backend',
            'Core Web Vitals tuning: zero layout shift (CLS) & sub-second LCP'
          ],
          bestFor:
            'Teams with backend engineers in place who need an expert front-end specialist to deliver an arresting, high-converting client application.'
        },
        backend: {
          badge: 'Modular API & DB',
          tabLabel: 'Back-End Only',
          title: 'Back-End & API System Engineering',
          tagline: 'Resilient schemas, microservices, and high-concurrency cloud endpoints',
          desc:
            'Rock-solid backend engineering for web and mobile clients. We architect normalized relational schemas, resilient caching layers, secure authentication, and scalable microservices designed for 99.98% uptime.',
          deliverables: [
            'High-concurrency REST, GraphQL & gRPC API design with OpenAPI docs',
            'PostgreSQL / MySQL / Redis database architecture & migration strategies',
            'Enterprise auth: OAuth2, JWT, multi-tenant RBAC & webhook endpoints',
            'Asynchronous queue processing (BullMQ / Celery) & background workers',
            'Docker containerization, Nginx reverse proxies & cloud scaling'
          ],
          bestFor:
            'Projects scaling user traffic, modernizing legacy infrastructure, or building specialized server-side capabilities for front-end teams.'
        }
      }
    },
    services: {
      badge: 'Studio Capabilities',
      heading: 'Engineered for performance and endurance.',
      subtitle:
        'From turnkey full-stack web applications, modular front-end or back-end engineering, and high-framerate mobile games to round-the-clock website care and technical operations desks.',
      inquireTrack: 'Inquire Track',
      filters: {
        all: 'All Tracks',
        web: 'Web Dev',
        mobile: 'Mobile Games',
        ops: 'DevOps & SLA',
        creative: 'Cinematics & Tech'
      },
      items: {
        fullstack: {
          title: 'Full-Stack Web Development',
          description:
            'End-to-end full-stack web applications engineered for speed, reliability, and scale. We build complete turnkey platforms from database to user interface, or handle front-end and back-end separately based on your team’s preferences.',
          highlights: [
            'Complete end-to-end architecture (Database, API & UI)',
            'Option to engage full-stack or modular front-end / back-end separately',
            'Modern stack: Next.js 15, React 19, TypeScript & PostgreSQL',
            'Automated CI/CD pipelines & zero-downtime hosting'
          ],
          tags: ['Full-Stack Web', 'Frontend & Backend', 'React 19 & Next.js', 'PostgreSQL & APIs']
        },
        frontend: {
          title: 'Front-End Web Development',
          description:
            'Pixel-perfect, reactive user interfaces built to integrate seamlessly into your existing backend, REST/GraphQL APIs, or headless CMS. Fluid animations, responsive layouts, and sub-second Core Web Vitals.',
          highlights: [
            'React 19, Next.js, Vue & Tailwind CSS architecture',
            'Fluid state management, API hydration & caching',
            'Responsive design across mobile, tablet & desktop',
            'Optimized for Core Web Vitals & accessibility'
          ],
          tags: ['React 19', 'Next.js UI', 'Tailwind CSS', 'Responsive UI/UX', 'Framer Motion']
        },
        backend: {
          title: 'Back-End & API Engineering',
          description:
            'Resilient server-side architectures, high-throughput microservices, normalized relational/NoSQL schemas, and secure API gateways engineered for 99.98% uptime under load.',
          highlights: [
            'High-concurrency REST, GraphQL & gRPC APIs',
            'PostgreSQL, MySQL, Redis & MongoDB schema design',
            'JWT/OAuth2 auth, RBAC permissions & data encryption',
            'Sub-millisecond caching & asynchronous worker queues'
          ],
          tags: ['Node.js & Python', 'PostgreSQL & Redis', 'REST & GraphQL', 'Auth & Security']
        },
        'mobile-games': {
          title: 'Mobile Game Development',
          description:
            'High-performance mobile game engineering for iOS and Android powered by Unity. Dynamic touch physics, battery-conscious shaders, monetization systems, and engaging handheld mechanics.',
          highlights: [
            'Native iOS & Android compilation targets',
            'Fluid 60 & 120 FPS touch performance',
            'Live-ops, IAP & advertising mediation'
          ],
          tags: ['iOS & Android', 'Unity Mobile', 'Touch Controls & Haptics', 'Performance Profiling']
        },
        software: {
          title: 'Custom Software Engineering',
          description:
            'Mission-critical distributed systems, high-concurrency microservices, customized API integrations, and scalable cloud applications architected for 99.98% uptime.',
          highlights: [
            'Distributed cloud & microservice architecture',
            'Real-time WebSockets & GraphQL data sync',
            'Scalable database design & caching layers'
          ],
          tags: ['Distributed Cloud', 'Full-Stack Web/App', 'Real-time APIs', 'Microservices']
        },
        devops: {
          title: 'DevOps & Server Management',
          description:
            'Full-spectrum Linux server administration and cloud DevOps. Automated CI/CD deployment pipelines, Docker container orchestration, Nginx reverse proxies, SSL security, firewall hardening, and 24/7 server health metrics.',
          highlights: [
            'Linux server provisioning, hardening & firewalls',
            'Automated CI/CD pipelines & zero-downtime deploys',
            'Docker container orchestration & Nginx load balancing'
          ],
          tags: ['Linux Server Admin', 'Docker & CI/CD', 'Nginx & SSL', 'AWS & DigitalOcean', 'Automated Backups']
        },
        maintenance: {
          title: 'Website Maintenance & Care',
          description:
            'Comprehensive preventive care for web applications and client portals. Round-the-clock uptime monitoring, zero-day security patching, daily automated backups, speed tuning, and rapid incident response.',
          highlights: [
            '24/7 health checks & instant outage alerts',
            'Daily automated encrypted cloud backups',
            'Core, CMS, plugin & security patch management'
          ],
          tags: ['Uptime Monitoring', 'Security Patches', 'Speed Optimization', 'Disaster Recovery']
        },
        admin: {
          title: 'Admin & Operations Desk',
          description:
            'Reliable back-office technical operations management. Ongoing content updates, CMS moderation, database integrity management, user role permissions, inventory syncing, and daily technical assistance.',
          highlights: [
            'Routine content & catalog data curation',
            'User access control & database administration',
            'Dedicated SLA helpdesk response channel'
          ],
          tags: ['CMS & Content Desk', 'Database Administration', 'User Role Management', 'Ongoing Operations']
        },
        cinematics: {
          title: 'AI Advert Videos & Cinematic Production',
          description:
            'Ultra-engaging AI-generated advert videos, product commercials, and photorealistic 3D visual effects engineered to capture attention and convert audiences. Hook-driven storytelling, viral video pacing, and studio-grade sound design.',
          highlights: [
            'Viral hook scripting & AI video generation',
            'Photorealistic 3D CGI & Unreal virtual cameras',
            'High-conversion formatting for TikTok, Reels & Web'
          ],
          tags: ['AI Advert Videos', 'Viral Commercials', 'Product Promos', '3D Photoreal CGI', 'Sound Design']
        },
        consulting: {
          title: 'Technology Consulting',
          description:
            'High-level advisory for digital transformations, architecture security reviews, automated production pipeline setup, and technical roadmapping for ventures requiring high-precision execution.',
          highlights: [
            'Full architecture security & performance audit',
            'Automated production workflow design',
            'Scalable technology roadmapping'
          ],
          tags: ['Architecture Audit', 'Pipeline Optimization', 'Tech Stack Strategy', 'Performance Triage']
        }
      }
    },
    estimator: {
      badge: 'Interactive Roadmap Tool',
      heading: 'Estimate your timeline & scope.',
      subtitle:
        'Select your development discipline and operational tier to calculate a calibrated delivery window and phase structure.',
      step1: '1. Select Discipline Track',
      step2: '2. Complexity Tier',
      step3: '3. Target Delivery Window',
      baseWeeksPrefix: 'Base:',
      weeksUnit: 'Weeks',
      rangeMin: '4 Weeks (Focused)',
      rangeMid: '14 Weeks (Quarterly)',
      rangeMax: '24 Weeks (Deep)',
      calculatedWindow: 'Calculated Window',
      estimatedTimeline: 'Estimated Delivery Timeline',
      recommendedSprint: 'Recommended Sprint Architecture',
      applyCta: 'Apply Scope To Inquiry Form',
      whatsappCta: 'Send Scope to WhatsApp (+234 816 049 8340)',
      tracks: {
        Fullstack: 'Full-Stack Web',
        Frontend: 'Front-End (UI)',
        Backend: 'Back-End (API)',
        Games: 'Mobile Games',
        DevOps: 'DevOps & Servers',
        Maintenance: 'Website Maintenance',
        Cinematics: 'AI Adverts & Videos',
        Admin: 'Admin Services',
        Consulting: 'Tech Consulting'
      },
      tiers: {
        mvp: { name: 'Sprint MVP', desc: 'Proof of concept, rapid core mechanics & launch validation.' },
        production: { name: 'Full Production', desc: 'Studio-tier architecture, complete QA, profiling & scaling.' },
        enterprise: { name: 'Enterprise Scale', desc: 'Multi-platform ecosystem, 24/7 SLA & dedicated desk.' }
      },
      phases: {
        Fullstack: [
          'Phase 1: Database Schema, System Architecture & Wireframe Prototypes',
          'Phase 2: Full-Stack Integration, Core APIs & Reactive Client UI',
          'Phase 3: End-to-End QA, Load Testing, Automated CI/CD & Production Launch'
        ],
        Frontend: [
          'Phase 1: Design System Tokens, Component Architecture & Wireframe Mockups',
          'Phase 2: Pixel-Perfect UI Build, State Hydration & Responsive Layouts',
          'Phase 3: API Integration, Animations, Core Web Vitals Tuning & Cross-Browser QA'
        ],
        Backend: [
          'Phase 1: Data Model Design, Schema Migrations & API Contract Specifications',
          'Phase 2: High-Concurrency Endpoints, Authentication, Caching & Business Logic',
          'Phase 3: Security Hardening, Automated Test Suites, Stress Testing & Deployment'
        ],
        Games: [
          'Phase 1: Touch Control Physics & Graybox Mechanics',
          'Phase 2: Mobile Asset Optimization, Shaders & Level Architecture',
          'Phase 3: iOS/Android Profiling, Battery Draw & 60/120 FPS Tuning'
        ],
        DevOps: [
          'Phase 1: Server Architecture, Security Hardening & Firewall Setup',
          'Phase 2: Docker Containerization, Nginx Reverse Proxy & SSL Automation',
          'Phase 3: Automated Zero-Downtime CI/CD Pipelines & 24/7 Server Monitoring'
        ],
        Maintenance: [
          'Phase 1: Full Infrastructure, Security & Plugin Audit',
          'Phase 2: Automated Encrypted Backups & CDN Speed Tuning',
          'Phase 3: 24/7 Continuous Monitoring & SLA Triage Protocol'
        ],
        Admin: [
          'Phase 1: Role Delegation & Content Workflow Mapping',
          'Phase 2: Back-Office CMS, Database & Catalog Integration',
          'Phase 3: Dedicated SLA Operations Desk & Daily Routines'
        ],
        Cinematics: [
          'Phase 1: Viral Hook Concept, AI Storyboard & Video Prompt Architecture',
          'Phase 2: High-Resolution AI Video Generation, 3D CGI & Motion Graphics',
          'Phase 3: Color Grading, Dynamic Sound Mixing & Multi-Platform Mastering'
        ],
        Consulting: [
          'Phase 1: Architecture Blueprint & Security Review',
          'Phase 2: CI/CD Pipeline & Latency Optimization Plan',
          'Phase 3: Strategic Roadmapping & Scalability Hand-off'
        ],
        Software: [
          'Phase 1: Architecture Blueprint, Schema & API Contracts',
          'Phase 2: High-Concurrency Core API & Web Services',
          'Phase 3: Automated Testing, Penetration Audit & Staging'
        ]
      }
    },
    philosophy: {
      badge: 'Studio Philosophy',
      heading: 'Where engineering rigor meets cinematic depth.',
      p1: 'Founded on the conviction that digital experiences reach their highest potential when software architecture and cinematic storytelling collaborate as one unified discipline.',
      p2: 'Our software developers understand lighting, camera choreographies, and visual rhythm; our cinematographers and 3D artists understand draw calls, shader memory cost, and battery draw. The outcome is rapid development, arresting visuals, and bulletproof production stability.',
      pillars: [
        { title: 'Logic & Scalability', desc: 'Clean, modular, high-frequency codebases built for real-time scale and zero memory leaks.' },
        { title: 'Cinematic Depth', desc: 'Evocative lighting, virtual camera choreography, and spatial audio that forge lasting connection.' },
        { title: 'Continuous Care', desc: '24/7 uptime monitoring, security patch management, and automated daily encrypted backups.' },
        { title: 'Operations Desk', desc: 'Reliable back-office technical assistance, database curation, and routine content publishing.' }
      ],
      cardHeaderLeft: 'STUDIO CORE',
      cardHeaderRight: 'UTC+1 BASE',
      tagline: 'Precision In Every Frame',
      stat1: 'AUDITED',
      stat2: 'MOBILE',
      stat3: 'SLA'
    },
    testimonials: {
      badge: 'Client Testimonies',
      heading: 'Trusted by builders, brands, and studios.',
      subtitle:
        'Verified feedback from engineering leaders, founders, and creative directors shipping production software, mobile games, AI commercials, and managed infrastructure with Codes Cinema.',
      ratingSla: '100% Delivery SLA',
      bottomPrompt: 'Ready to ship your next software platform, mobile title, or AI advert campaign?',
      bottomCta: 'Start Your Project',
      items: {
        'kora-pay-cto': {
          role: 'VP of Engineering',
          service: 'Software & DevOps',
          metric: '99.99% Uptime • Zero Downtime Migration',
          quote:
            'Codes Cinema re-architected our payment ingestion pipeline and automated our multi-region Kubernetes deployments. Latency dropped under 12ms and our release cycle went from bi-weekly stress to one-click confidence.'
        },
        'luma-brand-growth': {
          role: 'Head of Growth',
          service: 'AI Advert Videos',
          metric: '3.8x ROAS • 48hr Turnaround',
          quote:
            'Their AI advert video production gave our product launch a Hollywood-grade commercial without the six-figure shoot. The opening visual hook doubled our click-through rate in the first week.'
        },
        'drift-studios-producer': {
          role: 'Executive Producer',
          service: 'Mobile Game Dev',
          metric: '120 FPS Target • iOS & Android',
          quote:
            'We brought Codes Cinema in to optimize touch combat responsiveness and custom shaders for our arena title. They locked 120Hz on flagship devices and kept mid-tier Android thermals completely cool.'
        },
        'harbor-health-ops': {
          role: 'Operations Director',
          service: 'Website Maintenance & SLA',
          metric: '< 10m Incident Response',
          quote:
            'Since moving our patient portals onto Codes Cinema’s 24/7 maintenance plan, we have not had a single minute of unscheduled downtime. Security patches, backups, and speed audits just happen automatically.'
        },
        'nordic-retail-ops': {
          role: 'Founder & CEO',
          service: 'Admin & Operations Desk',
          metric: '10x Faster Catalog Updates',
          quote:
            'Having their dedicated admin desk manage our multi-store catalog, RBAC permissions, and daily order workflows freed our core team to focus entirely on product and partnerships.'
        },
        'solaris-media-creative': {
          role: 'Creative Director',
          service: '3D Cinematics & VFX',
          metric: '4K Volumetric Pipeline',
          quote:
            'Few teams understand both shader math and cinematic pacing. Codes Cinema delivered a teaser trailer with volumetric atmosphere and camera choreography that blew our stakeholders away.'
        }
      }
    },
    contact: {
      badge: 'Direct Engagement',
      heading: "Let's discuss your project.",
      subtitle:
        'Submit your project brief below to initiate a technical consultation. Our engineering team reviews specifications and responds within 24 business hours.',
      whatsappTitle: 'Direct WhatsApp Technical Desk',
      whatsappDesc: 'Fast-track AI advert video bookings, mobile game production, DevOps setups, and technical queries.',
      whatsappBtn: 'Chat on WhatsApp',
      fullName: 'Full Name *',
      namePlaceholder: 'Alex Mercer',
      businessEmail: 'Business Email *',
      emailPlaceholder: 'alex@company.com',
      discipline: 'Primary Discipline *',
      briefLabel: 'Project Brief & Objectives *',
      briefPlaceholder: 'Describe your requirements, mobile platform targets, maintenance scope, or delivery milestones...',
      submitBtn: 'Transmit Consultation Brief',
      submittingBtn: 'Sending to contact@codescinema.com...',
      sendViaEmail: 'Send Directly via Email App',
      successTitle: 'Consultation Brief Transmitted',
      successBody1: 'Thank you,',
      successBody2: 'Your brief for',
      successBody3: 'has been dispatched directly to',
      successBody4: 'We will follow up at',
      successBody5: 'within 24 business hours.',
      submitAnother: 'Submit Another Brief',
      openEmailCopy: 'Open Copy in Email App',
      responseTitle: 'Response Guarantee',
      responseHeading: 'Within 24 Business Hours',
      responseDesc: 'Direct triage by senior engineers and studio directors.',
      ndaTitle: 'Strict Confidentiality',
      ndaHeading: 'Mutual NDA Upon Request',
      ndaDesc: 'All game IP, codebases, and systems remain 100% confidential.',
      deskTitle: 'Studio Desk',
      supportEmailLabel: 'SUPPORT EMAIL',
      whatsappDirectLabel: 'WHATSAPP DIRECT',
      globalClienteleLabel: 'GLOBAL CLIENTELE',
      globalClienteleValue: 'Remote Operations (UTC+1)',
      options: {
        fullstack: 'Full-Stack Web Development (Turnkey Platform)',
        frontend: 'Front-End Web Development (Dedicated UI/UX & React Only)',
        backend: 'Back-End & API Engineering (Database & Server Only)',
        ai: 'AI Advert Videos & Cinematic Commercials (Viral / High-Conversion)',
        mobile: 'Mobile Game Development (iOS & Android)',
        software: 'Custom Software Engineering',
        devops: 'DevOps & Server Management',
        maintenance: 'Website Maintenance & Care (24/7 SLA)',
        admin: 'Admin & Operations Desk',
        consulting: 'Technology Consulting & Architecture'
      }
    },
    footer: {
      description:
        'Boutique digital studio uniting engineering rigor with cinematic depth. Full-stack, front-end & back-end web development, mobile games, DevOps & server management, and 24/7 web operations.',
      coreEngineering: 'Core Engineering',
      operations: 'Operations',
      connect: 'Connect',
      whatsappChannel: 'WhatsApp Channel ↗',
      securityPatching: 'Security Patching',
      speedBackups: 'Speed Tuning & Backups',
      timelineEstimator: 'Timeline Estimator',
      clientTestimonies: 'Client Testimonies',
      rights: 'All rights reserved.',
      slaStatus: 'Systems Operational // 99.98% SLA',
      privacy: 'Privacy',
      terms: 'Terms',
      security: 'Security'
    }
  },

  fr: {
    metaTitle: 'Codes Cinema | Logiciels • Jeux Mobiles • Cinématiques • Maintenance',
    nav: {
      capabilities: 'Expertises',
      webDev: 'Développement Web',
      scoping: 'Estimation',
      scopingMobile: 'Outil d’estimation',
      studio: 'Studio',
      studioMobile: 'Philosophie du Studio',
      testimonies: 'Témoignages',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      inquire: 'Devis',
      startProject: 'Démarrer un projet',
      selectCountry: 'Choisir le pays et la langue'
    },
    hero: {
      statusPill: 'Disponible pour des mandats T4 / T1 sélectionnés',
      headlineTop: 'Précision numérique.',
      headlineAccent: 'Profondeur cinématique.',
      subtitle:
        'Codes Cinema conçoit des jeux mobiles haute performance, des logiciels cloud sur mesure, et assure DevOps, gestion de serveurs et opérations techniques 24/7.',
      hookTitle: 'Boostez l’engagement, la performance et la scalabilité',
      hookBody:
        'Nous réalisons des vidéos publicitaires IA à forte conversion, des jeux mobiles fluides, des applications cloud personnalisées et une infrastructure DevOps éprouvée.',
      exploreCta: 'Découvrir nos expertises',
      estimatorCta: 'Estimateur de projet',
      kpiUptime: 'Disponibilité SLA',
      kpiTriage: 'Réponse directe',
      cardTitle: 'Expertises du Studio',
      cardCore: 'Disciplines Techniques',
      cardStatus: 'Production',
      learnMore: 'En savoir plus',
      requestCall: 'Planifier un appel',
      tabs: { mobile: 'Mobile', software: 'Logiciel', devops: 'DevOps', care: 'Support', admin: 'Admin' },
      previews: {
        mobile: {
          tag: 'DÉVELOPPEMENT JEUX MOBILES',
          title: 'Moteur Unity & Architecture Mobile Native',
          desc: 'Cibles natives iOS & Android, réponse tactile fluide 60/120 FPS, shaders économes en batterie et intégration Live-Ops.',
          metrics: [
            { label: 'Fluidité cible', value: '120 FPS constants' },
            { label: 'Plateformes', value: 'iOS & Android' },
            { label: 'Profilage', value: 'Zéro fuite mémoire' }
          ]
        },
        software: {
          tag: 'INGÉNIERIE LOGICIELLE SUR MESURE',
          title: 'Microservices Cloud & API Évolutives',
          desc: 'Systèmes distribués, WebSockets temps réel, mise en cache PostgreSQL/Redis et pipelines CI/CD automatisés.',
          metrics: [
            { label: 'Disponibilité', value: '99,98 % SLA' },
            { label: 'Architecture', value: 'Microservices' },
            { label: 'Synchronisation', value: 'Sous la milliseconde' }
          ]
        },
        devops: {
          tag: 'DEVOPS & GESTION DE SERVEURS',
          title: 'Infrastructure Cloud, Linux & Pipelines CI/CD',
          desc: 'Administration Linux, pare-feu, déploiements CI/CD sans interruption, conteneurisation Docker et télémétrie serveur 24/7.',
          metrics: [
            { label: 'Infrastructure', value: 'Bare-Metal & Cloud' },
            { label: 'Automatisation', value: 'Pipelines CI/CD' },
            { label: 'SLA', value: '99,99 % Uptime' }
          ]
        },
        care: {
          tag: 'MAINTENANCE WEB & ASSISTANCE',
          title: 'Surveillance Proactive & Bouclier Sécurité 24/7',
          desc: 'Contrôles permanents, alertes instantanées, correctifs zero-day, sauvegardes cloud chiffrées quotidiennes et optimisation de vitesse.',
          metrics: [
            { label: 'Surveillance', value: 'Continue 24/7' },
            { label: 'Sauvegardes', value: 'Quotidiennes chiffrées' },
            { label: 'Intervention', value: 'SLA < 15 min' }
          ]
        },
        admin: {
          tag: 'BUREAU ADMIN & OPÉRATIONS',
          title: 'Support Technique Back-Office Dédié',
          desc: 'Publication de contenu, modération CMS, intégrité des bases de données, gestion des rôles et assistance technique continue.',
          metrics: [
            { label: 'Délai support', value: 'Sous 24 heures' },
            { label: 'Opérations', value: 'CMS & Bases de données' },
            { label: 'Contrôle d’accès', value: 'RBAC Audité' }
          ]
        }
      }
    },
    services: {
      badge: 'Expertises du Studio',
      heading: 'Conçu pour la performance et la durabilité.',
      subtitle:
        'De la production de jeux mobiles aux logiciels cloud distribués, en passant par la maintenance 24/7 et les opérations techniques, la précision guide chaque projet.',
      inquireTrack: 'Demander un devis',
      items: {
        'mobile-games': {
          title: 'Développement de Jeux Mobiles',
          description: 'Ingénierie de jeux mobiles haute performance sur iOS et Android avec Unity. Physique tactile, shaders optimisés et systèmes de monétisation.',
          highlights: ['Compilation native iOS & Android', 'Performance tactile fluide 60 & 120 FPS', 'Live-ops, achats intégrés & médiation publicitaire'],
          tags: ['iOS & Android', 'Unity Mobile', 'Contrôles tactiles', 'Profilage']
        },
        software: {
          title: 'Ingénierie Logicielle Sur Mesure',
          description: 'Systèmes distribués critiques, microservices haute concurrence, intégrations API sur mesure et applications cloud évolutives.',
          highlights: ['Architecture cloud & microservices', 'WebSockets temps réel & GraphQL', 'Bases de données & caches haute performance'],
          tags: ['Cloud Distribué', 'Web & App Full-Stack', 'APIs Temps Réel', 'Microservices']
        },
        devops: {
          title: 'DevOps & Gestion de Serveurs',
          description: 'Administration Linux complète et DevOps cloud : pipelines CI/CD automatisés, Docker, reverse proxy Nginx, SSL et supervision 24/7.',
          highlights: ['Provisionnement Linux & durcissement pare-feu', 'Pipelines CI/CD sans interruption', 'Orchestration Docker & équilibrage Nginx'],
          tags: ['Admin Linux', 'Docker & CI/CD', 'Nginx & SSL', 'AWS & DigitalOcean', 'Sauvegardes']
        },
        maintenance: {
          title: 'Maintenance Web & Support 24/7',
          description: 'Maintenance préventive pour applications web et portails : surveillance permanente, correctifs de sécurité, sauvegardes quotidiennes et rapidité.',
          highlights: ['Contrôles 24/7 & alertes instantanées', 'Sauvegardes cloud chiffrées quotidiennes', 'Mises à jour cœur, CMS & sécurité'],
          tags: ['Monitoring Uptime', 'Correctifs Sécurité', 'Optimisation Vitesse', 'Reprise après sinistre']
        },
        admin: {
          title: 'Bureau Admin & Opérations',
          description: 'Gestion fiable des opérations techniques back-office : mises à jour de contenu, modération CMS, gestion de bases de données et droits d’accès.',
          highlights: ['Mise à jour catalogue & contenus', 'Contrôle d’accès & administration BDD', 'Canal d’assistance SLA dédié'],
          tags: ['Gestion CMS', 'Administration BDD', 'Gestion des rôles', 'Opérations continues']
        },
        cinematics: {
          title: 'Vidéos Publicitaires IA & Cinématiques',
          description: 'Publicités vidéo IA ultra-engageantes, spots produits et effets visuels 3D photoréalistes conçus pour capter l’attention et convertir.',
          highlights: ['Scripts d’accroche viraux & génération vidéo IA', 'CGI 3D photoréaliste & caméras virtuelles', 'Formats optimisés TikTok, Reels & Web'],
          tags: ['Pubs Vidéo IA', 'Spots Viraux', 'Promos Produits', 'CGI 3D', 'Design Sonore']
        },
        consulting: {
          title: 'Conseil Technologique',
          description: 'Accompagnement stratégique : audits de sécurité d’architecture, automatisation des pipelines de production et feuilles de route techniques.',
          highlights: ['Audit complet d’architecture & sécurité', 'Automatisation des flux de production', 'Feuille de route technologique évolutive'],
          tags: ['Audit Architecture', 'Optimisation Pipeline', 'Stratégie Stack', 'Diagnostic']
        }
      }
    },
    estimator: {
      badge: 'Outil de Feuille de Route',
      heading: 'Estimez vos délais et votre périmètre.',
      subtitle: 'Sélectionnez votre discipline et votre niveau de complexité pour calculer une fenêtre de livraison calibrée.',
      step1: '1. Choisir la discipline',
      step2: '2. Niveau de complexité',
      step3: '3. Fenêtre de livraison cible',
      baseWeeksPrefix: 'Base :',
      weeksUnit: 'Semaines',
      rangeMin: '7 semaines (Sprint)',
      rangeMid: '14 semaines (Trimestriel)',
      rangeMax: '24 semaines (Complet)',
      calculatedWindow: 'Fenêtre calculée',
      estimatedTimeline: 'Délai de livraison estimé',
      recommendedSprint: 'Architecture de sprint recommandée',
      applyCta: 'Appliquer au formulaire de contact',
      whatsappCta: 'Envoyer sur WhatsApp (+234 816 049 8340)',
      tracks: {
        Fullstack: 'Web Full-Stack',
        Frontend: 'Front-End (UI)',
        Backend: 'Back-End (API)',
        Games: 'Jeux Mobiles',
        Software: 'Ingénierie Logicielle',
        DevOps: 'DevOps & Serveurs',
        Maintenance: 'Maintenance Web',
        Admin: 'Services Admin',
        Cinematics: 'Pubs IA & Vidéos',
        Consulting: 'Conseil Tech'
      },
      tiers: {
        mvp: { name: 'Sprint MVP', desc: 'Preuve de concept, mécaniques clés rapides et validation.' },
        production: { name: 'Production Complète', desc: 'Architecture studio, QA complète, profilage et mise à l’échelle.' },
        enterprise: { name: 'Échelle Entreprise', desc: 'Écosystème multi-plateforme, SLA 24/7 et équipe dédiée.' }
      },
      phases: {
        Games: ['Phase 1 : Physique tactile & mécaniques de base', 'Phase 2 : Optimisation assets, shaders & niveaux', 'Phase 3 : Profilage iOS/Android & optimisation 60/120 FPS'],
        DevOps: ['Phase 1 : Architecture serveur, durcissement & pare-feu', 'Phase 2 : Conteneurisation Docker, Nginx & SSL', 'Phase 3 : Pipelines CI/CD sans coupure & monitoring 24/7'],
        Maintenance: ['Phase 1 : Audit complet infrastructure & sécurité', 'Phase 2 : Sauvegardes chiffrées & accélération CDN', 'Phase 3 : Surveillance continue 24/7 & protocole SLA'],
        Admin: ['Phase 1 : Délégation des rôles & cartographie des flux', 'Phase 2 : Intégration CMS, BDD & catalogues', 'Phase 3 : Bureau opérationnel SLA dédié'],
        Cinematics: ['Phase 1 : Concept viral, storyboard IA & prompts', 'Phase 2 : Génération vidéo IA HD, CGI 3D & motion design', 'Phase 3 : Étalonnage, mixage audio & mastering multi-format'],
        Consulting: ['Phase 1 : Schéma d’architecture & revue sécurité', 'Phase 2 : Plan d’optimisation CI/CD & latence', 'Phase 3 : Feuille de route stratégique'],
        Software: ['Phase 1 : Blueprint d’architecture, schémas & contrats API', 'Phase 2 : API principale haute concurrence & services web', 'Phase 3 : Tests automatisés, audit de sécurité & staging']
      }
    },
    philosophy: {
      badge: 'Philosophie du Studio',
      heading: 'Là où la rigueur technique rencontre la profondeur cinématique.',
      p1: 'Fondé sur la conviction que les expériences numériques atteignent leur plein potentiel lorsque l’architecture logicielle et la narration cinématique collaborent comme une seule discipline.',
      p2: 'Nos développeurs maîtrisent la lumière, le cadrage et le rythme visuel ; nos artistes 3D comprennent les draw calls, les shaders et l’autonomie batterie.',
      pillars: [
        { title: 'Logique & Scalabilité', desc: 'Bases de code modulaires conçues pour le temps réel sans fuite mémoire.' },
        { title: 'Profondeur Cinématique', desc: 'Éclairage évocateur, caméras virtuelles et audio spatial immersif.' },
        { title: 'Maintenance Continue', desc: 'Surveillance 24/7, correctifs de sécurité et sauvegardes quotidiennes chiffrées.' },
        { title: 'Bureau des Opérations', desc: 'Assistance technique fiable, gestion de bases de données et publication de contenus.' }
      ],
      cardHeaderLeft: 'CŒUR DU STUDIO',
      cardHeaderRight: 'BASE UTC+1',
      tagline: 'Précision dans chaque image',
      stat1: 'AUDITÉ',
      stat2: 'MOBILE',
      stat3: 'SLA'
    },
    testimonials: {
      badge: 'Témoignages Clients',
      heading: 'La confiance des créateurs, marques et studios.',
      subtitle: 'Retours vérifiés de dirigeants techniques, fondateurs et directeurs créatifs travaillant avec Codes Cinema.',
      ratingSla: '100 % SLA Respecté',
      bottomPrompt: 'Prêt à lancer votre prochaine plateforme logicielle, jeu mobile ou campagne vidéo IA ?',
      bottomCta: 'Démarrer votre projet',
      items: {
        'kora-pay-cto': { role: 'VP Ingénierie', service: 'Logiciel & DevOps', metric: '99,99 % Uptime • Migration sans coupure', quote: 'Codes Cinema a réarchitecturé notre pipeline de paiement et automatisé nos déploiements Kubernetes multi-régions. La latence est passée sous 12 ms.' },
        'luma-brand-growth': { role: 'Directrice Croissance', service: 'Vidéos Pub IA', metric: 'ROAS 3,8x • Livraison 48h', quote: 'Leur production vidéo publicitaire IA a offert à notre lancement un spot digne d’un grand studio sans budget à six chiffres.' },
        'drift-studios-producer': { role: 'Producteur Exécutif', service: 'Jeux Mobiles', metric: '120 FPS • iOS & Android', quote: 'Ils ont verrouillé le 120 Hz sur nos titres mobiles tout en maintenant une température optimale sur Android milieu de gamme.' },
        'harbor-health-ops': { role: 'Directrice des Opérations', service: 'Maintenance & SLA', metric: 'Réponse < 10 min', quote: 'Depuis la migration vers le plan de maintenance 24/7 de Codes Cinema, nous n’avons connu aucune interruption imprévue.' },
        'nordic-retail-ops': { role: 'Fondateur & PDG', service: 'Admin & Opérations', metric: 'Mises à jour 10x plus rapides', quote: 'Leur équipe dédiée gère notre catalogue multi-boutiques et nos flux quotidiens, libérant notre équipe pour le produit.' },
        'solaris-media-creative': { role: 'Directrice Créative', service: 'Cinématiques 3D & VFX', metric: 'Pipeline 4K Volumétrique', quote: 'Rares sont les équipes qui maîtrisent aussi bien les shaders que le rythme cinématographique. Le résultat a conquis tous nos partenaires.' }
      }
    },
    contact: {
      badge: 'Contact Direct',
      heading: 'Parlons de votre projet.',
      subtitle:
        'Transmettez votre brief de projet ci-dessous pour initier une consultation technique. Notre équipe analyse vos spécifications et vous répond sous 24 heures ouvrées.',
      whatsappTitle: 'Bureau Technique WhatsApp Direct',
      whatsappDesc: 'Réservation rapide de vidéos publicitaires IA, jeux mobiles, configurations DevOps et questions techniques.',
      whatsappBtn: 'Discuter sur WhatsApp',
      fullName: 'Nom complet *',
      namePlaceholder: 'Jean Dupont',
      businessEmail: 'Email professionnel *',
      emailPlaceholder: 'jean@entreprise.com',
      discipline: 'Discipline principale *',
      briefLabel: 'Brief du projet & objectifs *',
      briefPlaceholder: 'Décrivez vos besoins, plateformes cibles, périmètre de maintenance ou échéances...',
      submitBtn: 'Transmettre le brief de consultation',
      submittingBtn: 'Envoi vers contact@codescinema.com...',
      sendViaEmail: 'Envoyer directement par email',
      successTitle: 'Brief de consultation transmis',
      successBody1: 'Merci,',
      successBody2: 'Votre brief pour',
      successBody3: 'a été transmis directement à',
      successBody4: 'Nous vous répondrons à',
      successBody5: 'sous 24 heures ouvrées.',
      submitAnother: 'Envoyer un autre brief',
      openEmailCopy: 'Ouvrir une copie dans l’app Mail',
      responseTitle: 'Délai de réponse garanti',
      responseHeading: 'Sous 24 heures ouvrées',
      responseDesc: 'Analyse directe par nos ingénieurs seniors et directeurs de studio.',
      ndaTitle: 'Confidentialité stricte',
      ndaHeading: 'Accord de confidentialité (NDA)',
      ndaDesc: 'Code source, propriété intellectuelle et systèmes restent 100 % confidentiels.',
      deskTitle: 'Bureau du Studio',
      supportEmailLabel: 'EMAIL SUPPORT',
      whatsappDirectLabel: 'WHATSAPP DIRECT',
      globalClienteleLabel: 'CLIENTÈLE MONDIALE',
      globalClienteleValue: 'Opérations à distance (UTC+1)',
      options: {
        fullstack: 'Développement Web Full-Stack (Plateforme Clé en Main)',
        frontend: 'Développement Front-End (UI/UX & React Uniquement)',
        backend: 'Ingénierie Back-End & API (Base de Données & Serveur)',
        ai: 'Vidéos Publicitaires IA & Cinématiques (Viral / Haute Conversion)',
        mobile: 'Développement de Jeux Mobiles (iOS & Android)',
        software: 'Ingénierie Logicielle Sur Mesure',
        devops: 'DevOps & Gestion de Serveurs',
        maintenance: 'Maintenance Web & Support (SLA 24/7)',
        admin: 'Bureau Admin & Opérations',
        consulting: 'Conseil Technologique & Architecture'
      }
    },
    footer: {
      description: 'Studio numérique alliant rigueur d’ingénierie et profondeur cinématique. Jeux mobiles, logiciels distribués, DevOps et opérations web 24/7.',
      coreEngineering: 'Ingénierie',
      operations: 'Opérations',
      connect: 'Réseaux',
      whatsappChannel: 'Canal WhatsApp ↗',
      securityPatching: 'Correctifs de sécurité',
      speedBackups: 'Vitesse & Sauvegardes',
      timelineEstimator: 'Estimateur de délais',
      clientTestimonies: 'Témoignages Clients',
      rights: 'Tous droits réservés.',
      slaStatus: 'Systèmes Opérationnels // 99,98 % SLA',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      security: 'Sécurité'
    }
  },

  es: {
    metaTitle: 'Codes Cinema | Software • Juegos Móviles • Cinemática • Mantenimiento',
    nav: {
      capabilities: 'Capacidades',
      webDev: 'Desarrollo Web',
      scoping: 'Estimador',
      scopingMobile: 'Herramienta de Alcance',
      studio: 'Estudio',
      studioMobile: 'Filosofía del Estudio',
      testimonies: 'Testimonios',
      contact: 'Contacto',
      whatsapp: 'WhatsApp',
      inquire: 'Consultar',
      startProject: 'Iniciar Proyecto',
      selectCountry: 'Seleccionar país e idioma'
    },
    hero: {
      statusPill: 'Disponible para proyectos selectos Q4 / Q1',
      headlineTop: 'Precisión digital.',
      headlineAccent: 'Profundidad cinematográfica.',
      subtitle:
        'Codes Cinema desarrolla juegos móviles de alto rendimiento, software cloud a medida y gestiona DevOps, servidores y operaciones técnicas 24/7.',
      hookTitle: 'Impulsa la conversión, el rendimiento y la escala',
      hookBody:
        'Producimos anuncios en video con IA de alta conversión, videojuegos móviles fluidos, aplicaciones cloud personalizadas e infraestructura DevOps robusta.',
      exploreCta: 'Explorar Capacidades',
      estimatorCta: 'Estimador de Alcance',
      kpiUptime: 'Uptime SLA',
      kpiTriage: 'Respuesta Directa',
      cardTitle: 'Capacidades del Estudio',
      cardCore: 'Disciplinas Técnicas',
      cardStatus: 'Producción',
      learnMore: 'Ver esta especialidad',
      requestCall: 'Solicitar llamada',
      tabs: { mobile: 'Móvil', software: 'Software', devops: 'DevOps', care: 'Soporte', admin: 'Admin' },
      previews: {
        mobile: {
          tag: 'DESARROLLO DE JUEGOS MÓVILES',
          title: 'Motor Unity y Arquitectura Móvil Nativa',
          desc: 'Compilación nativa para iOS y Android, respuesta táctil fluida a 60/120 FPS y optimización energética.',
          metrics: [
            { label: 'Fluidez objetivo', value: '120 FPS estables' },
            { label: 'Plataformas', value: 'iOS y Android' },
            { label: 'Perfilado', value: 'Cero fugas de memoria' }
          ]
        },
        software: {
          tag: 'INGENIERÍA DE SOFTWARE A MEDIDA',
          title: 'Microservicios Cloud y APIs Escalables',
          desc: 'Sistemas distribuidos, WebSockets en tiempo real, caché PostgreSQL/Redis y despliegues CI/CD automatizados.',
          metrics: [
            { label: 'Disponibilidad', value: '99,98 % SLA' },
            { label: 'Arquitectura', value: 'Microservicios' },
            { label: 'Sincronización', value: 'Submilisegundo' }
          ]
        },
        devops: {
          tag: 'DEVOPS Y GESTIÓN DE SERVIDORES',
          title: 'Infraestructura Cloud, Linux y CI/CD',
          desc: 'Administración de servidores Linux, seguridad de firewalls, despliegues sin interrupciones, Docker y telemetría 24/7.',
          metrics: [
            { label: 'Infraestructura', value: 'Bare-Metal y Cloud' },
            { label: 'Automatización', value: 'Pipelines CI/CD' },
            { label: 'Uptime SLA', value: '99,99 % Activo' }
          ]
        },
        care: {
          tag: 'MANTENIMIENTO WEB Y CUIDADO',
          title: 'Escudo de Seguridad y Uptime Proactivo 24/7',
          desc: 'Monitoreo continuo, alertas inmediatas, parches de seguridad, copias cifradas diarias y optimización de velocidad.',
          metrics: [
            { label: 'Monitoreo', value: '24/7 Continuo' },
            { label: 'Respaldos', value: 'Diarios cifrados' },
            { label: 'Respuesta', value: 'SLA < 15 min' }
          ]
        },
        admin: {
          tag: 'MESA DE ADMIN Y OPERACIONES',
          title: 'Soporte Técnico Back-Office Dedicado',
          desc: 'Publicación de contenido, moderación CMS, integridad de bases de datos, control de roles y asistencia diaria.',
          metrics: [
            { label: 'SLA Soporte', value: 'Mismo día' },
            { label: 'Operaciones', value: 'CMS y Bases de Datos' },
            { label: 'Accesos', value: 'RBAC Auditado' }
          ]
        }
      }
    },
    services: {
      badge: 'Capacidades del Estudio',
      heading: 'Diseñado para el rendimiento y la resistencia.',
      subtitle: 'Desde juegos móviles y software cloud distribuido hasta mantenimiento web 24/7 y operaciones técnicas.',
      inquireTrack: 'Consultar Servicio',
      items: {
        'mobile-games': {
          title: 'Desarrollo de Juegos Móviles',
          description: 'Juegos móviles de alto rendimiento para iOS y Android con Unity, físicas táctiles precisas y shaders optimizados.',
          highlights: ['Compilación nativa iOS y Android', 'Rendimiento táctil fluido a 60 y 120 FPS', 'Live-ops, compras integradas y monetización'],
          tags: ['iOS y Android', 'Unity Mobile', 'Controles Táctiles', 'Optimización']
        },
        software: {
          title: 'Ingeniería de Software a Medida',
          description: 'Sistemas distribuidos críticos, microservicios de alta concurrencia e integraciones API con disponibilidad del 99,98 %.',
          highlights: ['Arquitectura cloud y microservicios', 'WebSockets y GraphQL en tiempo real', 'Bases de datos escalables y caché'],
          tags: ['Cloud Distribuido', 'Web/App Full-Stack', 'APIs Tiempo Real', 'Microservicios']
        },
        devops: {
          title: 'DevOps y Gestión de Servidores',
          description: 'Administración Linux integral y DevOps cloud: pipelines CI/CD, Docker, Nginx, certificados SSL y monitoreo 24/7.',
          highlights: ['Servidores Linux y endurecimiento de firewalls', 'CI/CD automatizado sin caídas', 'Orquestación Docker y balanceo Nginx'],
          tags: ['Admin Linux', 'Docker y CI/CD', 'Nginx y SSL', 'AWS y DigitalOcean', 'Backups']
        },
        maintenance: {
          title: 'Mantenimiento Web y Soporte',
          description: 'Cuidado preventivo para portales y aplicaciones web: monitoreo 24/7, parches zero-day, copias diarias y velocidad.',
          highlights: ['Chequeos 24/7 y alertas inmediatas', 'Copias de seguridad cifradas diarias', 'Gestión de parches y seguridad CMS'],
          tags: ['Monitoreo Uptime', 'Parches Seguridad', 'Velocidad Web', 'Recuperación']
        },
        admin: {
          title: 'Mesa de Admin y Operaciones',
          description: 'Operaciones técnicas de back-office: actualización de contenidos, moderación CMS, bases de datos y gestión de permisos.',
          highlights: ['Gestión rutinaria de contenido y catálogos', 'Control de accesos y bases de datos', 'Canal de soporte técnico SLA'],
          tags: ['Gestión CMS', 'Bases de Datos', 'Roles de Usuario', 'Operaciones']
        },
        cinematics: {
          title: 'Videos Publicitarios IA y Cinemática',
          description: 'Anuncios en video generados con IA y VFX 3D fotorrealistas diseñados para captar atención y multiplicar conversiones.',
          highlights: ['Guiones virales y generación de video IA', 'CGI 3D fotorrealista y cámaras virtuales', 'Formatos para TikTok, Reels y Web'],
          tags: ['Videos IA', 'Anuncios Virales', 'Promos Producto', 'CGI 3D', 'Diseño Sonoro']
        },
        consulting: {
          title: 'Consultoría Tecnológica',
          description: 'Asesoría estratégica en transformación digital, auditorías de arquitectura, automatización y hojas de ruta técnicas.',
          highlights: ['Auditoría completa de arquitectura y seguridad', 'Diseño de flujos de producción automatizados', 'Planificación tecnológica escalable'],
          tags: ['Auditoría', 'Optimización', 'Estrategia Tech', 'Rendimiento']
        }
      }
    },
    estimator: {
      badge: 'Planificador Interactivo',
      heading: 'Estima tu cronograma y alcance.',
      subtitle: 'Selecciona tu disciplina y nivel operativo para calcular una ventana de entrega calibrada.',
      step1: '1. Seleccionar Disciplina',
      step2: '2. Nivel de Complejidad',
      step3: '3. Ventana de Entrega Objetivo',
      baseWeeksPrefix: 'Base:',
      weeksUnit: 'Semanas',
      rangeMin: '7 Semanas (Sprint)',
      rangeMid: '14 Semanas (Trimestral)',
      rangeMax: '24 Semanas (Profundo)',
      calculatedWindow: 'Ventana Calculada',
      estimatedTimeline: 'Tiempo Estimado de Entrega',
      recommendedSprint: 'Arquitectura de Sprint Recomendada',
      applyCta: 'Aplicar al Formulario de Contacto',
      whatsappCta: 'Enviar por WhatsApp (+234 816 049 8340)',
      tracks: {
        Fullstack: 'Web Full-Stack',
        Frontend: 'Front-End (UI)',
        Backend: 'Back-End (API)',
        Games: 'Juegos Móviles',
        Software: 'Ingeniería Software',
        DevOps: 'DevOps y Servidores',
        Maintenance: 'Mantenimiento Web',
        Admin: 'Servicios Admin',
        Cinematics: 'Anuncios IA y Video',
        Consulting: 'Consultoría Tech'
      },
      tiers: {
        mvp: { name: 'Sprint MVP', desc: 'Prueba de concepto y validación rápida de lanzamiento.' },
        production: { name: 'Producción Completa', desc: 'Arquitectura de estudio, QA integral y escalado.' },
        enterprise: { name: 'Escala Empresarial', desc: 'Ecosistema multiplataforma, SLA 24/7 y equipo dedicado.' }
      },
      phases: {
        Games: ['Fase 1: Controles táctiles y mecánicas base', 'Fase 2: Optimización de assets, shaders y niveles', 'Fase 3: Perfilado iOS/Android y ajuste a 60/120 FPS'],
        DevOps: ['Fase 1: Arquitectura de servidor y firewalls', 'Fase 2: Contenedores Docker, Nginx y SSL automático', 'Fase 3: CI/CD sin caídas y monitoreo 24/7'],
        Maintenance: ['Fase 1: Auditoría de infraestructura y seguridad', 'Fase 2: Copias cifradas y optimización CDN', 'Fase 3: Monitoreo continuo 24/7 y protocolo SLA'],
        Admin: ['Fase 1: Delegación de roles y flujos de trabajo', 'Fase 2: Integración CMS, base de datos y catálogo', 'Fase 3: Mesa de operaciones SLA dedicada'],
        Cinematics: ['Fase 1: Guion viral, storyboard IA y prompts', 'Fase 2: Video IA HD, CGI 3D y motion graphics', 'Fase 3: Etalonaje, mezcla sonora y máster multiplataforma'],
        Consulting: ['Fase 1: Plano de arquitectura y seguridad', 'Fase 2: Plan de optimización CI/CD y latencia', 'Fase 3: Hoja de ruta estratégica y entrega'],
        Software: ['Fase 1: Arquitectura, esquemas y contratos API', 'Fase 2: API central de alta concurrencia', 'Fase 3: Pruebas automatizadas y auditoría de seguridad']
      }
    },
    philosophy: {
      badge: 'Filosofía del Estudio',
      heading: 'Donde el rigor técnico se une a la profundidad cinematográfica.',
      p1: 'Fundado bajo la convicción de que las experiencias digitales alcanzan su máximo potencial cuando la ingeniería y la narrativa visual trabajan unidas.',
      p2: 'Nuestros ingenieros comprenden la iluminación y el ritmo visual; nuestros artistas 3D dominan los draw calls, shaders y rendimiento móvil.',
      pillars: [
        { title: 'Lógica y Escala', desc: 'Código modular limpio preparado para escala en tiempo real.' },
        { title: 'Profundidad Visual', desc: 'Iluminación evocadora, cámara virtual y audio espacial.' },
        { title: 'Cuidado Continuo', desc: 'Monitoreo 24/7, parches de seguridad y respaldos diarios.' },
        { title: 'Mesa de Operaciones', desc: 'Soporte técnico confiable, bases de datos y gestión CMS.' }
      ],
      cardHeaderLeft: 'NÚCLEO STUDIO',
      cardHeaderRight: 'BASE UTC+1',
      tagline: 'Precisión en cada fotograma',
      stat1: 'AUDITADO',
      stat2: 'MÓVIL',
      stat3: 'SLA'
    },
    testimonials: {
      badge: 'Testimonios de Clientes',
      heading: 'La confianza de marcas, equipos y estudios.',
      subtitle: 'Opiniones verificadas de líderes técnicos y directores creativos que trabajan con Codes Cinema.',
      ratingSla: '100 % Cumplimiento SLA',
      bottomPrompt: '¿Listo para lanzar tu próxima plataforma, juego móvil o campaña de video con IA?',
      bottomCta: 'Iniciar Tu Proyecto',
      items: {
        'kora-pay-cto': { role: 'VP de Ingeniería', service: 'Software y DevOps', metric: '99,99 % Uptime • Migración sin caídas', quote: 'Codes Cinema rediseñó nuestro flujo de pagos y automatizó los despliegues en Kubernetes. La latencia bajó de 12 ms.' },
        'luma-brand-growth': { role: 'Directora de Crecimiento', service: 'Videos Publicitarios IA', metric: '3,8x ROAS • Entrega 48h', quote: 'Sus anuncios en video con IA nos dieron un comercial de nivel cinematográfico sin costos de seis cifras.' },
        'drift-studios-producer': { role: 'Productor Ejecutivo', service: 'Juegos Móviles', metric: '120 FPS • iOS y Android', quote: 'Lograron 120Hz estables en dispositivos insignia manteniendo temperaturas bajas en Android.' },
        'harbor-health-ops': { role: 'Directora de Operaciones', service: 'Mantenimiento y SLA', metric: 'Respuesta < 10 min', quote: 'Desde que migramos al plan 24/7 de Codes Cinema no hemos tenido ni un minuto de caída imprevista.' },
        'nordic-retail-ops': { role: 'Fundador y CEO', service: 'Admin y Operaciones', metric: 'Catálogo 10x más rápido', quote: 'Su equipo administrativo gestiona nuestro catálogo y permisos diarios, liberando a nuestro equipo central.' },
        'solaris-media-creative': { role: 'Directora Creativa', service: 'Cinemática 3D y VFX', metric: 'Pipeline 4K Volumétrico', quote: 'Pocos equipos dominan tanto los shaders como el ritmo cinematográfico. El tráiler superó todas las expectativas.' }
      }
    },
    contact: {
      badge: 'Contacto Directo',
      heading: 'Hablemos de tu proyecto.',
      subtitle:
        'Envía los detalles de tu proyecto a continuación para iniciar una consulta técnica. Nuestro equipo analiza tus especificaciones y responde en menos de 24 horas laborables.',
      whatsappTitle: 'Mesa Técnica Directa por WhatsApp',
      whatsappDesc: 'Reservas rápidas de anuncios IA, juegos móviles, DevOps y consultas técnicas.',
      whatsappBtn: 'Chatear en WhatsApp',
      fullName: 'Nombre completo *',
      namePlaceholder: 'Carlos Méndez',
      businessEmail: 'Correo corporativo *',
      emailPlaceholder: 'carlos@empresa.com',
      discipline: 'Disciplina principal *',
      briefLabel: 'Resumen y objetivos del proyecto *',
      briefPlaceholder: 'Describe tus requisitos, plataformas móviles, mantenimiento o plazos...',
      submitBtn: 'Enviar Resumen de Consulta',
      submittingBtn: 'Enviando a contact@codescinema.com...',
      sendViaEmail: 'Enviar por App de Correo',
      successTitle: 'Resumen de Consulta Enviado',
      successBody1: 'Gracias,',
      successBody2: 'Tu solicitud para',
      successBody3: 'ha sido enviada directamente a',
      successBody4: 'Te responderemos a',
      successBody5: 'en un plazo de 24 horas hábiles.',
      submitAnother: 'Enviar Otra Consulta',
      openEmailCopy: 'Abrir Copia en Correo',
      responseTitle: 'Garantía de Respuesta',
      responseHeading: 'En 24 Horas Hábiles',
      responseDesc: 'Evaluación directa por ingenieros senior y directores del estudio.',
      ndaTitle: 'Confidencialidad Estricta',
      ndaHeading: 'NDA Mutuo Bajo Solicitud',
      ndaDesc: 'Todo el código, propiedad intelectual y sistemas permanecen 100 % confidenciales.',
      deskTitle: 'Mesa del Estudio',
      supportEmailLabel: 'CORREO DE SOPORTE',
      whatsappDirectLabel: 'WHATSAPP DIRECTO',
      globalClienteleLabel: 'CLIENTELA GLOBAL',
      globalClienteleValue: 'Operaciones Remotas (UTC+1)',
      options: {
        fullstack: 'Desarrollo Web Full-Stack (Plataforma Llave en Mano)',
        frontend: 'Desarrollo Front-End (UI/UX y React Únicamente)',
        backend: 'Ingeniería Back-End y API (Base de Datos y Servidor)',
        ai: 'Videos Publicitarios IA y Producción Cinematográfica',
        mobile: 'Desarrollo de Juegos Móviles (iOS y Android)',
        software: 'Ingeniería de Software a Medida',
        devops: 'DevOps y Gestión de Servidores',
        maintenance: 'Mantenimiento Web y Soporte (SLA 24/7)',
        admin: 'Mesa de Admin y Operaciones',
        consulting: 'Consultoría Tecnológica y Arquitectura'
      }
    },
    footer: {
      description: 'Estudio digital boutique que une rigor técnico y profundidad cinematográfica. Juegos móviles, software distribuido, DevOps y operaciones web 24/7.',
      coreEngineering: 'Ingeniería',
      operations: 'Operaciones',
      connect: 'Conectar',
      whatsappChannel: 'Canal WhatsApp ↗',
      securityPatching: 'Parches de Seguridad',
      speedBackups: 'Velocidad y Respaldos',
      timelineEstimator: 'Estimador de Tiempos',
      clientTestimonies: 'Testimonios',
      rights: 'Todos los derechos reservados.',
      slaStatus: 'Sistemas Operativos // 99,98 % SLA',
      privacy: 'Privacidad',
      terms: 'Términos',
      security: 'Seguridad'
    }
  },

  de: {
    metaTitle: 'Codes Cinema | Software • Mobile Games • Cinematics • Wartung',
    nav: {
      capabilities: 'Leistungen',
      webDev: 'Webentwicklung',
      scoping: 'Kalkulator',
      scopingMobile: 'Projekt-Kalkulator',
      studio: 'Studio',
      studioMobile: 'Studio-Philosophie',
      testimonies: 'Referenzen',
      contact: 'Kontakt',
      whatsapp: 'WhatsApp',
      inquire: 'Anfragen',
      startProject: 'Projekt starten',
      selectCountry: 'Land & Sprache wählen'
    },
    hero: {
      statusPill: 'Verfügbar für ausgewählte Q4 / Q1 Projekte',
      headlineTop: 'Digitale Präzision.',
      headlineAccent: 'Kinoreife Tiefe.',
      subtitle:
        'Codes Cinema entwickelt leistungsstarke Mobile Games, maßgeschneiderte Cloud-Software und bietet DevOps, Server-Management sowie 24/7-Betrieb.',
      hookTitle: 'Mehr Engagement, Performance und Skalierbarkeit',
      hookBody:
        'Wir liefern konversionsstarke KI-Werbevideos, flüssige Mobile-Gaming-Erlebnisse, individuelle Cloud-Anwendungen und bewährte DevOps-Infrastruktur.',
      exploreCta: 'Leistungen entdecken',
      estimatorCta: 'Projekt-Kalkulator',
      kpiUptime: 'SLA-Verfügbarkeit',
      kpiTriage: 'Direkte Reaktion',
      cardTitle: 'Studio-Kompetenzen',
      cardCore: 'Disciplines Techniques',
      cardStatus: 'Produktion',
      learnMore: 'Mehr erfahren',
      requestCall: 'Erstgespräch anfragen',
      tabs: { mobile: 'Mobile', software: 'Software', devops: 'DevOps', care: 'Wartung', admin: 'Admin' },
      previews: {
        mobile: {
          tag: 'MOBILE-GAME-ENTWICKLUNG',
          title: 'Unity Engine & Native Mobile-Architektur',
          desc: 'Native iOS- & Android-Builds, reaktionsschnelle 60/120-FPS-Steuerung und energieeffiziente Shader-Pipelines.',
          metrics: [
            { label: 'Bildrate', value: '120 FPS stabil' },
            { label: 'Plattformen', value: 'iOS & Android' },
            { label: 'Profiling', value: 'Keine Speicherlecks' }
          ]
        },
        software: {
          tag: 'INDIVIDUELLE SOFTWAREENTWICKLUNG',
          title: 'Skalierbare Cloud-Microservices & APIs',
          desc: 'Verteilte Systeme, Echtzeit-WebSockets, PostgreSQL/Redis-Caching und automatisierte CI/CD-Pipelines.',
          metrics: [
            { label: 'Verfügbarkeit', value: '99,98 % SLA' },
            { label: 'Architektur', value: 'Microservices' },
            { label: 'Datensync', value: 'Sub-Millisekunde' }
          ]
        },
        devops: {
          tag: 'DEVOPS & SERVER-MANAGEMENT',
          title: 'Cloud-Infrastruktur, Linux & CI/CD',
          desc: 'Linux-Administration, Firewall-Härtung, Zero-Downtime-CI/CD, Docker-Orchestrierung und 24/7-Server-Telemetrie.',
          metrics: [
            { label: 'Infrastruktur', value: 'Bare-Metal & Cloud' },
            { label: 'Automatisierung', value: 'CI/CD-Pipelines' },
            { label: 'Uptime SLA', value: '99,99 % Online' }
          ]
        },
        care: {
          tag: 'WEBSITE-WARTUNG & BETREUUNG',
          title: '24/7 Proaktiver Schutz & Verfügbarkeit',
          desc: 'Rund-um-die-Uhr-Checks, sofortige Störungsmeldungen, Zero-Day-Patches, tägliche verschlüsselte Backups.',
          metrics: [
            { label: 'Monitoring', value: '24/7 Kontinuierlich' },
            { label: 'Backups', value: 'Täglich verschlüsselt' },
            { label: 'Reaktion', value: '< 15 Min. SLA' }
          ]
        },
        admin: {
          tag: 'ADMIN & OPERATIONS DESK',
          title: 'Dedizierter Back-Office-Support',
          desc: 'Laufende Content-Pflege, CMS-Moderation, Datenbank-Integrität, Rollenverwaltung und technischer Support.',
          metrics: [
            { label: 'Helpdesk SLA', value: 'Reaktion am selben Tag' },
            { label: 'Betrieb', value: 'CMS & Datenbank' },
            { label: 'Zugriff', value: 'RBAC-geprüft' }
          ]
        }
      }
    },
    services: {
      badge: 'Studio-Leistungen',
      heading: 'Entwickelt für Performance und Ausdauer.',
      subtitle: 'Von Mobile-Game-Produktion und verteilter Cloud-Software bis hin zu 24/7-Website-Wartung und Betrieb.',
      inquireTrack: 'Bereich anfragen',
      items: {
        'mobile-games': {
          title: 'Mobile-Game-Entwicklung',
          description: 'Leistungsstarke Mobile Games für iOS und Android mit Unity, dynamischer Touch-Physik und akkuschonenden Shadern.',
          highlights: ['Native iOS- & Android-Builds', 'Flüssige 60 & 120 FPS Touch-Performance', 'Live-Ops, In-App-Käufe & Monetarisierung'],
          tags: ['iOS & Android', 'Unity Mobile', 'Touch-Steuerung', 'Profiling']
        },
        software: {
          title: 'Individuelle Softwareentwicklung',
          description: 'Unternehmenskritische verteilte Systeme, Microservices und Cloud-Anwendungen mit 99,98 % Verfügbarkeit.',
          highlights: ['Verteilte Cloud- & Microservice-Architektur', 'Echtzeit-WebSockets & GraphQL', 'Skalierbare Datenbanken & Caching'],
          tags: ['Verteilte Cloud', 'Full-Stack Web/App', 'Echtzeit-APIs', 'Microservices']
        },
        devops: {
          title: 'DevOps & Server-Management',
          description: 'Linux-Administration, automatisierte CI/CD-Pipelines, Docker, Nginx, SSL-Sicherheit und 24/7-Serverüberwachung.',
          highlights: ['Linux-Server-Setup & Firewall-Härtung', 'Zero-Downtime CI/CD-Deployments', 'Docker-Orchestrierung & Load-Balancing'],
          tags: ['Linux-Admin', 'Docker & CI/CD', 'Nginx & SSL', 'AWS & DigitalOcean', 'Backups']
        },
        maintenance: {
          title: 'Website-Wartung & Care',
          description: 'Präventive Betreuung für Web-Apps: 24/7-Uptime-Monitoring, Sicherheitspatches, tägliche Backups und Speed-Tuning.',
          highlights: ['24/7-Checks & sofortige Alerts', 'Tägliche verschlüsselte Cloud-Backups', 'Core-, CMS- & Sicherheits-Updates'],
          tags: ['Uptime-Monitoring', 'Sicherheitspatches', 'Speed-Optimierung', 'Notfall-Recovery']
        },
        admin: {
          title: 'Admin & Operations Desk',
          description: 'Zuverlässiger technischer Back-Office-Betrieb: Content-Updates, CMS-Pflege, Datenbankwartung und Benutzerrechte.',
          highlights: ['Laufende Content- & Katalogpflege', 'Zugriffskontrolle & Datenbank-Admin', 'Dedizierter SLA-Helpdesk'],
          tags: ['CMS-Betreuung', 'Datenbank-Admin', 'Rechtemanagement', 'Laufender Betrieb']
        },
        cinematics: {
          title: 'KI-Werbevideos & 3D-Cinematics',
          description: 'Fesselnde KI-generierte Werbespots und fotorealistische 3D-Effekte für maximale Aufmerksamkeit und Conversion.',
          highlights: ['Virale Hooks & KI-Videoproduktion', 'Fotorealistisches 3D-CGI & Kameraführung', 'Optimiert für TikTok, Reels & Web'],
          tags: ['KI-Werbevideos', 'Virale Spots', 'Produkt-Promos', '3D-CGI', 'Sounddesign']
        },
        consulting: {
          title: 'Technologie-Beratung',
          description: 'Strategische Beratung für digitale Transformation, Sicherheitsreviews und skalierbare Produktions-Pipelines.',
          highlights: ['Architektur- & Sicherheitsaudit', 'Automatisierte Workflow-Konzeption', 'Skalierbare Technologie-Roadmap'],
          tags: ['Architektur-Audit', 'Pipeline-Optimierung', 'Tech-Strategie', 'Performance']
        }
      }
    },
    estimator: {
      badge: 'Interaktives Roadmap-Tool',
      heading: 'Zeitplan & Umfang kalkulieren.',
      subtitle: 'Wählen Sie Fachbereich und Komplexität, um ein kalibriertes Lieferfenster zu berechnen.',
      step1: '1. Fachbereich wählen',
      step2: '2. Komplexitätsstufe',
      step3: '3. Gewünschter Zeitrahmen',
      baseWeeksPrefix: 'Basis:',
      weeksUnit: 'Wochen',
      rangeMin: '7 Wochen (Sprint)',
      rangeMid: '14 Wochen (Quartal)',
      rangeMax: '24 Wochen (Komplett)',
      calculatedWindow: 'Berechnetes Zeitfenster',
      estimatedTimeline: 'Geschätzte Lieferzeit',
      recommendedSprint: 'Empfohlene Sprint-Architektur',
      applyCta: 'In Anfrageformular übernehmen',
      whatsappCta: 'Per WhatsApp senden (+234 816 049 8340)',
      tracks: {
        Fullstack: 'Full-Stack Web',
        Frontend: 'Front-End (UI)',
        Backend: 'Back-End (API)',
        Games: 'Mobile Games',
        Software: 'Software-Engineering',
        DevOps: 'DevOps & Server',
        Maintenance: 'Website-Wartung',
        Admin: 'Admin-Services',
        Cinematics: 'KI-Werbung & Video',
        Consulting: 'Tech-Beratung'
      },
      tiers: {
        mvp: { name: 'Sprint MVP', desc: 'Proof of Concept, Kernmechaniken & schneller Marktstart.' },
        production: { name: 'Vollproduktion', desc: 'Studio-Architektur, vollständige QA & Skalierung.' },
        enterprise: { name: 'Enterprise Scale', desc: 'Multi-Plattform-Ökosystem, 24/7-SLA & festes Team.' }
      },
      phases: {
        Games: ['Phase 1: Touch-Physik & Kernmechaniken', 'Phase 2: Asset-Optimierung, Shader & Level-Design', 'Phase 3: iOS/Android-Profiling & 60/120-FPS-Feinschliff'],
        DevOps: ['Phase 1: Server-Architektur & Firewall-Härtung', 'Phase 2: Docker-Container, Nginx & SSL-Automatisierung', 'Phase 3: Zero-Downtime CI/CD & 24/7-Monitoring'],
        Maintenance: ['Phase 1: Infrastruktur- & Sicherheitsaudit', 'Phase 2: Verschlüsselte Backups & CDN-Tuning', 'Phase 3: 24/7-Dauerüberwachung & SLA-Protokoll'],
        Admin: ['Phase 1: Rollenkonzept & Workflow-Mapping', 'Phase 2: CMS-, Datenbank- & Katalogintegration', 'Phase 3: Dedizierter SLA-Operations-Desk'],
        Cinematics: ['Phase 1: Virales Konzept, KI-Storyboard & Prompts', 'Phase 2: HD-KI-Videogenerierung, 3D-CGI & Motion', 'Phase 3: Color Grading, Soundmix & Mastering'],
        Consulting: ['Phase 1: Architektur-Blueprint & Sicherheitsreview', 'Phase 2: CI/CD- & Latenz-Optimierungsplan', 'Phase 3: Strategische Roadmap & Übergabe'],
        Software: ['Phase 1: Architektur-Blueprint, Schema & APIs', 'Phase 2: Hochverfügbare Core-API & Webservices', 'Phase 3: Automatisierte Tests & Penetration-Audit']
      }
    },
    philosophy: {
      badge: 'Studio-Philosophie',
      heading: 'Wo Ingenieurspräzision auf filmische Tiefe trifft.',
      p1: 'Gegründet auf der Überzeugung, dass digitale Erlebnisse ihr volles Potenzial entfalten, wenn Software-Architektur und visuelles Storytelling verschmelzen.',
      p2: 'Unsere Entwickler verstehen Licht und Kameraführung; unsere 3D-Künstler verstehen Draw Calls, Shader-Kosten und Akkulaufzeit.',
      pillars: [
        { title: 'Logik & Skalierung', desc: 'Saubere, modulare Codebasen für Echtzeit-Skalierung.' },
        { title: 'Kinoreife Tiefe', desc: 'Atmosphärisches Licht, virtuelle Kameras und Raumklang.' },
        { title: 'Laufende Betreuung', desc: '24/7-Monitoring, Sicherheitspatches und tägliche Backups.' },
        { title: 'Operations Desk', desc: 'Zuverlässiger Back-Office-Support und Datenbankpflege.' }
      ],
      cardHeaderLeft: 'STUDIO-KERN',
      cardHeaderRight: 'STANDORT UTC+1',
      tagline: 'Präzision in jedem Bild',
      stat1: 'GEPRÜFT',
      stat2: 'MOBILE',
      stat3: 'SLA'
    },
    testimonials: {
      badge: 'Kundenstimmen',
      heading: 'Vertrauen von Machern, Marken und Studios.',
      subtitle: 'Verifiziertes Feedback von Engineering-Leadern, Gründern und Kreativdirektoren, die mit Codes Cinema arbeiten.',
      ratingSla: '100 % Liefer-SLA',
      bottomPrompt: 'Bereit für Ihre nächste Software-Plattform, Ihr Mobile Game oder Ihre KI-Kampagne?',
      bottomCta: 'Projekt starten',
      items: {
        'kora-pay-cto': { role: 'VP Engineering', service: 'Software & DevOps', metric: '99,99 % Uptime • Migration ohne Ausfall', quote: 'Codes Cinema hat unsere Payment-Pipeline neu aufgebaut und unsere Kubernetes-Deployments automatisiert. Die Latenz sank unter 12 ms.' },
        'luma-brand-growth': { role: 'Head of Growth', service: 'KI-Werbevideos', metric: '3,8x ROAS • 48h Lieferung', quote: 'Ihre KI-Videoproduktion lieferte uns einen Spot auf Kinoniveau ohne sechsstelliges Drehbudget.' },
        'drift-studios-producer': { role: 'Executive Producer', service: 'Mobile Game Dev', metric: '120 FPS • iOS & Android', quote: 'Sie haben 120 Hz auf Flaggschiff-Geräten stabilisiert und die Wärmeentwicklung auf Mittelklasse-Android-Geräten niedrig gehalten.' },
        'harbor-health-ops': { role: 'Betriebsleiterin', service: 'Wartung & SLA', metric: '< 10 Min. Reaktionszeit', quote: 'Seit wir auf den 24/7-Wartungsplan von Codes Cinema gewechselt sind, gab es keine einzige ungeplante Ausfallminute.' },
        'nordic-retail-ops': { role: 'Gründer & CEO', service: 'Admin & Operations', metric: '10x schnellere Updates', quote: 'Ihr engagiertes Admin-Team verwaltet unseren Multi-Store-Katalog und entlastet unser Kernteam vollständig.' },
        'solaris-media-creative': { role: 'Creative Director', service: '3D Cinematics & VFX', metric: '4K Volumetrische Pipeline', quote: 'Nur wenige Teams beherrschen Shader-Mathematik und filmisches Timing gleichermaßen. Das Ergebnis hat alle begeistert.' }
      }
    },
    contact: {
      badge: 'Direkter Kontakt',
      heading: 'Sprechen wir über Ihr Projekt.',
      subtitle:
        'Senden Sie Ihre Projektanforderungen unten ein, um eine technische Beratung zu starten. Unser Team prüft Ihre Spezifikationen und antwortet innerhalb von 24 Geschäftsstunden.',
      whatsappTitle: 'Direkter WhatsApp-Technikdesk',
      whatsappDesc: 'Schnelle Buchung für KI-Werbevideos, Mobile Games, DevOps und technische Fragen.',
      whatsappBtn: 'Auf WhatsApp chatten',
      fullName: 'Vollständiger Name *',
      namePlaceholder: 'Max Mustermann',
      businessEmail: 'Geschäftliche E-Mail *',
      emailPlaceholder: 'max@unternehmen.de',
      discipline: 'Hauptbereich *',
      briefLabel: 'Projektbeschreibung & Ziele *',
      briefPlaceholder: 'Beschreiben Sie Ihre Anforderungen, Zielplattformen, Wartungsumfang oder Meilensteine...',
      submitBtn: 'Projektanfrage absenden',
      submittingBtn: 'Wird an contact@codescinema.com gesendet...',
      sendViaEmail: 'Direkt per E-Mail-App senden',
      successTitle: 'Projektanfrage übermittelt',
      successBody1: 'Vielen Dank,',
      successBody2: 'Ihre Anfrage für',
      successBody3: 'wurde direkt gesendet an',
      successBody4: 'Wir melden uns unter',
      successBody5: 'innerhalb von 24 Geschäftsstunden.',
      submitAnother: 'Weitere Anfrage senden',
      openEmailCopy: 'Kopie in E-Mail-App öffnen',
      responseTitle: 'Antwortgarantie',
      responseHeading: 'Innerhalb von 24 Geschäftsstunden',
      responseDesc: 'Direkte Prüfung durch Senior-Engineers und Studioleitung.',
      ndaTitle: 'Strikte Vertraulichkeit',
      ndaHeading: 'NDA auf Anfrage',
      ndaDesc: 'Quellcode, Spiel-IP und Systeme bleiben zu 100 % vertraulich.',
      deskTitle: 'Studio-Kontakt',
      supportEmailLabel: 'SUPPORT-E-MAIL',
      whatsappDirectLabel: 'WHATSAPP DIREKT',
      globalClienteleLabel: 'GLOBALE KUNDEN',
      globalClienteleValue: 'Remote-Betrieb (UTC+1)',
      options: {
        fullstack: 'Full-Stack Webentwicklung (Komplettplattform)',
        frontend: 'Front-End Entwicklung (Nur UI/UX & React)',
        backend: 'Back-End & API Engineering (Nur Datenbank & Server)',
        ai: 'KI-Werbevideos & Filmproduktion',
        mobile: 'Mobile-Game-Entwicklung (iOS & Android)',
        software: 'Individuelle Softwareentwicklung',
        devops: 'DevOps & Server-Management',
        maintenance: 'Website-Wartung & Care (24/7 SLA)',
        admin: 'Admin & Operations Desk',
        consulting: 'Technologie-Beratung & Architektur'
      }
    },
    footer: {
      description: 'Digitalstudio, das technische Präzision mit kinoreifer Tiefe verbindet. Mobile Games, verteilte Software, DevOps und 24/7-Webbetrieb.',
      coreEngineering: 'Engineering',
      operations: 'Betrieb',
      connect: 'Kontakt',
      whatsappChannel: 'WhatsApp-Kanal ↗',
      securityPatching: 'Sicherheitspatches',
      speedBackups: 'Speed & Backups',
      timelineEstimator: 'Zeitplan-Kalkulator',
      clientTestimonies: 'Kundenstimmen',
      rights: 'Alle Rechte vorbehalten.',
      slaStatus: 'Systeme aktiv // 99,98 % SLA',
      privacy: 'Datenschutz',
      terms: 'AGB',
      security: 'Sicherheit'
    }
  },

  br: {
    metaTitle: 'Codes Cinema | Software • Jogos Mobile • Cinemática • Manutenção',
    nav: {
      capabilities: 'Serviços',
      webDev: 'Desenvolvimento Web',
      scoping: 'Estimador',
      scopingMobile: 'Estimador de Escopo',
      studio: 'Estúdio',
      studioMobile: 'Filosofia do Estúdio',
      testimonies: 'Depoimentos',
      contact: 'Contato',
      whatsapp: 'WhatsApp',
      inquire: 'Orçamento',
      startProject: 'Iniciar Projeto',
      selectCountry: 'Selecionar país e idioma'
    },
    hero: {
      statusPill: 'Disponível para projetos selecionados Q4 / Q1',
      headlineTop: 'Precisão digital.',
      headlineAccent: 'Profundidade cinematográfica.',
      subtitle:
        'A Codes Cinema desenvolve jogos mobile de alta performance, software em nuvem sob medida e gerencia DevOps, servidores e operações 24/7.',
      hookTitle: 'Impulsione engajamento, performance e escala',
      hookBody:
        'Produzimos vídeos publicitários com IA de alta conversão, jogos mobile fluidos, aplicações cloud personalizadas e infraestrutura DevOps resiliente.',
      exploreCta: 'Explorar Serviços',
      estimatorCta: 'Estimador de Escopo',
      kpiUptime: 'Disponibilidade SLA',
      kpiTriage: 'Atendimento Direto',
      cardTitle: 'Capacidades do Estúdio',
      cardCore: 'Disciplinas Técnicas',
      cardStatus: 'Produção',
      learnMore: 'Saiba mais',
      requestCall: 'Agendar conversa',
      tabs: { mobile: 'Mobile', software: 'Software', devops: 'DevOps', care: 'Suporte', admin: 'Admin' },
      previews: {
        mobile: {
          tag: 'DESENVOLVIMENTO DE JOGOS MOBILE',
          title: 'Unity Engine e Arquitetura Mobile Nativa',
          desc: 'Compilação nativa para iOS e Android, resposta tátil fluida em 60/120 FPS e shaders econômicos em bateria.',
          metrics: [
            { label: 'Taxa de quadros', value: '120 FPS travados' },
            { label: 'Plataformas', value: 'iOS e Android' },
            { label: 'Profiling', value: 'Zero vazamentos' }
          ]
        },
        software: {
          tag: 'ENGENHARIA DE SOFTWARE SOB MEDIDA',
          title: 'Microsserviços Cloud e APIs Escaláveis',
          desc: 'Sistemas distribuídos, WebSockets em tempo real, cache PostgreSQL/Redis e pipelines CI/CD automatizados.',
          metrics: [
            { label: 'Disponibilidade', value: '99,98% SLA' },
            { label: 'Arquitetura', value: 'Microsserviços' },
            { label: 'Sincronização', value: 'Submilissegundo' }
          ]
        },
        devops: {
          tag: 'DEVOPS E GESTÃO DE SERVIDORES',
          title: 'Infraestrutura Cloud, Linux e CI/CD',
          desc: 'Administração Linux, firewalls, deploys CI/CD sem queda, contêineres Docker e telemetria 24/7.',
          metrics: [
            { label: 'Infraestrutura', value: 'Bare-Metal e Cloud' },
            { label: 'Automação', value: 'Pipelines CI/CD' },
            { label: 'Uptime SLA', value: '99,99% Online' }
          ]
        },
        care: {
          tag: 'MANUTENÇÃO WEB E SUPORTE',
          title: 'Escudo de Segurança e Uptime Proativo 24/7',
          desc: 'Monitoramento contínuo, alertas imediatos, patches de segurança, backups criptografados diários e velocidade.',
          metrics: [
            { label: 'Monitoramento', value: '24/7 Contínuo' },
            { label: 'Backups', value: 'Diários criptografados' },
            { label: 'Resposta', value: '< 15 min SLA' }
          ]
        },
        admin: {
          tag: 'MESA ADMIN E OPERAÇÕES',
          title: 'Suporte Técnico Back-Office Dedicado',
          desc: 'Publicação de conteúdo, moderação CMS, integridade de banco de dados, permissões e assistência contínua.',
          metrics: [
            { label: 'SLA Suporte', value: 'Mesmo dia' },
            { label: 'Operações', value: 'CMS e Banco' },
            { label: 'Acesso', value: 'RBAC Auditado' }
          ]
        }
      }
    },
    services: {
      badge: 'Capacidades do Estúdio',
      heading: 'Projetado para performance e resistência.',
      subtitle: 'Da produção de jogos mobile e software cloud distribuído à manutenção 24/7 e operações técnicas.',
      inquireTrack: 'Solicitar Serviço',
      items: {
        'mobile-games': {
          title: 'Desenvolvimento de Jogos Mobile',
          description: 'Engenharia de jogos mobile para iOS e Android com Unity, física tátil dinâmica e shaders otimizados.',
          highlights: ['Compilação nativa iOS e Android', 'Performance tátil fluida em 60 e 120 FPS', 'Live-ops, compras no app e monetização'],
          tags: ['iOS e Android', 'Unity Mobile', 'Controles Táteis', 'Performance']
        },
        software: {
          title: 'Engenharia de Software Sob Medida',
          description: 'Sistemas distribuídos críticos, microsserviços de alta concorrência e APIs com 99,98% de disponibilidade.',
          highlights: ['Arquitetura cloud e microsserviços', 'WebSockets e GraphQL em tempo real', 'Bancos de dados escaláveis e cache'],
          tags: ['Cloud Distribuído', 'Full-Stack Web/App', 'APIs Tempo Real', 'Microsserviços']
        },
        devops: {
          title: 'DevOps e Gestão de Servidores',
          description: 'Administração Linux completa e DevOps: pipelines CI/CD, Docker, Nginx, SSL e métricas 24/7.',
          highlights: ['Provisionamento Linux e firewalls', 'Pipelines CI/CD sem tempo de inatividade', 'Orquestração Docker e Nginx'],
          tags: ['Admin Linux', 'Docker e CI/CD', 'Nginx e SSL', 'AWS e DigitalOcean', 'Backups']
        },
        maintenance: {
          title: 'Manutenção Web e Suporte 24/7',
          description: 'Cuidado preventivo para sites e portais: monitoramento 24/7, patches zero-day, backups diários e velocidade.',
          highlights: ['Verificações 24/7 e alertas imediatos', 'Backups em nuvem criptografados diários', 'Atualizações de segurança e CMS'],
          tags: ['Monitoramento', 'Segurança', 'Otimização', 'Recuperação']
        },
        admin: {
          title: 'Mesa Admin e Operações',
          description: 'Gestão técnica de back-office: atualização de conteúdo, moderação CMS, bancos de dados e permissões.',
          highlights: ['Curadoria de conteúdo e catálogos', 'Controle de acesso e administração de banco', 'Canal de atendimento SLA dedicado'],
          tags: ['Gestão CMS', 'Banco de Dados', 'Permissões', 'Operações']
        },
        cinematics: {
          title: 'Vídeos Publicitários IA e Cinemática',
          description: 'Anúncios em vídeo gerados por IA e efeitos 3D fotorrealistas criados para prender a atenção e converter.',
          highlights: ['Roteiros virais e geração de vídeo IA', 'CGI 3D fotorrealista e câmeras virtuais', 'Formatos para TikTok, Reels e Web'],
          tags: ['Vídeos IA', 'Comerciais Virais', 'Promos', 'CGI 3D', 'Sound Design']
        },
        consulting: {
          title: 'Consultoria Tecnológica',
          description: 'Consultoria estratégica para transformação digital, auditorias de segurança e automação de pipelines.',
          highlights: ['Auditoria de arquitetura e segurança', 'Fluxos de produção automatizados', 'Roadmap tecnológico escalável'],
          tags: ['Auditoria', 'Otimização', 'Estratégia Tech', 'Performance']
        }
      }
    },
    estimator: {
      badge: 'Planejador Interativo',
      heading: 'Estime prazo e escopo.',
      subtitle: 'Selecione sua disciplina e nível de complexidade para calcular o prazo de entrega.',
      step1: '1. Selecionar Disciplina',
      step2: '2. Nível de Complexidade',
      step3: '3. Prazo Alvo de Entrega',
      baseWeeksPrefix: 'Base:',
      weeksUnit: 'Semanas',
      rangeMin: '7 Semanas (Sprint)',
      rangeMid: '14 Semanas (Trimestral)',
      rangeMax: '24 Semanas (Completo)',
      calculatedWindow: 'Prazo Calculado',
      estimatedTimeline: 'Prazo Estimado de Entrega',
      recommendedSprint: 'Arquitetura de Sprint Recomendada',
      applyCta: 'Aplicar ao Formulário de Contato',
      whatsappCta: 'Enviar no WhatsApp (+234 816 049 8340)',
      tracks: {
        Fullstack: 'Web Full-Stack',
        Frontend: 'Front-End (UI)',
        Backend: 'Back-End (API)',
        Games: 'Jogos Mobile',
        Software: 'Engenharia Software',
        DevOps: 'DevOps e Servidores',
        Maintenance: 'Manutenção Web',
        Admin: 'Serviços Admin',
        Cinematics: 'Anúncios IA e Vídeos',
        Consulting: 'Consultoria Tech'
      },
      tiers: {
        mvp: { name: 'Sprint MVP', desc: 'Prova de conceito, mecânicas centrais e validação rápida.' },
        production: { name: 'Produção Completa', desc: 'Arquitetura de estúdio, QA completo e escalabilidade.' },
        enterprise: { name: 'Escala Enterprise', desc: 'Ecossistema multiplataforma, SLA 24/7 e equipe dedicada.' }
      },
      phases: {
        Games: ['Fase 1: Física tátil e mecânicas base', 'Fase 2: Otimização de assets, shaders e níveis', 'Fase 3: Profiling iOS/Android e ajuste 60/120 FPS'],
        DevOps: ['Fase 1: Arquitetura de servidor e firewalls', 'Fase 2: Docker, Nginx e SSL automatizado', 'Fase 3: CI/CD sem queda e monitoramento 24/7'],
        Maintenance: ['Fase 1: Auditoria de infraestrutura e segurança', 'Fase 2: Backups criptografados e CDN', 'Fase 3: Monitoramento contínuo 24/7 e protocolo SLA'],
        Admin: ['Fase 1: Delegação de papéis e fluxos', 'Fase 2: Integração CMS, banco e catálogo', 'Fase 3: Mesa de operações SLA dedicada'],
        Cinematics: ['Fase 1: Conceito viral, storyboard IA e prompts', 'Fase 2: Vídeo IA HD, CGI 3D e motion graphics', 'Fase 3: Color grading, mixagem e masterização'],
        Consulting: ['Fase 1: Blueprint de arquitetura e segurança', 'Fase 2: Plano de otimização CI/CD e latência', 'Fase 3: Roadmap estratégico e entrega'],
        Software: ['Fase 1: Arquitetura, esquemas e contratos API', 'Fase 2: API central de alta concorrência', 'Fase 3: Testes automatizados e auditoria de segurança']
      }
    },
    philosophy: {
      badge: 'Filosofia do Estúdio',
      heading: 'Onde o rigor técnico encontra a profundidade cinematográfica.',
      p1: 'Fundado na convicção de que experiências digitais atingem o máximo potencial quando engenharia e narrativa visual trabalham juntas.',
      p2: 'Nossos desenvolvedores entendem iluminação e ritmo visual; nossos artistas 3D dominam draw calls, shaders e consumo de bateria.',
      pillars: [
        { title: 'Lógica e Escala', desc: 'Código modular limpo construído para escala em tempo real.' },
        { title: 'Profundidade Visual', desc: 'Iluminação evocativa, câmeras virtuais e áudio espacial.' },
        { title: 'Cuidado Contínuo', desc: 'Monitoramento 24/7, patches de segurança e backups diários.' },
        { title: 'Mesa de Operações', desc: 'Suporte técnico confiável, banco de dados e gestão CMS.' }
      ],
      cardHeaderLeft: 'NÚCLEO STUDIO',
      cardHeaderRight: 'BASE UTC+1',
      tagline: 'Precisão em cada quadro',
      stat1: 'AUDITADO',
      stat2: 'MOBILE',
      stat3: 'SLA'
    },
    testimonials: {
      badge: 'Depoimentos de Clientes',
      heading: 'A confiança de criadores, marcas e estúdios.',
      subtitle: 'Feedback verificado de líderes de engenharia, fundadores e diretores criativos que produzem com a Codes Cinema.',
      ratingSla: '100% SLA Cumprido',
      bottomPrompt: 'Pronto para lançar sua próxima plataforma, jogo mobile ou campanha em vídeo com IA?',
      bottomCta: 'Iniciar Seu Projeto',
      items: {
        'kora-pay-cto': { role: 'VP de Engenharia', service: 'Software e DevOps', metric: '99,99% Uptime • Migração sem queda', quote: 'A Codes Cinema reestruturou nosso pipeline de pagamentos e automatizou os deploys em Kubernetes. A latência caiu abaixo de 12 ms.' },
        'luma-brand-growth': { role: 'Head de Crescimento', service: 'Vídeos Publicitários IA', metric: 'ROAS 3,8x • Entrega 48h', quote: 'A produção de vídeo publicitário com IA entregou um comercial cinematográfico sem orçamento de seis dígitos.' },
        'drift-studios-producer': { role: 'Produtor Executivo', service: 'Jogos Mobile', metric: '120 FPS • iOS e Android', quote: 'Eles travaram 120Hz nos aparelhos topo de linha mantendo Androids intermediários frios e estáveis.' },
        'harbor-health-ops': { role: 'Diretora de Operações', service: 'Manutenção e SLA', metric: 'Resposta < 10 min', quote: 'Desde que migramos para o plano 24/7 da Codes Cinema não tivemos um único minuto de queda imprevista.' },
        'nordic-retail-ops': { role: 'Fundador e CEO', service: 'Admin e Operações', metric: 'Atualizações 10x mais rápidas', quote: 'Ter a equipe dedicada gerenciando nosso catálogo e permissões liberou nosso time principal.' },
        'solaris-media-creative': { role: 'Diretora Criativa', service: 'Cinemática 3D e VFX', metric: 'Pipeline 4K Volumétrico', quote: 'Poucas equipes dominam shaders e ritmo cinematográfico. O trailer superou todas as expectativas.' }
      }
    },
    contact: {
      badge: 'Contato Direto',
      heading: 'Vamos conversar sobre seu projeto.',
      subtitle:
        'Envie o briefing do seu projeto abaixo para iniciar uma consultoria técnica. Nossa equipe analisa suas especificações e responde em até 24 horas úteis.',
      whatsappTitle: 'Atendimento Técnico Direto via WhatsApp',
      whatsappDesc: 'Agendamento rápido de vídeos IA, jogos mobile, DevOps e dúvidas técnicas.',
      whatsappBtn: 'Conversar no WhatsApp',
      fullName: 'Nome completo *',
      namePlaceholder: 'Lucas Silva',
      businessEmail: 'E-mail corporativo *',
      emailPlaceholder: 'lucas@empresa.com.br',
      discipline: 'Disciplina principal *',
      briefLabel: 'Resumo e objetivos do projeto *',
      briefPlaceholder: 'Descreva requisitos, plataformas mobile, escopo de manutenção ou prazos...',
      submitBtn: 'Enviar Resumo de Consulta',
      submittingBtn: 'Enviando para contact@codescinema.com...',
      sendViaEmail: 'Enviar pelo App de E-mail',
      successTitle: 'Resumo de Consulta Enviado',
      successBody1: 'Obrigado,',
      successBody2: 'Seu resumo para',
      successBody3: 'foi enviado diretamente para',
      successBody4: 'Responderemos para',
      successBody5: 'em até 24 horas úteis.',
      submitAnother: 'Enviar Outro Resumo',
      openEmailCopy: 'Abrir Cópia no E-mail',
      responseTitle: 'Garantia de Resposta',
      responseHeading: 'Em até 24 Horas Úteis',
      responseDesc: 'Triagem direta com engenheiros seniores e diretores.',
      ndaTitle: 'Confidencialidade Estrita',
      ndaHeading: 'NDA Mútuo Sob Solicitação',
      ndaDesc: 'Todo código, propriedade intelectual e sistemas permanecem 100% confidenciais.',
      deskTitle: 'Mesa do Estúdio',
      supportEmailLabel: 'E-MAIL DE SUPORTE',
      whatsappDirectLabel: 'WHATSAPP DIRETO',
      globalClienteleLabel: 'ATENDIMENTO GLOBAL',
      globalClienteleValue: 'Operações Remotas (UTC+1)',
      options: {
        fullstack: 'Desenvolvimento Web Full-Stack (Plataforma Completa)',
        frontend: 'Desenvolvimento Front-End (Apenas UI/UX e React)',
        backend: 'Engenharia Back-End e API (Apenas Banco de Dados e Servidor)',
        ai: 'Vídeos Publicitários IA e Produção Cinematográfica',
        mobile: 'Desenvolvimento de Jogos Mobile (iOS e Android)',
        software: 'Engenharia de Software Sob Medida',
        devops: 'DevOps e Gestão de Servidores',
        maintenance: 'Manutenção Web e Suporte (SLA 24/7)',
        admin: 'Mesa Admin e Operações',
        consulting: 'Consultoria Tecnológica e Arquitetura'
      }
    },
    footer: {
      description: 'Estúdio digital boutique que une rigor técnico e profundidade cinematográfica. Jogos mobile, software distribuído, DevOps e operações web 24/7.',
      coreEngineering: 'Engenharia',
      operations: 'Operações',
      connect: 'Conectar',
      whatsappChannel: 'Canal WhatsApp ↗',
      securityPatching: 'Patches de Segurança',
      speedBackups: 'Velocidade e Backups',
      timelineEstimator: 'Estimador de Prazos',
      clientTestimonies: 'Depoimentos',
      rights: 'Todos os direitos reservados.',
      slaStatus: 'Sistemas Operacionais // 99,98% SLA',
      privacy: 'Privacidade',
      terms: 'Termos',
      security: 'Segurança'
    }
  },

  jp: {
    metaTitle: 'Codes Cinema | ソフトウェア • モバイルゲーム • シネマティクス • 保守運用',
    nav: {
      capabilities: '事業領域',
      webDev: 'Web開発',
      scoping: '見積り',
      scopingMobile: '見積りツール',
      studio: 'スタジオ',
      studioMobile: 'スタジオ理念',
      testimonies: '導入事例',
      contact: 'お問い合わせ',
      whatsapp: 'WhatsApp',
      inquire: '相談する',
      startProject: 'プロジェクトを始める',
      selectCountry: '国と言語を選択'
    },
    hero: {
      statusPill: 'Q4 / Q1 新規プロジェクト相談受付中',
      headlineTop: 'デジタルの精密さ。',
      headlineAccent: '映画品質の表現力。',
      subtitle:
        'Codes Cinemaは、高性能モバイルゲームやカスタムクラウドソフトウェアの開発から、DevOps・サーバー管理・24時間365日の技術運用まで一貫して提供します。',
      hookTitle: 'エンゲージメント、性能、拡張性を最大化',
      hookBody:
        '高転換率のAI広告動画、滑らかなモバイルゲーム体験、カスタムクラウドアプリ、堅牢なDevOps基盤を構築します。',
      exploreCta: '事業領域を見る',
      estimatorCta: '開発期間を見積もる',
      kpiUptime: 'SLA 稼働率',
      kpiTriage: '即時対応',
      cardTitle: 'スタジオ技術領域',
      cardCore: 'Disciplines Techniques',
      cardStatus: '本番稼働',
      learnMore: '詳細を見る',
      requestCall: '相談を予約する',
      tabs: { mobile: 'モバイル', software: 'ソフト', devops: 'DevOps', care: '保守', admin: '運用' },
      previews: {
        mobile: {
          tag: 'モバイルゲーム開発',
          title: 'Unityエンジン & ネイティブモバイル設計',
          desc: 'iOS / Androidネイティブ対応、60/120 FPSの快適なタッチ操作、省電力シェーダー設計。',
          metrics: [
            { label: '目標フレームレート', value: '120 FPS 安定' },
            { label: '対応OS', value: 'iOS & Android' },
            { label: 'プロファイリング', value: 'メモリリークゼロ' }
          ]
        },
        software: {
          tag: 'カスタムソフトウェア開発',
          title: 'スケーラブルなクラウドAPI設計',
          desc: '分散システム、リアルタイムWebSocket、PostgreSQL/Redisキャッシュ、自動CI/CDパイプライン。',
          metrics: [
            { label: '稼働保証', value: '99.98% SLA' },
            { label: '構成', value: 'マイクロサービス' },
            { label: 'データ同期', value: '1ms未満' }
          ]
        },
        devops: {
          tag: 'DEVOPS & サーバー管理',
          title: 'クラウド基盤・Linux・CI/CD自動化',
          desc: 'Linuxサーバー運用、ファイアウォール強化、無停止CI/CD、Dockerコンテナ管理、24時間監視。',
          metrics: [
            { label: '基盤', value: 'ベアメタル & クラウド' },
            { label: '自動化', value: 'CI/CDパイプライン' },
            { label: '稼働率', value: '99.99% 稼働' }
          ]
        },
        care: {
          tag: 'Web保守 & セキュリティ保護',
          title: '24時間365日の監視とセキュリティ防御',
          desc: '常時死活監視、即時障害通知、ゼロデイ脆弱性パッチ、毎日の暗号化クラウドバックアップ。',
          metrics: [
            { label: '監視体制', value: '24時間365日' },
            { label: 'バックアップ', value: '毎日暗号化保存' },
            { label: '初動対応', value: '15分以内 SLA' }
          ]
        },
        admin: {
          tag: '管理・バックオフィス運用デスク',
          title: '専任バックオフィス技術サポート',
          desc: 'コンテンツ更新、CMS管理、データベース整合性チェック、ユーザー権限管理を代行。',
          metrics: [
            { label: '対応速度', value: '即日対応' },
            { label: '対象領域', value: 'CMS & DB運用' },
            { label: 'アクセス管理', value: 'RBAC監査済' }
          ]
        }
      }
    },
    services: {
      badge: 'スタジオの専門領域',
      heading: '圧倒的な性能と長期安定性のための設計。',
      subtitle: 'モバイルゲーム開発や分散クラウドシステムから、24時間保守・運用デスクまで精密に実行します。',
      inquireTrack: 'この領域を相談',
      items: {
        'mobile-games': {
          title: 'モバイルゲーム開発',
          description: 'Unityを活用したiOS/Android向け高性能ゲーム開発。直感的なタッチ物理と省電力シェーダーを実装。',
          highlights: ['iOS & Androidネイティブ最適化', '60/120 FPSの滑らかな操作感', 'Live-ops・課金・広告メディエーション'],
          tags: ['iOS & Android', 'Unity Mobile', 'タッチ最適化', '性能計測']
        },
        software: {
          title: 'カスタムソフトウェア開発',
          description: '99.98%稼働率を見据えた分散システム、高並列マイクロサービス、API連携、クラウドアプリ構築。',
          highlights: ['分散クラウド & マイクロサービス設計', 'リアルタイムWebSocket & GraphQL', '高拡張データベース & キャッシュ設計'],
          tags: ['分散クラウド', 'フルスタック開発', 'リアルタイムAPI', 'マイクロサービス']
        },
        devops: {
          title: 'DevOps & サーバー管理',
          description: 'Linuxサーバー管理、CI/CD自動化、Dockerオーケストレーション、Nginx、SSL設定、24時間監視。',
          highlights: ['Linux構築・セキュリティ強化', '無停止CI/CDデプロイ自動化', 'Docker運用 & Nginx負荷分散'],
          tags: ['Linux管理', 'Docker & CI/CD', 'Nginx & SSL', 'AWS', '自動バックアップ']
        },
        maintenance: {
          title: 'Webサイト保守・24時間サポート',
          description: 'Webアプリやポータルの予防保守。24時間監視、脆弱性パッチ適用、毎日の自動バックアップ、高速化。',
          highlights: ['24時間稼働チェック & 即時アラート', '毎日の暗号化クラウドバックアップ', 'CMS・プラグイン・セキュリティ更新'],
          tags: ['稼働監視', '脆弱性対策', '高速化', '障害復旧']
        },
        admin: {
          title: '管理 & オペレーションデスク',
          description: '継続的なコンテンツ更新、CMS運用、データベース保守、権限管理、商品在庫同期を一括サポート。',
          highlights: ['定常コンテンツ・カタログ更新', 'アクセス権限 & DB管理', '専任SLAヘルプデスク'],
          tags: ['CMS運用', 'DB管理', '権限管理', '継続サポート']
        },
        cinematics: {
          title: 'AI広告動画 & シネマティック制作',
          description: '視聴者を惹きつけ成約につなげるAI広告動画、商品CM、フォトリアルな3D VFXを制作。',
          highlights: ['バズる冒頭構成 & AI動画生成', 'フォトリアル3D CGI & 仮想カメラ', 'TikTok・Reels・Web最適化'],
          tags: ['AI広告動画', 'バイラルCM', '商品プロモ', '3D CGI', '音響設計']
        },
        consulting: {
          title: 'テクノロジーコンサルティング',
          description: 'DX推進、アーキテクチャ・セキュリティ診断、開発パイプライン自動化、技術ロードマップ策定。',
          highlights: ['設計・セキュリティ・性能監査', '自動化された制作フロー構築', '拡張性のある技術ロードマップ'],
          tags: ['アーキテクチャ監査', '自動化支援', '技術戦略', '性能改善']
        }
      }
    },
    estimator: {
      badge: '開発ロードマップ試算',
      heading: '開発期間とスコープを試算。',
      subtitle: '開発分野と規模を選択すると、最適化された開発期間とフェーズ構成を算出します。',
      step1: '1. 開発分野を選択',
      step2: '2. プロジェクト規模',
      step3: '3. 目標開発期間',
      baseWeeksPrefix: '基準:',
      weeksUnit: '週間',
      rangeMin: '7週間 (スプリント)',
      rangeMid: '14週間 (四半期)',
      rangeMax: '24週間 (大規模)',
      calculatedWindow: '算出された期間',
      estimatedTimeline: '推定開発スケジュール',
      recommendedSprint: '推奨スプリント構成',
      applyCta: '見積り内容をフォームに反映',
      whatsappCta: 'WhatsAppで送信 (+234 816 049 8340)',
      tracks: {
        Fullstack: 'フルスタックWeb',
        Frontend: 'フロントエンド(UI)',
        Backend: 'バックエンド(API)',
        Games: 'モバイルゲーム',
        Software: 'ソフトウェア開発',
        DevOps: 'DevOps・サーバー',
        Maintenance: 'Web保守運用',
        Admin: '管理代行',
        Cinematics: 'AI広告・動画制作',
        Consulting: '技術顧問'
      },
      tiers: {
        mvp: { name: 'Sprint MVP', desc: 'プロトタイプ検証とコア機能の迅速なローンチ。' },
        production: { name: '本番プロダクション', desc: 'スタジオ品質の設計、完全QA、最適化。' },
        enterprise: { name: 'エンタープライズ', desc: 'マルチプラットフォーム、24/7 SLA、専任体制。' }
      },
      phases: {
        Games: ['フェーズ1: 操作物理 & 基本メカニクス構築', 'フェーズ2: アセット最適化・シェーダー設計', 'フェーズ3: iOS/Android計測 & 60/120 FPS調整'],
        DevOps: ['フェーズ1: サーバー設計 & セキュリティ強化', 'フェーズ2: Docker・Nginx・SSL自動化', 'フェーズ3: 無停止CI/CD & 24時間監視'],
        Maintenance: ['フェーズ1: インフラ & セキュリティ監査', 'フェーズ2: 暗号化バックアップ & CDN高速化', 'フェーズ3: 24時間監視 & SLA対応体制'],
        Admin: ['フェーズ1: 権限設計 & 業務フロー整理', 'フェーズ2: CMS・DB・カタログ連携', 'フェーズ3: 専任SLA運用デスク稼働'],
        Cinematics: ['フェーズ1: 企画・AI絵コンテ設計', 'フェーズ2: 高解像度AI動画生成・3D CGI制作', 'フェーズ3: カラー調整・音響・マルチ出力'],
        Consulting: ['フェーズ1: 設計ブループリント & セキュリティ診断', 'フェーズ2: CI/CD & レイテンシ改善計画', 'フェーズ3: 技術ロードマップ策定'],
        Software: ['フェーズ1: アーキテクチャ & API仕様策定', 'フェーズ2: 高並列コアAPI・Web実装', 'フェーズ3: 自動テスト・脆弱性検査・検証']
      }
    },
    philosophy: {
      badge: 'スタジオの理念',
      heading: 'エンジニアリングの厳密さと映像美の融合。',
      p1: 'ソフトウェア設計とシネマティックなストーリーテリングが一体となることで、デジタル体験は最大限の力を発揮すると信じています。',
      p2: '開発者がライティングやカメラワークを理解し、3Dアーティストがドローコールやバッテリー負荷を理解する。それが私たちの強みです。',
      pillars: [
        { title: '論理と拡張性', desc: 'リアルタイム処理と長期運用に耐えるクリーンな設計。' },
        { title: '映像的表現力', desc: '没入感を生むライティング、カメラ設計、空間音響。' },
        { title: '継続的な保守', desc: '24時間監視、セキュリティ更新、毎日の自動バックアップ。' },
        { title: '専任運用デスク', desc: '安定したバックオフィス支援とCMS・DB運用。' }
      ],
      cardHeaderLeft: 'STUDIO CORE',
      cardHeaderRight: 'UTC+1 拠点',
      tagline: 'すべてのフレームに精密さを',
      stat1: '品質監査',
      stat2: 'モバイル',
      stat3: '稼働保証'
    },
    testimonials: {
      badge: 'お客様の声',
      heading: '開発リーダー・ブランド・スタジオからの信頼。',
      subtitle: 'Codes Cinemaと共に本番ソフトウェア、モバイルゲーム、AI広告を展開するパートナーからの評価です。',
      ratingSla: '100% SLA達成',
      bottomPrompt: '次のソフトウェア、モバイルゲーム、またはAI広告キャンペーンを始動しませんか？',
      bottomCta: 'プロジェクトを始める',
      items: {
        'kora-pay-cto': { role: 'エンジニアリングVP', service: 'ソフト & DevOps', metric: '稼働率 99.99% • 無停止移行', quote: '決済基盤の再設計とKubernetes自動デプロイにより、遅延は12ms未満へ低下しリリースもワンクリックになりました。' },
        'luma-brand-growth': { role: 'グロース責任者', service: 'AI広告動画', metric: 'ROAS 3.8倍 • 48時間納品', quote: '巨額の撮影費をかけずに、映画品質のAI広告動画を制作でき、初週でクリック率が2倍になりました。' },
        'drift-studios-producer': { role: 'エグゼクティブプロデューサー', service: 'モバイルゲーム', metric: '120 FPS • iOS & Android', quote: 'フラッグシップ端末での120Hz動作と、Android端末の発熱抑制を両立してくれました。' },
        'harbor-health-ops': { role: '運用ディレクター', service: 'Web保守 & SLA', metric: '10分以内の初動', quote: '24時間保守プランへの移行後、予定外のダウンタイムは一度も発生していません。' },
        'nordic-retail-ops': { role: '創業者兼CEO', service: '管理 & 運用デスク', metric: '更新速度10倍', quote: '専任デスクに日々のカタログ更新や権限管理を任せることで、コアチームが製品開発に集中できました。' },
        'solaris-media-creative': { role: 'クリエイティブディレクター', service: '3Dシネマ & VFX', metric: '4Kボリュメトリック', quote: 'シェーダー技術と映像のテンポの両方を理解する稀有なチームです。トレーラーは全員を驚かせました。' }
      }
    },
    contact: {
      badge: '直接相談',
      heading: 'プロジェクトについてご相談ください。',
      subtitle:
        'プロジェクトの概要を以下のフォームよりご送信ください。エンジニアリングチームが要件を確認し、24営業時間以内にご返信いたします。',
      whatsappTitle: 'WhatsApp 技術直通デスク',
      whatsappDesc: 'AI広告動画の予約、モバイルゲーム開発、DevOps構築のご相談に迅速対応します。',
      whatsappBtn: 'WhatsAppで相談',
      fullName: 'お名前 *',
      namePlaceholder: '山田 太郎',
      businessEmail: 'メールアドレス *',
      emailPlaceholder: 'taro@company.jp',
      discipline: 'ご希望の分野 *',
      briefLabel: 'プロジェクト概要・目標 *',
      briefPlaceholder: '要件、対象モバイルOS、保守範囲、希望スケジュールなどをご記入ください...',
      submitBtn: '相談内容を送信する',
      submittingBtn: 'contact@codescinema.com へ送信中...',
      sendViaEmail: 'メールアプリで直接送信',
      successTitle: '相談内容を送信しました',
      successBody1: 'ありがとうございます、',
      successBody2: '様。ご指定の分野（',
      successBody3: '）の概要は次の宛先へ送信されました：',
      successBody4: '24営業時間以内に次のアドレスへ返信いたします：',
      successBody5: '',
      submitAnother: '別の相談を送信',
      openEmailCopy: 'メールアプリで控えを開く',
      responseTitle: '返信保証',
      responseHeading: '24営業時間以内に対応',
      responseDesc: 'シニアエンジニアとスタジオディレクターが直接確認します。',
      ndaTitle: '厳格な機密保持',
      ndaHeading: 'NDA（秘密保持契約）対応可',
      ndaDesc: 'ソースコード、ゲームIP、システム情報は100%機密保護されます。',
      deskTitle: 'スタジオ窓口',
      supportEmailLabel: 'サポートメール',
      whatsappDirectLabel: 'WHATSAPP 直通',
      globalClienteleLabel: '対応エリア',
      globalClienteleValue: 'グローバルリモート対応 (UTC+1)',
      options: {
        fullstack: 'フルスタックWeb開発（ワンストップ構築）',
        frontend: 'フロントエンド開発（UI/UX・React特化）',
        backend: 'バックエンド＆API開発（DB・サーバー特化）',
        ai: 'AI広告動画 & シネマティック制作',
        mobile: 'モバイルゲーム開発 (iOS & Android)',
        software: 'カスタムソフトウェア開発',
        devops: 'DevOps & サーバー管理',
        maintenance: 'Webサイト保守 & サポート (24/7 SLA)',
        admin: '管理 & オペレーションデスク',
        consulting: 'テクノロジーコンサルティング'
      }
    },
    footer: {
      description: 'エンジニアリングの精密さと映画的表現力を融合するデジタルスタジオ。モバイルゲーム、分散ソフトウェア、DevOps、24時間Web運用を提供。',
      coreEngineering: 'エンジニアリング',
      operations: '運用・保守',
      connect: 'リンク',
      whatsappChannel: 'WhatsApp チャンネル ↗',
      securityPatching: 'セキュリティ更新',
      speedBackups: '高速化 & バックアップ',
      timelineEstimator: '開発期間見積り',
      clientTestimonies: '導入事例・声',
      rights: 'All rights reserved.',
      slaStatus: '全システム正常稼働 // 99.98% SLA',
      privacy: 'プライバシー',
      terms: '利用規約',
      security: 'セキュリティ'
    }
  },

  sa: {
    metaTitle: 'Codes Cinema | برمجيات • ألعاب الجوال • سينمائية • صيانة وتشغيل',
    nav: {
      capabilities: 'الخدمات',
      webDev: 'تطوير الويب',
      scoping: 'حاسبة المشروع',
      scopingMobile: 'أداة تقدير النطاق',
      studio: 'الاستوديو',
      studioMobile: 'فلسفة الاستوديو',
      testimonies: 'آراء العملاء',
      contact: 'تواصل معنا',
      whatsapp: 'واتساب',
      inquire: 'استفسار',
      startProject: 'ابدأ مشروعك',
      selectCountry: 'اختر الدولة واللغة'
    },
    hero: {
      statusPill: 'متاحون لمشاريع مختارة في الربع الرابع / الأول',
      headlineTop: 'دقة رقمية.',
      headlineAccent: 'عمق سينمائي.',
      subtitle:
        'تطور Codes Cinema ألعاب الجوال عالية الأداء والبرمجيات السحابية المخصصة، وتقدم خدمات DevOps وإدارة الخوادم والعمليات التقنية على مدار الساعة.',
      hookTitle: 'ضاعف التفاعل والأداء وقابلية التوسع',
      hookBody:
        'ننتج إعلانات فيديو بالذكاء الاصطناعي عالية التحويل، وتجارب ألعاب جوال سلسة، وتطبيقات سحابية مخصصة، وبنية DevOps موثوقة.',
      exploreCta: 'استكشف خدماتنا',
      estimatorCta: 'حاسبة المشروع',
      kpiUptime: 'جاهزية SLA',
      kpiTriage: 'استجابة مباشرة',
      cardTitle: 'قدرات الاستوديو',
      cardCore: 'الخبرات التقنية',
      cardStatus: 'قيد الإنتاج',
      learnMore: 'اعرف المزيد',
      requestCall: 'اطلب مكالمة استكشافية',
      tabs: { mobile: 'الجوال', software: 'برمجيات', devops: 'DevOps', care: 'الصيانة', admin: 'الإدارة' },
      previews: {
        mobile: {
          tag: 'تطوير ألعاب الجوال',
          title: 'محرك Unity وهندسة الهواتف الأصلية',
          desc: 'تطوير أصلي لنظامي iOS وAndroid، استجابة لمس سلسة بسرعة 60/120 إطاراً في الثانية، ومعالجات رسومية موفرة للبطارية.',
          metrics: [
            { label: 'معدل الإطارات', value: '120 FPS ثابت' },
            { label: 'المنصات', value: 'iOS و Android' },
            { label: 'الأداء', value: 'صفر تسريب للذاكرة' }
          ]
        },
        software: {
          tag: 'هندسة البرمجيات المخصصة',
          title: 'خدمات سحابية مصغرة وواجهات API قابلة للتوسع',
          desc: 'أنظمة موزعة، اتصال فوري WebSockets، تخزين مؤقت عبر PostgreSQL/Redis، وخطوط نشر آلية CI/CD.',
          metrics: [
            { label: 'التوفر', value: '99.98% SLA' },
            { label: 'البنية', value: 'خدمات مصغرة' },
            { label: 'المزامنة', value: 'أقل من ملي ثانية' }
          ]
        },
        devops: {
          tag: 'DEVOPS وإدارة الخوادم',
          title: 'البنية السحابية وLinux وخطوط CI/CD',
          desc: 'إدارة خوادم Linux، تحصين الجدران النارية، نشر آلي بدون توقف، حاويات Docker ومراقبة الخوادم 24/7.',
          metrics: [
            { label: 'البنية التحتية', value: 'سحابي ومخصص' },
            { label: 'الأتمتة', value: 'خطوط CI/CD' },
            { label: 'الاستمرارية', value: '99.99% جاهزية' }
          ]
        },
        care: {
          tag: 'صيانة المواقع والحماية',
          title: 'حماية استباقية ومراقبة على مدار الساعة',
          desc: 'فحوصات مستمرة، تنبيهات فورية، ترقيعات أمنية، نسخ احتياطي مشفر يومياً وتحسين السرعة.',
          metrics: [
            { label: 'المراقبة', value: '24/7 مستمرة' },
            { label: 'النسخ الاحتياطي', value: 'يومي مشفر' },
            { label: 'الاستجابة', value: 'أقل من 15 دقيقة' }
          ]
        },
        admin: {
          tag: 'مكتب الإدارة والعمليات',
          title: 'دعم تقني وتشغيلي مخصص',
          desc: 'تحديث المحتوى، إدارة أنظمة CMS، فحص سلامة قواعد البيانات، صلاحيات المستخدمين والدعم المستمر.',
          metrics: [
            { label: 'سرعة الدعم', value: 'في نفس اليوم' },
            { label: 'العمليات', value: 'CMS وقواعد بيانات' },
            { label: 'الصلاحيات', value: 'RBAC مدقق' }
          ]
        }
      }
    },
    services: {
      badge: 'قدرات الاستوديو',
      heading: 'مصممة للأداء الفائق والاستمرارية.',
      subtitle: 'من إنتاج ألعاب الجوال والبرمجيات السحابية إلى صيانة المواقع على مدار الساعة ومكاتب العمليات التقنية.',
      inquireTrack: 'استفسر عن الخدمة',
      items: {
        'mobile-games': {
          title: 'تطوير ألعاب الجوال',
          description: 'هندسة ألعاب جوال عالية الأداء لأنظمة iOS وAndroid بمحرك Unity مع فيزياء لمس دقيقة ومؤثرات موفرة للطاقة.',
          highlights: ['بناء أصلي لنظامي iOS وAndroid', 'أداء سلس بسرعة 60 و120 إطاراً', 'أنظمة Live-ops والمشتريات والإعلانات'],
          tags: ['iOS و Android', 'Unity Mobile', 'تحكم باللمس', 'تحسين الأداء']
        },
        software: {
          title: 'هندسة البرمجيات المخصصة',
          description: 'أنظمة موزعة، خدمات مصغرة عالية التزامن، وتكاملات API وتطبيقات سحابية بتوافر 99.98%.',
          highlights: ['بنية سحابية وخدمات مصغرة', 'مزامنة فورية WebSockets وGraphQL', 'تصميم قواعد بيانات قابلة للتوسع'],
          tags: ['سحابة موزعة', 'تطبيقات شاملة', 'واجهات فورية', 'خدمات مصغرة']
        },
        devops: {
          title: 'DevOps وإدارة الخوادم',
          description: 'إدارة خوادم Linux وDevOps السحابي: أتمتة CI/CD، حاويات Docker، خوادم Nginx، شهادات SSL والمراقبة.',
          highlights: ['إعداد وتحصين خوادم Linux', 'نشر آلي CI/CD بدون انقطاع', 'توزيع الأحمال وإدارة Docker'],
          tags: ['إدارة Linux', 'Docker و CI/CD', 'Nginx و SSL', 'AWS و DigitalOcean', 'نسخ احتياطي']
        },
        maintenance: {
          title: 'صيانة المواقع والرعاية 24/7',
          description: 'عناية وقائية شاملة للتطبيقات والبوابات: مراقبة دائمة، تحديثات أمنية، نسخ احتياطي يومي وتحسين السرعة.',
          highlights: ['فحص مستمر 24/7 وتنبيهات فورية', 'نسخ احتياطية مشفرة يومياً', 'إدارة تحديثات الأمان والأنظمة'],
          tags: ['مراقبة التوافر', 'ترقيعات أمنية', 'تسريع الأداء', 'استعادة الكوارث']
        },
        admin: {
          title: 'مكتب الإدارة والعمليات',
          description: 'إدارة العمليات التقنية الخلفية: تحديث المحتوى، إدارة قواعد البيانات، صلاحيات المستخدمين ومزامنة المخزون.',
          highlights: ['تحديث دوري للمحتوى والكتالوج', 'إدارة الصلاحيات وقواعد البيانات', 'قناة دعم مخصصة باتفاقية SLA'],
          tags: ['إدارة CMS', 'قواعد البيانات', 'إدارة الصلاحيات', 'عمليات مستمرة']
        },
        cinematics: {
          title: 'إعلانات الفيديو بالذكاء الاصطناعي والسينمائية',
          description: 'فيديوهات إعلانية جذابة بالذكاء الاصطناعي ومؤثرات 3D واقعية مصممة لجذب الانتباه وتحقيق أعلى مبيعات.',
          highlights: ['كتابة خطافات فيروسية وتوليد فيديو بالذكاء الاصطناعي', 'رسوميات ثلاثية الأبعاد واقعية 3D CGI', 'تنسيق جاهز لتيك توك وريلز والويب'],
          tags: ['إعلانات AI', 'فيديوهات فيروسية', 'عروض منتجات', 'CGI 3D', 'هندسة صوتية']
        },
        consulting: {
          title: 'الاستشارات التقنية',
          description: 'استشارات استراتيجية للتحول الرقمي ومراجعة أمان البنية الهندسية وأتمتة خطوط الإنتاج التقنية.',
          highlights: ['تدقيق شامل للبنية والأمان والأداء', 'تصميم تدفقات عمل آلية', 'خارطة طريق تقنية قابلة للتوسع'],
          tags: ['تدقيق البنية', 'تحسين العمليات', 'استراتيجية تقنية', 'تحليل الأداء']
        }
      }
    },
    estimator: {
      badge: 'أداة التخطيط التفاعلية',
      heading: 'احسب المدة الزمنية ونطاق العمل.',
      subtitle: 'اختر التخصص ومستوى التعقيد لحساب الجدول الزمني المقدر ومراحل التنفيذ.',
      step1: '1. اختر التخصص',
      step2: '2. مستوى التعقيد',
      step3: '3. الإطار الزمني المستهدف',
      baseWeeksPrefix: 'الأساس:',
      weeksUnit: 'أسابيع',
      rangeMin: '7 أسابيع (سريع)',
      rangeMid: '14 أسبوعاً (ربع سنوي)',
      rangeMax: '24 أسبوعاً (متكامل)',
      calculatedWindow: 'النطاق المحسوب',
      estimatedTimeline: 'المدة التقديرية للتسليم',
      recommendedSprint: 'هيكل المراحل الموصى به',
      applyCta: 'تطبيق النطاق في نموذج التواصل',
      whatsappCta: 'إرسال عبر واتساب (+234 816 049 8340)',
      tracks: {
        Fullstack: 'تطوير ويب شامل',
        Frontend: 'واجهة أمامية (UI)',
        Backend: 'واجهة خلفية (API)',
        Games: 'ألعاب الجوال',
        Software: 'هندسة البرمجيات',
        DevOps: 'DevOps والخوادم',
        Maintenance: 'صيانة المواقع',
        Admin: 'خدمات الإدارة',
        Cinematics: 'إعلانات AI وفيديو',
        Consulting: 'استشارات تقنية'
      },
      tiers: {
        mvp: { name: 'نسخة أولية MVP', desc: 'إثبات المفهوم وإطلاق سريع للمزايا الأساسية.' },
        production: { name: 'إنتاج متكامل', desc: 'بنية احترافية، اختبارات جودة شاملة وتوسع.' },
        enterprise: { name: 'مستوى المؤسسات', desc: 'منظومة متعددة المنصات ودعم 24/7 وفريق مخصص.' }
      },
      phases: {
        Games: ['المرحلة 1: فيزياء التحكم والآليات الأساسية', 'المرحلة 2: تحسين الأصول والمؤثرات والمراحل', 'المرحلة 3: ضبط الأداء على iOS/Android بسرعة 60/120 إطاراً'],
        DevOps: ['المرحلة 1: تصميم الخوادم وتحصين الحماية', 'المرحلة 2: حاويات Docker وNginx وشهادات SSL', 'المرحلة 3: خطوط CI/CD ومراقبة 24/7'],
        Maintenance: ['المرحلة 1: تدقيق البنية التحتية والأمان', 'المرحلة 2: نسخ احتياطي مشفر وتسريع CDN', 'المرحلة 3: مراقبة مستمرة 24/7 وبروتوكول SLA'],
        Admin: ['المرحلة 1: تحديد الصلاحيات وتدفقات العمل', 'المرحلة 2: تكامل CMS وقواعد البيانات', 'المرحلة 3: تشغيل مكتب العمليات اليومي'],
        Cinematics: ['المرحلة 1: الفكرة الفيروسية ولوحة القصة بالذكاء الاصطناعي', 'المرحلة 2: توليد الفيديو عالي الدقة و3D CGI', 'المرحلة 3: تصحيح الألوان والهندسة الصوتية'],
        Consulting: ['المرحلة 1: مخطط البنية ومراجعة الأمان', 'المرحلة 2: خطة تحسين CI/CD وزمن الاستجابة', 'المرحلة 3: خارطة الطريق الاستراتيجية'],
        Software: ['المرحلة 1: المخطط الهندسي وعقود API', 'المرحلة 2: تطوير الخادم والخدمات الأساسية', 'المرحلة 3: الاختبارات الآلية والتدقيق الأمني']
      }
    },
    philosophy: {
      badge: 'فلسفة الاستوديو',
      heading: 'حيث تلتقي الدقة الهندسية بالعمق السينمائي.',
      p1: 'تأسسنا على قناعة بأن التجارب الرقمية تبلغ ذروتها عندما تتحد هندسة البرمجيات مع السرد السينمائي كتخصص واحد متكامل.',
      p2: 'يفهم مهندسونا الإضاءة وحركة الكاميرا، ويفهم فنانو 3D لدينا استهلاك المعالج والبطارية لتحقيق استقرار إنتاجي تام.',
      pillars: [
        { title: 'المنطق والقابلية للتوسع', desc: 'شيفرات نظيفة مصممة للعمل الفوري بدون أخطاء ذاكرة.' },
        { title: 'عمق سينمائي', desc: 'إضاءة متقنة وحركة كاميرا افتراضية وصوت محيطي.' },
        { title: 'رعاية مستمرة', desc: 'مراقبة 24/7، تحديثات أمان ونسخ احتياطي يومي.' },
        { title: 'مكتب العمليات', desc: 'دعم تقني موثوق وإدارة قواعد البيانات والمحتوى.' }
      ],
      cardHeaderLeft: 'نواة الاستوديو',
      cardHeaderRight: 'توقيت UTC+1',
      tagline: 'الدقة في كل إطار',
      stat1: 'مدقق',
      stat2: 'جوال',
      stat3: 'SLA'
    },
    testimonials: {
      badge: 'آراء العملاء',
      heading: 'موثوق من قبل المؤسسين والعلامات التجارية والاستوديوهات.',
      subtitle: 'شهادات موثقة من قادة الهندسة والمديرين الإبداعيين الذين أطلقوا مشاريعهم مع Codes Cinema.',
      ratingSla: 'التزام 100% بـ SLA',
      bottomPrompt: 'هل أنت مستعد لإطلاق منصتك البرمجية أو لعبتك أو حملتك الإعلانية بالذكاء الاصطناعي؟',
      bottomCta: 'ابدأ مشروعك',
      items: {
        'kora-pay-cto': { role: 'نائب رئيس الهندسة', service: 'البرمجيات وDevOps', metric: '99.99% توافر • ترحيل بدون توقف', quote: 'أعادت Codes Cinema تصميم منظومة المدفوعات وأتمتة نشر Kubernetes. انخفض زمن الاستجابة إلى أقل من 12 ملي ثانية.' },
        'luma-brand-growth': { role: 'مديرة النمو', service: 'فيديوهات إعلانية AI', metric: 'عائد 3.8x • تسليم 48 ساعة', quote: 'منحتنا إعلانات الذكاء الاصطناعي فيديو بجودة هوليوودية دون تكاليف الإنتاج الباهظة وتضاعف معدل النقر.' },
        'drift-studios-producer': { role: 'المنتج التنفيذي', service: 'ألعاب الجوال', metric: '120 FPS • iOS وAndroid', quote: 'نجحوا في تثبيت سرعة 120 هرتز على الأجهزة الرائدة مع الحفاظ على برودة الهواتف المتوسطة.' },
        'harbor-health-ops': { role: 'مديرة العمليات', service: 'الصيانة وSLA', metric: 'استجابة < 10 دقائق', quote: 'منذ الانتقال إلى خطة الصيانة 24/7 مع Codes Cinema لم نواجه أي دقيقة توقف غير مخطط لها.' },
        'nordic-retail-ops': { role: 'المؤسس والرئيس التنفيذي', service: 'الإدارة والعمليات', metric: 'تحديثات أسرع 10 مرات', quote: 'توليهم إدارة الكتالوج والصلاحيات اليومية حرر فريقنا الأساسي للتركيز على تطوير المنتجات.' },
        'solaris-media-creative': { role: 'المديرة الإبداعية', service: 'سينمائية 3D وVFX', metric: 'جودة 4K متقدمة', quote: 'قليل من الفرق تجمع بين برمجة المؤثرات والإيقاع السينمائي. النتيجة أبهرت جميع الشركاء.' }
      }
    },
    contact: {
      badge: 'تواصل مباشر',
      heading: 'لنناقش مشروعك.',
      subtitle:
        'أرسل تفاصيل مشروعك أدناه لبدء استشارة فنية متخصصة. يراجع فريقنا الهندسي المواصفات ويجيب خلال 24 ساعة عمل.',
      whatsappTitle: 'مكتب الدعم الفني المباشر عبر واتساب',
      whatsappDesc: 'حجز سريع لإعلانات الذكاء الاصطناعي، ألعاب الجوال، إعداد DevOps والاستفسارات التقنية.',
      whatsappBtn: 'تحدث عبر واتساب',
      fullName: 'الاسم الكامل *',
      namePlaceholder: 'أحمد المنصور',
      businessEmail: 'البريد الإلكتروني للعمل *',
      emailPlaceholder: 'ahmed@company.com',
      discipline: 'التخصص الرئيسي *',
      briefLabel: 'ملخص المشروع والأهداف *',
      briefPlaceholder: 'اشرح متطلباتك، المنصات المستهدفة، نطاق الصيانة أو الجدول الزمني...',
      submitBtn: 'إرسال ملخص الاستشارة',
      submittingBtn: 'جاري الإرسال إلى contact@codescinema.com...',
      sendViaEmail: 'إرسال عبر تطبيق البريد',
      successTitle: 'تم إرسال ملخص الاستشارة',
      successBody1: 'شكراً لك،',
      successBody2: 'تم إرسال طلبك بخصوص',
      successBody3: 'مباشرة إلى',
      successBody4: 'سنتواصل معك عبر',
      successBody5: 'خلال 24 ساعة عمل.',
      submitAnother: 'إرسال استشارة أخرى',
      openEmailCopy: 'فتح نسخة في البريد',
      responseTitle: 'ضمان الاستجابة',
      responseHeading: 'خلال 24 ساعة عمل',
      responseDesc: 'مراجعة مباشرة من قبل كبار المهندسين ومديري الاستوديو.',
      ndaTitle: 'سرية تامة',
      ndaHeading: 'اتفاقية عدم إفشاء (NDA) عند الطلب',
      ndaDesc: 'تبقى جميع الأكواد والملكية الفكرية والأنظمة سرية بنسبة 100%.',
      deskTitle: 'مكتب الاستوديو',
      supportEmailLabel: 'بريد الدعم',
      whatsappDirectLabel: 'واتساب مباشر',
      globalClienteleLabel: 'عملاء عالميون',
      globalClienteleValue: 'عمليات عن بُعد (UTC+1)',
      options: {
        fullstack: 'تطوير الويب الشامل (Full-Stack)',
        frontend: 'تطوير الواجهة الأمامية (Front-End)',
        backend: 'هندسة الأنظمة الخلفية والواجهات البرمجية (Back-End)',
        ai: 'فيديوهات إعلانية بالذكاء الاصطناعي وإنتاج سينمائي',
        mobile: 'تطوير ألعاب الجوال (iOS و Android)',
        software: 'هندسة البرمجيات المخصصة',
        devops: 'DevOps وإدارة الخوادم',
        maintenance: 'صيانة المواقع والدعم (SLA 24/7)',
        admin: 'مكتب الإدارة والعمليات',
        consulting: 'الاستشارات التقنية والهندسة المعمارية'
      }
    },
    footer: {
      description: 'استوديو رقمي يجمع بين الدقة الهندسية والعمق السينمائي. ألعاب جوال، برمجيات موزعة، DevOps وعمليات ويب 24/7.',
      coreEngineering: 'الهندسة الأساسية',
      operations: 'العمليات',
      connect: 'تواصل',
      whatsappChannel: 'قناة واتساب ↗',
      securityPatching: 'التحديثات الأمنية',
      speedBackups: 'السرعة والنسخ الاحتياطي',
      timelineEstimator: 'حاسبة المدة',
      clientTestimonies: 'آراء العملاء',
      rights: 'جميع الحقوق محفوظة.',
      slaStatus: 'الأنظمة تعمل بكفاءة // 99.98% SLA',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      security: 'الأمان'
    }
  },

  cn: {
    metaTitle: 'Codes Cinema | 软件工程 • 移动游戏 • 影视特效 • 运维托管',
    nav: {
      capabilities: '核心服务',
      webDev: '网站与全栈开发',
      scoping: '周期评估',
      scopingMobile: '周期评估工具',
      studio: '关于工作室',
      studioMobile: '工作室理念',
      testimonies: '客户评价',
      contact: '联系我们',
      whatsapp: 'WhatsApp',
      inquire: '立即咨询',
      startProject: '启动项目',
      selectCountry: '选择国家与语言'
    },
    hero: {
      statusPill: 'Q4 / Q1 精选项目档期开放预约',
      headlineTop: '数字精度，',
      headlineAccent: '电影级深度。',
      subtitle:
        'Codes Cinema 专注于高性能移动游戏研发、定制云端软件工程，并提供 DevOps、服务器管理及全天候 24/7 技术运维服务。',
      hookTitle: '全面提升用户参与度、性能表现与系统扩展性',
      hookBody:
        '我们打造高转化 AI 广告视频、高帧率移动游戏体验、定制云端应用以及稳定可靠的 DevOps 基础设施。',
      exploreCta: '探索核心能力',
      estimatorCta: '项目周期评估',
      kpiUptime: 'SLA 可用性',
      kpiTriage: '快速响应',
      cardTitle: '工作室技术矩阵',
      cardCore: '专业技术矩阵',
      cardStatus: '生产就绪',
      learnMore: '了解此领域',
      requestCall: '预约技术沟通',
      tabs: { mobile: '手游', software: '软件', devops: '运维', care: '托管', admin: '管理' },
      previews: {
        mobile: {
          tag: '移动游戏开发',
          title: 'Unity 引擎与原生移动架构',
          desc: '针对 iOS 与 Android 原生编译优化，实现流畅 60/120 FPS 触控响应与低功耗着色器管线。',
          metrics: [
            { label: '目标帧率', value: '稳定 120 FPS' },
            { label: '支持平台', value: 'iOS & Android' },
            { label: '性能调优', value: '零内存泄漏' }
          ]
        },
        software: {
          tag: '定制软件工程',
          title: '高扩展云端微服务与 API',
          desc: '分布式系统架构、实时 WebSocket 通信、PostgreSQL/Redis 缓存与自动化 CI/CD 部署。',
          metrics: [
            { label: '服务可用性', value: '99.98% SLA' },
            { label: '系统架构', value: '微服务架构' },
            { label: '数据同步', value: '亚毫秒级' }
          ]
        },
        devops: {
          tag: 'DEVOPS 与服务器管理',
          title: '云端架构、Linux 与 CI/CD 流水线',
          desc: 'Linux 服务器运维、防火墙加固、零停机 CI/CD 部署、Docker 容器编排与 24/7 健康监控。',
          metrics: [
            { label: '基础设施', value: '裸金属 & 云端' },
            { label: '自动化', value: 'CI/CD 流水线' },
            { label: '在线率 SLA', value: '99.99% 在线' }
          ]
        },
        care: {
          tag: '网站维护与全天候托管',
          title: '24/7 主动监控与安全防护',
          desc: '全天候健康检查、故障实时告警、零日漏洞修补、每日加密云端备份与速度调优。',
          metrics: [
            { label: '实时监控', value: '24/7 不间断' },
            { label: '数据备份', value: '每日加密备份' },
            { label: '故障响应', value: '< 15 分钟 SLA' }
          ]
        },
        admin: {
          tag: '后台管理与运营支持',
          title: '专属后台技术运营团队',
          desc: '日常内容发布、CMS 审核、数据库完整性核查、用户权限控制与持续技术支持。',
          metrics: [
            { label: '服务响应', value: '当日处理' },
            { label: '运营范围', value: 'CMS & 数据库' },
            { label: '权限控制', value: 'RBAC 审计' }
          ]
        }
      }
    },
    services: {
      badge: '工作室核心能力',
      heading: '为极致性能与长期稳定而生。',
      subtitle: '从移动游戏研发、分布式云端软件到 24/7 网站维护与后台技术运营，每一步都精益求精。',
      inquireTrack: '咨询此服务',
      items: {
        'mobile-games': {
          title: '移动游戏开发',
          description: '基于 Unity 的 iOS 与 Android 高性能手游工程，具备流畅触控物理、低功耗着色器与商业化系统。',
          highlights: ['iOS & Android 原生编译优化', '流畅 60 & 120 FPS 触控体验', '内购、Live-ops 与广告聚合'],
          tags: ['iOS & Android', 'Unity 手游', '触控优化', '性能分析']
        },
        software: {
          title: '定制软件工程',
          description: '关键业务分布式系统、高并发微服务、定制 API 集成及 99.98% 高可用云端应用。',
          highlights: ['分布式云与微服务架构', '实时 WebSocket 与 GraphQL', '高扩展数据库与缓存层设计'],
          tags: ['分布式云', '全栈开发', '实时 API', '微服务']
        },
        devops: {
          title: 'DevOps 与服务器管理',
          description: '全方位 Linux 服务器运维与云端 DevOps：自动化 CI/CD、Docker 编排、Nginx 代理、SSL 与 24/7 监控。',
          highlights: ['Linux 部署与防火墙安全加固', '零停机 CI/CD 自动化部署', 'Docker 编排与负载均衡'],
          tags: ['Linux 运维', 'Docker & CI/CD', 'Nginx & SSL', 'AWS & 云服务器', '自动备份']
        },
        maintenance: {
          title: '网站维护与 24/7 托管',
          description: '为企业网站与门户提供全方位预防性维护：全天候监控、漏洞修补、每日备份与性能优化。',
          highlights: ['24/7 运行检测与故障秒级告警', '每日自动加密云端备份', '核心系统、CMS 与安全补丁管理'],
          tags: ['可用性监控', '安全补丁', '性能优化', '灾备恢复']
        },
        admin: {
          title: '后台管理与运营台',
          description: '可靠的后台技术运营管理：内容更新、CMS 审核、数据库维护、角色权限管理与商品同步。',
          highlights: ['日常内容与产品目录维护', '用户权限管理与数据库运维', '专属 SLA 技术支持通道'],
          tags: ['CMS 运营', '数据库管理', '权限管控', '日常运维']
        },
        cinematics: {
          title: 'AI 广告视频与影视制作',
          description: '极具吸引力的 AI 广告视频、产品宣传片与写实 3D 特效，用强钩子叙事大幅提升广告转化率。',
          highlights: ['爆款脚本策划与 AI 视频生成', '写实 3D CGI 与虚拟摄影机', '适配 TikTok、Reels 与网页投放'],
          tags: ['AI 广告视频', '爆款短片', '产品宣传', '3D CGI', '音效设计']
        },
        consulting: {
          title: '技术架构咨询',
          description: '提供数字化转型顾问、架构安全审计、自动化生产管线搭建与可扩展技术路线规划。',
          highlights: ['全面架构安全与性能审计', '自动化生产工作流设计', '可扩展技术路线图规划'],
          tags: ['架构审计', '流程优化', '技术战略', '性能调优']
        }
      }
    },
    estimator: {
      badge: '交互式规划工具',
      heading: '评估您的开发周期与范围。',
      subtitle: '选择您的业务领域与项目复杂度，即时计算精准的交付周期与阶段架构。',
      step1: '1. 选择服务领域',
      step2: '2. 选择项目复杂度',
      step3: '3. 目标交付周期',
      baseWeeksPrefix: '基准:',
      weeksUnit: '周',
      rangeMin: '7 周 (快速冲刺)',
      rangeMid: '14 周 (季度周期)',
      rangeMax: '24 周 (深度研发)',
      calculatedWindow: '评估周期窗口',
      estimatedTimeline: '预计交付时间',
      recommendedSprint: '推荐冲刺阶段架构',
      applyCta: '应用到咨询表单',
      whatsappCta: '通过 WhatsApp 发送 (+234 816 049 8340)',
      tracks: {
        Fullstack: '全栈 Web 应用',
        Frontend: '前端界面 (UI)',
        Backend: '后端系统 (API)',
        Games: '移动游戏',
        Software: '软件工程',
        DevOps: 'DevOps 运维',
        Maintenance: '网站维护',
        Admin: '后台运营',
        Cinematics: 'AI 广告视频',
        Consulting: '技术咨询'
      },
      tiers: {
        mvp: { name: 'Sprint MVP', desc: '概念验证、核心机制实现与快速上线验证。' },
        production: { name: '完整生产版', desc: '工作室级架构、全面 QA 测试与性能调优。' },
        enterprise: { name: '企业级规模', desc: '全平台生态、24/7 SLA 保障与专属运营团队。' }
      },
      phases: {
        Games: ['阶段 1：触控物理与核心玩法原型', '阶段 2：资源优化、着色器与关卡架构', '阶段 3：iOS/Android 性能分析与 60/120 FPS 调优'],
        DevOps: ['阶段 1：服务器架构、安全加固与防火墙配置', '阶段 2：Docker 容器化、Nginx 代理与 SSL 自动化', '阶段 3：零停机 CI/CD 流水线与 24/7 监控'],
        Maintenance: ['阶段 1：基础设施与安全漏洞全面审计', '阶段 2：自动加密备份与 CDN 加速调优', '阶段 3：24/7 持续监控与 SLA 应急响应'],
        Admin: ['阶段 1：角色权限划分与内容流程梳理', '阶段 2：CMS 后台、数据库与目录集成', '阶段 3：专属 SLA 运营台日常运转'],
        Cinematics: ['阶段 1：爆款创意策划、AI 分镜与提示词设计', '阶段 2：高清 AI 视频生成、3D CGI 与动态图形', '阶段 3：调色、动态混音与多平台母带输出'],
        Consulting: ['阶段 1：系统架构蓝图与安全审查', '阶段 2：CI/CD 管线与延迟优化方案', '阶段 3：战略技术路线图与交付'],
        Software: ['阶段 1：系统架构蓝图、数据模型与 API 契约', '阶段 2：高并发核心 API 与云端服务开发', '阶段 3：自动化测试、渗透安全审计与预发布']
      }
    },
    philosophy: {
      badge: '工作室理念',
      heading: '工程严谨性与电影级表现力的交汇。',
      p1: '我们坚信，当软件工程架构与电影级视觉叙事作为统一整体协同工作时，数字产品才能释放出最大潜能。',
      p2: '我们的工程师深谙光影与镜头节奏，3D 艺术家同样精通 Draw Call、着色器开销与电池功耗优化。',
      pillars: [
        { title: '逻辑与可扩展性', desc: '清晰模块化的高性能代码库，确保实时扩展与零内存泄漏。' },
        { title: '电影级深度', desc: '富有感染力的灯光、虚拟摄影调度与空间音效。' },
        { title: '持续护航', desc: '24/7 运行监控、安全补丁更新与每日加密备份。' },
        { title: '运营支持台', desc: '可靠的后台技术支持、数据库维护与日常内容发布。' }
      ],
      cardHeaderLeft: '工作室核心',
      cardHeaderRight: 'UTC+1 时区',
      tagline: '每一帧皆显精准',
      stat1: '严格审计',
      stat2: '移动性能',
      stat3: '服务保障'
    },
    testimonials: {
      badge: '客户评价',
      heading: '深受开发者、品牌方与工作室信赖。',
      subtitle: '来自与 Codes Cinema 合作交付生产级软件、手游、AI 广告及运维体系的技术负责人与创始人的真实反馈。',
      ratingSla: '100% 准时交付',
      bottomPrompt: '准备好启动您的下一个软件平台、移动游戏或 AI 广告项目了吗？',
      bottomCta: '启动您的项目',
      items: {
        'kora-pay-cto': { role: '工程副总裁', service: '软件与 DevOps', metric: '99.99% 在线率 • 零停机迁移', quote: 'Codes Cinema 重构了我们的支付接入管线并自动化了多区域 Kubernetes 部署，延迟降至 12ms 以下。' },
        'luma-brand-growth': { role: '增长负责人', service: 'AI 广告视频', metric: '3.8x ROAS • 48小时交付', quote: '他们的 AI 广告视频制作让我们无需高昂实拍预算就获得了大片级商业宣传片，首周点击率翻倍。' },
        'drift-studios-producer': { role: '执行制作人', service: '移动游戏开发', metric: '120 FPS • iOS & Android', quote: '他们不仅在旗舰机型上稳锁 120Hz，还让中端 Android 设备的发热控制保持在极佳水平。' },
        'harbor-health-ops': { role: '运营总监', service: '网站维护与 SLA', metric: '< 10分钟故障响应', quote: '接入 Codes Cinema 的 24/7 维护计划后，我们的门户系统从未出现过哪怕一分钟的计划外停机。' },
        'nordic-retail-ops': { role: '创始人兼 CEO', service: '后台管理与运营', metric: '目录更新提速 10 倍', quote: '专属管理台接管了我们的多店铺目录与权限流程，让核心团队能够专注于产品本身。' },
        'solaris-media-creative': { role: '创意总监', service: '3D 影视与特效', metric: '4K 体积渲染管线', quote: '很少有团队能同时精通着色器算法与电影节奏。他们交付的预告片令所有投资方赞叹不已。' }
      }
    },
    contact: {
      badge: '直接沟通',
      heading: '让我们探讨您的项目。',
      subtitle:
        '请在下方提交您的项目需求与技术指标。我们的工程团队将在 24 小时工作日内评估方案并与您联系。',
      whatsappTitle: 'WhatsApp 技术直连台',
      whatsappDesc: '快速预约 AI 广告制作、移动游戏研发、DevOps 部署及各类技术咨询。',
      whatsappBtn: 'WhatsApp 在线沟通',
      fullName: '您的姓名 *',
      namePlaceholder: '张伟',
      businessEmail: '工作邮箱 *',
      emailPlaceholder: 'zhang@company.com',
      discipline: '主要业务领域 *',
      briefLabel: '项目需求与目标 *',
      briefPlaceholder: '请描述您的具体需求、目标移动平台、维护范围或交付里程碑...',
      submitBtn: '提交项目咨询简报',
      submittingBtn: '正在发送至 contact@codescinema.com...',
      sendViaEmail: '使用邮件客户端直接发送',
      successTitle: '咨询简报已发送',
      successBody1: '感谢您，',
      successBody2: '。您关于',
      successBody3: '的项目简报已直接发送至',
      successBody4: '我们将在 24 个工作小时内回复至',
      successBody5: '。',
      submitAnother: '提交另一份简报',
      openEmailCopy: '在邮件应用中打开副本',
      responseTitle: '响应保障',
      responseHeading: '24 个工作小时内回复',
      responseDesc: '由资深架构师与工作室总监直接评估对接。',
      ndaTitle: '严格保密',
      ndaHeading: '可签署双向保密协议 (NDA)',
      ndaDesc: '所有游戏资产、源代码及业务系统均享有 100% 机密保护。',
      deskTitle: '工作室联络台',
      supportEmailLabel: '支持邮箱',
      whatsappDirectLabel: 'WHATSAPP 直连',
      globalClienteleLabel: '服务范围',
      globalClienteleValue: '全球远程协作 (UTC+1)',
      options: {
        fullstack: '全栈 Web 开发（端到端交钥匙平台）',
        frontend: '前端界面开发（专注 UI/UX 与 React/Next.js）',
        backend: '后端与 API 工程（数据库与微服务专精）',
        ai: 'AI 广告视频与影视制作（高转化）',
        mobile: '移动游戏开发 (iOS & Android)',
        software: '定制软件工程',
        devops: 'DevOps 与服务器管理',
        maintenance: '网站维护与托管 (24/7 SLA)',
        admin: '后台管理与运营台',
        consulting: '技术咨询与系统架构'
      }
    },
    footer: {
      description: '将严谨工程技术与电影级深度融合的数字工作室。专注移动游戏、分布式软件、DevOps 运维及 24/7 网站托管。',
      coreEngineering: '核心工程',
      operations: '运维与支持',
      connect: '联系方式',
      whatsappChannel: 'WhatsApp 通道 ↗',
      securityPatching: '安全补丁更新',
      speedBackups: '性能优化与备份',
      timelineEstimator: '开发周期评估',
      clientTestimonies: '客户评价',
      rights: '保留所有权利。',
      slaStatus: '系统运行正常 // 99.98% SLA',
      privacy: '隐私政策',
      terms: '服务条款',
      security: '安全声明'
    }
  }
};

TRANSLATIONS.uk = {
  ...TRANSLATIONS.us,
  metaTitle: 'Codes Cinema | Full-Stack Web • Front-End & Back-End • Mobile Games • DevOps',
  nav: {
    ...TRANSLATIONS.us.nav,
    inquire: 'Enquire'
  },
  hero: {
    ...TRANSLATIONS.us.hero,
    previews: {
      ...TRANSLATIONS.us.hero.previews,
      fullstack: {
        ...TRANSLATIONS.us.hero.previews.fullstack,
        desc: 'Complete end-to-end web engineering. Next.js 15, React 19, TypeScript, PostgreSQL, and Docker containerisation from schema to live deployment.'
      },
      frontend: {
        ...TRANSLATIONS.us.hero.previews.frontend,
        title: 'Pixel-Perfect Reactive UI & State Architecture'
      },
      devops: {
        ...TRANSLATIONS.us.hero.previews.devops,
        desc: 'Linux server administration, firewall hardening, automated zero-downtime CI/CD pipelines, Docker containerisation, and 24/7 server health telemetry.'
      }
    }
  },
  webModes: {
    ...TRANSLATIONS.us.webModes,
    inquireBtn: 'Enquire This Track',
    modes: {
      ...TRANSLATIONS.us.webModes.modes,
      fullstack: {
        ...TRANSLATIONS.us.webModes.modes.fullstack,
        deliverables: [
          'End-to-end architecture (Client UI + API + Cloud Database)',
          'Authentication (JWT / OAuth2 / Sessions) & Role-Based Access Control',
          'Real-time data synchronisation & state hydration',
          'Stripe / LemonSqueezy / PayPal payment integration',
          'Automated CI/CD deployment pipelines & zero-downtime hosting'
        ]
      },
      backend: {
        ...TRANSLATIONS.us.webModes.modes.backend,
        desc:
          'Rock-solid back-end engineering for web and mobile clients. We architect normalised relational schemas, resilient caching layers, secure authentication, and scalable microservices designed for 99.98% uptime.',
        deliverables: [
          'High-concurrency REST, GraphQL & gRPC API design with OpenAPI docs',
          'PostgreSQL / MySQL / Redis database architecture & migration strategies',
          'Enterprise auth: OAuth2, JWT, multi-tenant RBAC & webhook endpoints',
          'Asynchronous queue processing (BullMQ / Celery) & background workers',
          'Docker containerisation, Nginx reverse proxies & cloud scaling'
        ],
        bestFor:
          'Projects scaling user traffic, modernising legacy infrastructure, or building specialised server-side capabilities for front-end teams.'
      }
    }
  },
  services: {
    ...TRANSLATIONS.us.services,
    inquireTrack: 'Enquire Track',
    items: {
      ...TRANSLATIONS.us.services.items,
      frontend: {
        ...TRANSLATIONS.us.services.items.frontend,
        highlights: [
          'React 19, Next.js, Vue & Tailwind CSS architecture',
          'Fluid state management, API hydration & caching',
          'Responsive design across mobile, tablet & desktop',
          'Optimised for Core Web Vitals & accessibility'
        ]
      },
      backend: {
        ...TRANSLATIONS.us.services.items.backend,
        description:
          'Resilient server-side architectures, high-throughput microservices, normalised relational/NoSQL schemas, and secure API gateways engineered for 99.98% uptime under load.'
      },
      'mobile-games': {
        ...TRANSLATIONS.us.services.items['mobile-games'],
        description:
          'High-performance mobile game engineering for iOS and Android powered by Unity. Dynamic touch physics, battery-conscious shaders, monetisation systems, and engaging handheld mechanics.'
      },
      maintenance: {
        ...TRANSLATIONS.us.services.items.maintenance,
        tags: ['Uptime Monitoring', 'Security Patches', 'Speed Optimisation', 'Disaster Recovery']
      },
      admin: {
        ...TRANSLATIONS.us.services.items.admin,
        highlights: [
          'Routine content & catalogue data curation',
          'User access control & database administration',
          'Dedicated SLA helpdesk response channel'
        ]
      },
      consulting: {
        ...TRANSLATIONS.us.services.items.consulting,
        tags: ['Architecture Audit', 'Pipeline Optimisation', 'Tech Stack Strategy', 'Performance Triage']
      }
    }
  },
  estimator: {
    ...TRANSLATIONS.us.estimator,
    applyCta: 'Apply Scope To Enquiry Form',
    phases: {
      ...TRANSLATIONS.us.estimator.phases,
      Games: [
        'Phase 1: Touch Control Physics & Graybox Mechanics',
        'Phase 2: Mobile Asset Optimisation, Shaders & Level Architecture',
        'Phase 3: iOS/Android Profiling, Battery Draw & 60/120 FPS Tuning'
      ],
      DevOps: [
        'Phase 1: Server Architecture, Security Hardening & Firewall Setup',
        'Phase 2: Docker Containerisation, Nginx Reverse Proxy & SSL Automation',
        'Phase 3: Automated Zero-Downtime CI/CD Pipelines & 24/7 Server Monitoring'
      ],
      Admin: [
        'Phase 1: Role Delegation & Content Workflow Mapping',
        'Phase 2: Back-Office CMS, Database & Catalogue Integration',
        'Phase 3: Dedicated SLA Operations Desk & Daily Routines'
      ],
      Cinematics: [
        'Phase 1: Viral Hook Concept, AI Storyboard & Video Prompt Architecture',
        'Phase 2: High-Resolution AI Video Generation, 3D CGI & Motion Graphics',
        'Phase 3: Colour Grading, Dynamic Sound Mixing & Multi-Platform Mastering'
      ],
      Consulting: [
        'Phase 1: Architecture Blueprint & Security Review',
        'Phase 2: CI/CD Pipeline & Latency Optimisation Plan',
        'Phase 3: Strategic Roadmapping & Scalability Hand-off'
      ]
    }
  },
  philosophy: {
    ...TRANSLATIONS.us.philosophy,
    heading: 'Where engineering rigour meets cinematic depth.'
  },
  testimonials: {
    ...TRANSLATIONS.us.testimonials,
    items: {
      ...TRANSLATIONS.us.testimonials.items,
      'nordic-retail-ops': {
        ...TRANSLATIONS.us.testimonials.items['nordic-retail-ops'],
        metric: '10x Faster Catalogue Updates',
        quote:
          'Having their dedicated admin desk manage our multi-store catalogue, RBAC permissions, and daily order workflows freed our core team to focus entirely on product and partnerships.'
      }
    }
  },
  contact: {
    ...TRANSLATIONS.us.contact,
    subtitle:
      'Submit your project brief below to initiate a technical consultation. Our engineering team reviews specifications and responds within 24 business hours.'
  },
  footer: {
    ...TRANSLATIONS.us.footer,
    description:
      'Boutique digital studio uniting engineering rigour with cinematic depth. Engineering mobile games, distributed software, DevOps & server management, and 24/7 web operations.'
  }
};

