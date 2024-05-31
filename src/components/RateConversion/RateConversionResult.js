import React from "react";

export const RateConversionResult = ({ register, errors }) => {
  return (
    <div
      className=" overflow-hidden"
      style={{ padding: '30px', marginBottom: '20px' }}
    >
      <h4 className="mb-3" style={{ textAlign: 'center', color: 'green'}}>Convertir a tasa:</h4>
      <hr style={{ borderColor: 'green' }} />

      <label>Capitalización de tasa de interés</label>
          <select
            className={`form-select ${
              errors.periodo_salida ? "is-invalid" : undefined
            }`}
            {...register("periodo_salida", {
              required: "La capitalización de la tasa es obligatoria.",
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
          <label>Tipo de tasa de interés</label>

          <select
            className={`form-select ${
              errors.tasa_salida ? "is-invalid" : undefined
            }`}
            {...register("tasa_salida", {
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
          {errors.tasa_salida && (
            <div className="invalid-feedback">{errors.tasa_salida.message}</div>
          )}

          {errors.periodo_salida && (
            <div className="invalid-feedback">
              {errors.periodo_salida.message}
            </div>
          )}
        <label>Forma de pago</label>
          <select
            className={`form-select ${
              errors.pago_salida ? "is-invalid" : undefined
            }`}
            {...register("pago_salida", {
              required: "La forma de pago a los intereses es obligatoria.",
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

  );
};