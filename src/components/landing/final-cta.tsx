"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 bg-primary-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your next opportunity starts with understanding your skills.
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
            Join NEXVIA today and take the first step toward becoming truly industry-ready.
            Discover your skills. Fill your gaps. Find your path.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sign-up">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-slate-50">
                Start Your NEXVIA Journey
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Sign In to Continue
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-primary-200">
            Free to join. No credit card required. Start your skill journey in minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
