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
    getValues,
    setValue,
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

    if (getValues("tipoOperacion") === "periodo") {
      setValue("result", anualidades(anualidadData));
    } else {
      setValue("result", anualidades(anualidadData).toFixed(3));
    }
  };

  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-info mb-3">Anualidades</h1>
        <div className="row">
          <div className="col-sm-9 order-2 order-md-1">
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
          <div className="col-sm-3 order-1 order-md-2">
            <AnnuitiesCheckType register={register} />
            {watch("tipoAnualidad") !== "diferida" && (
              <AnnuitiesCheckValue register={register} />
            )}
            <AnnuitiesCheckOperation register={register} />
            {getValues("result") && (
              <div className="mt-3">
                <input
                  type="text"
                  className={`form-control border border-3 border-success is-valid rounded-5 text-center`}
                  disabled
                  readOnly
                  {...register("result")}
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
