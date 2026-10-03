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

Clerk is wired into the root layout and middleware. Configure a Clerk instance before running locally; confirm route authorization and role permissions as part of any production deployment.

## Deployment

Build and run the production app with:

```bash
npm run build
npm run start
```

Set the required Clerk environment variables in your hosting provider. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for deployment options.
