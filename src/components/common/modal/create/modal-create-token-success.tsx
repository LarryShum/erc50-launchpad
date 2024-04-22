import { Dispatch, SetStateAction } from "react";
import Modal from "../modal";
import { CreateTokenTypes } from "@/types/create-token";
import Link from "next/link";

interface ModalCreateTokenSuccessProps {
  setModal: Dispatch<SetStateAction<string>>;
  formData: CreateTokenTypes;
}

export default function ModalCreateTokenSuccess({
  formData,
  setModal,
}: ModalCreateTokenSuccessProps) {
  return (
    <Modal setModal={setModal} title="Token Created!">
      <div className="w-full flex flex-col items-center gap-4 font-medium">
        <div className="w-full flex flex-col gap-2 font-poppins text-xs">
          <p>
            Name:{" "}
            <span className="text-deep_green">
              {formData.token_name} (${formData.token_symbol})
            </span>
          </p>
          <p>
            Chain: <span className="text-deep_green">Base</span>
          </p>
          <p>
            Total Supply:{" "}
            <span className="text-deep_green">{formData.total_supply}</span>
          </p>
          <p>
            Utilities:{" "}
            <span className="text-deep_green">50% Fair Mint, 50% LP</span>
          </p>
          <p>
            Min Price:{" "}
            <span className="text-deep_green">{formData.mint_price}</span>
          </p>
          <p>
            Mint Supply:{" "}
            <span className="text-deep_green">
              {parseFloat(formData.total_supply) / 2}
            </span>
          </p>
          <p>
            Min Limit:{" "}
            <span className="text-army_green">
              0.001 - {formData.max_mint_per_address} ETH
            </span>
          </p>
        </div>
        <p className="w-full">Coded by Dino and ERC50 Launchpad ❤️🦖</p>
        <Link
          href={"/"}
          className="w-36 h-14 flex justify-center items-center gap-3 bg-[url('/svg/button.svg')] hover:bg-[url('/svg/button-hover.svg')] bg-cover bg-no-repeat hover:text-white pb-3"
        >
          <p className="text-base font-semibold font-poppins">Okay</p>
        </Link>
      </div>
    </Modal>
  );
}
