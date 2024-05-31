export const CapitalizationPeriod = ({ register, errors, watch }) => {
  return (
    <>
      <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
        <h4 className="mb-3" style={{ color: 'white', textAlign: 'center' }}>Periodo</h4>
        <hr style={{ borderColor: 'white' }} />
        <div className="row">
          {watch("tipoOperacion") !== "periodo" && (
            <div className="mb-3 col-lg-4 col-md-6">
              <input
                type="number"
                className={`form-control ${errors.periodo ? "is-invalid" : ""}`}
                placeholder="Digite el número de periodos"
                min="1"
                step="0.1"
                {...register("periodo", {
                  valueAsNumber: true,
                  required: "El numero de periodos es obligatorio.",
                  min: {
                    value: 1,
                    message: "El numero de periodos debe ser mayor o igual a 1.",
                  },
                })}
              />
              {errors.periodo && (
                <div className="invalid-feedback">{errors.periodo.message}</div>
              )}
            </div>
          )}
          <div className="mb-3 col-lg-4 col-md-6">
            <select
              className={`form-select ${errors.periodo_tiempo ? "is-invalid" : ""}`}
              {...register("periodo_tiempo", {
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
            {errors.periodo_tiempo && (
              <div className="invalid-feedback">
                {errors.periodo_tiempo.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};