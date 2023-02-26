import type { Social } from "@/types/interfaces";

// Icons
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaCodepen,
} from "react-icons/fa";

const socials: Social[] = [
  { icon: FaTwitter, path: "https://twitter.com" },
  { icon: FaLinkedin, path: "https://twitter.com" },
  { icon: FaGithub, path: "https://twitter.com" },
  { icon: FaCodepen, path: "https://twitter.com" },
  { icon: FaInstagram, path: "https://twitter.com" },
  { icon: FaSpotify, path: "https://twitter.com" },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col-reverse justify-center items-center sm:flex-row sm:justify-between h-[25svh]">
      <ul className="flex space-x-8 mt-8 sm:mt-0">
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
      <a
        href="mailto:aviliomuoz@gmail.com"
        className="bg-gray-50 py-1 px-4 flex items-center justify-center rounded-md border hover:bg-gray-100 transition-all"
      >
        Send me a message
      </a>
    </footer>
  );
};
