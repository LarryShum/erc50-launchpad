import Image from "next/image";

export default function Header() {
  return (
    <div className="sticky top-0 flex bg-white border-2 border-deep_green">
      <div className="flex justify-between items-center py-4 px-10">
        <div className="flex items-center gap-4">
          <Image src={"/svg/logo.svg"} width={28} height={40} alt="" />
        </div>
      </div>
    </div>
  );
}
