import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export const metadata: Metadata = {
  title: "Institution Dashboard | NEXVIA",
  description: "NEXVIA institutional skill intelligence and analytics dashboard",
};

export default function InstitutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardSidebar role="INSTITUTION" />
      <main className="flex-1 overflow-auto">
        <div className="px-6 py-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
