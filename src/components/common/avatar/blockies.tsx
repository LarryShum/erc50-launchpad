import makeBlockie from "ethereum-blockies-base64";
import Image from "next/image";
import { useAccount } from "wagmi";

export default function AvatarBlockies() {
  const { address } = useAccount();

  return (
    <Image
      src={makeBlockie(address as string)}
      width={64}
      height={64}
      alt=""
      className="rounded-full"
    />
  );
}
