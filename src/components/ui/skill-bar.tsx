"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

interface SkillBarProps {
  name: string;
  level: number;
  maxLevel?: number;
  verified?: boolean;
  showLabel?: boolean;
  size?: "sm" | "md";
  className?: string;
}

const levelColor = (level: number) => {
  if (level >= 75) return "bg-green-500";
  if (level >= 50) return "bg-primary-500";
  if (level >= 25) return "bg-amber-500";
  return "bg-red-500";
};

const levelLabel = (level: number) => {
  if (level >= 80) return "Expert";
  if (level >= 60) return "Advanced";
  if (level >= 40) return "Intermediate";
  return "Beginner";
};

export function SkillBar({ name, level, maxLevel = 100, verified, showLabel = true, size = "md", className }: SkillBarProps) {
  const pct = Math.min((level / maxLevel) * 100, 100);
  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">{name}</span>
            {verified && (
              <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={level >= 60 ? "success" : level >= 40 ? "warning" : "error"} size="sm">{levelLabel(level)}</Badge>
            <span className="text-sm font-semibold text-slate-900">{level}%</span>
          </div>
        </div>
      )}
      <div className={cn("rounded-full bg-slate-100 overflow-hidden", size === "sm" ? "h-1.5" : "h-2.5")}>
        <motion.div className={cn("h-full rounded-full", levelColor(level))} initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} />
      </div>
    </div>
  );
}
