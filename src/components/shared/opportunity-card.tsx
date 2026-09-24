"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MatchScore } from "@/components/ui/match-score";
import type { Opportunity } from "@/lib/api/opportunities";

interface OpportunityCardProps {
  opportunity: Opportunity;
  className?: string;
  showMatch?: boolean;
}

const typeColors: Record<string, string> = {
  internship: "bg-blue-50 text-blue-700",
  "full-time": "bg-green-50 text-green-700",
  "part-time": "bg-purple-50 text-purple-700",
  project: "bg-amber-50 text-amber-700",
  mentorship: "bg-cyan-50 text-cyan-700",
};

export function OpportunityCard({ opportunity, className, showMatch = true }: OpportunityCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -2 }}
      className={cn("rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-all", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium", typeColors[opportunity.type] || "bg-slate-100 text-slate-700")}>
              {opportunity.type}
            </span>
            {opportunity.status === "closing-soon" && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700">Closing Soon</span>
            )}
          </div>
          <h3 className="text-base font-semibold text-slate-900 mb-1 truncate">{opportunity.title}</h3>
          <p className="text-sm text-slate-600 mb-2">{opportunity.company}</p>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {opportunity.location}
            </span>
            {opportunity.remote && <span className="flex items-center gap-1"><Badge size="sm">Remote</Badge></span>}
            {opportunity.stipend && <span>{opportunity.stipend}</span>}
            {opportunity.salary && <span>{opportunity.salary}</span>}
          </div>
        </div>
        {showMatch && <MatchScore score={opportunity.matchScore} size="md" showLabel />}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {opportunity.requiredSkills.slice(0, 4).map((skill) => (
          <Badge key={skill} variant="primary" size="sm">{skill}</Badge>
        ))}
        {opportunity.requiredSkills.length > 4 && (
          <Badge variant="default" size="sm">+{opportunity.requiredSkills.length - 4}</Badge>
        )}
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
        <span className="text-xs text-slate-500">{opportunity.applicants} applicants</span>
        <Link href={`/opportunities/${opportunity.id}`}
          className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors">
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
