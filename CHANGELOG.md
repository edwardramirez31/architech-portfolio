# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [0.2.0] — 2026-04-17

### Added — Experience Timeline (`app/resume/ExperienceTimeline.tsx`)

New component replacing `ResumeItem` for the Experience tab only. Education tab is unchanged.

**Layout**
- Vertical timeline with alternating left/right cards on desktop (`xl:`), single left-aligned column on mobile
- Each card shows: date range (accent color), location, company subtitle, role title, and a truncated preview of the first achievement with a gradient fade-out as a hover affordance

**Scroll reveal**
- Each node uses `useInView({ once: true, margin: '-80px' })` — cards slide in from alternating sides (`x: ±100 → 0`) as they enter the viewport
- `once: true` ensures nodes never reverse their animation when scrolling back up

**Center / left line (grows and stays)**
- Desktop: absolute vertical line at `left-1/2`, mobile: absolute line at `left-[7px]`
- Both driven by `scaleY: visibleCount / details.length` with `transformOrigin: top`
- `visibleCount` increments via `onVisible` callback + `useEffect` per node — never decrements, so the line only grows downward and stays fully drawn once all items are seen
- Previous approach (`useScroll → scrollYProgress`) was discarded because it caused the line to shrink when scrolling back up

**Diamond connectors**
- `w-4 h-4 bg-primary border-2 border-accent` with pulsing `boxShadow` loop (`0 0 4px` → `0 0 12px` → `0 0 4px`, 2 s, infinite)
- Scale-in (`scale: 0 → 1`) triggered by `inView`, with a 350 ms delay after the card slides in
- `rotate: 45` lives inside Framer Motion's `animate` prop (not Tailwind `rotate-45`) — critical to prevent FM's transform override from flattening the diamond into a square
- Mobile uses identical diamond (not a circle), aligned to the left line at `left-0 top-5`

**Hover interaction**
- Non-hovered state: first achievement rendered as a single `line-clamp-1` line at `text-white/40` with a `bg-gradient-to-t from-[#232329]` fade, signalling more content below
- On hover: preview fades out via `AnimatePresence`, full achievements list height-animates in (`height: 0 → auto`, 300 ms `easeInOut`)
- Card border glows to `rgba(0,255,153,0.3)` and scales up (`1.02` desktop / `1.01` mobile)

### Modified

- `app/resume/page.tsx` — imports and renders `<ExperienceTimeline>` instead of `<ResumeItem>` for the `experience` tab value only; no other tabs touched

### Technical notes

- No external timeline libraries — built with Tailwind CSS and Framer Motion (v11.2.6) only
- All new code passes `npm run lint` (ESLint + Prettier) with zero errors
- TypeScript strict mode compliant; `total-typescript` IDE diagnostics are from an educational plugin, not compiler errors
- `useScroll` / `useTransform` imports removed after switching line strategy to count-based `scaleY`

---

## [0.1.0] — initial release

Base portfolio: Hero, Resume (Experience / Education / Skills / About tabs), Projects carousel, Virtue Path blog (Contentful), Contact form (Formspree), comments on blog posts.
