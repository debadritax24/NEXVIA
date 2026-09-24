"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const suggestedQuestions = [
  "What skills should I learn next?",
  "How do I prepare for a React interview?",
  "Compare my skills to industry demand",
  "Recommend projects for my portfolio",
  "What career paths match my skills?",
];

const mockResponses: Record<string, string> = {
  "What skills should I learn next?":
    "Based on your skill profile, I recommend focusing on AWS and Docker first. These are high-demand skills that will significantly boost your career readiness. Start with AWS Cloud Practitioner, then move to Docker fundamentals.",
  "How do I prepare for a React interview?":
    "You already have strong React skills (82%). Focus on: 1) Advanced hooks patterns (useCallback, useMemo), 2) State management (Context API, Zustand), 3) Performance optimization, 4) Testing with React Testing Library.",
  "Compare my skills to industry demand":
    "Your frontend skills (React, TypeScript, HTML/CSS) are well above industry average. Your backend skills (Node.js, PostgreSQL) are solid. Key gaps: AWS (41% vs 75% required), Docker (35% vs 70% required). These are your priority areas.",
  "Recommend projects for my portfolio":
    "Based on your skill gaps, I recommend: 1) Deploy a React app to AWS (covers AWS + deployment), 2) Build a Dockerized full-stack app (covers Docker + Node.js), 3) Create a GraphQL API (covers GraphQL gap).",
  "What career paths match my skills?":
    "Your top matches: 1) Frontend Specialist (81% ready), 2) Full Stack Developer (72% ready), 3) Data Scientist (45% ready). Your strongest path is Frontend Specialist where you only need to fill small gaps.",
};

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function CopilotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I am your AI Career Copilot. I can help you with skill recommendations, interview prep, career guidance, and more. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (question?: string) => {
    const text = question || input;
    if (!text.trim()) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const response = mockResponses[text] || `That is a great question about "${text}". Based on your skill profile, I would recommend focusing on practical projects and continuous learning. Your current readiness is 72%, and with targeted effort, you can reach 85%+ within 3 months.`;
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    }, 500);
  };

  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
      <PageHeader
        title="AI Career Copilot"
        description="Get personalized career guidance powered by AI."
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "AI Copilot" }]}
      />

      <div className="flex-1 flex flex-col min-h-0">
        <Card className="flex-1 flex flex-col min-h-0">
          <CardContent className="flex-1 flex flex-col p-0 min-h-0">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary-500 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {messages.length === 1 && (
              <div className="px-6 pb-4">
                <p className="text-xs text-slate-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border border-slate-200 hover:border-primary-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about skills, careers, interview prep..."
                  className="flex-1 h-10 px-4 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                />
                <Button onClick={() => handleSend()} variant="primary" size="md">
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
