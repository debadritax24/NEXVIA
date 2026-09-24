export interface SkillItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  proficiency: number;
  verified: boolean;
}

export const mockSkills: SkillItem[] = [
  { id: "1", name: "React", slug: "react", category: "Frontend", proficiency: 82, verified: true },
  { id: "2", name: "TypeScript", slug: "typescript", category: "Languages", proficiency: 75, verified: true },
  { id: "3", name: "Node.js", slug: "nodejs", category: "Backend", proficiency: 68, verified: false },
  { id: "4", name: "PostgreSQL", slug: "postgresql", category: "Database", proficiency: 54, verified: true },
  { id: "5", name: "AWS", slug: "aws", category: "Cloud", proficiency: 41, verified: false },
  { id: "6", name: "Docker", slug: "docker", category: "DevOps", proficiency: 35, verified: false },
  { id: "7", name: "Python", slug: "python", category: "Languages", proficiency: 62, verified: true },
  { id: "8", name: "Git", slug: "git", category: "Tools", proficiency: 76, verified: true },
  { id: "9", name: "HTML/CSS", slug: "html-css", category: "Frontend", proficiency: 88, verified: true },
  { id: "10", name: "JavaScript", slug: "javascript", category: "Languages", proficiency: 80, verified: true },
  { id: "11", name: "MongoDB", slug: "mongodb", category: "Database", proficiency: 45, verified: false },
  { id: "12", name: "REST APIs", slug: "rest-apis", category: "Backend", proficiency: 72, verified: true },
  { id: "13", name: "GraphQL", slug: "graphql", category: "Backend", proficiency: 38, verified: false },
  { id: "14", name: "Figma", slug: "figma", category: "Design", proficiency: 55, verified: false },
  { id: "15", name: "Data Structures", slug: "data-structures", category: "CS Fundamentals", proficiency: 70, verified: true },
];

export interface SkillGapItem {
  skillId: string;
  skillName: string;
  currentLevel: number;
  requiredLevel: number;
  gapScore: number;
  priority: "high" | "medium" | "low";
}

export const mockSkillGaps: SkillGapItem[] = [
  { skillId: "5", skillName: "AWS", currentLevel: 41, requiredLevel: 75, gapScore: 34, priority: "high" },
  { skillId: "6", skillName: "Docker", currentLevel: 35, requiredLevel: 70, gapScore: 35, priority: "high" },
  { skillId: "11", skillName: "MongoDB", currentLevel: 45, requiredLevel: 65, gapScore: 20, priority: "medium" },
  { skillId: "13", skillName: "GraphQL", currentLevel: 38, requiredLevel: 60, gapScore: 22, priority: "medium" },
  { skillId: "3", skillName: "Node.js", currentLevel: 68, requiredLevel: 80, gapScore: 12, priority: "low" },
];

export const mockSkillCategories = [
  { id: "1", name: "Frontend", count: 3 },
  { id: "2", name: "Backend", count: 3 },
  { id: "3", name: "Database", count: 2 },
  { id: "4", name: "Cloud", count: 1 },
  { id: "5", name: "DevOps", count: 1 },
  { id: "6", name: "Languages", count: 3 },
  { id: "7", name: "Tools", count: 1 },
  { id: "8", name: "Design", count: 1 },
];
