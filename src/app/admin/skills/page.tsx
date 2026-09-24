"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Skill {
  id: string;
  name: string;
  category: string;
  avgProficiency: number;
  studentCount: number;
}

const mockSkills: Skill[] = [
  { id: "1", name: "React", category: "Frontend", avgProficiency: 72, studentCount: 3420 },
  { id: "2", name: "JavaScript", category: "Frontend", avgProficiency: 78, studentCount: 4100 },
  { id: "3", name: "Python", category: "Backend", avgProficiency: 68, studentCount: 3850 },
  { id: "4", name: "TypeScript", category: "Frontend", avgProficiency: 65, studentCount: 2100 },
  { id: "5", name: "Node.js", category: "Backend", avgProficiency: 62, studentCount: 1980 },
  { id: "6", name: "Java", category: "Backend", avgProficiency: 70, studentCount: 2650 },
  { id: "7", name: "SQL", category: "Database", avgProficiency: 75, studentCount: 3200 },
  { id: "8", name: "Docker", category: "DevOps", avgProficiency: 55, studentCount: 1420 },
  { id: "9", name: "AWS", category: "Cloud", avgProficiency: 48, studentCount: 1100 },
  { id: "10", name: "Git", category: "DevOps", avgProficiency: 82, studentCount: 4500 },
  { id: "11", name: "HTML/CSS", category: "Frontend", avgProficiency: 85, studentCount: 4800 },
  { id: "12", name: "MongoDB", category: "Database", avgProficiency: 52, studentCount: 1650 },
  { id: "13", name: "Next.js", category: "Frontend", avgProficiency: 58, studentCount: 1200 },
  { id: "14", name: "GraphQL", category: "API", avgProficiency: 42, studentCount: 800 },
  { id: "15", name: "Express", category: "Backend", avgProficiency: 60, studentCount: 1500 },
];

const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "Cloud", "API"];

const categoryVariant = (cat: string) => {
  const map: Record<string, "primary" | "accent" | "success" | "warning" | "default"> = {
    Frontend: "primary",
    Backend: "accent",
    Database: "success",
    DevOps: "warning",
    Cloud: "primary",
    API: "accent",
  };
  return map[cat] || "default";
};

export default function AdminSkillsPage() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filtered = mockSkills.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCategory === "All" || s.category === filterCategory;
    return matchSearch && matchCat;
  });

  return (
    <div>
      <PageHeader
        title="Skill Management"
        description="Manage and monitor all skills in the platform"
        breadcrumbs={[{ label: "Admin", href: "/admin" }, { label: "Skills" }]}
        action={
          <Button size="sm">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Skill
          </Button>
        }
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                filterCategory === cat ? "bg-primary-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Skill</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Category</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Avg Proficiency</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Students</th>
                <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((skill, i) => (
                <motion.tr
                  key={skill.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-900">{skill.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={categoryVariant(skill.category)} size="sm">{skill.category}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className={cn("h-full rounded-full", skill.avgProficiency >= 70 ? "bg-green-500" : skill.avgProficiency >= 50 ? "bg-primary-500" : "bg-amber-500")} style={{ width: `${skill.avgProficiency}%` }} />
                      </div>
                      <span className="text-sm font-semibold text-slate-900">{skill.avgProficiency}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">{skill.studentCount.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-sm text-slate-500">No skills found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
