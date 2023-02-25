import type { Project } from "@/types/interfaces";

const api_route = "http://localhost:3000/api/projects";

export const getProjects = async (): Promise<Project[]> => {
  const data = await fetch(api_route);
  const projects: Project[] = await data.json();

  return projects;
};

export const getProjectByName = async (
  name: string
): Promise<Project | undefined> => {
  const projects = await getProjects();

  return projects.find((project) => project.name === name);
};
