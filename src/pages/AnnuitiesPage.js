import { useForm } from "react-hook-form";

export const AnnuitiesPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const onSubmit = ({
    vp,
    tipo,
    interes,
    tipo_tasa,
    interes_periodo,
    tipo_interes,
    valor,
    tipo_periodo,
    cuota,
    anualidad,
  }) => {
    const data = {
      salida: vp,
      tipo: tipo,
      interes: {
        interes: interes,
        tipo_tasa: tipo_tasa,
        periodo: interes_periodo,
        tipo_interes: tipo_interes,
      },
      periodo: {
        valor: valor,
        periodo: tipo_periodo,
      },
      cuota: cuota,
      k: "0",
      anualidad: anualidad,
    };
    console.log(data);
  };

  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="mb-3">Anualidad</h4>
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6">
            <input
              type="number"
              className={`form-control ${errors.anualidad ? "is-invalid" : ""}`}
              placeholder="Digite la anualidad"
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
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${errors.tipo ? "is-invalid" : ""}`}
              {...register("tipo", {
                required: "El tipo de anualidad es obligatorio.",
              })}
            >
              <option value="">Seleccione el tipo de anualidad</option>
              <option value="ordinaria">Ordinaria o vencida</option>
              <option value="anticipada">Anticipada</option>
              <option value="diferida">Diferida</option>
            </select>
            {errors.tipo && (
              <div className="invalid-feedback">{errors.tipo.message}</div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${errors.vp ? "is-invalid" : ""}`}
              {...register("vp", {
                required: "El tipo de valor es obligatorio.",
              })}
            >
              <option value="">Seleccione el tipo de valor</option>
              <option value="vp">Valor actual (VP)</option>
              <option value="vf">Valor futuro (VF)</option>
            </select>
            {errors.vp && (
              <div className="invalid-feedback">{errors.vp.message}</div>
            )}
          </div>
        </div>
        <h4 className="mb-3">Interes</h4>
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6">
            <input
              type="number"
              className={`form-control ${errors.interes ? "is-invalid" : ""}`}
              placeholder="Digite el interes (%)"
              min="1"
              max="100"
              step="0.001"
              {...register("interes", {
                valueAsNumber: true,
                required: "El interes es obligatorio.",
                min: {
                  value: 1,
                  message: "El interes debe ser mayor o igual a 1.",
                },
                max: {
                  value: 100,
                  message: "El interes debe ser menor o igual a 100.",
                },
              })}
            />
            {errors.interes && (
              <div className="invalid-feedback">{errors.interes.message}</div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${errors.tipo_tasa ? "is-invalid" : ""}`}
              {...register("tipo_tasa", {
                required: "El tipo de tasa es obligatorio.",
              })}
            >
              <option value="">Seleccione tipo de tasa</option>
              <option value="i">Efectivo</option>
              <option value="i">Periodico</option>
              <option value="j">Nominal</option>
              <option value="j">Capitalizable</option>
              <option value="j">Convertible</option>
              <option value="j">Vencida</option>
            </select>
            {errors.tipo_tasa && (
              <div className="invalid-feedback">{errors.tipo_tasa.message}</div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${
                errors.interes_periodo ? "is-invalid" : ""
              }`}
              {...register("interes_periodo", {
                required: "La periocidad de la tasa es obligatoria.",
              })}
            >
              <option value="">Seleccione periocidad de la tasa</option>
              <option value="1">Mensual</option>
              <option value="2">Bimestral</option>
              <option value="3">Trimestral</option>
              <option value="4">Cuatrimestral</option>
              <option value="6">Semestral</option>
              <option value="12">Anual</option>
            </select>
            {errors.interes_periodo && (
              <div className="invalid-feedback">
                {errors.interes_periodo.message}
              </div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${
                errors.tipo_interes ? "is-invalid" : ""
              }`}
              {...register("tipo_interes", {
                required: "La forma de pago a los interes es obligatoria.",
              })}
            >
              <option value="">Seleccione forma de pagos a los interes</option>
              <option value="i">Ordinaria</option>
              <option value="ia">Anticipada</option>
            </select>
            {errors.tipo_interes && (
              <div className="invalid-feedback">
                {errors.tipo_interes.message}
              </div>
            )}
          </div>
        </div>
        <h4 className="mb-3">Numero de periodos</h4>
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6">
            <input
              type="number"
              className={`form-control ${errors.valor ? "is-invalid" : ""}`}
              placeholder="Digite el numero de periodos"
              min="1"
              {...register("valor", {
                valueAsNumber: true,
                required: "El numero de periodos es obligatorio.",
                min: {
                  value: 1,
                  message: "El numero periodos debe ser mayor o igual a 1.",
                },
              })}
            />
            {errors.valor && (
              <div className="invalid-feedback">{errors.valor.message}</div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${
                errors.tipo_periodo ? "is-invalid" : ""
              }`}
              {...register("tipo_periodo", {
                required: "La periocidad de la tasa es obligatoria.",
              })}
            >
              <option value="">Seleccione el tipo de periodo</option>
              <option value="1">Mensual</option>
              <option value="2">Bimestral</option>
              <option value="3">Trimestral</option>
              <option value="4">Cuatrimestral</option>
              <option value="6">Semestral</option>
              <option value="12">Anual</option>
            </select>
            {errors.tipo_periodo && (
              <div className="invalid-feedback">
                {errors.tipo_periodo.message}
              </div>
            )}
          </div>
        </div>
        <h4 className="mb-3">Cuota</h4>
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6">
            <input
              type="number"
              className={`form-control ${errors.cuota ? "is-invalid" : ""}`}
              placeholder="Digite el numero de cuotas"
              min="1"
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
        </div>
        <button type="submit" className="btn btn-info">
          Calcular
        </button>
      </form>
    </div>
  );
};
