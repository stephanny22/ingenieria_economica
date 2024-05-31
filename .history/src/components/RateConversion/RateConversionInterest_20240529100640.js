import React from "react";

export const RateConversionInterest = ({ register, errors }) => {
  return (
    <div
      
    >
      <h4 className="mb-3" style={{ color: 'white', textAlign: 'center' }}>Interés</h4>
      <hr style={{ borderColor: 'white' }} />
      <div className="row mb-3">
        <div className="mb-3 col-lg-3 col-md-6">
          <input
            type="number"
            className={`form-control ${
              errors.interes_entrada ? "is-invalid" : undefined
            }`}
            placeholder="Digite el interés (%)"
            min="0.001"
            max="100"
            step="0.001"
            {...register("interes_entrada", {
              valueAsNumber: true,
              required: "El interés es obligatorio.",
              min: {
                value: 0.001,
                message: "El interés debe ser mayor o igual a 0.001",
              },
              max: {
                value: 100,
                message: "El interés debe ser menor o igual a 100.",
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
            <option value="">Tipo de tasa</option>
            <option value="i">Efectiva</option>
            <option value="i">Periódica</option>
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
              required: "La forma de pago a los intereses es obligatoria.",
            })}
          >
            <option value="">Forma de pago</option>
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
    </div>
  );
};
