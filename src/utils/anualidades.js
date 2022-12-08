import { conversion_interes } from "./conversion_tasas";

const vp_anualidad_ord = (interes, periodo, cuota) =>
  cuota * ((1 - Math.pow(1 + interes, -periodo)) / interes);
const vp_cuota_ord = (interes, periodo, anualidad) =>
  (anualidad * interes) / (1 - Math.pow(1 + interes, periodo * -1));
const vp_periodo_ord = (interes, cuota, anualidad) =>
  Math.round(
    Math.log(1 / (1 - (anualidad / cuota) * interes)) / Math.log(1 + interes)
  );

const vf_anualidad_ord = (interes, periodo, cuota) =>
  cuota * ((Math.pow(1 + interes, periodo) - 1) / interes);
const vf_cuota_ord = (interes, periodo, anualidad) =>
  anualidad / ((Math.pow(1 + interes, periodo) - 1) / interes);
const vf_periodo_ord = (interes, cuota, anualidad) =>
  Math.round(
    Math.log(1 + (anualidad / cuota) * interes) / Math.log(1 + interes)
  );

const vp_anualidad_ant = (interes, periodo, cuota) =>
  cuota * (1 + (1 - Math.pow(1 + interes, -periodo + 1)) / interes);
const vp_cuota_ant = (interes, periodo, anualidad) =>
  anualidad / (1 + (1 - Math.pow(1 + interes, -periodo + 1)) / interes);
const vp_periodo_ant = (interes, cuota, anualidad) =>
  Math.round(
    1 -
      Math.log(1 - (anualidad * interes) / cuota + interes) /
        Math.log(1 + interes)
  );

const vf_anualidad_ant = (interes, periodo, cuota) =>
  vf_anualidad_ord(interes, periodo, cuota) * (1 + interes);
const vf_cuota_ant = (interes, periodo, anualidad) =>
  anualidad /
  (((Math.pow(1 + interes, periodo) - 1) / interes) * (1 + interes));
const vf_periodo_ant = (interes, cuota, anualidad) =>
  Math.round(
    Math.log((anualidad * interes) / (cuota * (1 + interes)) + 1) /
      Math.log(1 + interes)
  );

const vp_anualidad_dif = (interes, periodo, cuota, k) =>
  cuota *
  ((1 - Math.pow(1 + interes, -periodo)) / interes) *
  Math.pow(1 + interes, -k);

const vp_cuota_dif = (interes, periodo, anualidad, k) =>
  (anualidad * interes) /
  ((1 - Math.pow(1 + interes, -periodo)) * Math.pow(1 + interes, -k));

const vp_periodo_gracia_dif = (interes, cuota, periodo, anualidad) =>
  Math.round(
    -Math.log(
      anualidad / ((cuota * (1 - Math.pow(1 + interes, -periodo))) / interes)
    ) / Math.log(1 + interes)
  );
const vp_periodo_dif = (interes, cuota, anualidad, k) =>
  Math.round(
    -Math.log(
      (-anualidad * interes) / (cuota * Math.pow(1 + interes, -k)) + 1
    ) / Math.log(1 + interes)
  );

/*const vf_anualidad_dif = (interes, periodo, cuota, k) =>
  cuota *
  ((Math.pow(1 + interes, periodo) - 1) / interes) *
  Math.pow(1 + interes, -k);*/

export const anualidades = (o) => {
  let { tipo, interes, periodo, cuota, k, anualidad, salida } = o;
  //  const tipo_anualidad = ["ordinaria", "anticipada", "diferidad", "perpetua"];

  if (periodo.periodo === "0") periodo.periodo = interes.periodo;

  if (
    periodo.periodo !== interes.periodo ||
    interes.tipo_tasa !== "i" ||
    interes.tipo_interes !== "i"
  ) {
    console.log(o);
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
    interes.periodo = periodo.periodo;
  }

  // console.log(interes, periodo);

  switch (tipo) {
    case "ordinaria":
      return anualidad_ordinaria(salida, interes, periodo, cuota, anualidad);
    case "anticipada":
      return anualidad_anticipada(salida, interes, periodo, cuota, anualidad);
    case "diferida":
      return anualidad_diferida(salida, interes, periodo, cuota, k, anualidad);
    default:
      return null;
  }
};

