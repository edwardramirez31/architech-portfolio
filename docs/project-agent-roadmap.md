# Project Agent Roadmap — Subagents for This Portfolio Site

> A backlog of Claude Code subagents **scoped to this repo** (Edward Ramirez's Next.js 14
> portfolio at primearchitech.com). These target the site's own goals — recruit inbound,
> thought leadership, showcase projects, personal brand — and the concrete gaps in the
> current codebase.
>
> For general-purpose dev agents (architect, backend-creator, db-designer, etc.) see
> the companion file **`docs/agent-roadmap.md`**.
>
> **How to use this file:** Pick an agent below, expand its summary into a full
> `docs/agent-brief.md`, then invoke the **`agent-architect`** agent
> (`.claude/agents/agent-architect.md`) to generate the deployable `.claude/agents/<name>.md`.
>
> **Defaults for every agent here (unless noted):**
> - **Save location:** project → `.claude/agents/<name>.md` (these are specific to this repo).
> - **Stack stance:** opinionated to this site — Next.js 14 App Router, TypeScript (strict),
>   Tailwind, Radix/shadcn, Framer Motion, Contentful (blog), Formspree (contact), Vercel.
> - **Tone:** match `CLAUDE.md` voice — authoritative, outcome-oriented, quantified, no filler
>   ("passionate about," "results-driven," "synergy").
> - **Non-negotiables baked into every site-touching agent** (from `CLAUDE.md`):
>   accent `#00ff99` / bg `#1c1c22` are fixed; Framer Motion only (no CSS keyframes);
>   blog content stays in Contentful (never hardcode posts); don't rename routes without
>   updating `Nav.tsx` + `MobileNav.tsx` + `Footer.tsx`; check `next.config.mjs` before
>   adding remote image domains; run `npm run lint` before declaring done.
> - **Complement, don't duplicate** the existing `ui-agent` (visual/screenshot work) and
>   `agent-architect` (agent generation).

---

## Legend

- **Tools** use real Claude Code names (`Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`,
  `WebFetch`, `WebSearch`, `Task`, MCP `mcp__*`).
- **Model:** `opus` for heavy reasoning, `sonnet` for most build/edit work, `haiku` for narrow tasks.
  Omit to inherit the parent.
- ⭐ = highest-leverage given the site's current gaps.

---

# Category 1 — Discoverability & Reach (recruit inbound)

## ⭐ seo-optimizer
**Purpose:** Make the site rank and preview well for recruiters and search engines.
**Domain:** Next.js App Router SEO, structured data, social previews.
**Core responsibilities:**
- Add per-page `generateMetadata` (title, description, canonical) to every route; fix the root
  `description: 'Primer Architech portfolio'` typo in `app/layout.tsx`.
- Add OpenGraph + Twitter card metadata and an OG image strategy for home, resume, projects, and blog posts.
- Emit JSON-LD structured data: `Person` (Edward), `Article` (blog posts), `BreadcrumbList`.
- Generate `app/sitemap.ts` and `app/robots.ts`; ensure blog post URLs are included (Contentful-driven).
- Audit alt text and semantic landmarks (`<main>`, `<nav>`, headings order).
**Constraints:** Never invent metrics or claims in meta descriptions — pull facts from `docs/career-context.md`. Don't change the accent color or rename routes. Keep blog data sourced from Contentful.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`.
**Model:** `sonnet`.
**Output:** Metadata additions, `sitemap.ts`/`robots.ts`, JSON-LD components, and a short SEO audit summary.

## analytics-and-funnel
**Purpose:** Measure the recruiter funnel so Edward knows what converts.
**Domain:** Privacy-friendly web analytics + event tracking.
**Core responsibilities:**
- Integrate lightweight analytics (Vercel Analytics or Plausible) site-wide.
- Track high-intent events: resume-PDF CTA click, contact-form submit success, project live/GitHub clicks, blog reads.
- Add a simple funnel/readme describing what each event means for recruiting signal.
**Constraints:** Privacy-first — consent where required, no PII, no fingerprinting. No heavy client bundles that hurt Core Web Vitals. Don't track form *contents*, only submit success.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`.
**Model:** `sonnet`.
**Output:** Analytics wiring + tracked-events doc.

