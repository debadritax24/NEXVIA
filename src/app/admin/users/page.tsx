"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "suspended";
  joinedDate: string;
}

const mockUsers: User[] = [
  { id: "1", name: "Priya Sharma", email: "priya.sharma@email.com", role: "STUDENT", status: "active", joinedDate: "2025-01-15" },
  { id: "2", name: "Rahul Verma", email: "rahul.v@iitd.ac.in", role: "STUDENT", status: "active", joinedDate: "2025-02-20" },
  { id: "3", name: "Dr. Meena Patel", email: "meena.patel@vit.ac.in", role: "FACULTY", status: "active", joinedDate: "2024-11-10" },
  { id: "4", name: "Ankit Gupta", email: "ankit.g@techcorp.in", role: "INDUSTRY", status: "active", joinedDate: "2024-12-01" },
  { id: "5", name: "Neha Reddy", email: "neha.r@bits.ac.in", role: "INSTITUTION", status: "active", joinedDate: "2024-10-25" },
  { id: "6", name: "Vikram Singh", email: "vikram.s@student.edu", role: "STUDENT", status: "inactive", joinedDate: "2025-03-05" },
  { id: "7", name: "Shreya Nair", email: "shreya.n@iitm.ac.in", role: "STUDENT", status: "active", joinedDate: "2025-01-28" },
  { id: "8", name: "Karan Malhotra", email: "karan.m@startup.io", role: "INDUSTRY", status: "suspended", joinedDate: "2024-09-12" },
  { id: "9", name: "Dr. Arjun Rao", email: "arjun.r@nits.ac.in", role: "FACULTY", status: "active", joinedDate: "2024-08-30" },
  { id: "10", name: "Ishika Jain", email: "ishika.j@student.edu", role: "STUDENT", status: "active", joinedDate: "2025-04-10" },
];

const roleVariant = (role: string) => {
  const map: Record<string, "primary" | "accent" | "success" | "warning" | "error" | "default"> = {
    STUDENT: "primary",
    FACULTY: "accent",
    INDUSTRY: "success",
    INSTITUTION: "warning",
    ADMIN: "error",
  };
  return map[role] || "default";
};

const statusVariant = (status: string) => {
  const map: Record<string, "success" | "warning" | "error"> = {
    active: "success",
    inactive: "warning",
    suspended: "error",
  };
  return map[status] || "default";
};

const roles = ["All", "STUDENT", "FACULTY", "INDUSTRY", "INSTITUTION"];
const perPage = 5;

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = mockUsers.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = filterRole === "All" || u.role === filterRole;
    return matchSearch && matchRole;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <PageHeader
        title="User Management"
        description="View and manage all platform users"
        breadcrumbs={[{ label: "Admin", href: "/admin" }, { label: "Users" }]}
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => { setFilterRole(r); setPage(1); }}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                filterRole === r ? "bg-primary-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {r === "All" ? "All" : r.charAt(0) + r.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">User</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Role</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Status</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">Joined</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((user, i) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar initials={user.name.split(" ").map((n) => n[0]).join("")} size="sm" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={roleVariant(user.role)} size="sm">{user.role}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={statusVariant(user.status)} size="sm">{user.status}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-500">{new Date(user.joinedDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  </td>
                </motion.tr>
              ))}
              {paginated.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-sm text-slate-500">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-slate-500">
          Showing {Math.min((page - 1) * perPage + 1, filtered.length)}-{Math.min(page * perPage, filtered.length)} of {filtered.length}
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Previous</Button>
          <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</Button>
        </div>
      </div>
    </div>
  );
}
