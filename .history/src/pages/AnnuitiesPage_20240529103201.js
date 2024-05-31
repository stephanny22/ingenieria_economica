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
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-info mb-3">Anualidades</h1>
        <div className="row">
          <div className="col-md-9 order-2 order-md-1">
            <AnnuitiesInterest register={register} errors={errors} />
            <AnnuitiesPeriod
              register={register}
              errors={errors}
              watch={watch}
            />
            {watch("tipoOperacion") &&
              watch("tipoOperacion") !== "anualidad" && (
                <Annuity register={register} errors={errors} />
              )}
            {watch("tipoOperacion") !== "cuota" && (
              <AnnuitiesFee register={register} errors={errors} />
            )}
            {watch("tipoAnualidad") === "diferida" &&
              watch("tipoOperacion") !== "grace" && (
                <AnnuitiesGrace register={register} errors={errors} />
              )}
            <button type="submit" className="btn btn-info">
              Calcular
            </button>
          </div>
          <div className="col-md-3 order-1 order-md-2">
            <AnnuitiesCheckType register={register} />
            {watch("tipoAnualidad") !== "diferida" && (
              <AnnuitiesCheckValue register={register} />
            )}
            <AnnuitiesCheckOperation register={register} watch={watch} />
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
  );
};
