import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export const metadata: Metadata = {
  title: "Faculty Dashboard | NEXVIA",
  description: "NEXVIA faculty collaboration and student mentorship dashboard",
};

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardSidebar role="FACULTY" />
      <main className="flex-1 overflow-auto">
        <div className="px-6 py-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
