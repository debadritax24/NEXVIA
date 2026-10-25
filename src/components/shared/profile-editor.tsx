"use client";
import { useState } from "react";
import { z } from "zod";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { profileEditSchema } from "@/lib/validations/forms";
import { useDemoState } from "@/hooks/use-demo-state";
import { mockStudentProfile } from "@/lib/api/profile";

const initial = { firstName: mockStudentProfile.firstName, lastName: mockStudentProfile.lastName, bio: mockStudentProfile.bio ?? "", linkedinUrl: mockStudentProfile.linkedinUrl ?? "", githubUrl: mockStudentProfile.githubUrl ?? "", portfolioUrl: mockStudentProfile.portfolioUrl ?? "" };
export function useDemoProfile() { return useDemoState("profile", initial, profileEditSchema); }
const fields = { firstName: "First name", lastName: "Last name", bio: "Bio", linkedinUrl: "LinkedIn URL", githubUrl: "GitHub URL", portfolioUrl: "Portfolio URL" } as const;
type Values = z.infer<typeof profileEditSchema>;
export function ProfileEditor({ initial, onSave, onClose }: { initial: Values; onSave: (data: Values) => void; onClose: () => void }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { addToast } = useToast();
  return <Modal open onClose={onClose} title="Edit demo profile"><form className="space-y-4" noValidate onSubmit={(event) => {
    event.preventDefault();
    const result = profileEditSchema.safeParse(values);
    if (!result.success) { setErrors(Object.fromEntries(result.error.issues.map((issue) => [String(issue.path[0]), issue.message]))); return; }
    try { onSave(result.data); addToast("success", "Demo profile saved in this tab."); onClose(); } catch { addToast("error", "Could not save your profile. Allow session storage and try again."); }
  }}>
    {(Object.keys(fields) as (keyof Values)[]).map((key) => <Input key={key} label={fields[key]} value={values[key]} error={errors[key]} onChange={(event) => setValues({ ...values, [key]: event.target.value })} />)}
    <div className="flex justify-end gap-3"><Button variant="ghost" onClick={onClose}>Cancel</Button><Button type="submit">Save profile</Button></div>
  </form></Modal>;
}
