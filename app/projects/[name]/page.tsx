import { FeatureCard } from "@/components/FeatureCard";
import { getProjectByName, getProjects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";

// Icons
import { VscGithub } from "react-icons/vsc";
import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

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

  return (
    <section>
      <div className="flex justify-between items-center border-b pb-4 mb-12">
        <h1 className="font-bold text-3xl">
          {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
        </h1>
        <div className="flex items-center space-x-8">
          <a
            href={project.github_url}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <VscGithub />
            <span>View code</span>
          </a>
          <a
            href={project.url}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <HiOutlineExternalLink />
            <span>Visit project</span>
          </a>
        </div>
      </div>
      <div className="flex space-x-12">
        <Image
          src={project.cover}
          width={350}
          height={200}
          alt="Cover image"
          className="rounded-md"
        />
        <div className="flex flex-col justify-center w-full">
          <h2 className="font-semibold text-xl mb-4">Description</h2>
          <p>{project.description_large}</p>
          <div className="flex items-center space-x-4 mt-6">
            <h3 className="font-medium">Stack:</h3>
            <div className="flex items-center space-x-2">
              {project.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="bg-gray-100 py-0.5 px-3 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center font-semibold text-xl mt-14 mb-8">Features</h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-14 p-10 border rounded-md">
        {project.features.map((feature, index) => {
          return <FeatureCard key={index} feature={feature} />;
        })}
      </div>
      <div className="w-full flex justify-between items-center mt-14">
        <Link href="/projects" className="flex space-x-3 items-center">
          <BsArrowLeft />
          <span>Go back to projects</span>
        </Link>
        <div className="flex items-center space-x-8">
          <a
            href={project.github_url}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <VscGithub />
            <span>View code</span>
          </a>
          <a
            href={project.url}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <HiOutlineExternalLink />
            <span>Visit project</span>
          </a>
        </div>
      </div>
    </section>
  );
}
