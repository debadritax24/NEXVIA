"use client";

import { motion } from "framer-motion";

const milestones = [
  { label: "Student", icon: "🎓" },
  { label: "Assessment", icon: "📋" },
  { label: "Skill Profile", icon: "📊" },
  { label: "Skill Gap", icon: "🔍" },
  { label: "Learning", icon: "📚" },
  { label: "Validation", icon: "✅" },
  { label: "Internship", icon: "💼" },
  { label: "Career", icon: "🚀" },
];

export function CareerPath() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            Career Path
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            From student to industry-ready professional.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Your complete career journey — mapped, tracked, and accelerated
            through intelligent skill development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-2xl shadow-sm mb-3">
                  {milestone.icon}
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  {milestone.label}
                </span>
                {i < milestones.length - 1 && (
                  <svg
                    className="hidden lg:block absolute top-12 left-[calc(50%+28px)] w-[calc(100%-56px)] text-slate-300"
                    fill="none"
                    viewBox="0 0 100 10"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M0 5h90m-5-5l5 5-5 5"
                    />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
