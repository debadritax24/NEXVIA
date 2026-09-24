"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { SearchInput } from "@/components/ui/search-input";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const students = [
  { id: "s1", name: "Priya Sharma", department: "CSE", cgpa: 8.2, skills: 12, assessments: 8, readiness: 72, verified: true },
  { id: "s2", name: "Arjun Patel", department: "IT", cgpa: 8.7, skills: 10, assessments: 7, readiness: 68, verified: true },
  { id: "s3", name: "Sneha Reddy", department: "ECE", cgpa: 7.9, skills: 8, assessments: 5, readiness: 45, verified: false },
  { id: "s4", name: "Rahul Kumar", department: "CSE", cgpa: 8.5, skills: 14, assessments: 9, readiness: 78, verified: true },
  { id: "s5", name: "Ananya Singh", department: "IT", cgpa: 8.1, skills: 11, assessments: 6, readiness: 65, verified: true },
  { id: "s6", name: "Karthik Menon", department: "ME", cgpa: 7.6, skills: 5, assessments: 3, readiness: 32, verified: false },
  { id: "s7", name: "Deepa Nair", department: "CSE", cgpa: 9.0, skills: 15, assessments: 10, readiness: 85, verified: true },
  { id: "s8", name: "Vikram Rao", department: "ECE", cgpa: 7.8, skills: 7, assessments: 4, readiness: 40, verified: false },
  { id: "s9", name: "Nisha Gupta", department: "CE", cgpa: 8.3, skills: 9, assessments: 6, readiness: 55, verified: true },
  { id: "s10", name: "Amit Joshi", department: "IT", cgpa: 8.0, skills: 13, assessments: 8, readiness: 70, verified: true },
];

export default function InstitutionStudentsPage() {
  return (
    <div className="space-y-6">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.4 }}>
        <PageHeader
          title="Students Overview"
          description="Monitor student skills, assessments, and readiness scores."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1, duration: 0.4 }}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <SearchInput placeholder="Search students by name or department..." />
          </div>
          <select className="h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500">
            <option>All Departments</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
            <option>ME</option>
            <option>CE</option>
          </select>
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2, duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider p-4">Student</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider p-4">Dept</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider p-4">CGPA</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider p-4">Skills</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider p-4">Assessments</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider p-4">Readiness</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider p-4">Verified</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary-500/10 flex items-center justify-center text-xs font-semibold text-primary-500">
                        {student.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-sm font-medium text-slate-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">{student.department}</td>
                  <td className="p-4 text-sm font-semibold text-slate-900">{student.cgpa}</td>
                  <td className="p-4 text-sm text-slate-600">{student.skills}</td>
                  <td className="p-4 text-sm text-slate-600">{student.assessments}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <div className={`h-full rounded-full ${student.readiness >= 70 ? "bg-green-500" : student.readiness >= 40 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${student.readiness}%` }} />
                      </div>
                      <span className="text-sm font-semibold text-slate-900">{student.readiness}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    {student.verified ? (
                      <Badge variant="success" size="sm">
                        <svg className="h-3 w-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        Verified
                      </Badge>
                    ) : (
                      <Badge variant="default" size="sm">Unverified</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
