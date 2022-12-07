import React from "react";

export const AnnuitiesGrace = ({ register, errors }) => {
  return (
    <>
      <h4 className="mb-3">Tiempo de gracia</h4>
      <hr />
      <div className="row">
        <div className="mb-3 col-lg-4 col-md-6">
          <input
            type="number"
            className={`form-control ${errors.grace ? "is-invalid" : ""}`}
            placeholder="Digite el tiempo de gracia"
            min="1"
            {...register("grace", {
              valueAsNumber: true,
              required: "El tiempo de gracia es obligatorio.",
              min: {
                value: 1,
                message: "El tiempo de gracia debe ser mayor o igual a 1.",
              },
            })}
          />
          {errors.grace && (
            <div className="invalid-feedback">{errors.grace.message}</div>
          )}
        </div>
      </div>
    </>
  );
};
