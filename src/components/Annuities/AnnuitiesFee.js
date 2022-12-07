import React from "react";

export const AnnuitiesFee = ({ register, errors }) => {
  return (
    <>
      <h4 className="mb-3">Cuota</h4>
      <hr />
      <div className="row">
        <div className="mb-3 col-lg-4 col-md-6">
          <input
            type="number"
            className={`form-control ${errors.cuota ? "is-invalid" : ""}`}
            placeholder="Digite el numero de cuotas"
            min="1"
            step="0.001"
            {...register("cuota", {
              valueAsNumber: true,
              required: "La cuota es obligatoria.",
              min: {
                value: 1,
                message: "La cuota debe ser mayor o igual a 1.",
              },
            })}
          />
          {errors.cuota && (
            <div className="invalid-feedback">{errors.cuota.message}</div>
          )}
        </div>
      </div>
    </>
  );
};
