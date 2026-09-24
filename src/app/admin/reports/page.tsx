"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const monthlyRegistrations = [
  { month: "Jan", students: 1200, faculty: 80, industry: 45 },
  { month: "Feb", students: 1450, faculty: 95, industry: 52 },
  { month: "Mar", students: 1800, faculty: 110, industry: 68 },
  { month: "Apr", students: 2100, faculty: 125, industry: 75 },
  { month: "May", students: 2450, faculty: 140, industry: 82 },
  { month: "Jun", students: 2800, faculty: 155, industry: 90 },
];

const topSkills = [
  { name: "JavaScript", count: 4100, trend: "+12%" },
  { name: "Python", count: 3850, trend: "+18%" },
  { name: "React", count: 3420, trend: "+15%" },
  { name: "SQL", count: 3200, trend: "+8%" },
  { name: "Java", count: 2650, trend: "+5%" },
];

const opportunityStats = [
  { type: "Internships", posted: 480, filled: 320, rate: "67%" },
  { type: "Full-time", posted: 350, filled: 210, rate: "60%" },
  { type: "Projects", posted: 220, filled: 180, rate: "82%" },
  { type: "Mentorship", posted: 180, filled: 150, rate: "83%" },
];

const maxRegVal = Math.max(...monthlyRegistrations.map((m) => m.students + m.faculty + m.industry));
const maxSkillVal = Math.max(...topSkills.map((s) => s.count));

export default function AdminReportsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Reports & Analytics"
        description="Platform performance and usage insights"
        breadcrumbs={[{ label: "Admin", href: "/admin" }, { label: "Reports" }]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Registrations" value="12,450" change="+23% this quarter" trend="up" icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>} />
        <StatCard label="Active This Month" value="8,340" change="67% of total" trend="neutral" icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>} />
        <StatCard label="Opportunities Filled" value="860" change="69% fill rate" trend="up" icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
        <StatCard label="Avg Skill Score" value="62%" change="+4% from last month" trend="up" icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Registration Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-3 h-56">
              {monthlyRegistrations.map((m, i) => {
                const total = m.students + m.faculty + m.industry;
                const heightPct = (total / maxRegVal) * 100;
                return (
                  <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${heightPct}%` }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="w-full flex flex-col justify-end gap-0.5 rounded-t-md overflow-hidden"
                    >
                      <div className="bg-primary-500" style={{ height: `${(m.students / total) * 100}%` }} />
                      <div className="bg-accent-400" style={{ height: `${(m.faculty / total) * 100}%` }} />
                      <div className="bg-green-400" style={{ height: `${(m.industry / total) * 100}%` }} />
                    </motion.div>
                    <span className="text-xs text-slate-500">{m.month}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1.5"><div className="h-2.5 w-2.5 rounded-sm bg-primary-500" /><span className="text-xs text-slate-500">Students</span></div>
              <div className="flex items-center gap-1.5"><div className="h-2.5 w-2.5 rounded-sm bg-accent-400" /><span className="text-xs text-slate-500">Faculty</span></div>
              <div className="flex items-center gap-1.5"><div className="h-2.5 w-2.5 rounded-sm bg-green-400" /><span className="text-xs text-slate-500">Industry</span></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSkills.map((skill, i) => (
                <div key={skill.name} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-slate-700 w-24 shrink-0">{skill.name}</span>
                  <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(skill.count / maxSkillVal) * 100}%` }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="h-full bg-primary-500 rounded-full flex items-center justify-end pr-2"
                    >
                      <span className="text-xs font-semibold text-white">{skill.count.toLocaleString()}</span>
                    </motion.div>
                  </div>
                  <Badge variant="success" size="sm">{skill.trend}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Opportunity Success Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {opportunityStats.map((stat, i) => (
              <motion.div
                key={stat.type}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl border border-slate-200"
              >
                <p className="text-sm font-medium text-slate-700 mb-2">{stat.type}</p>
                <p className="text-2xl font-bold text-slate-900 mb-1">{stat.rate}</p>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: stat.rate }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="h-full bg-primary-500 rounded-full"
                  />
                </div>
                <p className="text-xs text-slate-500">{stat.filled} of {stat.posted} filled</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Activity Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">24,500</p>
              <p className="text-sm text-slate-500 mt-1">Assessments Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">8,200</p>
              <p className="text-sm text-slate-500 mt-1">Skills Learned</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">3,400</p>
              <p className="text-sm text-slate-500 mt-1">Applications Sent</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">1,250</p>
              <p className="text-sm text-slate-500 mt-1">Mentorship Sessions</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
