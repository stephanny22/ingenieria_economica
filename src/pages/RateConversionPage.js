import { useForm } from "react-hook-form";
import { conversion_interes } from "../utils/conversion_tasas";

export const RateConversionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
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
    const data = {
      entrada: {
        interes: (interes_entrada / 100).toString(),
        tipo_tasa: tasa_entrada,
        periodo: periodo_entrada,
        tipo_interes: pago_entrada,
      },
      conversion: {
        tipo_tasa: tasa_salida,
        periodo: periodo_salida,
        tipo_interes: pago_salida,
      },
    };
    setValue("conversion", (conversion_interes(data) * 100).toFixed(3) + "%");
  };

  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="mb-3">Interes a convertir</h4>
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6">
            <input
              type="number"
              className={`form-control ${
                errors.interes_entrada ? "is-invalid" : undefined
              }`}
              placeholder="Digite el interes (%)"
              min="1"
              max="100"
              step="0.001"
              {...register("interes_entrada", {
                valueAsNumber: true,
                required: "El interes es obligatorio.",
                min: {
                  value: 1,
                  message: "El interes debe ser mayor o igual a 1.",
                },
                max: {
                  value: 100,
                  message: "El interes debe ser menor o igual a 100.",
                },
              })}
            />
            {errors.interes_entrada && (
              <div className="invalid-feedback">
                {errors.interes_entrada.message}
              </div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${
                errors.tasa_entrada ? "is-invalid" : undefined
              }`}
              {...register("tasa_entrada", {
                required: "El tipo de tasa es obligatorio.",
              })}
            >
              <option value="">Seleccione tipo de tasa</option>
              <option value="i">Efectivo</option>
              <option value="i">Periodico</option>
              <option value="j">Nominal</option>
              <option value="j">Capitalizable</option>
              <option value="j">Convertible</option>
              <option value="j">Vencida</option>
            </select>
            {errors.tasa_entrada && (
              <div className="invalid-feedback">
                {errors.tasa_entrada.message}
              </div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${
                errors.periodo_entrada ? "is-invalid" : undefined
              }`}
              {...register("periodo_entrada", {
                required: "La periocidad de la tasa es obligatoria.",
              })}
            >
              <option value="">Seleccione periocidad de la tasa</option>
              <option value="1">Mensual</option>
              <option value="2">Bimestral</option>
              <option value="3">Trimestral</option>
              <option value="4">Cuatrimestral</option>
              <option value="6">Semestral</option>
              <option value="12">Anual</option>
            </select>
            {errors.periodo_entrada && (
              <div className="invalid-feedback">
                {errors.periodo_entrada.message}
              </div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${
                errors.pago_entrada ? "is-invalid" : undefined
              }`}
              {...register("pago_entrada", {
                required: "La forma de pago a los interes es obligatoria.",
              })}
            >
              <option value="">Seleccione forma de pagos a los interes</option>
              <option value="i">Ordinaria</option>
              <option value="ia">Anticipada</option>
            </select>
            {errors.pago_entrada && (
              <div className="invalid-feedback">
                {errors.pago_entrada.message}
              </div>
            )}
          </div>
        </div>
        <h4 className="mb-3">Interes convertido</h4>
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${
                errors.tasa_salida ? "is-invalid" : undefined
              }`}
              {...register("tasa_salida", {
                required: "El tipo de tasa es obligatorio.",
              })}
            >
              <option value="">Seleccione tipo de tasa</option>
              <option value="i">Efectivo</option>
              <option value="i">Periodico</option>
              <option value="j">Nominal</option>
              <option value="j">Capitalizable</option>
              <option value="j">Convertible</option>
              <option value="j">Vencida</option>
            </select>
            {errors.tasa_salida && (
              <div className="invalid-feedback">
                {errors.tasa_salida.message}
              </div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${
                errors.periodo_salida ? "is-invalid" : undefined
              }`}
              {...register("periodo_salida", {
                required: "La periocidad de la tasa es obligatoria.",
              })}
            >
              <option value="">Seleccione periocidad de la tasa</option>
              <option value="1">Mensual</option>
              <option value="2">Bimestral</option>
              <option value="3">Trimestral</option>
              <option value="4">Cuatrimestral</option>
              <option value="6">Semestral</option>
              <option value="12">Anual</option>
            </select>
            {errors.periodo_salida && (
              <div className="invalid-feedback">
                {errors.periodo_salida.message}
              </div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${
                errors.pago_salida ? "is-invalid" : undefined
              }`}
              {...register("pago_salida", {
                required: "La forma de pago a los interes es obligatoria.",
              })}
            >
              <option value="">Seleccione forma de pagos a los interes</option>
              <option value="i">Ordinaria</option>
              <option value="ia">Anticipada</option>
            </select>
            {errors.pago_salida && (
              <div className="invalid-feedback">
                {errors.pago_salida.message}
              </div>
            )}
          </div>
          {getValues("conversion") && (
            <div className="mb-3 col-lg-3 col-md-6">
              <input
                type="text"
                className={`form-control border border-3 border-success is-valid`}
                disabled
                readOnly
                {...register("conversion")}
              />
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-info">
          Convertir
        </button>
      </form>
    </div>
  );
};
