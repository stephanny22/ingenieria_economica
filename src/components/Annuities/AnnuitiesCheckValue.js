import React from "react";

export const AnnuitiesCheckValue = ({ register }) => {
  return (
    <div className="mb-3">
      <span>¿Que desea usar? </span>
      <div className="mt-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoValor")}
            defaultChecked={true}
            value="vp"
          />
          <label className="form-check-label">Valor actual (VP)</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoValor")}
            defaultChecked={false}
            value="vf"
          />
          <label className="form-check-label">Valor futuro (VF)</label>
        </div>
      </div>
    </div>
  );
};
