import { create } from "zustand";
import { Spec, Telefono } from "../types";

interface ModalState {
  open: boolean;
  specs: Spec[];
  product: string
  changeItem: (charArray: Spec[]) => void;
  toggleModal: () => void;
  changeProduct: (product: string) => void;
  
}

export const useModalStore = create<ModalState>((set) => ({
  open: false,
  specs: [],
  product :"",
  changeProduct: (product: string) => set({ product: product }),
  changeItem: (charArray: Spec[]) => set({ specs: charArray }),
  toggleModal: () => set((state) => ({ open: !state.open })),
  
}));




interface ModalShop {
  open: boolean;
  product: Telefono;
  setProduct : (producto : Telefono) => void,
  toggleModal: () => void;
}


export const useModalShop = create<ModalShop>((set) => ({
  open: false,
  product: {id: 0,
    brand: "",
    model: "",
    priceBefore: 0,
    priceAfter: 0,
    discount: 0,
    image: "",
    url: "",
    fees: 0,
    priceFee: 0,
    specs: [],
    group: "boleta",
    exclusive: false,
    service: "",
  },
  setProduct : (producto : Telefono) => set({product : producto}),
  toggleModal: () => set((state) => ({ open: !state.open })),
}));
