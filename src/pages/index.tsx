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

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  return (
    <div className="flex flex-col">
      <div className="flex border-2 border-t-0 border-deep_green">
        <div className="flex-1 flex flex-col gap-10 bg-[url('/img/bg-section-1.jpeg')] py-16 px-10">
          <div className="flex items-center gap-6">
            <h1 className="text-5xl font-bold">ERC50 Launchpad</h1>
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
        <div className="w-80 relative bg-white border-l-2 border-deep_green">
          <Image src={"/video/dino.gif"} width={600} height={600} alt="" />
        </div>
      </div>
    </div>
  );
}
