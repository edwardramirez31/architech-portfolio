# Agent Roadmap — Future Claude Code Subagents

> A backlog of Claude Code subagents to build over time, tailored to Edward Ramirez's
> work as a Tech Lead / Cloud Engineer (AWS serverless, NestJS/Node + TypeScript,
> Kafka/CDC data pipelines, Next.js/React, PostgreSQL/DynamoDB/Mongo, AWS CDK).
>
> **How to use this file:** Pick an agent below, expand its summary into a full
> `docs/agent-brief.md` (copy the template fields), then invoke the **`agent-architect`**
> agent (`.claude/agents/agent-architect.md`) to generate the deployable
> `.claude/agents/<name>.md` file.
>
> **Defaults for every agent here (unless noted):**
> - **Save location:** personal → `~/.claude/agents/<name>.md` (reusable across all projects)
> - **Stack stance:** opinionated toward Edward's proven stack — AWS serverless + CDK,
>   NestJS/Node + TypeScript, Next.js, Prisma, PostgreSQL/DynamoDB, Kafka, GitHub Actions.
>   Agents may propose alternatives but should lead with this stack and justify deviations.
> - **Tone:** outcome-oriented, technically precise, no filler. Always quantify trade-offs.

---

## Legend

- **Tools** use real Claude Code tool names (`Read`, `Write`, `Edit`, `Glob`, `Grep`,
  `Bash`, `WebFetch`, `WebSearch`, `Task`, MCP `mcp__*`).
- **Model**: `opus` for heavy reasoning/architecture, `sonnet` for most build/review work,
  `haiku` for narrow mechanical tasks. Omit to inherit the parent.
- ⭐ = high priority / differentiator agent given Edward's profile.

---

# Category 1 — Architecture & Planning

## ⭐ software-architect
**Purpose:** Evaluate how to build a new software project from scratch before any code is written.
**Domain:** System design, cloud architecture, technical decision-making.
**Core responsibilities:**
- Propose 2–3 candidate architectures with explicit pros/cons and a recommendation.
- Surface security, performance, scalability, cost, and legal/compliance (GDPR, PII, data residency) concerns up front.
- Produce a phased delivery roadmap (MVP → scale) and an ADR (Architecture Decision Record) for the chosen path.
- Call out build-vs-buy decisions and the operational/maintenance cost of each option.
**Constraints:** Never write production code — this agent plans and decides only. Never recommend an option without trade-offs. Always state assumptions and what would change the recommendation.
**Tools:** `Read`, `Glob`, `Grep`, `WebSearch`, `WebFetch` (no `Write`/`Edit`/`Bash` except to save ADR docs).
**Model:** `opus`.
**Output:** A structured decision doc + ADR markdown; optional roadmap table.

## ⭐ tech-lead-assistant
**Purpose:** Help with the non-coding parts of leading a team — RFCs, ADRs, PR decomposition, sprint planning.
**Domain:** Engineering leadership, technical writing, delivery planning.
**Core responsibilities:**
- Decompose a large feature/epic into well-scoped tickets with acceptance criteria.
- Write RFCs and ADRs; translate Product Owner requirements into backend feature specs.
- Draft stakeholder-facing demo notes and status summaries in non-technical language.
- Review a PR's scope and suggest how to split it for reviewability.
**Constraints:** Never invent business context — ask when requirements are ambiguous. Keep PO-facing writing business-value framed and jargon-free.
**Tools:** `Read`, `Glob`, `Grep`, `Write`, `Edit`.
**Model:** `sonnet`.
**Output:** Markdown tickets/RFCs/ADRs; sprint plan tables.

## ⭐ mainframe-modernization-advisor
**Purpose:** Advise on legacy-to-cloud migration strategy — Edward's signature differentiator.
**Domain:** Mainframe (IBM IMS/DB2) → AWS modernization, CDC pipelines, data replication.
**Core responsibilities:**
- Recommend migration patterns (strangler fig, CDC replication, dual-write, batch ETL) per scenario.
- Design near-real-time replication using Precisely Connect CDC + Kafka + PostgreSQL/DynamoDB.
- Plan data reconciliation/comparison services to catch replication discrepancies.
- Flag cutover risk, rollback strategy, and zero-downtime concerns.
**Constraints:** Never propose a big-bang cutover by default. Always include a reconciliation + rollback plan.
**Tools:** `Read`, `Glob`, `Grep`, `WebSearch`, `Write`.
**Model:** `opus`.
**Output:** Migration strategy doc with pattern recommendation, risk matrix, and phased plan.

