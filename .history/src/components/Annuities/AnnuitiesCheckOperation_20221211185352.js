export const AnnuitiesCheckOperation = ({ register, watch }) => {
  return (
    <div className="mb-3">
      <span>¿Que valor desea hallar? </span>
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
          <label className="form-check-label">Numero de periodos</label>
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
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoOperacion", { required: true })}
            defaultChecked={false}
            value="grace"
            disabled={watch("tipoAnualidad") !== "diferida"}
          />
          <label className="form-check-label">Tiempo de gracia</label>
        </div>
      </div>
    </div>
  );
};
