import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardSidebar role="STUDENT" />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
