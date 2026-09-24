"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const demandedSkills = [
  { skill: "React/Next.js", demand: 92, growth: "+12%", category: "Frontend" },
  { skill: "AWS/Cloud", demand: 88, growth: "+18%", category: "Cloud" },
  { skill: "AI/ML", demand: 85, growth: "+22%", category: "AI" },
  { skill: "Docker/Kubernetes", demand: 80, growth: "+15%", category: "DevOps" },
  { skill: "Data Engineering", demand: 75, growth: "+20%", category: "Data" },
  { skill: "TypeScript", demand: 72, growth: "+8%", category: "Languages" },
  { skill: "Python", demand: 70, growth: "+10%", category: "Languages" },
  { skill: "Node.js", demand: 68, growth: "+6%", category: "Backend" },
];

const fastGrowing = [
  { skill: "Generative AI", demand: 78, growth: "+45%", timeline: "6 months" },
  { skill: "Kubernetes", demand: 65, growth: "+30%", timeline: "1 year" },
  { skill: "Terraform", demand: 55, growth: "+28%", timeline: "1 year" },
  { skill: "Rust", demand: 40, growth: "+35%", timeline: "2 years" },
];

const skillShortages = [
  { skill: "Cloud Architecture", shortage: 85, reason: "High demand, low supply" },
  { skill: "DevOps Engineering", shortage: 78, reason: "Specialized skill set" },
  { skill: "ML Engineering", shortage: 72, reason: "Advanced role requirements" },
  { skill: "Data Engineering", shortage: 68, reason: "Emerging field" },
];

const supplyDemandGaps = [
  { skill: "React", demand: 92, supply: 65, gap: 27 },
  { skill: "AWS", demand: 88, supply: 34, gap: 54 },
  { skill: "Docker", demand: 80, supply: 22, gap: 58 },
  { skill: "Python", demand: 70, supply: 55, gap: 15 },
  { skill: "SQL", demand: 65, supply: 48, gap: 17 },
];

export default function IndustryDemandPage() {
  return (
    <div className="space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Industry Demand Radar"
          description="Track what industry needs and where your students stand."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Most Demanded Skills</h2>
        <div className="space-y-3">
          {demandedSkills.map((item, i) => (
            <div key={item.skill} className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400 w-5">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700">{item.skill}</span>
                    <Badge variant="default" size="sm">{item.category}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-green-600 font-medium">{item.growth}</span>
                    <span className="text-sm font-semibold text-slate-900">{item.demand}%</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div className="h-full rounded-full bg-primary-500" initial={{ width: 0 }} animate={{ width: `${item.demand}%` }} transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Fast Growing Skills</h2>
          <div className="space-y-4">
            {fastGrowing.map((item) => (
              <div key={item.skill} className="p-3 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold text-slate-900">{item.skill}</h3>
                  <Badge variant="success" size="sm">{item.growth}</Badge>
                </div>
                <p className="text-xs text-slate-500">Demand: {item.demand}% · Timeline: {item.timeline}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Critical Skill Shortages</h2>
          <div className="space-y-4">
            {skillShortages.map((item) => (
              <div key={item.skill}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700">{item.skill}</span>
                  <span className="text-sm font-semibold text-red-600">{item.shortage}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden mb-1">
                  <motion.div className="h-full rounded-full bg-red-500" initial={{ width: 0 }} animate={{ width: `${item.shortage}%` }} transition={{ delay: 0.5, duration: 0.6 }} />
                </div>
                <p className="text-xs text-slate-500">{item.reason}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Student Supply vs Industry Demand</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Skill</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Industry Demand</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Student Supply</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Gap</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {supplyDemandGaps.map((item) => (
                <tr key={item.skill} className="border-b border-slate-50 last:border-0">
                  <td className="py-3 text-sm font-medium text-slate-900">{item.skill}</td>
                  <td className="py-3"><div className="flex items-center gap-2"><div className="w-20 h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full bg-primary-500" style={{ width: `${item.demand}%` }} /></div><span className="text-xs font-semibold">{item.demand}%</span></div></td>
                  <td className="py-3"><div className="flex items-center gap-2"><div className="w-20 h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full bg-green-500" style={{ width: `${item.supply}%` }} /></div><span className="text-xs font-semibold">{item.supply}%</span></div></td>
                  <td className="py-3"><Badge variant={item.gap > 30 ? "error" : "warning"} size="sm">{item.gap}% gap</Badge></td>
                  <td className="py-3 text-xs text-primary-500 font-medium cursor-pointer hover:text-primary-600">Create Training</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
