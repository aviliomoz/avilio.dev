import { FeatureCard } from "@/components/FeatureCard";
import { getProjectByName } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

// Icons
import { VscGithub } from "react-icons/vsc";
import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

interface Props {
  params: {
    name: string;
  };
}

export async function generateMetadata({
  params: { name },
}: Props): Promise<Metadata> {
  const project = getProjectByName(name);

  const projectNameCapitalLetter = project?.name.charAt(0).toUpperCase() || "";
  const projectNameRest = project?.name.slice(1) || "";
  const projectName = projectNameCapitalLetter + projectNameRest;

  return {
    title: `Project: ${projectName} | Avilio Muñoz`,
    description: project?.description_small,
  };
}

export default async function ProjectPage({ params: { name } }: Props) {
  const project = await getProjectByName(name);

  if (!project) return <p>Error al cargar el projecto</p>;

  return (
    <section>
      <div className="flex justify-between items-center border-b pb-4 mb-12">
        <h1 className="font-bold text-3xl text-gray-800 dark:text-white">
          {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
        </h1>
        <div className="flex items-center space-x-8">
          <a
            href={project.github_url}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <VscGithub className="dark:fill-white" />
            <span className="hidden sm:block dark:text-white">View code</span>
          </a>
          <a
            href={project.url}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <HiOutlineExternalLink className="dark:stroke-white" />
            <span className="hidden sm:block dark:text-white">
              Visit project
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <picture className="w-full h-52 sm:h-80 md:h-96 lg:h-64 relative">
          <Image
            src={project.cover}
            fill
            alt="Cover image"
            className="rounded-md"
          />
        </picture>
        <div className="flex flex-col justify-center w-full">
          <h2 className="font-semibold text-xl mb-4 dark:text-white">
            Description
          </h2>
          <p className="dark:text-white">{project.description_large}</p>
          <div className="flex flex-col gap-4 sm:flex-row items-center mt-6">
            <h3 className="font-medium dark:text-white">Stack:</h3>
            <div className="flex items-center space-x-2">
              {project.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="bg-gray-50 py-0.5 px-3 rounded-lg text-sm dark:text-white dark:bg-gray-900 border"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center font-semibold text-xl mt-14 mb-8 dark:text-white">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:gap-y-14 p-4 md:p-10 border rounded-md">
        {project.features.map((feature, index) => {
          return <FeatureCard key={index} feature={feature} />;
        })}
      </div>
      <div className="w-full flex justify-between items-center mt-14">
        <Link href="/projects" className="flex space-x-3 items-center">
          <BsArrowLeft className="dark:fill-white" />
          <span className="dark:text-white">Go back to projects</span>
        </Link>
        <div className="flex items-center space-x-8">
          <a
            href={project.github_url}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <VscGithub className="dark:fill-white" />
            <span className="hidden sm:block dark:text-white">View code</span>
          </a>
          <a
            href={project.url}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <HiOutlineExternalLink className="dark:stroke-white" />
            <span className="hidden sm:block dark:text-white">
              Visit project
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
