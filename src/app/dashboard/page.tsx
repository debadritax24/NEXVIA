"use client";

import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";

const stats = [
  { label: "Industry Readiness", value: "72%", change: "+5% this week", color: "text-primary-500" },
  { label: "Skills Assessed", value: "12", change: "3 verified", color: "text-green-600" },
  { label: "Skill Gaps", value: "5", change: "2 high priority", color: "text-accent-500" },
  { label: "Applications", value: "3", change: "1 in review", color: "text-indigo-600" },
];

const skills = [
  { name: "React", level: 82, color: "bg-blue-500" },
  { name: "TypeScript", level: 75, color: "bg-primary-500" },
  { name: "Node.js", level: 68, color: "bg-green-500" },
  { name: "PostgreSQL", level: 54, color: "bg-indigo-500" },
  { name: "AWS", level: 41, color: "bg-accent-500" },
];

const recentOpportunities = [
  { title: "Frontend Developer Intern", company: "TechCorp India", match: 87 },
  { title: "Full Stack Engineer", company: "StartupXYZ", match: 73 },
  { title: "React Developer", company: "WebAgency", match: 68 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold text-slate-900">
          Welcome back, {user?.firstName || "Student"}
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Here is your skill intelligence overview.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-slate-500 mt-1">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Skill Profile */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-base font-semibold text-slate-900 mb-4">Your Skill Profile</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                  <span className="text-sm font-semibold text-slate-900">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommended Opportunities */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-base font-semibold text-slate-900 mb-4">Recommended for You</h2>
          <div className="space-y-3">
            {recentOpportunities.map((opp, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors cursor-pointer"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{opp.title}</p>
                  <p className="text-xs text-slate-500">{opp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary-500">{opp.match}%</p>
                  <p className="text-[10px] text-slate-500">Match</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="rounded-xl border border-slate-200 bg-white p-6"
      >
        <h2 className="text-base font-semibold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Take Assessment", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
            { label: "View Gaps", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
            { label: "Find Jobs", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            { label: "Skill Passport", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" },
          ].map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-200 hover:border-primary-500 hover:bg-primary-500/5 transition-all text-center"
            >
              <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
              </svg>
              <span className="text-sm font-medium text-slate-700">{action.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
