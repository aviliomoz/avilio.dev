import Link from "next/link";

// Icons
import { BsArrowRight } from "react-icons/bs";

interface Props {
  text: string;
  path: string;
}

export const ArrowLink = ({ text, path }: Props) => {
  return (
    <Link
      href={path}
      className="flex space-x-3 items-center mt-10 mb-8 sm:mt-16"
    >
      <span>{text}</span>
      <BsArrowRight className="move-arrow text-lg" />
    </Link>
  );
};
