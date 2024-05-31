import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AnnuitiesCheckOperation,
  AnnuitiesCheckType,
  AnnuitiesCheckValue,
  AnnuitiesFee,
  AnnuitiesGrace,
  AnnuitiesInterest,
  AnnuitiesModal,
  AnnuitiesPeriod,
  Annuity,
} from "../components/Annuities";
import { anualidades } from "../utils";
import backgroundImage from '../assets/fondo3.jpg'; // Importa la imagen

export const AnnuitiesPage = () => {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const anualidadData = {
      salida: getValues("tipoAnualidad") === "diferida" ? "vp" : data.tipoValor,
      tipo: data.tipoAnualidad,
      interes: {
        interes: (data.interes / 100).toString(),
        tipo_tasa: data.tipo_tasa,
        periodo: data.interes_periodo,
        tipo_interes: data.tipo_interes,
      },
      periodo: {
        valor: getValues("tipoOperacion") === "periodo" ? "0" : data.valor,
        periodo: data.tipo_periodo,
      },
      cuota: getValues("tipoOperacion") === "cuota" ? "0" : data.cuota,
      k:
        getValues("tipoAnualidad") === "diferida"
          ? getValues("tipoOperacion") !== "grace"
            ? data.grace
            : "0"
          : "0",
      anualidad:
        getValues("tipoOperacion") === "anualidad" ? "0" : data.anualidad,
    };

    if (
      getValues("tipoOperacion") === "periodo" ||
      getValues("tipoOperacion") === "grace"
    ) {
      setResult(anualidades(anualidadData));
    } else {
      setResult(anualidades(anualidadData).toFixed(3));
    }
    handleShow();
  };

  return (
    <div
      className="flex flex-wrap"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        paddingTop: '80px', // Ajusta el espacio desde la parte superior para dejar espacio para el navbar
      }}
    >
      <div className="container mx-auto px-4">
        <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-center items-center p-6">
            <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
              <h2
                style={{
                  textShadow:
                    "2px 2px 2px #009fff, -2px -2px 2px #009fff, 2px -2px 2px #009fff, -2px 2px 2px #009fff",
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Anualidades
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                  <div className="col-md-9 order-2 order-md-1">
                    {/* Contenido del formulario */}
                  </div>
                  <div className="col-md-3 order-1 order-md-2">
                    {/* Contenido del formulario */}
                  </div>
                </div>
              </form>
              {result && (
                <AnnuitiesModal
                  show={show}
                  handleClose={handleClose}
                  result={result}
                  getValues={getValues}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );