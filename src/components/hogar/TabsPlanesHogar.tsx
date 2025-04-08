import React, { useState } from "react";
import PlanesInternetHogar from "./PlanesInternetHogar";
import PlanesDoblePack from "./PlanesDoblePack";

const TabsPlanesHogar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <div className="flex justify-center">
        <div
          style={{
            padding: "10px 20px",
            borderBottom: activeTab === "tab1" ? "8px solid red" : "none",
          }}
          onClick={() => setActiveTab("tab1")}
        >
          Internet Hogar
        </div>
        <div
          style={{
            padding: "10px 20px",
            borderBottom: activeTab === "tab2" ? "8px solid red" : "none",
          }}
          onClick={() => setActiveTab("tab2")}
        >
          Doble Pack
        </div>
      </div>
      <div className="mt-5">
        {/* {activeTab === "tab1" && <PlanesMovilHome plans={[]} />} */}
        {activeTab === "tab1" && <PlanesInternetHogar plans={[]} />}
        {activeTab === "tab2" && <PlanesDoblePack plans={[]} />}
      </div>
    </div>
  );
};

export default TabsPlanesHogar;
