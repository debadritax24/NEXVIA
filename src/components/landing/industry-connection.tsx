"use client";

import { motion } from "framer-motion";

const connections = [
  {
    from: "Students",
    to: "Mentors",
    description: "Get guided by experienced professionals who understand your career goals.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    from: "Students",
    to: "Companies",
    description: "Direct access to internships, jobs, and live projects from verified companies.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    from: "Institutions",
    to: "Industry",
    description: "Real-time skill demand intelligence to align curriculum with market needs.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export function IndustryConnection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
            Ecosystem
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Everyone connects through skills.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            NEXVIA creates meaningful connections between students, mentors,
            companies, and institutions — all powered by skill intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {connections.map((conn, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500 mx-auto mb-4">
                {conn.icon}
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-sm font-semibold text-slate-900">{conn.from}</span>
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="text-sm font-semibold text-slate-900">{conn.to}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {conn.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
