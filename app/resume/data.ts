import {
  ApiGatewayIcon,
  BambooIcon,
  DynamoIcon,
  GitHubActionsIcon,
  KafkaIcon,
  LambdaIcon,
  LinuxIcon,
  LoadBalancerIcon,
  MongoDBIcon,
  NodeIcon,
  PostgreSQLIcon,
  PythonIcon,
  RDSIcon,
  ReactIcon,
  SQSIcon,
  TypeScriptIcon,
} from '@/components/icons';

export const about = {
  title: 'About me',
  description:
    'I am a Tech Lead and Cloud Engineer with 4+ years of experience building and modernizing enterprise-scale systems on AWS. Currently leading a 7-engineer distributed team across 4 countries at Liberty Mutual — one of the top 5 property & casualty insurers in the US — through a mission-critical IBM Mainframe-to-cloud modernization program. My work sits at the intersection of technical depth and people leadership: I own architecture decisions, drive stakeholder alignment, and still get hands dirty in the codebase.',
  details: [
    {
      name: 'Name',
      value: 'Edward Ramirez',
    },
    {
      name: 'Experience',
      value: '4+ Years',
    },
    {
      name: 'Languages',
      value: 'English, Spanish, Portuguese',
    },
    {
      name: 'Location',
      value: 'Colombia — Remote / US',
    },
  ],
};

export const experience = {
  icon: '',
  title: 'Professional Experience',
  description:
    'From Mainframe modernization at Fortune 500 scale to distributed team leadership across 4 countries — here is a full view of the roles, problems, and impact that define my engineering career.',
  details: [
    {
      title: 'Tech Lead',
      subtitle: 'Liberty Mutual — Home Insurance',
      date: 'Mar 2026 – Present',
      location: 'Bogotá, Colombia',
      url: 'https://www.libertymutual.com',
      achievements: [
        'Lead 6 engineers, a QA and a BA across 4 countries modernizing a P&C policy platform with 1.8M+ active home and auto policies and 26M+ policy transactions a year (new business, endorsements, renewals, cancellations, reinstatements).',
        'Architected a near-real-time replica API (Precisely CDC → Kafka → PostgreSQL) serving ~50M requests/month at 170+ peak RPS, cutting P95 latency 65% and P99 45% vs. the legacy mainframe API.',
        'Built an AI-assisted validation pipeline (rules → MCP live-data checks → confidence-gated LLM classification → human review), cutting triage of ~9,500 bi-weekly discrepancies from 3 days to 2–4 hours and saving 300+ engineering hours a year; adopted by 2 more teams.',
        `Led the policy data integration that enabled Liberty's customer-service platform, used by 23,000 daily users, to service the Renters line of business, delivering all actionable scope within an 8-week milestone.`,
        'Act as technical decision-maker on API contracts and domain models: blocked a proposed fix that would have misclassified policy reactivations as cancellations, and designed a typed Umbrella exposure schema across DB2 and IMS sources.',
      ],
    },
    {
      title: 'Senior Software Engineer',
      subtitle: 'Liberty Mutual — Auto Insurance',
      date: 'Oct 2024 – Feb 2026',
      location: 'Bogotá, Colombia',
      url: 'https://www.libertymutual.com',
      achievements: [
        'Migrated nearly 1B records across 270+ tables from IBM IMS to PostgreSQL on AWS, orchestrating extraction, Kafka publishing and ingestion through Node.js Kafka consumers and Lambda functions into PostgreSQL and DynamoDB.',
        'Designed and launched a mainframe-to-cloud comparison service that detects replication discrepancies early, enabling developers to remediate defects before they reach downstream API consumers.',
        'Reduced bulk data insert errors by 90% by engineering a pipeline using temporary PostgreSQL tables and auto-scaling Lambda functions to clean, process, and ingest terabytes of data reliably',
        'Built a resilient data-cleaning and encryption service for sensitive customer records, implementing retry logic, concurrency control, and rate-limit handling against third-party APIs',
        'Ran technical spikes and proofs of concept to evaluate architectural approaches, improve system performance and de-risk critical design decisions.',
      ],
    },
    {
      title: 'Software Engineer',
      subtitle: 'Liberty Mutual — Surety Division',
      date: 'May 2022 – Sep 2024',
      location: 'Bogotá, Colombia',
      url: 'https://www.libertymutual.com',
      achievements: [
        'Led production support and incident response for a critical serverless AWS application',
        "Worked as technical and cultural bridge between US Product Owners and engineering teams in Colombia and Chile, enabling Liberty Mutual's product expansion into LATAM markets",
        'Built AWS CDK infrastructure-as-code for deploying S3, Lambda, IAM Roles, Glue Crawlers, and KMS Keys',
        'Implemented an ETL pipeline migrating data from Parquet files to Oracle DB using AWS Glue and Athena, orchestrated via Step Functions',
        'Developed presigned URL handling for large XML file ingestion, improving system resilience and reducing errors in high-volume data processing workflows',
      ],
    },
    {
      title: 'Full Stack Engineer',
      subtitle: 'LitLingo Technologies — AI Communication Compliance SaaS',
      date: 'Jan 2022 – Apr 2022',
      location: 'Medellín, Colombia',
      url: 'https://www.litlingo.com',
      achievements: [
        'Built and maintained a TypeScript + React analytics dashboard supporting real-time compliance monitoring features',
        'Optimized data retrieval for dashboard analytics using SQLAlchemy within a Flask backend',
        'Integrated CI/CD pipelines using GitHub Actions and semantic versioning',
      ],
    },
    {
      title: 'Software Engineer',
      subtitle: 'Melt Studio',
      date: 'Oct 2021 – Dec 2021',
      location: 'Medellín, Colombia',
      url: 'https://www.meltstudio.co',
      achievements: [
        'Delivered React features in an agile team, implementing Redux Saga for state management and securing online payment flows',
      ],
    },
  ],
};

