import { useForm } from "react-hook-form";
import {
  AnnuitiesCheckOperation,
  AnnuitiesCheckType,
  AnnuitiesCheckValue,
  AnnuitiesFee,
  AnnuitiesGrace,
  AnnuitiesInterest,
  AnnuitiesPeriod,
  Annuity,
} from "../components/Annuities";
import { anualidades } from "../utils";

export const AnnuitiesPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
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
      k: getValues("tipoAnualidad") === "diferida" ? data.grace : "0",
      anualidad:
        getValues("tipoOperacion") === "anualidad" ? "0" : data.anualidad,
    };

    console.log(anualidades(anualidadData));
  };

  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-info mb-3">Anualidades</h1>
        <div className="row">
          <div className="col-sm-3">
            <AnnuitiesCheckType register={register} />
            {watch("tipoAnualidad") !== "diferida" && (
              <AnnuitiesCheckValue register={register} />
            )}
            <AnnuitiesCheckOperation register={register} />
          </div>
          <div className="col-sm-9">
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
            {watch("tipoAnualidad") === "diferida" && (
              <AnnuitiesGrace register={register} errors={errors} />
            )}
            <button type="submit" className="btn btn-info">
              Calcular
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
