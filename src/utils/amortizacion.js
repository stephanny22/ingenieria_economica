import { conversion_interes } from "./conversion_tasas";

const cuota_amortización = (interes, periodo, anualidad) =>
  anualidad / ((1 - Math.pow(1 + interes, -periodo)) / interes);

const anualidad_amortizacion = (interes, periodo, cuota) =>
  cuota * ((1 - Math.pow(1 + interes, -periodo)) / interes);

const periodo_amortizacion = (interes, anualidad, cuota) =>
  Math.round(
    Math.log(1 / (1 - (anualidad / cuota) * interes)) / Math.log(1 + interes)
  );

export const amortizacion = (objeto) => {
  let { cuota, periodo, interes, anualidad } = objeto;
  if (periodo.periodo === "0") periodo.periodo = interes.periodo;

  if (
    periodo.periodo !== interes.periodo ||
    interes.tipo_tasa !== "i" ||
    interes.tipo_interes !== "i"
  ) {
    const objeto = {
      entrada: interes,
      conversion: {
        tipo_tasa: "i",
        periodo: periodo.periodo,
        tipo_interes: "i",
      },
    };
    interes.interes = conversion_interes(objeto);
    interes.tipo_tasa = "i";
    interes.tipo_interes = "i";
  }

  const interes_f = parseFloat(interes.interes);
  periodo.valor = parseFloat(periodo.valor);
  cuota = parseFloat(cuota);
  anualidad = parseFloat(anualidad);

  if (cuota === 0)
    cuota = cuota_amortización(interes_f, periodo.valor, anualidad);

  if (periodo.valor === 0) {
    periodo.valor = periodo_amortizacion(interes_f, anualidad, cuota);
  }
  if (anualidad === 0) {
    anualidad = anualidad_amortizacion(interes_f, periodo.valor, cuota);
  }

  let array = [];
  for (let i = 0; i <= periodo.valor; i++) {
    if (i === 0) {
      array.push({
        periodo: 0,
        saldo: anualidad,
        interes: "",
        cuota: "",
        amortizacion: "",
      });
    } else {
      array.push({
        ...{ periodo: i },
        ...calcular_amortizacion(array[i - 1], interes_f, cuota),
      });
    }
  }
  return array;
};

const calcular_amortizacion = (periodo_anterior, interes, cuota) => {
  const aux = {};
  const { saldo } = periodo_anterior;

  aux["cuota"] = cuota;
  aux["interes"] = saldo * interes;
  aux["amortizacion"] = aux["cuota"] - aux["interes"];

  if (saldo - aux["amortizacion"] >= -0.1 && saldo - aux["amortizacion"] <= 0.1)
    aux["saldo"] = 0;
  else aux["saldo"] = saldo - aux["amortizacion"];

  return aux;
};
