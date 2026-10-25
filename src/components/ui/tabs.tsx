"use client";

import { useId, useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  id: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export function Tabs({ defaultValue, children, className }: { defaultValue: string; children: React.ReactNode; className?: string }) {
  const id = useId();
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ id, activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex overflow-x-auto border-b border-slate-200 gap-1", className)} role="tablist">{children}</div>;
}

export function TabsTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used within Tabs");
  const isActive = ctx.activeTab === value;
  return (
    <button type="button" id={`${ctx.id}-tab-${value}`} aria-controls={`${ctx.id}-panel-${value}`} tabIndex={isActive ? 0 : -1} onKeyDown={(event) => {
      const tabs = Array.from(event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? []);
      const index = tabs.indexOf(event.currentTarget);
      const next = event.key === "ArrowRight" ? (index + 1) % tabs.length : event.key === "ArrowLeft" ? (index - 1 + tabs.length) % tabs.length : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : -1;
      if (next >= 0) { event.preventDefault(); tabs[next].focus(); tabs[next].click(); }
    }} role="tab" aria-selected={isActive} onClick={() => ctx.setActiveTab(value)}
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
  return <div id={`${ctx.id}-panel-${value}`} aria-labelledby={`${ctx.id}-tab-${value}`} tabIndex={0} role="tabpanel" className={cn("py-4", className)}>{children}</div>;
}
