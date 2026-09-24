"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { mockNotifications } from "@/lib/api/profile";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const typeIcons: Record<string, string> = {
  opportunity: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  application: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  assessment: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  mentor: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  skill: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  platform: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
};

const typeColors: Record<string, string> = {
  opportunity: "bg-blue-50 text-blue-600",
  application: "bg-purple-50 text-purple-600",
  assessment: "bg-amber-50 text-amber-600",
  mentor: "bg-green-50 text-green-600",
  skill: "bg-cyan-50 text-cyan-600",
  platform: "bg-slate-50 text-slate-600",
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="p-6 lg:p-8 max-w-3xl mx-auto">
      <PageHeader
        title="Notifications"
        description={`You have ${unreadCount} unread notification${unreadCount !== 1 ? "s" : ""}.`}
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "Notifications" }]}
        action={
          unreadCount > 0 ? (
            <button onClick={markAllAsRead} className="text-sm font-medium text-primary-500 hover:text-primary-600">
              Mark all as read
            </button>
          ) : undefined
        }
      />

      <motion.div
        variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
        initial="initial"
        animate="animate"
        className="space-y-2"
      >
        {notifications.map((notification) => (
          <motion.div key={notification.id} variants={fadeInUp}>
            <Card
              className={`cursor-pointer transition-colors ${!notification.read ? "border-primary-200 bg-primary-50/30" : ""}`}
              onClick={() => markAsRead(notification.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${typeColors[notification.type] || "bg-slate-50 text-slate-600"}`}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={typeIcons[notification.type] || typeIcons.platform} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900">{notification.title}</p>
                      {!notification.read && (
                        <span className="h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mt-0.5">{notification.message}</p>
                    <p className="text-xs text-slate-400 mt-1">
                      {new Date(notification.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
