import React from 'react';

export const AnnuitiesCheckOperation = ({ register, watch }) => {
  return (
    <div className="mb-3" style={{ color: 'white' }}>
      <span>¿Qué valor desea hallar?</span>
      <div className="mt-3">
        <select className="form-select" {...register("tipoOperacion", { required: true })} defaultValue="anualidad">
          <option value="anualidad">Anualidad</option>
          <option value="periodo">Número de periodos</option>
          <option value="cuota">Cuota</option>
          <option value="grace" disabled={watch("tipoAnualidad") !== "diferida"}>Tiempo de gracia</option>
        </select>
      </div>
    </div>
  );
};