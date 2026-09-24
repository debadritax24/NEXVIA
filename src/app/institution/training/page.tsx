"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const workshops = [
  { title: "AWS Cloud Practitioner Bootcamp", type: "Workshop", targetSkills: ["AWS", "Cloud"], expectedImpact: "High", duration: "2 days", enrolled: 45, maxEnrolled: 60, status: "upcoming" },
  { title: "Docker & Kubernetes Hands-on", type: "Workshop", targetSkills: ["Docker", "Kubernetes"], expectedImpact: "High", duration: "3 days", enrolled: 38, maxEnrolled: 50, status: "upcoming" },
  { title: "React Performance Optimization", type: "Workshop", targetSkills: ["React", "JavaScript"], expectedImpact: "Medium", duration: "1 day", enrolled: 52, maxEnrolled: 60, status: "full" },
];

const fdps = [
  { title: "Faculty Development on AI/ML", type: "FDP", targetSkills: ["AI", "Machine Learning"], expectedImpact: "High", duration: "5 days", enrolled: 25, maxEnrolled: 30, status: "upcoming" },
  { title: "Cloud Computing for Educators", type: "FDP", targetSkills: ["AWS", "Azure"], expectedImpact: "High", duration: "3 days", enrolled: 18, maxEnrolled: 25, status: "upcoming" },
];

const industrySessions = [
  { title: "Industry Talk: DevOps at Scale", type: "Industry Session", targetSkills: ["DevOps", "CI/CD"], expectedImpact: "Medium", duration: "2 hours", enrolled: 80, maxEnrolled: 100, status: "upcoming" },
  { title: "Guest Lecture: ML in Production", type: "Industry Session", targetSkills: ["ML", "Python"], expectedImpact: "Medium", duration: "1.5 hours", enrolled: 65, maxEnrolled: 80, status: "upcoming" },
  { title: "Career Panel: Tech Industry Trends", type: "Industry Session", targetSkills: ["Soft Skills", "Networking"], expectedImpact: "Low", duration: "1 hour", enrolled: 120, maxEnrolled: 150, status: "upcoming" },
];

const impactColors: Record<string, "success" | "warning" | "default"> = {
  High: "success",
  Medium: "warning",
  Low: "default",
};

const typeColors: Record<string, "primary" | "accent" | "default"> = {
  Workshop: "primary",
  FDP: "accent",
  "Industry Session": "default",
};

export default function InstitutionTrainingPage() {
  return (
    <div className="space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Training Recommendations"
          description="Workshops, FDPs, and industry sessions aligned with detected skill gaps."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-900">Recommended Workshops</h2>
          <Button variant="outline" size="sm">Schedule New</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {workshops.map((w, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <Badge variant={typeColors[w.type]} size="sm">{w.type}</Badge>
                <Badge variant={impactColors[w.expectedImpact]} size="sm">{w.expectedImpact} Impact</Badge>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{w.title}</h3>
              <p className="text-xs text-slate-500 mb-3">{w.duration} · {w.enrolled}/{w.maxEnrolled} enrolled</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {w.targetSkills.map((s) => (
                  <Badge key={s} variant="primary" size="sm">{s}</Badge>
                ))}
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full rounded-full bg-primary-500" style={{ width: `${(w.enrolled / w.maxEnrolled) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Faculty Development Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fdps.map((f, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="accent" size="sm">{f.type}</Badge>
                <Badge variant={impactColors[f.expectedImpact]} size="sm">{f.expectedImpact} Impact</Badge>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{f.title}</h3>
              <p className="text-xs text-slate-500 mb-3">{f.duration} · {f.enrolled}/{f.maxEnrolled} enrolled</p>
              <div className="flex flex-wrap gap-1.5">
                {f.targetSkills.map((s) => (
                  <Badge key={s} variant="primary" size="sm">{s}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Industry Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {industrySessions.map((s, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="default" size="sm">{s.type}</Badge>
                <Badge variant={impactColors[s.expectedImpact]} size="sm">{s.expectedImpact}</Badge>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{s.title}</h3>
              <p className="text-xs text-slate-500 mb-3">{s.duration} · {s.enrolled}/{s.maxEnrolled} registered</p>
              <div className="flex flex-wrap gap-1.5">
                {s.targetSkills.map((t) => (
                  <Badge key={t} variant="primary" size="sm">{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Expected Impact Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-green-50 border border-green-100">
            <p className="text-2xl font-bold text-green-700">3</p>
            <p className="text-sm text-green-600">High Impact Programs</p>
            <p className="text-xs text-green-500 mt-1">Targeting critical skill gaps</p>
          </div>
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
            <p className="text-2xl font-bold text-amber-700">3</p>
            <p className="text-sm text-amber-600">Medium Impact Sessions</p>
            <p className="text-xs text-amber-500 mt-1">Supplementary learning</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-2xl font-bold text-slate-700">7</p>
            <p className="text-sm text-slate-600">Total Active Programs</p>
            <p className="text-xs text-slate-500 mt-1">Across all categories</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
