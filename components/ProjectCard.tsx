import { Project } from "@/types/interfaces";
import Link from "next/link";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link
      href={`/projects/${project.name}`}
      className="flex items-center justify-between w-1/2 min-w-[360px] mb-4 rounded-md transition-all duration-600 p-3 border border-white hover:border-gray-200"
    >
      <div className="w-36 h-28 p-6 flex items-center justify-center border rounded-md overflow-hidden">
        <img src={project.image} className="w-full h-full" />
      </div>
      <div className="flex flex-col items-start justify-center h-28 w-full pl-5">
        <h2 className="text-2xl font-bold">
          {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
        </h2>
        <p className="text-sm mb-2">{project.description_small}</p>
        <ul className="flex space-x-2">
          {project.tags.map((tag) => (
            <li className="bg-gray-100 py-0.5 px-2 rounded-lg text-xs">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
