"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useToast } from "@/components/ui/toast";
import { useDemoApplications } from "@/lib/api/demo-applications";
import type { Opportunity } from "@/lib/api/opportunities";
export function ApplyButton({ opportunity }: { opportunity: Opportunity }) {
  const [open, setOpen] = useState(false);
  const [statement, setStatement] = useState("");
  const [applications, saveApplications] = useDemoApplications();
  const { addToast } = useToast();
  const applied = applications.some((item) => item.opportunityId === opportunity.id);
  return <>
    <Button className="mt-4 w-full" onClick={() => setOpen(true)}>{applied ? "View demo application" : "Try demo application"}</Button>
    <Modal open={open} onClose={() => setOpen(false)} title={opportunity.title}>
      <p className="mb-4 text-sm text-slate-600">Sample opportunity. This preview does not send an application to {opportunity.company}.</p>
      {applied ? <Link href="/student/applications" onClick={() => setOpen(false)} className="font-medium underline">View your saved demo applications</Link> : <form className="space-y-4" onSubmit={(event) => {
        event.preventDefault();
        try {
          saveApplications([...applications, { id: crypto.randomUUID(), opportunityId: opportunity.id, title: opportunity.title, company: opportunity.company, createdAt: new Date().toISOString(), statement: statement.trim() }]);
          addToast("success", "Demo application saved. Nothing has been sent."); setOpen(false);
        } catch { addToast("error", "Could not save your demo application. Try again."); }
      }}>
        <label className="block text-sm font-medium" htmlFor={`statement-${opportunity.id}`}>Why are you interested? (optional)</label>
        <textarea id={`statement-${opportunity.id}`} value={statement} onChange={(event) => setStatement(event.target.value)} maxLength={2000} rows={4} className="w-full rounded-lg border border-slate-300 p-3" />
        <Button type="submit">Save demo application</Button>
      </form>}
    </Modal>
  </>;
}
