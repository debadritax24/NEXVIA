"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const fdpOpportunities = [
  { title: "Cloud Computing for Educators", provider: "AWS Academy", duration: "5 days", deadline: "2026-10-15", type: "FDP", spots: 25, enrolled: 18, status: "open" },
  { title: "AI/ML Curriculum Workshop", provider: "NASSCOM", duration: "3 days", deadline: "2026-10-20", type: "FDP", spots: 30, enrolled: 22, status: "open" },
  { title: "DevOps Teaching Methodology", provider: "Google Cloud", duration: "2 days", deadline: "2026-11-01", type: "FDP", spots: 20, enrolled: 20, status: "full" },
];

const trainingOpportunities = [
  { title: "Industry Immersion Program", company: "TechCorp India", duration: "2 weeks", deadline: "2026-10-25", type: "Training", spots: 10, enrolled: 7, status: "open" },
  { title: "Research Methodology Workshop", company: "IIT Delhi", duration: "1 week", deadline: "2026-11-05", type: "Training", spots: 15, enrolled: 12, status: "open" },
];

const consultancyOpportunities = [
  { title: "EdTech Platform Advisory", company: "LearnTech", duration: "3 months", deadline: "2026-10-30", type: "Consultancy", budget: "2L", status: "open" },
  { title: "Curriculum Design Review", company: "NBA Accreditation", duration: "1 month", deadline: "2026-11-10", type: "Consultancy", budget: "1.5L", status: "open" },
];

const researchOpportunities = [
  { title: "AI in Education Research", collaborators: ["IIT Bombay", "IIIT Hyderabad"], duration: "1 year", type: "Research", funding: "5L", status: "open" },
  { title: "Skill Assessment Framework", collaborators: ["NASSCOM", "AICTE"], duration: "6 months", type: "Research", funding: "3L", status: "open" },
];

export default function FacultyOpportunitiesPage() {
  return (
    <div className="space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Opportunities"
          description="FDPs, industrial training, consultancy, and research opportunities."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Faculty Development Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fdpOpportunities.map((opp, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="accent" size="sm">{opp.type}</Badge>
                <Badge variant={opp.status === "full" ? "default" : "success"} size="sm">{opp.status}</Badge>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{opp.title}</h3>
              <p className="text-xs text-slate-500 mb-2">{opp.provider} · {opp.duration}</p>
              <p className="text-xs text-slate-500 mb-3">Deadline: {opp.deadline} · {opp.enrolled}/{opp.spots} enrolled</p>
              <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden mb-3">
                <div className="h-full rounded-full bg-accent-500" style={{ width: `${(opp.enrolled / opp.spots) * 100}%` }} />
              </div>
              <Button variant={opp.status === "full" ? "secondary" : "primary"} size="sm" className="w-full" disabled={opp.status === "full"}>
                {opp.status === "full" ? "Full" : "Apply"}
              </Button>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Industrial Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainingOpportunities.map((opp, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="primary" size="sm">{opp.type}</Badge>
                <Badge variant="success" size="sm">Open</Badge>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{opp.title}</h3>
              <p className="text-xs text-slate-500 mb-2">{opp.company} · {opp.duration}</p>
              <p className="text-xs text-slate-500 mb-3">Deadline: {opp.deadline} · {opp.enrolled}/{opp.spots} enrolled</p>
              <Button variant="primary" size="sm" className="w-full">Apply</Button>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Consultancy Projects</h2>
          <div className="space-y-3">
            {consultancyOpportunities.map((opp, i) => (
              <div key={i} className="p-4 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="success" size="sm">{opp.type}</Badge>
                  <span className="text-xs font-semibold text-green-600">{opp.budget}</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{opp.title}</h3>
                <p className="text-xs text-slate-500">{opp.company} · {opp.duration} · Deadline: {opp.deadline}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.35, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Research Collaborations</h2>
          <div className="space-y-3">
            {researchOpportunities.map((opp, i) => (
              <div key={i} className="p-4 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="warning" size="sm">{opp.type}</Badge>
                  <span className="text-xs font-semibold text-amber-600">{opp.funding} funding</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{opp.title}</h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {opp.collaborators.map((c) => (
                    <Badge key={c} variant="primary" size="sm">{c}</Badge>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">Duration: {opp.duration}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
