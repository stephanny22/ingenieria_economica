import React from 'react';

export const AnnuitiesCheckValue = ({ register }) => {
  return (
    <div className="mb-3" style={{ color: 'white' }}>
      <span>¿Qué desea usar?</span>
      <div className="mt-3">
        <select className="form-select" {...register("tipoValor")} defaultValue="vp">
          <option value="vp">Valor actual</option>
          <option value="vf">Valor futuro</option>
        </select>
      </div>
    </div>
  );
};