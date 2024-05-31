export const Annuity = ({ register, errors }) => {
  return (
    <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
      <h4 className="mb-3" style={{ color: 'green', textAlign: 'center' }}>Anualidad</h4>
      <hr style={{ borderColor: 'green' }} />
      <label>Anualidad</label>

          <input
            type="number"
            className={`form-control ${errors.anualidad ? "is-invalid" : ""}`}
            placeholder="Digite la anualidad"
            min="1"
            step="0.001"
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
  );
};
