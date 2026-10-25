"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";
import { useDemoApplications } from "@/lib/api/demo-applications";
import { useToast } from "@/components/ui/toast";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { mockApplications } from "@/lib/api/applications";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const statusColors: Record<string, string> = {
  applied: "bg-blue-100 text-blue-700",
  "under-review": "bg-amber-100 text-amber-700",
  shortlisted: "bg-purple-100 text-purple-700",
  assessment: "bg-indigo-100 text-indigo-700",
  interview: "bg-cyan-100 text-cyan-700",
  selected: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

const statusSteps = ["applied", "under-review", "shortlisted", "assessment", "interview", "selected"];

function StatusTimeline({ currentStatus }: { currentStatus: string }) {
  const currentIdx = statusSteps.indexOf(currentStatus);
  return (
    <div className="flex items-center gap-1 w-full">
      {statusSteps.map((step, i) => (
        <div key={step} className="flex items-center flex-1">
          <div className={`h-1.5 flex-1 rounded-full ${i <= currentIdx ? "bg-primary-500" : "bg-slate-200"}`} />
        </div>
      ))}
    </div>
  );
}

export default function ApplicationsPage() {
  const [applications, saveApplications] = useDemoApplications();
  const [removeId, setRemoveId] = useState<string | null>(null);
  const { addToast } = useToast();
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Applications"
        description="Track all your opportunity applications and their status."
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "Applications" }]}
      />

      <section className="mb-6 space-y-3" aria-label="Saved demo applications">
        <h2 className="text-lg font-semibold">Your demo applications</h2>
        {applications.length === 0 && <p className="text-sm text-slate-600">No demo applications yet. Browse opportunities to try applying.</p>}
        {applications.map((item) => <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-4"><h3>{item.title}</h3><p className="text-sm text-slate-600">{item.company} · Saved demo, not submitted</p>{item.statement && <p className="my-2 text-sm">{item.statement}</p>}<Button variant="ghost" size="sm" onClick={() => setRemoveId(item.id)}>Remove demo application</Button></article>)}
      </section>
      <ConfirmationDialog open={removeId !== null} onClose={() => setRemoveId(null)} title="Remove demo application?" message="This removes the local preview. It does not withdraw a real application." onConfirm={() => { try { saveApplications(applications.filter((item) => item.id !== removeId)); addToast("success", "Demo application removed."); } catch { addToast("error", "Could not remove this application."); } }} />
      <h2 className="mb-4 text-lg font-semibold">Sample application tracking</h2>
      <motion.div
        variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
        initial="initial"
        animate="animate"
        className="space-y-4"
      >
        {mockApplications.map((app) => (
          <motion.div key={app.id} variants={fadeInUp}>
            <Card>
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold text-slate-900 truncate">{app.opportunityTitle}</h3>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[app.status]}`}>
                        {app.status.replace("-", " ")}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{app.company} - {app.type}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-500">
                      <span>Applied: {app.appliedAt}</span>
                      <span>Updated: {app.updatedAt}</span>
                      <span>Match: {app.matchScore}%</span>
                    </div>
                    {app.nextAction && (
                      <p className="mt-2 text-sm text-amber-700 font-medium">{app.nextAction}</p>
                    )}
                    {app.deadline && (
                      <p className="text-xs text-red-600 mt-1">Deadline: {app.deadline}</p>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <StatusTimeline currentStatus={app.status} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
