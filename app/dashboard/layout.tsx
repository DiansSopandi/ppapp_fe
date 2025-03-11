import React from "react";
import DashboardWrapper from "@/app/dashboard/dashboard-wrapper";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardWrapper> {children} </DashboardWrapper>
    </div>
  );
};

export default DashboardLayout;
