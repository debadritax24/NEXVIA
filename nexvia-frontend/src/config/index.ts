export const siteConfig = {
  name: "NEXVIA",
  tagline: "Bridging Skills. Connecting Futures.",
  description:
    "NEXVIA is an Academia-Industry Skill Intelligence Platform connecting Students, Industries, Faculty, Educational Institutions, and Mentors.",
  url: "https://nexvia.in",
  ogImage: "https://nexvia.in/og.png",
  links: {
    twitter: "https://twitter.com/nexvia",
    github: "https://github.com/nexvia",
  },
} as const;

export const roles = {
  STUDENT: "STUDENT",
  FACULTY: "FACULTY",
  INDUSTRY: "INDUSTRY",
  INSTITUTION: "INSTITUTION",
  ADMIN: "ADMIN",
} as const;

export type UserRole = (typeof roles)[keyof typeof roles];

export const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "For Students", href: "#students" },
  { label: "For Industry", href: "#industry" },
  { label: "For Institutions", href: "#institutions" },
] as const;
