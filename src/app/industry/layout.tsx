import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export const metadata: Metadata = {
  title: "Industry Dashboard | NEXVIA",
  description: "NEXVIA industry talent discovery and recruitment dashboard",
};

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardSidebar role="INDUSTRY" />
      <main className="flex-1 overflow-auto">
        <div className="px-6 py-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
