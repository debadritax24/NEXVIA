"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const projects = [
  {
    id: "p1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product catalog, cart management, and payment integration using Stripe.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "Tailwind CSS"],
    githubUrl: "https://github.com/priyasharma/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "p2",
    title: "Task Manager App",
    description: "A collaborative task management application with real-time updates, drag-and-drop boards, and team workspaces.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "WebSocket"],
    githubUrl: "https://github.com/priyasharma/task-manager",
    liveUrl: undefined,
    featured: true,
  },
  {
    id: "p3",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and 7-day forecasts using OpenWeatherMap API.",
    technologies: ["JavaScript", "REST APIs", "CSS3", "Chart.js"],
    githubUrl: "https://github.com/priyasharma/weather-dashboard",
    liveUrl: "https://weather-dash.vercel.app",
    featured: false,
  },
  {
    id: "p4",
    title: "Blog CMS",
    description: "A headless CMS for technical blogs with markdown support, syntax highlighting, and SEO optimization.",
    technologies: ["React", "Node.js", "MongoDB", "GraphQL"],
    githubUrl: "https://github.com/priyasharma/blog-cms",
    liveUrl: undefined,
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Projects"
        description="Showcase your work and technical projects."
        breadcrumbs={[{ label: "Student", href: "/student" }, { label: "Projects" }]}
        action={<Button variant="primary" size="sm">Add Project</Button>}
      />

      <motion.div
        variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="accent" size="sm">Featured</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="primary" size="sm">{tech}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
