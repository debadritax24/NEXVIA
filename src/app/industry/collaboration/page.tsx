"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const mentorshipPrograms = [
  { title: "Web Development Mentorship", mentees: 8, maxMentees: 10, skills: ["React", "Node.js"], status: "active" },
  { title: "Cloud Computing Guidance", mentees: 5, maxMentees: 8, skills: ["AWS", "Docker"], status: "active" },
  { title: "Data Science Mentoring", mentees: 3, maxMentees: 6, skills: ["Python", "ML"], status: "open" },
];

const workshops = [
  { title: "React Advanced Patterns", date: "2026-10-05", attendees: 120, maxAttendees: 150, status: "upcoming", type: "Workshop" },
  { title: "System Design Masterclass", date: "2026-10-12", attendees: 85, maxAttendees: 100, status: "upcoming", type: "Workshop" },
  { title: "Cloud Deployment Workshop", date: "2026-09-28", attendees: 60, maxAttendees: 60, status: "completed", type: "Workshop" },
];

const guestLectures = [
  { title: "Building Scalable Microservices", speaker: "CTO, StartupXYZ", date: "2026-10-08", registrations: 95, status: "upcoming" },
  { title: "AI in Production Systems", speaker: "ML Lead, DataLab", date: "2026-10-15", registrations: 72, status: "upcoming" },
];

const challenges = [
  { title: "HackTech 2026", description: "48-hour hackathon solving real industry problems", prize: "50,000", participants: 200, status: "open", deadline: "2026-10-20" },
  { title: "AI Innovation Challenge", description: "Build AI solutions for healthcare", prize: "1,00,000", participants: 150, status: "open", deadline: "2026-11-15" },
];

const liveProjects = [
  { title: "E-Commerce Platform Redesign", description: "Redesign our customer-facing platform", skills: ["React", "TypeScript"], students: 4, status: "in-progress" },
  { title: "Data Pipeline Automation", description: "Automate data ingestion workflows", skills: ["Python", "AWS"], students: 3, status: "open" },
];

const statusColors: Record<string, "success" | "warning" | "primary" | "default"> = {
  "active": "success",
  "open": "primary",
  "upcoming": "warning",
  "completed": "default",
  "in-progress": "success",
};

export default function IndustryCollaborationPage() {
  return (
    <div className="space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Collaboration"
          description="Engage with academia through mentorship, workshops, and innovation challenges."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }}>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-slate-900">Mentorship Programs</h2>
            <Button variant="outline" size="sm">Start Program</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mentorshipPrograms.map((program, i) => (
              <div key={i} className="p-4 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-slate-900">{program.title}</h3>
                  <Badge variant={statusColors[program.status]} size="sm">{program.status}</Badge>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {program.skills.map((skill) => (
                    <Badge key={skill} variant="primary" size="sm">{skill}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{program.mentees}/{program.maxMentees} mentees</span>
                  <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary-500"
                      style={{ width: `${(program.mentees / program.maxMentees) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2, duration: 0.4 }}>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-slate-900">Workshops</h2>
            <Button variant="outline" size="sm">Schedule Workshop</Button>
          </div>
          <div className="space-y-3">
            {workshops.map((workshop, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-slate-100">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-slate-900">{workshop.title}</h3>
                    <Badge variant={statusColors[workshop.status]} size="sm">{workshop.status}</Badge>
                  </div>
                  <p className="text-xs text-slate-500">{workshop.date} · {workshop.attendees}/{workshop.maxAttendees} registered</p>
                </div>
                <div className="w-24 shrink-0 ml-4">
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary-500"
                      style={{ width: `${(workshop.attendees / workshop.maxAttendees) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3, duration: 0.4 }}>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Guest Lectures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guestLectures.map((lecture, i) => (
              <div key={i} className="p-4 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-slate-900">{lecture.title}</h3>
                  <Badge variant={statusColors[lecture.status]} size="sm">{lecture.status}</Badge>
                </div>
                <p className="text-xs text-slate-500 mb-1">{lecture.speaker}</p>
                <p className="text-xs text-slate-500">{lecture.date} · {lecture.registrations} registrations</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.35, duration: 0.4 }}>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-slate-900">Innovation Challenges</h2>
              <Button variant="outline" size="sm">Create Challenge</Button>
            </div>
            <div className="space-y-3">
              {challenges.map((challenge, i) => (
                <div key={i} className="p-4 rounded-lg border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-slate-900">{challenge.title}</h3>
                    <Badge variant={statusColors[challenge.status]} size="sm">{challenge.status}</Badge>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">{challenge.description}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>Prize: {challenge.prize}</span>
                    <span>·</span>
                    <span>{challenge.participants} participants</span>
                    <span>·</span>
                    <span>Deadline: {challenge.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4, duration: 0.4 }}>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-slate-900">Live Projects</h2>
              <Button variant="outline" size="sm">Post Project</Button>
            </div>
            <div className="space-y-3">
              {liveProjects.map((project, i) => (
                <div key={i} className="p-4 rounded-lg border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-slate-900">{project.title}</h3>
                    <Badge variant={statusColors[project.status]} size="sm">{project.status.replace("-", " ")}</Badge>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">{project.description}</p>
                  <div className="flex items-center gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="primary" size="sm">{skill}</Badge>
                    ))}
                    <span className="text-xs text-slate-500 ml-auto">{project.students} students assigned</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
