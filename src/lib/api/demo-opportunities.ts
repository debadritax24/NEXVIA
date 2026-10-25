"use client";
import { z } from "zod";
import { useDemoState } from "@/hooks/use-demo-state";
import { opportunityDraftSchema, type OpportunityDraft } from "@/lib/validations/forms";
const schema = z.array(opportunityDraftSchema);
const empty: OpportunityDraft[] = [];
export function useDemoOpportunities() { return useDemoState("opportunities", empty, schema); }
