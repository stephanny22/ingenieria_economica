export const AmortizationExtraFee = ({ register, errors }) => {
    return (
      <>
        <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
          <h4 className="mb-3" style={{ color: 'green', textAlign: 'center' }}>Extracuota</h4>
          <hr style={{ borderColor: 'green' }} />
          <div className="row">
            {/* Valor del abono */}
            <div>
                <label>Valor de extra-cuota</label>
              <input
                type="number"
                className={`form-control ${errors.anualidad ? "is-invalid" : ""}`}
                placeholder="Digite el valor de extracuota"
                min="1"
                {...register("extracuota", {
                  valueAsNumber: true,
                  required: "La extracuota es obligatoria.",
                  min: {
                    value: 1,
                    message: "La extracuota debe ser mayor o igual a 1.",
                  },
                })}
              />
              {errors.anualidad && (
                <div className="invalid-feedback">{errors.anualidad.message}</div>
              )}
            </div>
            {/* Periodo en el que se aplica */}
            {/* HACER QUE EL PERIODO NO PUEDA SER MAYOR AL INGRESADOOOO!!!!!!!!!!!!!!!!! */}
            <div>
            <label>Periodo a abonar:</label>
              <input
                type="number"
                className={`form-control ${errors.anualidad ? "is-invalid" : ""}`}
                placeholder="Digite el periodo en el que desea abonar"
                min="1"
                {...register("extracuota", {
                  valueAsNumber: true,
                  required: "El periodo es obligatorio.",
                  min: {
                    value: 1,
                    message: "El periodo debe ser mayor o igual a 1.",
                  },
                })}
              />
              {errors.anualidad && (
                <div className="invalid-feedback">{errors.anualidad.message}</div>
              )}
            </div>
            {/* Que reducir (tiempo o dinero) */}
              <label>Seleccione lo que quiere reducir:</label>
            <div className="mt-3">
            <select
              className="form-select"
              {...register("OpcionAbono", { required: true })}
              defaultValue="tiempo">
              <option value="tiempo">Tiempo</option>
              <option value="cuota">Cuota</option>
            </select>
          </div>
          </div>
        </div>
      </>
    );
  };