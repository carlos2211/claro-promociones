import Papa from "papaparse";
import {
  PlanHogar,
  PlanMovil,
  movilPlanesIndividuales,
  movilLineasAdicionales,
  movilPrepagoAPlan,
  movilEquipoMasPlan,
  HogarInternetHogar,
  hogarDoblePack,
} from "../types/interfaces"; // asegúrate de que este path sea el correcto

// URLS por hoja publicada como CSV
const urls = {
  homeHogar:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfXC46_xSERgX5FZWR0sYqsh_ugtNH5F6J83vNDwzct_8RXlSMMWoRQTwqj16skmxBGoxX_l2zfk6v/pub?gid=1744296888&single=true&output=csv",
  homeMovil:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfXC46_xSERgX5FZWR0sYqsh_ugtNH5F6J83vNDwzct_8RXlSMMWoRQTwqj16skmxBGoxX_l2zfk6v/pub?gid=0&single=true&output=csv",
  movilPlanesIndividuales:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfXC46_xSERgX5FZWR0sYqsh_ugtNH5F6J83vNDwzct_8RXlSMMWoRQTwqj16skmxBGoxX_l2zfk6v/pub?gid=868072330&single=true&output=csv",
  movilLineasAdicionales:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfXC46_xSERgX5FZWR0sYqsh_ugtNH5F6J83vNDwzct_8RXlSMMWoRQTwqj16skmxBGoxX_l2zfk6v/pub?gid=827329738&single=true&output=csv",
  movilPrepagoAPlan:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfXC46_xSERgX5FZWR0sYqsh_ugtNH5F6J83vNDwzct_8RXlSMMWoRQTwqj16skmxBGoxX_l2zfk6v/pub?gid=780862151&single=true&output=csv",
  movilEmasP:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfXC46_xSERgX5FZWR0sYqsh_ugtNH5F6J83vNDwzct_8RXlSMMWoRQTwqj16skmxBGoxX_l2zfk6v/pub?gid=817212168&single=true&output=csv",
  hogarInternetHogar:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfXC46_xSERgX5FZWR0sYqsh_ugtNH5F6J83vNDwzct_8RXlSMMWoRQTwqj16skmxBGoxX_l2zfk6v/pub?gid=1734939788&single=true&output=csv",
  hogarDoblePack:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfXC46_xSERgX5FZWR0sYqsh_ugtNH5F6J83vNDwzct_8RXlSMMWoRQTwqj16skmxBGoxX_l2zfk6v/pub?gid=1613794401&single=true&output=csv",
};

type SheetKey = keyof typeof urls;

type SheetTypeMap = {
  homeHogar: PlanHogar;
  homeMovil: PlanMovil;
  movilPlanesIndividuales: movilPlanesIndividuales;
  movilLineasAdicionales: movilLineasAdicionales;
  movilPrepagoAPlan: movilPrepagoAPlan;
  movilEmasP: movilEquipoMasPlan;
  hogarInternetHogar: HogarInternetHogar;
  hogarDoblePack: hogarDoblePack;
};

/**
 * Función para obtener los datos desde una hoja específica
 * @param hoja Nombre de la hoja (clave del objeto urls)
 * @returns Array con los datos tipados correctamente
 */
export const DataGoogleSheets = async <T extends SheetKey>(
  hoja: T
): Promise<SheetTypeMap[T][]> => {
  try {
    const response = await fetch(urls[hoja]);
    const csv = await response.text();

    const parsed = Papa.parse<SheetTypeMap[T]>(csv, {
      header: true,
      skipEmptyLines: true,
    });

    return parsed.data;
  } catch (error) {
    console.error(`Error cargando la hoja ${hoja}:`, error);
    return [];
  }
};

export default DataGoogleSheets;