## performance-optimizer
**Purpose:** Keep Core Web Vitals green — fast first impression for recruiters.
**Domain:** Next.js performance, Lighthouse, asset optimization.
**Core responsibilities:**
- Audit and convert raw `<img>`/background images to `next/image`; right-size assets in `/public/assets`.
- Trim font weights (Raleway loads 8 weights), lazy-load Swiper and below-the-fold Framer Motion sections.
- Reduce bundle size; flag heavy client components that could be server components.
- Report before/after Lighthouse + Web Vitals.
**Constraints:** Don't break existing animations or the visual identity. Don't add remote image domains without updating `next.config.mjs`. Read-mostly; targeted edits only.
**Tools:** `Read`, `Edit`, `Glob`, `Grep`, `Bash`.
**Model:** `sonnet`.
**Output:** Performance edits + a Lighthouse/Web Vitals before-after report.

## accessibility-auditor
**Purpose:** Ensure WCAG 2.1 AA compliance — functional a11y beyond what `ui-agent` checks visually.
**Domain:** Web accessibility.
**Core responsibilities:**
- Audit keyboard navigation, visible focus states, and focus order across all routes.
- Check color contrast (especially `#00ff99` on `#1c1c22`), ARIA roles, and form labels (contact form).
- Verify alt text, heading hierarchy, and landmark structure.
**Constraints:** Read-only audit + suggested fixes (let `ui-agent` or a build agent apply visual changes). Never weaken the design system to "fix" contrast — propose accessible alternatives within the palette.
**Tools:** `Read`, `Glob`, `Grep`, `Bash` (read-only).
**Model:** `sonnet`.
**Output:** Prioritized a11y report with file:line references and remediations.

---

# Category 2 — Thought Leadership & Brand (blog)

## ⭐ blog-author
**Purpose:** Draft blog posts for `/virtue-in-motion` in Edward's voice — **draft-only, never publishes**.
**Domain:** Technical writing on Mainframe-to-cloud, serverless architecture, distributed leadership, and Edward's philosophy ("Virtue in Motion").
**Core responsibilities:**
- Draft full posts with a hook-first opening and clear narrative arc, grounded in real work from `docs/career-context.md`.
- Output Contentful-ready content: body as rich text / clean markdown, plus a suggested slug, meta description (≤160 chars), and featured-image concept.
- Suggest internal links to relevant projects/experience and 2–3 SEO keywords.
**Constraints:** **Draft-only** — produces text for Edward to paste/publish in Contentful; never writes to the codebase as a post and never calls the Management API. No filler phrases; always quantify impact; never fabricate metrics — ask if a number is unknown. Match the `CLAUDE.md` tone.
**Tools:** `Read`, `Write`, `Glob`, `Grep`, `WebSearch`.
**Model:** `sonnet`.
**Output:** A markdown draft file (in a scratch/drafts location) with frontmatter for slug/description/image — ready to copy into Contentful.

## content-repurposer
**Purpose:** Turn one blog post into multi-platform content.
**Domain:** Social content for LinkedIn, YouTube (@primearchitech), and X.
**Core responsibilities:**
- Convert a post into: a hook-first LinkedIn post, a YouTube short/long script outline, and an X thread.
- Tailor format and length per platform; keep Edward's authoritative, quantified voice.
- Suggest a posting angle tied to his differentiators (Mainframe modernization, distributed leadership).
**Constraints:** No lazy copy-paste of the same text across platforms. No filler. Don't fabricate stats — reuse the post's real numbers.
**Tools:** `Read`, `Write`, `WebSearch`.
**Model:** `sonnet`.
**Output:** One markdown file per platform draft.

---

# Category 3 — Showcase Projects

## ⭐ project-showcase-builder
**Purpose:** Add a newly shipped project to the Projects section, end to end.
**Domain:** This repo's projects data + icon system.
**Core responsibilities:**
- Append a new entry to `app/projects/data.ts` matching the existing object shape
  (`{ id, title, category, description, stack, image, live, github }`).
