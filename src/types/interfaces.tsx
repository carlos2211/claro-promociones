export interface PlanHogar {
  extensor: any;
  description: string | undefined;
  id: string;
  plan: string;
  subtitle: string;
  gb: string;
  offer_price: number;
  vigency: string;
  normal_price: number;
  otts: string;
  down: string;
  up: string;
  wifi_technology: string;
  advertisements: string;
  tv_channels: string;
  deco: string;
  router: string;
}

export interface PlanMovil {
  id: string;
  plan: string;
  subtitle: string;
  gb: string;
  description: string;
  discount: number;
  offer_price: number;
  vigency: string;
  normal_price: number;
  exclusive: string;
  internet: string;
  minutes: string;
  roaming: string;
  long_distance: string;
  messages: string;
  rrss: string;
}

export interface movilPlanesIndividuales {
  id: string;
  plan: string;
  subtitle: string;
  gb: string;
  description: string;
  discount: number;
  offer_price: number;
  vigency: string;
  normal_price: number;
  exclusive: string;
  internet: string;
  minutes: string;
  roaming: string;
  long_distance: string;
  messages: string;
  rrss: string;
}

export interface movilLineasAdicionales {
  id: string;
  plan: string;
  subtitle: string;
  gb: string;
  description: string;
  discount: number;
  offer_price: number;
  vigency: string;
  normal_price: number;
  exclusive: string;
  internet: string;
  minutes: string;
  roaming: string;
  long_distance: string;
  messages: string;
}

export interface movilPrepagoAPlan {
  id: string;
  plan: string;
  subtitle: string;
  gb: string;
  description: string;
  discount: number;
  offer_price: number;
  vigency: string;
  normal_price: number;
  exclusive: string;
  internet: string;
  minutes: string;
  roaming: string;
  long_distance: string;
  rrss: string;
  messages: string;
}

export interface movilEquipoMasPlan {
  id: string;
  brand: string;
  model: string;
  offer_price: number;
  normal_price: number;
  discount: number;
  fees: number;
  value_fees: number;
  img: string;
}

export interface HogarInternetHogar {
  id: string;
  plan: string;
  subtitle: string;
  gb: string;
  description: string;
  offer_price: number;
  vigency: string;
  normal_price: number;
  down: string;
  up: string;
  wifi_technology: string;
  extensor: string;
}

export interface hogarDoblePack {
  id: string;
  plan: string;
  subtitle: string;
  category: string;
  description: string;
  offer_price: number;
  vigency: string;
  normal_price: number;
  otts: string;
  down: string;
  up: string;
  advertisements: string;
  tv_channels: string;
  deco: string;
  router: string;
}
