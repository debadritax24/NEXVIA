import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXVIA — Bridging Skills. Connecting Futures.",
  description:
    "NEXVIA is an Academia-Industry Skill Intelligence Platform connecting Students, Industries, Faculty, Educational Institutions, and Mentors.",
  keywords: [
    "skill intelligence",
    "career platform",
    "student skills",
    "industry matching",
    "internship",
    "placement",
    "India",
  ],
  openGraph: {
    title: "NEXVIA — Bridging Skills. Connecting Futures.",
    description:
      "Discover your skills, identify gaps, learn what matters, and connect with real industry opportunities.",
    url: "https://nexvia.in",
    siteName: "NEXVIA",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