- Write a voice-matched description (outcome-oriented, quantified where possible).
- Map the project's tech stack to existing components in `components/icons/index.tsx`; flag any
  missing icon and scaffold a new SVG icon component following the existing pattern
  (`fill="currentColor"`, `<title>` for a11y) if needed.
- Place the project screenshot under `/public/assets/projects/` and reference it correctly.
**Constraints:** Don't break icon imports or the data shape. Don't invent project metrics — ask Edward. Run `npm run lint` before finishing.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`.
**Model:** `sonnet`.
**Output:** Updated `data.ts` entry (+ new icon component if required) and a summary of what was added.

---

# Category 4 — Quality & Reliability

## ⭐ e2e-testing-agent
**Purpose:** Stand up functional end-to-end tests for the site (none exist today).
**Domain:** Playwright E2E for a Next.js app.
**Core responsibilities:**
- Set up Playwright (config, scripts, CI workflow) — currently only `next lint` exists.
- Write E2E covering: nav between all routes, the contact form happy/error path (Formspree `xgegojvq`),
  the Swiper project carousel selection, blog list + detail rendering (Contentful), and 375px/1280px responsive behavior.
- Apply flake-prevention and test isolation (web-first assertions, no `sleep`-based waits, independent test state).
- Add a GitHub Actions job to run tests on PRs.
**Constraints:** Complements `ui-agent` (visual screenshots) with functional assertions — don't duplicate its screenshot workflow. Don't submit the real contact form to Formspree in CI (mock/intercept). No fixed timeouts.
**Tools:** `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`, plus Playwright MCP (`mcp__playwright__*`).
**Model:** `sonnet`.
**Output:** Playwright config + test specs + CI workflow + a coverage summary of flows tested.

---

# Category 5 — Content Integrity & Maintenance

## content-data-steward
**Purpose:** Keep career/content data consistent across the site's sources of truth.
**Domain:** This repo's content data files.
**Core responsibilities:**
- When a role, achievement, or metric changes, propagate it across `docs/career-context.md`,
  `app/resume/data.ts` (experience/education/about/techStack), `app/projects/data.ts`,
  and `components/shared/Stats.tsx`.
- Flag drift/contradictions between these files and `CLAUDE.md`.
- Enforce tone guidelines (quantified, outcome-oriented, no filler).
**Constraints:** Never fabricate or inflate metrics — treat `docs/career-context.md` as the source of truth and ask when data is missing. Don't touch visual/layout code.
**Tools:** `Read`, `Edit`, `Glob`, `Grep`.
**Model:** `sonnet`.
**Output:** Synced edits + a short diff summary of what changed and where.

## link-and-asset-checker
**Purpose:** Catch broken links, missing assets, and image-config drift.
**Domain:** Site maintenance / link hygiene.
**Core responsibilities:**
- Crawl internal routes and external links (LinkedIn, GitHub, YouTube, resume S3 PDF, project live URLs) for 404s/redirects.
- Verify referenced images exist under `/public/assets/` and that remote image hosts are allowed in `next.config.mjs`.
- Spot-check Contentful/S3 asset URLs resolve.
**Constraints:** Read-only report — don't auto-edit. Be polite to external hosts (no aggressive crawling).
**Tools:** `Read`, `Glob`, `Grep`, `Bash`, `WebFetch`.
**Model:** `haiku` (escalate to `sonnet` if reasoning over results).
**Output:** A link/asset health report grouped by severity.

---

# Suggested build order

1. **seo-optimizer** — biggest gap, directly serves the "recruit inbound" goal.
2. **blog-author** — turns Edward's real work into thought-leadership content (low risk, draft-only).
3. **e2e-testing-agent** — safety net before further changes; the site has zero tests today.
4. **project-showcase-builder** — automates a recurring, repo-specific chore.
5. **analytics-and-funnel** — start measuring what the SEO/content work drives.
6. **performance-optimizer** + **accessibility-auditor** — polish the first impression.
7. **content-repurposer** + **content-data-steward** + **link-and-asset-checker** — ongoing leverage and hygiene.

---

_Maintained as the project-scoped backlog for generating Claude Code subagents via `agent-architect`.
Add new ideas here, then expand into a brief before generating. See `docs/agent-roadmap.md` for
general-purpose dev agents._
