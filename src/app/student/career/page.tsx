"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockCareerPaths } from "@/lib/api/profile";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const demandColors: Record<string, { bg: string; text: string }> = {
  "very-high": { bg: "bg-green-50", text: "text-green-700" },
  high: { bg: "bg-blue-50", text: "text-blue-700" },
  medium: { bg: "bg-amber-50", text: "text-amber-700" },
  low: { bg: "bg-slate-50", text: "text-slate-700" },
};

const readinessColor = (score: number) => {
  if (score >= 70) return "success";
  if (score >= 50) return "primary";
  if (score >= 30) return "warning";
  return "error";
};

export default function CareerPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Career Paths"
        description="Explore recommended career paths based on your skills and interests."
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "Career Path" }]}
      />

      <motion.div
        variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {mockCareerPaths.map((path) => {
          const demand = demandColors[path.demand] || demandColors.medium;
          return (
            <motion.div key={path.id} variants={fadeInUp}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle>{path.title}</CardTitle>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${demand.bg} ${demand.text}`}>
                      {path.demand} demand
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-slate-600 mb-4">{path.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">Your Readiness</span>
                      <span className="text-sm font-bold text-slate-900">{path.readiness}%</span>
                    </div>
                    <Progress value={path.readiness} color={readinessColor(path.readiness) as "success" | "primary" | "warning" | "error"} />
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Required Skills</p>
                    <div className="flex flex-wrap gap-1.5">
                      {path.requiredSkills.map((skill) => (
                        <Badge key={skill} variant="primary" size="sm">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Avg Salary</span>
                      <span className="font-semibold text-slate-900">{path.avgSalary}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
