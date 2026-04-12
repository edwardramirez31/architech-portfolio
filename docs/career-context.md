# Edward Ramirez — Career Context

> This document is intended for Claude Code agents and automated tooling.
> It provides a structured, narrative overview of Edward's background,
> experience, technical identity, and career goals — to be used when
> building, updating, or extending his portfolio site.
> Last updated: April 2026

---

## Who Edward Is

Edward Ramirez is a Tech Lead and Cloud Engineer based in Bucaramanga, Colombia,
with 4+ years of experience building and modernizing enterprise-scale systems on AWS.
He currently works at EPAM Systems, embedded at Liberty Mutual — one of the top 5
property & casualty insurers in the United States — where he leads a 7-engineer
distributed team across 4 countries through a mission-critical IBM Mainframe-to-cloud
modernization program.

His background spans the full engineering stack: backend systems in Node.js and
TypeScript, serverless AWS architecture, React frontends, CI/CD pipelines, and
hands-on distributed team leadership. He is equally comfortable owning architecture
decisions, translating business requirements from stakeholders, and mentoring engineers
into senior roles.

His driving motivation: building systems that run quietly in the background and touch
millions of people at once. At Liberty Mutual, that is the daily reality of what his
team ships.

---

## Personal & Contact Information

- **Full name:** Edward Ramirez
- **Location:** Bucaramanga, Colombia (open to remote and US-based roles)
- **Email:** edal_ramirez@hotmail.com
- **Phone:** +57 312 5712497
- **LinkedIn:** https://www.linkedin.com/in/edward-ramirez
- **GitHub:** https://github.com/edwardramirez31
- **Portfolio:** https://primearchitech.com
- **YouTube:** https://www.youtube.com/@primearchitech
- **Languages:** Spanish (native), English (B2 – Proficient), Portuguese (Proficient)

---

## Current Role

**Tech Lead**
EPAM Systems @ Liberty Mutual Insurance - Home Division
March 2026 – Present · Bogotá, Colombia

Liberty Mutual is a Fortune 500, top 5 property & casualty insurer in the US.
Edward leads the backend engineering effort for the Home Insurance division's
Mainframe modernization program.

### Responsibilities

- Lead a 7-engineer distributed team across 4 countries (US, Colombia, Chile, and others)
- Own architecture decisions for a Mainframe-to-AWS cloud migration program
- Act as technical liaison between US-based Product Owners and LATAM engineering teams
- Translate complex business requirements into backend features that deliver measurable business value
- Drive sprint execution, stakeholder demos, and delivery commitments
- Conduct technical interviews to hire Senior and Mid-level Engineers
- Mentor engineers daily, unblocking work and guiding career growth

### Key Achievements (Tech Lead)

- **Architected a near real-time data replication pipeline** integrating Precisely Connect CDC,
  Apache Kafka, and PostgreSQL — reducing legacy Mainframe IMS database read load by 30%
- **Designed and launched a Mainframe-to-cloud data comparison service** that identified and
  resolved 50%+ of replication errors across the full PostgreSQL schema, directly improving
  API data reliability for downstream clients
- **Resolved 80+ API data discrepancies** sprint-over-sprint between the Mainframe and cloud
  APIs, maintaining a zero-backlog defect policy across the entire project lifecycle
- **Grew the team** by conducting technical interviews that hired Senior and Mid-level Engineers
  to accelerate modernization delivery

---

## Previous Experience

### Software Engineer — Serverless & Cloud

**EPAM Systems @ Liberty Mutual Insurance — Auto Division**
October 2024 – February 2026 · Bogotá, Colombia

Worked in the backend engineering effort for the Auto Insurance division's
Mainframe modernization program.

**Key contributions:**

