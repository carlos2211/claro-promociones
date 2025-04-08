import { CardPlanNew } from "../CardPlanNew";

interface PlanData {
  id: number;
  title: string;
  description: string;
  price: string;
}

interface PlanesInternetHogarProps {
  plans: PlanData[];
}

const PlanesInternetHogar: React.FC<PlanesInternetHogarProps> = ({ plans }) => {
  return (
    <div>
      <h1 className="justify-self-center font-bold">
        Maratonear es un buen plan, contrata
      </h1>
      <div className="flex justify-center gap-10">
        <CardPlanNew />
        <CardPlanNew />
      </div>
    </div>
  );
};

export default PlanesInternetHogar;
