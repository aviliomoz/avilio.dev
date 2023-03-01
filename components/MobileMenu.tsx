"use client";

import { Route } from "@/types/interfaces";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Icons
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink } from "./NavLink";

interface Props {
  routes: Route[];
}

export const MobileMenu = ({ routes }: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  let pathname = usePathname();
  let routename = pathname;

  if (!pathname || !routename) return <></>;

  if (pathname === "/") {
    routename = "/home";
  }

  if (pathname.includes("/projects/")) {
    routename = "/projects";
  }

  return (
    <div className="sm:hidden relative">
      <div className="flex items-center space-x-4">
        <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
          {menuIsOpen ? (
            <MdClose className="text-3xl fill-gray-800 dark:fill-white" />
          ) : (
            <MdMenu className="text-3xl fill-gray-800 dark:fill-white" />
          )}
        </button>
        <h2 className="font-bold text-lg text-gray-800 dark:text-white">
          {routename.charAt(1).toUpperCase() + routename.slice(2)}
        </h2>
      </div>
      {menuIsOpen && (
        <ul className="absolute border rounded-md p-4 flex flex-col space-y-2 z-20 bg-white mt-2 w-28 dark:bg-gray-900">
          {routes.map((route) => {
            return (
              <li key={route.path} onClick={() => setMenuIsOpen(false)}>
                <NavLink route={route} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
