import { ReactNode } from "react";
import { Metadata } from "../metadata";
import { Handjet } from "next/font/google";
import Header from "./header";

interface AppLayoutProps {
  children: ReactNode;
}

const handjet = Handjet({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div
      className={`min-h-screen relative tracking-wide bg-[url('/svg/bg-body.svg')] p-10 ${handjet.className}`}
    >
      <Metadata />
      <Header />
      <main>{children}</main>
    </div>
  );
}
