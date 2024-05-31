import React from "react";

export const AnnuitiesInterest = ({ register, errors }) => {
  return (
    <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
      <h4 className="mb-3" style={{ color: 'green', textAlign: 'center' }}>Interés</h4>
      <hr style={{ borderColor: 'green' }} />
      <div className="row">
        <div>
        <label>Tasa de interés en %:</label>

          <input
            type="number"
            className={`form-control ${errors.interes ? "is-invalid" : ""}`}
            placeholder="Digite el interés en %"
            min="0.001"
            max="100"
            step="0.001"
            {...register("interes", {
              valueAsNumber: true,
              required: "El interés es obligatorio.",
              min: {
                value: 0,
                message: "El interés debe ser mayor o igual a 0.",
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
        <div >
          <label>Tipo de tasa de interés:</label>
          <select
            className={`form-select ${errors.tipo_tasa ? "is-invalid" : ""}`}
            {...register("tipo_tasa", {
              required: "El tipo de tasa es obligatorio.",
            })}
          >
            <option value="">Tipo de tasa</option>
            <option value="j">Nominal</option>
            <option value="j">Vencida</option>
            <option value="j">Convertible</option>
            <option value="j">Capitalizable</option>
            <option value="i">Efectiva</option>
            <option value="i">Periódica</option>
          </select>
          {errors.tipo_tasa && (
            <div className="invalid-feedback">{errors.tipo_tasa.message}</div>
          )}
        </div>
        <div>
        <label>Capitalización tasa de interés:</label>
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
        <div >
          <label>Forma de pago:</label>
          <select
            className={`form-select ${errors.tipo_interes ? "is-invalid" : ""}`}
            {...register("tipo_interes", {
              required: "La forma de pago a los intereses es obligatoria.",
            })}
          >
            <option value="">Forma de pago a los intereses</option>
            <option value="ia">Anticipada</option>
            <option value="i">Ordinaria</option>
          </select>
          {errors.tipo_interes && (
            <div className="invalid-feedback">{errors.tipo_interes.message}</div>
          )}
        </div>
      </div>
    </div>
  );
};
