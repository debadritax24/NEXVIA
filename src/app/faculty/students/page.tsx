"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { SearchInput } from "@/components/ui/search-input";
import { SkillBar } from "@/components/ui/skill-bar";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const students = [
  {
    id: "s1",
    name: "Priya Sharma",
    department: "CSE",
    cgpa: 8.2,
    readiness: 72,
    learningProgress: 85,
    skills: [
      { name: "React", level: 82 },
      { name: "TypeScript", level: 75 },
      { name: "Node.js", level: 68 },
    ],
    recentActivity: "Completed AWS assessment",
  },
  {
    id: "s2",
    name: "Arjun Patel",
    department: "IT",
    cgpa: 8.7,
    readiness: 68,
    learningProgress: 72,
    skills: [
      { name: "Python", level: 85 },
      { name: "Machine Learning", level: 70 },
      { name: "SQL", level: 78 },
    ],
    recentActivity: "Applied to TechCorp internship",
  },
  {
    id: "s3",
    name: "Sneha Reddy",
    department: "ECE",
    cgpa: 7.9,
    readiness: 45,
    learningProgress: 55,
    skills: [
      { name: "React", level: 55 },
      { name: "JavaScript", level: 60 },
      { name: "HTML/CSS", level: 70 },
    ],
    recentActivity: "Updated skill passport",
  },
  {
    id: "s4",
    name: "Rahul Kumar",
    department: "CSE",
    cgpa: 8.5,
    readiness: 78,
    learningProgress: 90,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "PostgreSQL", level: 72 },
      { name: "Docker", level: 45 },
    ],
    recentActivity: "Joined Docker workshop",
  },
  {
    id: "s5",
    name: "Ananya Singh",
    department: "IT",
    cgpa: 8.1,
    readiness: 65,
    learningProgress: 78,
    skills: [
      { name: "React", level: 78 },
      { name: "Next.js", level: 65 },
      { name: "Tailwind CSS", level: 82 },
    ],
    recentActivity: "Received mentorship feedback",
  },
];

export default function FacultyStudentsPage() {
  return (
    <div className="space-y-6">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Student Monitoring"
          description="Track student progress, skills, and learning outcomes."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <SearchInput placeholder="Search students..." />
          </div>
          <select className="h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500">
            <option>All Departments</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
          </select>
        </div>
      </motion.div>

      <div className="space-y-4">
        {students.map((student, i) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-500/10 flex items-center justify-center text-sm font-semibold text-primary-500">
                  {student.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{student.name}</h3>
                  <p className="text-xs text-slate-500">{student.department} · CGPA {student.cgpa}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-center">
                <div>
                  <p className="text-lg font-bold text-primary-500">{student.readiness}%</p>
                  <p className="text-[10px] text-slate-500">Readiness</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-green-600">{student.learningProgress}%</p>
                  <p className="text-[10px] text-slate-500">Learning</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {student.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} size="sm" />
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                <span className="font-medium text-slate-700">Recent:</span> {student.recentActivity}
              </p>
              <Badge variant={student.readiness >= 70 ? "success" : student.readiness >= 40 ? "warning" : "error"} size="sm">
                {student.readiness >= 70 ? "On Track" : student.readiness >= 40 ? "Needs Attention" : "At Risk"}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
