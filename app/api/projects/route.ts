import { NextRequest, NextResponse } from "next/server";

const projects = [
  {
    name: "wasavi",
    github_url: "https://github.com",
    url: "https://github.com",
    description_small: "Product management app for restaurants.",
    description_large:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus quam, nam ipsum, praesentium nihil distinctio qui quidem expedita vero laborum ullam culpa, cupiditate autem vel voluptas. Consectetur, dolorum ad.",
    logo: "/supabase.svg",
    cover: "/layout.png",
    tags: ["react", "supabase", "tailwind"],
    features: [
      {
        name: "Feature 1",
        image: "/layout.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus quam, nam ipsum, praesentium nihil distinctio qui quidem expedita vero laborum ullam culpa.",
      },
      {
        name: "Feature 2",
        image: "/layout.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus quam, nam ipsum, praesentium nihil distinctio qui quidem expedita vero laborum ullam culpa.",
      },
      {
        name: "Feature 3",
        image: "/layout.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus quam, nam ipsum, praesentium nihil distinctio qui quidem expedita vero laborum ullam culpa.",
      },
      {
        name: "Feature 4",
        image: "/layout.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus quam, nam ipsum, praesentium nihil distinctio qui quidem expedita vero laborum ullam culpa.",
      },
    ],
  },
  {
    name: "datagrill",
    github_url: "https://github.com",
    url: "https://github.com",
    description_small: "BCG Chart generator with spreadsheet imports.",
    description_large:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus quam, nam ipsum, praesentium nihil distinctio qui quidem expedita vero laborum ullam culpa, cupiditate autem vel voluptas. Consectetur, dolorum ad.",
    logo: "/supabase.svg",
    cover: "/layout.png",
    tags: ["react", "tailwind"],
    features: [
      {
        name: "Feature 1",
        image: "/layout.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus quam, nam ipsum, praesentium nihil distinctio qui quidem expedita vero laborum ullam culpa.",
      },
      {
        name: "Feature 2",
        image: "/layout.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus quam, nam ipsum, praesentium nihil distinctio qui quidem expedita vero laborum ullam culpa.",
      },
      {
        name: "Feature 3",
        image: "/layout.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus quam, nam ipsum, praesentium nihil distinctio qui quidem expedita vero laborum ullam culpa.",
      },
      {
        name: "Feature 4",
        image: "/layout.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus quam, nam ipsum, praesentium nihil distinctio qui quidem expedita vero laborum ullam culpa.",
      },
    ],
  },
];

export async function GET(request: NextRequest) {
  return NextResponse.json(projects);
}
