import { DinoAnimation, Launchpad, Overview } from "@/components/pages/home";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex border-2 border-t-0 border-deep_green">
        <Overview />
        <DinoAnimation />
      </div>
      <Launchpad />
    </div>
  );
}
