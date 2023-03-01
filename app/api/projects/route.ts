import { NextRequest, NextResponse } from "next/server";
import projects from "@/data/projects.json";

export async function GET(request: NextRequest) {
  return NextResponse.json(projects);
}
