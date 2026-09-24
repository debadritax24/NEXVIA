"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { mockOpportunities } from "@/lib/api/opportunities";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const statusBadge: Record<string, "success" | "warning" | "default" | "error"> = {
  active: "success",
  "closing-soon": "warning",
  draft: "default",
  closed: "error",
};

export default function IndustryOpportunitiesPage() {
  const activeOpps = mockOpportunities.filter((o) => o.status === "active");
  const draftOpps = mockOpportunities.filter((o) => o.status === "draft");
  const closedOpps: typeof mockOpportunities = [];

  return (
    <div className="space-y-6">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Opportunities"
          description="Manage your job postings, internships, and projects."
          action={
            <Link href="/industry/opportunities/new">
              <Button size="sm">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Opportunity
              </Button>
            </Link>
          }
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }}>
        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">Active ({activeOpps.length})</TabsTrigger>
            <TabsTrigger value="draft">Draft ({draftOpps.length})</TabsTrigger>
            <TabsTrigger value="closed">Closed ({closedOpps.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="space-y-3">
              {activeOpps.map((opp) => (
                <motion.div
                  key={opp.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-slate-900">{opp.title}</h3>
                        <Badge variant={statusBadge[opp.status] || "default"}>
                          {opp.status.replace("-", " ")}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500 mb-3">{opp.location} {opp.remote && "· Remote"} · {opp.type}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {opp.requiredSkills.map((skill) => (
                          <Badge key={skill} variant="primary" size="sm">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center shrink-0">
                      <div>
                        <p className="text-lg font-bold text-slate-900">{opp.applicants}</p>
                        <p className="text-[10px] text-slate-500">Applicants</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-primary-500">{opp.matchScore}%</p>
                        <p className="text-[10px] text-slate-500">Avg Match</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900">{120 + opp.applicants * 3}</p>
                        <p className="text-[10px] text-slate-500">Views</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>Posted {opp.postedAt}</span>
                      <span>·</span>
                      <span>Deadline {opp.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">View Applicants</Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="draft">
            {draftOpps.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-sm text-slate-500">No draft opportunities.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {draftOpps.map((opp) => (
                  <div key={opp.id} className="rounded-xl border border-slate-200 bg-white p-5 opacity-70">
                    <h3 className="text-base font-semibold text-slate-900">{opp.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">Draft - not published yet</p>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="closed">
            <div className="text-center py-12">
              <p className="text-sm text-slate-500">No closed opportunities.</p>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
