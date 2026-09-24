"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface OnboardingData {
  role: string;
  interests: string[];
  careerGoals: string;
  careerPath: string;
  skills: Record<string, number>;
  experience: string;
  projectLinks: string[];
  opportunities: string[];
  locationPreference: string;
}

const roles = [
  { id: "student", label: "Student", icon: "M12 14l9-5-9-5-9 5 9 5z", description: "Learn, assess skills, find opportunities" },
  { id: "faculty", label: "Faculty", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", description: "Guide students, manage training programs" },
  { id: "industry", label: "Industry", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", description: "Post opportunities, find talent" },
  { id: "institution", label: "Institution", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", description: "Track student skills, industry demand" },
];

const interestOptions = [
  "Web Development", "Mobile Development", "AI/ML", "Cloud Computing",
  "Data Science", "DevOps", "UI/UX Design", "Cybersecurity",
  "Blockchain", "IoT", "Game Development", "AR/VR",
];

const careerPathOptions = [
  "Software Engineer", "Full Stack Developer", "Data Scientist",
  "ML Engineer", "DevOps Engineer", "Cloud Architect",
  "Product Manager", "UX Designer", "Security Analyst",
  "Mobile Developer", "Backend Developer", "Frontend Developer",
];

const skillOptions = [
  "React", "JavaScript", "Python", "TypeScript", "Node.js",
  "Java", "SQL", "Git", "Docker", "AWS",
  "HTML/CSS", "MongoDB", "Express", "Next.js", "GraphQL",
];

const experienceOptions = [
  "Student", "Fresher", "1-2 years", "3-5 years", "5+ years",
];

const opportunityOptions = [
  "Internships", "Full-time Roles", "Open Source Projects",
  "Mentorship Programs", "Workshops", "Hackathons",
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
};

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    role: "",
    interests: [],
    careerGoals: "",
    careerPath: "",
    skills: {},
    experience: "",
    projectLinks: [""],
    opportunities: [],
    locationPreference: "",
  });

  const totalSteps = 7;
  const progress = ((step + 1) / totalSteps) * 100;

  const navigate = (dir: number) => {
    setDirection(dir);
    setStep((s) => s + dir);
  };

  const toggleArrayItem = (field: "interests" | "opportunities", item: string) => {
    setData((prev) => {
      const arr = prev[field];
      const next = arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];
      return { ...prev, [field]: next };
    });
  };

  const updateSkill = (skill: string, value: number) => {
    setData((prev) => ({
      ...prev,
      skills: { ...prev.skills, [skill]: value },
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 0: return data.role !== "";
      case 1: return data.interests.length >= 3;
      case 2: return data.careerGoals.trim().length > 0 && data.careerPath !== "";
      case 3: return Object.keys(data.skills).length > 0;
      case 4: return data.experience !== "";
      case 5: return data.opportunities.length > 0;
      default: return true;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500">
              <span className="text-sm font-bold text-white">N</span>
            </div>
            <span className="text-xl font-bold text-slate-900">NEXVIA</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Set Up Your Profile</h1>
          <p className="text-sm text-slate-500">Let&apos;s personalize your experience</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-500">Step {step + 1} of {totalSteps}</span>
            <span className="text-xs font-semibold text-primary-500">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} size="sm" color="primary" animated />
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {step === 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Who are you?</h2>
                  <p className="text-sm text-slate-500 mb-6">Select your role to get started</p>
                  <div className="grid grid-cols-2 gap-4">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        onClick={() => setData((d) => ({ ...d, role: role.id }))}
                        className={cn(
                          "flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all duration-200 text-center",
                          data.role === role.id
                            ? "border-primary-500 bg-primary-500/5 shadow-sm"
                            : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        )}
                      >
                        <div className={cn(
                          "h-14 w-14 rounded-xl flex items-center justify-center",
                          data.role === role.id ? "bg-primary-500 text-white" : "bg-slate-100 text-slate-500"
                        )}>
                          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={role.icon} />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{role.label}</p>
                          <p className="text-xs text-slate-500 mt-1">{role.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Your Interests</h2>
                  <p className="text-sm text-slate-500 mb-6">Select at least 3 areas that interest you</p>
                  <div className="flex flex-wrap gap-2.5">
                    {interestOptions.map((interest) => {
                      const selected = data.interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          onClick={() => toggleArrayItem("interests", interest)}
                          className={cn(
                            "px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-200",
                            selected
                              ? "bg-primary-500 text-white border-primary-500 shadow-sm"
                              : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                          )}
                        >
                          {interest}
                        </button>
                      );
                    })}
                  </div>
                  {data.interests.length > 0 && data.interests.length < 3 && (
                    <p className="mt-3 text-xs text-amber-600">Select at least {3 - data.interests.length} more</p>
                  )}
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Career Goals</h2>
                  <p className="text-sm text-slate-500 mb-6">Tell us about your aspirations</p>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Career Path</label>
                      <select
                        value={data.careerPath}
                        onChange={(e) => setData((d) => ({ ...d, careerPath: e.target.value }))}
                        className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                      >
                        <option value="">Select a career path</option>
                        {careerPathOptions.map((path) => (
                          <option key={path} value={path}>{path}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">What are your career goals?</label>
                      <textarea
                        value={data.careerGoals}
                        onChange={(e) => setData((d) => ({ ...d, careerGoals: e.target.value }))}
                        placeholder="Describe your career aspirations, what you want to achieve, and where you see yourself in 5 years..."
                        rows={4}
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Current Skills</h2>
                  <p className="text-sm text-slate-500 mb-6">Rate your proficiency in these skills</p>
                  <div className="space-y-5">
                    {skillOptions.map((skill) => (
                      <div key={skill} className="flex items-center gap-4">
                        <span className="text-sm font-medium text-slate-700 w-28 shrink-0">{skill}</span>
                        <div className="flex-1 flex items-center gap-3">
                          <input
                            type="range"
                            min={0}
                            max={100}
                            value={data.skills[skill] || 0}
                            onChange={(e) => updateSkill(skill, Number(e.target.value))}
                            className="flex-1 h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary-500"
                          />
                          <span className="text-sm font-semibold text-slate-900 w-10 text-right">{data.skills[skill] || 0}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Experience</h2>
                  <p className="text-sm text-slate-500 mb-6">Your current experience level</p>
                  <div className="space-y-3 mb-6">
                    {experienceOptions.map((exp) => (
                      <label
                        key={exp}
                        className={cn(
                          "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200",
                          data.experience === exp
                            ? "border-primary-500 bg-primary-500/5"
                            : "border-slate-200 hover:border-slate-300"
                        )}
                      >
                        <div className={cn(
                          "h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0",
                          data.experience === exp ? "border-primary-500" : "border-slate-300"
                        )}>
                          {data.experience === exp && (
                            <div className="h-2.5 w-2.5 rounded-full bg-primary-500" />
                          )}
                        </div>
                        <span className="text-sm font-medium text-slate-700">{exp}</span>
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Project Links (optional)</label>
                    <div className="space-y-2">
                      {data.projectLinks.map((link, i) => (
                        <Input
                          key={i}
                          placeholder="https://github.com/your-project"
                          value={link}
                          onChange={(e) => {
                            const links = [...data.projectLinks];
                            links[i] = e.target.value;
                            setData((d) => ({ ...d, projectLinks: links }));
                          }}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setData((d) => ({ ...d, projectLinks: [...d.projectLinks, ""] }))}
                      className="mt-2 text-sm text-primary-500 hover:text-primary-600 font-medium"
                    >
                      + Add another link
                    </button>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Preferred Opportunities</h2>
                  <p className="text-sm text-slate-500 mb-6">What kind of opportunities are you looking for?</p>
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {opportunityOptions.map((opp) => {
                      const selected = data.opportunities.includes(opp);
                      return (
                        <button
                          key={opp}
                          onClick={() => toggleArrayItem("opportunities", opp)}
                          className={cn(
                            "px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-200",
                            selected
                              ? "bg-accent-500 text-white border-accent-500 shadow-sm"
                              : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                          )}
                        >
                          {opp}
                        </button>
                      );
                    })}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Location Preference</label>
                    <Input
                      placeholder="e.g., Bangalore, Remote, Pan-India"
                      value={data.locationPreference}
                      onChange={(e) => setData((d) => ({ ...d, locationPreference: e.target.value }))}
                    />
                  </div>
                </div>
              )}

              {step === 6 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Review Your Profile</h2>
                  <p className="text-sm text-slate-500 mb-6">Looks great! Complete your setup to get started.</p>
                  <div className="space-y-4">
                    <Card>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500">Role</span>
                          <Badge variant="primary">{data.role.charAt(0).toUpperCase() + data.role.slice(1)}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500">Career Path</span>
                          <span className="text-sm font-medium text-slate-900">{data.careerPath}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500">Experience</span>
                          <span className="text-sm font-medium text-slate-900">{data.experience}</span>
                        </div>
                        <div>
                          <span className="text-sm text-slate-500 block mb-2">Interests</span>
                          <div className="flex flex-wrap gap-1.5">
                            {data.interests.map((i) => (
                              <Badge key={i} variant="default" size="sm">{i}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-slate-500 block mb-2">Opportunities</span>
                          <div className="flex flex-wrap gap-1.5">
                            {data.opportunities.map((o) => (
                              <Badge key={o} variant="accent" size="sm">{o}</Badge>
                            ))}
                          </div>
                        </div>
                        {Object.keys(data.skills).length > 0 && (
                          <div>
                            <span className="text-sm text-slate-500 block mb-2">Skills</span>
                            <div className="flex flex-wrap gap-1.5">
                              {Object.entries(data.skills).filter(([, v]) => v > 0).map(([k, v]) => (
                                <Badge key={k} variant="success" size="sm">{k} {v}%</Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {data.careerGoals && (
                          <div>
                            <span className="text-sm text-slate-500 block mb-1">Career Goals</span>
                            <p className="text-sm text-slate-700">{data.careerGoals}</p>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            disabled={step === 0}
          >
            Back
          </Button>
          <div className="flex gap-1.5">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === step ? "bg-primary-500 w-6" : i < step ? "bg-primary-300 w-2" : "bg-slate-200 w-2"
                )}
              />
            ))}
          </div>
          {step < totalSteps - 1 ? (
            <Button onClick={() => navigate(1)} disabled={!canProceed()}>
              Next
            </Button>
          ) : (
            <Button onClick={() => router.push("/dashboard")}>
              Complete & Go to Dashboard
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
