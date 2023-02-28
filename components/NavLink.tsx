"use client";

import type { Route } from "@/types/interfaces";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  route: Route;
}

export const NavLink = ({ route }: Props) => {
  let pathname = usePathname();

  if (pathname?.includes("/projects/")) {
    pathname = "/projects";
  }

  if (pathname?.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <Link
      className={`${
        pathname && pathname === route.path
          ? "font-extrabold text-gray-800"
          : "hover:text-gray-800"
      } relative`}
      href={route.path}
      target={route.path === "/resume.pdf" ? "_blank" : "_self"}
    >
      {pathname && pathname === route.path && (
        <motion.span
          layoutId="underline"
          className="absolute bg-gray-800 w-full h-[1.5px] rounded-sm top-full mt-0.5 hidden sm:block"
        />
      )}
      {route.name}
    </Link>
  );
};
