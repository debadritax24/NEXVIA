"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const learningPath = [
  {
    step: 1,
    skill: "AWS",
    title: "AWS Cloud Practitioner",
    difficulty: "Beginner",
    duration: "20 hours",
    progress: 0,
    whyRecommended: "AWS is your highest-priority skill gap. Cloud skills are in very high demand and will significantly boost your career readiness.",
    provider: "AWS",
    rating: 4.8,
  },
  {
    step: 2,
    skill: "Docker",
    title: "Docker for Beginners",
    difficulty: "Beginner",
    duration: "12 hours",
    progress: 0,
    whyRecommended: "Docker is essential for modern DevOps workflows. Most companies now require containerization knowledge.",
    provider: "Udemy",
    rating: 4.7,
  },
  {
    step: 3,
    skill: "GraphQL",
    title: "GraphQL Complete Guide",
    difficulty: "Intermediate",
    duration: "15 hours",
    progress: 0,
    whyRecommended: "GraphQL is increasingly used in modern APIs. Your REST API skills transfer well, making this a natural next step.",
    provider: "Coursera",
    rating: 4.6,
  },
  {
    step: 4,
    skill: "MongoDB",
    title: "MongoDB University",
    difficulty: "Beginner",
    duration: "10 hours",
    progress: 0,
    whyRecommended: "NoSQL databases complement your PostgreSQL skills. MongoDB is the most popular document database.",
    provider: "MongoDB",
    rating: 4.5,
  },
  {
    step: 5,
    skill: "Node.js",
    title: "Node.js Masterclass",
    difficulty: "Intermediate",
    duration: "25 hours",
    progress: 30,
    whyRecommended: "Strengthen your existing Node.js skills. This course covers advanced patterns and production best practices.",
    provider: "Udemy",
    rating: 4.8,
  },
];

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-50 text-green-700",
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-red-50 text-red-700",
};

export default function LearningPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Learning Roadmap"
        description="Personalized learning path based on your skill gaps and career goals."
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "Learning" }]}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>Your Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="text-center p-4 rounded-lg bg-slate-50">
                <p className="text-2xl font-bold text-slate-900">5</p>
                <p className="text-sm text-slate-600">Courses Recommended</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-50">
                <p className="text-2xl font-bold text-primary-500">1</p>
                <p className="text-sm text-slate-600">In Progress</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-50">
                <p className="text-2xl font-bold text-green-600">0</p>
                <p className="text-sm text-slate-600">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="space-y-4">
        {learningPath.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                          <Badge className={difficultyColors[item.difficulty]} size="sm">{item.difficulty}</Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-1">{item.skill} - {item.provider}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.duration}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-3">{item.whyRecommended}</p>

                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <Progress value={item.progress} size="sm" color={item.progress > 0 ? "primary" : "accent"} />
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-slate-600">{item.rating}</span>
                      </div>
                      <Button variant="primary" size="sm">
                        {item.progress > 0 ? "Continue" : "Start"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
