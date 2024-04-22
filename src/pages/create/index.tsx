import { Input } from "@/components/common/input";
import { CreateTokenTypes } from "@/types/create-token";
import { CurrencyFormatInput } from "@/utils/currency-format";
import { handleInputChange } from "@/utils/handle-input-change";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ethers, parseEther } from "ethers";
import { erc50abi } from "@/abi/erc50";
import { toast } from "react-toastify";
import { ModalCreateTokenSuccess } from "@/components/common/modal/create";
import { Modal } from "@/components/common/modal";
import Image from "next/image";

export default function Create() {
  const [formData, setFormData] = useState<CreateTokenTypes>(
    {} as CreateTokenTypes
  );
  const [modal, setModal] = useState<string>("");

  const factoryAddress = "0x576c671E5F1CE2a0B7ed861d2352bf7F45ebbC1F";

  const requestAccounts = async () => {
    try {
      const ethereum = window.ethereum;

      if (!ethereum) {
        toast.error("MetaMask not detected. Please install MetaMask.");
        return;
      }

      // Request MetaMask accounts
      await ethereum.request({ method: "eth_requestAccounts" });

      // Once accounts are connected, proceed with deploying token
      await deployToken();
    } catch (error) {
      console.error("Error requesting MetaMask accounts:", error);
      toast.error("Failed to connect MetaMask accounts.");
    }
  };

  const deployToken = async () => {
    try {
      const ethereum = window.ethereum;
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(factoryAddress, erc50abi, signer);

      setModal("modal-create-token-loading");

      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x2105" }],
      });

      const {
        token_name,
        token_symbol,
        total_supply,
        mint_price,
        max_mint_per_address,
      } = formData;

      const tx = await contract.createToken(
        parseEther("0.001"), // Mint price (in Ethereum wei units)
        parseEther(mint_price), // Amount of tokens to mint per unit
        parseEther(total_supply), // Total supply of the new token
        token_name, // Name of the new token
        token_symbol, // Symbol (ticker) of the new token
        parseEther(max_mint_per_address) // Each address limit in ethers allowed for minting tokens
      );
      await tx.wait();

      setModal("modal-create-token-success");
    } catch (error) {
      setModal("");
      toast.error("Oops! Error creating token");
      console.error("Error creating token:", error);
    }
  };

  return (
    <>
      <div className="h-full flex flex-col gap-8 bg-[url('/img/bg-section-3.png')] bg-no-repeat bg-cover py-16 px-4 md:px-10">
        <h1 className="max-lg:hidden text-6xl font-bold">
          Set your protocol parameters
        </h1>
        <h1 className="lg:hidden text-6xl font-bold">
          You can create ERC50 token via Desktop
        </h1>
        <div className="max-lg:hidden grid grid-cols-2 gap-6">
          <Input
            name="token_name"
            label="Token Name"
            onChange={(e) => handleInputChange(e, setFormData)}
          />
          <Input
            name="token_symbol"
            label="Token Symbol"
            onChange={(e) => handleInputChange(e, setFormData)}
          />
          <Input
            name="total_supply"
            label="Total Supply (50% Fair Mint, 50% LP)"
            value={CurrencyFormatInput(formData.total_supply)}
            onChange={(e) => handleInputChange(e, setFormData)}
          />
          <Input label="Chain" disabled value={"Base"} />
          <Input
            name="mint_price"
            label="Mint Price"
            symbol={"Token/0.001 ETH"}
            value={CurrencyFormatInput(formData.mint_price)}
            onChange={(e) => handleInputChange(e, setFormData)}
          />
          <div className="flex items-end gap-4">
            <Input
              label="Mint Supply"
              disabled
              symbol="Token"
              value={
                formData.total_supply
                  ? parseFloat(formData.total_supply) / 2
                  : ""
              }
            />
            <Input
              disabled
              symbol="ETH"
              value={
                formData.total_supply && formData.mint_price
                  ? (parseFloat(formData.total_supply) /
                      2 /
                      parseFloat(formData.mint_price)) *
                    0.001
                  : ""
              }
            />
          </div>
          <div className="flex items-end gap-4">
            <Input label="Per Mint (Min)" disabled value={0.001} symbol="ETH" />
            <Input
              name="max_mint_per_address"
              label="Per Mint (Max)"
              symbol="ETH"
              value={CurrencyFormatInput(formData.max_mint_per_address)}
              onChange={(e) => handleInputChange(e, setFormData)}
            />
          </div>
        </div>
        <div className="max-lg:hidden flex items-center gap-6 mt-8">
          <Link
            href={"/"}
            className="w-52 h-20 flex justify-center items-center gap-3 bg-[url('/svg/button.svg')] hover:bg-[url('/svg/button-hover.svg')] bg-cover bg-no-repeat hover:text-white pb-4"
          >
            <p className="text-xl font-semibold font-poppins">Back</p>
          </Link>
          <button
            className="w-52 h-20 flex justify-center items-center gap-3 bg-[url('/svg/button.svg')] hover:bg-[url('/svg/button-hover.svg')] bg-cover bg-no-repeat hover:text-white pb-4"
            onClick={requestAccounts}
          >
            <p className="text-xl font-semibold font-poppins">Deploy</p>
          </button>
        </div>
      </div>
      {modal === "modal-create-token-success" ? (
        <ModalCreateTokenSuccess setModal={setModal} formData={formData} />
      ) : modal === "modal-create-token-loading" ? (
        <Modal setModal={setModal} title="Dino is Coding..">
          <div className="w-36 h-32 flex justify-center items-center bg-[url('/svg/tv.svg')] opacity-80 mb-4">
            <Image
              src={"/video/dino-mini.gif"}
              width={48}
              height={48}
              alt=""
              className="pb-7"
              unoptimized
            />
          </div>
        </Modal>
      ) : null}
    </>
  );
}