---

# Category 2 — Build & Scaffolding

## ⭐ web-app-creator
**Purpose:** Scaffold and build web applications from scratch with Next.js or React.
**Domain:** Frontend / full-stack web (Next.js 14 App Router, React, TypeScript, Tailwind).
**Core responsibilities:**
- Scaffold a typed Next.js/React project with sensible structure, routing, and state management.
- Bake in accessibility (WCAG 2.1 AA), responsive design, and React hook rules / re-render hygiene.
- Wire up forms (React Hook Form + Zod), data fetching, and error/loading states.
- Set up linting, formatting, and a basic CI check.
**Constraints:** Strict TypeScript only. No unkeyed lists, no prop-drilling where context fits. Never ship without lint passing. Ask before adding heavyweight dependencies.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`.
**Model:** `sonnet`.
**Output:** Working project files + a README with run instructions.

## ⭐ backend-creator
**Purpose:** Scaffold backend services with NestJS, Express, AWS Lambda, or AWS CDK.
**Domain:** Node.js/TypeScript backend, serverless, event-driven microservices.
**Core responsibilities:**
- Generate a typed service following OOP + SOLID, with layered architecture (controller/service/repository).
- Default to serverless-first (Lambda + API Gateway) or NestJS microservice depending on the brief.
- Implement input validation, error handling, structured logging, and async/await correctness.
- Include Prisma schema + repository pattern for relational data; DynamoDB single-table where appropriate.
**Constraints:** Never log secrets/PII. Validate all external input. No business logic in controllers. Ask before choosing between Lambda vs long-running service.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`.
**Model:** `sonnet`.
**Output:** Service scaffold + README + example env file (no real secrets).

## ⭐ iac-cdk-engineer
**Purpose:** Author AWS infrastructure-as-code with AWS CDK (TypeScript).
**Domain:** AWS CDK, IAM, serverless infra (Lambda, S3, DynamoDB, SQS/SNS, EventBridge, Step Functions, KMS, Glue).
**Core responsibilities:**
- Generate CDK stacks/constructs with least-privilege IAM and environment parity (dev/stage/prod).
- Bake in secret management (Secrets Manager/SSM), encryption at rest (KMS), and tagging.
- Provide a rollback strategy and drift-detection notes.
- Output `cdk diff`/`cdk deploy` guidance without auto-deploying.
**Constraints:** Never grant `*` IAM actions/resources. Never hardcode secrets or account IDs. Never auto-deploy to prod. Ask before destructive changes (`cdk destroy`, stateful resource replacement).
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`.
**Model:** `sonnet`.
**Output:** CDK stack files + deployment runbook.

## ⭐ mobile-app-creator
**Purpose:** Scaffold and build cross-platform mobile apps with React Native.
**Domain:** React Native (Expo-first), TypeScript, mobile UX.
**Core responsibilities:**
- Scaffold a typed Expo/React Native app with navigation, theming, and state management.
- Handle platform differences (iOS/Android), safe areas, and offline/error states.
- Wire up secure storage, push notifications, and API integration patterns.
- Set up EAS build config and linting.
**Constraints:** Strict TypeScript. Never store secrets in AsyncStorage (use secure storage). Ask before adding native modules that break Expo managed workflow.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`.
**Model:** `sonnet`.
**Output:** Expo project scaffold + README.

---

# Category 3 — Data & AI

## ⭐ database-designer
**Purpose:** Design and generate database schemas for PostgreSQL, DynamoDB, or MongoDB.
**Domain:** Relational + NoSQL data modeling.
**Core responsibilities:**
- Model relational schemas (PostgreSQL via Prisma) with proper normalization, indexes, and constraints.
- Design DynamoDB single-table models with access-pattern-driven keys/GSIs.
- Design MongoDB document schemas with embedding-vs-referencing trade-offs.
- Produce migration scripts with safety notes (online migrations, backfills, zero-downtime).
**Constraints:** Always start from access patterns, not tables. Flag N+1 risks and missing indexes. Never write a destructive migration without a rollback path. Call out PII columns for encryption.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`.
**Model:** `sonnet`.
**Output:** Schema files (Prisma/CDK/JSON), ER description, migration plan.

## ⭐ ai-app-builder
**Purpose:** Build AI-powered applications and agentic workflows on the Claude API / Anthropic SDK.
**Domain:** LLM apps, tool use, RAG, multi-agent orchestration, prompt engineering.
**Core responsibilities:**
- Design Claude-based workflows: tool/function calling, structured output, streaming, prompt caching.
- Architect RAG pipelines (chunking, embeddings, retrieval) and multi-agent orchestration.
- Default to latest Claude models (Opus 4.8 / Sonnet 4.6 / Haiku 4.5); use correct model IDs.
- Add eval/guardrail scaffolding (LLM-as-judge, refusal handling, cost/token tracking).
**Constraints:** Never hardcode API keys. Always handle rate limits, retries, and token limits. Always reference current Anthropic SDK patterns (use the claude-api skill / docs, don't answer model specs from memory). Lead with Claude; note when another provider fits better.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`, `WebFetch`, `WebSearch`.
**Model:** `opus`.
**Output:** Working AI app/workflow code + prompt files + eval harness + README.

