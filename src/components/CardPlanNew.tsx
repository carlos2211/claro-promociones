import { PlanCarac } from "./PlanCarac";
import {useModalShop} from "../store/modal";
import StreamingCarrusel from "./StreamingCarrusel";

export const CardPlanNew = () => {
  const toggleModalShop = useModalShop((state) => state.toggleModal);
  
  const acordeonCarac = (e: React.MouseEvent<HTMLButtonElement>) => {
    let idCard = e.currentTarget.id;
    idCard = "#acordeonMov-" + idCard;
    const carac = document.querySelector(idCard);
    carac?.classList.toggle("overflow-hidden");
    carac?.classList.toggle("overflow-auto");
    // const cantCarac = 5;
    // const alturaCarac = 20;
    // carac?.classList.toggle("h-["+ (cantCarac * alturaCarac) + "px]");
    carac?.classList.toggle("h-[230px]");
    const dropdownAcordeon = document.getElementById("dropdownAcordeon");
    dropdownAcordeon?.classList.toggle("rotate-180");
  };
  const handleOpenModal = () => {
    toggleModalShop();
  };

  return (
    <div className="px-10 py-10 leading-[1.4] font-[Roboto,sans-serif]  ">
      <div className="border-1 solid border-[#e8e8e8] w-[320px] rounded-2xl flex items-center flex-col shadow-lg ">
        <div className="w-full bg-linear-[180deg,#E0E7F6_0%,#FFFFFF00_100%] rounded-t-2xl">
        {/* background : linear-gradient(180deg, #EBF0F9 0%, #FFFFFF00 100%) */}
          <div className=" bg-claro-red text-[#7CCCD0] shadow-[0px_-1px_4px_0px_#D26C04_inset] rounded-[0px_0px_12px_12px] text-center w-44 mx-auto py-0.5">
            <p className="text-[16px] font-bold text-white">Plan Max M</p>
          </div>
          <div className="px-4 rounded-t-2xl w-full pt-4 flex justify-center items-center flex-col text-[#3c3c3c] text-center">
            <i className="ico-smartphone text-3xl text-[]"></i>
            <h3 className="text-base font-[500] font-[AMX-Medium,Roboto,sans-serif] uppercase">
              PLAN MAX L LIBRE
            </h3>
            <p className="font-[700] text-2xl font-[AMX,Roboto,sans-serif]">
              GB LIBRES
            </p>
            <p className="text-lg font-[500] font-[AMX-Regular,Roboto,sans-serif] uppercase">
            300 GB + 300 GB por 12 meses
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 mb-3 py-1 w-full  border-1 solid border-y-[#e8e8e8] border-transparent">
          <button id="1" onClick={(e)=>{acordeonCarac(e)}} className="cursor-pointer w-full">
            <div className="flex justify-between px-4 gap-x-5 w-full font-[Roboto,sans-serif]">
              <p className="flex h-full py-1.5 text-[#0097A9] font-[500] text-[.875rem]">
                Ver Detalle Plan
              </p>
              <i
                id="dropdownAcordeon"
                className="flex items-center w-fit py-1.5 ico-dropdown text-lg text-[#0097A9] duration-400 "></i>
            </div>
          </button>
          <div id="acordeonMov-1" className="h-0 w-full overflow-hidden overflow-y-hidden scroll- duration-400 ">
            <PlanCarac />
            <PlanCarac />
            <PlanCarac />
            <PlanCarac />
            <div className="flex items-center justify-center px-4 pt-3 pb-8">
              <button className="text-[#0097A9] font-[500] underline cursor-pointer">
                Más Informacion
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full pt-2 px-5 gap-y-1.5">
          <p className="text-base font-[700] font-[Roboto,sans-serif]">
            Precio Oferta
          </p>
          <p className="text-3xl text-claro-red font-[700] font-[Roboto,sans-serif]">
            $10.990
          </p>
          <p className="text-[.875rem] font-[500] font-[Roboto,sans-serif]">
            Mensual por 6 Meses
          </p>
          <p className="text-[#6c6c6c] text-[.875rem] font-[Roboto,sans-serif]">
            Cargo fijo normal $12.990
          </p>
          <p className="text-claro-red text-[.875rem] font-[AMX-Medium,Roboto,sans-serif] font-[500] italic">
          Oferta exclusiva para portabilidad
          </p>
        </div>

        <div className="flex flex-col items-center mt-5 mb-3 py-1 w-full  border-1 solid border-y-[#e8e8e8] border-transparent">
          <p>Incluye TNT Sports en MAX</p>
          <StreamingCarrusel />
        </div>

        <div className="py-5">
          {/* <button className="border-[2px] solid border-claro-red px-6 py-2 rounded-[40px] text-claro-red font-[AMX,Roboto,sans-serif] font-[400] cursor-pointer hover:text-white hover:bg-linear-[270deg,#b52217_0%,#da291c_100%] transition-all duration-700 ease-in-out">
            Contratar Ahora
          </button> */}
          <button onClick={handleOpenModal} className="relative group border-[2px] border-claro-red px-6 py-2 rounded-[40px] text-claro-red font-[AMX,Roboto,sans-serif] font-[400] cursor-pointer transition-all duration-300 ease-in-out">
            <span className="absolute inset-0 rounded-[40px] transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 bg-linear-[270deg,#b52217_0%,#da291c_100%]"></span>
            <span className="relative z-10 group-hover:text-white">
              Contratar Ahora
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
