"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MatchScore } from "@/components/ui/match-score";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { mockOpportunities } from "@/lib/api/opportunities";
import { mockSkills } from "@/lib/api/skills";

const typeColors: Record<string, string> = {
  internship: "bg-blue-50 text-blue-700",
  "full-time": "bg-green-50 text-green-700",
  "part-time": "bg-purple-50 text-purple-700",
  project: "bg-amber-50 text-amber-700",
  mentorship: "bg-cyan-50 text-cyan-700",
};

export default function OpportunityDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const opportunity = mockOpportunities.find((o) => o.id === id);

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="py-20 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Opportunity Not Found</h1>
          <p className="mt-2 text-slate-600">This opportunity may have been removed.</p>
          <Link href="/opportunities" className="mt-6 inline-block">
            <Button variant="primary">Browse Opportunities</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const matchedSkills = opportunity.requiredSkills.filter((s) =>
    mockSkills.some((ms) => ms.name.toLowerCase() === s.toLowerCase() && ms.proficiency >= 50)
  );
  const gapSkills = opportunity.requiredSkills.filter((s) =>
    mockSkills.some((ms) => ms.name.toLowerCase() === s.toLowerCase() && ms.proficiency < 50)
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
            <Link href="/opportunities" className="hover:text-slate-700 transition-colors">
              Opportunities
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-medium">{opportunity.title}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[opportunity.type] || "bg-slate-100 text-slate-700"}`}>
                        {opportunity.type}
                      </span>
                      {opportunity.remote && <Badge variant="success" size="sm">Remote</Badge>}
                      {opportunity.status === "closing-soon" && (
                        <Badge variant="error" size="sm">Closing Soon</Badge>
                      )}
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">{opportunity.title}</h1>
                    <p className="mt-1 text-slate-600">{opportunity.company}</p>
                  </div>
                  <MatchScore score={opportunity.matchScore} size="lg" showLabel />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {opportunity.location}
                  </span>
                  {opportunity.stipend && <span>{opportunity.stipend}</span>}
                  {opportunity.salary && <span>{opportunity.salary}</span>}
                  {opportunity.duration && <span>{opportunity.duration}</span>}
                  <span>{opportunity.applicants} applicants</span>
                </div>

                <p className="mt-6 text-slate-600 leading-relaxed">{opportunity.description}</p>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.requiredSkills.map((skill) => (
                      <Badge key={skill} variant="primary" size="md">{skill}</Badge>
                    ))}
                  </div>
                </div>

                {opportunity.preferredSkills.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2">Preferred Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.preferredSkills.map((skill) => (
                        <Badge key={skill} variant="default" size="md">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Responsibilities</h2>
                <ul className="space-y-2">
                  {opportunity.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="h-4 w-4 mt-0.5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {opportunity.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {opportunity.benefits.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <h2 className="text-lg font-semibold text-slate-900 mb-4">Benefits</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {opportunity.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Your Match</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center mb-4">
                      <MatchScore score={opportunity.matchScore} size="lg" showLabel />
                    </div>

                    {matchedSkills.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">
                          Strengths
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {matchedSkills.map((skill) => (
                            <Badge key={skill} variant="success" size="sm">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {gapSkills.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                          Gaps to Address
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {gapSkills.map((skill) => (
                            <Badge key={skill} variant="warning" size="sm">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Recommended Preparation
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="text-sm text-slate-600">
                          Complete the skill assessment for required technologies
                        </li>
                        <li className="text-sm text-slate-600">
                          Build a project using {opportunity.requiredSkills.join(", ")}
                        </li>
                        {gapSkills.length > 0 && (
                          <li className="text-sm text-slate-600">
                            Take courses for: {gapSkills.join(", ")}
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Application Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Posted</span>
                    <span className="text-slate-700">{opportunity.postedAt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Deadline</span>
                    <span className="text-slate-700">{opportunity.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Applicants</span>
                    <span className="text-slate-700">{opportunity.applicants}</span>
                  </div>
                </div>
                <Button variant="primary" className="w-full mt-4">
                  Apply Now
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
