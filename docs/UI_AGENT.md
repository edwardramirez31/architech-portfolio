# UI_AGENT.md — Living Reference for the Portfolio UI Agent

> This file is read by the UI Agent at the start of every session.
> Update the backlog and completed sections as work progresses.
> Do not modify the Design System or UI Principles sections without re-running a visual audit.

---

## Identity

The UI Agent is a specialized subagent that owns all visual work on Edward Ramirez's portfolio site (`primearchitech.com`). It is responsible for component styling, layout improvements, animation polish, responsive design fixes, and new UI sections. It operates strictly within the visual layer — it reads career data and CMS content but never modifies them. It never touches `app/resume/data.ts`, `docs/career-context.md`, `app/api/`, `CLAUDE.md`, `docs/ui-design-system.md`, or `middleware.ts`. Every task begins with a Playwright screenshot and ends with a lint pass and an updated backlog.

---

## Design System Reference

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `bg-primary` | `#1c1c22` | Page backgrounds, all sections |
| card surface | `#232329` | All card components (hardcoded inline) |
| `text-accent` / `bg-accent` | `#00ff99` | CTAs, active states, highlights, icon hover, diamond dots |
| `bg-accent-hover` | `#00e187` | Button hover, slider button hover |
| `text-white` | `#ffffff` | Primary headings |
| `text-white/80` | `rgba(255,255,255,0.8)` | Hero subtext, secondary headings |
| `text-white/70` | `rgba(255,255,255,0.7)` | Timeline card company subtitle |
| `text-white/60` | `rgba(255,255,255,0.6)` | Body copy, section descriptions |
| `text-white/40` | `rgba(255,255,255,0.4)` | Tertiary labels, dates |
| `text-gray-400` | Tailwind default | Footer copyright only |

### Typography

| Element | Tailwind Classes |
|---|---|
| Brand logotype | `text-4xl font-semibold` + accent dot |
| H1 hero | `h1` (globals.css — ~text-5xl) |
| H2 section | `text-3xl sm:text-4xl font-semibold tracking-tight` |
| H3 tab heading | `text-4xl font-bold` |
| H3 project title | `text-[42px] font-bold leading-none` |
| Body | `text-lg text-white/60` or `text-white/80` |
| Stat numbers | `text-4xl font-extrabold` |
| Project number | `text-7xl font-extrabold text-transparent font-outline-2` |
| Accent labels | `text-sm font-medium text-accent` (uppercase optional) |

Font: **Raleway** via `font-primary` (CSS var `--font-jetbrainsMono`). Weights 100–800 available.

### Spacing

| Context | Value |
|---|---|
| Container horizontal padding | `15px` (Tailwind container config) |
| Section / tab gaps | `gap-[30px]` standard, `gap-[60px]` for xl sidebar |
| Card padding | `p-6` (timeline) or `py-6 px-10` (education) |
| Hero vertical | `xl:pt-8 xl:pb-24` |

### Border Radius

- Cards: `rounded-xl` (12px) — always
- Buttons, social circles, profile photo: `rounded-full` — always
- Swiper nav buttons: square (no radius)

### Shadows & Glows

- Timeline diamond pulse: `boxShadow` keyframes `['0 0 4px #00ff99', '0 0 12px #00ff99', '0 0 4px #00ff99']`
- Timeline card hover: `borderColor: rgba(0,255,153,0.3)` via Framer Motion
- No `box-shadow` utility classes on any other elements

### Breakpoints

`sm:640` · `md:768` · `lg:960` · `xl:1200`

Primary layout breakpoint is `xl:`. Mobile-first (base = 375px).

---

## UI Principles

1. **Background is always `#1c1c22`.** Never use `bg-white`, `bg-gray-50`, or any light surface as a page or section background. The Virtue Path page is the only current exception and that is a bug to fix.

2. **Cards are always `bg-[#232329] rounded-xl`.** No white cards, no gray cards, no flat backgrounds without the `#232329` surface.

3. **Accent `#00ff99` is used for highlights only — never as a large background fill.** Acceptable uses: text color, border color, icon color on hover, CTA button fill (small), diamond dot, nav active underline, tab active background.

4. **All section transitions must use Framer Motion.** No CSS `@keyframes` for component entrance or exit animations.

5. **Scroll-triggered animations use `whileInView` with `viewport={{ once: true }}`.** Never use `viewport={{ once: false }}` — elements must not re-animate on scroll-back.

