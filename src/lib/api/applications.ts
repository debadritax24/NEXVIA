export interface Application {
  id: string;
  opportunityId: string;
  opportunityTitle: string;
  company: string;
  type: "internship" | "full-time" | "part-time" | "project" | "mentorship";
  status: "applied" | "under-review" | "shortlisted" | "assessment" | "interview" | "selected" | "rejected";
  appliedAt: string;
  updatedAt: string;
  matchScore: number;
  nextAction?: string;
  deadline?: string;
}

export const mockApplications: Application[] = [
  {
    id: "a1",
    opportunityId: "1",
    opportunityTitle: "Frontend Developer Intern",
    company: "TechCorp India",
    type: "internship",
    status: "shortlisted",
    appliedAt: "2026-09-16",
    updatedAt: "2026-09-18",
    matchScore: 87,
    nextAction: "Technical assessment due by Sep 22",
    deadline: "2026-09-22",
  },
  {
    id: "a2",
    opportunityId: "3",
    opportunityTitle: "React Developer",
    company: "WebAgency",
    type: "full-time",
    status: "under-review",
    appliedAt: "2026-09-14",
    updatedAt: "2026-09-17",
    matchScore: 68,
  },
  {
    id: "a3",
    opportunityId: "6",
    opportunityTitle: "Backend Developer",
    company: "CodeStudio",
    type: "full-time",
    status: "applied",
    appliedAt: "2026-09-15",
    updatedAt: "2026-09-15",
    matchScore: 61,
  },
  {
    id: "a4",
    opportunityId: "2",
    opportunityTitle: "Full Stack Engineer",
    company: "StartupXYZ",
    type: "full-time",
    status: "interview",
    appliedAt: "2026-09-08",
    updatedAt: "2026-09-19",
    matchScore: 73,
    nextAction: "Interview scheduled for Sep 21",
    deadline: "2026-09-21",
  },
  {
    id: "a5",
    opportunityId: "8",
    opportunityTitle: "Mentor - Web Development",
    company: "EduStack",
    type: "mentorship",
    status: "selected",
    appliedAt: "2026-09-10",
    updatedAt: "2026-09-18",
    matchScore: 78,
  },
];

export const applicationStatuses = [
  { key: "applied", label: "Applied", color: "bg-blue-100 text-blue-700" },
  { key: "under-review", label: "Under Review", color: "bg-amber-100 text-amber-700" },
  { key: "shortlisted", label: "Shortlisted", color: "bg-purple-100 text-purple-700" },
  { key: "assessment", label: "Assessment", color: "bg-indigo-100 text-indigo-700" },
  { key: "interview", label: "Interview", color: "bg-cyan-100 text-cyan-700" },
  { key: "selected", label: "Selected", color: "bg-green-100 text-green-700" },
  { key: "rejected", label: "Rejected", color: "bg-red-100 text-red-700" },
] as const;