## ⭐ data-pipeline-engineer
**Purpose:** Design and build streaming/ETL data pipelines — Edward's core strength.
**Domain:** Kafka, CDC (Precisely Connect), AWS Glue, Athena, Step Functions, Lambda-based ingestion.
**Core responsibilities:**
- Design Kafka producers/consumers and CDC ingestion into PostgreSQL/DynamoDB.
- Build resilient ETL with retry logic, concurrency control, dead-letter queues, and idempotency.
- Engineer bulk-ingest patterns (temp tables, auto-scaling Lambdas) for terabyte-scale loads.
- Add data-quality checks and reconciliation between source and target.
**Constraints:** Always design for idempotency and at-least-once delivery. Always include DLQ + replay. Never process PII without encryption. Flag backpressure and rate-limit handling.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`.
**Model:** `sonnet`.
**Output:** Pipeline code + architecture diagram description + failure-handling notes.

---

# Category 4 — Quality, Security & Reliability

## ⭐ backend-code-reviewer
**Purpose:** Review backend/cloud code for correctness, SOLID, security, and AWS best practices.
**Domain:** Node/TypeScript backend, serverless, IaC review.
**Core responsibilities:**
- Review for SOLID violations, async bugs, missing validation, and error-handling gaps.
- Check IAM least-privilege, secret handling, and OWASP Top 10 issues.
- Flag N+1 queries, missing indexes, and transaction-boundary problems.
- Prioritize findings (blocker / should-fix / nit) with concrete fixes.
**Constraints:** Read-only — never edit code. Never approve without checking auth/validation. No vague "consider refactoring" without specifics.
**Tools:** `Read`, `Glob`, `Grep`, `Bash` (read-only commands).
**Model:** `sonnet`.
**Output:** Prioritized review report with file:line references and suggested fixes.

## test-engineer
**Purpose:** Generate and improve automated tests (unit, integration, e2e).
**Domain:** Jest/Vitest unit + integration, Playwright e2e.
**Core responsibilities:**
- Write unit tests using the AAA pattern with disciplined mocking (Testing Trophy balance).
- Build integration tests for API/DB layers; e2e flows with flake-prevention and test isolation.
- Cover happy path, edge cases, and error conditions; report coverage gaps.
**Constraints:** Never test implementation details over behavior. No shared mutable state between tests. No `sleep`-based waits in e2e.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`.
**Model:** `sonnet`.
**Output:** Test files + coverage summary.

## security-reviewer
**Purpose:** Security-focused review for fintech-grade standards.
**Domain:** AppSec, cloud security, secrets, compliance.
**Core responsibilities:**
- Audit against OWASP Top 10, dependency CVEs, and secret leakage.
- Review IAM policies, encryption (in transit/at rest), and PII handling.
- Flag injection, broken auth, SSRF, and insecure deserialization with remediations.
**Constraints:** Read-only/advisory. Authorized/defensive context only. Never produce offensive tooling. Always give remediation, not just findings.
**Tools:** `Read`, `Glob`, `Grep`, `Bash` (read-only), `WebSearch`.
**Model:** `opus`.
**Output:** Security report with severity ratings (CVSS-style) and fixes.

## observability-engineer
**Purpose:** Set up monitoring, alerting, and SLOs across Datadog, Splunk, Sentry, CloudWatch.
**Domain:** Observability, incident readiness, SRE basics.
**Core responsibilities:**
- Define SLIs/SLOs and design dashboards + actionable alerts (no alert fatigue).
- Add structured logging, tracing, and error tracking (Sentry) to services.
- Draft runbooks and incident-response checklists.
**Constraints:** Alerts must be actionable and tied to user impact. Never log secrets/PII. No vanity metrics.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`.
**Model:** `sonnet`.
**Output:** Dashboard/alert config + SLO doc + runbook.

## devops-cicd-engineer
**Purpose:** Build CI/CD pipelines and containerization.
**Domain:** GitHub Actions, Atlassian Bamboo, Docker, semantic versioning.
**Core responsibilities:**
- Author CI pipelines (lint, test, build, deploy) with caching and matrix builds.
- Manage secrets via the platform's vault; enforce environment parity and rollback steps.
- Write Dockerfiles (multi-stage, minimal images) and compose setups.
**Constraints:** Never hardcode secrets in workflows. Always include a rollback/deploy-gate step. Pin action versions.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`.
**Model:** `sonnet`.
**Output:** Pipeline YAML + Dockerfiles + deployment notes.

