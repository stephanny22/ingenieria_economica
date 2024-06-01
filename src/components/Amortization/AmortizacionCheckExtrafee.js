export const AmortizationCheckfee = ({ register }) => {
    return (
      <>
        <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
          <h4 className="mb-3" style={{ color: 'green', textAlign: 'center' }}>¿Desea abonar?</h4>
          <hr style={{ borderColor: 'green' }} />
          <div className="mt-3">
            <select
              className="form-select"
              {...register("abono", { required: true })}
              defaultValue="no">
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </>
    );
  };