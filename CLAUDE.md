# CLAUDE.md — Agent Briefing for Portfolio Site

## Who This Site Belongs To

Edward Ramirez is a Tech Lead and Cloud Engineer based in Colombia, currently leading
a 7-engineer distributed team at Liberty Mutual (Top 5 P&C insurer in the US) through
an IBM Mainframe-to-AWS modernization program. He has 4+ years of experience in
serverless AWS architecture, Node.js backend systems, and distributed team leadership
across 4 countries. His rare combination of Mainframe modernization expertise and
cloud-native engineering makes him a strong candidate for Staff Engineer and Senior IC
roles at top-tier tech and fintech companies.

---

## What This Site Is For

This is Edward's personal engineering portfolio. Its goals are:

1. **Recruit inbound** — Signal seniority and depth to recruiters at companies like
   Stripe, Nubank, AWS, Shopify, and Cloudflare
2. **Establish thought leadership** — Position Edward as a recognized voice in
   Mainframe modernization, serverless architecture, and distributed team leadership
3. **Showcase projects** — Demonstrate hands-on engineering ability through real,
   shipped work
4. **Personal brand** — Reflect Edward's identity as an engineer who operates at the
   intersection of technical depth and people leadership

---

## Tone & Style

- **Professional but not stiff** — authoritative, direct, outcome-oriented
- **Cloud-native engineer voice** — confident, technically precise, no fluff
- **Thought leader in modernization** — frame Mainframe-to-cloud as a niche and
  competitive advantage, not just a job description
- **Avoid:** "passionate about," "results-driven," "dynamic," "synergy," or any
  generic filler language
- **Use numbers:** 30% load reduction, 90% error reduction, 7 engineers, 4 countries,
  50%+ discrepancy resolution — always prefer quantified impact over vague claims
- **Accent color:** `#00ff99` (neon green) — used for highlights, hover states, and
  key callouts throughout the site

---

## Site Sections

The portfolio should include the following sections in this order:

| Section                | Purpose                                                                 |
| ---------------------- | ----------------------------------------------------------------------- |
| **Hero**               | Name, headline, photo, CTA to resume and contact                        |
| **About / Features**   | Brief professional summary, what Edward does and why                    |
| **Experience**         | Full work history with role, company, dates, and bullet achievements    |
| **Skills**             | Technical stack organized by category (Backend, AWS, Databases, DevOps) |
| **Projects**           | Shipped projects with tech stack, live link, and GitHub where available |
| **Stats**              | Key numbers: PRs, commits, AWS resources, technologies, engineers led   |
| **Blog / Virtue Path** | Personal writing on tech, philosophy, and life (Contentful CMS)         |
| **Contact**            | Contact form + social links                                             |

---

## Where to Find Structured Data

| Data                                             | Location                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------- |
| Full career narrative                            | `docs/career-context.md`                                                        |
| Structured career data (roles, skills, projects) | `data/career.json` — [TODO: create this file]                                   |
| Blog posts                                       | Contentful CMS via `app/api/contentful.ts`                                      |
| Project list                                     | `app/projects/data.ts`                                                          |
| Resume PDF                                       | `https://prime-architech.s3.us-east-1.amazonaws.com/docs/CV_Edward_Ramirez.pdf` |
| Tech stack icons                                 | `components/icons/index.tsx`                                                    |
| Stats                                            | `components/shared/Stats.tsx`                                                   |

---

## Tech Stack of This Site

This is a **Next.js 14** application using the App Router.

- **Framework:** Next.js 14 (TypeScript)
- **Styling:** Tailwind CSS with custom theme (`tailwind.config.ts`)
- **UI Components:** Radix UI primitives + shadcn/ui
- **Animations:** Framer Motion
- **CMS:** Contentful (blog posts)
- **Forms:** Formspree + React Hook Form + Zod
- **Icons:** FontAwesome + custom SVG components
- **Deployment:** [TODO: confirm hosting — Vercel assumed]

### Theme Tokens

```ts
colors: {
  primary: '#1c1c22',       // dark background
  accent: '#00ff99',        // neon green — main brand color
  'accent-hover': '#00e187' // hover state
}
```

---

## Key Constraints for Agents

- **Do not change the accent color** (`#00ff99`) — it is the core visual identity
- **Do not remove or rename existing routes** without checking `components/shared/Nav.tsx`
  and `components/shared/MobileNav.tsx`
- **Blog content lives in Contentful** — do not hardcode blog posts into the codebase
- **Images are served from `/public/assets/`** and S3 — check `next.config.mjs` for
  allowed remote image domains before adding new ones
- **ESLint and Prettier are enforced** — run `npm run lint` before committing changes
- **TypeScript strict mode is on** — all components must be fully typed

---

## Personal Links

- **LinkedIn:** https://www.linkedin.com/in/edward-ramirez
- **GitHub:** https://github.com/edwardramirez31
- **YouTube:** https://www.youtube.com/@primearchitech
- **Portfolio:** https://primearchitech.com
- **Email:** edal_ramirez@hotmail.com

---

## TODO Items for Edward to Complete Manually

- [ ] Create `data/career.json` with structured role, skills, and project data
- [ ] Confirm deployment platform (Vercel assumed)
- [ ] Add AWS certification details to education section if desired
- [ ] Update `components/shared/Stats.tsx` with current engineer and country counts
- [ ] Confirm current start availability for contact/about section
- [ ] Add any new projects to `app/projects/data.ts`

---

_This file is the primary briefing document for any Claude Code agent working on
this repository. Read `docs/career-context.md` for the full career narrative._
