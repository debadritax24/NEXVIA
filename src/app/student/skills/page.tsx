"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { SkillBar } from "@/components/ui/skill-bar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SearchInput } from "@/components/ui/search-input";
import { mockSkills, mockSkillGaps, mockSkillCategories } from "@/lib/api/skills";

export default function SkillsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = mockSkills.filter((skill) => {
    const matchesSearch = search === "" || skill.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Skill Intelligence"
        description="Your complete skill profile with proficiency levels and industry benchmarks."
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "My Skills" }]}
      />

      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Current Skills</CardTitle>
                <SearchInput
                  placeholder="Search skills..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-64"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === "all"
                      ? "bg-primary-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  All ({mockSkills.length})
                </button>
                {mockSkillCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      selectedCategory === cat.name
                        ? "bg-primary-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {filteredSkills.map((skill) => (
                  <SkillBar
                    key={skill.id}
                    name={skill.name}
                    level={skill.proficiency}
                    verified={skill.verified}
                  />
                ))}
                {filteredSkills.length === 0 && (
                  <p className="text-sm text-slate-500 text-center py-8">No skills match your search.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Industry Demand</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { skill: "React", demand: "Very High", trend: "up" },
                  { skill: "AWS", demand: "Very High", trend: "up" },
                  { skill: "Docker", demand: "High", trend: "up" },
                  { skill: "TypeScript", demand: "High", trend: "up" },
                  { skill: "Python", demand: "Very High", trend: "up" },
                ].map((item) => (
                  <div key={item.skill} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">{item.skill}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant={item.demand === "Very High" ? "success" : "primary"} size="sm">
                        {item.demand}
                      </Badge>
                      <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skill Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Total Skills</span>
                  <span className="font-semibold text-slate-900">{mockSkills.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Verified</span>
                  <span className="font-semibold text-green-600">{mockSkills.filter((s) => s.verified).length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Average Proficiency</span>
                  <span className="font-semibold text-slate-900">
                    {Math.round(mockSkills.reduce((a, b) => a + b.proficiency, 0) / mockSkills.length)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Skill Gaps</span>
                  <span className="font-semibold text-amber-600">{mockSkillGaps.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Skill Gap Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Skill</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Current</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Required</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Gap</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Priority</th>
                </tr>
              </thead>
              <tbody>
                {mockSkillGaps.map((gap) => (
                  <tr key={gap.skillId} className="border-b border-slate-100 last:border-0">
                    <td className="py-3 px-4 font-medium text-slate-900">{gap.skillName}</td>
                    <td className="py-3 px-4 text-slate-600">{gap.currentLevel}%</td>
                    <td className="py-3 px-4 text-slate-600">{gap.requiredLevel}%</td>
                    <td className="py-3 px-4 text-red-600 font-medium">-{gap.gapScore}%</td>
                    <td className="py-3 px-4">
                      <Badge variant={gap.priority === "high" ? "error" : gap.priority === "medium" ? "warning" : "default"} size="sm">
                        {gap.priority}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
