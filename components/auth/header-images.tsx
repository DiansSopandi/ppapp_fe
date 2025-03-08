import React from "react";

const DashboardHeaderImages = () => {
  return (
    <div className="flex justify-between items-center w-full py-2 px-12">
      <img
        src="/images/logo-dinas-ppapp.svg"
        alt="SimPKK"
        className="h-6 object-contain"
      />
      <img
        src="/images/logo-pkk.svg"
        alt="SimPKK"
        className="h-6 object-contain"
      />
    </div>
  );
};

export default DashboardHeaderImages;
