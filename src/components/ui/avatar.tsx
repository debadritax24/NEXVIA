import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-lg",
};

export function Avatar({ src, alt, initials, size = "md", className }: AvatarProps) {
  if (src) {
    return <Image unoptimized width={56} height={56} src={src} alt={alt || "Avatar"} className={cn("rounded-full object-cover", sizeStyles[size], className)} />;
  }
  return (
    <div className={cn("rounded-full bg-primary-500/10 text-primary-500 font-semibold flex items-center justify-center", sizeStyles[size], className)}>
      {initials || "?"}
    </div>
  );
}
