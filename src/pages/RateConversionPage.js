import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  RateConversionInterest,
  RateConversionModal,
  RateConversionResult,
} from "../components/RateConversion";
import { conversion_interes } from "../utils";

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
    <div className="container py-5">
      <h1 className="text-center text-info mb-3">Conversión de tasas</h1>
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
  );
};
