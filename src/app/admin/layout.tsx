import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin Panel | NEXVIA",
  description: "NEXVIA administration panel for platform management",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardSidebar role="ADMIN" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 lg:px-8 shrink-0">
          <div className="flex items-center gap-3">
            <h1 className="text-base font-semibold text-slate-900">Admin Panel</h1>
            <Badge variant="primary" size="sm">Admin</Badge>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
