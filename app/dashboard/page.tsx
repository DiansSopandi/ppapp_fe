import React from "react";
import DashboardWrapper from "./dashboard-wrapper";

const DashboardPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardWrapper> {children} </DashboardWrapper>
    </div>
  );
};

export default DashboardPage;
