import React, { useEffect, useState } from "react";
import { useModalShop } from "../store/modal";
import { generateIdTrans, sendData } from "../lib/HelperData";
import styles from "./ModalShop.module.css";
import { C2c, FormC2c } from "../types";

interface ModalProps {
  open: boolean;
}

const ModalShop = ({ open }: ModalProps) => {
  // cambiar a False si se necesita utilizar el modal con contratar online y llamenme ahora
  const [showForm, setShowForm] = useState(false);

  const toggleModalShop = useModalShop((state) => state.toggleModal);
  const [telefono, setTelefono] = useState("");
  // const [rut, setRut] = useState("");
  const product = useModalShop((state) => state.product);
  const [btnEnviar, setBtnEnviar] = useState(true);
  const [msg, setMsg] = useState(false);
  const [codigoPais, setCodigoPais] = useState("+569");
  const [idTrans, setIdTrans] = useState("");
  // const [rutValido, setRutValido] = useState(false);
  // const [errorRut, setErrorRut] = useState("");
  // const [mail, setMail] = useState("");
  // const [errorMail, setErrorMail] = useState("");
  // const [mailValido, setMailValido] = useState(true);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.code === "Escape" && open) {
        toggleModalShop();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  });

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    /*  if (rutValido && mailValido) { */
    setBtnEnviar(false);
    // const form = ev.currentTarget;
    const formData = new FormData(ev.currentTarget);
    const form = Object.fromEntries(formData) as FormC2c;

    // console.log(product);
    const { tipoTelefono, localTelefono } = form;

    const data = {
      tipoTelefono,
      localTelefono,
      producto: `${product.brand} ${product.model}`,
      segmento: "movil",
      servicio: "moviles",
      rut: "15953532-0",
      idTrans,
      mail: "",
    } as C2c;

    // console.log(data)
    const response = await sendData(data);
    response.executionResult.executionCode === 10 ? setMsg(!msg) : setMsg(!msg);
    setBtnEnviar(true);
    /* } else {
      if (!mailValido) {
        setErrorMail("Email inválido");
      }
      if (!rutValido) {
        setErrorRut("Rut Invalido");
      }
      
    } */
  };

  const handleTelefono = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    let inputClean = input.replace(/[^0-9]/g, "");
    // console.log(first)
    if (inputClean.length > 8 && codigoPais === "+569") {
      inputClean = inputClean.slice(0, 8);
    } else if (inputClean.length > 9 && codigoPais === "+56") {
      inputClean = inputClean.slice(0, 9);
    }
    e.target.value = inputClean;
    setTelefono(inputClean);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);
    e.target.value === "movil" ? setCodigoPais("+569") : setCodigoPais("+56");
    setTelefono("");
  };

  const handleIdtrans = () => {
    setIdTrans(generateIdTrans());
  };

  /*  const handleRut = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleanedValue = inputValue.replace(/[^\dkK]/g, "").slice(0, 9);
    const formatedValue = formatRut(cleanedValue);
    e.target.value = formatedValue;
    setRut(formatedValue);
    setErrorRut("");

    const rutvalidado = validarRut(formatedValue);
    setRutValido(rutvalidado);
  };

  const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setMail(inputValue);
    setErrorMail("");
    
    console.log(inputValue)
    if (validateEmail(inputValue)) {
      setMailValido(true);
    } else {
      setMailValido(false);
    }
    if (inputValue == "") {
      setMailValido(true);
    }
  }; */

  return (
    <>
      {open ? (
        <>
          <div
            className={`justify-center items-center flex w-screen h-screen my-auto z-50 top-0 left-0 bg-black/70 ${styles.modalOpen}`}>
            <div className="border-0 rounded-lg shadow-lg flex flex-col max-w-lg bg-white">
              <div className="flex items-start justify-between px-4 pt-4">
                <h3 className="text-3xl font-semibold"></h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none outline-none focus:outline-none z-60"
                  onClick={() => {
                    toggleModalShop();
                    setTelefono("");
                    setMsg(false);
                    setBtnEnviar(true);
                  }}>
                  ×
                </button>
              </div>
              <div className="relative px-6 pb-6 flex-auto w-auto">
                <h3 className="text-lg font-bold pb-5">
                  LLÉVATE EL MEJOR EQUIPO CONTRATANDO UN PLAN CLARO
                </h3>
                <div className="flex flex-wrap flex-col text-left gap-y-5">
                  <div>
                    <h2 className="text-lg font-bold modal_seen_title">
                      {product.brand}
                    </h2>
                    <h2 className="text-lg font-bold modal_seen_subtitle">
                      {product.model}
                    </h2>
                  </div>
                  <div
                    className={`flex flex-col gap-4 ${
                      showForm ? "hidden" : ""
                    } text-center font-medium py-5`}>
                    <p className="font-medium">
                      Selecciona una opcion de contratacion
                    </p>
                    {/* <a href={product.url} className="mx-auto">
                      <button className="text-[#6c6c6c] font-[700] border-[1px] shadow-md py-[11px] px-[50px] rounded-full w-[300px]">
                        Contratar
                      </button>
                    </a> */}
                    <button
                      className="text-[#6c6c6c] font-[700] border-[1px] shadow-md py-[11px] px-[50px] rounded-full w-[280px] mx-auto relative"
                      onClick={() => setShowForm(!showForm)}>
                      <span className="absolute left-[20px]">
                        <i className="ico-phone text-[22px]"></i>
                      </span>
                      Llámenme Ahora
                      <span className="absolute right-[20px]">
                        <i className="ico-chevron-right text-[22px]"></i>
                      </span>
                    </button>
                    <a
                      href="https://api.whatsapp.com/send?phone=56950172693&text=%C2%A1Hola!%20Quiero%20contratar%20servicios%20fijos%20para%20mi%20negocio%2Fempresa"
                      className="mx-auto">
                      <button className="text-[#6c6c6c] font-[700] border-[1px] shadow-md py-[11px] px-[50px] rounded-full w-[280px] relative">
                        <span className="absolute left-[20px]">
                          <i className="ico-whatsapp-s text-[22px]"></i>
                        </span>
                        Whatsapp
                        <span className="absolute right-[20px]">
                          <i className="ico-chevron-right text-[22px]"></i>
                        </span>
                      </button>
                    </a>
                  </div>
                  <div
                    className={`flex flex-col gap-4 ${
                      showForm ? "" : "hidden"
                    }`}>
                    <div>
                      <div className="text-center">
                        <p className="font-medium">
                          Ingresa tu número de contacto:
                        </p>
                      </div>
                      <form
                        onSubmit={(ev) => handleSubmit(ev)}
                        method="post"
                        className="flex flex-wrap flex-col">
                        <div className="flex flex-col flex-wrap gap-y-5 sm:gap-y-0">
                          {/* <fieldset>
                            <div className="text-star py-2">
                              <p className="font-bold p-1">RUT</p>
                              <div>
                                <input
                                  className="border-y-2 border-r-2 text-base p-3 rounded-r-2xl w-full "
                                  name="numeroTelefono"
                                  type="text"
                                  placeholder="Ingresa tu Rut"
                                  defaultValue={rut}
                                  onChange={handleRut}
                                  required
                                />
                                <span className="px-3 text-claroRed">
                                  {errorRut}
                                </span>
                              </div>
                            </div>
                          </fieldset> */}

                          <div className="flex flex-row justify-between gap-x-5">
                            <fieldset className="w-1/3">
                              <span className="select big flex-1">
                                <select
                                  id="tipoTelefono"
                                  name="tipoTelefono"
                                  onChange={handleSelect}>
                                  <option value="movil">Móvil</option>
                                  <option value="fijo">Fijo</option>
                                </select>
                              </span>
                            </fieldset>

                            <fieldset className="w-2/3">
                              <div className="flex flex-grow w-full sm:w-auto inputPhone val ">
                                <span className="phoneCode">{codigoPais}</span>
                                <div className="inputField">
                                  <input
                                    className="!rounded-l-none border-y-2 border-r-2 text-base p-3 rounded-r-2xl w-full"
                                    name="numeroTelefono"
                                    type="text"
                                    placeholder="Ingresa tu número"
                                    defaultValue={telefono}
                                    onChange={handleTelefono}
                                    required
                                    pattern={
                                      codigoPais === "+569"
                                        ? "^\\d{8}$"
                                        : "^\\d{9}$"
                                    }
                                    /* pattern="^\d{8}$" */
                                  />
                                </div>
                              </div>
                            </fieldset>
                          </div>

                          {/* <fieldset>
                            <div className="text-star py-4">
                              <p className="font-bold p-1">Correo Electrónico(opcional)</p>
                              <div>
                                <input
                                  className="border-y-2 border-r-2 text-base p-3 rounded-r-2xl w-full "
                                  name="correo"
                                  type="text"
                                  placeholder="Ingresa tu correo"
                                  defaultValue={mail}
                                  onChange={handleMail}
                                />
                                <span className="px-3 text-claroRed">
                                  {errorMail}
                                </span>
                              </div>
                            </div>
                          </fieldset> */}

                          <fieldset className="hidden">
                            <input
                              name="idTrans"
                              type="text"
                              defaultValue={idTrans}
                            />
                          </fieldset>
                        </div>
                        <div className="flex flex-col justify-center pt-8">
                          <button
                            className={`block text-center  text-white font-medium px-[40px] py-[11px] w-fit mx-auto rounded-full ${
                              btnEnviar ? "bg-claroRed" : "bg-slate-500"
                            }`}
                            type="submit"
                            onClick={() => {
                              handleIdtrans();
                            }}
                            disabled={!btnEnviar}>
                            Enviar
                          </button>
                        </div>
                      </form>
                      <div className="flex justify-center">
                        <button
                          className="className={`text-center text-sm font-bold text-[#0097A9] underline px-[40px] pt-[20px] w-fit `}"
                          onClick={() => setShowForm(!showForm)}>
                          Ver otras opciones
                        </button>
                      </div>
                      <div
                        className={`m-5 py-2 px-1 ${msg ? "block" : "hidden"}`}>
                        <div className="flex notification success">
                          <div>
                            <p>Tus datos fueron inscritos correctamente.</p>
                            <p>
                              <strong>Pronto nos comunicaremos contigo.</strong>
                            </p>
                          </div>

                          <button onClick={() => setMsg(!msg)}>
                            <span className="ico-x"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*                     <button
                      onClick={() => setShowForm(!showForm)}
                      className="text-cyan-500 hover:underline mt-2 active:outline-none focus:outline-none"
                    >
                      Ver otras opciones
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalShop;
