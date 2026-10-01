# Edward Ramirez

**Tech Lead | Cloud Modernization, AWS Serverless & AI-Native Development**

📍 Colombia · ✉️ edal_ramirez@hotmail.com · [LinkedIn](https://www.linkedin.com/in/edward-ramirez) · [Portfolio](https://www.edwardramirez.me) · [GitHub](https://github.com/edwardramirez31)

---

## Summary

Tech Lead with 4 years building and modernizing P&C insurance platforms at Liberty Mutual, a top 5 US insurer. Specialized in mainframe-to-cloud migration, near-real-time data replication and event-driven AWS architectures, with hands-on experience applying AI agents to engineering workflows. Experienced leading multicultural teams across 4 countries and turning business requirements into scalable services, from architecture to production. Seeking to drive large-scale modernization and AI-enabled engineering at a global, customer-centric organization.

---

## Experience

### Tech Lead
**EPAM Systems · Client: Liberty Mutual** · 03/2026 – Present · Bogotá, Colombia

- Lead 6 engineers, a QA and a BA across 4 countries modernizing a P&C policy platform with 1.8M+ active home and auto policies and 26M+ policy transactions a year (new business, endorsements, renewals, cancellations, reinstatements).
- Architected a near-real-time replica API (Precisely CDC → Kafka → PostgreSQL) serving ~50M requests/month at 170+ peak RPS, cutting P95 latency 65% and P99 45% vs. the legacy mainframe API.
- Built an AI-assisted validation pipeline (rules → MCP live-data checks → confidence-gated LLM classification → human review), cutting triage of ~9,500 bi-weekly discrepancies from 3 days to 2–4 hours and saving 300+ engineering hours a year; adopted by 2 more teams.
- Led the policy data integration that enabled Liberty's customer-service platform, used by 23,000 daily users, to service the Renters line of business, delivering all actionable scope within an 8-week milestone.
- Act as technical decision-maker on API contracts and domain models: blocked a proposed fix that would have misclassified policy reactivations as cancellations, and designed a typed Umbrella exposure schema across DB2 and IMS sources.

### Senior Software Engineer
**EPAM Systems · Client: Liberty Mutual** · 10/2024 – 02/2026 · Bogotá, Colombia

- Migrated nearly 1B records across 270+ tables from IBM IMS to PostgreSQL on AWS, orchestrating extraction, Kafka publishing and ingestion through Node.js Kafka consumers and Lambda functions into PostgreSQL and DynamoDB.
- Designed and launched a mainframe-to-cloud comparison service that detects replication discrepancies early, enabling developers to remediate defects before they reach downstream API consumers.
- Developed NestJS REST endpoints over PostgreSQL with Prisma, applying OOP and SOLID principles, and designed optimized relational schemas.
- Cut bulk-insert errors by 90% with a temporary-table staging strategy and auto-scaling Lambda functions ingesting terabytes of data into PostgreSQL.
- Built a resilient encryption service for sensitive customer records with retry logic, concurrency control and third-party rate-limit handling.
- Ran technical spikes and proofs of concept to evaluate architectural approaches, improve system performance and de-risk critical design decisions.

### Software Engineer
**EPAM Systems · Client: Liberty Mutual** · 12/2022 – 09/2024 · Bogotá, Colombia

- Owned serverless, event-driven services on AWS (Lambda, DynamoDB, S3, EventBridge, SNS/SQS) across 10+ workflows and led production support for Liberty Mutual's Surety platform.
- Built infrastructure as code with AWS CDK in TypeScript, migrating legacy apps to CDK v2 with Jest-tested stacks for S3, IAM, Lambda and KMS.
- Implemented an ETL pipeline from Parquet files to Oracle with AWS Glue, Athena and Step Functions, and presigned URLs for resilient large XML file handling.
- Bridged US Product Owners and engineering teams in Colombia and Chile, supporting Liberty Mutual's product expansion into LATAM markets.

### Full Stack Developer
**[Melt Studio](https://www.meltstudio.co/)** · 10/2021 – 04/2022 · Medellín, Colombia

- Delivered features for client React applications in an agile team, managing complex side effects with Redux Saga and securing an online payment flow.
- For client LitLingo, maintained a TypeScript React dashboard and a Flask backend, led the migration to Next.js, and reached 75% test coverage with Jest and PyTest.
- Built Gmail, Outlook and Microsoft Teams integrations and added CI/CD with GitHub Actions and semantic release.

---

## Skills

| Area | Skills |
| :--- | :--- |
| **DevOps** | GitHub Actions, AWS, Bamboo, Datadog, Splunk |
| **Databases** | DynamoDB, RDS, Firebase, PostgreSQL, MongoDB |
| **Languages / Frameworks** | TypeScript, JavaScript, React, NestJS, Next.js, GraphQL |
| **Methodologies** | Design Patterns, Serverless, Spec-Driven Development |
| **AI** | LLM Agents, MCP, Claude Code |

## Languages

- **Spanish:** Native
- **English:** B2 – Proficient
- **Portuguese:** Proficient
