import { shortenAddress } from "@/utils/global";
import Image from "next/image";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LaunchpadListTypes } from "@/types/globals";
import { toast } from "react-toastify";
import { currencyFormat } from "@/utils/currency-format";

const TABS = ["Active", "Ended"];

const LAUNCHPAD_LIST_QUERY = gql`
  query MyQuery {
    tokens {
      creator
      amountPerUnits
      eachAddressLimitEthers
      hash
      id
      launched
      minted
      price
      name
      raised
      symbol
      totalSupply
      uniswapFactory
      uniswapRouter
    }
  }
`;

export default function Launchpad() {
  const [currentTab, setCurrentTab] = useState<string>("Active");
  const { loading, error, data } =
    useQuery<LaunchpadListTypes>(LAUNCHPAD_LIST_QUERY);
  const tokens = data?.tokens || [];

  return (
    <div className="flex flex-col gap-8 items-center bg-yellow_green border-t-2 border-deep_green py-16 px-4 md:px-10">
      <h1 className="text-6xl font-bold">The ERC50 Ecosystem</h1>
      {/* <div className="flex border-2 border-deep_green">
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
      </div> */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {tokens.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-between gap-4 bg-white border-2 border-deep_green p-4"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex justify-center items-center bg-army_green rounded-full">
                  <span className="text-xl font-bold text-white font-poppins">
                    {item.name[0].toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-2xl font-bold break-all">{item.name}</p>
                  <p className="text-xl font-semibold italic text-acid_green">
                    ${item.symbol}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 font-poppins text-sm break-words">
                <p>
                  <span className="font-semibold text-deep_green">Chain:</span>{" "}
                  <span className="opacity-80">Base</span>
                </p>
                <div
                  className="flex gap-2 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(item.id);
                    toast.success("Address Copied");
                  }}
                >
                  <p>
                    <span className="font-semibold text-deep_green">
                      Token Address:
                    </span>{" "}
                    <span className="opacity-80">
                      {shortenAddress(item.id)}
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
                    {currencyFormat(parseInt(item.totalSupply) / 2 / 10 ** 18)}{" "}
                    {item.symbol} /{" "}
                    {currencyFormat(
                      (parseInt(item.totalSupply) /
                        2 /
                        parseInt(item.amountPerUnits)) *
                        (parseInt(item.price) / 10 ** 18)
                    )}{" "}
                    ETH
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-deep_green">
                    Mint Price:
                  </span>{" "}
                  <span className="opacity-80">
                    {currencyFormat(parseInt(item.amountPerUnits) / 10 ** 18)}{" "}
                    {item.symbol} / 0.001 ETH
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-deep_green">
                    Min Limit:
                  </span>{" "}
                  <span className="opacity-80">{0.001} </span> ~{" "}
                  <span className="opacity-80">
                    {currencyFormat(
                      parseInt(item.eachAddressLimitEthers) / 10 ** 18
                    )}{" "}
                    ETH
                  </span>
                </p>
              </div>
            </div>
            <div className="h-8 border-2 border-deep_green">
              <div
                className={`h-full flex items-center bg-acid_green p-2`}
                style={{
                  width: `${
                    (parseInt(item.minted) / (parseInt(item.totalSupply) / 2)) *
                    100
                  }%`,
                }}
              >
                <p className="text-xs font-poppins font-medium">
                  {currencyFormat(
                    (parseInt(item.minted) / (parseInt(item.totalSupply) / 2)) *
                      100
                  )}
                  %
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
