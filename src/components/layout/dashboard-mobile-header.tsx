import Link from "next/link";
import { MobileNav } from "./mobile-nav";
export function DashboardMobileHeader() {
  return <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 lg:hidden"><Link href="/" className="font-bold text-primary-500">NEXVIA</Link><MobileNav /></header>;
}