- Developed RESTful endpoints in NestJS microservices using OOP and SOLID principles to query PostgreSQL via Prisma, transform data, and deliver responses according to defined schemas.
- Built and optimized Kafka message consumers to ingest and process change events from the mainframe, persisting data into PostgreSQL and DynamoDB.
- Designed and ran technical Spikes and Proofs of Concept (POCs) to evaluate technical approaches, improve system performance, and de-risk critical architectural decisions.
- Orchestrated the end-to-end migration process, extracting data from the mainframe, pushing it to Kafka, and ingesting it through AWS Lambda functions and Kafka consumers written in Node.js.
- Designed and created relational schemas for PostgreSQL, ensuring optimized querying via Prisma ORM.
- **Reduced bulk data insert errors by 90%** by engineering a pipeline using temporary
  PostgreSQL tables and auto-scaling Lambda functions to clean, process, and ingest
  terabytes of data reliably
- **Built a resilient data-cleaning and encryption service** for sensitive customer records,
  implementing retry logic, concurrency control, and rate-limit handling against third-party
  APIs during a large-scale migration

---

### Software Engineer — Serverless & Cloud

**EPAM Systems @ Liberty Mutual Insurance — Surety Division**
May 2022 – September 2024 · Bogotá, Colombia

Delivered high-impact serverless solutions on AWS for Liberty Mutual's Surety platform,
operating within a large-scale, event-driven microservices architecture.

**Key contributions:**

- Led production support and incident response for a critical serverless AWS application,
  maintaining service availability and driving root cause resolution under SLA pressure
- Built AWS CDK infrastructure-as-code for deploying S3, Lambda, IAM Roles, Glue Crawlers,
  and KMS Keys, enabling secure and repeatable deployments across environments
- Implemented an ETL pipeline migrating data from Parquet files to Oracle DB using AWS Glue
  and Athena, orchestrated via Step Functions
- Engineered presigned URL handling for large XML file ingestion, improving system resilience
  and reducing errors in high-volume data processing workflows
- Enhanced data security by implementing AWS Glue crawlers for automated schema detection
  and encryption at rest
- Delivered backend service that reduced 30% of legacy Mainframe IMS database read load
- **Served as technical and cultural bridge** between US Product Owners and engineering teams
  in Colombia and Chile, enabling Liberty Mutual's product expansion into LATAM markets

---

### Full Stack Engineer

**LitLingo Technologies** — AI-Powered Communication Compliance SaaS
January 2022 – April 2022 · Medellín, Colombia
https://www.litlingo.com

- Built and maintained a TypeScript + React analytics dashboard supporting real-time
  compliance monitoring features
- Optimized data retrieval for dashboard analytics using SQLAlchemy within a Flask backend
- Integrated CI/CD pipelines using GitHub Actions and semantic versioning

---

### Software Engineer (Frontend)

**Melt Studio**
October 2021 – December 2021 · Medellín, Colombia
https://www.meltstudio.co

- Delivered React features in an agile team, implementing Redux Saga for state management
  and securing online payment flows

---

## Education

| Degree / Course                                    | Institution                         | Year        |
| -------------------------------------------------- | ----------------------------------- | ----------- |
| Engineering, Bachelor's Degree                     | Universidad Industrial de Santander | 2017 – 2022 |
| Python for Everybody Specialization                | University of Michigan              | 2020 – 2021 |
| Design Web Applications with Django and JavaScript | University of Michigan              | 2020        |
| DevOps with AWS                                    | LinkedIn Learning                   | 2022        |
| AWS Solutions Architect Course                     | A Cloud Guru                        | 2023        |
| Git and GitHub Crash Course                        | Google                              | 2021        |

---

## Technical Stack

### Backend

- Node.js, TypeScript, JavaScript
- Python, Django, Flask, NestJS, ExpressJS

### Frontend

- React, Next.js, Tailwind CSS, HTML, CSS

### AWS Services

- Lambda, API Gateway, SQS, SNS, EventBridge, S3
- DynamoDB, RDS, AWS Glue, Athena, Step Functions
- AWS CDK, IAM, KMS, CloudWatch

### Databases

- PostgreSQL, DynamoDB, MongoDB, Firebase, Oracle DB

### DevOps & CI/CD

- GitHub Actions, Atlassian Bamboo, AWS CDK
- Linux scripting, Docker

### Observability

- Datadog, Splunk, Sentry

### Data & Streaming

