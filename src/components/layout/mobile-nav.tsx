"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, UserButton } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/config";

const mobileDashboardLinks = [
  { label: "Dashboard", href: "/student" },
  { label: "My Skills", href: "/student/skills" },
  { label: "Assessment", href: "/student/assessment" },
  { label: "Learning", href: "/student/learning" },
  { label: "Career", href: "/student/career" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Applications", href: "/student/applications" },
  { label: "Skill Passport", href: "/student/passport" },
  { label: "Mentorship", href: "/student/mentorship" },
  { label: "AI Copilot", href: "/student/copilot" },
  { label: "Profile", href: "/student/profile" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/student") || pathname.startsWith("/industry") || pathname.startsWith("/institution") || pathname.startsWith("/faculty");
  const links = isDashboard ? mobileDashboardLinks : navLinks;

  return (
    <>
      <button type="button" className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100"
        onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
        {open ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }} className="lg:hidden border-t border-slate-200 bg-white overflow-hidden fixed inset-x-0 top-16 z-50">
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                  className={"block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors " + (pathname === link.href ? "bg-primary-500/10 text-primary-500" : "text-slate-600 hover:bg-slate-50")}>
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
                <Show when="signed-out">
                  <Link href="/sign-in" className="block" onClick={() => setOpen(false)}><Button variant="ghost" size="sm" className="w-full">Sign In</Button></Link>
                  <Link href="/sign-up" className="block" onClick={() => setOpen(false)}><Button variant="primary" size="sm" className="w-full">Get Started</Button></Link>
                </Show>
                <Show when="signed-in">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <UserButton appearance={{ elements: { avatarBox: "h-8 w-8" } }} />
                    <span className="text-sm font-medium text-slate-700">Account</span>
                  </div>
                </Show>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
