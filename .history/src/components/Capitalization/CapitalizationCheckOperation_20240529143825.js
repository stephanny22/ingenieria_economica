export const CapitalizationCheckOperation = ({ register }) => {
  return (
    <>
      <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px', color: 'white' }}>
        <span>¿Qué valor desea hallar?</span>
        <div className="mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("tipoOperacion", { required: true })}
              defaultChecked={true}
              value="anualidad"
            />
            <label className="form-check-label">Anualidad</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("tipoOperacion", { required: true })}
              defaultChecked={false}
              value="periodo"
            />
            <label className="form-check-label">Número de periodos</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("tipoOperacion", { required: true })}
              defaultChecked={false}
              value="cuota"
            />
            <label className="form-check-label">Cuota</label>
          </div>
        </div>
      </div>
    </>
  );
};