import { CardPlanNew } from "../CardPlanNew";

interface PlanData {
  id: number;
  title: string;
  description: string;
  price: string;
}

interface PlanesDoblePackProps {
  plans: PlanData[];
}

const PlanesDoblePack: React.FC<PlanesDoblePackProps> = ({ plans }) => {
  return (
    <div>
      <h1 className="justify-self-center font-bold text-2xl">
        La combinación ideal para tu hogar
      </h1>
      <div className="flex justify-center gap-10">
        <CardPlanNew />
        <CardPlanNew />
        <CardPlanNew />
      </div>
    </div>
  );
};

export default PlanesDoblePack;
