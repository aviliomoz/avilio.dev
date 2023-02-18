"use client";

import type { Route } from "@/types/interfaces";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
      className={`${pathname && pathname === route.path && "font-semibold"}`}
      href={route.path}
      target={route.path === "/resume.pdf" ? "_blank" : "_self"}
    >
      {route.name}
    </Link>
  );
};
