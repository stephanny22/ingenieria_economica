import React from 'react';

export const AnnuitiesCheckType = ({ register }) => {
  return (
    <div className="mb-3" style={{ color: 'white' }}>
      <span>Tipo anualidad</span>
      <div className="mt-3">
        <select className="form-select" {...register("tipoAnualidad")} defaultValue="ordinaria">
          <option value="ordinaria">Ordinaria o vencida</option>
          <option value="anticipada">Anticipada</option>
          <option value="diferida">Diferida</option>
        </select>
      </div>
    </div>
  );
};