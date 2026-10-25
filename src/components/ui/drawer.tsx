"use client";
import { type ReactNode } from "react";
import { Modal } from "./modal";

export function Drawer(props: { open: boolean; onClose: () => void; title?: string; children: ReactNode; side?: "left" | "right"; size?: "sm" | "md" | "lg" }) {
  return <Modal {...props} side={props.side ?? "right"} />;
}
