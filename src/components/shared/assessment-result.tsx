"use client";
import { demoAssessments } from "@/lib/api/demo-assessments";
import { useDemoAssessmentResult } from "@/lib/api/demo-assessment-result";
export function AssessmentResult() {
  const [result] = useDemoAssessmentResult();
  const assessment = result ? demoAssessments[result.assessmentId] : null;
  if (!assessment || !result) return <p className="mb-6 rounded-lg bg-blue-50 p-4 text-sm text-blue-900">No practice assessment completed in this tab. The analysis below is sample data.</p>;
  const correct = assessment.questions.filter((question, index) => question.answer === result.answers[index]).length;
  return <section aria-label="Your practice result" className="mb-8 rounded-xl border border-slate-200 bg-white p-6"><h2 className="text-xl">{assessment.title}: {Math.round(correct / assessment.questions.length * 100)}%</h2><p className="mt-2 text-sm text-slate-600">{correct} of {assessment.questions.length} correct. Practice only; this does not verify professional skills.</p><ol className="mt-4 space-y-4">{assessment.questions.map((question, index) => <li key={question.prompt}><h3 className="text-sm">{index + 1}. {question.prompt}</h3><p className="text-sm">Your answer: {question.choices[result.answers[index]] ?? "Not answered"} · {result.answers[index] === question.answer ? "Correct" : "Incorrect"}</p><p className="text-sm text-slate-600">{question.explanation}</p></li>)}</ol></section>;
}
