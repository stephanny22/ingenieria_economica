export const CapitalizationCheckOperation = ({ register }) => {
  return (
    <>
      <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
        <h4 className="mb-3" style={{ color: 'white', textAlign: 'center' }}>¿Qué valor desea hallar?</h4>
        <hr style={{ borderColor: 'white' }} />
        <div className="mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("tipoOperacion", { required: true })}
              defaultChecked={true}
              value="anualidad"
            />
            <label className="form-check-label" style={{ color: 'white' }}>Anualidad</label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              {...register("tipoOperacion", { required: true })}
              defaultChecked={false}
              value="periodo"
            />
            <label className="form-check-label" style={{ color: 'white' }}>Número de periodos</label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              {...register("tipoOperacion", { required: true })}
              defaultChecked={false}
              value="cuota"
            />
            <label className="form-check-label" style={{ color: 'white' }}>Cuota</label>
          </div>
        </div>
      </div>
    </>
  );
};