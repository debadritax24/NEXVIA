"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion, type TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/utils";

type DrawerSide = "left" | "right";
type DrawerSize = "sm" | "md" | "lg";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  side?: DrawerSide;
  size?: DrawerSize;
}

const sizeStyles: Record<DrawerSize, string> = {
  sm: "w-80",
  md: "w-[28rem]",
  lg: "w-[36rem]",
};

const slideVariants: Record<DrawerSide, { initial: TargetAndTransition; animate: TargetAndTransition; exit: TargetAndTransition }> = {
  left: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  right: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },
};

export function Drawer({
  open,
  onClose,
  title,
  children,
  side = "right",
  size = "md",
}: DrawerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50"
          />
          <motion.div
            ref={panelRef}
            initial={slideVariants[side].initial}
            animate={slideVariants[side].animate}
            exit={slideVariants[side].exit}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={cn(
              "absolute top-0 bottom-0 flex flex-col bg-white shadow-xl",
              side === "left" ? "left-0" : "right-0",
              sizeStyles[size]
            )}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              {title && (
                <h2 className="text-lg font-semibold text-slate-900">
                  {title}
                </h2>
              )}
              <button
                onClick={onClose}
                className="ml-auto rounded-md p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
