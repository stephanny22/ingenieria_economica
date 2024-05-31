export const AnnuitiesFee = ({ register, errors }) => {
  return (
    <div className="overflow-hidden" style={{ padding: '30px', marginBottom: '20px' }}>
      <h4 className="mb-3" style={{ color: 'green', textAlign: 'center' }}>Cuota</h4>
      <hr style={{ borderColor: 'green' }} />
          <label>Valor de cuota</label>
          <input
            type="number"
            className={`form-control ${errors.cuota ? "is-invalid" : ""}`}
            placeholder="Digite el valor de la cuota"
            min="1"
            step="0.001"
            {...register("cuota", {
              valueAsNumber: true,
              required: "La cuota es obligatoria.",
              min: {
                value: 1,
                message: "La cuota debe ser mayor o igual a 1.",
              },
            })}
          />
          {errors.cuota && (
            <div className="invalid-feedback">{errors.cuota.message}</div>
          )}
        </div>

  );
};
