import TabsPlanesMoviles from './TabsPlanesMoviles'
import Banner from "../Banner";


const PlanesMovil = () => {
    return ( 
        <div>
            <Banner
          images={[
            {
              desktop:
                "https://clarochilepromociones.com/assets/img/ClaropromocionesMovil.png",
              mobile:
                "https://clarochilepromociones.com/assets/img/ClaropromocionesMovilMB.jpg",
              url: "https://tienda.clarochile.cl/catalogo/ClaroPostPagoFormView?catalogId=10052&langId=-5&storeId=10151&_gl=1*z2cxux*_gcl_aw*R0NMLjE3NDIzMTEyMDYuQ2owS0NRandzLVMtQmhEMkFSSXNBTHNzRzBZbm9ZYnh4aFYxX0VKMm9MNlhEVnhmZFM1V1h2WDdtRGxPVnJWaGNjWnVfNlkxZXFfMFdHRWFBdUZFRUFMd193Y0I.*_gcl_au*MjEzMzA0NjAzMy4xNzM5NDU3NTc0*_ga*MTI3OTYyNzI3Ni4xNzMzMzM4OTg5*_ga_1XFCP1SLCM*MTc0MjkxOTQ1MC4zOC4xLjE3NDI5MjE5ODAuNTUuMC4w",
             
            }
          ]}
          altText="Banner"
          showArrows={false}
        />
            <TabsPlanesMoviles />

        </div>
    );
}
 
export default PlanesMovil;
