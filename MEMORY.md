# NEXVIA Frontend Memory

## Current Phase

Phase 4 — Loading/Error States + Shared Components Built

## Completed Work

### Documentation
- README documents the current stack, setup, route groups, scripts, and sample-data/authentication status.

### Foundation
- Next.js 16.3.5, TypeScript strict, Tailwind CSS v4
- Clerk v7.9.4 authentication
- Framer Motion, Lenis, clsx, tailwind-merge

### UI Primitives (22 in src/components/ui/)
- Button, Input, Card, Badge, Skeleton, Progress
- Tabs, Avatar, EmptyState, PageHeader, StatCard
- SkillBar, MatchScore, SearchInput
- Modal, Drawer, Toast (provider + hook + container), ConfirmationDialog
- Dropdown, Breadcrumb, EmptyDashboard, LoadingSpinner

### Layout (4 in src/components/layout/)
- Header, Footer, DashboardSidebar (role-based), MobileNav

### Shared (2 in src/components/shared/)
- SmoothScroll, OpportunityCard

### Mock Data (5 in src/lib/api/)
- skills, opportunities, applications, profile, index

### Landing (10 sections in src/components/landing/)

## Routes (43 total)

### Public (7)
`/`, `/about`, `/how-it-works`, `/opportunities`, `/opportunities/[id]`, `/sign-in`, `/sign-up`

### Onboarding (1)
`/onboarding` — 7-step wizard

### Student (13)
`/student`, `/student/skills`, `/student/assessment`, `/student/assessment/results`, `/student/learning`, `/student/career`, `/student/passport`, `/student/applications`, `/student/mentorship`, `/student/copilot`, `/student/profile`, `/student/notifications`, `/student/projects`

### Industry (6)
`/industry`, `/industry/opportunities`, `/industry/opportunities/new`, `/industry/candidates`, `/industry/candidates/[id]`, `/industry/collaboration`

### Institution (5)
`/institution`, `/institution/skills`, `/institution/industry-demand`, `/institution/training`, `/institution/students`

### Faculty (5)
`/faculty`, `/faculty/students`, `/faculty/opportunities`, `/faculty/training`, `/faculty/collaboration`

### Admin (6)
`/admin`, `/admin/users`, `/admin/skills`, `/admin/organizations`, `/admin/reports`

## Loading States (8)
- Root: `src/app/loading.tsx`
- Student: `src/app/student/loading.tsx`
- Industry: `src/app/industry/loading.tsx`
- Institution: `src/app/institution/loading.tsx`
- Faculty: `src/app/faculty/loading.tsx`
- Admin: `src/app/admin/loading.tsx`

## Error/Not-Found
- Global error: `src/app/error.tsx`
- 404: `src/app/not-found.tsx`

## Build Status
- TypeScript: Zero errors
- Build: 43 pages, passes
- Lint: 0 errors, 1 warning (avatar `<img>` — acceptable for external URLs)
- Dev Server: All routes HTTP 200

## Pending Work
- [ ] Form validation with Zod
- [ ] Responsive mobile testing
- [ ] Accessibility audit
- [ ] API integration layer
- [ ] Integrate Toast/Modal into pages

## Next Recommended Task

Integrate the new shared components (Toast, Modal, ConfirmationDialog) into existing pages, then add Zod form validation for onboarding and opportunity creation forms.

## Frontend Implementation Audit — 2026-10-25 (in progress)

Actual source inspection found gaps beyond the original checklist: onboarding's
experience choices had no inputs, opportunity actions were inert, mobile dashboard
navigation was missing, admin sidebar fell back to student links, modal/toast portals
referenced `document` during server rendering, and assessments linked straight to
fixed sample results. Clerk middleware initializes Clerk but does not enforce route
protection; role authorization remains a production integration requirement.

Implemented in this pass so far:
- Zod schemas and step validation; onboarding saves a demo profile and navigates to
  the selected role without changing account permissions.
- Opportunity drafts with tab-scoped storage, editing, validation, confirmation,
  demo publishing and deletion.
- SSR-safe native dialog/drawer, toast provider, focus restoration, accessible tabs,
  labeled inputs, reduced-motion configuration and Lenis animation-frame cleanup.
- Shared role navigation, admin links and dashboard mobile headers.
- Editable demo profile, saved demo applications/removal, and service-request drafts.
- Practice assessment questions, answer submission and calculated results; sample
  analytics remain separate.
- Institution/faculty student filters and admin skill add/edit/delete.
- Playwright and axe tooling with workflow, mobile and accessibility tests.

Checks: baseline lint/typecheck passed (one existing avatar image warning). Intermediate
lint/typecheck passed before the most recent additions. Browser verification is in
progress; sandbox restrictions require elevated local server/browser execution. Do
not treat the earlier phase's "all routes HTTP 200" claim as current verification.

Remaining in this active pass: complete the frontend interaction audit, finish browser
checks/fixes, run final lint/typecheck/build, and replace this in-progress entry with
verified results. Production backend, live data, real messaging/publishing, and
server-enforced role permissions are not implemented by demo storage.

Progress update:
- Project portfolio add/edit/remove and self-reported learning progress are connected.
- Candidate search/department/institution/year filters are wired; unavailable detailed
  profiles no longer silently display a different candidate's data.
- Scripted copilot responses are labeled; no live AI integration is implied.
- Production build passed with `npm run build -- --webpack`. Default Turbopack failed
  on an environment worker/port permission error; this remains a tooling limitation.
- Opportunity create/draft/reload/edit/demo-publish/delete passed Playwright.
- Browser audit found a progressbar missing a name (fixed), a test selector collision
  with Next's route announcer (fixed), and landing-page reveal overflow (fix applied,
  pending recheck). Broader route audit is still running.
