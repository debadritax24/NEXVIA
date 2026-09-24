"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Institution {
  id: string;
  name: string;
  studentsCount: number;
  verified: boolean;
  location: string;
}

interface Company {
  id: string;
  name: string;
  opportunitiesCount: number;
  verified: boolean;
  industry: string;
}

const mockInstitutions: Institution[] = [
  { id: "1", name: "Indian Institute of Technology Delhi", studentsCount: 4200, verified: true, location: "New Delhi" },
  { id: "2", name: "Vellore Institute of Technology", studentsCount: 3800, verified: true, location: "Vellore" },
  { id: "3", name: "BITS Pilani", studentsCount: 2900, verified: true, location: "Pilani" },
  { id: "4", name: "SRM Institute of Science and Technology", studentsCount: 2100, verified: false, location: "Chennai" },
  { id: "5", name: "National Institute of Technology Surathkal", studentsCount: 1800, verified: true, location: "Surathkal" },
];

const mockCompanies: Company[] = [
  { id: "1", name: "TechCorp India", opportunitiesCount: 85, verified: true, industry: "Technology" },
  { id: "2", name: "Infosys", opportunitiesCount: 120, verified: true, industry: "IT Services" },
  { id: "3", name: "Razorpay", opportunitiesCount: 32, verified: true, industry: "FinTech" },
  { id: "4", name: "Freshworks", opportunitiesCount: 28, verified: false, industry: "SaaS" },
  { id: "5", name: "Zoho Corporation", opportunitiesCount: 45, verified: true, industry: "Software" },
];

export default function AdminOrganizationsPage() {
  return (
    <div>
      <PageHeader
        title="Organizations"
        description="Manage institutions and companies on the platform"
        breadcrumbs={[{ label: "Admin", href: "/admin" }, { label: "Organizations" }]}
      />

      <Tabs defaultValue="institutions">
        <TabsList>
          <TabsTrigger value="institutions">Institutions ({mockInstitutions.length})</TabsTrigger>
          <TabsTrigger value="companies">Companies ({mockCompanies.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="institutions">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Institution</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Location</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Students</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockInstitutions.map((inst, i) => (
                    <motion.tr
                      key={inst.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500 text-sm font-semibold shrink-0">
                            {inst.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                          </div>
                          <span className="text-sm font-medium text-slate-900">{inst.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-600">{inst.location}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-slate-900">{inst.studentsCount.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={inst.verified ? "success" : "warning"} size="sm">
                          {inst.verified ? "Verified" : "Pending"}
                        </Badge>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="companies">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Company</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Industry</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Opportunities</th>
                    <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCompanies.map((company, i) => (
                    <motion.tr
                      key={company.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-500 text-sm font-semibold shrink-0">
                            {company.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                          </div>
                          <span className="text-sm font-medium text-slate-900">{company.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-600">{company.industry}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-slate-900">{company.opportunitiesCount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={company.verified ? "success" : "warning"} size="sm">
                          {company.verified ? "Verified" : "Pending"}
                        </Badge>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
