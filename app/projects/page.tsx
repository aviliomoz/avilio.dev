import type { Project } from "@/types/interfaces";
import { getProjects } from "@/utils/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowLink } from "@/components/ArrowLink";

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();

  return (
    <section>
      <h1 className="font-bold text-3xl mb-8 pb-4 border-b">Projects</h1>
      <div className="w-full grid grid-cols-2 gap-2">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
      <ArrowLink text="Read my articles" path="/articles" />
    </section>
  );
}
