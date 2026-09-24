"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const availableTraining = [
  { title: "Cloud Computing Fundamentals", provider: "AWS Academy", type: "Workshop", duration: "3 days", deadline: "2026-10-15", spots: 30, enrolled: 18, targetSkills: ["AWS", "Cloud"] },
  { title: "AI/ML for Educators", provider: "NASSCOM", type: "FDP", duration: "5 days", deadline: "2026-10-25", spots: 25, enrolled: 22, targetSkills: ["AI", "Python"] },
  { title: "Modern Web Development", provider: "Google Dev", type: "Workshop", duration: "2 days", deadline: "2026-11-01", spots: 40, enrolled: 35, targetSkills: ["React", "JavaScript"] },
  { title: "DevOps Practices", provider: "Microsoft", type: "FDP", duration: "4 days", deadline: "2026-11-10", spots: 20, enrolled: 15, targetSkills: ["Docker", "CI/CD"] },
];

const completedTraining = [
  { title: "Python for Data Science", provider: "Coursera", type: "Online", completedAt: "2026-08-15", rating: 4.8, certificate: true, hours: 40 },
  { title: "Teaching Methodology", provider: "NPTEL", type: "Online", completedAt: "2026-07-20", rating: 4.5, certificate: true, hours: 24 },
  { title: "Research Paper Writing", provider: "IIT Bombay", type: "Workshop", completedAt: "2026-06-10", rating: 4.7, certificate: true, hours: 16 },
];

const typeColors: Record<string, "primary" | "accent" | "default"> = {
  Workshop: "primary",
  FDP: "accent",
  Online: "default",
};

export default function FacultyTrainingPage() {
  return (
    <div className="space-y-6">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Training Programs"
          description="Available training programs and your completed courses."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }}>
        <Tabs defaultValue="available">
          <TabsList>
            <TabsTrigger value="available">Available ({availableTraining.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedTraining.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="available">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableTraining.map((training, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={typeColors[training.type]} size="sm">{training.type}</Badge>
                    <span className="text-xs text-slate-500">{training.deadline}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{training.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">{training.provider} · {training.duration} · {training.enrolled}/{training.spots} enrolled</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {training.targetSkills.map((s) => (
                      <Badge key={s} variant="primary" size="sm">{s}</Badge>
                    ))}
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden mb-3">
                    <div className="h-full rounded-full bg-primary-500" style={{ width: `${(training.enrolled / training.spots) * 100}%` }} />
                  </div>
                  <Button variant="primary" size="sm" className="w-full">Enroll Now</Button>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="space-y-3">
              {completedTraining.map((training, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-slate-900">{training.title}</h3>
                        <Badge variant="success" size="sm">Completed</Badge>
                      </div>
                      <p className="text-xs text-slate-500">{training.provider} · {training.type} · {training.hours} hours</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-semibold text-slate-900">{training.rating}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{training.completedAt}</p>
                    </div>
                  </div>
                  {training.certificate && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs text-green-600">
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Certificate earned
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
