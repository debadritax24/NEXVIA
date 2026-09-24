"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const researchCollabs = [
  { title: "AI-Driven Skill Assessment Framework", collaborators: ["IIT Bombay", "NASSCOM"], duration: "1 year", status: "active", funding: "5L", role: "Co-PI", milestones: "3 of 6 completed" },
  { title: "Adaptive Learning Platform", collaborators: ["IIIT Hyderabad", "AICTE"], duration: "6 months", status: "active", funding: "3L", role: "Principal Investigator", milestones: "2 of 4 completed" },
  { title: "Industry-Academia Bridge Study", collaborators: ["TechCorp India"], duration: "3 months", status: "completed", funding: "1.5L", role: "Consultant", milestones: "All completed" },
];

const industryInteractions = [
  { title: "Guest Lecture Series", company: "TechCorp India", topic: "Microservices Architecture", date: "2026-10-12", status: "upcoming", type: "Lecture" },
  { title: "Industry Panel Discussion", company: "NASSCOM", topic: "Future of Tech Careers", date: "2026-10-20", status: "upcoming", type: "Panel" },
  { title: "Company Visit", company: "StartupXYZ", topic: "Startup Culture & Practices", date: "2026-11-05", status: "upcoming", type: "Visit" },
];

const mentorshipOpps = [
  { title: "Mentor Junior Faculty", mentees: 3, maxMentees: 5, expertise: ["Cloud Computing", "AWS"], status: "open", description: "Guide junior faculty in cloud computing curriculum development." },
  { title: "Student Project Guidance", mentees: 8, maxMentees: 10, expertise: ["React", "Node.js"], status: "active", description: "Guide final year students in capstone projects." },
  { title: "Industry Mentor", mentees: 2, maxMentees: 4, expertise: ["DevOps", "Docker"], status: "open", description: "Connect with industry professionals for collaborative projects." },
];

const statusColors: Record<string, "success" | "warning" | "primary" | "default"> = {
  active: "success",
  completed: "default",
  upcoming: "primary",
  open: "primary",
};

export default function FacultyCollaborationPage() {
  return (
    <div className="space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Collaboration"
          description="Research collaboration, industry interaction, and mentorship opportunities."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-900">Research Collaborations</h2>
          <Button variant="outline" size="sm">Propose New</Button>
        </div>
        <div className="space-y-3">
          {researchCollabs.map((collab, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{collab.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{collab.role} · {collab.duration} · {collab.funding} funding</p>
                </div>
                <Badge variant={statusColors[collab.status]} size="sm">{collab.status}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {collab.collaborators.map((c) => (
                    <Badge key={c} variant="primary" size="sm">{c}</Badge>
                  ))}
                </div>
                <span className="text-xs text-slate-500">{collab.milestones}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Industry Interaction</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {industryInteractions.map((item, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="primary" size="sm">{item.type}</Badge>
                <Badge variant={statusColors[item.status]} size="sm">{item.status}</Badge>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-500 mb-1">{item.company}</p>
              <p className="text-xs text-slate-600 mb-2">{item.topic}</p>
              <p className="text-xs text-slate-500">{item.date}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Mentorship Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mentorshipOpps.map((opp, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <Badge variant={statusColors[opp.status]} size="sm">{opp.status}</Badge>
                <span className="text-xs text-slate-500">{opp.mentees}/{opp.maxMentees} mentees</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{opp.title}</h3>
              <p className="text-xs text-slate-600 mb-3">{opp.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {opp.expertise.map((e) => (
                  <Badge key={e} variant="primary" size="sm">{e}</Badge>
                ))}
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden mb-3">
                <div className="h-full rounded-full bg-primary-500" style={{ width: `${(opp.mentees / opp.maxMentees) * 100}%` }} />
              </div>
              <Button variant={opp.status === "open" ? "primary" : "secondary"} size="sm" className="w-full">
                {opp.status === "open" ? "Join as Mentor" : "View Details"}
              </Button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
