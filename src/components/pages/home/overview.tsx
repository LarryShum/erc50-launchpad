import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MENU_TEXT = [
  {
    name: "User Guide",
    link: "/",
  },
  {
    name: "Check Audit",
    link: "/",
  },
  {
    name: "Minting Rules",
    link: "/",
  },
];

const MENU_BUTTON = [
  {
    name: "Learn ERC50",
    icon: "logo",
    link: "/",
    desc: "What is ERC50?",
    redirect: true,
  },
  {
    name: "Deploy Now",
    icon: "icon-deploy",
    link: "/",
    desc: "Deploy ERC50 protocol with one click",
    redirect: false,
  },
  {
    name: "Buy $DINO",
    icon: "icon-dino",
    link: "/",
    desc: "The first ERC50 token",
    redirect: true,
  },
];

export default function Overview() {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col gap-10 bg-[url('/img/bg-section-1.jpeg')] py-16 px-10">
        <div className="flex items-center gap-6">
          <h1 className="text-6xl font-bold">ERC50 Launchpad</h1>
          <div className="flex items-center gap-4">
            {MENU_TEXT.map((item, index) => (
              <Link key={index} href={item.link}>
                <p className="text-2xl font-semibold text-army_green underline">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-8">
          {MENU_BUTTON.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <Link
                href={item.link}
                target={item.redirect ? "_blank" : ""}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-64 h-24 flex justify-center items-center gap-3 bg-[url('/svg/button.svg')] hover:bg-[url('/svg/button-hover.svg')] hover:text-white pb-4"
              >
                <Image
                  src={`/svg/${
                    hoveredIndex === index ? item.icon + "-white" : item.icon
                  }.svg`}
                  width={24}
                  height={24}
                  alt=""
                />
                <p className="text-xl font-semibold font-poppins">
                  {item.name}
                </p>
              </Link>
              <p className="text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-20 bg-[url('/img/bg-section-2.png')] border-t-2 border-deep_green pt-16 px-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              src={"/svg/icon-computer.svg"}
              width={40}
              height={40}
              alt=""
            />
            <p className="text-5xl font-bold text-white">Overview</p>
          </div>
          <Image src={"/svg/icon-hearts.svg"} width={120} height={28} alt="" />
        </div>
        <div className="flex items-end justify-between gap-4">
          <div className="flex gap-12 pb-10">
            <div className="flex flex-col gap-6">
              <p className="text-yellow_green">Deployed Projects Count</p>
              <p className="text-6xl font-semibold text-white">11</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <p className="text-yellow_green">Total Funding Raised</p>
                <div className="bg-yellow_green rounded-lg py-[2px] px-3">
                  <p className="text-sm font-semibold">ETH</p>
                </div>
              </div>
              <p className="text-6xl font-semibold text-white">0.522</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-36 h-32 flex justify-center items-center bg-[url('/svg/tv.svg')]">
              <Image
                src={"/video/dino-mini.gif"}
                width={48}
                height={48}
                alt=""
                className="pb-7"
              />
            </div>
            <Image src={"/svg/arrow.svg"} width={36} height={60} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
