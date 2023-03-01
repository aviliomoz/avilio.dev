import type { Project } from "@/types/interfaces";

const api_route = "http://localhost:3000/api/projects";

export const getProjects = async (): Promise<Project[]> => {
  const data = await fetch(api_route);
  const projects: Project[] = await data.json();

  return projects;
};

export const getProjectByName = async (name: string): Promise<Project> => {
  const data = await fetch(api_route + `/${name}`);
  const project: Project = await data.json();

  return project;
};