export const education = {
  icon: '',
  title: 'Education',
  description: '',
  details: [
    {
      title: 'Universidad Ind. de Santander',
      subtitle: 'Engineering, Bachelor',
      date: '2017 - 2022',
    },
    {
      title: 'Michigan University',
      subtitle: 'Python Specialization',
      date: '2020 - 2021',
    },
    {
      title: 'Michigan University',
      subtitle: 'Design Web Applications with Django and JavaScript',
      date: '2020',
    },
    {
      title: 'LinkedIn Learning',
      subtitle: 'Devops with AWS',
      date: '2022',
    },
    {
      title: 'A Cloud Guru',
      subtitle: 'AWS Solutions Architect Course',
      date: '2023',
    },
    {
      title: 'Google',
      subtitle: 'Git and GitHub crash course',
      date: '2021',
    },
  ],
};

export const techStack = {
  icon: '',
  title: 'Skills',
  description:
    "My technical landscape is rich with a variety of tools and technologies that I,ve mastered through hands-on application and continuous learning. Here are some of the key technologies I've specialized in:",
  details: [
    {
      title: 'Full Stack',
      items: [
        {
          icon: ReactIcon,
          name: 'React',
        },
        {
          icon: NodeIcon,
          name: 'NodeJS',
        },
        {
          icon: TypeScriptIcon,
          name: 'TypeScript',
        },
        {
          icon: PythonIcon,
          name: 'Python',
        },
      ],
    },
    {
      title: 'AWS Services',
      items: [
        {
          icon: LambdaIcon,
          name: 'API Lambda',
        },
        {
          icon: ApiGatewayIcon,
          name: 'API Gateway',
        },

        {
          icon: LoadBalancerIcon,
          name: 'Load Balancer',
        },
        {
          icon: SQSIcon,
          name: 'Queue Service',
        },
        // {
        //   icon: '/icons/amazons3.svg',
        //   name: 'Simple Storage Service',
        // },
      ],
    },
    {
      title: 'Databases',
      items: [
        {
          icon: DynamoIcon,
          name: 'DynamoDB',
        },
        {
          icon: MongoDBIcon,
          name: 'MongoDB',
        },
        {
          icon: RDSIcon,
          name: 'AWS RDS',
        },
        {
          icon: PostgreSQLIcon,
          name: 'PostgreSQL',
        },
      ],
    },
    {
      title: 'DevOps',
      items: [
        {
          icon: GitHubActionsIcon,
          name: 'GitHub Actions',
        },
        {
          icon: BambooIcon,
          name: 'Bamboo',
        },
        {
          icon: LinuxIcon,
          name: 'Linux Scripting',
        },
        {
          icon: KafkaIcon,
          name: 'Kafka',
        },
      ],
    },
  ],
};
