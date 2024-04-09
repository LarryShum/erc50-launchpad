import { currencyFormat, shortenAddress } from "@/utils/global";
import Image from "next/image";
import { useState } from "react";

const TABS = ["Active", "Ended"];

const ACTIVE_LISTING_LIST = [
  {
    name: "Trex On Base",
    ticker: "$TREX",
    token_address: "0x9ec13b2f69109acdf3e2a82ce0c12b24b447800e",
    mint_progress: [100000000.0, 2500000000000],
    mint_supply: [2500000000000, 25000],
    mint_price: [100000000, 0.001],
    min_max: [0.001, 1],
  },
  {
    name: "Trex On Base",
    ticker: "$TREX",
    token_address: "0x9ec13b2f69109acdf3e2a82ce0c12b24b447800e",
    mint_progress: [100000000.0, 2500000000000],
    mint_supply: [2500000000000, 25000],
    mint_price: [100000000, 0.001],
    min_max: [0.001, 1],
  },
  {
    name: "Trex On Base",
    ticker: "$TREX",
    token_address: "0x9ec13b2f69109acdf3e2a82ce0c12b24b447800e",
    mint_progress: [100000000.0, 2500000000000],
    mint_supply: [2500000000000, 25000],
    mint_price: [100000000, 0.001],
    min_max: [0.001, 1],
  },
  {
    name: "Trex On Base",
    ticker: "$TREX",
    token_address: "0x9ec13b2f69109acdf3e2a82ce0c12b24b447800e",
    mint_progress: [100000000.0, 2500000000000],
    mint_supply: [2500000000000, 25000],
    mint_price: [100000000, 0.001],
    min_max: [0.001, 1],
  },
  {
    name: "Trex On Base",
    ticker: "$TREX",
    token_address: "0x9ec13b2f69109acdf3e2a82ce0c12b24b447800e",
    mint_progress: [100000000.0, 2500000000000],
    mint_supply: [2500000000000, 25000],
    mint_price: [100000000, 0.001],
    min_max: [0.001, 1],
  },
  {
    name: "Trex On Base",
    ticker: "$TREX",
    token_address: "0x9ec13b2f69109acdf3e2a82ce0c12b24b447800e",
    mint_progress: [100000000.0, 2500000000000],
    mint_supply: [2500000000000, 25000],
    mint_price: [100000000, 0.001],
    min_max: [0.001, 1],
  },
];

export default function Launchpad() {
  const [currentTab, setCurrentTab] = useState<string>("Active");

  return (
    <div className="flex flex-col gap-8 items-center bg-yellow_green border-2 border-t-0 border-deep_green py-16 px-4 md:px-10">
      <h1 className="text-6xl font-bold">The ERC50 Ecosystem</h1>
      <div className="flex border-2 border-deep_green">
        {TABS.map((item, index) => (
          <div
            key={index}
            className={`py-2 px-6 ${
              currentTab === item ? "text-white bg-army_green" : ""
            }`}
          >
            <p className="text-lg font-semibold">{item}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {ACTIVE_LISTING_LIST.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-80 flex flex-col gap-4 bg-white border-2 border-deep_green p-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex justify-center items-center bg-army_green rounded-full">
                <span className="text-xl font-bold text-white font-poppins">
                  {item.name[0].toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold">{item.name}</p>
                <p className="text-xl font-semibold italic text-acid_green">
                  {item.ticker}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 font-poppins text-sm break-words">
              <div className="flex gap-2">
                <p>
                  <span className="font-semibold text-deep_green">
                    Token Address:
                  </span>{" "}
                  <span className="opacity-80">
                    {shortenAddress(item.token_address)}
                  </span>
                </p>
                <Image
                  src={"/svg/icon-copy.svg"}
                  width={12}
                  height={12}
                  alt=""
                />
              </div>
              <p>
                <span className="font-semibold text-deep_green">
                  Mint Supply:
                </span>{" "}
                <span className="opacity-80">
                  {currencyFormat(item.mint_supply[0])} {item.ticker} /{" "}
                  {currencyFormat(item.mint_supply[1])} ETH
                </span>
              </p>
              <p>
                <span className="font-semibold text-deep_green">
                  Mint Price:
                </span>{" "}
                <span className="opacity-80">
                  {currencyFormat(item.mint_price[0])} {item.ticker} /{" "}
                  {currencyFormat(item.mint_price[1])} ETH
                </span>
              </p>
              <p>
                <span className="font-semibold text-deep_green">Min:</span>{" "}
                <span className="opacity-80">
                  {currencyFormat(item.min_max[0])} ETH /
                </span>{" "}
                <span className="font-semibold text-deep_green">Max:</span>{" "}
                <span className="opacity-80">
                  {currencyFormat(item.min_max[1])} ETH
                </span>
              </p>
            </div>
            <div className="h-8 border-2 border-deep_green">
              <div className="w-[40%] h-full flex items-center bg-acid_green p-2">
                <p className="text-xs font-poppins font-medium">40%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
