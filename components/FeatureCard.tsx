import { Feature } from "@/types/interfaces";
import Image from "next/image";

interface Props {
  feature: Feature;
}

export const FeatureCard = ({ feature }: Props) => {
  return (
    <div className="flex flex-col mb-10 sm:mb-0">
      <picture className="relative w-full h-48 rounded-md overflow-hidden">
        <Image src={feature.image} alt={feature.name} fill />
      </picture>
      <h3 className="font-semibold text-lg mt-5 mb-1">{feature.name}</h3>
      <p>{feature.description}</p>
    </div>
  );
};