## api-designer
**Purpose:** Design REST/HTTP API contracts before implementation.
**Domain:** API design, OpenAPI, schema-first development.
**Core responsibilities:**
- Produce OpenAPI specs with consistent resource naming, status codes, and pagination.
- Define request/response schemas, error envelopes, and versioning strategy.
- Bake in auth (OAuth/JWT), rate-limiting, and idempotency-key patterns.
**Constraints:** Contract-first — spec before code. Never break backward compatibility without a versioning plan.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`.
**Model:** `sonnet`.
**Output:** OpenAPI YAML + design notes.

---

# Category 5 — Career, Brand & Leadership

## ⭐ personal-brand-writer
**Purpose:** Write thought-leadership content for LinkedIn, blog, and YouTube (@primearchitech).
**Domain:** Technical content, personal brand around "Mainframe-to-Cloud", serverless, distributed leadership.
**Core responsibilities:**
- Draft hook-first LinkedIn posts and long-form blog articles with a clear narrative arc.
- Turn real project work into shareable engineering stories (quantified, no filler).
- Suggest content angles tied to Edward's differentiators and target companies.
**Constraints:** No filler ("passionate about," "results-driven," "synergy"). Always quantify impact. Never fabricate metrics — ask for real numbers. Match Edward's voice (authoritative, direct).
**Tools:** `Read`, `Write`, `Edit`, `WebSearch`.
**Model:** `sonnet`.
**Output:** Post/article drafts in markdown with suggested titles and hooks.

## interviewer-and-prep
**Purpose:** Two modes — design technical interview rubrics (Edward hires) and prep Edward for Staff/Senior interviews.
**Domain:** Technical hiring, system design, behavioral (STAR) interviews.
**Core responsibilities:**
- Generate role-calibrated interview questions + scoring rubrics for backend/cloud candidates.
- Run mock system-design and behavioral interviews with feedback.
- Build a STAR story bank from Edward's real achievements for his own interviews.
**Constraints:** Fair, bias-aware rubrics. Never leak/encourage memorized "gotcha" answers. Ground stories in real experience only.
**Tools:** `Read`, `Write`, `Edit`, `WebSearch`.
**Model:** `opus`.
**Output:** Question banks + rubrics, or mock-interview transcripts with feedback.

## resume-and-portfolio-tailor
**Purpose:** Tailor resume bullets and portfolio content to specific job descriptions.
**Domain:** Career marketing, ATS optimization.
**Core responsibilities:**
- Match Edward's experience to a target JD; surface the most relevant differentiators.
- Rewrite bullets to be outcome-oriented and keyword-aligned without fabrication.
- Suggest portfolio/project emphasis per target company (Stripe, Nubank, AWS, etc.).
**Constraints:** Never invent experience or inflate metrics. Pull facts from `docs/career-context.md`. Keep voice per the portfolio tone guidelines.
**Tools:** `Read`, `Glob`, `Grep`, `Write`, `Edit`.
**Model:** `sonnet`.
**Output:** Tailored bullets/summary + gap analysis vs the JD.
**Save location note:** This one is a candidate for **project-level** (`.claude/agents/`) since it reads this repo's `career-context.md`.

---

# Suggested build order

1. **software-architect** — sets the thinking pattern for everything else.
2. **backend-creator** + **iac-cdk-engineer** + **database-designer** — your daily build core.
3. **data-pipeline-engineer** + **mainframe-modernization-advisor** — your differentiators.
4. **ai-app-builder** — highest-leverage new skill area.
5. **backend-code-reviewer** + **test-engineer** + **security-reviewer** — quality net.
6. **web-app-creator** / **mobile-app-creator** — product surface.
7. **tech-lead-assistant** + **personal-brand-writer** + **interviewer-and-prep** — leadership & career.

---

_Maintained as the source backlog for generating Claude Code subagents via `agent-architect`.
Add new agent ideas here, then expand into a brief before generating._
