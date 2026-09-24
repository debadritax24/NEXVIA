"use client";

import { motion } from "framer-motion";

const passportData = {
  name: "Priya Sharma",
  role: "Computer Science Student",
  institution: "IIT Delhi",
  overallScore: 72,
  skills: [
    { name: "React", level: 82, verified: true },
    { name: "TypeScript", level: 75, verified: true },
    { name: "Node.js", level: 68, verified: false },
    { name: "PostgreSQL", level: 54, verified: true },
    { name: "AWS", level: 41, verified: false },
  ],
  certifications: 3,
  projects: 5,
  assessments: 12,
};

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export function SkillPassport() {
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
            Skill Passport
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Your verified digital skill identity.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive, verified record of your skills, certifications,
            and achievements — shareable with employers.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-6 text-white">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                  {passportData.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{passportData.name}</h3>
                  <p className="text-sm text-primary-100">{passportData.role}</p>
                  <p className="text-xs text-primary-200">{passportData.institution}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold">{passportData.overallScore}%</div>
                  <div className="text-[10px] text-primary-200 uppercase">Readiness</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold">{passportData.certifications}</div>
                  <div className="text-[10px] text-primary-200 uppercase">Certs</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold">{passportData.projects}</div>
                  <div className="text-[10px] text-primary-200 uppercase">Projects</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold">{passportData.assessments}</div>
                  <div className="text-[10px] text-primary-200 uppercase">Tests</div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Verified Skills
              </h4>
              <div className="space-y-3">
                {passportData.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      {skill.verified && <CheckIcon />}
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
