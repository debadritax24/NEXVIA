"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

import { roleLinksMap } from "@/config/navigation";

interface DashboardSidebarProps {
  role?: string;
}

export function DashboardSidebar({ role = "STUDENT" }: DashboardSidebarProps) {
  const pathname = usePathname();
  const links = roleLinksMap[role] || roleLinksMap.STUDENT;

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:border-r border-slate-200 bg-white shrink-0">
      <div className="flex items-center gap-2.5 px-6 h-16 border-b border-slate-200">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500">
            <span className="text-xs font-bold text-white">N</span>
          </div>
          <span className="text-base font-bold text-slate-900">NEXVIA</span>
        </Link>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/student" && link.href !== "/industry" && link.href !== "/institution" && link.href !== "/faculty" && link.href !== "/admin" && pathname.startsWith(link.href));
          return (
            <Link key={link.href} href={link.href} aria-current={isActive ? "page" : undefined}
              className={cn("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-primary-500/10 text-primary-500" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900")}>
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
              </svg>
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 py-4 border-t border-slate-200">
        <div className="flex items-center gap-3 px-3">
          <UserButton appearance={{ elements: { avatarBox: "h-8 w-8" } }} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">{role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
