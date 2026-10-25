"use client";
import { MotionConfig } from "framer-motion";
import { ToastProvider } from "@/components/ui/toast";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user"><ToastProvider>{children}</ToastProvider></MotionConfig>;
}
