# SKILL.md — NEXVIA Frontend Engineering Knowledge Base

## Core Technologies

### Next.js

**What it does:** React framework with App Router, server components, and file-based routing.

**Why NEXVIA uses it:** Enables server-side rendering, static generation, and a modern routing model. App Router provides layout nesting, loading states, and server/client component boundaries.

**How we use it:**
- App Router for all routes
- Server Components as default (faster initial loads, less JS)
- Client Components only for interactivity (animations, forms, state)
- Route groups for logical organization: `(marketing)`, `(auth)`, `dashboard`
- Layout nesting for shared UI (navbars, sidebars)
- `loading.tsx` and `error.tsx` for every route segment
- `not-found.tsx` for 404 pages

**Common mistakes:**
- Making every component a Client Component
- Not using `loading.tsx` for async routes
- Putting business logic in page components
- Not using `Suspense` boundaries
- Fetching data in Client Components when Server Components suffice

---

### React

**What it does:** UI library for building component-based interfaces.

**Why NEXVIA uses it:** Industry standard, massive ecosystem, strong TypeScript support.

**How we use it:**
- Functional components exclusively
- Hooks for state and effects
- Composition over inheritance
- Proper key usage in lists
- Memoization only when profiling shows it matters
- Error boundaries at route level

**Common mistakes:**
- Inline functions in JSX causing re-renders
- Missing dependency arrays in `useEffect`
- Mutating state directly
- Using `any` type
- Not handling loading/error states

---

### TypeScript

**What it does:** Static type system for JavaScript.

**Why NEXVIA uses it:** Catches bugs at compile time, enables better IDE support, documents intent, prevents runtime errors.

**How we use it:**
- Strict mode (`strict: true`)
- Interfaces for object shapes
- Enums for fixed values (sparingly)
- Discriminated unions for state management
- Generics for reusable components
- `never` for unreachable code
- `unknown` over `any`

**Common mistakes:**
- Using `any` to silence errors
- Not typing API responses
- Ignoring TypeScript errors in build
- Defining types in the wrong location
- Not using type narrowing

---

### Tailwind CSS

**What it does:** Utility-first CSS framework.

**Why NEXVIA uses it:** Rapid styling, consistent design system, small production CSS, excellent with Next.js.

**How we use it:**
- Utility classes directly in JSX
- Custom theme via `tailwind.config.ts` (colors, fonts, spacing)
- `@apply` only for truly reusable patterns
- Responsive design with mobile-first approach
- Dark mode support (future)
- Component variants via `clsx`/`cn` utility

**Common mistakes:**
- Overusing `@apply` (defeats utility purpose)
- Inline style overrides conflicting with Tailwind
- Not configuring the content paths properly
- Inconsistent spacing/color values
- Not using the design tokens

---

## Animation

### Framer Motion

**What it does:** Animation library for React.

**Why NEXVIA uses it:** Declarative animations, scroll-triggered reveals, layout animations, and gesture support.

**How we use it:**
- `motion.div` for animated containers
- `AnimatePresence` for mount/unmount transitions
- `useInView` for scroll-triggered animations
- `useScroll` for parallax effects
- `variants` for staggered children
- `whileHover` and `whileTap` for micro-interactions
- `transition` with proper easing

**Animation principles:**
- Purpose: every animation must improve UX
- Duration: 200-500ms for most animations
- Easing: `easeOut` for entrances, `easeIn` for exits
- Stagger: 50-100ms between children
- Respect `prefers-reduced-motion`

**Common mistakes:**
- Animating everything (animation fatigue)
- Long durations (>1s) for UI animations
- Ignoring reduced motion preferences
- Heavy animations on mobile
- Animating layout-heavy elements

---

## Smooth Scrolling

### Lenis

**What it does:** Smooth scroll library.

**Why NEXVIA uses it:** Polished scrolling experience, buttery smooth page transitions.

**How we use it:**
- Initialize in root layout
- Configure for the marketing/landing pages
- Disable on pages where native scrolling is preferred
- Sync with Framer Motion's scroll animations

**Common mistakes:**
- Forcing smooth scroll on all pages (some pages need instant scroll)
- Not handling accessibility (reduced motion)
- Conflict with native anchor scrolling
- Performance issues on low-end devices

---

## Authentication

### Clerk

**What it does:** Complete authentication and user management.

**Why NEXVIA uses it:** Handles sign-up, sign-in, sessions, user management without building custom auth. Provides React hooks and components.

