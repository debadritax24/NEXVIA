"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { mockMentors } from "@/lib/api/profile";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function MentorshipPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Mentorship"
        description="Connect with industry mentors who can guide your career growth."
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "Mentorship" }]}
      />

      <motion.div
        variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2"
      >
        {mockMentors.map((mentor) => (
          <motion.div key={mentor.id} variants={fadeInUp}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar initials={mentor.avatar} size="lg" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold text-slate-900">{mentor.name}</h3>
                      {mentor.available ? (
                        <Badge variant="success" size="sm">Available</Badge>
                      ) : (
                        <Badge variant="default" size="sm">Unavailable</Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-600">{mentor.role}</p>
                    <p className="text-xs text-slate-500 mt-1">{mentor.experience} experience - {mentor.industry}</p>

                    <div className="flex items-center gap-1 mt-2">
                      <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium text-slate-700">{mentor.rating}</span>
                      <span className="text-xs text-slate-500 ml-1">({mentor.mentees} mentees)</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="primary" size="sm">{skill}</Badge>
                      ))}
                    </div>

                    <Button variant="primary" size="sm" className="mt-4" disabled={!mentor.available}>
                      {mentor.available ? "Request Mentorship" : "Currently Unavailable"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
