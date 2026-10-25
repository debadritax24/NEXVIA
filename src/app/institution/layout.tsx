import { DemoBanner } from "@/components/shared/demo-banner";
import { DashboardMobileHeader } from "@/components/layout/dashboard-mobile-header";
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
    <div className="flex min-h-screen bg-slate-50 pt-16 lg:pt-0">
      <DashboardMobileHeader />
      <DashboardSidebar role="INSTITUTION" />
      <main className="min-w-0 flex-1 overflow-auto">
        <DemoBanner /><div className="px-4 py-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
