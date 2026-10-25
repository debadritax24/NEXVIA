# NEXVIA

**Bridging Skills. Connecting Futures.**

NEXVIA is an academia-industry skill intelligence platform connecting students, employers, faculty, educational institutions, and mentors. Its product journey is to assess skills, identify gaps, support learning and validation, and connect people with relevant opportunities.

This repository contains the NEXVIA frontend, built with the Next.js App Router. It includes public product pages and role-specific application surfaces for students, industry, institutions, faculty, and administrators.

## Features

- Public home, about, how-it-works, and opportunity browsing pages
- Student dashboard pages for skills, assessments, learning, careers, applications, mentorship, projects, and a skill passport
- Industry pages for opportunities, candidate browsing, and collaboration
- Institution and faculty pages for student, skill, training, and industry-demand workflows
- Administrative pages for users, skills, organizations, and reports
- Clerk components and middleware for authentication integration
- Shared UI components, responsive layouts, and route-level loading/error states

## Technology

- Next.js 16 with the App Router and React 19
- TypeScript with strict mode
- Tailwind CSS 4
- Clerk for authentication
- Framer Motion and Lenis for interface motion and scrolling
- Zod for runtime form and demo-storage validation
- Playwright and axe for browser verification

## Getting Started

### Requirements

- Node.js compatible with the installed Next.js version
- npm
- A Clerk application for local authentication

### Install

```bash
npm ci
```

Create or update the root `.env` file with the keys from your Clerk application:

```dotenv
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
CLERK_SECRET_KEY=your-secret-key
```

Keep real credentials private. Environment files are excluded from Git.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript without emitting files |
| `npm run test:e2e` | Run Chromium workflow, responsive-layout, and accessibility tests against the local server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## Application Routes

| Area | Routes |
| --- | --- |
| Public | `/`, `/about`, `/how-it-works`, `/opportunities` |
| Authentication and onboarding | `/sign-in`, `/sign-up`, `/onboarding` |
| Student | `/student` and student skills, assessment, learning, career, passport, applications, mentorship, copilot, profile, notifications, and projects pages |
| Industry | `/industry` and opportunity, candidate, and collaboration pages |
| Institution | `/institution` and skills, industry-demand, training, and students pages |
| Faculty | `/faculty` and students, opportunities, training, and collaboration pages |
| Admin | `/admin` and users, skills, organizations, and reports pages |

Dynamic detail pages are available for public opportunities and industry candidates.

## Project Structure

```text
src/
	app/          App Router pages, layouts, and route states
	components/   Landing, role-specific, shared, and UI components
	config/       Application configuration
	hooks/        Shared React hooks
	lib/          API/data modules, auth, constants, and utilities
	styles/       Shared styles
	types/        Shared TypeScript types
public/         Static assets
```

## Data and Integration Status

The frontend currently uses typed sample data exported from `src/lib/api/` for skills, opportunities, applications, and student profile-related views. A production backend and persistent data integration are not included in this repository yet. Treat displayed sample records as demonstration content, not live opportunities or user data.

Clerk is wired into the root layout and middleware, but the current middleware does **not** enforce sign-in or role authorization. Dashboard routes currently expose sample data for frontend review. Before connecting private data or deploying a live product, add server-enforced route/API authorization using trusted Clerk roles. Selecting a role during demo onboarding does not grant account permissions.

## Deployment

Build and run the production app with:

```bash
npm run build
npm run start
```

Set the required Clerk environment variables in your hosting provider. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for deployment options.

## Interactive Frontend Workflows

The frontend includes Zod validation for onboarding and opportunity creation,
native dialogs with focus containment/restoration, toast feedback, role-specific
mobile navigation, and keyboard-operable tabs. Opportunity drafts can be created, edited, preview-published,
and deleted. Profile edits, demo applications, request drafts, and admin skill edits
use validated, tab-scoped `sessionStorage`; they survive reloads in that tab but are
not account records and must never be used for authorization.

Practice assessments now present questions and calculate a score from the submitted
answers. The larger skill-analysis dashboard remains explicitly labeled sample data.
Invitations, messages, mentorship, and training requests are local drafts only; nothing
is sent externally. Institution/faculty student searches and department filters, candidate filters,
and admin skill management are connected to their sample datasets. Projects support
add/edit/remove; learning plans support self-reported demo progress. The copilot is
a scripted preview, not a connected AI service.

### Browser verification

Start `npm run dev` using its default localhost binding, then run in another terminal:

```bash
npx playwright install chromium
npm run test:e2e
```

The browser suite covers onboarding validation, opportunity draft/publish/delete,
practice scoring, profile dialogs, applications, project persistence, mobile
navigation/layouts, and automated accessibility checks. The route audit visits
39 non-auth static page routes at 390px and 1440px and runs axe checks at 390px.
It excludes Clerk-hosted authentication and is not a substitute for manual
screen-reader, cross-browser, or production performance testing. An existing Chromium
binary can be supplied with `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

### Build environment note

`npm run build -- --webpack` has passed in this workspace. The default Turbopack
build encountered a worker/port permission failure in this execution environment.
Google Fonts also requires network access during the build. The default build
script is unchanged; Webpack is available as an explicit fallback.

### Remaining production integration

- Backend/API contracts, persistent account data, loading/retry behavior against real services.
- Clerk sign-in enforcement, trusted role permissions, and organization/data isolation.
- Real opportunity publishing, application submission, messaging, training/enrollment,
  mentorship, assessment verification, learning content, and AI responses.
- Production hosting configuration, cross-browser/manual accessibility review,
  and a production performance audit.

See `MEMORY.md` for the latest verification results. No site has been deployed.
