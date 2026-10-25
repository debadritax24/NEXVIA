import { DemoBanner } from "@/components/shared/demo-banner";
import { DashboardMobileHeader } from "@/components/layout/dashboard-mobile-header";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50 pt-16 lg:pt-0">
      <DashboardMobileHeader />
      <DashboardSidebar role="STUDENT" />
      <main className="min-w-0 flex-1 overflow-y-auto"><DemoBanner />{children}</main>
    </div>
  );
}
