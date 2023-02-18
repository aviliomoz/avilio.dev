import Link from "next/link";
import { NavLink } from "./NavLink";
import type { Route } from "../types/interfaces";
import { DarkModeButton } from "./DarkModeButton";

const routes: Route[] = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Articles", path: "/articles" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-[25svh]">
      <nav className="flex space-x-10">
        {routes.map((route, index) => {
          return <NavLink key={index} route={route} />;
        })}
        <Link href="/resume.pdf" target="_blank">
          Resume
        </Link>
      </nav>
      <DarkModeButton />
    </header>
  );
};
