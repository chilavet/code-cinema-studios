// Codes Cinema Studios — Enterprise Legal Policies & Security Architecture
// Last Updated: November 13, 2026

export const LEGAL_POLICIES = {
  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    tagline: 'Client Confidentiality, Data Sovereignty & Zero Commercial Tracking',
    lastUpdated: 'November 13, 2026',
    summary:
      'Codes Cinema operates as a boutique digital engineering studio. We believe your technical specifications, business plans, and personal communication belong exclusively to you. We do not sell, rent, or monetize client data, nor do we run cross-site tracking or third-party advertising pixels.',
    sections: [
      {
        id: 'sovereignty',
        heading: '1. Data Sovereignty & Studio Commitment',
        content: [
          'At Codes Cinema (operated at codescinema.com), client privacy and technical confidentiality are foundational to our engineering practice. We are a fee-for-service software engineering and digital operations studio — not an advertising network or data broker.',
          'We do not sell, license, lease, or monetize your personal details, project briefs, technical schemas, or corporate correspondence under any circumstance. All intellectual property, project data, and communications shared with us remain your exclusive property.'
        ]
      },
      {
        id: 'collection',
        heading: '2. Information We Collect',
        content: [
          'We collect only the minimal data required to evaluate, design, develop, deploy, and maintain custom software platforms on your behalf:',
          '• Consultation & Discovery Inquiries: Full name, company or project name, corporate email address, selected engineering discipline, estimated timeline, and project brief submitted through our inquiry and scope estimator modules.',
          '• Client Technical Materials: Source code repositories, architectural diagrams, API schemas, design mockups, and staging server credentials provided voluntarily during active contract execution.',
          '• Operational Diagnostics: Anonymized server logs, browser user-agent, regional geolocation (derived from IP address for country and language routing), and request timestamps collected automatically to ensure system availability and protect against brute-force intrusion.'
        ]
      },
      {
        id: 'usage',
        heading: '3. Purpose & Lawful Basis of Processing',
        content: [
          'We process your data strictly under the following lawful bases:',
          '• Contractual Necessity (Art. 6(1)(b) GDPR): To prepare technical proposals, cost estimates, milestone statements of work, and execute contracted software engineering deliverables.',
          '• Legitimate Business Interests (Art. 6(1)(f) GDPR): To safeguard our network infrastructure, monitor 24/7 uptime for maintenance subscribers, and prevent fraudulent activity.',
          '• Legal & Statutory Compliance (Art. 6(1)(c) GDPR): To fulfill accounting, taxation, and statutory audit obligations.'
        ]
      },
      {
        id: 'zero-trackers',
        heading: '4. Zero Third-Party Advertising & Sub-Processors',
        content: [
          'Our website and client applications are completely free of third-party advertising cookies, social media tracking pixels, and behavioral retargeting scripts.',
          'We work only with strictly vetted, enterprise-tier infrastructure sub-processors essential to our operations:',
          '• Cloud Server Hosting: Hostinger International Ltd. (EU/US enterprise server hosting and DNS resolution).',
          '• Version Control & CI/CD: GitHub Inc. (encrypted private repositories and automated continuous deployment workflows).',
          '• Transactional Email Relay: FormSubmit / Enterprise SMTP relays (encrypted transmission of inquiry forms directly to contact@codescinema.com).'
        ]
      },
      {
        id: 'encryption',
        heading: '5. Storage, Encryption & Security Safeguards',
        content: [
          'All client communication, server configurations, and database snapshots are defended with robust cryptographic standards:',
          '• Transport Layer Security: Mandatory TLS 1.3 encryption across all web traffic and API endpoints.',
          '• Storage at Rest: Encrypted disk partitions and AES-256 encrypted off-site database snapshots.',
          '• Environment Isolation: Client staging environments, development worktrees, and production nodes are strictly segregated to prevent cross-tenant contamination.'
        ]
      },
      {
        id: 'retention',
        heading: '6. Data Retention & Erasure Policy',
        content: [
          '• Uncontracted Inquiries: Discovery briefs that do not lead to an active contract are permanently expunged within 90 days upon request.',
          '• Contracted Codebases: Upon project completion and final milestone sign-off, client source repositories are archived or transferred to client-owned organizations according to client instructions.',
          '• Statutory Records: Financial invoices and milestone acceptance agreements are retained for the legally mandated statutory tax period (typically 5 to 7 years).'
        ]
      },
      {
        id: 'rights',
        heading: '7. Your Global Privacy Rights (GDPR, CCPA/CPRA, UK DPA)',
        content: [
          'Regardless of your geographic location, Codes Cinema extends the following fundamental privacy rights to all clients and visitors:',
          '• Right to Access: You may request a complete export of all personal information and communication records we hold regarding you.',
          '• Right to Rectification: You may request immediate correction of inaccurate or incomplete information.',
          '• Right to Erasure ("Right to be Forgotten"): You may request the permanent deletion of your inquiry and contact records, subject to statutory accounting requirements.',
          '• Right to Restrict or Object: You may restrict processing or withdraw previously granted consent at any time without penalty.'
        ]
      },
      {
        id: 'contact',
        heading: '8. Data Protection Officer & Privacy Desk',
        content: [
          'For any privacy inquiries, data export requests, or erasure petitions, please contact our dedicated Privacy Desk:',
          '• Email: contact@codescinema.com',
          '• Attention: Data Protection & Confidentiality Lead',
          '• Response Time SLA: All verified requests receive written acknowledgment within 24 business hours.'
        ]
      }
    ]
  },

  terms: {
    id: 'terms',
    title: 'Terms of Service',
    tagline: 'Transparent Engineering Agreements, 100% IP Assignment & Guaranteed SLA',
    lastUpdated: 'November 13, 2026',
    summary:
      'These Terms govern all technical consulting, custom full-stack development, mobile game engineering, DevOps administration, and ongoing maintenance retainers provided by Codes Cinema Studios. We operate on transparent milestones and 100% intellectual property ownership assignment upon payment.',
    sections: [
      {
        id: 'engagement',
        heading: '1. Contractual Engagement & Scope of Work',
        content: [
          'These Terms of Service ("Terms") constitute a legally binding agreement between you (the "Client") and Codes Cinema Studios ("Codes Cinema", "we", "us").',
          'All bespoke software engineering, UI design, API architecture, mobile game development, DevOps setup, and ongoing website maintenance are executed pursuant to a mutually confirmed Statement of Work (SOW), technical proposal, or written sprint agreement defining specific deliverables, timelines, and fees.'
        ]
      },
      {
        id: 'ip-ownership',
        heading: '2. 100% Intellectual Property (IP) Transfer & Source Code Ownership',
        content: [
          '• Full IP Assignment: Upon full settlement of the final milestone invoice for a contracted project, Codes Cinema unconditionally assigns and transfers 100% of all intellectual property rights, copyright, and source code ownership created specifically for the client under the SOW.',
          '• No Vendor Lock-In: We do not hold code hostage. Clients receive complete Git repositories, database schema migrations, environment configuration blueprints, and deployment runbooks.',
          '• Open-Source Components: Third-party open-source libraries, frameworks, or packages utilized (such as React, Next.js, Node.js, Unity libraries, Tailwind CSS, PostgreSQL, and Linux distributions) remain governed by their respective open-source licenses (MIT, Apache 2.0, BSD).'
        ]
      },
      {
        id: 'milestones',
        heading: '3. Milestone Delivery, Testing & Acceptance Windows',
        content: [
          '• Sprint Milestones: Major projects proceed in structured phases: (1) Architecture & Technical Discovery, (2) Core Engineering & Sprint Iterations, (3) Hardening & Stress Testing, and (4) Production Deployment & Handover.',
          '• 14-Day Acceptance Window: Upon delivery of each milestone to a staging environment, the Client has 14 calendar days to review, test, and provide feedback.',
          '• Defect Remediation: Any reproducible defect or departure from the agreed SOW identified within the acceptance window will be remediated by Codes Cinema at no additional charge prior to milestone sign-off.'
        ]
      },
      {
        id: 'billing',
        heading: '4. Invoicing, Retainers & Payment Schedule',
        content: [
          '• Project Invoicing: Payments are structured by milestone tranches (e.g. 50% mobilization / 50% final deployment, or 3-stage sprint tranches) as specified in the SOW.',
          '• 24/7 Care & Maintenance Retainers: Ongoing website care, security patching, and server administration plans are billed monthly or annually in advance. Retainers may be cancelled with 30 days written notice.',
          '• Currency & Invoicing: Invoices are rendered in USD ($), EUR (€), GBP (£), or local currency equivalents through verified bank wire or commercial merchant facilities.'
        ]
      },
      {
        id: 'sla',
        heading: '5. Service Level Agreement (SLA) & Uptime Commitments',
        content: [
          '• 99.98% Uptime Commitment: For clients subscribed to our 24/7 Care & Maintenance or DevOps tiers, Codes Cinema guarantees a 99.98% monthly uptime SLA on managed server environments.',
          '• Emergency Response Desk: In the event of a Severity 1 incident (complete site or API unavailability), our on-call engineers initiate active triage within 15 minutes of synthetic probe alert.',
          '• Scheduled Maintenance: Routine server kernel patching and security updates are performed during scheduled low-traffic maintenance windows with advance notification.'
        ]
      },
      {
        id: 'confidentiality',
        heading: '6. Mutual Confidentiality & Non-Disclosure (NDA)',
        content: [
          '• Both parties agree to maintain strict confidentiality regarding all proprietary information, unreleased product roadmaps, business metrics, and codebases.',
          '• Standard Bilateral NDAs: We execute formal bilateral Non-Disclosure Agreements prior to technical discovery upon client request.',
          '• Portfolio Display: Codes Cinema reserves the right to mention project completion in its portfolio unless the client explicitly requests a white-label or strict confidential blackout in writing.'
        ]
      },
      {
        id: 'warranty',
        heading: '7. 30-Day Post-Launch Warranty & Limitation of Liability',
        content: [
          '• Complimentary 30-Day Warranty: Following production launch and handover, Codes Cinema provides a 30-day warranty covering bug fixes and adjustments for any deviation from the agreed SOW.',
          '• Limitation of Liability: Except in cases of gross negligence or willful misconduct, Codes Cinema’s total aggregate liability arising out of or related to any engagement shall not exceed the total fees paid by the client under the applicable Statement of Work.',
          '• Upstream Provider Disclaimer: We are not liable for outages caused by third-party upstream providers (e.g. cloud hosting disruptions, telecom failures, or external API modifications outside our control).'
        ]
      },
      {
        id: 'disputes',
        heading: '8. Governing Law & Dispute Resolution',
        content: [
          '• Good-Faith Negotiation: Any dispute arising under these Terms shall first be submitted to informal, good-faith technical mediation between designated executive representatives.',
          '• Binding Arbitration: If a dispute cannot be resolved informally within 30 days, it shall be resolved by confidential binding commercial arbitration.',
          '• Inquiries: contact@codescinema.com.'
        ]
      }
    ]
  },

  security: {
    id: 'security',
    title: 'Security Policy',
    tagline: 'Defense-in-Depth Architecture, Zero-Day Vulnerability Patching & Bug Bounty',
    lastUpdated: 'November 13, 2026',
    summary:
      'Security is not an afterthought at Codes Cinema — it is engineered into our architecture from the first database schema to production deployment. We enforce Linux server hardening, containerized isolation, TLS 1.3 encryption, automated daily off-site backups, and maintain a 24/7 security response desk.',
    sections: [
      {
        id: 'philosophy',
        heading: '1. Defense-in-Depth Engineering Architecture',
        content: [
          'Codes Cinema adheres to a rigorous Defense-in-Depth cybersecurity philosophy. We assume that threats exist at every layer of the technology stack and build layered protective barriers across networking, compute, application logic, and operational access.',
          'Every system designed or maintained by Codes Cinema undergoes strict threat-modeling, static code analysis (SAST), and continuous configuration audits before entering production.'
        ]
      },
      {
        id: 'infrastructure',
        heading: '2. Linux Server & Infrastructure Hardening',
        content: [
          'All production nodes managed by our DevOps & Care desks (Debian, Ubuntu LTS, AlmaLinux) are hardened according to CIS (Center for Internet Security) benchmarks:',
          '• Firewall & Access Hardening: Strict UFW/iptables rules blocking all non-essential ingress ports. SSH access is restricted to non-standard ports, key-based authentication only, and root login permanently disabled.',
          '• Intrusion Prevention: Active Fail2ban monitoring with automated dynamic IP banning against brute-force attacks on SSH, administrative routes, and API endpoints.',
          '• Unattended Security Upgrades: Automatic daily application of critical Linux kernel and system vulnerability patches.',
          '• Containerized Isolation: Production services run within isolated Docker containers with non-root user privileges, minimal base images, and read-only filesystems wherever possible.'
        ]
      },
      {
        id: 'transport',
        heading: '3. Network, Transport & Edge Security',
        content: [
          '• Mandatory TLS 1.3: All client websites, APIs, and microservices mandate modern TLS 1.3 cryptographic suites with strict HTTP Strict Transport Security (HSTS) preloading.',
          '• Automated SSL/TLS Management: Automated certificate issuance and zero-downtime 60-day renewal cycles via Let’s Encrypt and Cloudflare Edge networks.',
          '• DDoS Mitigation: Cloud-edge volumetric traffic scrubbing and automated Layer-7 rate limiting to protect API endpoints against distributed denial-of-service floods.',
          '• Secure HTTP Headers: All deployed instances deliver hardened headers: Content-Security-Policy (CSP), X-Frame-Options: DENY, X-Content-Type-Options: nosniff, and Referrer-Policy: strict-origin-when-cross-origin.'
        ]
      },
      {
        id: 'data-protection',
        heading: '4. Authentication, Secrets Management & Data at Rest',
        content: [
          '• Zero Hardcoded Credentials: No API secret, private key, or database password is ever committed to version control. All secrets are injected dynamically via encrypted environment vaults.',
          '• Cryptographic Standards: Passwords hashed with memory-hard Argon2id or bcrypt with high work factors. Cryptographically secure JSON Web Tokens (JWT) with short lifespans and rotating refresh keys.',
          '• Database Hardening: All database queries utilize parameterized SQL and modern ORM abstractions to completely eliminate SQL injection vulnerabilities. Databases are encrypted at rest with AES-256.'
        ]
      },
      {
        id: 'backups',
        heading: '5. Automated Daily Encrypted Backups & Disaster Recovery',
        content: [
          '• Daily Off-Site Snapshots: Every managed database and critical filesystem is snapshotted daily, encrypted with AES-256, and replicated to geographically separated cloud storage (GCS/S3).',
          '• Automated Integrity Verification: Automated checksum testing verifies backup integrity upon creation to prevent corrupt snapshot silent failures.',
          '• Disaster Recovery Objectives: Our infrastructure recovery runbooks guarantee a Recovery Time Objective (RTO) of < 30 minutes and a Recovery Point Objective (RPO) of < 24 hours (with real-time WAL replication available for sub-hour RPO requirements).'
        ]
      },
      {
        id: 'dependency-audits',
        heading: '6. Continuous Dependency Auditing & CVE Patching',
        content: [
          '• Automated Dependency Scans: Automated CI/CD dependency audits monitor all npm, pip, and Docker packages against the National Vulnerability Database (NVD) and GitHub Advisory Database.',
          '• Zero-Day Emergency Patching: When a critical zero-day vulnerability (CVSS Score ≥ 9.0) is publicized, our emergency security desk applies mitigation patches across all managed client servers within 4 hours.'
        ]
      },
      {
        id: 'bug-bounty',
        heading: '7. Responsible Vulnerability Disclosure (Security Desk)',
        content: [
          'Codes Cinema deeply values the contributions of the independent security research community. If you believe you have discovered a security vulnerability in our website or managed infrastructure, we encourage responsible disclosure:',
          '• How to Report: Send a detailed advisory to contact@codescinema.com including reproduction steps and proof-of-concept.',
          '• Response SLA: Initial triage confirmation within 24 hours; status updates every 48 hours until full remediation.',
          '• Safe Harbor: Codes Cinema pledges not to pursue legal action against security researchers who conduct testing in good faith, avoid service degradation, and refrain from accessing or modifying client data without authorization.'
        ]
      },
      {
        id: 'incident-desk',
        heading: '8. 24/7 Security Operations & Incident Desk',
        content: [
          '• Round-the-Clock Monitoring: Synthetic heartbeat probes ping client endpoints every 60 seconds from 8 global monitoring nodes.',
          '• Incident Response Team: On-call security engineers ready to respond to critical anomalies with a guaranteed < 15-minute SLA.',
          '• Security Inquiries: contact@codescinema.com.'
        ]
      }
    ]
  }
};

