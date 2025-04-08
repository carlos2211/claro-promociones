import { useState } from "react";
import { CardPlanNew } from "../CardPlanNew";

const LineasAdicionales = () => {
  const [clienteClaro, setClienteClaro] = useState("no");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setClienteClaro(e.target.value);
  };

  return (
    <div>
      <div className="text-center justify-center bg-[rgb(244,244,244)] rounded-3xl place-self-center m-8 p-8 gap-20 gap-y-8 flex flex-col md:flex-row w-[90%] items-center">
        <h1
          id="title"
          className="text-2xl font-bold text-center md:text-left max-w-lg md:w-auto"
        >
          {clienteClaro === "no"
            ? "Pórtate desde un Plan Max L y contrata líneas adicionales de 400 Gb por solo $4.990 /mes por 6 meses."
            : "Disfruta líneas adicionales por solo $4.990 mensual por 6 meses cada una."}
        </h1>

        <div className="flex flex-col justify-center items-center">
          <span className="text-lg font-bold">¿Eres Cliente Claro?</span>
          <select
            className="bg-[rgb(255,255,255)] w-[120%] mt-2.5 rounded-[20px] p-1.5"
            value={clienteClaro}
            onChange={handleSelectChange}
          >
            <option value="no">No soy cliente</option>
            <option value="si">Si soy cliente</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {clienteClaro === "no" ? (
          <>
            <CardPlanNew />
            <CardPlanNew />
            <CardPlanNew />
          </>
        ) : (
          <>
            <CardPlanNew />
          </>
        )}
      </div>
    </div>
  );
};

export default LineasAdicionales;
