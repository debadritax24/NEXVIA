"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const steps = [
  {
    number: "01",
    title: "Assess",
    description: "Take AI-powered skill assessments to evaluate your current proficiency across technical and soft skills.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    color: "bg-blue-50 text-blue-600",
  },
  {
    number: "02",
    title: "Analyze",
    description: "Your skill data is analyzed against industry benchmarks, market demand, and career requirements.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "bg-purple-50 text-purple-600",
  },
  {
    number: "03",
    title: "Identify Skill Gaps",
    description: "See exactly where you stand vs. where you need to be for your target roles. Get a clear gap analysis.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    color: "bg-amber-50 text-amber-600",
  },
  {
    number: "04",
    title: "Learn",
    description: "Follow personalized learning paths with curated courses, projects, and resources for your specific gaps.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "bg-green-50 text-green-600",
  },
  {
    number: "05",
    title: "Validate",
    description: "Prove your skills through verified assessments, projects, and certifications recognized by industry.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    number: "06",
    title: "Match",
    description: "Get intelligently matched with opportunities that align with your verified skills and career goals.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    number: "07",
    title: "Apply",
    description: "Apply to opportunities with your Skill Passport, showcasing verified credentials that employers trust.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    color: "bg-rose-50 text-rose-600",
  },
  {
    number: "08",
    title: "Track",
    description: "Monitor your applications, interviews, and progress in real-time with smart notifications.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    color: "bg-teal-50 text-teal-600",
  },
  {
    number: "09",
    title: "Grow",
    description: "Continue building your skill profile, earning certifications, and advancing your career trajectory.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                The NEXVIA Journey
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                From assessment to career growth, NEXVIA guides you through every step
                of becoming industry-ready. Here is how it works.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="relative flex gap-6 items-start"
                >
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-14 w-px h-[calc(100%+2rem)] bg-slate-200" />
                  )}
                  <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${step.color}`}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-slate-400 tracking-wider">{step.number}</span>
                      <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900">Ready to Start Your Journey?</h2>
              <p className="mt-4 text-lg text-slate-600">
                Begin your path to becoming industry-ready with NEXVIA.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Link href="/sign-up">
                  <Button variant="primary" size="lg">Get Started Free</Button>
                </Link>
                <Link href="/opportunities">
                  <Button variant="outline" size="lg">Browse Opportunities</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
