export const AnnuitiesCheckType = ({ register }) => {
  return (
    <div className="mb-3" style={{ color: 'white' }}>
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
          <label className="form-check-label" style={{ color: 'white' }}>Ordinaria o vencida</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoAnualidad")}
            defaultChecked={false}
            value="anticipada"
          />
          <label className="form-check-label" style={{ color: 'white' }}>Anticipada</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoAnualidad")}
            defaultChecked={false}
            value="diferida"
          />
          <label className="form-check-label" style={{ color: 'white' }}>Diferida</label>
        </div>
      </div>
    </div>
  );
};
