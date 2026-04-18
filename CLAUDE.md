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

---

## /app Directory — Routes & File Map

| File / Folder | Type | Purpose |
|---|---|---|
| `app/layout.tsx` | Root Layout | Global wrapper: sets Raleway font, renders Header + Footer on every page |
| `app/page.tsx` | Page (Client) | Landing/hero: headline, CTA buttons (resume PDF + socials), animated profile picture, Brands carousel |
| `app/projects/page.tsx` | Page (Client) | Swiper carousel of 6 projects; selecting a slide shows title, description, stack icons, live/GitHub links |
| `app/projects/data.ts` | Data | Array of 6 project objects: `{ id, title, category, description, stack, image, live, github }` |
| `app/resume/page.tsx` | Page (Client) | Radix UI Tabs: Experience / Education / Skills / About — side nav + content panel |
| `app/resume/data.ts` | Data | Four exported objects: `about`, `experience`, `education`, `techStack` |
| `app/resume/About.tsx` | Component | About tab content: bio + Stats component |
| `app/resume/ResumeItem.tsx` | Component | Scrollable timeline list for experience and education tabs |
| `app/resume/Skills.tsx` | Component | Grid of four tech-category boxes with hoverable icon cards |
| `app/contact/page.tsx` | Page (Client) | Renders FormLayout wrapping ContactForm |
| `app/contact/ContactForm.tsx` | Component | Name / Email / Message form → Formspree (`xgegojvq`); React Hook Form + Zod validation; success/error alert auto-dismisses after 5 s |
| `app/contact/FormLayout.tsx` | Component | Split-screen: contact info left, form children right; staggered Framer Motion reveal |
| `app/services/page.tsx` | Page | Placeholder — not yet implemented |
| `app/virtue-in-motion/page.tsx` | Page (Server) | Fetches all posts from Contentful, renders PostsList; locale-aware via middleware |
| `app/virtue-in-motion/PostsList.tsx` | Component | Hero section + 3-column responsive grid of PostEntry cards |
| `app/virtue-in-motion/PostEntry.tsx` | Component | Post card: featured image (600×400), truncated description (200 chars), author avatar, date, link to detail |
| `app/virtue-in-motion/[slug]/page.tsx` | Page (Server) | Decodes slug, fetches post + comments from Contentful, renders PostDetail + PostComments |
| `app/virtue-in-motion/[slug]/PostDetail.tsx` | Component | Rich-text renderer (Contentful `documentToReactComponents`); custom renderers for headings, code blocks, images; Python syntax highlighting |
| `app/virtue-in-motion/[slug]/PostComments.tsx` | Component | Comment form (name + text) → Contentful Management API; lists comments newest-first; local state update on submit |
| `app/api/contentful.ts` | API Util | Contentful Delivery client: `getPosts(locale)`, `getPostEntryBySlug(slug, locale)`, `getComments(slug)` |
| `app/api/management.ts` | API Util | Contentful Management client: `managementClient`, `SPACE_ID` — used to create/publish comments |
| `app/api/types.ts` | Types | Contentful entry skeletons: `BlogPostEntrySkeleton`, `CommentEntrySkeletonRequest/Response`, Author, Image types |
| `middleware.ts` | Middleware | Detects `Accept-Language` header; sets locale cookie for blog (Spanish / English) |

---

## /components Directory — File Map

### `/components/shared/` — Layout & global UI

