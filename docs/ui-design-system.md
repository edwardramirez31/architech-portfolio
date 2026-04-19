# UI Design System — Edward Ramirez Portfolio

> Generated from Phase 2 reconnaissance. Source of truth for all UI work on this site.
> Do not hand-edit this file without re-running a full visual audit to verify the entries.

---

## Current Design Tokens

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `primary` | `#1c1c22` | Page background, tab active text |
| `card` | `#232329` | Card surfaces, skill boxes, timeline cards, education cards |
| `accent` | `#00ff99` | CTAs, active nav underline, tab active bg, icon hover, badge text, diamond dots |
| `accent-hover` | `#00e187` | Swiper button hover, CTA hover states |
| `white` | `#ffffff` | Primary headings, project numbers |
| `white/80` | `rgba(255,255,255,0.8)` | Hero subtext, secondary headings |
| `white/70` | `rgba(255,255,255,0.7)` | Timeline card company subtitle |
| `white/60` | `rgba(255,255,255,0.6)` | Body copy, section descriptions, skill labels |
| `white/40` | `rgba(255,255,255,0.4)` | Tertiary labels, timeline date/location |
| `gray-400` | Tailwind default | Footer copyright text |
| `accent/25` | `rgba(0,255,153,0.25)` | Timeline center/left line |
| `rgba(0,255,153,0.3)` | — | Timeline card hover border |

**Consistency rule:** Card backgrounds are always `#232329`. Page background is always `#1c1c22`. Never use Tailwind's gray scale (`gray-50`, `gray-900`, etc.) anywhere except the Virtue Path page — and that is an **identified bug**, not a pattern to follow.

---

### Typography

| Element | Classes | Notes |
|---|---|---|
| Brand logotype | `text-4xl font-semibold` | "Edward." with accent dot |
| H1 hero | `h1` (globals.css class) | Custom class, ~text-5xl+ |
| H2 section title | `text-3xl sm:text-4xl font-semibold tracking-tight` | Features section |
| H3 tab heading | `text-4xl font-bold` | Resume tab titles |
| H3 project title | `text-[42px] font-bold leading-none` | Projects page |
| H4 timeline company | `text-white/70 text-sm` | ExperienceTimeline card |
| Body paragraph | `text-lg text-white/60` or `text-white/80` | Context-dependent |
| Small / caption | `text-sm`, `text-base` | Dates, labels |
| Stat numbers | `text-4xl font-extrabold` | react-countup values |
| Project number | `text-7xl font-extrabold text-transparent font-outline-2` | Outlined number badge |
| Accent labels | `text-sm font-medium text-accent uppercase` (or just `text-accent`) | "Tech Stack", category labels, "ARTICLE" badge |
| Skill category | `text-accent` (no transform) | Inline heading above icon grid |

**Font family:** Raleway loaded via `next/font/google`, applied via CSS variable `--font-jetbrainsMono` (misleading name — it is Raleway). All text inherits this font.

**Available weights:** 100, 200, 300, 400, 500, 600, 700, 800.

---

### Spacing Scale (most-used values)

| Context | Value |
|---|---|
| Container horizontal padding | `15px` (Tailwind container config) |
| Section vertical gap | `gap-[30px]`, `gap-[60px]` (xl sidebar offset) |
| Card padding (timeline) | `p-6` |
| Card padding (education/skills) | `py-6 px-10` |
| Hero vertical padding | `xl:pt-8 xl:pb-24` |
| Stats section | `pt-4 pb-12 xl:pt-0 xl:pb-0` |
| Footer | `py-12 px-4 sm:px-6 lg:px-8` |
| Nav gap (desktop) | `gap-8` |

---

### Border Radius

| Usage | Value |
|---|---|
| Cards (timeline, education, skill icons) | `rounded-xl` (12px) |
| Buttons (outline) | `rounded-full` (pill) |
| "Get in touch" CTA | `rounded-full` |
| Social icon circles | `rounded-full` |
| Profile photo | `rounded-full` |
| Swiper nav buttons | No radius (square) |

---

### Shadows & Glows

| Usage | Value |
|---|---|
| Timeline diamond dot (animated pulse) | `boxShadow: ['0 0 4px #00ff99', '0 0 12px #00ff99', '0 0 4px #00ff99']` — Framer Motion keyframes |
| Timeline card hover | `border border-transparent` → `borderColor: rgba(0,255,153,0.3)` |
| No box-shadows otherwise | Cards use border and color contrast only |

---

### Breakpoints

| Name | px |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 960px |
| `xl` | 1200px |

**Primary layout breakpoint is `xl`.** Desktop two-column layouts activate at `xl:`. Mobile is the default (single column, stacked). The `md:` breakpoint is used sparingly (Brands grid, Features height).

---

## Component Inventory

