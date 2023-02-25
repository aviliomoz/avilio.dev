import type { Project } from "@/types/interfaces";
import { getProjects } from "@/utils/projects";
import { ProjectCard } from "@/components/ProjectCard";
// import { ArrowLink } from "@/components/ArrowLink";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Avilio Muñoz",
  description: "Avilio Muñoz's portfolio projects page",
};

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();

  return (
    <section>
      <h1 className="font-bold text-3xl mb-8 pb-4 border-b">Projects</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
      {/* <ArrowLink text="Read my articles" path="/articles" /> */}
    </section>
  );
}
