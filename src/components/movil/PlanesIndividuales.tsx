import { CardPlanNew } from "../CardPlanNew";

const PlanesIndividuales = () => {
   return (
    <div>
      <h1 className="justify-self-center font-bold text-2xl "> Pórtate a un Plan Gigas Libres por $10.9­­­­90 / Mes</h1>
       <div className="flex flex-col md:flex-row justify-center center items-center ">
         <CardPlanNew />
         <CardPlanNew />
       </div>
    </div>
     );
}
 
export default PlanesIndividuales;