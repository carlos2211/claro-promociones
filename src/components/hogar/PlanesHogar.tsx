import TabsPlanesHogar from "./TabsPlanesHogar";
import Banner from "../Banner";


const PlanesHogar = () => {
    return ( 
        <div>
            <Banner
          images={[
            {
              desktop:
                "https://clarochilepromociones.com/assets/img/ClaropromocionesHogar.png",
              mobile:
                "https://clarochilepromociones.com/assets/img/ClaropromocionesHogarMB.jpg",
              url: "https://tienda.clarochile.cl/hogar/ClaroHogarFrontView?storeId=715837934&numRGU=2&seleccionTecnologia=H_internet,H_Television&sku=2ph0224_02&_gl=1*abjq4g*_gcl_aw*R0NMLjE3NDIzMTEyMDYuQ2owS0NRandzLVMtQmhEMkFSSXNBTHNzRzBZbm9ZYnh4aFYxX0VKMm9MNlhEVnhmZFM1V1h2WDdtRGxPVnJWaGNjWnVfNlkxZXFfMFdHRWFBdUZFRUFMd193Y0I.*_gcl_au*MjEzMzA0NjAzMy4xNzM5NDU3NTc0*_ga*MTI3OTYyNzI3Ni4xNzMzMzM4OTg5*_ga_1XFCP1SLCM*MTc0MjkxOTQ1MC4zOC4xLjE3NDI5MjE5OTEuNDQuMC4w",
            },
          ]}
          altText="Banner"
          showArrows={false}
        />
            <TabsPlanesHogar />  
        </div>

     );
}
 
export default PlanesHogar;