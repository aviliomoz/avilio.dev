import { Project } from "@/types/interfaces";
import Link from "next/link";
import Image from "next/image";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link
      href={`/projects/${project.name}`}
      className="flex w-full rounded-md transition-all duration-600 p-3 border border-white hover:border-gray-200"
    >
      <picture className="w-28 h-24 flex items-center justify-center relative">
        <Image src={project.logo} alt={project.name} width={60} height={60} />
      </picture>
      <div className="flex flex-col items-start justify-center w-full pl-5">
        <h2 className="text-2xl font-bold">
          {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
        </h2>
        <p className="mt-1">{project.description_small}</p>
      </div>
    </Link>
  );
};