const anualidad_ordinaria = (
  salida,
  interes,
  periodo,
  cuota,
  anualidad = "0"
) => {
  let aux = 0;
  interes.interes = parseFloat(interes.interes);
  periodo.valor = parseFloat(periodo.valor);
  cuota = parseFloat(cuota);
  anualidad = parseFloat(anualidad);

  console.log(interes.interes, periodo.valor, cuota, anualidad);

  if (
    interes.interes !== 0 &&
    periodo.valor !== 0 &&
    cuota !== 0 &&
    anualidad === 0
  )
    aux =
      salida === "vp"
        ? vp_anualidad_ord(interes.interes, periodo.valor, cuota)
        : vf_anualidad_ord(interes.interes, periodo.valor, cuota);
  if (
    interes.interes !== 0 &&
    periodo.valor !== 0 &&
    cuota === 0 &&
    anualidad !== 0
  )
    aux =
      salida === "vp"
        ? vp_cuota_ord(interes.interes, periodo.valor, anualidad)
        : vf_cuota_ord(interes.interes, periodo.valor, anualidad);

  if (
    interes.interes !== 0 &&
    periodo.valor === 0 &&
    cuota !== 0 &&
    anualidad !== 0
  )
    aux =
      salida === "vp"
        ? vp_periodo_ord(interes.interes, cuota, anualidad)
        : vf_periodo_ord(interes.interes, cuota, anualidad);
  return aux;
};

const anualidad_anticipada = (
  salida,
  interes,
  periodo,
  cuota,
  anualidad = "0"
) => {
  let aux = 0;
  interes.interes = parseFloat(interes.interes);
  periodo.valor = parseFloat(periodo.valor);
  cuota = parseFloat(cuota);
  anualidad = parseFloat(anualidad);

  console.log(interes.interes, periodo.valor, cuota, anualidad);

  if (
    interes.interes !== 0 &&
    periodo.valor !== 0 &&
    cuota !== 0 &&
    anualidad === 0
  )
    aux =
      salida === "vp"
        ? vp_anualidad_ant(interes.interes, periodo.valor, cuota)
        : vf_anualidad_ant(interes.interes, periodo.valor, cuota);
  if (
    interes.interes !== 0 &&
    periodo.valor !== 0 &&
    cuota === 0 &&
    anualidad !== 0
  )
    aux =
      salida === "vp"
        ? vp_cuota_ant(interes.interes, periodo.valor, anualidad)
        : vf_cuota_ant(interes.interes, periodo.valor, anualidad);

  if (
    interes.interes !== 0 &&
    periodo.valor === 0 &&
    cuota !== 0 &&
    anualidad !== 0
  )
    aux =
      salida === "vp"
        ? vp_periodo_ant(interes.interes, cuota, anualidad)
        : vf_periodo_ant(interes.interes, cuota, anualidad);
  return aux;
};

const anualidad_diferida = (
  salida,
  interes,
  periodo,
  cuota,
  k = "0",
  anualidad = "0"
) => {
  let aux = 0;
  interes.interes = parseFloat(interes.interes);
  periodo.valor = parseFloat(periodo.valor);
  cuota = parseFloat(cuota);
  anualidad = parseFloat(anualidad);
  k = parseFloat(k);

  console.log(interes.interes, periodo.valor, cuota, anualidad, k);

  if (
    interes.interes !== 0 &&
    periodo.valor !== 0 &&
    cuota !== 0 &&
    anualidad === 0 &&
    k !== 0
  )
    aux =
      salida === "vp"
        ? vp_anualidad_dif(interes.interes, periodo.valor, cuota, k)
        : vp_anualidad_dif(interes.interes, periodo.valor, cuota, k);
  if (
    interes.interes !== 0 &&
    periodo.valor !== 0 &&
    cuota === 0 &&
    anualidad !== 0 &&
    k !== 0
  )
    aux =
      salida === "vp"
        ? vp_cuota_dif(interes.interes, periodo.valor, anualidad, k)
        : vp_cuota_dif(interes.interes, periodo.valor, anualidad, k);

  if (
    interes.interes !== 0 &&
    periodo.valor === 0 &&
    cuota !== 0 &&
    anualidad !== 0 &&
    k !== 0
  )
    aux =
      salida === "vp"
        ? vp_periodo_dif(interes.interes, cuota, anualidad, k)
        : vp_periodo_dif(interes.interes, cuota, anualidad, k);

  if (
    interes.interes !== 0 &&
    periodo.valor !== 0 &&
    cuota !== 0 &&
    anualidad !== 0 &&
    k === 0
  )
    aux =
      salida === "vp"
        ? vp_periodo_gracia_dif(
            interes.interes,
            cuota,
            periodo.valor,
            anualidad
          )
        : vp_periodo_gracia_dif(
            interes.interes,
            cuota,
            periodo.valor,
            anualidad
          );

  return aux;
};
