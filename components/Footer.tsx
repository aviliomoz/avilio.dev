import type { Social } from "@/types/interfaces";

// Icons
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";

const socials: Social[] = [
  { icon: FaTwitter, path: "https://twitter.com" },
  { icon: FaLinkedin, path: "https://twitter.com" },
  { icon: FaGithub, path: "https://twitter.com" },
  { icon: FaInstagram, path: "https://twitter.com" },
  { icon: FaSpotify, path: "https://twitter.com" },
];

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center h-[25svh]">
      <ul className="flex space-x-8">
        {socials.map((social, index) => {
          return (
            <li key={index}>
              <a className="text-lg" href={social.path} target="_blank">
                <social.icon />
              </a>
            </li>
          );
        })}
      </ul>
      <p>
        Built with{" "}
        <a className="font-medium" href="https://nextjs.org" target="_blank">
          Next.js
        </a>{" "}
        and{" "}
        <a
          className="font-medium"
          href="https://tailwindcss.com"
          target="_blank"
        >
          Tailwind
        </a>
      </p>
    </footer>
  );
};
