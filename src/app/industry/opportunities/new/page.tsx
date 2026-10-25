"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/toast";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";
import { opportunitySchema, opportunityDraftSchema, type OpportunityDraft } from "@/lib/validations/forms";
import { useDemoOpportunities } from "@/lib/api/demo-opportunities";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const skillSuggestions = [
  "React", "TypeScript", "Node.js", "Python", "Java", "AWS", "Docker",
  "PostgreSQL", "MongoDB", "Git", "HTML/CSS", "JavaScript", "GraphQL",
  "Next.js", "Tailwind CSS", "Kubernetes", "Redis", "Figma", "REST APIs",
];

function OpportunityForm({ record }: { record?: OpportunityDraft }) {
  const router = useRouter();
  const { addToast } = useToast();
  const [records, setRecords] = useDemoOpportunities();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirm, setConfirm] = useState(false);
  const [title, setTitle] = useState(record?.title ?? "");
  const [description, setDescription] = useState(record?.description ?? "");
  const [requiredSkills, setRequiredSkills] = useState<string[]>(record?.requiredSkills ?? []);
  const [preferredSkills, setPreferredSkills] = useState<string[]>(record?.preferredSkills ?? []);
  const [eligibility, setEligibility] = useState(record?.eligibility ?? "");
  const [location, setLocation] = useState(record?.location ?? "");
  const [duration, setDuration] = useState(record?.duration ?? "");
  const [deadline, setDeadline] = useState(record?.deadline ?? "");
  const [stipend, setStipend] = useState(record?.stipend ?? "");
  const [remote, setRemote] = useState(record?.remote ?? false);

  const values = (status: "draft" | "active") => ({ id: record?.id ?? crypto.randomUUID(), title, description, requiredSkills, preferredSkills, eligibility, location, duration, deadline, stipend, remote, status });
  const validate = (status: "draft" | "active") => {
    const result = (status === "draft" ? opportunityDraftSchema : opportunitySchema).safeParse(values(status));
    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      addToast("error", "Review the highlighted fields.");
      return null;
    }
    setErrors({});
    return result.data;
  };
  const save = (status: "draft" | "active") => {
    const record = validate(status);
    if (!record) return;
    try {
      setRecords([...records.filter((item) => item.id !== record.id), record]);
      addToast("success", status === "draft" ? "Demo draft saved in this tab." : "Opportunity added to the demo. It is not publicly published.");
      router.push("/industry/opportunities");
    } catch { addToast("error", "Could not save. Allow browser session storage and try again."); }
  };

  const toggleSkill = (skill: string, type: "required" | "preferred") => {
    if (type === "required") {
      setPreferredSkills((prev) => prev.filter((item) => item !== skill));
      setRequiredSkills((prev) =>
        prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
      );
    } else {
      setRequiredSkills((prev) => prev.filter((item) => item !== skill));
      setPreferredSkills((prev) =>
        prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
      );
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Create Opportunity"
          description="Create a demo opportunity. Saved records stay in this browser tab."
          breadcrumbs={[
            { label: "Industry", href: "/industry" },
            { label: "Opportunities", href: "/industry/opportunities" },
            { label: "Create" },
          ]}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="space-y-6"
      >
        <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-5">
          <h2 className="text-base font-semibold text-slate-900">Basic Details</h2>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1.5">Role Title</label>
            <input
              type="text"
              id="title" aria-invalid={!!errors.title} aria-describedby={errors.title ? "title-error" : undefined}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Frontend Developer Intern"
              className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
            />
            {errors.title && <p id="title-error" className="mt-1 text-sm text-red-700">{errors.title}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
            <textarea
              id="description" aria-invalid={!!errors.description} aria-describedby={errors.description ? "description-error" : undefined}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Describe the role, responsibilities, and what the candidate will learn..."
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"
            />
            {errors.description && <p id="description-error" className="mt-1 text-sm text-red-700">{errors.description}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1.5">Location</label>
              <input
                type="text"
                id="location" aria-invalid={!!errors.location} aria-describedby={errors.location ? "location-error" : undefined}
              value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Bangalore"
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
              />
            {errors.location && <p id="location-error" className="mt-1 text-sm text-red-700">{errors.location}</p>}
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-slate-700 mb-1.5">Duration</label>
              <input
                type="text"
                id="duration" aria-invalid={!!errors.duration} aria-describedby={errors.duration ? "duration-error" : undefined}
              value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 6 months"
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
              />
            {errors.duration && <p id="duration-error" className="mt-1 text-sm text-red-700">{errors.duration}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="stipend" className="block text-sm font-medium text-slate-700 mb-1.5">Stipend / Salary</label>
              <input
                type="text"
                id="stipend" aria-invalid={!!errors.stipend} aria-describedby={errors.stipend ? "stipend-error" : undefined}
              value={stipend}
                onChange={(e) => setStipend(e.target.value)}
                placeholder="e.g. 15,000/month"
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
              />
            {errors.stipend && <p id="stipend-error" className="mt-1 text-sm text-red-700">{errors.stipend}</p>}
            </div>
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-slate-700 mb-1.5">Application Deadline</label>
              <input
                type="date"
                id="deadline" aria-invalid={!!errors.deadline} aria-describedby={errors.deadline ? "deadline-error" : undefined}
              value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
              />
            {errors.deadline && <p id="deadline-error" className="mt-1 text-sm text-red-700">{errors.deadline}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="eligibility" className="block text-sm font-medium text-slate-700 mb-1.5">Eligibility</label>
            <input
              type="text"
              id="eligibility" aria-invalid={!!errors.eligibility} aria-describedby={errors.eligibility ? "eligibility-error" : undefined}
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
              placeholder="e.g. B.Tech CSE/IT, 3rd or 4th year"
              className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
            />
            {errors.eligibility && <p id="eligibility-error" className="mt-1 text-sm text-red-700">{errors.eligibility}</p>}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              role="switch" aria-checked={remote} aria-label="Remote friendly"
              onClick={() => setRemote(!remote)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                remote ? "bg-primary-500" : "bg-slate-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  remote ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <label className="text-sm font-medium text-slate-700">Remote Friendly</label>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
          <h2 className="text-base font-semibold text-slate-900">Required Skills</h2>
          {errors.requiredSkills && <p role="alert" className="text-sm text-red-700">{errors.requiredSkills}</p>}
          <div className="flex flex-wrap gap-2">
            {skillSuggestions.map((skill) => (
              <button
                key={skill}
                aria-pressed={requiredSkills.includes(skill)}
                onClick={() => toggleSkill(skill, "required")}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  requiredSkills.includes(skill)
                    ? "bg-primary-500 text-white border-primary-500"
                    : "border-slate-200 text-slate-600 hover:border-primary-500 hover:text-primary-500"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
          {requiredSkills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {requiredSkills.map((skill) => (
                <Badge key={skill} variant="primary">{skill}</Badge>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
          <h2 className="text-base font-semibold text-slate-900">Preferred Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skillSuggestions.map((skill) => (
              <button
                key={skill}
                aria-pressed={preferredSkills.includes(skill)}
                onClick={() => toggleSkill(skill, "preferred")}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  preferredSkills.includes(skill)
                    ? "bg-accent-500 text-white border-accent-500"
                    : "border-slate-200 text-slate-600 hover:border-accent-500 hover:text-accent-500"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
          {preferredSkills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {preferredSkills.map((skill) => (
                <Badge key={skill} variant="accent">{skill}</Badge>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 justify-end">
          <Button variant="outline" onClick={() => save("draft")}>Save as Draft</Button>
          <Button onClick={() => { if (validate("active")) setConfirm(true); }}>Publish Demo Opportunity</Button>
        </div>
      </motion.div>
      <ConfirmationDialog open={confirm} onClose={() => setConfirm(false)} onConfirm={() => save("active")} title="Add opportunity to demo?" message="This saves the opportunity in this browser tab. No live listing or notifications will be created." confirmLabel="Add to demo" variant="info" />
    </div>
  );
}

function OpportunityEditor() {
  const query = useSearchParams();
  const [records] = useDemoOpportunities();
  const id = query.get("edit");
  const record = records.find((item) => item.id === id);
  if (id && !record) return <p role="status">This demo draft is unavailable in this tab. <a className="underline" href="/industry/opportunities/new">Create an opportunity</a></p>;
  return <OpportunityForm key={record?.id ?? "new"} record={record} />;
}
export default function CreateOpportunityPage() {
  return <Suspense fallback={<p role="status">Loading opportunity editor…</p>}><OpportunityEditor /></Suspense>;
}
