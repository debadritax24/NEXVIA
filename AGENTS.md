# AGENTS.md — NEXVIA Frontend Engineering Manual

## Project Identity

**NEXVIA — Bridging Skills. Connecting Futures.**

NEXVIA is an Academia–Industry Skill Intelligence Platform connecting Students, Industries, Faculty, Educational Institutions, and Mentors.

**Core Journey:** Assess → Analyze → Identify Skill Gaps → Learn → Validate → Match → Apply → Track → Measure

---

## Frontend Philosophy

The frontend must be:

- Energetic, Modern, Exciting, Youth-oriented
- Professional, Premium, Interactive
- Accessible, Responsive, Fast, Scalable, Maintainable

The interface should make students feel: **"This platform can actually help me become industry-ready."**

### Avoid Making It Look Like

- A generic college portal
- A boring LMS
- A traditional government dashboard
- A generic job board
- A plain admin template

---

## Coding Standards

### Required

- TypeScript with strict typing
- Reusable components with composition
- Clean architecture
- Accessible HTML (semantic elements)
- Responsive design (mobile-first)
- Proper loading, error, empty, and skeleton states
- Reusable UI primitives
- Consistent naming conventions
- No unnecessary duplication
- No hardcoded secrets or fake API keys
- No unnecessary dependencies

### Environment Files

**DO NOT CREATE:**

- `.env.example`
- `.env.local`
- `.env.development`
- `.env.production`

**ONLY USE:**

- `.env`

Never commit secrets to Git.

---

## Working Process

For every future task follow this exact process:

### STEP 1 — Understand

Read `AGENTS.md`, `SKILL.md`, `MEMORY.md`

### STEP 2 — Inspect

Inspect the current project and relevant files

### STEP 3 — Plan

Determine what needs to change, which files are affected, dependencies, side effects

### STEP 4 — Implement

Make the smallest clean changes necessary. Do not rewrite unrelated code.

### STEP 5 — Test

Run lint, typecheck, build. Fix issues you introduced.

### STEP 6 — Review

Check UI, responsiveness, accessibility, performance, code quality

### STEP 7 — Update Memory

Update `MEMORY.md` with current project state

### STEP 8 — Report

Briefly report what changed, files changed, checks performed, remaining issues, next step

---

## Never

- Delete working functionality without reason
- Rewrite the whole application for a small change
- Install unnecessary dependencies
- Create duplicate components
- Hardcode secrets
- Create `.env.example` or `.env.local`
- Replace Clerk with custom authentication
- Use excessive animations
- Make every component client-side
- Ignore TypeScript errors
- Ignore accessibility
- Ignore mobile layouts

## Always

- Inspect first before making changes
- Reuse existing components
- Maintain consistency
- Keep architecture clean
- Update MEMORY.md
- Explain major decisions
- Preserve working functionality
