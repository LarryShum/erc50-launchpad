import Image from "next/image";
import Link from "next/link";

const SOCIAL_MEDIA = [
  {
    name: "github",
    link: "https://github.com/dinoToTheMoon/erc50",
  },
  {
    name: "twitter",
    link: "https://twitter.com/ERC_50",
  },
  {
    name: "telegram",
    link: "https://t.me/ERC_50/",
  },
];

export default function Header() {
  return (
    <div className="sticky top-0 flex bg-white border-2 border-deep_green">
      <div className="w-full flex justify-between items-center py-4 px-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src={"/svg/logo.svg"} width={28} height={40} alt="" />
            <p className="text-xl font-poppins font-bold text-deep_green">
              ERC50 Launchpad
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-deep_green rounded-full" />
            <div className="w-6 h-6 bg-yellow_green rounded-full" />
            <div className="w-6 h-6 bg-acid_green rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 bg-yellow_green px-10 border-l-2 border-deep_green">
        {SOCIAL_MEDIA.map((item, index) => (
          <Link key={index} href={item.link} target="_blank">
            <div className="w-12 h-12 flex justify-center items-center bg-[url('/svg/button-rounded.svg')] hover:bg-[url('/svg/button-rounded-active.svg')] bg-no-repeat">
              <Image
                src={`/svg/social-${item.name}.svg`}
                width={16}
                height={16}
                alt=""
                className="pb-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
