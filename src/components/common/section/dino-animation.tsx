import Image from "next/image";

export default function DinoAnimation() {
  return (
    <div className="w-72 h-[calc(100vh-40px)] sticky top-10 right-0 hidden lg:block bg-white border-b-2 border-r-2 border-deep_green overflow-hidden">
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
