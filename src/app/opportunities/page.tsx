"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/ui/page-header";
import { SearchInput } from "@/components/ui/search-input";
import { OpportunityCard } from "@/components/shared/opportunity-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { mockOpportunities, type Opportunity } from "@/lib/api/opportunities";

const typeFilters = ["all", "internship", "full-time", "mentorship"] as const;
const locationFilters = ["all", "Bangalore", "Remote", "Mumbai", "Hyderabad", "Delhi", "Pune"];

export default function OpportunitiesPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const allSkills = useMemo(() => {
    const skills = new Set<string>();
    mockOpportunities.forEach((o) => o.requiredSkills.forEach((s) => skills.add(s)));
    return Array.from(skills).sort();
  }, []);

  const filtered = useMemo(() => {
    return mockOpportunities.filter((opp) => {
      const matchesSearch =
        search === "" ||
        opp.title.toLowerCase().includes(search.toLowerCase()) ||
        opp.company.toLowerCase().includes(search.toLowerCase());
      const matchesType = selectedType === "all" || opp.type === selectedType;
      const matchesLocation = selectedLocation === "all" || opp.location === selectedLocation;
      const matchesRemote = !remoteOnly || opp.remote;
      const matchesSkills =
        selectedSkills.length === 0 ||
        selectedSkills.some((s) => opp.requiredSkills.includes(s));
      return matchesSearch && matchesType && matchesLocation && matchesRemote && matchesSkills;
    });
  }, [search, selectedType, selectedLocation, remoteOnly, selectedSkills]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageHeader
            title="Discover Opportunities"
            description="Find internships, jobs, mentorships, and projects that match your skills."
          />

          <div className="mb-6">
            <SearchInput
              placeholder="Search opportunities by title, company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-700">Type:</span>
              {typeFilters.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedType === type
                      ? "bg-primary-500 text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-primary-300"
                  }`}
                >
                  {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-700">Location:</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="h-8 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
              >
                {locationFilters.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === "all" ? "All Locations" : loc}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setRemoteOnly(!remoteOnly)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                remoteOnly
                  ? "bg-green-500 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-green-300"
              }`}
            >
              Remote Only
            </button>
          </div>

          {selectedSkills.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="text-sm text-slate-500">Filtering by skills:</span>
              {selectedSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className="inline-flex items-center font-medium rounded-full px-2 py-0.5 text-xs bg-primary-500/10 text-primary-500 hover:bg-primary-100 transition-colors"
                >
                  {skill} x
                </button>
              ))}
            </div>
          )}

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All ({filtered.length})</TabsTrigger>
              <TabsTrigger value="internships">
                Internships ({filtered.filter((o) => o.type === "internship").length})
              </TabsTrigger>
              <TabsTrigger value="full-time">
                Full-time ({filtered.filter((o) => o.type === "full-time").length})
              </TabsTrigger>
              <TabsTrigger value="mentorship">
                Mentorship ({filtered.filter((o) => o.type === "mentorship").length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <OpportunityGrid opportunities={filtered} />
            </TabsContent>
            <TabsContent value="internships">
              <OpportunityGrid opportunities={filtered.filter((o) => o.type === "internship")} />
            </TabsContent>
            <TabsContent value="full-time">
              <OpportunityGrid opportunities={filtered.filter((o) => o.type === "full-time")} />
            </TabsContent>
            <TabsContent value="mentorship">
              <OpportunityGrid opportunities={filtered.filter((o) => o.type === "mentorship")} />
            </TabsContent>
          </Tabs>

          <div className="mt-8 mb-4">
            <h3 className="text-sm font-medium text-slate-700 mb-3">Popular Skills</h3>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedSkills.includes(skill)
                      ? "bg-primary-500 text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-primary-300"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function OpportunityGrid({ opportunities }: { opportunities: Opportunity[] }) {
  if (opportunities.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-slate-500">No opportunities match your filters.</p>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {opportunities.map((opp) => (
        <OpportunityCard key={opp.id} opportunity={opp} />
      ))}
    </motion.div>
  );
}
