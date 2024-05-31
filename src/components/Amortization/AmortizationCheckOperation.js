export const AmortizationCheckOperation = ({ register }) => {
  return (
    <>
      <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
        <h4 className="mb-3" style={{ color: 'green', textAlign: 'center' }}>¿Qué valor desea hallar?</h4>
        <hr style={{ borderColor: 'green' }} />
        <div className="mt-3">
          <select
            className="form-select"
            {...register("tipoOperacion", { required: true })}
            defaultValue="anualidad"
          >
            <option value="anualidad">Anualidad</option>
            <option value="periodo">Número de periodos</option>
            <option value="cuota">Cuota</option>
          </select>
        </div>
      </div>
    </>
  );
};