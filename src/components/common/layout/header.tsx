import { shortenAddress } from "@/utils/global";
import {
  useAccountModal,
  useChainModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { useAccount } from "wagmi";

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
  const { address, isConnected, chainId } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  return (
    <div className="sticky top-0 flex flex-wrap bg-white border-2 border-deep_green z-20">
      <div className="w-full flex-1 flex justify-between items-center py-4 px-4 md:px-10">
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
        <div className="flex items-center gap-6">
          {isConnected && (
            <button
              className="w-12 h-12 flex justify-center items-center bg-[url('/svg/button-rounded-active.svg')] bg-no-repeat"
              onClick={openChainModal}
            >
              <Image
                src={`/svg/${
                  chainId === 8453 ? "network/base" : "icon-warn"
                }.svg`}
                width={20}
                height={20}
                alt=""
                className="pb-[6px] pr-[1px]"
              />
            </button>
          )}
          <button
            className="w-32 h-12 flex justify-center items-center gap-3 bg-[url('/svg/button.svg')] bg-cover hover:bg-[url('/svg/button-hover.svg')] hover:text-white pb-3"
            onClick={isConnected ? openAccountModal : openConnectModal}
          >
            <p className="text-xs font-semibold font-poppins">
              {isConnected
                ? shortenAddress(address as string)
                : "Connect Wallet"}
            </p>
          </button>
        </div>
      </div>
      <div className="w-full md:w-auto flex items-center gap-5 bg-yellow_green border-l-2 border-deep_green py-3 md:py-0 px-4 md:px-10">
        {SOCIAL_MEDIA.map((item, index) => (
          <Link key={index} href={item.link} target="_blank">
            <div className="w-12 h-12 flex justify-center items-center bg-[url('/svg/button-rounded.svg')] hover:bg-[url('/svg/button-rounded-active.svg')] bg-no-repeat">
              <Image
                src={`/svg/icon-social-${item.name}.svg`}
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
