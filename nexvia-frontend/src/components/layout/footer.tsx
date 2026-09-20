import Link from "next/link";
import { siteConfig } from "@/config";

const footerLinks = {
  Platform: [
    { label: "Skill Assessment", href: "#" },
    { label: "Career Matching", href: "#" },
    { label: "Skill Passport", href: "#" },
    { label: "Learning Paths", href: "#" },
  ],
  "For Students": [
    { label: "Discover Skills", href: "#" },
    { label: "Find Internships", href: "#" },
    { label: "Find Jobs", href: "#" },
    { label: "Connect Mentors", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500">
                <span className="text-xs font-bold text-white">N</span>
              </div>
              <span className="text-base font-bold tracking-tight text-slate-900">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Registered in India. Built for students, by engineers.
          </p>
        </div>
      </div>
    </footer>
  );
}
