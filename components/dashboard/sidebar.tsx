import React from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardHeaderImages from "../auth/header-images";

const SidebarLink = ({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`px-4 py-3 block rounded-md text-sm font-medium ${
        active ? "bg-red-500" : "hover:bg-indigo-600 transition"
      }`}
    >
      {label}
    </Link>
  );
};

const DashboardSidebar = () => {
  return (
    <div className="fixed flex flex-col space-y-2 left-0 top-0 w-64 h-screen shadow-2xl z-50">
      <DashboardHeaderImages />
      <div className="w-64 bg-indigo-700 text-white text-xs h-screen flex flex-col p-5">
        {/* Logo Section */}
        <div className="flex justify-between items-center mb-8">
          <Image
            src="/logo.png" // Replace with the actual logo path
            alt="Logo"
            width={140} // Adjust based on the actual size in your image
            height={60}
            className="mb-3"
          />
          <h1 className="text-md font-semibold tracking-wide uppercase">
            Carik Kantor Pusat
          </h1>
        </div>

        {/* 🔹 "Menu Utama" Section */}
        <div className="flex">
          <span className="uppercase text-xs font-normal text-gray-300 bg-indigo-900  mb-3 px-3 py-1 rounded-md inline-block">
            Menu Utama
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          <SidebarLink href="#" label="BNBA" active />
          <SidebarLink href="#" label="Katalog" />
          <SidebarLink href="#" label="Standar Data" />
          <SidebarLink href="#" label="User Management" />
        </nav>

        {/* Logout Button */}
        <div className="mt-auto pt-10">
          <button className="px-4 py-3 w-full bg-gray-800 hover:bg-gray-900 transition rounded-md text-center">
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
