import React from "react";


export const Header = () => {
  return (
    <header className="bg-gray-100 w-full h-[60px] relative top-0 left-0 right-0">
      <div className="">
        <div className="w-72 px-[100px] py-2.5">
          <a href="/" rel="noopener noreferrer">
            <img
              src="https://www.clarochile.cl/portal/cl/recursos_tema_evo/assets/vector/logo-claro-rojo.svg"
              alt="Logo Claro"
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
