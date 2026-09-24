"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { SkillBar } from "@/components/ui/skill-bar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { mockSkills, mockSkillGaps } from "@/lib/api/skills";
import { mockOpportunities } from "@/lib/api/opportunities";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const upcomingItems = [
  { title: "Technical assessment due", date: "Sep 22, 2026", type: "deadline" },
  { title: "Interview with StartupXYZ", date: "Sep 21, 2026", type: "interview" },
  { title: "AWS Cloud Practitioner course", date: "In progress", type: "learning" },
];

export default function StudentDashboard() {
  const topSkills = mockSkills.slice(0, 6);
  const topGaps = mockSkillGaps.slice(0, 3);
  const recommendedOpps = mockOpportunities.slice(0, 3);

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Welcome back, Priya"
        description="Here is your career readiness overview."
      />

      <motion.div
        variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
        initial="initial"
        animate="animate"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8"
      >
        <motion.div variants={fadeInUp}>
          <StatCard label="Industry Readiness" value="72%" change="+5% from last month" trend="up" icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>} />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <StatCard label="Skills Assessed" value="15" change="3 new this month" trend="up" icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <StatCard label="Applications" value="5" change="2 in review" trend="neutral" icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <StatCard label="Skill Gaps" value="3" change="High priority" trend="down" icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>} />
        </motion.div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Skill Overview</CardTitle>
                <Link href="/student/skills" className="text-sm font-medium text-primary-500 hover:text-primary-600">
                  View All
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSkills.map((skill) => (
                  <SkillBar key={skill.id} name={skill.name} level={skill.proficiency} verified={skill.verified} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle>Skill Gaps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topGaps.map((gap) => (
                  <div key={gap.skillId} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-700">{gap.skillName}</p>
                      <p className="text-xs text-slate-500">{gap.currentLevel}% / {gap.requiredLevel}%</p>
                    </div>
                    <Badge variant={gap.priority === "high" ? "error" : gap.priority === "medium" ? "warning" : "default"} size="sm">
                      {gap.priority}
                    </Badge>
                  </div>
                ))}
              </div>
              <Link href="/student/assessment" className="mt-4 block">
                <Button variant="outline" size="sm" className="w-full">Take Assessment</Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recommended Opportunities</CardTitle>
                <Link href="/opportunities" className="text-sm font-medium text-primary-500 hover:text-primary-600">
                  Browse All
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recommendedOpps.map((opp) => (
                  <Link key={opp.id} href={`/opportunities/${opp.id}`} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{opp.title}</p>
                      <p className="text-xs text-slate-500">{opp.company} - {opp.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="primary" size="sm">{opp.matchScore}% match</Badge>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 h-2 w-2 rounded-full shrink-0 ${
                      item.type === "deadline" ? "bg-red-500" :
                      item.type === "interview" ? "bg-blue-500" : "bg-green-500"
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-slate-700">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
        <Card>
          <CardHeader>
            <CardTitle>Career Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <Progress value={72} label="Overall Readiness" showLabel color="primary" />
              </div>
              <div>
                <Progress value={81} label="Frontend Skills" showLabel color="success" />
              </div>
              <div>
                <Progress value={55} label="Backend Skills" showLabel color="warning" />
              </div>
              <div>
                <Progress value={38} label="Cloud Skills" showLabel color="error" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
