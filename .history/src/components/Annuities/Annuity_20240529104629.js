export const Annuity = ({ register, errors }) => {
  return (
    <>
      <h4 className="mb-3">Anualidad</h4>
      <hr />
      <div className="row">
        <div className="mb-3 col-lg-4 col-md-6">
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
      </div>
    </>
  );
};
