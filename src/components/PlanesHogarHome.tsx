import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardPlanNew } from "./CardPlanNew";
import { DataGoogleSheets } from "../services/googleSheetsService";
import { PlanHogar } from "../types/interfaces";

const PlanesHogarHome: React.FC = () => {
  const [planes, setPlanes] = useState<PlanHogar[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarPlanes = async () => {
      const data = await DataGoogleSheets("homeHogar");
      setPlanes(data);
      console.log(data);
    };

    cargarPlanes();
  }, []);

  const handleClick = () => {
    navigate("/planes-hogar");
  };

  return (
    <div className="place-items-center">
      <h1 className="justify-self-center font-bold text-2xl mb-6">
        Plan internet Fibra 800 por solo $14.990/mes x 6 meses!
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {planes.map((plan) => (
          <CardPlanNew
            key={plan.id} title={""} description={""} price={""}            // title={plan.plan}
            // description={plan.subtitle}
            // price={`$${plan.offer_price.toLocaleString()}`}
            // imagen={plan.imagen} 
          />
        ))}
      </div>

      <button
        className="relative group border-[2px] border-claro-red px-6 py-2 mt-8 rounded-[40px] text-claro-red font-[AMX,Roboto,sans-serif] font-[400] cursor-pointer transition-all duration-300 ease-in-out"
        onClick={handleClick}
      >
        <span className="absolute inset-0 rounded-[40px] transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 bg-linear-[270deg,#b52217_0%,#da291c_100%]"></span>
        <span className="relative z-10 group-hover:text-white">
          → Ver más planes
        </span>
      </button>
    </div>
  );
};

export default PlanesHogarHome;
