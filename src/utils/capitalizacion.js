import { conversion_interes } from "./conversion_tasas";

const cuota_capitalizacion = (interes, periodo, anualidad) =>
  anualidad / ((Math.pow(1 + interes, periodo) - 1) / interes);

export const capitalizacion = (objeto) => {
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
    cuota = parseFloat(
      cuota_capitalizacion(interes_f, periodo.valor, anualidad).toFixed(4)
    );

  let array = [];
  for (let i = 0; i <= periodo.valor; i++) {
    if (i === 0) {
      array.push({
        periodo: 0,
        saldo: 0,
        interes: "",
        cuota: "",
        capitalizacion: "",
      });
    } else {
      array.push({
        ...{ periodo: i },
        ...calcular_capitalizacion(array[i - 1], interes_f, cuota),
      });
    }
  }
  /* Printing the array to the console. */
  return array;
};

const calcular_capitalizacion = (periodo_anterior, interes, cuota) => {
  const aux = {};
  const { saldo } = periodo_anterior;

  aux["cuota"] = cuota;
  aux["interes"] = saldo * interes;
  aux["capitalizacion"] = aux["cuota"] + aux["interes"];

  aux["saldo"] = saldo + aux["capitalizacion"];

  return aux;
};

