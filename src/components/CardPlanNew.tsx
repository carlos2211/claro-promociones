import { PlanCarac } from "./PlanCarac";
import { useModalShop } from "../store/modal";
import StreamingCarrusel from "./StreamingCarrusel";

interface CardPlanNewProps {
  title: string;
  description: string;
  price: string;
  normalPrice?: string;
  badge?: string;
  imagen?: string;
  details?: string;
  otts?: string;
}

export const CardPlanNew: React.FC<CardPlanNewProps> = ({
  title,
  description,
  price,
  normalPrice,
  badge,
  imagen,
  details,
  otts,
}) => {
  const toggleModalShop = useModalShop((state) => state.toggleModal);

  const acordeonCarac = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idCard = "#acordeonMov-" + e.currentTarget.id;
    const carac = document.querySelector(idCard);
    carac?.classList.toggle("overflow-hidden");
    carac?.classList.toggle("overflow-auto");
    carac?.classList.toggle("h-[230px]");

    const dropdownAcordeon = document.getElementById("dropdownAcordeon");
    dropdownAcordeon?.classList.toggle("rotate-180");
  };

  const handleOpenModal = () => {
    toggleModalShop();
  };

  return (
    <div className="px-10 py-10 leading-[1.4] font-[Roboto,sans-serif]">
      <div className="border-1 solid border-[#e8e8e8] w-[320px] rounded-2xl flex items-center flex-col shadow-lg">
        <div className="w-full rounded-t-2xl">
          {imagen && (
            <img
              src={imagen}
              alt={title}
              className="w-full rounded-t-2xl object-cover"
            />
          )}
          <div className="bg-claro-red text-white shadow-[0px_-1px_4px_0px_#D26C04_inset] rounded-[0px_0px_12px_12px] text-center w-44 mx-auto py-0.5">
            <p className="text-[16px] font-bold">{badge ?? "Plan Claro"}</p>
          </div>
          <div className="px-4 pt-4 flex justify-center items-center flex-col text-[#3c3c3c] text-center">
            <h3 className="text-base font-[500] uppercase">{title}</h3>
            <p className="font-[700] text-2xl">{description}</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 mb-3 py-1 w-full border-y border-[#e8e8e8]">
          <button
            id="1"
            onClick={acordeonCarac}
            className="cursor-pointer w-full"
          >
            <div className="flex justify-between px-4 gap-x-5 w-full">
              <p className="py-1.5 text-[#0097A9] font-[500] text-[.875rem]">
                Ver Detalle Plan
              </p>
              <i
                id="dropdownAcordeon"
                className="flex items-center py-1.5 ico-dropdown text-lg text-[#0097A9] duration-400"
              ></i>
            </div>
          </button>
          <div
            id="acordeonMov-1"
            className="h-0 w-full overflow-hidden overflow-y-hidden duration-400"
          >
            {details?.split("\u2022").map((text, i) => (
              <PlanCarac key={i} text={text.trim()} />
            ))}
            <div className="flex items-center justify-center px-4 pt-3 pb-8">
              <button className="text-[#0097A9] font-[500] underline cursor-pointer">
                Más Información
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full pt-2 px-5 gap-y-1.5">
          <p className="text-base font-[700]">Precio Oferta</p>
          <p className="text-3xl text-claro-red font-[700]">{price}</p>
          {normalPrice && (
            <p className="text-[#6c6c6c] text-[.875rem]">
              Cargo fijo normal ${normalPrice}
            </p>
          )}
          <p className="text-claro-red text-[.875rem] italic">
            {otts ?? "Oferta exclusiva para portabilidad"}
          </p>
        </div>

        <div className="flex flex-col items-center mt-5 mb-3 py-1 w-full border-y border-[#e8e8e8]">
          <p>Incluye TNT Sports en MAX</p>
          <StreamingCarrusel />
        </div>

        <div className="py-5">
          <button
            onClick={handleOpenModal}
            className="relative group border-[2px] border-claro-red px-6 py-2 rounded-[40px] text-claro-red font-[400] cursor-pointer transition-all duration-300 ease-in-out"
          >
            <span className="absolute inset-0 rounded-[40px] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 bg-linear-[270deg,#b52217_0%,#da291c_100%]"></span>
            <span className="relative z-10 group-hover:text-white">
              Contratar Ahora
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};