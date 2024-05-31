export const RateConversionResult = ({ register, errors }) => {
  return (
    <>
      <h4 className="mb-3">Convertir a</h4>
      <hr />
      <div className="row mb-3">
        <div className="mb-3 col-lg-3 col-md-6">
          <select
            className={`form-select ${
              errors.tasa_salida ? "is-invalid" : undefined
            }`}
            {...register("tasa_salida", {
              required: "El tipo de tasa es obligatorio.",
            })}
          >
            <option value="">Tipo de tasa</option>
            <option value="efectiva">Efectiva</option>
            <option value="periodica">Periodica</option>
            <option value="nominal">Nominal</option>
            <option value="capitalizable">Capitalizable</option>
            <option value="convertible">Convertible</option>
            <option value="vencida">Vencida</option>
          </select>
          {errors.tasa_salida && (
            <div className="invalid-feedback">{errors.tasa_salida.message}</div>
          )}
        </div>
        <div className="mb-3 col-lg-3 col-md-6">
          <select
            className={`form-select ${
              errors.periodo_salida ? "is-invalid" : undefined
            }`}
            {...register("periodo_salida", {
              required: "El periodo de la tasa es obligatorio.",
            })}
          >
            <option value="">Periodo de la tasa</option>
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
            <option value="">Forma de pago</option>
            <option value="i">Ordinaria</option>
            <option value="ia">Anticipada</option>
          </select>
          {errors.pago_salida && (
            <div className="invalid-feedback">{errors.pago_salida.message}</div>
          )}
        </div>
      </div>
    </>
  );
};
