import { Project } from "@/types/interfaces";
import Link from "next/link";
import Image from "next/image";

// Icons
import { BsArrowRight } from "react-icons/bs";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link
      href={`/projects/${project.name}`}
      className="w-full rounded-md p-6 border border-gray-200 group hover:shadow-md transition-all"
    >
      <div className="flex space-x-2 items-center">
        <picture className="w-6 h-6 flex items-center justify-center relative">
          <Image src={project.logo} alt={project.name} fill />
        </picture>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
        </h2>
      </div>
      <p className="mt-1 dark:text-white">{project.description_small}</p>
      <p className="mt-6 flex space-x-2 items-center group-hover:font-medium transition-all">
        <span className="dark:text-white">More details</span>
        <BsArrowRight className="dark:fill-white" />
      </p>
    </Link>
  );
};