- Apache Kafka, Precisely Connect CDC, AWS Glue crawlers

### Methodologies

- Serverless-first architecture
- Event-driven microservices
- Agile / Scrum
- Design Patterns
- AI-assisted development

---

## Differentiators

Edward's profile is rare at his level for three compounding reasons:

1. **Mainframe modernization expertise** — Very few engineers under 30 have hands-on
   experience migrating IBM IMS Mainframe systems to cloud at production scale. This is
   high demand, low supply, and commands attention from enterprise and fintech recruiters.

2. **Cross-cultural distributed team leadership** — Leading a team across 4 countries,
   bridging US Product Owners with LATAM engineers, requires a skill set that goes well
   beyond technical execution. Edward has done this at Fortune 500 scale.

3. **End-to-end ownership** — From architecture design to stakeholder alignment to
   production support to mentoring — Edward operates across the full delivery lifecycle,
   not just within a narrow technical lane.

---

## Personal Brand Angles

- **"From Mainframe to Cloud"** — Thought leadership on legacy modernization patterns,
  CDC pipelines, and cloud migration strategy
- **Distributed team leadership** — Building and scaling globally distributed engineering
  teams across cultures and time zones
- **Serverless-first architecture** — AWS Lambda, event-driven design, CDK infrastructure

---

## Career Goals

### Target Roles

- Staff Engineer (IC track) at a cloud-native or fintech company
- Senior Engineer at a top-tier tech company
- Tech Lead at a larger organization with global engineering culture

### Target Companies (Examples)

- **Fintech:** Stripe, Brex, Nubank
- **Cloud infrastructure:** AWS, Google Cloud, Cloudflare
- **Global scale:** Shopify, Mercado Libre
- **AI / Data:** Snowflake, OpenAI

### Preferences

- **Work arrangement:** Remote-first preferred, open to US-based
- **Salary expectation:** $6,000 USD/month+
- **Notice period:** 1 month
- **Relocation:** Not open to relocation
- **Start availability:** [TODO: confirm current availability]

---

## Portfolio Projects

| #   | Project           | Tech Stack                                                             | Live URL                                | GitHub                                                  |
| --- | ----------------- | ---------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------- |
| 01  | Desafío Barichara | React, Lambda, DynamoDB, Tailwind, API Gateway, S3, Sentry, TypeScript | https://www.desafiobarichara.com        | Private                                                 |
| 02  | ComerciBeef       | HTML, CSS, PHP, JavaScript                                             | https://www.comercibeef.com             | Private                                                 |
| 03  | Pulso Polar       | React, Next.js, TypeScript, Tailwind                                   | www.pulsopolar.com                      | https://github.com/edwardramirez31/pulso-polar-frontend |
| 04  | Crypto Tweets     | React, Django, Python, Material UI                                     | https://cryptotweets.netlify.app        | Private                                                 |
| 05  | Suscripciones     | Next.js, Firebase, Node.js, Sentry                                     | https://go.suscripciones.co/o/pergamino | Private                                                 |
| 06  | Litlingo          | React, Flask, TypeScript, PostgreSQL                                   | www.litlingo.com                        | Private                                                 |

---

## Key Numbers (Stats Section)

| Metric                 | Value  |
| ---------------------- | ------ |
| Technologies used      | 25+    |
| Pull requests          | 950+   |
| AWS resources deployed | 1,000+ |
| Code commits           | 2,500+ |
| Engineers led          | 7      |
| Countries spanned      | 4      |

---

## Tone & Voice Guidelines for Portfolio Content

- **Professional but not stiff** — authoritative, clear, direct
- **Outcome-oriented** — always connect technical work to business impact
- **Avoid filler phrases** like "passionate about," "results-driven," "dynamic"
- **Use numbers wherever possible** — 30%, 90%, 7 engineers, 4 countries
- **Avoid overselling generic skills** — React and Node.js are table stakes at this level;
  Mainframe modernization, distributed leadership, and AWS depth are the differentiators

---

_This file is maintained as a source of truth for Claude Code agents.
Update after role changes, new achievements, or career pivots._