| File | Purpose |
|---|---|
| `Header.tsx` | Top nav bar — brand ("Edward."), desktop Nav, mobile MobileNav, "Get in touch" CTA |
| `Nav.tsx` | Desktop nav: Home, Resume, Projects, Virtue Path — active link underline via `usePathname()` |
| `MobileNav.tsx` | Radix UI Sheet (slide-out) — same links as desktop; closes on navigation |
| `Footer.tsx` | Footer: main links (+ Contact) + social icons (Facebook, Instagram, Threads, GitHub inline SVG), copyright |
| `Social.tsx` | Reusable social link group: LinkedIn, GitHub, YouTube (FontAwesome); accepts `containerStyles` / `iconStyles` props |
| `Features.tsx` | "Discover My Professional Journey" section on home page — left text/CTA, right desk-setup image; slide-in animations |
| `Picture.tsx` | Animated hero photo — circular image with rotating SVG stroke border; 298×298 mobile / 498×498 desktop |
| `Brands.tsx` | Company logo carousel — EPAM, Liberty Mutual, Cox Automotive, Melt Studio, LitLingo; staggered slide-up |
| `Stats.tsx` | Animated metrics — 25+ Technologies, 950+ PRs, 1000+ AWS resources, 2500+ commits; `react-countup` (3 s, 1 s delay) |

### `/components/icons/` — SVG icon library

| File | Purpose |
|---|---|
| `index.tsx` | 40+ named SVG icon components: AWS (Lambda, API Gateway, DynamoDB, S3, SQS, RDS, EventBridge, SNS, LoadBalancer), frameworks (React, Next.js, Node.js, TypeScript, Python, Django, Flask, Tailwind, Material UI), databases (PostgreSQL, MongoDB, Firebase), DevOps (GitHub Actions, Bamboo, Linux, Kafka). Each exports a `React.FC` with `fill="currentColor"` and an SVG `<title>` for accessibility. |
| `CustomIcon.tsx` | Icon + label card — props: `icon: React.FC`, `content: string`; 190×190 px mobile / 125×125 px desktop; hover turns label to accent color |

### `/components/ui/` — shadcn/ui primitives

Auto-generated Radix UI wrappers (do not hand-edit): `button`, `form`, `input`, `textarea`, `label`, `select`, `tabs`, `tooltip`, `sheet`, `scroll-area`. All use `cn()` from `lib/utils.ts` for class merging.

---

## Animation Conventions

All animations use Framer Motion with these consistent patterns:

```ts
// Entrance (fade + slide)
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.4, duration: 0.6, ease: 'easeIn' }}

// Scroll-triggered
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
```

Staggered lists alternate items from left (`x: -100`) and right (`x: 100`). Stick to these patterns when adding new animated sections.

---

## Navigation Routes

Current routes registered in Nav / MobileNav:

| Label | Path |
|---|---|
| Home | `/` |
| Resume | `/resume` |
| Projects | `/projects` |
| Virtue Path | `/virtue-in-motion` |
| Contact | `/contact` (Header CTA + Footer only) |
| Services | `/services` (placeholder, not in nav) |

**Before adding or renaming a route**, update `components/shared/Nav.tsx`, `components/shared/MobileNav.tsx`, and `components/shared/Footer.tsx`.

---

## Environment Variables

```env
# Contentful Delivery API (server-side reads — blog posts)
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=

# Contentful Management API (client-side comment writes)
NEXT_PUBLIC_BLOG_TOKEN=
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=

# Formspree — form ID is hardcoded as 'xgegojvq' in ContactForm.tsx
# No env var needed unless the form ID changes
```

---

## Data Locations Quick Reference (updated)

| What you want to change | File to edit |
|---|---|
| Projects list | `app/projects/data.ts` |
| Work experience or education | `app/resume/data.ts` → `experience` / `education` |
| Tech stack on Resume > Skills | `app/resume/data.ts` → `techStack` |
| About bio text | `app/resume/data.ts` → `about` |
| Animated stats numbers | `components/shared/Stats.tsx` |
| Company logos on home page | `components/shared/Brands.tsx` |
| Social media links (header/contact) | `components/shared/Social.tsx` |
| Social media links (footer) | `components/shared/Footer.tsx` |
| Blog posts | Contentful CMS (never hardcode) |
| Add a new SVG icon | `components/icons/index.tsx` — follow existing pattern |
