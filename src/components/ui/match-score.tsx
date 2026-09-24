import { cn } from "@/lib/utils";

interface MatchScoreProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const scoreColor = (score: number) => {
  if (score >= 80) return "text-green-600 bg-green-50 border-green-200";
  if (score >= 60) return "text-primary-500 bg-primary-500/5 border-primary-200";
  if (score >= 40) return "text-amber-600 bg-amber-50 border-amber-200";
  return "text-red-600 bg-red-50 border-red-200";
};

const sizeStyles = {
  sm: "h-8 w-8 text-xs",
  md: "h-12 w-12 text-sm",
  lg: "h-16 w-16 text-lg",
};

export function MatchScore({ score, size = "md", showLabel = false, className }: MatchScoreProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("rounded-full border-2 flex items-center justify-center font-bold", scoreColor(score), sizeStyles[size])}>
        {score}%
      </div>
      {showLabel && <span className="text-xs text-slate-500 mt-1">Match</span>}
    </div>
  );
}
