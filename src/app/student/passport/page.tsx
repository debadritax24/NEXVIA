"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { mockSkills } from "@/lib/api/skills";

const verifiedSkills = mockSkills.filter((s) => s.verified);
const assessedSkills = mockSkills.filter((s) => !s.verified);
const projects = [
  { name: "E-commerce Platform", technologies: ["React", "Node.js", "PostgreSQL"] },
  { name: "Task Manager App", technologies: ["TypeScript", "Next.js", "Tailwind"] },
  { name: "Weather Dashboard", technologies: ["JavaScript", "REST APIs", "CSS"] },
];
const achievements = [
  "Top 10% in React Assessment",
  "30-Day Coding Streak",
  "Completed 5 Skill Assessments",
];
const certifications = [
  { name: "React Fundamentals", issuer: "NEXVIA", date: "Sep 2026" },
  { name: "TypeScript Basics", issuer: "NEXVIA", date: "Aug 2026" },
];

export default function PassportPage() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <PageHeader
        title="Skill Passport"
        description="Your verified digital identity showcasing skills, achievements, and certifications."
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "Skill Passport" }]}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 px-8 py-8 text-white">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                PS
              </div>
              <div>
                <h2 className="text-2xl font-bold">Priya Sharma</h2>
                <p className="text-primary-100">IIT Delhi - Computer Science</p>
                <p className="text-primary-200 text-sm mt-1">Member since August 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-6 text-sm">
              <div>
                <p className="text-2xl font-bold">{verifiedSkills.length}</p>
                <p className="text-primary-100">Verified Skills</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{assessedSkills.length}</p>
                <p className="text-primary-100">Assessed Skills</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{certifications.length}</p>
                <p className="text-primary-100">Certifications</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{projects.length}</p>
                <p className="text-primary-100">Projects</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Verified Skills</h3>
              <div className="flex flex-wrap gap-2">
                {verifiedSkills.map((skill) => (
                  <Badge key={skill.id} variant="success" size="md">
                    <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {skill.name} ({skill.proficiency}%)
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Assessed Skills</h3>
              <div className="flex flex-wrap gap-2">
                {assessedSkills.map((skill) => (
                  <Badge key={skill.id} variant="primary" size="md">
                    {skill.name} ({skill.proficiency}%)
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Certifications</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100">
                    <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{cert.name}</p>
                      <p className="text-xs text-slate-500">{cert.issuer} - {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Projects</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div key={project.name} className="p-3 rounded-lg border border-slate-100">
                    <p className="text-sm font-medium text-slate-900 mb-2">{project.name}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="default" size="sm">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Achievements</h3>
              <div className="space-y-2">
                {achievements.map((achievement) => (
                  <div key={achievement} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
