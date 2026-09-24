"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const departments = ["CSE", "IT", "ECE", "ME", "CE"];
const skills = ["React", "Cloud", "AI", "Data", "DevOps"];

const heatmapData: Record<string, Record<string, number>> = {
  CSE: { React: 78, Cloud: 35, AI: 52, Data: 61, DevOps: 28 },
  IT: { React: 65, Cloud: 42, AI: 38, Data: 55, DevOps: 22 },
  ECE: { React: 25, Cloud: 18, AI: 30, Data: 40, DevOps: 15 },
  ME: { React: 12, Cloud: 10, AI: 15, Data: 22, DevOps: 8 },
  CE: { React: 18, Cloud: 15, AI: 12, Data: 35, DevOps: 10 },
};

const getColor = (value: number) => {
  if (value >= 70) return "bg-green-500 text-white";
  if (value >= 40) return "bg-amber-400 text-white";
  return "bg-red-500 text-white";
};

const departmentsList = ["All Departments", "CSE", "IT", "ECE", "ME", "CE"];
const skillsList = ["All Skills", "React", "Cloud", "AI", "Data", "DevOps"];

export default function InstitutionSkillsPage() {
  const [deptFilter, setDeptFilter] = useState("All Departments");
  const [skillFilter, setSkillFilter] = useState("All Skills");

  const filteredDepts = deptFilter === "All Departments" ? departments : [deptFilter];
  const filteredSkills = skillFilter === "All Skills" ? skills : [skillFilter];

  return (
    <div className="space-y-6">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Skill Gap Heatmap"
          description="Department-wise skill proficiency matrix across your institution."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }}>
        <div className="flex items-center gap-3">
          <select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)} className="h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500">
            {departmentsList.map((d) => <option key={d}>{d}</option>)}
          </select>
          <select value={skillFilter} onChange={(e) => setSkillFilter(e.target.value)} className="h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500">
            {skillsList.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-base font-semibold text-slate-900">Proficiency Legend</h2>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-green-500" /><span className="text-slate-600">High (70+)</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-amber-400" /><span className="text-slate-600">Medium (40-69)</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-red-500" /><span className="text-slate-600">Low (below 40)</span></div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider p-3 border-b border-slate-200">Department</th>
                {filteredSkills.map((skill) => (
                  <th key={skill} className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider p-3 border-b border-slate-200">{skill}</th>
                ))}
                <th className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider p-3 border-b border-slate-200">Average</th>
              </tr>
            </thead>
            <tbody>
              {filteredDepts.map((dept) => {
                const rowSkills = filteredSkills.map((s) => heatmapData[dept][s]);
                const avg = Math.round(rowSkills.reduce((a, b) => a + b, 0) / rowSkills.length);
                return (
                  <tr key={dept} className="border-b border-slate-50 last:border-0">
                    <td className="p-3 text-sm font-medium text-slate-900">{dept}</td>
                    {filteredSkills.map((skill) => (
                      <td key={skill} className="p-3 text-center">
                        <div className={`inline-flex h-10 w-16 items-center justify-center rounded-lg text-sm font-bold ${getColor(heatmapData[dept][skill])}`}>
                          {heatmapData[dept][skill]}
                        </div>
                      </td>
                    ))}
                    <td className="p-3 text-center">
                      <div className={`inline-flex h-10 w-16 items-center justify-center rounded-lg text-sm font-bold ${getColor(avg)}`}>
                        {avg}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Gap Analysis Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const values = filteredDepts.map((d) => heatmapData[d][skill]);
            const avg = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
            const min = Math.min(...values);
            const max = Math.max(...values);
            return (
              <div key={skill} className="p-4 rounded-lg border border-slate-100">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{skill}</h3>
                <div className="space-y-1 text-xs text-slate-600">
                  <p>Average: <span className="font-semibold">{avg}%</span></p>
                  <p>Best: <span className="font-semibold">{max}%</span> · Worst: <span className="font-semibold">{min}%</span></p>
                  <Badge variant={avg >= 70 ? "success" : avg >= 40 ? "warning" : "error"} size="sm">
                    {avg >= 70 ? "Strong" : avg >= 40 ? "Moderate" : "Critical Gap"}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
