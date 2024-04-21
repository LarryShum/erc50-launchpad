import { Input } from "@/components/common/input";
import { currencyFormat } from "@/utils/global";
import Link from "next/link";

export default function Create() {
  return (
    <div className="h-full flex flex-col gap-8 bg-[url('/img/bg-section-3.png')] bg-no-repeat bg-cover py-16 px-4 md:px-10">
      <h1 className="max-lg:hidden text-6xl font-bold">
        Set your protocol parameters
      </h1>
      <h1 className="lg:hidden text-6xl font-bold">
        You can create ERC50 token via Desktop
      </h1>
      <div className="max-lg:hidden grid grid-cols-2 gap-6">
        <Input label="Token Name" />
        <Input label="Token Symbol" />
        <Input
          label="Total Supply (50% Fair Mint, 50% LP)"
          value={currencyFormat(1000000)}
        />
        <Input label="Chain" disabled value={"Base"} />
        <Input label="Mint Price" symbol={"Token/0.001 ETH"} />
        <div className="flex items-end gap-4">
          <Input label="Mint Supply" disabled symbol="Token" />
          <Input disabled symbol="ETH" />
        </div>
        <div className="flex items-end gap-4">
          <Input label="Per Mint (Min)" disabled value={0.001} symbol="ETH" />
          <Input label="Per Mint (Max)" symbol="ETH" />
        </div>
      </div>
      <div className="max-lg:hidden flex items-center gap-6 mt-8">
        <Link
          href={"/"}
          className="w-52 h-20 flex justify-center items-center gap-3 bg-[url('/svg/button.svg')] hover:bg-[url('/svg/button-hover.svg')] bg-cover bg-no-repeat hover:text-white pb-4"
        >
          <p className="text-xl font-semibold font-poppins">Back</p>
        </Link>
        <button className="w-52 h-20 flex justify-center items-center gap-3 bg-[url('/svg/button.svg')] hover:bg-[url('/svg/button-hover.svg')] bg-cover bg-no-repeat hover:text-white pb-4">
          <p className="text-xl font-semibold font-poppins">Deploy</p>
        </button>
      </div>
    </div>
  );
}
