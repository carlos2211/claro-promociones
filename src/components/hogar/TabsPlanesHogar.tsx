import React, { useState } from "react";
import PlanesInternetHogar from "./InternetHogar";
import PlanesDoblePack from "./DoblePack";

const TabsPlanesHogar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Internet Hogar", content: <PlanesInternetHogar plans={[]} /> },
    { id: "tab2", label: "Doble Pack", content: <PlanesDoblePack plans={[]} /> },
  ];

  return (
    <div>
      <div className="flex justify-center text-lg font-semibold">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`px-5 py-2.5 cursor-pointer transition-all duration-300 ${
              activeTab === tab.id
                ? "border-b-8 border-red-500"
                : "border-b-4 border-gray-300"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="mt-5">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabsPlanesHogar;
