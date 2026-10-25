"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { SearchInput } from "@/components/ui/search-input";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

import { candidates } from "@/lib/api/candidates";
import { useState } from "react";


const filters = [
  { label: "All Departments", options: ["Computer Science", "Information Technology", "Electronics & Communication", "Mechanical Engineering"] },
  { label: "All Institutions", options: ["IIT Delhi", "NIT Bombay", "BITS Pilani", "IIIT Hyderabad", "VIT Vellore", "NIT Trichy"] },
  { label: "All Years", options: ["2026", "2027", "2028"] },
];

export default function IndustryCandidatesPage() {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const filtered = candidates.filter((candidate) => `${candidate.name} ${candidate.institution} ${candidate.skills.join(" ")}`.toLowerCase().includes(search.toLowerCase()) &&
    (!selectedFilters["All Departments"] || candidate.department === selectedFilters["All Departments"]) &&
    (!selectedFilters["All Institutions"] || candidate.institution === selectedFilters["All Institutions"]) &&
    (!selectedFilters["All Years"] || String(candidate.graduationYear) === selectedFilters["All Years"])
  );
  return (
    <div className="space-y-6">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Discover Candidates"
          description="Search and filter candidates that match your requirements."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <SearchInput value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by name, skill, or institution..." />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <select value={selectedFilters[filter.label] ?? ""} onChange={(event) => setSelectedFilters({ ...selectedFilters, [filter.label]: event.target.value })} aria-label={filter.label}
                key={filter.label}
                className="max-w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
              >
                <option value="">{filter.label}</option>
                {filter.options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            ))}
          </div>
        </div>
      </motion.div>

      {filtered.length === 0 && <p role="status">No candidates match your search.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((candidate, i) => (
          <motion.div
            key={candidate.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-500/10 flex items-center justify-center text-sm font-semibold text-primary-500">
                  {candidate.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{candidate.name}</h3>
                  <p className="text-xs text-slate-500">{candidate.institution}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary-500">{candidate.matchScore}%</p>
                <p className="text-[10px] text-slate-500">Match</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
              <span>{candidate.department}</span>
              <span>·</span>
              <span>CGPA {candidate.cgpa}</span>
              <span>·</span>
              <span>Class of {candidate.graduationYear}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {candidate.skills.slice(0, 4).map((skill) => (
                <Badge key={skill} variant="primary" size="sm">{skill}</Badge>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4 text-center">
              <div className="rounded-lg bg-slate-50 p-2">
                <p className="text-sm font-bold text-slate-900">{candidate.projects}</p>
                <p className="text-[10px] text-slate-500">Projects</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-2">
                <p className="text-sm font-bold text-slate-900">{candidate.certifications}</p>
                <p className="text-[10px] text-slate-500">Certifications</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-2">
                <p className="text-sm font-bold text-slate-900">{candidate.experience.split(" ")[0]}</p>
                <p className="text-[10px] text-slate-500">Experience</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                {candidate.verified ? (
                  <Badge variant="success" size="sm">
                    <svg className="h-3 w-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </Badge>
                ) : (
                  <Badge variant="default" size="sm">Unverified</Badge>
                )}
              </div>
              <Link className="text-sm font-medium underline" href={`/industry/candidates/${candidate.id}`}>View Profile</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
