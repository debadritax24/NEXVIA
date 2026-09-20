"use client";

import { motion } from "framer-motion";

const matchingDemo = {
  opportunity: {
    title: "Frontend Developer Intern",
    company: "TechCorp India",
    location: "Bangalore, India",
    type: "Internship",
    stipend: "₹15,000/month",
  },
  matchScore: 87,
  matchingSkills: ["React", "TypeScript", "HTML/CSS"],
  missingSkills: ["Docker", "AWS"],
  eligibility: true,
  whyFit: [
    "Strong React and TypeScript proficiency",
    "Relevant project experience",
    "Career interest in Frontend Development",
  ],
};

export function OpportunityMatching() {
  return (
    <section id="industry" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
            Opportunity Matching
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Opportunities that actually fit you.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Every recommendation comes with a transparent explanation of
            why it matches your profile — and what you can improve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-primary-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {matchingDemo.opportunity.title}
                  </h3>
                  <p className="text-sm text-primary-100">
                    {matchingDemo.opportunity.company} &middot; {matchingDemo.opportunity.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">{matchingDemo.matchScore}%</div>
                  <div className="text-xs text-primary-100">Match</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-500">
                  {matchingDemo.opportunity.type}
                </span>
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  {matchingDemo.opportunity.stipend}
                </span>
                {matchingDemo.eligibility && (
                  <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    ✓ Eligible
                  </span>
                )}
              </div>

              {/* Matching Skills */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Matching Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {matchingDemo.matchingSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Missing Skills */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Skills to Develop
                </h4>
                <div className="flex flex-wrap gap-2">
                  {matchingDemo.missingSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
                    >
                      ○ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why this fits */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Why This Opportunity Fits
                </h4>
                <ul className="space-y-1.5">
                  {matchingDemo.whyFit.map((reason, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="h-4 w-4 text-primary-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
