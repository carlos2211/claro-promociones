import { CardPlanNew } from "../CardPlanNew";

const CambiaPrepagoPlan = () => {
  return (
    <div>
      <h1 className="justify-self-center font-bold text-2xl ">
        Si eres Prepago Claro, cámbiate a un plan Max y disfruta de un 50%dcto
        por 6 meses
      </h1>
      <div className="flex flex-col md:flex-row justify-center center items-center ">
        <CardPlanNew />
        <CardPlanNew />
      </div>
    </div>
  );
};

export default CambiaPrepagoPlan;
