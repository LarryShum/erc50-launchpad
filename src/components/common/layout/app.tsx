import { ReactNode } from "react";
import { Metadata } from "../metadata";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <Metadata />
      <main>{children}</main>
    </div>
  );
}
