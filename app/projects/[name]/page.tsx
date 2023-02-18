import { getProjectByName, getProjects } from "@/utils/projects";

interface Props {
  params: {
    name: string;
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({ name: project.name }));
}

export default async function ProjectPage({ params: { name } }: Props) {
  const project = await getProjectByName(name);

  if (!project) return <p>Error al cargar el projecto</p>;

  return <h1>{project.description_small}</h1>;
}
