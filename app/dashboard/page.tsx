import React from "react";
import DashboardContent from "@/components/dashboard/content";

const DashboardPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;
