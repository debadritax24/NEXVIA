"use client";

import { useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export function Tabs({ defaultValue, children, className }: { defaultValue: string; children: React.ReactNode; className?: string }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex border-b border-slate-200 gap-1", className)} role="tablist">{children}</div>;
}

export function TabsTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used within Tabs");
  const isActive = ctx.activeTab === value;
  return (
    <button role="tab" aria-selected={isActive} onClick={() => ctx.setActiveTab(value)}
      className={cn("px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px",
        isActive ? "border-primary-500 text-primary-500" : "border-transparent text-slate-500 hover:text-slate-700", className)}>
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used within Tabs");
  if (ctx.activeTab !== value) return null;
  return <div role="tabpanel" className={cn("py-4", className)}>{children}</div>;
}
