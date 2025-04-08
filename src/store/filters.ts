import { create } from "zustand";
import { Filter } from "../types";

interface FilterState {
  filters: Filter[];
  addFilter: (section: string) => void;
  resetFilters: () => void;
}

const defaultState = [
  /* {
    id: "portabilidad",
    name: "Portabilidad",
    checked: false,
    cardType: "equipos",
  }, */
  { id: "recambio", name: "Recambio", checked: false, cardType: "equipos" },
] as Filter[];

export const useFiltersStore = create<FilterState>((set) => ({
  filters: defaultState,
  addFilter: (section: string) =>
    set((state) => {
      const newSections = state.filters.map((filter) => {
        if (filter.id === section) {
          filter.checked = !filter.checked;
        }
        return filter;
      });
      return {
        filters: [...newSections],
      };
    }),
  resetFilters: () =>
    set((state) => {
      const newFilters = state.filters.map((f) => ({ ...f, checked: false }));
      return { filters: newFilters };
    }),
}));
