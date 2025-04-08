export interface Telefono extends CommomProps {
  fees: number;
  priceFee: number;
  specs: Spec[];
  group: boleta | tarjeta;
  exclusive: boolean;
  service: string;
}

export interface Filter {
  id: /* "portabilidad" | */ "recambio";
  name: string;
  checked: boolean;
  cardType: "equipos";
}

interface CommomProps {
  id: number;
  brand: string;
  model: string;
  priceBefore: number;
  priceAfter: number;
  discount: number;
  image: string;
  url: string;
}

interface Spec {
  icon: string;
  name: string;
  value: string;
}

export type FormC2c = {
  tipoTelefono : "movil" | "fijo"; 
  localTelefono: string;
}


export interface C2c extends FormC2c {
  producto : string;
  segmento: "internet" | "telefonia" | "movil" ;
  servicio: "moviles" | "fijo";
  idTrans: string;
} 

export type FormC2cNew = {
  localTelefono_tipo : "movil" | "fijo"; 
  localTelefono: string;
}

export interface C2cNew extends FormC2cNew {
  localProducto : string;
  localSegmento: "internet" | "telefonia" | "movil" ;
  localServicio: "moviles" | "fijo";
  fc_dato_env: string;
  localRut1 : string;
} 


