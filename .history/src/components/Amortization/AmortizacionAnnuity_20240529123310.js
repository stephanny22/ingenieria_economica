export const AmortizacionAnnuity = ({ register, errors }) => {
  return (
    <>
      <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
        <h4 className="mb-3" style={{ color: 'white', textAlign: 'center' }}>Anualidad</h4>
        <hr style={{ borderColor: 'white' }} />
        <div className="row">
          <div className="mb-3 col-lg-4 col-md-6">
            <input
              type="number"
              className={`form-control ${errors.anualidad ? "is-invalid" : ""}`}
              placeholder="Digite la cuota"
              min="1"
              {...register("anualidad", {
                valueAsNumber: true,
                required: "La anualidad es obligatoria.",
                min: {
                  value: 1,
                  message: "La anualidad debe ser mayor o igual a 1.",
                },
              })}
            />
            {errors.anualidad && (
              <div className="invalid-feedback">{errors.anualidad.message}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};