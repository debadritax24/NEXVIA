"use client";
import { z } from "zod";
import { useDemoState } from "@/hooks/use-demo-state";
const schema = z.array(z.object({ id: z.string(), opportunityId: z.string(), title: z.string(), company: z.string(), createdAt: z.string(), statement: z.string() }));
const initial: z.infer<typeof schema> = [];
export function useDemoApplications() { return useDemoState("applications", initial, schema); }
