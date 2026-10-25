"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { demoAssessments } from "@/lib/api/demo-assessments";
import { useDemoAssessmentResult } from "@/lib/api/demo-assessment-result";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";

export default function AssessmentRunner() {
  const { id } = useParams<{ id: string }>();
  const assessment = demoAssessments[id];
  const router = useRouter();
  const [, saveResult] = useDemoAssessmentResult();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState("");
  if (!assessment) return <div className="p-6"><h1>Assessment not found</h1><Link href="/student/assessment" className="underline">Browse assessments</Link></div>;
  return <div className="mx-auto max-w-3xl space-y-6 p-6">
    <PageHeader title={assessment.title} description="Three practice questions. This demo does not award verified skills or credentials." />
    <form className="space-y-6" onSubmit={(event) => { event.preventDefault(); if (assessment.questions.some((_, index) => answers[index] === undefined)) { setError("Answer every question before submitting."); return; } setError(""); setConfirm(true); }}>
      {assessment.questions.map((question, index) => <fieldset key={question.prompt} className="rounded-xl border border-slate-200 bg-white p-5"><legend className="px-2 font-semibold">{index + 1}. {question.prompt}</legend><div className="space-y-3">{question.choices.map((choice, choiceIndex) => <label key={choice} className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3"><input type="radio" name={`question-${index}`} checked={answers[index] === choiceIndex} onChange={() => setAnswers({ ...answers, [index]: choiceIndex })} />{choice}</label>)}</div></fieldset>)}
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <div className="flex items-center justify-between gap-3"><Link href="/student/assessment" className="underline">Back to assessments</Link><Button type="submit">Submit answers</Button></div>
    </form>
    <ConfirmationDialog open={confirm} onClose={() => setConfirm(false)} title="Submit practice answers?" message="Your score will be calculated from these answers. You can retake this practice assessment anytime." confirmLabel="See results" variant="info" onConfirm={() => {
      try { saveResult({ assessmentId: id, answers: assessment.questions.map((_, index) => answers[index]), completedAt: new Date().toISOString() }); router.push("/student/assessment/results"); } catch { setError("Could not save results. Allow session storage and try again."); }
    }} />
  </div>;
}
