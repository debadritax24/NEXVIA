"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  side?: "left" | "right";
}

// Native dialogs provide focus containment, inert background content and Escape handling.
export function Modal({ open, onClose, title = "Dialog", children, size = "md", side }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      trigger?.focus();
    };
  }, [open]);

  return (
    <dialog ref={ref} aria-labelledby={titleId} onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) onClose(); } }}
      className={cn("fixed rounded-xl bg-white p-6 text-slate-900 shadow-xl backdrop:bg-black/50 w-[calc(100%-2rem)] max-h-[calc(100dvh-2rem)] overflow-y-auto", { sm: "max-w-md", md: "max-w-lg", lg: "max-w-2xl" }[size], side ? `inset-y-0 m-0 h-dvh max-h-dvh rounded-none ${side === "left" ? "mr-auto" : "ml-auto"}` : "m-auto")}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 id={titleId} className="text-lg font-semibold">{title}</h2>
        <button type="button" onClick={onClose} aria-label="Close dialog" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-slate-100">✕</button>
      </div>
      {open && children}
    </dialog>
  );
}
