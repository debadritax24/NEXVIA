"use client";

import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/stat-card";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { label: "Students Analyzed", value: "1,247", change: "+123 this month", trend: "up" as const },
  { label: "Industry Ready", value: "34%", change: "+5% from last quarter", trend: "up" as const },
  { label: "Internship Ready", value: "52%", change: "+8% from last quarter", trend: "up" as const },
  { label: "Placement Ready", value: "28%", change: "+3% from last quarter", trend: "up" as const },
];

const topSkillGaps = [
  { skill: "Cloud Computing", gap: 34, studentsAffected: 890 },
  { skill: "Docker/Kubernetes", gap: 35, studentsAffected: 920 },
  { skill: "System Design", gap: 28, studentsAffected: 750 },
  { skill: "DevOps", gap: 32, studentsAffected: 830 },
  { skill: "Machine Learning", gap: 25, studentsAffected: 680 },
];

const industryTrends = [
  { skill: "React/Next.js", demand: 92, supply: 65 },
  { skill: "Cloud (AWS/Azure)", demand: 88, supply: 34 },
  { skill: "AI/ML", demand: 85, supply: 28 },
  { skill: "DevOps", demand: 80, supply: 22 },
  { skill: "Data Engineering", demand: 75, supply: 30 },
];

const departmentStats = [
  { dept: "CSE", students: 420, ready: 38, topGap: "Cloud Computing" },
  { dept: "IT", students: 380, ready: 32, topGap: "DevOps" },
  { dept: "ECE", students: 210, ready: 18, topGap: "Programming" },
  { dept: "ME", students: 145, ready: 12, topGap: "Software Tools" },
  { dept: "CE", students: 92, ready: 8, topGap: "Data Analysis" },
];

const trainingRecs = [
  { title: "AWS Cloud Practitioner Workshop", targetSkills: ["AWS", "Cloud"], expectedImpact: "High", priority: "high" },
  { title: "Docker & Kubernetes Bootcamp", targetSkills: ["Docker", "K8s"], expectedImpact: "High", priority: "high" },
  { title: "System Design for Beginners", targetSkills: ["System Design"], expectedImpact: "Medium", priority: "medium" },
  { title: "DevOps CI/CD Pipeline", targetSkills: ["DevOps", "CI/CD"], expectedImpact: "High", priority: "high" },
];

export default function InstitutionDashboardPage() {
  return (
    <div className="space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Institution Intelligence"
          description="Skill analytics and readiness insights across your institution."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}>
            <StatCard label={stat.label} value={stat.value} change={stat.change} trend={stat.trend} />
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Top Skill Gaps</h2>
          <div className="space-y-4">
            {topSkillGaps.map((gap) => (
              <div key={gap.skill}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-slate-700">{gap.skill}</span>
                  <span className="text-xs text-slate-500">{gap.studentsAffected} students affected</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div className="h-full rounded-full bg-red-500" initial={{ width: 0 }} animate={{ width: `${gap.gap}%` }} transition={{ delay: 0.5, duration: 0.8 }} />
                </div>
                <p className="text-xs text-slate-500 mt-1">Gap: {gap.gap}%</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Industry Demand vs Supply</h2>
          <div className="space-y-4">
            {industryTrends.map((trend) => (
              <div key={trend.skill}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-slate-700">{trend.skill}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 w-16">Demand</span>
                    <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <motion.div className="h-full rounded-full bg-primary-500" initial={{ width: 0 }} animate={{ width: `${trend.demand}%` }} transition={{ delay: 0.5, duration: 0.6 }} />
                    </div>
                    <span className="text-xs font-semibold text-slate-900 w-8 text-right">{trend.demand}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 w-16">Supply</span>
                    <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <motion.div className="h-full rounded-full bg-green-500" initial={{ width: 0 }} animate={{ width: `${trend.supply}%` }} transition={{ delay: 0.6, duration: 0.6 }} />
                    </div>
                    <span className="text-xs font-semibold text-slate-900 w-8 text-right">{trend.supply}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.45, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Department Readiness</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Department</th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Students</th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Ready %</th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Top Gap</th>
                </tr>
              </thead>
              <tbody>
                {departmentStats.map((row) => (
                  <tr key={row.dept} className="border-b border-slate-50 last:border-0">
                    <td className="py-3 text-sm font-medium text-slate-900">{row.dept}</td>
                    <td className="py-3 text-sm text-slate-600">{row.students}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div className={`h-full rounded-full ${row.ready >= 30 ? "bg-green-500" : "bg-amber-500"}`} style={{ width: `${row.ready}%` }} />
                        </div>
                        <span className="text-sm font-semibold text-slate-900">{row.ready}%</span>
                      </div>
                    </td>
                    <td className="py-3"><Badge variant="warning" size="sm">{row.topGap}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Training Recommendations</h2>
          <div className="space-y-3">
            {trainingRecs.map((rec, i) => (
              <div key={i} className="p-3 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-medium text-slate-900">{rec.title}</h3>
                  <Badge variant={rec.priority === "high" ? "error" : "warning"} size="sm">{rec.expectedImpact}</Badge>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {rec.targetSkills.map((s) => (
                    <Badge key={s} variant="primary" size="sm">{s}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
