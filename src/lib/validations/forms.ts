import { z } from "zod";

const text = (label: string) => z.string().trim().min(1, `${label} is required.`);
const webLink = z.string().trim().refine((value) => {
  if (!value) return true;
  try { return ["http:", "https:"].includes(new URL(value).protocol); } catch { return false; }
}, "Enter a valid http or https URL.");

export const onboardingSchema = z.object({
  role: z.enum(["student", "faculty", "industry", "institution"], { error: "Choose a role." }),
  interests: z.array(z.string()).min(3, "Choose at least three interests."),
  careerGoals: text("Career goals").max(2000),
  careerPath: text("Career path"),
  skills: z.record(z.string(), z.number().min(0).max(100)).refine((skills) => Object.values(skills).some((value) => value > 0), "Rate at least one skill above zero."),
  experience: text("Experience level"),
  projectLinks: z.array(webLink),
  opportunities: z.array(z.string()).min(1, "Choose at least one opportunity type."),
  locationPreference: z.string().trim().max(200),
});
export const onboardingSteps = [
  onboardingSchema.pick({ role: true }), onboardingSchema.pick({ interests: true }),
  onboardingSchema.pick({ careerGoals: true, careerPath: true }), onboardingSchema.pick({ skills: true }),
  onboardingSchema.pick({ experience: true, projectLinks: true }), onboardingSchema.pick({ opportunities: true, locationPreference: true }), onboardingSchema,
];

export const opportunityDraftSchema = z.object({
  id: z.string(), title: text("Role title").max(120), description: z.string().trim().max(5000),
  requiredSkills: z.array(z.string()), preferredSkills: z.array(z.string()),
  eligibility: z.string().trim(), location: z.string().trim(), duration: z.string().trim(),
  deadline: z.string(), stipend: z.string().trim(), remote: z.boolean(),
  status: z.enum(["draft", "active", "closed"]),
});
export type OpportunityDraft = z.infer<typeof opportunityDraftSchema>;
export const opportunitySchema = opportunityDraftSchema.extend({
  description: text("Description").min(20, "Describe the role in at least 20 characters."),
  requiredSkills: z.array(z.string()).min(1, "Choose at least one required skill."),
  eligibility: text("Eligibility"), duration: text("Duration"),
  deadline: z.iso.date({ error: "Enter a valid deadline." }).refine((value) => new Date(`${value}T23:59:59`).getTime() >= Date.now(), "Choose today or a future deadline."),
}).refine((value) => value.remote || value.location.length > 0, { path: ["location"], message: "Enter a location or enable remote work." });

export const profileEditSchema = z.object({ firstName: text("First name"), lastName: text("Last name"), bio: z.string().max(500), linkedinUrl: webLink, githubUrl: webLink, portfolioUrl: webLink });

export const projectSchema = z.object({
  id: z.string(), title: text("Project title").max(120), description: text("Description").max(2000),
  technologies: z.array(z.string()).min(1, "Add at least one technology."),
  githubUrl: webLink.refine((value) => value.length > 0, "A repository URL is required."),
  liveUrl: webLink.optional(), featured: z.boolean(),
});
