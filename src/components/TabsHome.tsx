import React, { useState } from "react";
import PlanesMovilHome from "./PlanesMovilesHome";
import PlanesHogarHome from "./PlanesHogarHome";
import Banner from "./Banner";

const TabsHome: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Planes Móviles", content: <PlanesMovilHome plans={[]} /> },
    { id: "tab2", label: "Planes Hogar", content: <PlanesHogarHome plans={[]} /> }
  ];

  return (
    <div>
      <Banner
        images={[
          {
            desktop:
              "https://clarochilepromociones.com/assets/img/ClaropromocionesMovil.png",
            mobile:
              "https://clarochilepromociones.com/assets/img/ClaropromocionesMovilMB.jpg",
            url: "https://tienda.clarochile.cl/catalogo/ClaroPostPagoFormView?catalogId=10052&langId=-5&storeId=10151",
          },
          {
            desktop:
              "https://clarochilepromociones.com/assets/img/ClaropromocionesHogar.png",
            mobile:
              "https://clarochilepromociones.com/assets/img/ClaropromocionesHogarMB.jpg",
            url: "https://tienda.clarochile.cl/hogar/ClaroHogarFrontView?storeId=715837934&numRGU=2&seleccionTecnologia=H_internet,H_Television&sku=2ph0224_02",
          },
        ]}
        altText="Banner"
      />

      {/* Tabs */}
      <div className="flex justify-center text-lg font-semibold">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 cursor-pointer transition-all duration-300 ${
              activeTab === tab.id
                ? "border-b-8 border-red-500"
                : "border-b-4 border-gray-300"
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Contenido de la tab activa */}
      <div className="mt-5">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabsHome;
