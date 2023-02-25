import { NavLink } from "./NavLink";
import type { Route } from "../types/interfaces";
import { DarkModeButton } from "./DarkModeButton";
import { MobileMenu } from "./MobileMenu";

const routes: Route[] = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Articles", path: "/articles" },
];

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-[25svh]">
      <MobileMenu routes={routes} />
      <nav className="sm:flex space-x-10 hidden">
        {routes.map((route, index) => {
          return <NavLink key={index} route={route} />;
        })}
      </nav>
      <DarkModeButton />
    </header>
  );
};
