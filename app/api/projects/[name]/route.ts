import { NextRequest, NextResponse } from "next/server";
import projects from "@/data/projects.json";

interface Props {
  params: {
    name: string;
  };
}

export async function GET(request: NextRequest, { params: { name } }: Props) {
  const project = projects.find((project) => project.name === name);

  return NextResponse.json(project);
}
