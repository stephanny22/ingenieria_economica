export const CapitalizationInterest = ({ register, errors }) => {
  return (
    <>
      <h4 className="mb-3">Interés</h4>
      <hr />
      <div className="row">
        <div className="mb-3 col-lg-4 col-md-6">
          <input
            type="number"
            className={`form-control ${
              errors.interes ? "is-invalid" : undefined
            }`}
            placeholder="Digite el interes (%)"
            min="0.001"
            max="100"
            step="0.001"
            {...register("interes", {
              valueAsNumber: true,
              required: "El interés es obligatorio.",
              min: {
                value: 1,
                message: "El interés debe ser mayor o igual a 0.001.",
              },
              max: {
                value: 100,
                message: "El interés debe ser menor o igual a 100.",
              },
            })}
          />
          {errors.interes && (
            <div className="invalid-feedback">{errors.interes.message}</div>
          )}
        </div>
        <div className="mb-3 col-lg-4 col-md-6">
          <select
            className={`form-select ${errors.tasa ? "is-invalid" : undefined}`}
            {...register("tasa", {
              required: "El tipo de tasa es obligatorio.",
            })}
          >
            <option value="">Tipo de tasa</option>
            <option value="i">Efectivo</option>
            <option value="i">Periodico</option>
            <option value="j">Nominal</option>
            <option value="j">Capitalizable</option>
            <option value="j">Convertible</option>
            <option value="j">Vencida</option>
          </select>
          {errors.tasa && (
            <div className="invalid-feedback">{errors.tasa.message}</div>
          )}
        </div>
        <div className="mb-3 col-lg-4 col-md-6">
          <select
            className={`form-select ${
              errors.interes_periodo ? "is-invalid" : ""
            }`}
            {...register("interes_periodo", {
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
          {errors.interes_periodo && (
            <div className="invalid-feedback">
              {errors.interes_periodo.message}
            </div>
          )}
        </div>
        <div className="mb-3 col-lg-4 col-md-6">
          <select
            className={`form-select ${errors.pago ? "is-invalid" : ""}`}
            {...register("pago", {
              required: "La forma de pago a los interes es obligatoria.",
            })}
          >
            <option value="">Forma de pago</option>
            <option value="i">Ordinaria</option>
            <option value="ia">Anticipada</option>
          </select>
          {errors.pago && (
            <div className="invalid-feedback">{errors.pago.message}</div>
          )}
        </div>
      </div>
    </>
  );
};
