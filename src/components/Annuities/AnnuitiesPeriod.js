export const AnnuitiesPeriod = ({ register, errors, watch }) => {
  return (
    <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
      <h4 className="mb-3" style={{ color: 'green', textAlign: 'center' }}>Número de períodos</h4>
      <hr style={{ borderColor: 'green' }} />
        {watch("tipoOperacion") !== "periodo" && (
          <div>
              <label>Número de periodos</label>
            <input
              type="number"
              className={`form-control ${errors.valor ? "is-invalid" : ""}`}
              placeholder="Digite el número de períodos"
              min="1"
              {...register("valor", {
                valueAsNumber: true,
                required: "El número de períodos es obligatorio.",
                min: {
                  value: 1,
                  message: "El número de períodos debe ser mayor o igual a 1.",
                },
              })}
            />
            {errors.valor && (
              <div className="invalid-feedback">{errors.valor.message}</div>
            )}
          </div>
        )}
          <label>Tipo periodo</label>

          <select
            className={`form-select ${errors.tipo_periodo ? "is-invalid" : ""}`}
            {...register("tipo_periodo", {
              required: "La periodicidad de la tasa es obligatoria.",
            })}
          >
            <option value="">Tipo de periodo</option>
            <option value="1">Mensual</option>
            <option value="2">Bimestral</option>
            <option value="3">Trimestral</option>
            <option value="4">Cuatrimestral</option>
            <option value="6">Semestral</option>
            <option value="12">Anual</option>
          </select>
          {errors.tipo_periodo && (
            <div className="invalid-feedback">
              {errors.tipo_periodo.message}
            </div>
          )}
        </div>
  );
};
