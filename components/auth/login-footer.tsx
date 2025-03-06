import Image from "next/image";

export const LoginFooter = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center mt-4 w-full max-w-sm">
      <div className="flex justify-between space-x-4">
        <Image
          src="/images/bkkbn.jpg"
          alt="Carik Jakarta"
          width={70}
          height={50}
        />
        <Image
          src="/images/crkOne.jpeg"
          alt="Carik Jakarta"
          width={60}
          height={50}
        />
        <img
          src="/images/logo-sim-pkk-header.svg"
          alt="SimPKK"
          width={90}
          height={50}
        />
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Bidang Keluarga Berencana & Carik Jakarta
      </p>
    </div>
  );
};
