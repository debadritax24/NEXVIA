"use client";

import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/stat-card";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Active Jobs", value: "12", change: "+3 this week", trend: "up" as const },
  { label: "Total Applicants", value: "284", change: "+47 new", trend: "up" as const },
  { label: "Shortlisted", value: "36", change: "12.7% conversion", trend: "neutral" as const },
  { label: "Interviews Scheduled", value: "8", change: "3 this week", trend: "up" as const },
];

const pipelineStages = [
  { stage: "Applied", count: 284, color: "bg-blue-500" },
  { stage: "Screening", count: 96, color: "bg-indigo-500" },
  { stage: "Shortlisted", count: 36, color: "bg-purple-500" },
  { stage: "Interview", count: 8, color: "bg-cyan-500" },
  { stage: "Offer Sent", count: 3, color: "bg-green-500" },
];

const recentApplications = [
  { name: "Priya Sharma", role: "Frontend Developer Intern", match: 87, status: "shortlisted", time: "2h ago" },
  { name: "Arjun Patel", role: "Full Stack Engineer", match: 73, status: "under-review", time: "5h ago" },
  { name: "Sneha Reddy", role: "React Developer", match: 68, status: "applied", time: "1d ago" },
  { name: "Rahul Kumar", role: "Backend Developer", match: 61, status: "applied", time: "1d ago" },
  { name: "Ananya Singh", role: "Frontend Developer Intern", match: 82, status: "shortlisted", time: "2d ago" },
];

const statusColors: Record<string, "default" | "primary" | "accent" | "success" | "warning" | "error"> = {
  "shortlisted": "success",
  "under-review": "warning",
  "applied": "primary",
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function IndustryDashboardPage() {
  return (
    <div className="space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Industry Dashboard"
          description="Manage your recruitment pipeline and discover top talent."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
          >
            <StatCard
              label={stat.label}
              value={stat.value}
              change={stat.change}
              trend={stat.trend}
            />
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-base font-semibold text-slate-900 mb-4">Hiring Pipeline</h2>
          <div className="space-y-3">
            {pipelineStages.map((stage) => (
              <div key={stage.stage} className="flex items-center gap-3">
                <span className="text-sm text-slate-600 w-28 shrink-0">{stage.stage}</span>
                <div className="flex-1 h-6 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${stage.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(stage.count / 284) * 100}%` }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-900 w-12 text-right">{stage.count}</span>
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
          <h2 className="text-base font-semibold text-slate-900 mb-4">Top Skill Demands</h2>
          <div className="space-y-3">
            {[
              { skill: "React", demand: 92 },
              { skill: "TypeScript", demand: 85 },
              { skill: "Node.js", demand: 78 },
              { skill: "Python", demand: 74 },
              { skill: "AWS", demand: 68 },
              { skill: "Docker", demand: 62 },
            ].map((item) => (
              <div key={item.skill} className="flex items-center justify-between">
                <span className="text-sm text-slate-700">{item.skill}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-primary-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.demand}%` }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-900 w-8 text-right">{item.demand}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="rounded-xl border border-slate-200 bg-white p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-900">Recent Applications</h2>
          <button className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors">
            View all
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Candidate</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Role</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Match</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Status</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Applied</th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.map((app, i) => (
                <tr key={i} className="border-b border-slate-50 last:border-0">
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary-500/10 flex items-center justify-center text-xs font-semibold text-primary-500">
                        {app.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-sm font-medium text-slate-900">{app.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-slate-600">{app.role}</td>
                  <td className="py-3">
                    <span className="text-sm font-bold text-primary-500">{app.match}%</span>
                  </td>
                  <td className="py-3">
                    <Badge variant={statusColors[app.status] || "default"}>
                      {app.status.replace("-", " ")}
                    </Badge>
                  </td>
                  <td className="py-3 text-sm text-slate-500">{app.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