| Component | File | Animation | Hover State | Notes |
|---|---|---|---|---|
| Header | `components/shared/Header.tsx` | None | Nav links: `hover:text-accent` | Static; desktop Nav + mobile MobileNav |
| Nav | `components/shared/Nav.tsx` | None | `hover:text-accent` | Active link: `text-accent border-b-2 border-accent` |
| MobileNav | `components/shared/MobileNav.tsx` | Sheet slide-in (Radix) | — | Radix UI Sheet, closes on navigation |
| Footer | `components/shared/Footer.tsx` | None | `hover:text-accent`, social `hover:opacity-80` | Copyright hardcoded 2025 |
| Picture | `components/shared/Picture.tsx` | SVG stroke rotating (duration:20, infinite), photo fade-in delay:1.6 | None | 298px mobile / 498px desktop |
| Social | `components/shared/Social.tsx` | None | Inherited from parent `iconStyles` prop | LinkedIn, GitHub, YouTube (FontAwesome) |
| Features | `components/shared/Features.tsx` | `whileInView` slide-in: left panel x:-100, right panel x:100 | None | Text left + desk image right; `viewport:{once:true}` |
| Brands | `components/shared/Brands.tsx` | `whileInView` y:-100 (heading), y:100 (logos) | None | 5 company logos in `md:grid-cols-5` |
| Stats | `components/shared/Stats.tsx` | `whileInView` x:-100 | None | 4 counters via react-countup; only on Resume→About |
| ExperienceTimeline | `app/resume/ExperienceTimeline.tsx` | `useInView` per node; alternating x:±100; growing vertical line | Card: border glow + expand on hover | `AnimatePresence` expand/collapse achievements |
| ResumeItem | `app/resume/ResumeItem.tsx` | `animate` entrance y:50; `whileInView` per card alternating x:±75 | None | Education grid inside 400px `ScrollArea` |
| Skills | `app/resume/Skills.tsx` | `animate` entrance y:50; `whileInView` per icon y:75 | Icon + label → `text-accent` on group hover | 4 categories, 4 icons each |
| About | `app/resume/About.tsx` | `animate` entrance y:50 | None | Renders bio + `<Stats />`; does NOT render `about.details` |
| CustomIcon | `components/icons/CustomIcon.tsx` | None | Icon + label → `text-accent` | 190×190px mobile / 125×125px desktop |
| PostsList | `app/virtue-in-motion/PostsList.tsx` | None | — | **Off-theme:** uses `bg-gray-50`, `bg-white`, `text-gray-900` |
| PostEntry | `app/virtue-in-motion/PostEntry.tsx` | None | `hover:underline` on title | **Off-theme:** `bg-white p-6`, `text-gray-900`, `text-gray-500` |
| ProjectsPage | `app/projects/page.tsx` | `animate` entrance y:50; `whileInView` per stack icon alternating x:±75 | FontAwesome icons `hover:opacity-80` | Swiper carousel + WorkSliderButtons |
| ContactForm | `app/contact/ContactForm.tsx` | Staggered Framer Motion reveal (FormLayout) | Submit button (accent fill) | Formspree `xgegojvq` |
| FormLayout | `app/contact/FormLayout.tsx` | Staggered entrance x:±50 | — | Split-screen: info left, form right |
| Tabs (Radix) | `components/ui/tabs.tsx` | None (Radix handles) | Tab trigger: bg-accent text-primary when active | shadcn/ui wrapper |
| Button | `components/ui/button.tsx` | None | Outline variant: `hover:bg-accent hover:text-primary` | shadcn/ui; pill shape (`rounded-full`) |
| ScrollArea | `components/ui/scroll-area.tsx` | None | — | Radix; used only in Education tab (400px) |

---

## Animation Patterns

### 1. Page Entrance (viewport-independent)
Used on: hero text, Resume tab panels, Projects section, About panel.
```ts
initial={{ opacity: 0, y: 50 }}   // or x: -50
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
```

### 2. Scroll-triggered Slide-in
Used on: Features panels, Brands heading/logos, Stats, skill icons, education cards, project stack icons.
```ts
initial={{ opacity: 0, x: -100 }}  // or y: -100 / 100
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.5, duration: 0.75–1.25, ease: 'easeOut' }}
```

### 3. Staggered Alternating (index-based)
Used on: Education cards, project tech stack icons.
```ts
initial={{ opacity: 0, x: index % 2 === 0 ? -75 : 75 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.5, duration: 0.75, ease: 'easeOut' }}
```

### 4. Timeline InView (useInView hook)
Used on: ExperienceTimeline nodes only.
```ts
const inView = useInView(nodeRef, { once: true, margin: '-80px' });
// animate prop driven by inView boolean
initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
```

### 5. Growing Timeline Line
```ts
// scaleY from 0 → visibleCount/details.length
animate={{ scaleY: visibleCount / details.length }}
transition={{ duration: 0.6, ease: 'easeOut' }}
style={{ transformOrigin: 'top' }}
```

### 6. Diamond Dot Pulse (glowing keyframes)
```ts
animate={{ scale: 1, rotate: 45,
  boxShadow: ['0 0 4px #00ff99', '0 0 12px #00ff99', '0 0 4px #00ff99'] }}
transition={{ boxShadow: { delay: 0.65, duration: 2, repeat: Infinity, ease: 'easeInOut' }}}
```

### 7. Profile Photo SVG Stroke
```ts
animate={{
  strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
  rotate: [120, 360],
}}
transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
```

