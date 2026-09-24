"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "accent" | "success" | "warning" | "error";
  showLabel?: boolean;
  label?: string;
  className?: string;
  animated?: boolean;
}

const sizeStyles = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

const colorStyles = {
  primary: "bg-primary-500",
  accent: "bg-accent-500",
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
};

export function Progress({
  value,
  max = 100,
  size = "md",
  color = "primary",
  showLabel = false,
  label,
  className,
  animated = true,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("w-full", className)}>
      {(showLabel || label) && (
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm font-medium text-slate-700">
            {label || "Progress"}
          </span>
          <span className="text-sm font-semibold text-slate-900">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      <div
        className={cn("w-full rounded-full bg-slate-100 overflow-hidden", sizeStyles[size])}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <motion.div
          className={cn("h-full rounded-full", colorStyles[color])}
          initial={animated ? { width: 0 } : { width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}
