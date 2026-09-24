export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
  role: "STUDENT" | "FACULTY" | "INDUSTRY" | "INSTITUTION" | "ADMIN";
  institution?: string;
  department?: string;
  enrollmentYear?: number;
  graduationYear?: number;
  cgpa?: number;
  careerInterests: string[];
  bio?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  resumeUrl?: string;
}

export const mockStudentProfile: UserProfile = {
  id: "u1",
  firstName: "Priya",
  lastName: "Sharma",
  email: "priya.sharma@iitd.ac.in",
  role: "STUDENT",
  institution: "IIT Delhi",
  department: "Computer Science",
  enrollmentYear: 2023,
  graduationYear: 2027,
  cgpa: 8.2,
  careerInterests: ["Full Stack Development", "Cloud Architecture", "AI/ML"],
  bio: "Passionate CS student focused on building scalable web applications.",
  linkedinUrl: "https://linkedin.com/in/priyasharma",
  githubUrl: "https://github.com/priyasharma",
};

export const mockMentors = [
  {
    id: "m1",
    name: "Rahul Verma",
    role: "Senior Engineer at Google",
    expertise: ["React", "System Design", "TypeScript"],
    experience: "8 years",
    industry: "Technology",
    rating: 4.9,
    mentees: 12,
    available: true,
    avatar: "RV",
  },
  {
    id: "m2",
    name: "Anita Desai",
    role: "Tech Lead at Amazon",
    expertise: ["Node.js", "AWS", "Microservices"],
    experience: "10 years",
    industry: "E-Commerce",
    rating: 4.8,
    mentees: 8,
    available: true,
    avatar: "AD",
  },
  {
    id: "m3",
    name: "Vikram Singh",
    role: "CTO at StartupXYZ",
    expertise: ["Python", "Machine Learning", "Data Science"],
    experience: "12 years",
    industry: "AI/ML",
    rating: 4.7,
    mentees: 15,
    available: false,
    avatar: "VS",
  },
  {
    id: "m4",
    name: "Meera Nair",
    role: "DevOps Lead at Microsoft",
    expertise: ["Docker", "Kubernetes", "CI/CD"],
    experience: "7 years",
    industry: "Cloud",
    rating: 4.9,
    mentees: 6,
    available: true,
    avatar: "MN",
  },
];

export const mockNotifications = [
  { id: "n1", type: "opportunity", title: "New internship match", message: "Frontend Developer Intern at TechCorp India matches your skills (87%)", read: false, createdAt: "2026-09-20T10:00:00Z" },
  { id: "n2", type: "application", title: "Application update", message: "Your application to WebAgency has been shortlisted", read: false, createdAt: "2026-09-19T14:30:00Z" },
  { id: "n3", type: "assessment", title: "Assessment reminder", message: "Complete your Cloud Computing assessment to improve your profile", read: true, createdAt: "2026-09-18T09:00:00Z" },
  { id: "n4", type: "mentor", title: "Mentor message", message: "Rahul Verma shared feedback on your project", read: true, createdAt: "2026-09-17T16:00:00Z" },
  { id: "n5", type: "skill", title: "Skill recommendation", message: "Based on market trends, consider learning Docker", read: true, createdAt: "2026-09-16T11:00:00Z" },
  { id: "n6", type: "platform", title: "Platform update", message: "NEXVIA now supports LinkedIn skill verification", read: true, createdAt: "2026-09-15T08:00:00Z" },
];

export const mockCareerPaths = [
  {
    id: "cp1",
    title: "Full Stack Developer",
    requiredSkills: ["JavaScript", "React", "Node.js", "PostgreSQL", "Git", "REST APIs"],
    readiness: 72,
    demand: "high",
    avgSalary: "8-15 LPA",
    description: "Build complete web applications from frontend to backend.",
  },
  {
    id: "cp2",
    title: "Frontend Specialist",
    requiredSkills: ["React", "TypeScript", "HTML/CSS", "JavaScript", "Figma"],
    readiness: 81,
    demand: "high",
    avgSalary: "6-12 LPA",
    description: "Create exceptional user interfaces and experiences.",
  },
  {
    id: "cp3",
    title: "Cloud Engineer",
    requiredSkills: ["AWS", "Docker", "Linux", "Networking", "Terraform"],
    readiness: 38,
    demand: "very-high",
    avgSalary: "10-20 LPA",
    description: "Design and manage cloud infrastructure and deployments.",
  },
  {
    id: "cp4",
    title: "Data Scientist",
    requiredSkills: ["Python", "SQL", "Machine Learning", "Data Analysis", "Statistics"],
    readiness: 45,
    demand: "high",
    avgSalary: "8-18 LPA",
    description: "Extract insights and build ML models from data.",
  },
  {
    id: "cp5",
    title: "DevOps Engineer",
    requiredSkills: ["Docker", "AWS", "CI/CD", "Linux", "Git"],
    readiness: 32,
    demand: "very-high",
    avgSalary: "10-22 LPA",
    description: "Automate deployments and manage infrastructure.",
  },
];

export const mockLearningResources = [
  { id: "lr1", skill: "AWS", title: "AWS Cloud Practitioner", type: "course", provider: "AWS", duration: "20 hours", difficulty: "beginner", rating: 4.8 },
  { id: "lr2", skill: "Docker", title: "Docker for Beginners", type: "course", provider: "Udemy", duration: "12 hours", difficulty: "beginner", rating: 4.7 },
  { id: "lr3", skill: "GraphQL", title: "GraphQL Complete Guide", type: "course", provider: "Coursera", duration: "15 hours", difficulty: "intermediate", rating: 4.6 },
  { id: "lr4", skill: "MongoDB", title: "MongoDB University", type: "course", provider: "MongoDB", duration: "10 hours", difficulty: "beginner", rating: 4.5 },
  { id: "lr5", skill: "Node.js", title: "Node.js Masterclass", type: "course", provider: "Udemy", duration: "25 hours", difficulty: "intermediate", rating: 4.8 },
];
