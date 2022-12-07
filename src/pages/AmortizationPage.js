import DataTable from "react-data-table-component";
import { paginationComponentOptions } from "./../utils/paginationOptions";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { amortizacion, formatter } from "../utils";

const columns = [
  {
    name: <h5>hola</h5>,
    selector: (row) => row.periodo,
    center: true,
  },
  {
    name: "Saldo",
    selector: (row) => formatter.format(row.saldo),
    center: true,
  },
  {
    name: "Interés",
    selector: (row) => formatter.format(row.interes),
    center: true,
  },
  {
    name: "Cuota",
    selector: (row) => formatter.format(row.cuota),
    center: true,
  },
  {
    name: "Amortización",
    selector: (row) => formatter.format(row.amortizacion),
    center: true,
  },
];

export const AmortizationPage = () => {
  const [tablaAmortizacion, setTablaAmortizacion] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({
    cuota,
    periodo,
    periodo_tiempo,
    interes,
    tasa,
    interes_periodo,
    pago,
    anualidad,
  }) => {
    const data = {
      cuota: cuota,
      periodo: {
        valor: periodo,
        periodo: periodo_tiempo,
      },
      interes: {
        interes: (interes / 100).toString(),
        tipo_tasa: tasa,
        periodo: interes_periodo,
        tipo_interes: pago,
      },
      anualidad: anualidad,
    };
    setTablaAmortizacion(amortizacion(data));
  };

  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
        <h4 className="mb-3">Interes</h4>
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6">
            <input
              type="number"
              className={`form-control ${
                errors.interes ? "is-invalid" : undefined
              }`}
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
              className={`form-select ${
                errors.tasa ? "is-invalid" : undefined
              }`}
              {...register("tasa", {
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
            {errors.tasa && (
              <div className="invalid-feedback">{errors.tasa.message}</div>
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
              className={`form-select ${errors.pago ? "is-invalid" : ""}`}
              {...register("pago", {
                required: "La forma de pago a los interes es obligatoria.",
              })}
            >
              <option value="">Seleccione forma de pagos a los interes</option>
              <option value="i">Ordinaria</option>
              <option value="ia">Anticipada</option>
            </select>
            {errors.pago && (
              <div className="invalid-feedback">{errors.pago.message}</div>
            )}
          </div>
        </div>
        <h4 className="mb-3">Periodo</h4>
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6">
            <input
              type="number"
              className={`form-control ${
                errors.periodo ? "is-invalid" : undefined
              }`}
              placeholder="Digite el número de periodos"
              min="1"
              {...register("periodo", {
                valueAsNumber: true,
                required: "El numero de periodos es obligatorio.",
                min: {
                  value: 1,
                  message: "El numero periodos debe ser mayor o igual a 1.",
                },
              })}
            />
            {errors.periodo && (
              <div className="invalid-feedback">{errors.periodo.message}</div>
            )}
          </div>
          <div className="mb-3 col-lg-3 col-md-6">
            <select
              className={`form-select ${
                errors.periodo_tiempo ? "is-invalid" : undefined
              }`}
              {...register("periodo_tiempo", {
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
            {errors.periodo_tiempo && (
              <div className="invalid-feedback">
                {errors.periodo_tiempo.message}
              </div>
            )}
          </div>
        </div>
        <h4 className="mb-3">Cuota</h4>
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6">
            <input
              type="number"
              className={`form-control ${
                errors.cuota ? "is-invalid" : undefined
              }`}
              placeholder="Digite la cuota"
              min="0"
              step="0.001"
              {...register("cuota", {
                valueAsNumber: true,
                required: "La cuota es obligatoria.",
                min: {
                  value: 0,
                  message: "La cuota debe ser mayor o igual a 0.",
                },
              })}
            />
            {errors.cuota && (
              <div className="invalid-feedback">{errors.cuota.message}</div>
            )}
          </div>
        </div>
        <h4 className="mb-3">Anualidad</h4>
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6">
            <input
              type="number"
              className={`form-control ${
                errors.anualidad ? "is-invalid" : undefined
              }`}
              placeholder="Digite la cuota"
              min="0"
              {...register("anualidad", {
                valueAsNumber: true,
                required: "La anualidad es obligatoria.",
                min: {
                  value: 0,
                  message: "La anualidad debe ser mayor o igual a 0.",
                },
              })}
            />
            {errors.anualidad && (
              <div className="invalid-feedback">{errors.anualidad.message}</div>
            )}
          </div>
        </div>
        <button type="submit" className="btn btn-info">
          Convertir
        </button>
      </form>
      {tablaAmortizacion.length > 0 && (
        <DataTable
          columns={columns}
          data={tablaAmortizacion}
          pagination
          paginationComponentOptions={paginationComponentOptions}
        />
      )}
    </div>
  );
};
