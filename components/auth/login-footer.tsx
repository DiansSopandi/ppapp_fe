import Image from "next/image";

export const LoginFooter = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center mt-4 w-full max-w-sm">
      <div className="flex justify-between space-x-4">
        <Image
          src="/images/bkkbn.jpg"
          alt="Carik Jakarta"
          width={70}
          height={70}
          className="h-12 object-contain"
        />
        <Image
          src="/images/crkOne.jpeg"
          alt="Carik Jakarta"
          width={90}
          height={50}
          className="h-10 object-contain"
        />
        <img
          src="/images/logo-sim-pkk-header.svg"
          alt="SimPKK"
          width={90}
          height={20}
          className="h-10 object-contain"
        />
      </div>
      <p className="text-left text-xs text-gray-500">
        <span className="font-extrabold">SIGA</span> - Sistem Informasi Keluarga
      </p>
    </div>
  );
};
