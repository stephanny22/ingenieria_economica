import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  RateConversionInterest,
  RateConversionModal,
  RateConversionResult,
} from "../components/RateConversion";
import { conversion_interes } from "../utils";
import backgroundImage from '../assets/fondo2.avif'; // Importa la imagen

export const RateConversionPage = () => {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = ({
    interes_entrada,
    tasa_entrada,
    periodo_entrada,
    pago_entrada,
    tasa_salida,
    periodo_salida,
    pago_salida,
  }) => {
    const arrEfectivo = ["efectivo", "periodico"];

    const arrNominal = ["nominal", "capitalizable", "convertible", "vencida"];

    const data = {
      entrada: {
        interes: (interes_entrada / 100).toString(),
        tipo_tasa: tasa_entrada,
        periodo: periodo_entrada,
        tipo_interes: pago_entrada,
      },
      conversion: {
        tipo_tasa:
          (arrEfectivo.includes(tasa_salida) && "i") ||
          (arrNominal.includes(tasa_salida) && "j"),
        periodo: periodo_salida,
        tipo_interes: pago_salida,
      },
    };
    setResult((conversion_interes(data) * 100).toFixed(3) + "%");
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center items-center p-6">
          <div style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
            <h2
              style={{
                textShadow:
                  "2px 2px 2px #05d005, -2px -2px 2px #05d005, 2px -2px 2px #05d005, -2px 2px 2px #05d005",
                color: 'white',
                textAlign: 'center',
              }}
            >
              Conversión de tasas
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <RateConversionInterest register={register} errors={errors} />
              <RateConversionResult register={register} errors={errors} />
              <div className="text-center mb-3">
                <button type="submit" className="btn btn-info">
                  Convertir
                </button>
              </div>
            </form>
            {result && (
              <RateConversionModal
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
  );
};
