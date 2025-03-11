import DashboardHeader from "@/components/dashboard/header";
import DashboardSidebar from "@/components/dashboard/sidebar";
import React from "react";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex bg-gray-50 text-white w-full min-h-screen`}>
      <DashboardSidebar />
      <main
        className={`flex flex-col w-full h-full bg-gray-50 text-black py-7 px-10 md:pl-24 ml-52`}
      >
        <DashboardHeader />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
