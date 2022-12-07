import React from "react";

export const AnnuitiesCheckOperation = ({ register }) => {
  return (
    <div className="mb-3">
      <span>¿Que valor desea hallar? </span>
      <div className="mt-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoOperacion")}
            defaultChecked={true}
            value="anualidad"
          />
          <label className="form-check-label">Anualidad</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoOperacion")}
            defaultChecked={false}
            value="periodo"
          />
          <label className="form-check-label">Numero de periodos</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoOperacion")}
            defaultChecked={false}
            value="cuota"
          />
          <label className="form-check-label">Cuota</label>
        </div>
      </div>
    </div>
  );
};
