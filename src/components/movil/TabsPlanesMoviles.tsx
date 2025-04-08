import React, { useState, useRef } from "react";
import PlanesIndividuales from "./PlanesIndividuales";
import LineasAdicionales from "./LineasAdicionales";
import CambiadePrepagoAPlan from "./CambiadePrepagoAPlan";
import EquipoMasPlan from "./EquipoMasPlan";

const TabsPlanesMoviles: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: "tab1", label: "Planes Individuales", component: <PlanesIndividuales /> },
    { id: "tab2", label: "Lineas Adicionales", component: <LineasAdicionales /> },
    { id: "tab3", label: "Cambia de Prepago a Plan", component: <CambiadePrepagoAPlan /> },
    { id: "tab4", label: "Equipo + Plan", component: <EquipoMasPlan /> },
  ];

  const scrollLeft = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 cursor-pointer md:hidden"
          onClick={scrollLeft}
        >
          &#8592;
        </button>

        <div className="flex justify-center text-lg font-bold">
          <div
            ref={tabsContainerRef}
            className="flex overflow-x-auto whitespace-nowrap md:overflow-hidden md:flex md:flex-row"
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`px-5 py-2.5 ${
                  activeTab === tab.id
                    ? "border-b-8 border-red-500"
                    : "border-b-4 border-gray-300"
                } cursor-pointer transition-all duration-500 ease-in-out`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 cursor-pointer md:hidden"
          onClick={scrollRight}
        >
          &#8594;
        </button>
      </div>

      <div className="mt-5 text-lg">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className={`transition-opacity duration-500 ease-in-out ${
                  activeTab === tab.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {tab.component}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TabsPlanesMoviles;