6. **Page-level entrance animations use `animate` (not `whileInView`).** Delay 0.5s, duration 0.5s, `easeInOut`. Applied to the outermost motion div of each tab/page section.

7. **Staggered lists alternate left/right.** `x: index % 2 === 0 ? -75 : 75` for `whileInView` item lists.

8. **All layouts must be tested at 375px (mobile) and 1280px (desktop).** Screenshot both viewports before declaring any task done.

9. **The `xl:` breakpoint separates mobile and desktop layouts.** Two-column layouts activate at `xl:flex-row`. Mobile is single-column by default.

10. **Icon cards use `bg-[#232329] rounded-xl` with `group-hover:text-accent` on both icon and label.** Hover transition: `transition-all duration-300`.

11. **Buttons use `rounded-full` (pill shape).** Outline variant: `border border-accent text-accent hover:bg-accent hover:text-primary`. Filled variant: `bg-accent text-primary hover:bg-accent-hover`.

12. **Navigation active state**: `text-accent border-b-2 border-accent` on the active link. Never background-fill nav items.

13. **Tab active state**: `bg-accent text-primary`. Inactive tabs: `bg-[#27272c] text-white` (shadcn default from `components/ui/tabs.tsx`).

14. **Never add new npm packages without explicit user approval.** All animation, UI, and styling needs must be met with the existing stack: Framer Motion, Tailwind, Radix UI, shadcn/ui, FontAwesome.

15. **Run `npm run lint` after every change.** TypeScript strict mode is on — all new components must be fully typed with no `any`.

16. **Blog post cards on Virtue Path must match the dark theme.** `bg-[#232329] rounded-xl` card body, `text-white` title, `text-white/60` excerpt, accent ARTICLE badge. Not `bg-white` / `text-gray-900`.

17. **Features section text must reference Tech Lead + Mainframe modernization positioning** when updated — not generic "Full Stack Engineer" language.

18. **Stats metrics (25+ Technologies, 950+ PRs, 1000+ AWS resources, 2500+ commits) are primary credibility signals.** They should be visible without navigating away from the home page.

---

## Improvement Backlog

Items are ordered by priority. Implement the highest-priority Small item with no unmet dependencies first.

---

### HIGH Priority

#### H2 — Add Stats section to home page
- **Affected files:** `app/page.tsx`, `components/shared/Stats.tsx`
- **Description:** Import and render `<Stats />` on the home page between the hero section and the `<Features />` component. Stats should animate in via its existing `whileInView` scroll trigger. Add a thin `border-t border-white/10` separator above it.
- **Design rationale:** 950+ PRs and 2500+ commits are the fastest credibility signals on the page. Burying them in Resume → About means most visitors never see them.
- **Complexity:** Small
- **Dependencies:** None

#### H3 — Update hero bio copy
- **Affected files:** `app/page.tsx` lines 36–40
- **Description:** Replace the generic bio paragraph with copy that leads with Tech Lead role, quantified impact, and Mainframe-to-AWS positioning. Suggested: "I lead a 7-engineer distributed team across 4 countries at Liberty Mutual, modernizing one of the largest IBM Mainframe systems in US insurance onto AWS. I build the architecture and still ship the code." Adjust length to stay under ~200 chars for visual balance.
- **Design rationale:** The first paragraph a recruiter reads must answer "why is this person different?" The current copy is filler.
- **Complexity:** Small
- **Dependencies:** None

#### H4 — Update Features section copy and title
- **Affected files:** `components/shared/Features.tsx`
- **Description:** Change `<h2>` from "Full Stack Engineer" to "Tech Lead & Cloud Engineer". Replace body paragraph with Mainframe modernization positioning. Update CTA button text from "See my career highlights" to "View my experience". Ensure copy stays within the visual container without overflowing at `md:h-[500px]` constraint.
- **Design rationale:** "Full Stack Engineer" is Edward's entry-level job title from 2021. The current title (Tech Lead) and specialization (Mainframe modernization) are his competitive differentiators.
- **Complexity:** Small
- **Dependencies:** None

---

### MEDIUM Priority

#### M1 — Render `about.details` in Resume → About tab
- **Affected files:** `app/resume/About.tsx`, `app/resume/data.ts`
- **Description:** Update `About.tsx` to accept and render the `details` array from `about` data (Name, Experience, Languages, Location). Display as a 2×2 info grid below the bio paragraph and above `<Stats />`. Each cell: label in `text-white/40 text-sm uppercase`, value in `text-white font-medium`. Style with `bg-[#232329] rounded-xl p-4` per cell.
- **Design rationale:** These four data points make Edward a real person rather than a skills list. Languages (English, Spanish, Portuguese) is a strong differentiator for global companies.
- **Complexity:** Small
- **Dependencies:** None

