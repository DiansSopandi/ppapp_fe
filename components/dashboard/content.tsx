import React from "react";

const DashboardContent = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl m-3 p-3">
        Pendataan Keluarga Satu Pintu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DASHBOARD_ITEMS.map((item, index: number) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-purple-200 p-3 rounded-full">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
            <p className="mt-3 text-blue-600 text-sm font-medium">
              Selengkapnya →
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const DASHBOARD_ITEMS = [
  {
    title: "Dashboard Kependudukan",
    description: "Deskripsi tentang dashboard kependudukan",
    icon: "👥",
  },
  {
    title: "Dashboard Pendidikan",
    description: "Deskripsi tentang dashboard pendidikan",
    icon: "🎓",
  },
  {
    title: "Dashboard Perumahan",
    description: "Deskripsi tentang dashboard perumahan",
    icon: "🏠",
  },
  {
    title: "Dashboard Kesehatan",
    description: "Deskripsi tentang dashboard kesehatan",
    icon: "➕",
  },
  {
    title: "Dashboard Fertilitas/KB",
    description: "Bagian Fertilitas/KB",
    icon: "🍼",
  },
  {
    title: "Dashboard Lingkungan",
    description: "Bagian Lingkungan",
    icon: "🌍",
  },
  {
    title: "Dashboard Potensi Bencana",
    description: "Bagian Potensi Bencana",
    icon: "🔥",
  },
  { title: "Dashboard Sosial", description: "Bagian Sosial", icon: "❤️" },
  {
    title: "Dashboard Teknologi Informasi",
    description: "Bagian Teknologi Informasi",
    icon: "💻",
  },
  {
    title: "Dashboard Ketenagakerjaan",
    description: "Bagian Ketenagakerjaan",
    icon: "👔",
  },
  { title: "Dashboard Stunting", description: "Bagian Stunting", icon: "🥦" },
  {
    title: "Dashboard Transportasi",
    description: "Bagian Transportasi",
    icon: "🚆",
  },
];

export default DashboardContent;
