# NEXVIA Frontend Memory

## Current Phase

Phase 0 — Project Initialization

## Completed Work

- Created `AGENTS.md` — project instruction manual for coding agents
- Created `SKILL.md` — frontend engineering knowledge base
- Created `MEMORY.md` — this persistent project memory

## Current Architecture

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Smooth Scrolling:** Lenis
- **Authentication:** Clerk
- **Theme:** White minimal background, official Indian government registered website aesthetic

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Landing page |
| `/sign-in/[[...sign-in]]` | Public | Clerk sign-in |
| `/sign-up/[[...sign-up]]` | Public | Clerk sign-up |
| `/dashboard` | Protected | Main dashboard (role-based redirect) |
| `/student` | Protected | Student dashboard |
| `/student/assessment` | Protected | Skill assessment |
| `/student/skills` | Protected | Skill profile |
| `/student/opportunities` | Protected | Job/internship discovery |
| `/industry` | Protected | Industry dashboard |
| `/institution` | Protected | Institution dashboard |
| `/faculty` | Protected | Faculty dashboard |

## Components

### UI Primitives (Planned)

- `Button` — primary, secondary, ghost, outline variants
- `Card` — content container with optional hover
- `Input` — text, email, password with label/error
- `Badge` — skill level, status indicators
- `Avatar` — user profile image
- `Skeleton` — loading placeholders
- `Modal` — dialog overlays
- `Progress` — skill/readiness bars

### Layout (Planned)

- `Header` — top navigation with auth state
- `Footer` — site links, branding
- `Sidebar` — dashboard navigation
- `PageContainer` — consistent page wrapper

### Landing (Planned)

- `Hero` — main CTA section with animation
- `ProblemSection` — student pain points
- `HowItWorks` — step-by-step flow
- `SkillIntelligence` — skill visualization
- `CareerPath` — career journey visualization
- `OpportunityMatching` — match demo
- `SkillPassport` — digital identity showcase
- `IndustryConnection` — ecosystem visualization
- `InstitutionIntelligence` — analytics preview
- `FinalCTA` — closing call to action

## Design System

### Colors (Planned)

- **Primary:** Deep Blue (trust, professionalism)
- **Accent:** Vibrant Orange/Saffron (energy, Indian identity)
- **Success:** Green
- **Warning:** Amber
- **Error:** Red
- **Background:** White (#FFFFFF)
- **Surface:** Light Gray (#F8FAFC)
- **Text Primary:** Near Black (#0F172A)
- **Text Secondary:** Slate (#64748B)

### Typography (Planned)

- **Headings:** Inter (bold, modern)
- **Body:** Inter (regular, readable)
- **Monospace:** JetBrains Mono (code, numbers)

### Spacing

- Tailwind default scale
- Consistent 4px base unit

## Authentication

- **Provider:** Clerk
- **Public Routes:** `/`, `/sign-in`, `/sign-up`
- **Protected Routes:** All dashboard routes
- **Role-Based Routing:** After login, redirect based on user role
- **Middleware:** Clerk middleware for route protection

## API Integration

- **Status:** Not yet implemented
- **Planned:** Centralized API client in `lib/api/`
- **Pattern:** Server Components fetch directly, Client Components use API utility

## Known Issues

- None yet (fresh project)

## Decisions Made

1. Use Next.js App Router (not Pages Router)
2. Use Clerk for authentication (not custom)
3. Only use `.env` file (no `.env.example`, `.env.local`)
4. White minimal background theme
5. Official Indian government registered website aesthetic
6. Mobile-first responsive design
7. Server Components as default, Client Components only when needed
8. Framer Motion for purposeful animations only
9. Lenis for smooth scrolling on marketing pages

## Pending Work

- [ ] Initialize Next.js project
- [ ] Configure Tailwind CSS with custom theme
- [ ] Set up Clerk authentication
- [ ] Configure Lenis smooth scrolling
- [ ] Create UI primitive components
- [ ] Create layout components
- [ ] Build landing page sections
- [ ] Build student dashboard
- [ ] Build industry dashboard
- [ ] Build institution dashboard
- [ ] Build faculty dashboard
- [ ] Integrate backend APIs

## Next Recommended Task

Initialize the Next.js project with TypeScript, Tailwind CSS, and verify the development server runs correctly.

## Important Constraints

- Do NOT create `.env.example`, `.env.local`, `.env.development`, or `.env.production`
- Only use `.env` for environment variables
- Never hardcode secrets or API keys
- Never commit `.env` to Git
- Use Server Components by default
- Only use Client Components when interactivity requires it
- Respect `prefers-reduced-motion`
- Minimum 44px touch targets
- WCAG AA color contrast