**How we use it:**
- `<ClerkProvider>` in root layout
- `<SignIn>` and `<SignUp>` components for auth pages
- `useUser()` and `useAuth()` hooks in Client Components
- Middleware for route protection
- User metadata for role-based routing
- `<SignedIn>` and `<SignedOut>` for conditional rendering

**Protected routes:**
```typescript
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

**User role handling:**
- Store role in Clerk public metadata
- Check role in middleware and components
- Route to appropriate dashboard based on role

**Common mistakes:**
- Building custom auth instead of using Clerk
- Exposing protected UI based on URL alone
- Not handling session expiry
- Storing sensitive data in public metadata
- Not protecting API routes

---

## Server Components vs Client Components

### Server Components (Default)

Use for:
- Pages that fetch data
- Static content
- SEO-critical content
- Layout components without interactivity

### Client Components

Use when the component needs:
- `useState`, `useReducer`
- `useEffect`
- Event handlers (`onClick`, `onChange`)
- Browser APIs
- Framer Motion animations
- Clerk hooks (`useUser`)
- Form state management

**Pattern:**
```typescript
// Server Component (default)
import { ClientInteractive } from './client-component';

export default async function Page() {
  const data = await fetchData(); // Server-side
  return <ClientInteractive data={data} />;
}
```

---

## Data Fetching

### Server-Side (Preferred)

- Direct database calls in Server Components
- Route handlers for API endpoints
- Server Actions for mutations

### Client-Side

- Fetch in `useEffect` for dynamic data
- SWR/React Query pattern for caching (future)
- Polling for real-time updates (future)

**Error handling pattern:**
- Always wrap fetches in try/catch
- Return structured error responses
- Display user-friendly error messages
- Provide retry mechanisms

---

## Responsive Design

### Breakpoints (Tailwind defaults)

- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (laptop)
- `xl`: 1280px (desktop)
- `2xl`: 1536px (large screens)

### Strategy

- Mobile-first: design for smallest screen first
- Progressive enhancement: add complexity for larger screens
- Touch-friendly: 44px minimum touch targets
- Readable: 16px minimum font size on mobile

---

## Accessibility

### Requirements

- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- Keyboard navigation (tab order, focus states)
- Form labels (visible or `aria-label`)
- Focus indicators (visible outline)
- Color contrast (WCAG AA minimum)
- Image alt text
- Reduced motion support
- Screen reader testing

### ARIA Usage

- Use native HTML first
- ARIA only when HTML semantics are insufficient
- `aria-label` for icon-only buttons
- `aria-expanded` for collapsible sections
- `role` only when no semantic element exists

---

## Performance

### Optimization Strategy

- Server Components reduce client JS bundle
- Image optimization with `next/image`
- Font optimization with `next/font`
- Code splitting via dynamic imports
- Lazy loading below-the-fold content
- Minimal third-party scripts
- Efficient animation (transform/opacity only)
- `React.memo` only when profiling shows need

### Monitoring

- Lighthouse score targets: 90+ performance
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Bundle size tracking
- Runtime performance profiling

---

## Project Structure

```
src/
├── app/                    # App Router routes
│   ├── (marketing)/        # Public landing pages
│   ├── (auth)/             # Auth pages (sign-in, sign-up)
│   ├── dashboard/          # Authenticated dashboards
│   ├── student/            # Student-specific routes
│   ├── industry/           # Industry-specific routes
│   ├── institution/        # Institution-specific routes
│   ├── faculty/            # Faculty-specific routes
│   ├── api/                # Route handlers
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
│
├── components/
│   ├── ui/                 # Reusable primitives (Button, Card, Input)
│   ├── layout/             # Layout components (Header, Footer, Sidebar)
│   ├── navigation/         # Navigation components
│   ├── landing/            # Landing page sections
│   ├── dashboard/          # Dashboard components
│   ├── student/            # Student-specific components
│   ├── industry/           # Industry-specific components
│   ├── institution/        # Institution-specific components
│   ├── faculty/            # Faculty-specific components
│   └── shared/             # Cross-module shared components
│
├── lib/
│   ├── api/                # API client and utilities
│   ├── auth/               # Auth utilities
│   ├── utils/              # General utilities (cn, formatDate, etc.)
│   ├── constants/          # App constants
│   └── validations/        # Zod schemas
│
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── config/                 # App configuration
└── styles/                 # Global styles
```
