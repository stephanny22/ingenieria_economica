export const AnnuitiesCheckOperation = ({ register, watch }) => {
  return (
    <div className="mb-3" style={{ color: 'white' }}>
      <span>¿Qué valor desea hallar?</span>
      <div className="mt-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoOperacion", { required: true })}
            defaultChecked={true}
            value="anualidad"
            id="tipoOperacion1"
          />
          <label className="form-check-label" htmlFor="tipoOperacion1">Anualidad</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoOperacion", { required: true })}
            defaultChecked={false}
            value="periodo"
            id="tipoOperacion2"
          />
          <label className="form-check-label" htmlFor="tipoOperacion2">Número de periodos</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoOperacion", { required: true })}
            defaultChecked={false}
            value="cuota"
            id="tipoOperacion3"
          />
          <label className="form-check-label" htmlFor="tipoOperacion3">Cuota</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            {...register("tipoOperacion", { required: true })}
            defaultChecked={false}
            value="grace"
            disabled={watch("tipoAnualidad") !== "diferida"}
            id="tipoOperacion4"
          />
          <label className="form-check-label" htmlFor="tipoOperacion4">Tiempo de gracia</label>
        </div>
      </div>
    </div>
  );
};
