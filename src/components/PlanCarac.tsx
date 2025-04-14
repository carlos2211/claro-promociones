import React from "react";

interface PlanCaracProps {
  icon?: string; 
  label: string; 
  value: string;
  text: string;
}

export const PlanCarac: React.FC<PlanCaracProps> = ({ icon = "ico-globe", label, value }) => {
  return (
    <div className="flex items-center justify-between px-4 pb-1.5 pt-2">
      <div className="flex items-center gap-x-2">
        <i className={`${icon} text-2xl text-[#3C3C3C]`}></i>
        <p className="text-[.875rem]">{label}</p>
      </div>
      <p className="text-[.875rem] font-[500]">{value}</p>
    </div>
  );
};
