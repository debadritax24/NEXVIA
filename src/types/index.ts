export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "STUDENT" | "FACULTY" | "INDUSTRY" | "INSTITUTION" | "ADMIN";
  avatarUrl?: string;
  createdAt: string;
}

export interface Skill {
  id: string;
  name: string;
  slug: string;
  category: string;
  proficiency?: number;
  verified?: boolean;
}

export interface SkillGap {
  skill: Skill;
  currentLevel: number;
  requiredLevel: number;
  gapScore: number;
  priority: "high" | "medium" | "low";
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "full-time" | "part-time" | "internship";
  skills: string[];
  matchScore?: number;
  postedAt: string;
}

export interface MatchResult {
  opportunityId: string;
  totalScore: number;
  skillMatch: number;
  eligibilityMatch: number;
  careerMatch: number;
  explanation: {
    strengths: string[];
    gaps: string[];
    actions: string[];
  };
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}
