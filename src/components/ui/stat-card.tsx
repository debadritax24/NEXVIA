"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function StatCard({ label, value, change, icon, trend = "neutral", className }: StatCardProps) {
  const trendColors = { up: "text-green-600", down: "text-red-600", neutral: "text-slate-500" };
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      className={cn("rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
        </div>
        {icon && <div className="h-10 w-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">{icon}</div>}
      </div>
      {change && <p className={cn("text-xs mt-2", trendColors[trend])}>{change}</p>}
    </motion.div>
  );
}
