import React, { useState } from 'react';
import PlanesMovilHome from './PlanesMovilesHome';
import PlanesHogarHome from './PlanesHogarHome';
import Banner from "./Banner";

const TabsHome: React.FC = () => {
    const [activeTab, setActiveTab] = useState('tab1');


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
            },
            {
              desktop:
                "https://clarochilepromociones.com/assets/img/ClaropromocionesHogar.png",
              mobile:
                "https://clarochilepromociones.com/assets/img/ClaropromocionesHogarMB.jpg",
              url: "https://tienda.clarochile.cl/hogar/ClaroHogarFrontView?storeId=715837934&numRGU=2&seleccionTecnologia=H_internet,H_Television&sku=2ph0224_02&_gl=1*abjq4g*_gcl_aw*R0NMLjE3NDIzMTEyMDYuQ2owS0NRandzLVMtQmhEMkFSSXNBTHNzRzBZbm9ZYnh4aFYxX0VKMm9MNlhEVnhmZFM1V1h2WDdtRGxPVnJWaGNjWnVfNlkxZXFfMFdHRWFBdUZFRUFMd193Y0I.*_gcl_au*MjEzMzA0NjAzMy4xNzM5NDU3NTc0*_ga*MTI3OTYyNzI3Ni4xNzMzMzM4OTg5*_ga_1XFCP1SLCM*MTc0MjkxOTQ1MC4zOC4xLjE3NDI5MjE5OTEuNDQuMC4w",
            },
          ]}
          altText="Banner"
        />
            <div className='flex justify-center'>
                <div
                    style={{
                        padding: '10px 20px',
                        borderBottom: activeTab === 'tab1' ? '8px solid red' : 'none',
                    }}
                    onClick={() => setActiveTab('tab1')}
                >
                    Planes Móviles
                </div>
                <div
                    style={{
                        padding: '10px 20px',
                        borderBottom: activeTab === 'tab2' ? '8px solid red' : 'none',
                    }}
                    onClick={() => setActiveTab('tab2')}
                >
                    Planes Hogar
                </div>
            </div>
            <div className='mt-5'>
                {activeTab === 'tab1' && <PlanesMovilHome plans={[]}  />}
                {activeTab === 'tab2' && <PlanesHogarHome plans={[]} />}
            </div>                  
        </div>
    );
};

export default TabsHome;
