"use client";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import DashboardHeaderImages from "./header-images";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <DashboardHeaderImages />
      <h1 className={cn("text-indigo-400 text-xs text-left ", font.className)}>
        Mohon masukan <span className="italic">username</span> dan
        <span className="italic">password</span> anda untuk mengakses dashboard
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
