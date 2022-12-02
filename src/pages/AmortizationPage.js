import DataTable from "react-data-table-component";
import { paginationComponentOptions } from "./../utils/paginationOptions";

const columns = [
  {
    name: "Periodo",
    selector: (row) => row.periodo,
  },
  {
    name: "Saldo",
    selector: (row) => row.saldo,
  },
  {
    name: "Interés",
    selector: (row) => row.interes,
  },
  {
    name: "Cuota",
    selector: (row) => row.cuota,
  },
  {
    name: "Amortización",
    selector: (row) => row.amortizacion,
  },
];

const data = [
  {
    id: 1,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 2,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },

  {
    id: 3,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 4,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 5,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 6,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 7,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 8,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 9,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 10,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 11,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 12,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
  {
    id: 13,
    periodo: "0",
    saldo: "10000000",
    interes: "",
  },
];

export const AmortizationPage = () => {
  return (
    <div className="container py-5">
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  );
};
