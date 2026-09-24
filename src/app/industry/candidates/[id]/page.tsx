"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { SkillBar } from "@/components/ui/skill-bar";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const candidateData: Record<string, {
  name: string;
  institution: string;
  department: string;
  cgpa: number;
  graduationYear: number;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  skills: { name: string; level: number; verified: boolean }[];
  projects: { title: string; description: string; skills: string[] }[];
  certifications: { name: string; issuer: string; date: string }[];
  experience: string;
  skillPassport: { overallScore: number; rank: string; badges: string[] };
  matchExplanation: string;
}> = {
  c1: {
    name: "Priya Sharma",
    institution: "IIT Delhi",
    department: "Computer Science",
    cgpa: 8.2,
    graduationYear: 2027,
    bio: "Passionate CS student focused on building scalable web applications with modern technologies.",
    email: "priya.sharma@iitd.ac.in",
    linkedin: "linkedin.com/in/priyasharma",
    github: "github.com/priyasharma",
    skills: [
      { name: "React", level: 82, verified: true },
      { name: "TypeScript", level: 75, verified: true },
      { name: "Node.js", level: 68, verified: false },
      { name: "Python", level: 62, verified: true },
      { name: "PostgreSQL", level: 54, verified: true },
      { name: "AWS", level: 41, verified: false },
      { name: "Git", level: 76, verified: true },
      { name: "HTML/CSS", level: 88, verified: true },
    ],
    projects: [
      { title: "E-Commerce Platform", description: "Full-stack e-commerce app with React, Node.js, and PostgreSQL.", skills: ["React", "Node.js", "PostgreSQL"] },
      { title: "Task Manager API", description: "REST API with authentication, role-based access, and rate limiting.", skills: ["Node.js", "REST APIs", "JWT"] },
      { title: "Weather Dashboard", description: "Real-time weather app using OpenWeatherMap API.", skills: ["React", "JavaScript", "CSS"] },
    ],
    certifications: [
      { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2026-06" },
      { name: "Meta Frontend Developer", issuer: "Meta (Coursera)", date: "2026-03" },
    ],
    experience: "2 internships at TechStart and WebAgency",
    skillPassport: { overallScore: 72, rank: "Advanced", badges: ["Frontend Pro", "Cloud Explorer", "API Builder"] },
    matchExplanation: "Strong React and TypeScript skills align well with your frontend developer role. Backend experience with Node.js provides full-stack potential. AWS certification shows cloud readiness.",
  },
};

const defaultCandidate = candidateData.c1;

export default function CandidateDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const candidate = candidateData[id] || defaultCandidate;

  return (
    <div className="space-y-6">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title={candidate.name}
          description={`${candidate.department} · ${candidate.institution} · Class of ${candidate.graduationYear}`}
          breadcrumbs={[
            { label: "Industry", href: "/industry" },
            { label: "Candidates", href: "/industry/candidates" },
            { label: candidate.name },
          ]}
        />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-base font-semibold text-slate-900 mb-3">About</h2>
            <p className="text-sm text-slate-600 mb-4">{candidate.bio}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">CGPA</p>
                <p className="text-lg font-bold text-slate-900">{candidate.cgpa}</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">Projects</p>
                <p className="text-lg font-bold text-slate-900">{candidate.projects.length}</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">Certifications</p>
                <p className="text-lg font-bold text-slate-900">{candidate.certifications.length}</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">Experience</p>
                <p className="text-sm font-bold text-slate-900">{candidate.experience.split(" ").slice(0, 2).join(" ")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-base font-semibold text-slate-900 mb-4">Skills</h2>
            <div className="space-y-4">
              {candidate.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  verified={skill.verified}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-base font-semibold text-slate-900 mb-4">Projects</h2>
            <div className="space-y-4">
              {candidate.projects.map((project, i) => (
                <div key={i} className="p-4 rounded-lg border border-slate-100">
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-slate-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="primary" size="sm">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-base font-semibold text-slate-900 mb-4">Certifications</h2>
            <div className="space-y-3">
              {candidate.certifications.map((cert, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{cert.name}</p>
                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-slate-500">{cert.date}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-base font-semibold text-slate-900 mb-3">Skill Passport</h2>
            <div className="text-center mb-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/10">
                <span className="text-2xl font-bold text-primary-500">{candidate.skillPassport.overallScore}</span>
              </div>
              <p className="text-sm font-medium text-slate-900 mt-2">{candidate.skillPassport.rank}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {candidate.skillPassport.badges.map((badge) => (
                <Badge key={badge} variant="accent" size="sm">{badge}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-base font-semibold text-slate-900 mb-3">Match Explanation</h2>
            <p className="text-sm text-slate-600">{candidate.matchExplanation}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-base font-semibold text-slate-900 mb-3">Contact</h2>
            <div className="space-y-2 text-sm">
              <p className="text-slate-600">
                <span className="font-medium text-slate-700">Email:</span> {candidate.email}
              </p>
              <p className="text-slate-600">
                <span className="font-medium text-slate-700">LinkedIn:</span> {candidate.linkedin}
              </p>
              <p className="text-slate-600">
                <span className="font-medium text-slate-700">GitHub:</span> {candidate.github}
              </p>
            </div>
          </motion.div>

          <div className="space-y-2">
            <Button className="w-full" size="lg">Invite to Apply</Button>
            <Button variant="outline" className="w-full" size="lg">Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