### 8. Timeline Card Hover Expand
```ts
// AnimatePresence for show/hide achievement list
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
exit={{ opacity: 0, height: 0 }}
transition={{ duration: 0.3, ease: 'easeInOut' }}
```

---

## Identified UI Weaknesses

### HIGH Priority

**W1 — Virtue Path page is completely off-theme**
- **Where:** `app/virtue-in-motion/PostsList.tsx`, `app/virtue-in-motion/PostEntry.tsx`
- **What:** `PostsList` uses `bg-gray-50`, `bg-white`, `text-gray-900`, `text-gray-500` — a light theme copy-pasted from a generic template. `PostEntry` uses `bg-white p-6` for card bodies. This makes the entire blog page look like a different site.
- **Why it hurts:** Immediate credibility loss. Recruiters clicking into Virtue Path hit a jarring white page after a dark, polished portfolio. Breaks brand coherence.
- **Priority:** High

**W2 — Hero bio copy is generic filler**
- **Where:** `app/page.tsx` lines 36–40
- **What:** "I excel in leveraging backend systems that serve as the backbone for critical business operations, managing over thousands cloud-based resources. Join me in redefining technological boundaries." — vague, no mention of Tech Lead role, Mainframe modernization, Liberty Mutual, or any quantified impact.
- **Why it hurts:** The first thing a recruiter reads must answer "why is this person different?" This copy doesn't.
- **Priority:** High

**W3 — Stats section buried in Resume → About tab**
- **Where:** `components/shared/Stats.tsx` (rendered only in `app/resume/About.tsx`)
- **What:** The four credibility metrics (25+ Technologies, 950+ PRs, 1000+ AWS resources, 2500+ commits) are hidden 3 clicks deep. They never appear on the home page.
- **Why it hurts:** Stats are the fastest credibility signal on a portfolio. Recruiters who don't navigate to Resume → About never see them.
- **Priority:** High

**W4 — Features section copy doesn't match positioning**
- **Where:** `components/shared/Features.tsx` lines 32–43
- **What:** Heading says "Full Stack Engineer" — Edward's title is Tech Lead. Body copy is generic full-stack description with no Mainframe, no AWS, no Liberty Mutual context.
- **Why it hurts:** Undermines the CLAUDE.md positioning strategy. The Features section is a major visual anchor on the home page.
- **Priority:** High

---

### MEDIUM Priority

**W5 — `about.details` data never renders**
- **Where:** `app/resume/data.ts` (details array: Name, Experience, Languages, Location) vs `app/resume/About.tsx` (only uses `title` + `description`)
- **What:** Four key personal details are defined but the component never receives or renders them.
- **Why it hurts:** Missing personal context that makes Edward a real person, not just a list of skills.
- **Priority:** Medium

**W6 — CustomIcon is 190×190px on mobile**
- **Where:** `components/icons/CustomIcon.tsx` — `w-[190px] h-[190px]` default, `xl:w-[125px] xl:h-[125px]`
- **What:** On mobile (375px), 190px icons overflow the 4-column grid constraint. At `sm:justify-normal` the icons render far too large for the viewport.
- **Why it hurts:** Layout breaks on mobile for Projects tech stack. Unprofessional on phones.
- **Priority:** Medium

**W7 — Page metadata is off-brand**
- **Where:** `app/layout.tsx` line 18
- **What:** `description: 'Primer Architech portfolio'` — typo ("Primer" should be "Prime") and not indexed for recruiter searches. Title is just "Edward Ramirez" with no role context.
- **Why it hurts:** SEO and sharing previews (LinkedIn, Slack) show off-brand description.
- **Priority:** Medium

**W8 — Education ScrollArea + whileInView conflict**
- **Where:** `app/resume/ResumeItem.tsx`
- **What:** Cards inside a `ScrollArea` use `whileInView` but the scroll container clips the viewport intersection. Cards near the bottom of the scroll area may never trigger their animation even as the user scrolls within the area.
- **Why it hurts:** Education items may appear blank without explanation, looking like broken content.
- **Priority:** Medium

---

### LOW Priority

**W9 — Copyright hardcoded as 2025**
- **Where:** `components/shared/Footer.tsx` line 119
- **What:** `© 2025 Edward Ramirez` — current year is 2026.
- **Priority:** Low

**W10 — Font variable name is misleading**
- **Where:** `app/layout.tsx` — imports `Raleway` but assigns it to `--font-jetbrainsMono`
- **What:** The Tailwind config references `var(--font-jetbrainsMono)` as `fontFamily.primary`. Functionally correct but deeply confusing for future maintainers.
- **Priority:** Low

**W11 — No back-to-top affordance**
- **Where:** Resume page (long timeline), Projects page
- **What:** No scroll-to-top button. Long content pages have no navigation escape.
- **Priority:** Low

**W12 — Phone number publicly hardcoded**
- **Where:** `app/contact/FormLayout.tsx` (inferred) or `app/contact/page.tsx`
- **What:** `+57 312 5712497` rendered as plain text — no obfuscation, no env variable.
- **Priority:** Low (personal preference)
