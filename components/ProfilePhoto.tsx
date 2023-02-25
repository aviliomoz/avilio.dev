import Image from "next/image";

export const ProfilePhoto = () => {
  return (
    <div className="w-[70px] h-[70px] p-1 rounded-full flex justify-center items-center border">
      <picture className="w-full h-full rounded-full bg-gray-800 flex relative overflow-hidden">
        <Image src="/zeno.png" fill alt="profile photo" className="grayscale"/>
      </picture>
    </div>
  );
};
