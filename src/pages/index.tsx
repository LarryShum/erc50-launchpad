import { Launchpad, Overview } from "@/components/pages/home";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Overview />
      <Launchpad />
    </div>
  );
}
