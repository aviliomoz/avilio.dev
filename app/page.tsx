import { ArrowLink } from "@/components/ArrowLink";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="flex items-center space-x-5">
        <ProfilePhoto />
        <div>
          <h1 className="text-4xl font-bold">Avilio Muñoz</h1>
          <p className="text-stone-700">Frontend Web Developer</p>
        </div>
      </div>
      <div className="flex flex-col space-y-3 mt-8">
        <p className="leading-7 text-stone-700">
          Frontend developer, UX architect and Javascript engineer,{" "}
          <Link href="#" className="link">
            Photochromic Lens
          </Link>{" "}
          enthusiast, practicing minimalist, and{" "}
          <Link href="#" className="link">
            Pop Music & Jazz
          </Link>{" "}
          lover in search of flow.
        </p>
        <p className="leading-7 text-stone-700">
          Working with my hands to make magic happen on the internet. View my{" "}
          <Link href="#" className="link">
            Projects
          </Link>
          ,{" "}
          <Link href="#" className="link">
            Articles
          </Link>
          ,{" "}
          <Link href="#" className="link">
            Resume
          </Link>
          ,{" "}
          <Link href="#" className="link">
            Contact Me
          </Link>
          , or send me an email at hellocodewonders@gmail.com.
        </p>
      </div>
      <ArrowLink text="Lets see my projects" path="/projects" />
    </section>
  );
}