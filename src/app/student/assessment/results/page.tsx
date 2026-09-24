"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SkillBar } from "@/components/ui/skill-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MatchScore } from "@/components/ui/match-score";
import { Progress } from "@/components/ui/progress";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const skillScores = [
  { name: "React", level: 82, verified: true },
  { name: "TypeScript", level: 75, verified: true },
  { name: "JavaScript", level: 80, verified: true },
  { name: "HTML/CSS", level: 88, verified: true },
  { name: "Node.js", level: 68, verified: false },
  { name: "Python", level: 62, verified: true },
  { name: "PostgreSQL", level: 54, verified: true },
  { name: "REST APIs", level: 72, verified: true },
];

const strengths = ["React", "HTML/CSS", "JavaScript", "TypeScript"];
const gaps = ["AWS", "Docker", "MongoDB", "GraphQL"];
const nextSteps = [
  "Complete the AWS Cloud Practitioner assessment",
  "Build a Docker project to demonstrate containerization skills",
  "Take the MongoDB University course to fill your database gap",
  "Practice GraphQL by building a small API",
];

export default function AssessmentResultsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Assessment Results"
        description="Your React Fundamentals assessment results and skill analysis."
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "Assessment", href: "/student/assessment" }, { label: "Results" }]}
      />

      <motion.div
        variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
        initial="initial"
        animate="animate"
        className="grid gap-6 lg:grid-cols-3 mb-8"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardHeader>
              <CardTitle>Overall Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <MatchScore score={76} size="lg" />
              <p className="mt-3 text-sm text-slate-600">Above average performance</p>
              <Badge variant="success" size="md" className="mt-2">Passed</Badge>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardHeader>
              <CardTitle>Career Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Progress value={72} label="Industry Ready" showLabel color="primary" />
                <Progress value={81} label="Frontend Ready" showLabel color="success" />
                <Progress value={55} label="Backend Ready" showLabel color="warning" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardHeader>
              <CardTitle>Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {strengths.map((skill) => (
                  <Badge key={skill} variant="success" size="md">{skill}</Badge>
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-600">
                You demonstrate strong proficiency in frontend technologies. Your React and
                JavaScript skills are well above industry requirements.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Individual Skill Scores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillScores.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} verified={skill.verified} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle>Skill Gaps Identified</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {gaps.map((skill) => (
                  <Badge key={skill} variant="warning" size="md">{skill}</Badge>
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-4">
                These skills are required for your target career paths but need improvement.
              </p>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Recommended Next Steps</h4>
              <ul className="space-y-2">
                {nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="h-4 w-4 mt-0.5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {step}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/student/learning">
          <Button variant="primary">Start Learning Path</Button>
        </Link>
        <Link href="/student/assessment">
          <Button variant="outline">Take Another Assessment</Button>
        </Link>
      </div>
    </div>
  );
}
