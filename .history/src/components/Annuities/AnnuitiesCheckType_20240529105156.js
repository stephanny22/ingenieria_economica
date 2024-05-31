export const AnnuitiesCheckType = ({ register }) => {
  return (
    <div className="mb-3" style={{ color: 'white' }}>
      <span>Tipo de anualidad</span>
      <div className="mt-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoAnualidad")}
            defaultChecked={true}
            value="ordinaria"
            id="tipoAnualidad1"
          />
          <label className="form-check-label" htmlFor="tipoAnualidad1">Ordinaria o vencida</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoAnualidad")}
            defaultChecked={false}
            value="anticipada"
            id="tipoAnualidad2"
          />
          <label className="form-check-label" htmlFor="tipoAnualidad2">Anticipada</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoAnualidad")}
            defaultChecked={false}
            value="diferida"
            id="tipoAnualidad3"
          />
          <label className="form-check-label" htmlFor="tipoAnualidad3">Diferida</label>
        </div>
      </div>
    </div>
  );
};
