import DataTable from "react-data-table-component";
import { useForm } from "react-hook-form";
import { paginationComponentOptions } from "../utils/paginationOptions";
import { capitalizacion, formatter } from "./../utils";
import { useState } from "react";
import {
  CapitalizationAnnuity,
  CapitalizationCheckOperation,
  CapitalizationFee,
  CapitalizationInterest,
  CapitalizationPeriod,
} from "../components/Capitalization";
import backgroundImage from '../assets/fondo4.avif'; // Importa la imagen

const columns = [
  {
    name: <span className="text-truncate h5">Periodo</span>,
    selector: (row) => row.periodo,
    center: true,
  },
  {
    name: <span className="text-truncate h5">Saldo</span>,
    selector: (row) => formatter.format(row.saldo),
    center: true,
  },
  {
    name: <span className="text-truncate h5">Interés</span>,
    selector: (row) => formatter.format(row.interes),
    center: true,
  },
  {
    name: <span className="text-truncate h5">Cuota</span>,
    selector: (row) => formatter.format(row.cuota),
    center: true,
  },
  {
    name: <span className="text-truncate h5">Incremento</span>,
    selector: (row) => formatter.format(row.capitalizacion),
    center: true,
  },
];

export const CapitalizationPage = () => {
  const [tablaCapitalizacion, setTablaCapitalizacion] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const capitalizationData = {
      cuota: getValues("tipoOperacion") === "cuota" ? "0" : data.cuota,
      periodo: {
        valor: getValues("tipoOperacion") === "periodo" ? "0" : data.periodo,
        periodo: data.periodo_tiempo,
      },
      interes: {
        interes: (data.interes / 100).toString(),
        tipo_tasa: data.tasa,
        periodo: data.interes_periodo,
        tipo_interes: data.pago,
      },
      anualidad:
        getValues("tipoOperacion") === "anualidad" ? "0" : data.anualidad,
    };
    setTablaCapitalizacion(capitalizacion(capitalizationData));
  };

  return (
    <div
      className="flex flex-wrap justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '150vh', // Ajusta la altura del contenedor para extender la imagen de fondo
      }}
    >
      <div className="container py-5">
        <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
          <h1 className="text-center text-info mb-3">Capitalización</h1>
          <div className="row">
            <div className="col-md-9 order-2 order-md-1">
              <CapitalizationInterest register={register} errors={errors} />
              <CapitalizationPeriod
                register={register}
                errors={errors}
                watch={watch}
              />
              {watch("tipoOperacion") !== "cuota" && (
                <CapitalizationFee register={register} errors={errors} />
              )}
              {watch("tipoOperacion") &&
                watch("tipoOperacion") !== "anualidad" && (
                  <CapitalizationAnnuity register={register} errors={errors} />
                )}
              <button type="submit" className="btn btn-info">
                Calcular
              </button>
            </div>
            <div className="col-md-3 order-1 order-md-2">
              <CapitalizationCheckOperation register={register} />
            </div>
          </div>
        </form>
        {tablaCapitalizacion.length > 0 && (
          <DataTable
            columns={columns}
            data={tablaCapitalizacion}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            className="custom-table" // Aplicamos la clase CSS aquí
          />
        )}
      </div>
    </div>
  );
};