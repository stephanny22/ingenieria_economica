export const AnnuitiesGrace = ({ register, errors }) => {
  return (
    <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
      <h4 className="mb-3" style={{ color: 'green', textAlign: 'center' }}>Periodo de gracia</h4>
      <hr style={{ borderColor: 'green' }} />
          <label>Periodo de gracia:</label>

          <input
            type="number"
            className={`form-control ${errors.grace ? "is-invalid" : ""}`}
            placeholder="Digite el periodo de gracia"
            min="1"
            {...register("grace", {
              valueAsNumber: true,
              required: "El periodo de gracia es obligatorio.",
              min: {
                value: 1,
                message: "El periodo de gracia debe ser mayor o igual a 1.",
              },
            })}
          />
          {errors.grace && (
            <div className="invalid-feedback">{errors.grace.message}</div>
          )}
        </div>
  );
};
