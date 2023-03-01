import type { Project } from "@/types/interfaces";
import projects from "@/data/projects.json";

export const getProjects = (): Project[] => {
  return projects;
};

export const getProjectByName = (name: string): Project | undefined => {
  const project = projects.find((project) => project.name === name);

  return project;
};
