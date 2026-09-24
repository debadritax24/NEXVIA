"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const assessments = [
  {
    id: "a1",
    title: "React Fundamentals",
    skill: "React",
    difficulty: "Intermediate",
    duration: "45 minutes",
    questions: 30,
    description: "Test your knowledge of React hooks, components, state management, and best practices.",
  },
  {
    id: "a2",
    title: "TypeScript Proficiency",
    skill: "TypeScript",
    difficulty: "Intermediate",
    duration: "40 minutes",
    questions: 25,
    description: "Evaluate your understanding of TypeScript types, generics, interfaces, and advanced patterns.",
  },
  {
    id: "a3",
    title: "Node.js & Express",
    skill: "Node.js",
    difficulty: "Beginner",
    duration: "35 minutes",
    questions: 20,
    description: "Assess your skills in building REST APIs with Node.js and Express framework.",
  },
  {
    id: "a4",
    title: "AWS Cloud Basics",
    skill: "AWS",
    difficulty: "Beginner",
    duration: "30 minutes",
    questions: 20,
    description: "Test your understanding of core AWS services, cloud architecture, and deployment concepts.",
  },
];

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-50 text-green-700",
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-red-50 text-red-700",
};

export default function AssessmentPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Skill Assessment"
        description="Evaluate your skills with industry-aligned assessments to identify your strengths and gaps."
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "Assessment" }]}
      />

      <motion.div
        variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2"
      >
        {assessments.map((assessment) => (
          <motion.div key={assessment.id} variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle>{assessment.title}</CardTitle>
                    <p className="mt-1 text-sm text-slate-600">{assessment.skill}</p>
                  </div>
                  <Badge className={difficultyColors[assessment.difficulty]} size="sm">
                    {assessment.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">{assessment.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {assessment.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {assessment.questions} questions
                  </span>
                </div>
                <Link href="/student/assessment/results">
                  <Button variant="primary" size="sm" className="w-full">
                    Start Assessment
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