#### M2 — Fix CustomIcon size on mobile
- **Affected files:** `components/icons/CustomIcon.tsx`
- **Description:** Change default (mobile) size from `w-[190px] h-[190px]` to `w-[100px] h-[100px]`. Icon text: `text-5xl` (was `text-8xl`) on mobile, keep `xl:text-6xl`. This fixes the overflow on 375px viewport in the Projects page tech stack grid.
- **Design rationale:** At 190px, the icons require horizontal scrolling on a 375px screen and look oversized. 100px is proportional to the screen and consistent with the Resume → Skills icon size.
- **Complexity:** Small
- **Dependencies:** None

#### M3 — Update page metadata
- **Affected files:** `app/layout.tsx`
- **Description:** Update `metadata.title` to `"Edward Ramirez — Tech Lead & Cloud Engineer"` and `metadata.description` to `"Tech Lead and Cloud Engineer with 4+ years leading IBM Mainframe-to-AWS modernization at Liberty Mutual. Serverless AWS, distributed teams, Node.js."`. Fix the "Primer" → "Prime" typo.
- **Design rationale:** LinkedIn, Slack, and Google show this description. The current copy is off-brand and contains a typo.
- **Complexity:** Small
- **Dependencies:** None

#### M4 — Fix copyright year in Footer
- **Affected files:** `components/shared/Footer.tsx`
- **Description:** Replace hardcoded `© 2025` with a dynamic `© {new Date().getFullYear()}` expression so it never goes stale.
- **Complexity:** Small
- **Dependencies:** None

#### M5 — Fix Education ScrollArea whileInView conflict
- **Affected files:** `app/resume/ResumeItem.tsx`
- **Description:** Replace `whileInView` on individual education cards with `animate` (page-level entrance, same as the parent `motion.div`). Use staggered `transition={{ delay: index * 0.1 + 0.5 }}` so cards appear in sequence without needing scroll intersection. This guarantees all 6 education items render inside the ScrollArea regardless of scroll position.
- **Design rationale:** Cards inside a clipped scroll container may never trigger `whileInView`. Animation should use `animate` driven by tab selection, not intersection.
- **Complexity:** Small
- **Dependencies:** None

---

### LOW Priority

#### L1 — Add back-to-top button on long pages
- **Affected files:** `app/resume/page.tsx` (or a new shared component)
- **Description:** Add a small fixed `button` in the bottom-right corner that appears after scrolling 400px down. Click scrolls to top. Style: `bg-[#232329] border border-white/10 rounded-full w-10 h-10 text-accent hover:border-accent`. Use Framer Motion `AnimatePresence` for fade in/out.
- **Complexity:** Medium
- **Dependencies:** None

#### L2 — Rename font CSS variable for clarity
- **Affected files:** `app/layout.tsx`, `tailwind.config.ts`
- **Description:** Rename `--font-jetbrainsMono` to `--font-primary` in both files. Update `tailwind.config.ts` `fontFamily.primary` reference accordingly.
- **Complexity:** Small
- **Dependencies:** None — but do this last as it touches the root layout

---

## Completed

*Items are moved here after implementation with date and one-line summary.*

| Date | Item | Summary |
|---|---|---|
| 2026-04-19 | H1 — Retheme Virtue Path blog cards to dark design system | Replaced `bg-gray-50`/`bg-white`/`text-gray-*` with `bg-primary`, `bg-[#232329]`, and `text-white/*` variants across `PostsList.tsx` and `PostEntry.tsx`; removed white overlay div; page now fully matches the dark design system. |
| 2026-04-19 | Virtue Path page redesign — terminal/geek aesthetic | Replaced plain centered heading with `// KNOWLEDGE_BASE v2.6` monospace terminal label + blinking cursor + gradient `from-accent to-white` title + accent underline bar; split post grid into full-width featured card + 2-col rest grid; cards now have `border-t-2 border-accent`, `[ARTICLE]` monospace badge, `@author_name` handle, ISO date format, and a bottom accent sweep on hover. |
| 2026-04-19 | Virtue Path — uniform grid + animated network background | Removed featured post treatment; all posts render in a uniform `sm:grid-cols-2 lg:grid-cols-3` grid with staggered entrance animations. Added `NetworkBackground.tsx` canvas component rendering 60-node animated network graph in accent color behind the hero section. |
