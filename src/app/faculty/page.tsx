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
  { label: "My Students", value: "48", change: "3 departments", trend: "neutral" as const },
  { label: "Industry Opportunities", value: "12", change: "+4 this month", trend: "up" as const },
  { label: "Training Completed", value: "5", change: "2 in progress", trend: "up" as const },
  { label: "Mentorship Hours", value: "32", change: "8 this week", trend: "up" as const },
];

const recentActivity = [
  { student: "Priya Sharma", action: "Completed AWS assessment", time: "2 hours ago", type: "assessment" },
  { student: "Arjun Patel", action: "Applied to TechCorp internship", time: "5 hours ago", type: "application" },
  { student: "Sneha Reddy", action: "Updated skill passport", time: "1 day ago", type: "skill" },
  { student: "Rahul Kumar", action: "Joined Docker workshop", time: "1 day ago", type: "training" },
  { student: "Ananya Singh", action: "Received mentorship feedback", time: "2 days ago", type: "mentorship" },
];

const upcomingEvents = [
  { title: "Industry Guest Lecture", date: "2026-10-05", type: "Lecture" },
  { title: "Student Progress Review", date: "2026-10-08", type: "Review" },
  { title: "Faculty Training Session", date: "2026-10-12", type: "Training" },
];

const activityIcons: Record<string, string> = {
  assessment: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  application: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  skill: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  training: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  mentorship: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
};

export default function FacultyDashboardPage() {
  return (
    <div className="space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Faculty Dashboard"
          description="Monitor student progress, manage opportunities, and collaborate with industry."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}>
            <StatCard label={stat.label} value={stat.value} change={stat.change} trend={stat.trend} />
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3, duration: 0.4 }} className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-50">
                <div className="h-8 w-8 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                  <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activityIcons[activity.type]} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900">{activity.student}</p>
                  <p className="text-xs text-slate-500">{activity.action}</p>
                </div>
                <span className="text-xs text-slate-400 shrink-0">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="p-3 rounded-lg border border-slate-100">
                <h3 className="text-sm font-medium text-slate-900">{event.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="primary" size="sm">{event.type}</Badge>
                  <span className="text-xs text-slate-500">{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
