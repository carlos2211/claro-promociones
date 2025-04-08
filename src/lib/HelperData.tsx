import { useEffect, useState } from "react";
import { C2c } from "../types";

export const sendData = (data: C2c) => {
  console.log(data);

  const response = fetch(
    "https://migracion.clarochilepromociones.com/landingEp-Empresas/api/sendData.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((res) => res);

  return response;
  //return data;
};

export const generateIdTrans = () => {
  const date = new Date();
  const idTrans =
    "CL-" +
    date.getDate() +
    (date.getMonth() + 1) +
    date.getFullYear() +
    date.getHours() +
    date.getMinutes() +
    date.getSeconds() +
    date.getMilliseconds();
  /* console.log(idTrans); */
  return idTrans;
};

export const formatRut = (rut: string): string => {
  if (rut.length <= 1) {
    return rut;
  }
  const rutPart = rut.slice(0, -1);
  const verificador = rut.slice(-1).toUpperCase();

  // return rutPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "-" + verificador;
  return `${rutPart}-${verificador}`;
};

export const validarRut = (rutCompleto: string) => {
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
  let tmp = rutCompleto.split("-");
  let digv = tmp[1];
  let rut = Number(tmp[0]);
  if (digv == "K") digv = "k";
  return dv(rut) == digv;
};

const dv = (T: number) => {
  let M = 0,
    S = 1;
  for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
  return S ? S - 1 : "k";
};


// function isMobileDevice() {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   );
// }

export const useIsMobile = () => {
  // const [isMobile, setIsMobile] = useState(isMobileDevice());
  const [windowSize, setWindowSize] = useState({});
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // setIsMobile(isMobileDevice());
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
