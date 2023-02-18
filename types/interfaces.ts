import { IconType } from "react-icons";

export interface Route {
  name: string;
  path: string;
}

export interface Social {
  icon: IconType;
  path: string;
}

export interface Feature {
  name: string;
  image: string;
  description: string;
}

export interface Project {
  name: string;
  github_url: string;
  url: string;
  description_small: string;
  description_large: string;
  image: string;
  tags: string[];
  features: Feature[];
}
