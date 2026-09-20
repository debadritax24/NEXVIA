"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Students Assessed", value: "2,450", change: "+180 this month" },
  { label: "Industry Readiness", value: "67%", change: "Up from 54%" },
  { label: "Internship Placed", value: "342", change: "+45 this quarter" },
  { label: "Skill Gaps Addressed", value: "1,890", change: "72% resolved" },
];

const insights = [
  "Cloud computing gap increased 23% - recommend adding AWS lab",
  "React proficiency 2.1x above national average",
  "Data Science demand rising - 340 students need upskilling",
];

export function InstitutionIntelligence() {
  return (
    <section id="institutions" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            Institution Intelligence
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Data-driven campus decisions.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Real-time analytics on student readiness, skill gaps, industry demand,
            and placement potential - powering smarter institutional decisions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500 mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
                <p className="text-xs text-green-600 mt-1">{metric.change}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-slate-900 mb-4">AI Insights</h3>
            <div className="space-y-3">
              {insights.map((insight, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                  <span className="text-primary-500 mt-0.5">-</span>
                  <p className="text-sm text-slate-700">{insight}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
