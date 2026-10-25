"use client";
import { z } from "zod";
import { useDemoState } from "@/hooks/use-demo-state";
const schema = z.object({ assessmentId: z.string(), answers: z.array(z.number().int().min(0)), completedAt: z.string() }).nullable();
export function useDemoAssessmentResult() { return useDemoState<z.infer<typeof schema>>("assessment-result", null, schema); }
