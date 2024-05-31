import DataTable from "react-data-table-component";
import { paginationComponentOptions } from "./../utils/paginationOptions";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { amortizacion, formatter } from "../utils";
import {
  AmortizacionAnnuity,
  AmortizationCheckOperation,
  AmortizationFee,
  AmortizationInterest,
  AmortizationPeriod,
} from "../components/Amortization";
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
    name: <span className="text-truncate h5">Amortización</span>,
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
    watch,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const amortizationData = {
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
    setTablaAmortizacion(amortizacion(amortizationData));
  };

  return (
    <div
      className="flex flex-wrap"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center items-center p-6">
        <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2
              style={{
                textShadow:
                  "2px 2px 2px #00ffd2, -2px -2px 2px #00ffd2, 2px -2px 2px #00ffd2, -2px 2px 2px #00ffd2",
                color: 'white',
                textAlign: 'center',
              }}
            >
              AMORTIZACION
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
              <div className="row">
                <div className="col-md-9 order-2 order-md-1">
                  <AmortizationInterest register={register} errors={errors} />
                  <AmortizationPeriod
                    register={register}
                    errors={errors}
                    watch={watch}
                  />
                  {watch("tipoOperacion") !== "cuota" && (
                    <AmortizationFee register={register} errors={errors} />
                  )}
                  {watch("tipoOperacion") &&
                    watch("tipoOperacion") !== "anualidad" && (
                      <AmortizacionAnnuity register={register} errors={errors} />
                    )}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#FFA500', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                      CALCULAR
                    </button>
                  </div>
                </div>
                <div className="col-md-3 order-1 order-md-2">
                  <AmortizationCheckOperation register={register} />
                </div>
              </div>
            </form>
            {tablaAmortizacion.length > 0 && (
              <DataTable
                class
                responsive
                columns={columns}
                data={tablaAmortizacion}
                pagination
                paginationComponentOptions={paginationComponentOptions}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
