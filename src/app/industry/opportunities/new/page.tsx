"use client";

import { useState } from "react";
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

export default function CreateOpportunityPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [preferredSkills, setPreferredSkills] = useState<string[]>([]);
  const [eligibility, setEligibility] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [deadline, setDeadline] = useState("");
  const [stipend, setStipend] = useState("");
  const [remote, setRemote] = useState(false);

  const toggleSkill = (skill: string, type: "required" | "preferred") => {
    if (type === "required") {
      setRequiredSkills((prev) =>
        prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
      );
    } else {
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
          description="Post a new internship, job, or project."
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
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Role Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Frontend Developer Intern"
              className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Describe the role, responsibilities, and what the candidate will learn..."
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Bangalore"
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 6 months"
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Stipend / Salary</label>
              <input
                type="text"
                value={stipend}
                onChange={(e) => setStipend(e.target.value)}
                placeholder="e.g. 15,000/month"
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Application Deadline</label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Eligibility</label>
            <input
              type="text"
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
              placeholder="e.g. B.Tech CSE/IT, 3rd or 4th year"
              className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
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
          <div className="flex flex-wrap gap-2">
            {skillSuggestions.map((skill) => (
              <button
                key={skill}
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
          <Button variant="outline">Save as Draft</Button>
          <Button>Publish Opportunity</Button>
        </div>
      </motion.div>
    </div>
  );
}
