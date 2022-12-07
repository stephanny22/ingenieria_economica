import React from "react";

export const AnnuitiesCheckType = ({ register }) => {
  return (
    <div className="mb-3">
      <span>Tipo anualidad</span>
      <div className="mt-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoAnualidad")}
            defaultChecked={true}
            value="ordinaria"
          />
          <label className="form-check-label">Ordinaria o vencida</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoAnualidad")}
            defaultChecked={false}
            value="anticipada"
          />
          <label className="form-check-label">Anticipada</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoAnualidad")}
            defaultChecked={false}
            value="diferida"
          />
          <label className="form-check-label">Diferida</label>
        </div>
      </div>
    </div>
  );
};
