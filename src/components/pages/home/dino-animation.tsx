import Image from "next/image";

export default function DinoAnimation() {
  return (
    <div className="w-80 hidden lg:block relative bg-white border-l-2 border-deep_green overflow-hidden">
      <div className="w-[600px] h-[600px] absolute -bottom-20 left-1/2 -translate-x-1/2">
        <Image
          src={"/video/dino.gif"}
          fill
          alt=""
          className="overflow-clip [transform:rotateY(180deg)]"
          unoptimized
        />
      </div>
    </div>
  );
}
