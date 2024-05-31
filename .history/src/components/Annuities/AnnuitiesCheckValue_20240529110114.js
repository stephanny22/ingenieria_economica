export const AnnuitiesCheckValue = ({ register }) => {
  return (
    <div className="mb-3" style={{ color: 'white' }}>
      <span>¿Qué desea usar?</span>
      <div className="mt-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoValor")}
            defaultChecked={true}
            value="vp"
            id="tipoValor1"
          />
          <label className="form-check-label" htmlFor="tipoValor1">Valor actual (VP)</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoValor")}
            defaultChecked={false}
            value="vf"
            id="tipoValor2"
          />
          <label className="form-check-label" htmlFor="tipoValor2">Valor futuro (VF)</label>
        </div>
      </div>
    </div>
  );
};

