export const CapitalizationInterest = ({ register, errors }) => {
  return (
    <>
      <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
        <h4 className="mb-3" style={{ color: 'green', textAlign: 'center' }}>Interés</h4>
        <hr style={{ borderColor: 'green' }} />
        <label>Tasa de interés:</label>
          <div>
            <input
              type="number"
              className={`form-control ${errors.interes ? "is-invalid" : ""}`}
              placeholder="Digite el interes en %"
              min="0.001"
              max="100"
              step="0.001"
              {...register("interes", {
                valueAsNumber: true,
                required: "El interés es obligatorio.",
                min: {
                  value: 0.001,
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

          <label>Tipo de tasa de interés:</label>
          <div>
            <select
              className={`form-select ${errors.tasa ? "is-invalid" : ""}`}
              {...register("tasa", {
                required: "El tipo de tasa es obligatorio.",
              })}
            >
              <option value="">Capitalización de la tasa</option>
              <option value="12">Anual</option>
              <option value="6">Semestral</option>
              <option value="4">Cuatrimestral</option>
              <option value="3">Trimestral</option>
              <option value="2">Bimestral</option>
              <option value="1">Mensual</option>
            </select>
            {errors.tasa && (
              <div className="invalid-feedback">{errors.tasa.message}</div>
            )}
          </div>
          <label>Capitalización de tasa de interés:</label>
          <div>
            <select
              className={`form-select ${errors.interes_periodo ? "is-invalid" : ""}`}
              {...register("interes_periodo", {
                required: "La capitalización de la tasa es obligatorio.",
              })}
            >
              <option value="">Capitalización de la tasa</option>
              <option value="12">Anual</option>
              <option value="6">Semestral</option>
              <option value="4">Cuatrimestral</option>
              <option value="3">Trimestral</option>
              <option value="2">Bimestral</option>
              <option value="1">Mensual</option>
            </select>
            {errors.interes_periodo && (
              <div className="invalid-feedback">{errors.interes_periodo.message}</div>
            )}
          </div>
          <label>Forma de pago:</label>
          <div>
            <select
              className={`form-select ${errors.pago ? "is-invalid" : ""}`}
              {...register("pago", {
                required: "La forma de pago a los interes es obligatoria.",
              })}
            >
              <option value="">Forma de pago</option>
              <option value="ia">Anticipada</option>
              <option value="i">Ordinaria</option>
            </select>
            {errors.pago && (
              <div className="invalid-feedback">{errors.pago.message}</div>
            )}
          </div>
        </div>
    </>
  );
};
