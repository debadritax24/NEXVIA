"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { value: "50K+", label: "Students" },
  { value: "200+", label: "Industry Partners" },
  { value: "100+", label: "Institutions" },
  { value: "85%", label: "Placement Rate" },
];

const problems = [
  { title: "Skill Gap", description: "Students graduate without the skills industry actually needs." },
  { title: "No Visibility", description: "Students lack a clear picture of where they stand vs. industry expectations." },
  { title: "Disconnected", description: "Academia and industry operate in silos with no bridge." },
  { title: "Generic Learning", description: "One-size-fits-all courses that do not address individual skill gaps." },
];

const solutions = [
  { title: "Skill Intelligence", description: "AI-powered assessment that maps your skills against real industry demand." },
  { title: "Personalized Paths", description: "Learning recommendations tailored to your specific gaps and career goals." },
  { title: "Skill Passport", description: "A verified digital identity showcasing your verified, assessed, and certified skills." },
  { title: "Smart Matching", description: "Intelligent matching of your profile with opportunities that fit your skill set." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Bridging Skills.{" "}
                <span className="text-primary-500">Connecting Futures.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                NEXVIA is an Academia-Industry Skill Intelligence Platform that connects
                Students, Industries, Faculty, Educational Institutions, and Mentors. We believe
                every student deserves to know exactly where they stand and what they need to
                become industry-ready.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-primary-500">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900">The Problem</h2>
              <p className="mt-3 text-slate-600">
                Millions of students graduate every year, but most are not ready for the
                jobs of tomorrow. The gap between academic learning and industry needs is
                growing every day.
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2"
            >
              {problems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900">Our Solution</h2>
              <p className="mt-3 text-slate-600">
                NEXVIA provides a comprehensive platform that assesses your skills,
                identifies gaps, recommends personalized learning, and connects you with
                the right opportunities.
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2"
            >
              {solutions.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Our Vision
              </h2>
              <p className="mt-4 text-lg text-primary-100 leading-relaxed">
                To create a world where every student has a clear, data-driven path from
                education to employment. Where industries can discover verified, job-ready
                talent. And where the gap between academia and industry is bridged by
                intelligent skill mapping.
              </p>
              <p className="mt-6 text-primary-200 font-medium">
                Assess. Analyze. Identify. Learn. Validate. Match. Apply. Track. Measure.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
